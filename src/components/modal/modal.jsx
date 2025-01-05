import React, { useState } from 'react'
import propTypes from 'prop-types'

import './modal.scss'
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modal = () => {

  const [active, setActive]= useState(flase);

  useEffect(()=> {
    setActive(props.active);
  }, [props.active]);


  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props/Children}
    </div>
  )
}

Modal.propTypes={
    active:PropTypes.bool,
    id:PropTypes.string
}

const contentRef = useRef(null);

const closeModal=() => {
  contentRef.current.parentNode.classlist.remove('active');
  if(props.onClose) props.onClose();
}

export const ModalContent = props => {
  return (
    <div ref={contentRef} className="modal__content">
      {props.Children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x">
        </i>

      </div>
    </div>
  )
}

ModalContent.propTypes = {
  onClose: PropTypes.func
}

export default modal
