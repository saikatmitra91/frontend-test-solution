import React, {Component} from 'react'

class Card extends Component {
  render () {
    return (
        <div className="hC">
            <div className="hC-imgContainer">
                <div className="hC-image"><img src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573379e18ffd7c64368b4568_variant_asset5829e70a9e78c_thumbXS.jpg"/></div>
                <div className="hC-tab"><span></span></div>
            </div>
            <div className="hC-content">
                <div className="hC-title">
                    <h4 className="heading-det">Gemütliche 1-Zi Wohnung in ruhiger Lage auf dem Sonnenberg</h4>
                    <p className="hC-details"><strong>Philippstraße 16, 09130 Chemnitz</strong></p>
                </div>
                <div className="hC-info">
                    <div className="hC-price">
                        <p><strong>280 €</strong></p>
                    </div>
                    <div className="hC-price">
                        <p className="hC-p-l">2 Zimmer</p>
                        <p className="hC-p-r">ab 73<sup>2</sup></p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Card