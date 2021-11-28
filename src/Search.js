import React, {useState} from 'react';

export const Search = ({setCurrentChannelId}) => {
    const [channelId, setChannelId] = useState("");


    return (
        <div className="search">
        <input onChange={e => setChannelId(e.target.value)} type="text" placeholder="Enter your favourite channel ID" />
        <button onClick={()=> setCurrentChannelId(channelId)}>Get Videos</button>
      </div>
    )
}
