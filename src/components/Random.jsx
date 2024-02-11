function Random(props) {
    const min = Number(props.min);
    const max = Number(props.max);
    const rngNum = Math.floor((Math.random()*max))+min;
    return(
        <div>
            <p>{`Random value between ${min} and ${max} => ${rngNum}`}</p>
        </div>
    )
}

export default Random;