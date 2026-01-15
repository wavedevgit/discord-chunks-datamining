/** Chunk was on web.js **/
/** chunk id: 277939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => u
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk902820 = require("./902820.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk570810 = require("./570810.js");
let u = {
  title: "Unified Checkout",
  stories: [{
    name: "Primitive: Order Summary Accordion",
    id: "unified-checkout-order-summary",
    component: e => {
      let {
        label: t,
        hasDiscount: n,
        hasLineItems: i
      } = e, a = i ? [{
        id: 1,
        label: "Nitro Basic (Monthly)",
        amount: 299
      }, {
        id: 2,
        label: "Server Boost",
        amount: 499
      }] : [];
      return n && i && a.push({
        id: 3,
        label: "Discount Applied",
        amount: false
      }), (0, r.jsx)("div", {
        className: c.orderSummaryContainer,
        children: (0, r.jsx)(o.Q, {
          label: t,
          lineItems: a,
          currency: s.pKx.USD
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
  }, {
    name: "Primitive: Nitro Plan Select",
    id: "unified-checkout-nitro-plan-select",
    component: e => {
      let {
        variant: t,
        leftTitleDescriber: n,
        leftPrimaryText: s,
        leftSubtext: l,
        leftShowSubtext: u,
        leftSubtextStrikethrough: d,
        rightTitleDescriber: f,
        rightPrimaryText: p,
        rightSubtext: _,
        rightShowSubtext: m,
        rightSubtextStrikethrough: h
      } = e, [g, E] = i.useState(0);
      return (0, r.jsxs)("div", {
        className: c.verticalContainerCentered,
        children: [(0, r.jsx)(o.z, {
          selection: g,
          onChange: E,
          planOptions: [{
            id: 0,
            title: (0, r.jsx)(o.u2, {
              size: "sm",
              color: "text-strong",
              premiumType: t
            }),
            titleDescriber: n,
            primaryText: s,
            subtext: u ? (0, r.jsx)(o.zl, {
              strikethrough: d,
              price: l
            }) : true
          }, {
            id: 1,
            title: (0, r.jsx)(o.u2, {
              size: "sm",
              color: "text-strong",
              premiumType: t
            }),
            titleDescriber: f,
            primaryText: p,
            subtext: m ? (0, r.jsx)(o.zl, {
              strikethrough: h,
              price: _
            }) : true
          }]
        }), (0, r.jsxs)(a.Text, {
          variant: "text-sm/normal",
          children: ["Selected plan index: ", g]
        })]
      })
    },
    controls: {
      variant: {
        label: "Nitro Variant",
        type: "select",
        defaultValue: Chunk474936.PremiumTypes.TIER_2,
        options: [{
          label: "Nitro",
          value: Chunk474936.PremiumTypes.TIER_2
        }, {
          label: "Nitro Basic",
          value: Chunk474936.PremiumTypes.TIER_0
        }]
      },
      leftTitleDescriber: {
        label: "Left Card - Title Describer",
        type: "text",
        defaultValue: "yearly"
      },
      leftPrimaryText: {
        label: "Left Card - Primary Text",
        type: "text",
        defaultValue: "$99.99"
      },
      leftSubtext: {
        label: "Left Card - Subtext",
        type: "text",
        defaultValue: "$119.99"
      },
      leftShowSubtext: {
        label: "Left Card - Show Subtext",
        type: "boolean",
        defaultValue: true
      },
      leftSubtextStrikethrough: {
        label: "Left Card - Subtext Strikethrough",
        type: "boolean",
        defaultValue: true
      },
      rightTitleDescriber: {
        label: "Right Card - Title Describer",
        type: "text",
        defaultValue: "monthly"
      },
      rightPrimaryText: {
        label: "Right Card - Primary Text",
        type: "text",
        defaultValue: "$9.99"
      },
      rightSubtext: {
        label: "Right Card - Subtext",
        type: "text",
        defaultValue: "$11.99"
      },
      rightShowSubtext: {
        label: "Right Card - Show Subtext",
        type: "boolean",
        defaultValue: false
      },
      rightSubtextStrikethrough: {
        label: "Right Card - Subtext Strikethrough",
        type: "boolean",
        defaultValue: false
      }
    }
  }]
}