"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      image: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
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
            populate:{
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
      muzes: {
        populate: {
          fields: ["name", "slug", "description", "shortDesc", "notes", "visitStartTime", "visitEndTime", "googleMapsUrl", "addressText"],
              coverImage: {
                populate: {
                  fields: ["url", "alternativeText", "caption", "width", "height"],
                }
              },
        },
      },
      museums: {
        populate:{
          fields: ["title", "desc"],
          muzes: {
            populate: {
              fields: ["name", "slug", "description", "shortDesc", "notes", "visitStartTime", "visitEndTime", "googleMapsUrl", "addressText"],
              coverImage: {
                populate: {
                  fields: ["url", "alternativeText", "caption", "width", "height"],
                }
              },
            },
          },
        }
      },
      events: {
       populate: {
        fields: ["name", "slug", "ticketUrl", "shortDesc", "description", "visitStartTime", "visitEndTime", "address", "notes", "startDate", "endDate"],
        image: {
          populate: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          }
        },
       }
      },
      encyclopedias: {
        populate: {
          fields: ["slug", "name", "desc", "shortDesc"],
          coverImage: {
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
              }
            },
          },
        }
      },
      author: {
        populate: {
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
        }
      }
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    await next();
  };
};
