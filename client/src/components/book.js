import React,{useState} from "react";
import axios from "axios"
import "./home.css"
import BookDetails from "./BookDetails"
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import BookService from "../services/book.service";
import EditBookForm from "./EditBookForm"


function BookCRUD(){

    const [books, setBooks] = useState(null);
    const user = localStorage.getItem('token')
    const [editBook, setEditBook] = useState(null);
   
    const initialFormState = { id:'', title: '',author:'', genre: '',description:'' }
    const [edit, setEdit] = useState(initialFormState)

    const apiURL = "/book";
    axios.get(apiURL).then(res=>res).then(response=>setBooks(response.data) )
     
    const deleteData = async (id) => 
    {
      const token = localStorage.getItem('token');
      const data = await BookService.deletebook(id,token)
      const response = await axios.get(apiURL)
      setBooks(response.data) 
     
    }
  




     const editData = async (id) =>
    {
      const token = localStorage.getItem('token');
      // setEditBook(true)
      axios.get(`/book/detail/${id}/`).then(res=>res)
      .then(response=>setEdit({
        id:response.data._id,
        title:response.data.title,
        author:response.data.author,
        genre:response.data.genre,
        description:response.data.description 
      
      
      }) )
      
     
      // setEdit(response)


      

    }



        return (
                 
                    
                     <div className="App">

                      { edit.id ? ( 

                        <div>
                        
                          <EditBookForm

                            id={edit.id}
                            title={edit.title}
                            author={edit.author}
                            genre={edit.genre}
                            description={edit.description}
                          
                          
                          />
                          




                               
                         </div>
                       
                        
                        
                        
                        ):(
                        <div>
                        <h1> Book List</h1>     
                    
                        <div className="books">
                          {books &&
                            books.map((book, index) => {        
                              return (
                                <div className="book" key={index}>
                                  <h3>Book {index + 1}</h3>
                                  <h2>{book.title}</h2>
                  
                                  <div className="details">
                                    
                                    <p>Title 📖: {book.title}</p>
                                    <p>Author 👨: {book.author}</p>
                                    
                                    
                                    
                                  </div>
                                      
                                      <BrowserRouter>  
                        
                                         <button type="submit" className="btn btn-primary btn-block" onClick={()=>{ window.location.href = `/book/details/${book._id}`}}>Details</button> <br/>
                                         {user && (
                                           <p>
                                           
                                          <button type="submit" className="btn btn-primary btn-block" onClick={()=>{deleteData(book._id)}}>Delete</button>
                                          <br/>
                                          <button type="submit" className="btn btn-primary btn-block" onClick={()=>{editData(book._id)}}>Edit</button>
                                          </p>
                                        
                                         )}
                                                                
                                          <Switch>

                                                                         
                                            <Route  path="/book/details/:id" component={()=>< BookDetails />} />                               
                                          </Switch>
                                      </BrowserRouter>
                              
                                </div>
                              );
                            })}
                        </div>
                        </div>
                      )}
                    </div>
                
                
                
                
                
                )
                   
         
         
         };
        
        

      

export default BookCRUD
