import Shoes from './oneshoe';
import "./styles/collections.css"

function Collections() {
    return (
        <><div className="collection">Collections</div>
        <section className="collections">
            <Shoes src={require("./assets/nikemenscourt.png")} alt="nikemenscourt" brand="Nike" price="$200" type="Men's Court" id="court" />
            <Shoes src={require("./assets/nikeairforce1.png")} alt="nikeairforce1" brand="Nike" price="$200" type="Air Force 1" id="air" />
            <Shoes src={require("./assets/nikeairjordanretro1high.png")} alt="nikeairjordanretro1high" brand="Nike" price="$200" type="Air Jordan Retro 1 High" id="jordan" />
        </section></>

        
    );
}

export default Collections;