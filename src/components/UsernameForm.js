import React from 'react'

class UsernameForm extends React.Component {

    state = {
      username: ''
    }


  onChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  render() {
    return (
      <div>
        <div>
          <h2>What is your username?</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Your full name"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }


}

export default UsernameForm
