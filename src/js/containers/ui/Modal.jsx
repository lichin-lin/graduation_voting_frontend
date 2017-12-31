import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { spring, Motion, presets } from 'react-motion'
import Modal from 'react-modal'

const portalClassName = 'modal-portal'
const bodyOpenClassName = 'modal-opened'

export const MODAL_VERTICAL_POSITIONS = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom'
}

class MotionModal extends Component {
  render () {
    const { isOpen, modalVerticalAlign, overlayClassName } = this.props

    const overlayClasses = {
      ...overlayClassName
    }

    switch (modalVerticalAlign) {
      case MODAL_VERTICAL_POSITIONS.TOP:
        overlayClasses.base = `${overlayClasses.base} ${overlayClasses.base}--top`
        break
      case MODAL_VERTICAL_POSITIONS.BOTTOM:
        overlayClasses.base = `${overlayClasses.base} ${overlayClasses.base}--bottom`
        break
    }

    return (
      <Modal {...this.props}
             overlayClassName={overlayClasses}>
        <Motion defaultStyle={{ translateY: -250, opacity: 0 }}
                style={{ translateY: spring(isOpen ? 0 : -250, presets.stiff), opacity: spring(isOpen ? 1 : 0, presets.stiff) }}>
          {({translateY, opacity}) => {
            console.log(this.modalContent)
            return <div
                    // eslint-disable-next-line
                    ref={modal => this.modalContent = modal}
                  style={{transform: `translateY(${translateY}px`, opacity: opacity, display: 'block'}}
                  className={`motion-modal`}>
                  {this.props.children}
                </div>
          }}
        </Motion>
      </Modal>
    )
  }
}

MotionModal.propTypes = {
  children: PropTypes.any.isRequired,
  modalVerticalAlign: PropTypes.string,
  offset: PropTypes.func,
  // React-modal
  isOpen: PropTypes.bool.isRequired,
  style: PropTypes.shape({
    content: PropTypes.object,
    overlay: PropTypes.object
  }),
  portalClassName: PropTypes.string,
  bodyOpenClassName: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      base: PropTypes.string.isRequired,
      afterOpen: PropTypes.string.isRequired,
      beforeClose: PropTypes.string.isRequired
    })
  ]),
  overlayClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      base: PropTypes.string.isRequired,
      afterOpen: PropTypes.string.isRequired,
      beforeClose: PropTypes.string.isRequired
    })
  ]),
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  ariaHideApp: PropTypes.bool,
  shouldFocusAfterRender: PropTypes.bool,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldReturnFocusAfterClose: PropTypes.bool,
  parentSelector: PropTypes.func,
  aria: PropTypes.object,
  role: PropTypes.string,
  contentLabel: PropTypes.string,
  shouldCloseOnEsc: PropTypes.bool
}

MotionModal.defaultProps = {
  modalVerticalAlign: 'center',
  isOpen: false,
  portalClassName,
  bodyOpenClassName,
  ariaHideApp: true,
  closeTimeoutMS: 0,
  className: {
    base: 'motion-modal-wrapper',
    afterOpen: 'motion-modal-wrapper--after-open',
    beforeClose: 'motion-modal-wrapper--before-close'
  },
  overlayClassName: {
    base: 'modal-overlay',
    afterOpen: 'modal-overlay--after-open',
    beforeClose: 'modal-overlay--before-close'
  },
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector () {
    return document.body
  }
}

export default MotionModal
