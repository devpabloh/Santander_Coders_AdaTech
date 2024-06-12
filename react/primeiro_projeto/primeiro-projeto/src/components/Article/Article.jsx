import React from "react";
import "../Article/style.css"

export class Article extends React.Component{
    render(){
        return (
            <article id="article">
                <img style={{width: "250px", height: "250px"}} src={this.props.thumbnail} alt={this.props.title}/>

                <div className="article-infos">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>
                    <p>{this.props.description}</p>
                </div>
            </article>
        )
    }

}

