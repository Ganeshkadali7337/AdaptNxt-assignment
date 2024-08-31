import "./index.css";

import { IoArrowBackCircleSharp } from "react-icons/io5";

const SideBar = (props) => {
  const { selected, onChangeNav, openCloseNav } = props;

  const onClickNav = (e) => {
    onChangeNav(e.target.id);
  };

  const onClickBack = () => {
    openCloseNav();
  };

  return (
    <div className="sidebar">
      <IoArrowBackCircleSharp onClick={onClickBack} className="close" />
      <ul className="btns-list">
        <li>
          <button
            id="Dashboard"
            className={
              selected === "Dashboard" ? `nav-btn selected` : `nav-btn`
            }
            onClick={onClickNav}
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            id="Inventory"
            className={
              selected === "Inventory" ? `nav-btn selected` : `nav-btn`
            }
            onClick={onClickNav}
          >
            Inventory
          </button>
        </li>
        <li>
          <button
            id="Orders"
            className={selected === "Orders" ? `nav-btn selected` : `nav-btn`}
            onClick={onClickNav}
          >
            Orders
          </button>
        </li>
        <li>
          <button
            id="Returns"
            className={selected === "Returns" ? `nav-btn selected` : `nav-btn`}
            onClick={onClickNav}
          >
            Returns
          </button>
        </li>
        <li>
          <button
            id="Customers"
            className={
              selected === "Customers" ? `nav-btn selected` : `nav-btn`
            }
            onClick={onClickNav}
          >
            Customers
          </button>
        </li>
        <li>
          <button
            id="Shipping"
            className={selected === "Shipping" ? `nav-btn selected` : `nav-btn`}
            onClick={onClickNav}
          >
            Shipping
          </button>
        </li>
        <li>
          <button
            id="Channel"
            className={selected === "Channel" ? `nav-btn selected` : `nav-btn`}
            onClick={onClickNav}
          >
            Channel
          </button>
        </li>
        <li>
          <button
            id="Integrations"
            className={
              selected === "Integrations" ? `nav-btn selected` : `nav-btn`
            }
            onClick={onClickNav}
          >
            Integrations
          </button>
        </li>
        <li>
          <details className="details">
            <summary>Calculator</summary>
          </details>
        </li>
        <li>
          <details className="details">
            <summary>Reports</summary>
          </details>
        </li>
        <li>
          <details className="details">
            <summary>Account</summary>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
