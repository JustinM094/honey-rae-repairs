import { useEffect, useState } from "react";
import { getStaffUsers } from "../services/UserService";
import { User } from "../users/User";
import "./Employees.css";
import { Link } from "react-router-dom";
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
        return (
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <User user={employeeObj} key={employeeObj.id} />
          </Link>
        );
      })}
    </div>
  );
};
