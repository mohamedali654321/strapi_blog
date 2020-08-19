import React ,{useEffect,useState ,useRef} from 'react';
import {Link ,useHistory} from 'react-router-dom'

function AddNews() {
    const endPoint='http://localhost:1337/news';
   const titleRef=useRef();
   const contentRef=useRef();
   const publishRef=useRef();
   let nameRef=useRef();
   const history=useHistory()
   const [error ,setError]=useState('');
   const handleForm=(e)=>{
       e.preventDefault();
   }
 
   const handleSave=async()=>{
       const title=titleRef.current.value;
       const content=contentRef.current.value;
       const publish_at=publishRef.current.value;
       const author_name=nameRef.current.value;
       try {
           const res=await fetch(endPoint,{
               method:"POST",
               headers:{"Content-Type":"Application/json"},
               body:JSON.stringify({
                   title,
                   content,
                   author_name,
                   
                   publish_at
               })
           }).then(res=>{
               if(!title || !content ||!publish_at || res.status !==200)
               {
                   throw new Error('Please Fill All Fields');

               }
               history.push('/');
               return res.json();
           })
           
       } catch (e) {
           setError(e.toString())
           
       }

   }
 

    return (
        <div className="container py-3">
            <h1 >ADD NEW ARTICLE</h1>
            <div className="col-md-6">
            <div className="aler alert-danger">
                {error && <h5 className="text-center" style={{color:"red"}}>{error}</h5>}
                </div>
            <form className="" style={{width:"500px;"}} onSubmit={handleForm} >
                <div className="form-group">
                    <label>Title :</label>
                    <input type="text" name="title" ref={titleRef} className="form-control" placeholder="Enter Titel Article "></input>

                </div>
                <div className="form-group">
                    <label>Content :</label>
                    <textarea name="content" ref={contentRef} type="text" className="form-control" placeholder="Enter Titel Article "></textarea>

                </div>
                <div className="form-group">
                    <label>Author Name :</label>
                    <input type="text" name="name" ref={nameRef} className="form-control" placeholder="Enter Your Name"></input>

                </div>
             
                <div className="form-group">
                    <label>publish Date :</label>
                    <input name="publish" ref={publishRef} type="date" className="form-control"  ></input>

                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSave} >Save</button> {"                                              "}
                <button type="submit" className="btn btn-secondary" >Cancel</button>
                <br></br>
                <br></br>
                <Link className="btn btn-outline-success btn-lg" to="/">Back To Home</Link>
            </form>
            </div>

            
        </div>
    )
}

export default AddNews
