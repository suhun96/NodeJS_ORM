module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('comment',{
        comment: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('now()')
        },

    }, {
        timestamps: false,
        underscored: true,
    });
}