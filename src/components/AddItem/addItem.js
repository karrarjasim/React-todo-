import React ,{Component} from 'react';
import './additem.css';


export default class AddItem extends Component {

    state = {
        name : '',
        age  : ''
    }
    handelChange = (e) =>{
        this.setState({
        [e.target.id]:[e.target.value]
        })
    }
    handelSubmit = (e) =>{
        e.preventDefault();
        if (e.target.name.value === '') {
            this.setState({
                name : '',
                age  : ''
            })
        }
        else{
            this.props.addItem(this.state);
        this.setState({
            name : '',
            age  : ''
        })
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" value={this.state.name} id="name" placeholder="write name" onChange={this.handelChange} />
                    <input type="number" value={this.state.age} id="age" placeholder="write age" onChange={this.handelChange} />
                    <input type="submit" value="Add" onChange={this.handelChange} />

                </form>
            </div>
        )
    }
}
