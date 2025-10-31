import React from 'react'

const Hoc = (Magic) => {

    function rio() {
        return <Magic data={{ name: "karthi" }}></Magic>
    }
    return rio
}

export default Hoc