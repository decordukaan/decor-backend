'use strict';

/**
 * payment-step service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-step.payment-step');
