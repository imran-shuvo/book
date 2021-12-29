import React from 'react';
import AuthService from "../services/auth.service";


class SignUp extends React.Component{

  state = {name:'',email:'',password:'',sex:'',age:'',responseToPost:'',response:'',};

    handleChange = (e)=>{
        console.log(e)
        this.setState({[e.target.name]: e.target.value})

    };


    
    handleSubmit = async e => {
        e.preventDefault();
        const data = await AuthService.signup(this.state.name,this.state.email,this.state.password,this.state.sex,this.state.age)
        this.setState({ responseToPost: data });
        this.props.history.push("/user/login");
         window.location.reload();
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
                      <label htmlFor="email" >Username</label> 
                      <input type="email" value={this.state.email} className="form-control"  name="email" onChange={ this.handleChange } /><br/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
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
                        <span>SignUp</span>
                      </button>
                    </div>
                    
                  </form>
           
             </div> 
            </div>
           
        )
    }

}

export default SignUp