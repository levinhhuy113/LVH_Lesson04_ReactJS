import React, { Component } from 'react';
import LvhProductList from './components/LvhProductList';
import LvhProductAdd from './components/LvhProductAdd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [
        { title: 'Lê Vinh Huy', id: 2210900106,status:1 },
        { title: 'Cabbage', id: 1,status:0 },
        { title: 'Garlic', id: 2 ,status:1},
        { title: 'Apple', id: 3 ,status:0},
        { title: 'Samsung', id: 4 ,status:1},
      ]
  }
}
LvhHanndleSubmit = (param)=>{
  console.log("App",param);
  //thêm vào mảng dữ liệu products
  let {products} = this.state;
  products.push(param);
  this.setState({
    products:products
  });
}
  render() {
    return (
      <div className='container border mt-5'>
          <h1>Lê Vinh Huy - Render Data - Event Form</h1>
          <hr/>
          <LvhProductList renderProducts={this.state.products}/>
          <hr/>
          <LvhProductAdd onSubmit = {this.LvhHanndleSubmit} />
      </div>
    );
    }
  }

  export default App;
