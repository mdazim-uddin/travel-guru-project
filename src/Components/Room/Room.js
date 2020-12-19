import React from 'react'; 
import GOOmap from './GOOmap';
import './Room.css';
const Room = (props) => {
   const {title, image, paragrap , price} = props.room;
    return (
        <div className="room-area">
            <div className="container">
                <div className=" row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                           <div className="room">
                           <img src={image} alt="" className="img-fluid"></img>
                           </div>
                            </div>
                            <div className="col-md-6">
                                <div className="room-details">
                                 <h4>{title}</h4>
                                <p>{paragrap}</p>
                              <span>{price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
           </div>
                </div>
            </div>
        
            
        // </div>
    );
};

export default Room;
// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
//   })(Room)