import React from 'react';
import AuthService from "../services/auth.service";


class UpdateMe extends React.Component{

  state = {name:'',password:'',sex:'',age:'',response:''};

    handleChange = (e)=>{
        
        this.setState({[e.target.name]: e.target.value})

    };
    componentDidMount(){
        const currentUser = AuthService.getCurrentUser();

        this.setState({
           
            name:currentUser.name,
            password:currentUser.password,
            age:currentUser.age,
            sex:currentUser.sex,
            })
    }


    
    handleSubmit = async e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data = await AuthService.update(this.state.name,this.state.password,this.state.sex,this.state.age,token)
        this.setState({ responseToPost: data });
        // this.props.history.push("/user/profile");
        console.log(this.state.responseToPost)
        window.location.href = `/user/profile`
        //  window.location.reload();
      };
 
      
    
    render(){
        return (
              <div className="col-md-12">
                <div className="card card-container">
                  <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                  />
              
                  <form onSubmit={this.handleSubmit}>

                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={ this.handleChange }
                        
      
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={ this.handleChange }
                        
      
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={this.state.age}
                        onChange={ this.handleChange }
                        
      
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sex">Sex</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sex"
                        value={this.state.sex}
                        onChange={ this.handleChange }
                        
      
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

export default UpdateMe