import React, { useState, useEffect } from "react";
import DataTable from "../dataTable";
import "./index.css";

const ValidatedForm = () => {
    const [finalData, setFinalData] = useState([]);
    const [errors, setErrors] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
    });

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const handleChange = (event, finalCheck) => {
        const { name, value } = finalCheck || event.target;
        let err = "";
        switch (name) {
            case "fName":
                err =
                    value.length < 3
                        ? "First Name must be at least 3 characters long!"
                        : "";
                break;
            case "lName":
                err =
                    value.length < 3
                        ? "Last Name must be at least 3 characters long!"
                        : "";
                break;
            case "email":
                err = validEmailRegex.test(value) ? "" : "Email is not valid!";
                break;
            case "phone":
                err =
                    value.length !== 10 ? "phone must be 10 digits long!" : "";
                break;
            default:
                break;
        }
        setErrors((prev) => ({ ...prev, [name]: err }));
        return err.length < 1;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let i = 0;
        let dat = {};
        while (i < 4) {
            dat = { ...dat, [e.target[i].name]: [e.target[i].value] };
            valid = handleChange(null, {
                name: e.target[i].name,
                value: e.target[i].value,
            });
            i++;
        }
        if (valid) {
            setFinalData((prev) => [...prev, dat]);
        }
    };

    return (
        <div>
            <form name="validatedForm" onSubmit={handleSubmit}>
                <h2>Let's set go!</h2>
                <div
                    className={
                        errors.fName.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="fName">First name:</label>
                    <input
                        type="text"
                        id="fName"
                        name="fName"
                        onChange={handleChange}
                    />
                    {errors.fName.length > 0 && (
                        <span className="error">{errors.fName}</span>
                    )}
                </div>
                <div
                    className={
                        errors.lName.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="lName">Last name:</label>
                    <input
                        type="text"
                        id="lName"
                        name="lName"
                        onChange={handleChange}
                    />
                    {errors.lName.length > 0 && (
                        <span className="error">{errors.lName}</span>
                    )}
                </div>
                <div
                    className={
                        errors.email.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                    />
                    {errors.email.length > 0 && (
                        <span className="error">{errors.email}</span>
                    )}
                </div>
                <div
                    className={
                        errors.phone.length > 0
                            ? "form-elem error-col"
                            : "form-elem"
                    }
                >
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                    />
                    {errors.phone.length > 0 && (
                        <span className="error">{errors.phone}</span>
                    )}
                </div>
                <input type="submit" className="submit" value="submit" />
            </form>
            {finalData.length > 0 && <DataTable valDat={finalData} />}
        </div>
    );
};

export default ValidatedForm;
