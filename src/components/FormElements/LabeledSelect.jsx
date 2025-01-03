import React from "react";

function LabeledSelect({name, id, label, children}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select name={name} id={id}>
                {children}
            </select>
        </>
    )
}

export default LabeledSelect