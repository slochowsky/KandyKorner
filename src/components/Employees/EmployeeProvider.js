import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const EmployeeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const EmployeesProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }

    useEffect(() => {
        getEmployees()
    }, [])

    useEffect(() => {
        console.log("****  EMPLOYEE APPLICATION STATE CHANGED  ****", employees)
    }, [employees])

    return (
        <EmployeeContext.Provider value={{
            employees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}