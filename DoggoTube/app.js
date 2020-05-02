// You will have 4 Total Components one for each section

//This is your unique API key that grants you the authorization to use YouTube's API. Take your API Key and set it as the value of the const key variable in app.js
const key = "AIzaSyA_oAelWEYJANbekCydcDiJcmzCs_ZFav4";

// Search Component
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        query: '',
        videos: []
        }
    
    // Bind to DOM
    this.searchVideos = this.searchVideos.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    }
        
    searchVideos(evt) {
        evt.preventDefault();
        if (this.state.query.length > 3){
            axios.get("https://www.googleapis.com/youtube/v3/search",{
                params: {
                    key: key,
                    part: 'snippet',
                    maxResults: 8,
                    type: 'video',
                    q: ' dog'
                }
            }).then(response => {
                console.log(response.data);
                this.setState({ videos: response.data.items});
            })
        }
    }    

    updateSearch(evt){
        this.setState({query: evt.target.value});
    }
        
    render() {
        return (
            <div>
                <div className="m-3">
                <form onSubmit={this.searchVideos}>
                    <label>Search for...</label>
                    <input className="form-control" value={this.state.query} type="text" onChange={this.updateSearch} />
                </form>
                </div>

                <div className="row">
                    {this.state.videos.map(video => {
                        return(
                            <div className="col-md-3" key={video.id.videoId}>
                                <a href={'youtube.com/watch?v=' + video.id.videoId} target="_blank">
                                    <img className="img-fluid" src={video.snippet.thumbnails.high.url} />   
                                    <h5 className="card-title">{video.snipper.title}</h5>
                                </a>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}  
          
// Mount the search component
ReactDOM.render(
    <SearchComponent />,
    document.getElementById('searchComponent')
  );

// Create the rest of the components

// DACHSHUND - Create a new Component in app.js called DachshundComponent
class DachshundComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            videos: [] // Add a new state property called videos and set it equal to an empty array
        }
    }
    componentDidMount() { //when this is in a component, this become a function even if you don't write function () (we think)
        // Using axios make an AJAX request to the "search" endpoint of YouTube's API with the following parameters:
        axios.get("https://www.googleapis.com/youtube/v3/search", {    
            params: {
                key: key, 
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: 'dachshund'
            }
        }).then(response => {
            console.log(response.data); //In the success callback, use console.log() to view the response from the API
            this.setState({videos: response.data.items}); //Reassign the value of this.setState() to be equal to the array of videos returned
        })
    }
    
    render () {
        return ( 
            <div> 
                <div className="row">
                {this.state.videos.map(video => {
                        return (
                            <div className="col-md-3" key={video.id.videoId}>
                                <a href={'youtube.com/watch?v=' + video.id.videoId} target="_blank">
                                    <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                    <h5 className="card-title">{ video.snippet.title }</h5>
                                </a>
                            </div>
                        )
                    })
                }
                </div> 
            </div>
        )
    }
}

ReactDOM.render(
    <DachshundComponent />,
    document.getElementById ('dachshundComponent')
);

// CORGI - Create a new Component in app.js called CorgiComponent
class CorgiComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            videos: [] // Add a new state property called videos and set it equal to an empty array
        }
    }
    componentDidMount() { //when this is in a component, this become a function even if you don't write function () (we think)
        // Using axios make an AJAX request to the "search" endpoint of YouTube's API with the following parameters:
        axios.get("https://www.googleapis.com/youtube/v3/search", {    
            params: {
                key: key, 
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: 'corgi'
            }
        }).then(response => {
            console.log(response.data); //In the success callback, use console.log() to view the response from the API
            this.setState({videos: response.data.items}); //Reassign the value of this.setState() to be equal to the array of videos returned
        })
    }
    
    render () {
        return ( 
            <div className="container"> 
                <div className="row">
                {this.state.videos.map(video => {
                        return (
                            <div className="col-md-3" key={video.id.videoId}>
                                <a href={'youtube.com/watch?v=' + video.id.videoId} target="_blank">
                                    <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                    <h5 className="card-title">{ video.snippet.title }</h5>
                                </a>
                            </div>
                        )
                    })}
                </div> 
            </div>
        )
    }
} 

ReactDOM.render(
    <CorgiComponent />,
    document.getElementById ('corgiComponent')
);

// HUSKY - Create a new Component in app.js called HuskyComponent
class HuskyComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            videos: [] // Add a new state property called videos and set it equal to an empty array
        }
    }
    componentDidMount() { //when this is in a component, this become a function even if you don't write function () (we think)
        // Using axios make an AJAX request to the "search" endpoint of YouTube's API with the following parameters:
        axios.get("https://www.googleapis.com/youtube/v3/search", {    
            params: {
                key: key, 
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: 'husky'
            }
        }).then(response => {
            console.log(response.data); //In the success callback, use console.log() to view the response from the API
            this.setState({videos: response.data.items}); //Reassign the value of this.setState() to be equal to the array of videos returned
        })
    }
    
    render () {
        return ( 
            <div className="container"> 
                <div className="row">
                {this.state.videos.map(video => {
                        return (
                            <div className="col-md-3" key={video.id.videoId}>
                                <a href={'youtube.com/watch?v=' + video.id.videoId} target="_blank">
                                    <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                    <h5 className="card-title">{ video.snippet.title }</h5>
                                </a>
                            </div>
                        )
                    })}
                </div> 
            </div>
        )
    }
} 

ReactDOM.render(
    <HuskyComponent />,
    document.getElementById ('huskyComponent')
);

// NOTES
// have to use "className" instead of "class" in JavaScript
// map = grabs an array; when instructions say "null," use [] 
// For each video (using this.state.videos.map), render the video thumbnail image and title that when clicked will take the user to that video on YouTube


