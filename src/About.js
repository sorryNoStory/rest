import chef from "./aboutImg/chef.png";
import hands from "./aboutImg/hands.png";


function About() {

    return(

<div className='aboutCont'>
    <div className="headingAbout"><h2>The Story</h2></div>


    <div className="chef">
        <img className="aboutImg" src={chef} alt="chef"/> 
        <div className="aboutText">
        <h3>Chefs Story</h3>
        <h4>FROM NAPLES WITH LOVE</h4>
        <p>In the south of Italy cooking starts at an early age. Kids are always around mothers, aunts and grandmothers while preparing food. Andrea has fond childhood memories of making gnocchi with his mum and brother on the kitchen table, pressing out the little potato and flour dumpings with their small fingers. The way they made the gnocchi then is the same technique Andrea uses today.</p></div>
        </div>

<div className="story">
    <div className="aboutText">
    <h3>Traditional Methodology</h3>
    <h4>CONTEMPORARY FLAVOURS</h4>
    <p>Andrea's cocoa ravioli filled with smoked salmon shows his fresh approach to cooking. Whilst he uses a traditional cooking method the contemporary combination of flavours work perfectly to create a unique dish.<br/><br/>
His mum was very sceptical when he produced this dish but has since been converted. Not sweet, the cocoa adds a delicate flavour and richness to the pasta which beautifully compliments the fish, the colour is fabulous too!</p>
</div>
<img className="aboutImg" src={hands} alt="hands" /> 
</div>


    </div>

    )
}

export default About;