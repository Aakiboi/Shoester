import "./styles/shoe.css"

const shoe = (props) => {
    console.log(props.src)
    return (
        <div className="outer">
            <div className="pink-back">
                <div className="inner">
                    <img src={props.src} alt={props.alt} id={props.id}/>
                    <div className="shoe-text">
                        <div className="brand">{props.brand}</div>
                        <div className="price">{props.price}</div>
                    </div>
                    <div className="shoe-type"> {props.type}</div>
                </div>             
            </div>
        </div>
    );
}

export default shoe;
