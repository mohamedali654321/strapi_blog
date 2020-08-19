import React ,{useState ,useEffect} from 'react'
import {Link} from 'react-router-dom';


function Home() {
    const endPoint='http://localhost:1337/news';
    const [news,setNews]=useState([]);
    const getNews= async()=>{
        const res=await fetch(endPoint,{
            method:"GET",
            headers:{"Content-Type":"Application/json"}

        }).then(res=>{return res.json()}
             
        )
         setNews(res);
        console.log(news);

    }
    useEffect(()=>{
     getNews()
    },[])
    return (
        <div className="container ">
            
            <div className="py-4">
            <h1>BLOG ARTICLES </h1>
            <Link className="btn btn-outline-success btn-lg" to="/add">Add Article</Link>

            </div>
            {news.map(blog=>(
                <div>
                    <div className="card col-md-6 ">
                        <div className="card-body">
                        
                        <h2 className="card-title" style={{textTransform:'uppercase'}}>{blog.title}</h2>
                        <div className="card-text mb-2">{blog.content}</div>
                        <div className="card-subtitle  ">Author Name :{blog.author_name}</div>
                        <div className="card-subtitle text-muted mb-2 ">Created At :{blog.publish_at}</div>

                        
                       
                       

                        </div>

                    </div>
                    <br></br>
                    
                </div>

            
           
            ))}
            
            
            
            
        </div>
    )
}

export default Home
