import React, { Component } from 'react';

export default class Os extends Component {
    render() {
    return (
        <div key="numberOne" className="feature__item">
            <h3>Operating System</h3>
            <input
              type="radio"
              id="numberOne"
              className="feature__option"
              name="itemName"
             // checked={item.name === this.state.selected[feature].name}
              //onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor="numberOne" className="feature__label">
             itemName
            </label>
        </div>

    )
}
}