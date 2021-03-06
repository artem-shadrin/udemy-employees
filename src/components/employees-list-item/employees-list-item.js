import { Component } from "react";
import "./employees-list-item.css";

export default class EmployeesListItem extends Component {
  render() {
    const {
      name,
      salary,
      rise,
      increase,
      onDelete,
      onToggleProp,
      onUpdateSalary,
    } = this.props;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) classNames += " increase";
    if (rise) classNames += " like";
    return (
      <li className={classNames}>
        <span
          className="list-group-item-label"
          onClick={onToggleProp}
          data-toggle="rise"
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary}
          onChange={(e) => onUpdateSalary(name, e.target.value)}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            data-toggle="increase"
            onClick={onToggleProp}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}
