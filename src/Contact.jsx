import './css/contact.css'

export default function Contact() {


  return <>
    <div className="contact-container">
      <div className="home-link">
        <a  href="/">House</a>
      </div>
      <div className="contact-card">
        <div className="contact-card-title">
          <h2>contact</h2>
        </div>
        <div className="contact-card-person">
          <p className='name'>Jim Kettelkamp</p>
          <a href='tel:5632654389' className='number'><span className='color-num'>563</span>-<span className='color-num'>265</span>-<span className='color-num'>4389</span></a>
        </div>
        <div className="contact-card-person">
          <p className='name'>Shellie Kettelkamp</p>
          <a href='tel:3199301500' className='number'><span className='color-num'>319</span>-<span className='color-num'>930</span>-<span className='color-num'>1500</span></a>
        </div>
      </div>
    </div>

  </>
}
