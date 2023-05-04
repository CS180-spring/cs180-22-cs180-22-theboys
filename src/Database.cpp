#include <iostream> 
#include <vector>
#include <string>
#include <fstream>
#include <cstring>

#include <pqxx/pqxx>

using namespace std;

int main(){

    ifstream input("login.txt");

    vector<string> credentials;

    while(!input.eof()){

        string line;
        getline(input, line);
        credentials.push_back(line);

    }

    string connection_string("host=localhost port = 5432 dbname=sales_db2 user=" + credentials[0] + " password=" + credentials[1]);

    pqxx::connection con(connection_string.c_str());

    pqxx::work wrk(con);

    pqxx::result res = wrk.exec("SELECT * FROM customers");

    for(int i = 0; i < res.size(); i++){

        cout << "First Name: " << res[i][0] << " Last Name: " << res[i][1] << endl;
    }

    return 0;
}
