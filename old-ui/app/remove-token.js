import ConfirmScreen from './components/confirm'
import React from 'react'
import { connect } from 'react-redux'
import actions from '../../ui/app/actions'

class RemoveTokenScreen extends ConfirmScreen {
  static propTypes = {
  }

  render () {
    const props = this.props
    return (
      <ConfirmScreen
        subtitle="Remove Token"
        question={`Are you sure you want to remove token "${props.symbol}"?`}
        onCancelClick={() => props.goHome()}
        onNoClick={() => props.goHome()}
        onYesClick={() => {
          props.removeToken(props.address)
            .then(() => {
              props.goHome()
            })
        }}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeToken: address => dispatch(actions.removeToken(address)),
    goHome: () => dispatch(actions.goHome()),
  }
}

export default connect(null, mapDispatchToProps)(RemoveTokenScreen)
