import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
// about component
function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>Anim laboris ad tempor ullamco exercitation consequat commodo sit reprehenderit elit in occaecat mollit non. Elit nisi adipisicing consectetur officia eiusmod sint minim Lorem. Culpa fugiat irure magna tempor excepteur consequat anim et fugiat dolor occaecat quis officia sit. Ipsum sit voluptate velit et elit non.</p>
            </div>
        </section>
        
    );
}

export default About;