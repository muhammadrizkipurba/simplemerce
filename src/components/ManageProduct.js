import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'


class ManageProduct extends Component {

    state = {
        products: []
    }
 
    // ini jalan sekali setelah proses rendering pertama kali
    componentDidMount() {
        this.getProduct()
    }
    getProduct = () => {
        axios.get('http://localhost:1996/products')
            .then(res => {
                this.setState({products: res.data})
            })
    }

    renderList = () => {
        return this.state.products.map(item => { // {id, name, desc, price, src}
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    <td>{item.price}</td>
                    <td><img className="list" src={item.src} alt={item.desc}></img></td>
                    <td>
                        <button className="btn btn-primary mr-2">Edit</button>
                        <button onClick={() => {this.deleteProduct(item.id)}} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            )
        })
    }

    addProduct = () => {
        const nama = this.name.value
        const desk = this.desc.value
        const harga = this.price.value
        const sumber = this.pict.value
        
        axios.post('http://localhost:1996/products',{
            name: nama,
            desc: desk,
            price: harga,
            src:sumber
        }).then(res => {
            this.getProduct()
        })
    }

    deleteProduct = (id) => {
        axios.delete('http://localhost:1996/products/' + id)
        .then(res => {
            this.getProduct()
        })
    }


    render() {
        return (
            <div className="container">
                {["satu", "dua", "tiga"]}
                <h1 className="display-4 text-center">Manage Product</h1>
                <table className="table table-hover mb-5">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">DESC</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">PICTURE</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.renderList()}
                        </tbody>
                    </table>
                    <h1 className="display-4 text-center">input Product</h1>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col">DESC</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">PICTURE</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col"><input ref={input => this.name = input} className="form-control" type="text" /></th>
                                <th scope="col"><input ref={input => this.desc = input} className="form-control" type="text" /></th>
                                <th scope="col"><input ref={input => this.price = input} className="form-control" type="text" /></th>
                                <th scope="col"><input ref={input => this.pict = input} className="form-control" type="text" /></th>
                                <th scope="col"><button onClick={this.addProduct} className="btn btn-outline-warning" >Add</button></th>
                            </tr>
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default connect()(ManageProduct)