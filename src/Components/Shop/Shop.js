
import React, { useState } from 'react';
import FakeData from '../../FakeData';
import Room from '../Room/Room';
const Shop = () => {
    const [room , setRoom] = useState(FakeData);
    return (
        <div>
             {
                room.map(room => <Room room={room}></Room>)
            }
        </div>
    );
};

export default Shop;