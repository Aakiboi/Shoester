import "./styles/content.css"
import sustainablepng from './assets/ecological.png'
import comfortablepng from './assets/comfortable.png'
import affordablepng from './assets/affordable.png'

function Content() {
    return (
        <section className="content">
            <div className="container-contents">
                <h1 className="header"> Why Us?</h1>
                <div className="sustainable">
                    <h1 id="content-header">Sustainable</h1>
                    <div className="text-image-container">
                        <div className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <img src={sustainablepng} alt="sustainable" id="content-image"/>
                    </div>
                </div>
                <div className="comfortable">
                    <h1 id="content-header">Comfortable</h1>
                    <div className="text-image-container">
                        <div className="content-text">Ut sit amet imperdiet nisl. Mauris elementum dolor in risus tristique luctus. 
                        Quisque aliquam ipsum leo, eget convallis felis fermentum sed. 
                        Nullam a finibus quam. Quisque porta ante erat, non posuere neque egestas at.
                        </div>
                        <img src={comfortablepng} alt="comfortable" id="content-image"/>
                    </div>
                </div>
                <div className="affordable">
                    <h1 id="content-header">Affordable</h1>
                    <div className="text-image-container">
                        <div className="content-text">Fusce cursus condimentum erat vel rutrum. Suspendisse maximus elit non egestas sodales. 
                        Aliquam ac massa finibus, eleifend arcu id, iaculis velit.
                        </div>
                        <img src={affordablepng} alt="comfortable" id="content-image"/>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Content;