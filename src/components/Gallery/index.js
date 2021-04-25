import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";
// gallery component
function Gallery(props) {
    // new object that set its name and description to values for the Commercial page. 
    const currentCategory = {
        name: "commercial",
        description:
          "Photos of grocery stores, food trucks, and other commercial projects",
      };
    return (
        // // capitalizeFirstLetter() function to capitalize the name value when it's rendered
        <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
        <div>
            <img
              src={photo} alt="Commercial Example" className="img-thumbnail mx-1"/>
        </div>
      </section>
    );
  }


export default Gallery;