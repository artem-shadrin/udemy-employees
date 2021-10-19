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
      { name: "Alex B", salary: 300, increase: true, rise: false, id: 1 },
      { name: "Petr Y.", salary: 900, increase: false, rise: true, id: 2 },
      { name: "John C.", salary: 1500, increase: false, rise: false, id: 3 },
    ],
    maxId: 4,
    term: "",
    filter: "all",
  };
  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };
  addItem = ({ name, salary }) => {
    this.setState(({ data, maxId }) => ({
      data: [
        ...data,
        {
          name,
          salary,
          increase: false,
          rise: false,
          id: this.state.maxId,
        },
      ],
      maxId: maxId + 1,
    }));
  };
  onToggleProp = (id, prop) =>
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  searchEmp = (items, term) => {
    if (term.length === 0) return items;
    return items.filter((element) => element.name.indexOf(term) > -1);
  };
  filterEmp = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((element) => element[filter]);
      case "moreThen1000":
        return items.filter((element) => element.salary > 1000);
      default:
        return items;
    }
  };
  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  onUpdateSalary = (name, salary) => {
    const newArr = this.state.data.map((item) => {
      if (item.name === name) {
        return { ...item, salary: salary };
      }
      return item;
    });
    this.setState({ data: newArr });
  };
  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterEmp(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onUpdateSalary={this.onUpdateSalary}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
