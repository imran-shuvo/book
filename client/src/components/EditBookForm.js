import React from 'react';
import BookService from "../services/book.service";
import AuthService from "../services/auth.service"
import {Redirect} from 'react-router-dom';

class EditBookForm extends React.Component{
    
    
    state = {
        response:"",
        id:"",
        title:"",
        author:"",
        genre:"",
        description:""
    };

    handleChange = (e)=>{
       
        this.setState({[e.target.name]: e.target.value})

    };

    componentDidMount(){

        this.setState({
            response:'',
            id:this.props.id,
            title:this.props.title,
            author:this.props.author,
            genre:this.props.genre,
            description:this.props.description})
    }
    
    handleSubmit = async e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data = await BookService.editbook(this.state.title,this.state.author,
            this.state.genre,this.state.description,this.state.id,token)
        
        this.setState({ responseToPost: data });
       
        window.location.href = `/book/details/${this.state.id}`
         
      };
 
      
    
    render(){
        return (
              <div className="col-md-12">
                <div className="card card-container">
                  <h3>Edit {this.state.title} </h3>
              
                  <form onSubmit={this.handleSubmit}>
                  {/* <form> */}
                    <div className="form-group">
                      <label htmlFor="title" >Title</label> 
                      <input type="text" value={this.state.title} className="form-control"  name="title" onChange={ this.handleChange } /><br/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="author">Author Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="author"
                        value={this.state.author}
                        onChange={ this.handleChange }
                        
      
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="genre">Genre</label>
                      <input
                        type="text"
                        className="form-control"
                        name="genre"
                        value={this.state.genre}
                        onChange={ this.handleChange }
                        
      
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={this.state.description}
                        onChange={ this.handleChange }
                        rows="5"
                        />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block" >
                        <span>Update</span>
                      </button>
                    </div>
                    
                  </form>
                 
             </div> 
                
            </div>
           
        )
    }

}

export default EditBookForm