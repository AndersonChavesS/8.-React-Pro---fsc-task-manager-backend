const notFoundError = (res) => {
    return res.status(404).send("Data not found in the database!");
};
module.exports = {
    notFoundError,
};
