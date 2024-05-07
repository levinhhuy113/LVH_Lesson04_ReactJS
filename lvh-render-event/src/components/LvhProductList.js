import React, { Component } from 'react'

export default class LvhProductList extends Component {
  render() {
    let {renderProducts} = this.props;
    console.log("Products:",renderProducts);
    let fnStatus = (param)=>{
      if(param===1){
        return 'Active'
      }
      return 'Nonactive';
    }

    let elementProduct = renderProducts.map((item, index) =>{
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{fnStatus(item.status)}</td>
        </tr>
      )
    })

    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {elementProduct}
              </tbody>
        </table>
      </div>
    )
  }
}
