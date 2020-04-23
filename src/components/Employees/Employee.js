import React from "react"
import "./Employee.css"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">Name: {employee.name}</h3>
        <div className="employee__Manager">Manager: {employee.manager ? "yes" : "no"}</div>
        <div className="employee__fullTime">Full Time: {employee.fullTime ? "Full-Time" : "Part-Time"}</div>
        <div className="employee__hourlyRate">Hourly Rate: ${employee.hourlyRate}</div>
        <div className="employee__locationName">Location: {location.name}</div>
    </section>
)