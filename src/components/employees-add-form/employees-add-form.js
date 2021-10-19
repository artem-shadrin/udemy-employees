import { Component } from "react";
import "./employees-add-form.css";

export default class EmployeesAddForm extends Component {
  state = {
    name: "",
    salary: 0,
  };
  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state);
    for (const field in this.state) {
      if (Object.hasOwnProperty.call(this.state, field)) {
        this.setState({ [field]: "" });
      }
    }
  };
  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            onChange={this.onChangeValue}
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            onChange={this.onChangeValue}
            value={salary}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={this.onSubmit}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
