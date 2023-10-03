module.exports=(connection,DataTypes)=>{
    const User  = connection.define("user",{
        username: {
            type : DataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type : DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone_number: {
            type : DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        password: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type : DataTypes.ENUM(['admin','client','seller']),
            allowNull: false,
        },
    })
    return User;
}