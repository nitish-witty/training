"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.deleteColumn(
        { schema: "app", tableName: "user" },
        "active"
      );
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.addColumn(
        { schema: "app", tableName: "user" },
        "active",
        {
          type: Sequelize.BOOLEAN,
          field: "active",
          allowNull: false,
          defaultValue: true
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
};
