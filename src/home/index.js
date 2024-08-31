import { Component } from "react";

import { FaBars } from "react-icons/fa6";

import { MdInfoOutline } from "react-icons/md";

import SideBar from "../SideBar";

import GraphChart from "../GraphChart";

import PieChartSales from "../PieChart";

import "./index.css";

class Home extends Component {
  state = { navOpen: false, selected: "Dashboard" };

  onChangeNav = (id) => {
    console.log(id);
    this.setState({ selected: id });
  };

  openCloseNav = () => {
    const { navOpen } = this.state;
    this.setState({ navOpen: !navOpen });
  };

  render() {
    const { selected, navOpen } = this.state;
    return (
      <div className="main">
        <div className="header">
          <FaBars onClick={this.openCloseNav} className="bars" />
        </div>
        {navOpen && (
          <div className="mobile-sidebar-container">
            <SideBar
              openCloseNav={this.openCloseNav}
              selected={selected}
              onChangeNav={this.onChangeNav}
            />
          </div>
        )}
        <div className="large-sidebar-container">
          <SideBar selected={selected} onChangeNav={this.onChangeNav} />
        </div>
        <div className="content">
          {selected === "Dashboard" && (
            <h1 className="main-head">{selected}</h1>
          )}
          {selected === "Dashboard" ? (
            <div className="graphs-container">
              <div className="line-chart">
                <h1 className="sales-head">
                  Sales vs Orders <MdInfoOutline className="info" />
                </h1>
                <GraphChart />
              </div>
              <div className="pi-chart">
                <h1 className="sales-head">
                  Portion of Sales <MdInfoOutline className="info" />
                </h1>
                <PieChartSales />
              </div>
            </div>
          ) : (
            <h1 className="navs">{selected}</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
