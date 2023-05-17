import React from "react";
import '../Styles/SiteFooterStyles.css'

export default function SiteFooter()
{
    return(
        <div className="site-footer">
            <div className="footer-divider-bar"></div>
            <div className="footer-items-row">
                <div className="footer-column">
                    <div className="title-text" style={{textAlign: 'center'}}>{"CUSTOMER SERVICE"}</div>
                    <div className="footer-column-bar"></div>
                    <div className="title-text">{"About"}</div>
                    <div className="title-text">{"Contact"}</div>
                    <div className="title-text">{"News & Events"}</div>
                    <div className="title-text">{"Returns"}</div>
                </div>

                <div className="footer-column">
                    <div className="title-text" style={{textAlign: 'center'}}>{"VISIT OUR STORE"}</div>
                    <div className="footer-column-bar"></div>
                    <div className="title-text">{"900 University Ave."}</div>
                    <div className="title-text">{"Riverside, CA"}</div>
                    <div className="title-text">{"555-555-5555"}</div>
                    <div style = {{marginTop: '10px', marginBottom: '10px'}}></div>

                    <div className="title-text">{"MON-FRI 9:00-8:00"}</div>
                    <div className="title-text">{"SAT 10:00-7:00"}</div>
                    <div className="title-text">{"SUN 10:00-6:00"}</div>
                </div>

                <div className="footer-column">
                    <div className="title-text" style={{textAlign: 'center'}}>{"CONNECT WITH US"}</div>
                    <div className="footer-column-bar"></div>
                    
                </div>

            </div>
        </div>
        

    );
}