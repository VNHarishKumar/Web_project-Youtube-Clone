import React from "react";
import './UploadList.scss';
import { BACKEND_URI } from "../Config/constants";

const UploadList = ({medias}) => {



    const deleteVdo = (id,_id) => {
        fetch(`${BACKEND_URI}/videos/`+_id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            // Video was deleted successfully
            console.log(`Video ${id} was deleted successfully.`);
            alert("deleted successfully");
            window.location.reload();
          } else {
            // Handle errors
            console.error(`Error deleting video ${id}: ${response.status} ${response.statusText}`);
          }
        })
        .catch(error => {
          console.error(`Error deleting video ${id}: ${error}`);
        });
      }
      

    
     
      
      

    return (
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="tha">Uploaded Videos</th>
                            {/* <th>Videos</th> */}
                        </tr>
                    </thead>
                    <tbody>
                
                        {medias && medias.map(media => {
                            return(
                                <tr>
                                    <video preload="auto" width="320" height="240" controls> 
                                    <p>{`${BACKEND_URI}/public/videos/${media.url}`}</p>
                                            <source src={`${BACKEND_URI}/public/videos/${media.url}`} />;Your browser does not support video tag
                                        </video>
                                   <button className="btn-del"onClick={() => deleteVdo(media.url,media._id)}>Delete</button>
                                </tr>
                            )
                        })}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )

}



export default UploadList;
