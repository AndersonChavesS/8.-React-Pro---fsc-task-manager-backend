const notAllowedFieldsToUpdateError = (res) => {
    return res.status(500).send("One or more fields entered are not editable.");
};
module.exports = {
    notAllowedFieldsToUpdateError,
};
