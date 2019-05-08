import React, {Component} from 'react';

class List extends Component {
    state = {
        'data':['one','two']
    }
    loadData = () => {
        const promise = fetch(`http://localhost:5000/api`)
        promise.then(blob=>blob.json()).then(json => (
            this.setState(
                {'data' : json.data}
            )
        ))
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        const itemList = this.state.data.map(
            (element, i) => {
                return (
                    <div key={i} className = 'apiElement'>
                        <b>{element}</b>
                        <br></br><br></br>
                    </div>)
                }
            )
        return (
            <div className="List">
                {itemList}
            </div>
        );
    }
}

export default List;