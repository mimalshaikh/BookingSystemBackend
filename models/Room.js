const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/connectDb")
const Room = sequelize.define("rooms", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    roomNumber: {
        type: DataTypes.STRING,
    },
    roomStatus: {
        type: DataTypes.STRING,
        default:"Available"
    },
    roomSize:{
        type: DataTypes.STRING,
    },
    roomCapacity:{
        type: DataTypes.INTEGER,
    }
}, { timestamps: false, } // Add this to disable the default timestamps
);
module.exports = Room;
