/** Chunk was on web.js **/
/** chunk id: 277939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk902820 = require("./902820.js"),
  Chunk981631 = require("./981631.js"),
  Chunk570810 = require("./570810.js");
let s = {
  title: "Unified Checkout",
  stories: [{
    name: "Primitive: Order Summary Accordion",
    id: "unified-checkout-order-summary",
    component: e => {
      let {
        label: t,
        hasDiscount: n,
        hasLineItems: s
      } = e, l = s ? [{
        id: 1,
        label: "Nitro Basic (Monthly)",
        amount: 299
      }, {
        id: 2,
        label: "Server Boost",
        amount: 499
      }] : [];
      return n && s && l.push({
        id: 3,
        label: "Discount Applied",
        amount: false
      }), (0, r.jsx)("div", {
        className: o.orderSummaryContainer,
        children: (0, r.jsx)(i.Q, {
          label: t,
          lineItems: l,
          currency: a.pKx.USD
        })
      })
    },
    controls: {
      label: {
        label: "Label",
        type: "text",
        defaultValue: "Order Summary"
      },
      hasDiscount: {
        label: "Has Discount",
        type: "boolean",
        defaultValue: true
      },
      hasLineItems: {
        label: "Has Line Items",
        type: "boolean",
        defaultValue: true
      }
    }
  }]
}