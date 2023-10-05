module.exports =  (connection,DataTypes) => {
    const Categories = connection.define(("categories"),{
        name: {
            type : DataTypes.STRING,
            allowNull: false,
        }
    })
    return Categories
}
