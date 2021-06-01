import { authActionsCreator } from 'Actions'
import { connect } from 'react-redux'

function mapStateToProps({ AuthData }) {
  return {
    AuthData,
  }
}

const mapDispatchToProps = authActionsCreator

export function authData(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps)
}
