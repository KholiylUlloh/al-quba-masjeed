import React from 'react'
import { Wrap } from './style'
import {MdArrowForwardIos} from 'react-icons/md'

const Dropdown = () => {
  return (
    <Wrap>
        <div className='linkWrap'>
              <div className='link'>ABOUT</div>
              <MdArrowForwardIos size={'1.5rem'} color='#baa769' />
          </div>
          <div className='linkWrap'>
              <div className='link'>SERVICES</div>
              <MdArrowForwardIos size={'1.5rem'} color='#baa769' />
          </div>
          <div className='linkWrap'>
              <div className='link'>EVENTS</div>
              <MdArrowForwardIos size={'1.5rem'} color='#baa769' />
          </div>
          <div className='linkWrap'>
              <div className='link'>RESOURCES</div>
              <MdArrowForwardIos size={'1.5rem'} color='#baa769' />
          </div>
          <div className='linkWrap'>
              <div className='link'>CONTACT</div>
              <MdArrowForwardIos size={'1.5rem'} color='#baa769' />
          </div>
    </Wrap>
  )
}

export default Dropdown