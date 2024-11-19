import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaLanguage } from 'react-icons/fa';
import { Link } from "react-router-dom"
import spain from "../images/Algeria.png"
import uk from "../images/uk.png"
import { useFlags } from '../useFlags';

export const Home = () => {
  const [isLanguageToggled, setIsLanguageToggled] = useState(false)
  const {language, changeLanguage} = useFlags()
  const handleChange = (e)=>{
    changeLanguage(e.target.value)
    setIsLanguageToggled(false)
  }

  return (
      <div className='home-cont'>
        <div className='title-cont'>
            <h1 className='title'>InTexT English</h1>
            <p>
              {language === 'english' ? 'Guess the country flags!' : 'تخمين أعلام الدول!'}
            </p>
        </div>
        <div className='logos'>
          <div className='social-media'> 
      play_c1
          </div>
          <div className='languages'>
            <button style={{border:"none", backgroundColor:"transparent"}} onClick={()=>setIsLanguageToggled(prev=>!prev)}>
              <FaLanguage className='home-logo translate-logo'/>
            </button>
            <div className='language-menu' style={{visibility: isLanguageToggled ? 'visible' : 'hidden', opacity: isLanguageToggled ? '1' : '0'}}>
              <div>
                <input type='radio' name='language' id='english' onChange={handleChange} value='english'/>
                <label htmlFor='english' className={language === 'english' ? 'selected-language' : ''}>
                  <img src={uk} className='mini-img'/>{language === 'english' ? 'English' : 'Inglés'}
                </label>
              </div>
              <div>
                <input type='radio' name='language' id='spanish' onChange={handleChange} value='spanish'/>
                <label htmlFor='spanish' className={language === 'spanish' ? 'selected-language' : ''}>
                  <img src={spain} className='mini-img'/>{language === 'english' ? 'Spanish' : 'Arabic'}
                </label>
              </div>
            </div>
          </div>
        </div>
        <Link className='home-links all' to='/World'><button>{language === 'english' ? 'World' : 'عالم'}</button></Link>
        <Link className='home-links europe' to='/Europe'><button>{language === 'english' ? 'Europe' : 'أوروبا'}</button></Link>
        <Link className='home-links s-america' to='/South America'><button>{language === 'english' ? 'South America' : 'أمريكا الجنوبية'}</button></Link>
        <Link className='home-links n-america' to='/North America'><button>{language === 'english' ? 'North America' : 'أمريكا الشمالية'}</button></Link>
        <Link className='home-links africa' to='/Africa'><button>{language === 'english' ? 'Africa' : 'أفريقيا'}</button></Link>
        <Link className='home-links asia' to='/Asia'><button>{language === 'english' ? 'Asia' : 'آسيا'}</button></Link>
        <Link className='home-links oceania' to='/Oceania'><button>{language === 'english' ? 'Oceania' : 'أوقيانوسيا'}</button></Link>
      </div>
    )
}
