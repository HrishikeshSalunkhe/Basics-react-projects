import React, { Component } from 'react'

class RenderingList extends Component {
    
    state = {
        count: 1,
        tags : ["tag1","tag2","tag3","tag4","tag5"]
    };

    render() { 
        return (
            <div>
                <ul>
                    {this.state.tags.map((tag,index) => <li key = {index} > {tag}</li>)}
                </ul>
            </div>
          );
    }

}
 
export default RenderingList;