import React, {useEffect,useState} from 'react'
import axios from './components/axios'
import './App.css';
import Video from './components/Video';

function App() {
const [videos, setvideos] = useState([]);

useEffect(() => {
  
  const fetchPosts = async () => {
        const response = await axios.get('/db/posts');
        setvideos(response.data);
  }
  fetchPosts();
 
}, [])

console.log(videos)
  return (
    <div className="app">
      <div className="app__videos">
      {videos.map(({url,channel,description,song,likes,messages,shares}) => (
        <Video
        url={url}
        channel={channel}
        description={description}
        song={song}
        likes={likes}
        messages={messages}
        shares={shares}
      />
      ))}

      
        
      </div>

    </div>
  );
}

export default App;
