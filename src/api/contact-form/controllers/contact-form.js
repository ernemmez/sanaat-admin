'use strict';

/**
 * contact-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
    async create(ctx) {
        const entity = await strapi.services['api::contact-form.contact-form'].create({
            data: {
                ...ctx.request.body,
                publishedAt: new Date(),
            }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
}));