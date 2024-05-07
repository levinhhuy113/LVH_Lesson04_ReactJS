import React, { Component } from 'react'

export default class LvhProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            title: '',
            status:0
        }
    }

    LvhHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
//submit form
LvhHandleSubmit = (ev)  => {
    ev.preventDefault();
    
    this.props.onSubmit(this.state)
    }

  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
                    <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                ID
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name='id'
                value={this.state.id}
                onChange={this.LvhHandleChange}
            />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                Title
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name='title'
                value={this.state.title}
                onChange={this.LvhHandleChange}
            />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
                Status
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name='status'
                value={this.state.status}
                onChange={this.LvhHandleChange}
            />
            </div>
            <button className='btn btn-success' onClick={this.LvhHandleSubmit}>Ghi Lại</button>
        </form>
      </div>
    )
  }
}
