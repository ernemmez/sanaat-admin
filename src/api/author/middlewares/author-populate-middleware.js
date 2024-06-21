'use strict';

/**
 * `topic` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = {
      fields: ["name", "slug", "about"],
        image: {
          populate: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          }
        },
        topics: {
          populate: {
            fields: ["title", "slug", "QuickTable", "TopicKeywords", "isBlogText", "createdBy", "content"],
            CoverImage: {
              populate: {
                coverImage: {
                  fields: ["url", "alternativeText", "caption", "width", "height"],
                },
              }
            },
            QuickTable: {
              populate: {
                fields: ["title", "content"],
                content: {
                  populate: {
                    fields: ["label", "value"]
                  }
                }
              }
            },
            author: {
              populate: {
                fields: ["name", "slug", "about"],
                image: {
                  populate: {
                    fields: ["url", "alternativeText", "caption", "width", "height"],
                  }
                }
              }
            }
          },
        },
    };
    await next();
  };
};