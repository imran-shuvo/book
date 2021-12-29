
class AuthService {
  async login(email, password) {

    try{
        const response = await fetch('/user/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email,password}),
        });
        const data = await response.text();
        const body = JSON.parse(data)
        const token1 = body.tokens[0].token

        if(token1){
        localStorage.setItem("user", data);
        localStorage.setItem("token", token1);
      
      }
        return data;

    }catch(e){
      return e;
    }

  }
  async signup(name,email, password,sex,age) {

    try{
        const response = await fetch('/user/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,email, password,sex,age}),
        });
        const data = await response.text();
        const body = JSON.parse(data)
        
        return data;
      }catch(e){
      return e;
    }

  }
  async update(name, password,sex,age,token) {

    try{
        const response = await fetch('/me/update', {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': token
        },
        body: JSON.stringify({ name, password,sex,age}),
        });
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");

        const data = await response.text();
        const body = JSON.parse(data)
        const token1 = body.tokens[0].token
        localStorage.setItem("user", data);

        if(token1){
        localStorage.setItem("user", data);
        localStorage.setItem("token", token1);
        }


        
        
        return data;
      }catch(e){
      return e;
    }

  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }



  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
