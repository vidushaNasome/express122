import React from 'react';
import {Link} from "react-router-dom";
import "./dec.css";
import pic from "./images/pic.jpg";

class Tourism extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            cat:'',
            tt:[],
            pp:'',
            code:'',
            tel:''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    componentDidMount() {
        const url = "http://localhost:3500/expressapi/getAll";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ tt: json }))

    }

    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    onSubmit(e){
        e.preventDefault();
        this.name=this.state.name;
        this.price=this.state.price;
        this.cat=this.state.cat;
        this.tel=this.state.tel;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name:this.name,
                price:this.price,
                category:this.cat,
                tel:this.tel,
            })
        };
        fetch('http://localhost:3500/expressapi/add', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ pp: data.id }))
            .then(alert("success"));
        window.location.reload();



    }
    onSubmit123(id){
        this.code=this.state.code;

        if(this.code!=="xxx90#") {
            alert("Sorry you don't have authorization");
        }else {
            fetch("http://localhost:3500/expressapi/deleteid/" + id, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(res => console.log(res))// or res.json()
                .then(window.location.reload());
        }
    }

    render() {
        const { tt } = this.state;
        return (
            <div>
                <button id="back"><Link to="/"> Main Page </Link></button>
                <div className="">
                    <h1 id="xyz" className="alert alert-primary " align="center">Add your next Tourism Details</h1>
                    <h3 className="alert alert-primary" align="center">We can make your Dream Come True.........</h3>
                </div>
                <div className="alert alert-primary" align="center" id="xx">
                <form className='formTou' onSubmit={this.onSubmit} >
                    <label>Name</label>
                    <input id='name'
                           onChange={this.handleInputChange} name='name' type='text'
                           value={this.state.name["name"]} required/><br/><br/>
                    <label>Contact Number</label>
                    <input id='tel'
                           onChange={this.handleInputChange} name='tel' type='number'
                           value={this.state.tel["tel"]} required/><br/><br/>
                    <label>Category and Details</label>
                    <input id='cat'
                           onChange={this.handleInputChange} name='cat' type='text'
                           value={this.state.cat["cat"]} required/><br/><br/>
                    <label>Maximum Budget</label>
                    <input id='price' onChange={this.handleInputChange} name='price' type='number'
                           value={this.state.price["price"]} required/><br/>
                    <h6 className="alert alert-primary" align="center">Trip Planner will contact you soon after submitting the form.</h6>
                    <button id="b1">Submit</button>
                    <br/><br/>
                </form>
                </div>

                <div className="container">
                    <table className="alert alert-primary" align="center" id="c12" width="90%">
                        {tt.map((post) => (
                        <div className="alert-heading">
                            <tr><td width="10%">Name<div className="card-header"> {post.name} </div></td>
                                <td width="40%">Category and Details<div className="card-header"> {post.category} </div></td>
                                <td width="20%">Contact Number<div className="card-header"> {post.tel} </div></td>
                                <td width="20%">Budget<div className="card-body"><p className="card-text">Rs.{post.price}.00</p></div></td>
                                <td width="10%"><input id='code' placeholder="Insert code to delete this detail" onChange={this.handleInputChange} name='code' type='text'
                                       value={this.state.code["code"]}/></td>
                                <button width="20%" className="btn-danger" type="submit"
                                        onClick={this.onSubmit123.bind(this,post._id)} >delete</button>
                                <td></td>
                            </tr>

                    </div>
                    ))}
                    </table>
                </div>



            </div>

        )
    } }
    export default Tourism
