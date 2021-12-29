import React from 'react';
import BookService from "../services/book.service";


class AddBook extends React.Component{

    state = {response:'',title:'',author:'',genre:'',description:''};

    handleChange = (e)=>{
       
        this.setState({[e.target.name]: e.target.value})

    };


    
    handleSubmit = async e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data = await BookService.addbook(this.state.title,this.state.author,this.state.genre,this.state.description,token)
        
        this.setState({ responseToPost: data });
        this.props.history.push("/book");
         window.location.reload();
      };
 
      
    
    render(){
        return (
              <div className="col-md-12">
                <div className="card card-container">
                  <h3>ADD NEW BOOK </h3>
              
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
                        <span>ADD</span>
                      </button>
                    </div>
                    
                  </form>
                 
             </div> 
                
            </div>
           
        )
    }

}

export default AddBook