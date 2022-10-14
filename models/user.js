module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        married: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        create_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('now()')
        },
    }, {
        timestamps: false,
        underscored: true,    
    });
}