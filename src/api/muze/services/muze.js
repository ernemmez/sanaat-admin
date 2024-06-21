'use strict';

/**
 * muze service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::muze.muze');
