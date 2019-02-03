import { connect } from 'react-redux'
import CartTable from '../components/CartTable'

const getCartContent = products => products

const mapStateToProps = state => ({
  products: getCartContent(state.products)
})

export default connect(
  mapStateToProps
)(CartTable)
