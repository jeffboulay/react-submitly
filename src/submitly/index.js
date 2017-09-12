import React from 'react';
import FormInput from '../common/form-input';
import Button from '../common/button';
import Displayinator from '../displayinator';

export default class Submitly extends React.Component {
   constructor() {
       super();
       this.state = {
           displayText:""
       };
       this.handleInputChange = this.handleInputChange.bind(this);
       this.handleDisplayText = this.handleDisplayText.bind(this);
   }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleDisplayText () {
        let coolText =  this.state.firstName + " " +
            this.state.lastName +
            " loves to program in " +
            this.state.language;

        this.setState({displayText:coolText})
    }
    render() {
        return (
            <div>
                <FormInput
                    label="First Name: "
                    name="firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange = {this.handleInputChange}
                />
                <FormInput
                    label="Last Name: "
                    name="lastName"
                    type="text"
                    value={this.state.lastName}
                    onChange = {this.handleInputChange}
                />
                <FormInput
                    label="Favorite Language: "
                    name="language"
                    type="text"
                    value={this.state.language}
                    onChange = {this.handleInputChange}
                />
                <Button
                    text="Submit"
                    onClick={this.handleDisplayText}
                />
                <Displayinator text={this.state.displayText} />
            </div>
        )
    }
}