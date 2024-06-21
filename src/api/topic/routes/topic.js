'use strict';

/**
 * topic router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter("api::topic.topic", {
    config: {
      find: {
        middlewares: ["api::topic.topic-populate-middleware"],
      },
      findOne: {
        middlewares: ["api::topic.topic-populate-middleware"],
      },
    },
});