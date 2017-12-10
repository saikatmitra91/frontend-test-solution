import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            ads: {}
        }
    }

    componentWillMount () {
        fetch('//api.mcmakler.de/v1/advertisements').then(response => {
            response.json().then(resp => {
                resp.data.length = 10
                console.log(resp)
                this.setState({
                    ads: resp
                })
            })
        })
    }

    render() {
        const { data = []} = this.state.ads
        return (
            <div>
                {
                    data.map(adData => <Card key={adData.additionalId} adData={adData}/>)
                }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));