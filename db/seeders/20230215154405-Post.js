'use strict';

const posts = require('../../src/seeds/posts')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Posts', posts.map((e) => ({
      post_name: e.post_name, subject: e.subject, post: e.post, picture: e.picture, user_id: e.user_id, createdAt: e.createdAt, updatedAt: e.updatedAt 
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
