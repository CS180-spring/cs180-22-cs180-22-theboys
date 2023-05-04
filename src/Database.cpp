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

    return 0;
}
