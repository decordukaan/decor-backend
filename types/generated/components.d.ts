import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderitemOrderedItem extends Schema.Component {
  collectionName: 'components_orderitem_ordered_items';
  info: {
    displayName: 'Ordered-item';
    description: '';
  };
  attributes: {
    quantity: Attribute.Integer;
    price: Attribute.Integer;
    product: Attribute.Relation<
      'orderitem.ordered-item',
      'oneToOne',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'orderitem.ordered-item': OrderitemOrderedItem;
    }
  }
}
