import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    data: [
      { name: "Alex B", salary: 300, increase: true, id: 1 },
      { name: "Petr Y.", salary: 900, increase: false, id: 2 },
      { name: "John C.", salary: 1500, increase: false, id: 3 },
    ],
    maxId: 4,
  };
  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };
  addItem = ({ name, salary }) => {
    const newElement = {
      name,
      salary,
      increase: false,
      id: this.state.maxId,
    };
    this.setState(({ data, maxId }) => ({
      data: [...data, newElement],
      maxId: maxId + 1,
    }));
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
