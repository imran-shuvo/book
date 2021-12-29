import React,{useState} from "react";
import axios from "axios";
import "./home.css"
import BookService from "../services/book.service"

class BookDetails extends React.Component{

    state = {book:''}

    async componentDidMount (){
        const str = window.location.href.split('/')
        const apiURL = `/book/detail/${str[5]}`
        const response = await BookService.bookdetail(str[5])
        this.setState({book:response});
        console.log(response)


    }

   
    
    render(){
        const mystyle = {
           width:"500px" , marginRight:"440px",
           color: "Cyan",
            // backgroundColor: "Cyan",
            padding: "10px",
            fontFamily: "Arial"
        }
        const mystyle2 = {
            width:"450px" , marginRight:"440px",
            color: "white",
             backgroundColor: "Navy",
             padding: "10px",
             fontFamily: "Arial"
         }

        const {id,title,author,genre,description} = this.state.book
        return(
           
           <div  style = {mystyle} class="card">
              
              <header className="jumbotron">
                 <h3>
                     <strong>{title}</strong> Detail
                </h3>
            </header>
                <div class="card-body" style={mystyle2}>
                    
                <h4>Title: {title} </h4>
                    <h4>Author: {author} </h4>
                    <h4>Genre: {genre}</h4>
                    <h4>Description: {description}</h4>


                </div>

             </div>











            
             
              
               
            )
           
        }
}

export default BookDetails