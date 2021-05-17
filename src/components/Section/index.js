import React from 'react';
import './style.css';

function Section(props) {
    return (
        <div className={`section ${props.section}`}>
            <div className="section--team--area">
                <div className="section--title">{props.title}</div>
                <div className="section--desc">{props.subTitle}</div>
                <div className="section--body">{props.children}</div>
            </div>
        </div>
    );
}

export default Section;
