import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../Locations/LocationsProvider"
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const manager = useRef()
    const fullTime = useRef()
    const hourlyRate = useRef()

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                manager: manager.current.checked,
                fullTime: fullTime.current.checked,
                hourlyRate: hourlyRate.current.value,
                locationId: locationId
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeManager">Only check if you are a manager </label>
                    <input
                        type="checkbox"
                        id="employeeManager"
                        ref={manager}
                        required
                        autoFocus
                        className="form-control"
                />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeStatus">Only check if you are a full time employee </label>
                    <input
                        type="checkbox"
                        id="employeeFullTime"
                        ref={fullTime}
                        required
                        autoFocus
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeRate">Hourly Rate?: </label>
                    <input
                        type="text"
                        id="employeeRater"
                        ref={hourlyRate}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="HourlyRate?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}