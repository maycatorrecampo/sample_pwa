import React, { Component } from 'react';
import './Today.css'
import axios from 'axios'

class Today extends Component {
    constructor() {
        super();
        this.state = {
            btcprice: '',
            ltcprice: '',
            ethprice: ''
        };
    }

    componentWillMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
            .then(response => {
                // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                this.setState({ btcprice: response.data.BTC.USD });
                this.setState({ ethprice: response.data.ETH.USD });
                this.setState({ ltcprice: response.data.LTC.USD });
            })
            // Catch any error here
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return (
            <div className="today--section container">
                <h2>Current Pricc</h2>
                <div className="columns today--section__box">
                    <div className="column btc--section">
                        <h5>${this.state.btcprice}</h5>
                        <p>1 BTC</p>
                    </div>
                    <div className="column eth--section">
                        <h5>${this.state.ethprice}</h5>
                        <p>1 ETH</p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 LTC</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Today;