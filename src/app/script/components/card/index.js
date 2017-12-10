import React, {Component} from 'react'

class Card extends Component {

    render () {
        const adData = this.props.adData
        const { title } = adData
        const { realestateSummary = {} } = adData
        const { advertisementPrice = {} } = adData
        const { advertisementAssets = [] } = adData
        const { address = {} } = realestateSummary
        const { city = ''} = address
        const { fullAddress = '' } = address
        const { advertisementThumbnails = {} } = advertisementAssets[0]
        const { inventory_m = {} } = advertisementThumbnails
        const { sellPrice } = advertisementPrice
        const { numberOfRooms, space } = realestateSummary
        return (
            <div className="hC">
                <div className="hC-imgContainer">
                    <div className="hC-image"><img src={inventory_m.url}/></div>
                    <div className="hC-tab"><span>{ city }</span></div>
                </div>
                <div className="hC-content">
                    <div className="hC-title">
                        <h4 className="heading-det">{ title }</h4>
                        <p className="hC-details"><strong>{ fullAddress }</strong></p>
                    </div>
                    <div className="hC-info">
                        <div className="hC-price">
                            <p><strong>{ sellPrice } €</strong></p>
                        </div>
                        <div className="hC-price">
                            <p className="hC-p-l">{ numberOfRooms } Zimmer</p>
                            <p className="hC-p-r">{ space }<sup>2</sup></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card