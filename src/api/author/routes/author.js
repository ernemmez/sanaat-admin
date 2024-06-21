'use strict';

/**
 * author router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter("api::author.author", {
    config: {
      find: {
        middlewares: ["api::author.author-populate-middleware"],
      },
      findOne: {
        middlewares: ["api::author.author-populate-middleware"],
      },
    },
});