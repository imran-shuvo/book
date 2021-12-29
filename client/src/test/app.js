import React from 'react';


class App extends React.Component{

    state = {response:'',name:'',email:'',password:'',sex:'',responseToPost:''};

    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})

    };

   
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: this.state.name,email:this.state.email,password:this.state.password,sex:this.state.sex }),
        });
        const body = await response.text();
        console.log('body 1',body);
        
        this.setState({ responseToPost: body });
      };
      
    
    render(){
        return (
              
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >Name</label> <br/>
                    <input type="text" value={this.state.name}   name="name" onChange={ this.handleChange } /><br/>
                    <label >email</label> <br/>
                    <input type="email" value={this.state.email}   name="email" onChange={ this.handleChange } /><br/>
                    <label >password</label> <br/>
                    <input type="password" value={this.state.password}   name="password" onChange={ this.handleChange } /><br/>
                    <label >sex</label> <br/>
                    <input type="text" value={this.state.sex}   name="sex" onChange={ this.handleChange } /><br/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>

                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.responseToPost}</p>
             </div> 
           
        )
    }

}

export default App;