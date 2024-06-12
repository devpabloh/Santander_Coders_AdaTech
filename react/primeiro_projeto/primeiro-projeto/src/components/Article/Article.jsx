import React from "react";
import DesignDashboard from "../../assets/images/dashboard.png"
import "../Article/style.css"

export class Article extends React.Component{
    render(){
        return (
            <article id="article">
                <img src={DesignDashboard} alt="" className="imgDesignDashBoard" />

                <div className="article-infos">
                    <h2>Designing Dashboards</h2>
                    <h3>Nasa</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, tempore recusandae quisquam qui dicta, sapiente at repellat veritatis cumque quos ab dignissimos maiores dolores porro quidem, sint eos impedit quasi.</p>
                </div>
            </article>
        )
    }

}

