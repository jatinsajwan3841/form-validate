import React from "react";
import "./index.css";

const DataTable = ({ valDat }) => {
    return (
        <div className="val-table">
            <h2>Validated data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fist Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                    {valDat &&
                        valDat.map((data, i) => (
                            <tr key={i}>
                                <td>{data.fName}</td>
                                <td>{data.lName}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
