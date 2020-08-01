import React from "react";

function ButtonLink(props) {
    // props => { className: "O que tem que passar", href: "/" }

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;