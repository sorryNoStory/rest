import React from 'react';
import './App.css';
import Slider from './Slider';
import bottleImg from './events/bottle.png';
import roseImg from './events/rose.png';
import cakeImg from './events/cake.png';
import charityImg from './events/charity.png';
import Book from './Book';



function Home() {

    return(
<div>
        <div className='homeCont'>

        <div className='heading'>
  <h1>Discover authentic and fusion Italian cuisine. </h1>
  <h2>Award-winning fine dining</h2>
<Book />
</div>



</div>

<div className='sliderCont'>
<h2 className='headingThree'>Interior and vibe</h2>
<div>
<Slider />
</div>
</div>


<div className='events'>
<h2 className='headingThree'>Uncompromising service level</h2>

<div className='listEvents'>

    <div className='event'>
        <img className='eventsImg' src={roseImg} alt="rose" />
        <h3>Romantic date</h3>
        <p>Treat your significant other with an unforgettable date. We organize everything.</p>
    </div>

    <div className='event'>
        <img className='eventsImg' src={cakeImg} alt="cake" />
        <h3>B-day party</h3>
        <p>Celebrate your special day with your family and friends. Free cake and champagne!</p>
    </div>

    <div className='event'>
        <img className='eventsImg' src={bottleImg} alt="bottle" />
        <h3>Events party</h3>
        <p>Christmas party, business meeting? Let us know, we will arrange everything.</p>
    </div>

    <div className='event'>
        <img className='eventsImg' src={charityImg} alt="charity" />
        <h3>Charity events</h3>
        <p>We will help you organize any event at the highest level. Your guests will be satisfied.</p>
    </div>

</div>
<div className='btnHome'>
<Book />
</div>
</div>


</div>
    
    )
}

export default Home;