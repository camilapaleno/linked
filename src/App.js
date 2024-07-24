import Spline from '@splinetool/react-spline';
import './App.css';

export default function App() {
  return (
    
    <div>
      <div className='nav'>
        <ul>
          <li> <span><b>&#x2726; linked</b> social media</span> management</li>
          <li>about</li>
          <li>services</li>
          <li>contact</li>
        </ul>
      </div>
      <div className='hero'>

        <div className='text'>
          <h1>Linked to the world</h1>
          <p>We navigate the social web, weaving compelling stories that resonate with audiences, leaving an indelible mark on the digital landscape.</p>
          <span href='#'>Reach Out to Us &#x2726;</span> <span href='#'>Learn More &#x2726;</span>
{/*           <br/>
          <div>
            <span>300+</span>
            <p>Feeds Curated</p>
          </div>
          <div>
            <span>20+</span>
            <p>Years Experience</p>
          </div>
          <div>
            <span>50+</span>
            <p>Partners</p>
          </div> */}
        </div>

        <div className='spline-container'>
          <div className='spline'>
          <Spline scene="https://prod.spline.design/hwzwFFojQrzv8VBF/scene.splinecode" />
          </div>
        </div>
      
      </div>
    </div>

  );
}