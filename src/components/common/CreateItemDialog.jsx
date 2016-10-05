/* global $ */

const React = require('react')
const Api = require('./../../utils/Api')

export default class CreateItemDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      error: null
    }
  }
  componentDidMount () {
    this.open()
  }
  componentWillUmount () {
    this.close()
  }
  open () {
    $(this.modal)
      .modal({ detachable: false })
      .modal('show')
  }
  close () {
    $(this.modal).modal('hide')
  }
  render () {
    let { loading, error } = this.state
    return (
      <div ref={(n) => { this.modal = n }} className='ui modal'>
        <div className='header'>
          Create Item
        </div>
        <div className='content'>
          { error && (<div className='ui error message'>{error.message}</div>)}
          <form className='ui form' onSubmit={(e) => this._save(e)}>
            <div className='field'>
              <label>Name</label>
              <input type='text' ref='nameInput' name='name' placeholder='' />
            </div>
          </form>
        </div>
        <div className='actions'>
          <button className={loading ? 'ui primary loading button' : 'ui primary button'} type='submit' onClick={(e) => this._save(e)}>Create</button>
          <button type='button' className='ui button' onClick={(e) => this._close(e)}>Close</button>
        </div>
      </div>
    )
  }
  _save (e) {
    e && e.preventDefault()
    let params = {
      name: this.refs.nameInput.value
    }
    this.setState({loading: true})
    Api.request('POST', '/items', params, (error, result) => {
      let loading = false
      if (error) return this.setState({error, loading})
      this.setState({loading})
      setTimeout(() => {
        this._close()
      }, 500)
    })
  }
  _close (e) {
    e && e.preventDefault()
    this.close()
    this.props.onClose && this.props.onClose()
  }
}
