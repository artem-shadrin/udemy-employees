import { Component } from "react";
import "./app-filter.css";

export default class AppFilter extends Component {
  state = {
    btn: [
      { label: "Все сотрудники", name: "all" },
      { label: "На повышение", name: "rise" },
      { label: "З/П больше 1000$", name: "moreThen1000" },
    ],
  };
  render() {
    const { btn } = this.state;
    const { filter } = this.props;
    const buttons = btn.map((item) => {
      const classNames =
        item.name === filter ? "btn btn-light" : "btn btn-outline-light";
      return (
        <button
          key={item.name}
          type="button"
          className={classNames}
          onClick={() => this.props.onUpdateFilter(item.name)}
        >
          {item.label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
