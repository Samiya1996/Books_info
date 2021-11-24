import React,{useState,useEffect} from "react";
import axios from 'axios'
import './books.style.scss'

const Books = () =>{
    const [books,setBooks] = useState([])

    useEffect(() =>{
        const fetchBook = async () =>{
           const result = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GZ9RNG6t4PW1Vz2KjPHMSeR1WMtnPcXK`)
           setBooks(result.data.results.books)
        }

        
        fetchBook()
    },[]) 

    return(
        <div>
            <h1 className = 'heading'>BOOKS</h1>
            <section className = 'grid'>
                {
                    books.map((book) => {
                        const {title,author,book_image,age_group,buy_links,description,price,rank,primary_isbn10,publisher } = book

                        return(
                            <article className = "background">
                            <div className = 'book-list'>
                                <div >
                                    <img className = 'book-image'  src = {book_image} alt = {title}></img>
                                </div>
                                <div>
                                    <h3 className = 'book-title'>{title}</h3>
                                    <p>{description}</p>
                                    <p>Written by {author}</p>
                                </div>
                                <ul>
                                <li>ISBN: {primary_isbn10}</li>
                                <li>Publisher: {publisher}</li>
                                
                                </ul>

                                <ul>
                                <p>Buy Here</p>
                                    {
                                       buy_links.map((link) =>{
                                           const {name,url} = link
                                           return(
                                               <div>
                                                   
                                                   <a href ={url}> {name} </a>
                                               </div>
                                           )
                                       }) 
                                    }
                                </ul>
                            </div>
                            </article>
                        )

                    })

                    
                }
            </section>
        </div>
    ) 
}

export default Books