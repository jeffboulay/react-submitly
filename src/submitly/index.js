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

       this.updateFirstName = this.updateFirstName.bind(this);
       this.updateLastName = this.updateLastName.bind(this);
       this.updateCodeLanguage = this.updateCodeLanguage.bind(this);
       this.handleDisplayText = this.handleDisplayText.bind(this);
   }
   updateFirstName(name) {
       this.setState({firstName: name.target.value})
   }

    updateLastName(name) {
        this.setState({lastName:name.target.value})
    }

    updateCodeLanguage(lang) {
        this.setState({language: lang.target.value})
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
                    onChange = {this.updateFirstName}
                />
                <FormInput
                    label="Last Name: "
                    name="lastName"
                    type="text"
                    onChange = {this.updateLastName}
                />
                <FormInput
                    label="Favorite Language: "
                    name="favoriteLanguage"
                    type="text"
                    onChange = {this.updateCodeLanguage}
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