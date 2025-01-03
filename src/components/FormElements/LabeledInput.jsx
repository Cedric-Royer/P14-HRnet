import React from "react";

function LabeledInput({id, label, type}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
        </>
    )
}

export default LabeledInput