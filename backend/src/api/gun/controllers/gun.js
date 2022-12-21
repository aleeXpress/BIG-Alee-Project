'use strict';

/**
 * gun controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::gun.gun');
