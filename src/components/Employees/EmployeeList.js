import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"
import { LocationContext } from "../Locations/LocationsProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import EmployeeForm from "./EmployeeForm"


export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

return (
    <>
        <div className="fakeLink href" onClick={toggle}><Button color="success">Hire Employee</Button></div>
        <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Hire Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>

        <div className="employees">
            {
                employees.map(employee => {
                    const address = locations.find(l => l.id === employee.locationId)

                    return <Employee key={employee.id}
                        location={address}
                        employee={employee} />
                }
                )}
        </div>
    </>
)
}