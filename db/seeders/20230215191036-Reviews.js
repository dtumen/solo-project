'use strict';
const allReviews = require('../../src/seeds/reviews')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', allReviews.map((e) => ({
      book_name: e.book_name, rating: e.rating, review: e.review, picture: e.picture, user_id: e.user_id, createdAt: e.createdAt, updatedAt: e.updatedAt 
     })), {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
