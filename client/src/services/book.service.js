
class BookService {
    async getbooks() {
  
      try{
          const response = await fetch('/book/', {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          },
          });
          // const data = await response.text();  
        
          return response.data;
  
    }catch(e){
        return e;
      }
  
    }
    async deletebook(id,token) {
  
      try{
          const response = await fetch(`/book/delete/${id}/`, {
          method: 'DELETE',
          headers: {
        
          'Content-Type': 'application/json',
          'Authorization': token
          },
          });
          console.log()
          // const data = await response.text();  
        
          return response.data;
  
    }catch(e){
        return e;
      }
  
    }
    async addbook(title,author, genre,description,token) {

      try{
          const response = await fetch('/book/add/', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': token
          
          },
          body: JSON.stringify({ title,author, genre,description}),
          });
          const data = await response.text();
          const body = JSON.parse(data)
          
          return data;
        }catch(e){
        return e;
      }
  
    }
    async editbook(title,author, genre,description,id,token) {

      try{
          const response = await fetch(`/book/edit/${id}/`, {
          method: 'PATCH',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': token
          
          },
          body: JSON.stringify({ title,author, genre,description}),
          });
          const data = await response.text();
          const body = JSON.parse(data)
          
          return data;
        }catch(e){
        return e;
      }
  
    }



    async bookdetail(id) {

      try{
          const response = await fetch(`/book/detail/${id}`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          }
          
          });
          const data = await response.text();
          const body = JSON.parse(data)
          return body;
        
        }catch(e){
        return e;
      }
  
    }












    
   
 
 
 
 
 
 
 
 
  }
  
  export default new BookService();
  