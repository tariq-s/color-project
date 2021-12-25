import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: "",
    };
    this.upadateCurrentColor = this.upadateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  upadateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule("isColorUnique", () =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }
  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.upadateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used",
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor,
            }}
            disabled={paletteIsFull}
          >
            Add color
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
