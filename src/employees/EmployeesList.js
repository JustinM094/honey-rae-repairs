import { useEffect, useState } from "react";
import { getStaffUsers } from "../Services /userService";
import { User } from "../users/User";
import "./Employees.css";
export const EmployeesList = () => {
  const [employees, setEmployeeState] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployeeState(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return <User user={employeeObj} />;
      })}
    </div>
  );
};
