import React from "react"
import "./kandyKorner.css"
import { LocationsProvider } from "./Locations/LocationsProvider"
import LocationsList from "./Locations/LocationsList"
import { ProductProvider } from "./Products/ProductProvider"
import ProductList from "./Products/ProductList"
import EmployeeList from "./Employees/EmployeeList"
import { EmployeesProvider } from "./Employees/EmployeeProvider"


export default () => (
    <>
        <h2>Kandy Korner</h2>

        <h2>Locations</h2>
        <LocationsProvider>
            <LocationsList />
        </LocationsProvider>
        <h2>Products</h2>
       <ProductProvider>
           <ProductList />
       </ProductProvider>
       <h2>Employees</h2>
       <EmployeesProvider>
            <LocationsProvider>
                <EmployeeList />
            </LocationsProvider>
       </EmployeesProvider>
</>
)