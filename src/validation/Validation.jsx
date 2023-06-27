const Validation = (values) => {
    let errors = {}

    if(!values.email) {
        errors.email="Email Required"
    }
    else if (values.email.length < 5) {
        errors.name= "Email must be more than 5 charecters"
    }

    if(!values.password) {
        errors.password="Password Required"
    }
    else if (values.password.length < 9) {
        errors.password= "Password must be more than 9 charecters"
    }
    return errors;
}

export default Validation;