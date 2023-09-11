import "./App.css";
import { TicketList } from "./components/tickets/TicketList";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeesList } from "./employees/EmployeesList";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import { Welcome } from "./components/welcome/Welcome";
import { CustomerDetails } from "./components/customers/CustomerDetails";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeesList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
