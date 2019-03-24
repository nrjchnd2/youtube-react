import React from 'react';
import SearchBar from './SearchBar';
import axios from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component{
    state={videos:[],selectedVideo:null};
    onFormSubmit=async (term)=>{
        const response=await axios.get('/search',{
            params:{
                q:term
            }
        });
        
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    }
    componentDidMount(){
        this.onFormSubmit('computer engineering');
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <div className='ui grid'>
                <div className='ui row'>

                    <div className='eleven wide column'><VideoDetail video={this.state.selectedVideo}/></div>
                    <div className='five wide column'><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/></div>
                </div>
                </div>
            </div>
        );

    }
}
export default App;