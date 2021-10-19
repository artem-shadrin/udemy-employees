import { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        onChange={this.onUpdateSearch}
      />
    );
  }
}
