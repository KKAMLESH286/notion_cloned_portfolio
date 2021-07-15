import hero_img from './hero_img.png';
import './hero.css';


function Hero(){
    return (
        <div className='hero-one'>
        <div className='hero'>
            <p> Support executive turned self taught Front end developer. I'm best known for my technical knowledge and desire to build things from scratch. I follow balanced approach & practical ideas to build user centric & Business centric interfaces.</p>
        <img src={hero_img} className="App-logo" alt="logo" />

        </div>
        </div>
    )
}

export default Hero;