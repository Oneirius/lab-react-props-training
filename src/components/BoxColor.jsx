import "./BoxColor.css";

function BoxColor(props) {

    const hexValue = rgbToHex(props.r, props.g, props.b)

    function propToHex(p) {
        let hex = Number(p).toString(16);
        return hex.length == 1? "0"+hex: hex; 
    }

    function rgbToHex(r, g, b) {
        return "#" + propToHex(r)+ propToHex(g) + propToHex(b);
    }
    
    const boxStyle = {
        backgroundColor: hexValue
    }

    return(
        <div className="box-color" style={boxStyle}>
            <p>rgb({`${props.r}, ${props.g}, ${props.b}`})</p>
            <p>{hexValue}</p>
            
        </div>
    )
}

export default BoxColor;