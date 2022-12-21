'use strict';

/**
 * gun service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gun.gun');
