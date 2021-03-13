const getEmployerRole = (employeeName, employees) => {
    const findRole = employees.find((e) => e.name === employeeName);
    if(findRole) {
        return findRole.role;
    }
    return "Employee does not exist."
};

module.exports = getEmployerRole;
