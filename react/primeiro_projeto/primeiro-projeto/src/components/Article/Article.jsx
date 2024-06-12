import React from "react";
import DesignDashboard from "../../assets/images/dashboard.png"
import "../Article/style.css"

export class Article extends React.Component{
    render(){
        return (
            <article id="article">
                <img src={DesignDashboard} alt="" className="imgDesignDashBoard" />

                <div className="article-infos">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>
                    <p>{this.props.description}</p>
                </div>
            </article>
        )
    }

}

