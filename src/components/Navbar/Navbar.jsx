import React, { useState } from 'react'
import { Container, Logo, LogoWrap, Right, Wrap } from './styled'
import {GiHamburgerMenu} from 'react-icons/gi'
import Dropdown from '../dropmenu'
import {IoMdArrowDropdown} from 'react-icons/io'


const Navbar = () => {
  const [active, setActive] = useState(false)
  return (
    <Container>
    <Wrap>
        <LogoWrap>
           <Logo>Logo</Logo>
        </LogoWrap>
        <Right>
          <div className='link-wrap'>
              <div className='link'>ABOUT</div>
              <IoMdArrowDropdown size={'1.5rem'} color='#baa769' />
          </div>
          <div className='link-wrap'>
              <div className='link'>SERVICES</div>
              <IoMdArrowDropdown size={'1.5rem'} color='#baa769' />
          </div>
          <div className='link-wrap'>
              <div className='link'>EVENTS</div>
              <IoMdArrowDropdown size={'1.5rem'} color='#baa769' />
          </div>
          <div className='link-wrap'>
              <div className='link'>RESOURCES</div>
              <IoMdArrowDropdown size={'1.5rem'} color='#baa769' />
          </div>
          <div className='link-wrap'>
              <div className='link'>CONTACT</div>
              <IoMdArrowDropdown size={'1.5rem'} color='#baa769' />
          </div>
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <button>
            DONATE
          </button>
          <div className='menu-wrap' onClick={() => setActive (!active)}>
          <GiHamburgerMenu size={'2rem'} color={'#363636'} />
          </div>
          { active?
            <div className='dropdown'>
            <Dropdown />
          </div>:null
          }
          </div>
        </Right>
    </Wrap>
    </Container>
  )
}

export default Navbar