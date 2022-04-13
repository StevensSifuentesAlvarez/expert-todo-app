import React from 'react'
import { SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si"
import { FooterContainer } from './styles'

const icon = {
  fontSize: '18px',
  color: '#1E1E24',
}

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a href="https://github.com/StevensSifuentesAlvarez" target='__blank'> 
            <SiGithub style={icon}/>
          </a>
        </li>
        <li>
          <a href="https://wa.me/51921134500" target='__blank'> 
            <SiWhatsapp style={icon}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/stevenssifuentesálvarez" target='__blank'> 
            <SiLinkedin style={icon} />
          </a>
        </li>
      </ul>
    </FooterContainer>
  )
}

export default Footer