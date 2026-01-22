/** Chunk was on web.js **/
/** chunk id: 504312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => d
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk93159 = require("./93159.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk749226 = require("./749226.js");
let d = {
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
        className: u.SG,
        children: (0, r.jsx)(o.Vm, {
          label: t,
          lineItems: a,
          currency: l.Yri.USD
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
        leftPrimaryText: a,
        leftSubtext: l,
        leftShowSubtext: c,
        leftSubtextStrikethrough: d,
        rightTitleDescriber: f,
        rightPrimaryText: p,
        rightSubtext: _,
        rightShowSubtext: h,
        rightSubtextStrikethrough: m
      } = e, [g, E] = i.useState(0);
      return (0, r.jsxs)("div", {
        className: u.Cd,
        children: [(0, r.jsx)(o.q7, {
          selection: g,
          onChange: E,
          planOptions: [{
            id: 0,
            title: (0, r.jsx)(o.ec, {
              size: "sm",
              color: "text-strong",
              premiumType: t
            }),
            titleDescriber: n,
            primaryText: a,
            subtext: c ? (0, r.jsx)(o.Lo, {
              strikethrough: d,
              price: l
            }) : true
          }, {
            id: 1,
            title: (0, r.jsx)(o.ec, {
              size: "sm",
              color: "text-strong",
              premiumType: t
            }),
            titleDescriber: f,
            primaryText: p,
            subtext: h ? (0, r.jsx)(o.Lo, {
              strikethrough: m,
              price: _
            }) : true
          }]
        }), (0, r.jsxs)(s.Text, {
          variant: "text-sm/normal",
          children: ["Selected plan index: ", g]
        })]
      })
    },
    controls: {
      variant: {
        label: "Nitro Variant",
        type: "select",
        defaultValue: Chunk788868.PremiumTypes.TIER_2,
        options: [{
          label: "Nitro",
          value: Chunk788868.PremiumTypes.TIER_2
        }, {
          label: "Nitro Basic",
          value: Chunk788868.PremiumTypes.TIER_0
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
  }, {
    name: "Primitive: Subscription Details Accordion",
    id: "unified-checkout-subscription-details",
    component: e => {
      let {
        label: t,
        hasLineItems: n
      } = e, i = n ? [{
        id: 1,
        label: "Nitro Basic",
        amount: 299,
        tooltip: "You are purchasing a plan change. Your server boosts are being updated accordingly."
      }, {
        id: 2,
        label: "Server Boost",
        amount: 499,
        icon: (0, r.jsx)(a.tvc, {
          size: "xs"
        })
      }] : [];
      return (0, r.jsx)("div", {
        className: u.SG,
        children: (0, r.jsx)(o._D, {
          label: t,
          lineItems: i,
          intervalType: c.WT.MONTH,
          intervalCount: 1,
          currency: l.Yri.USD
        })
      })
    },
    controls: {
      label: {
        label: "Label",
        type: "text",
        defaultValue: "Subscription Details"
      },
      hasLineItems: {
        label: "Has Line Items",
        type: "boolean",
        defaultValue: true
      }
    }
  }]
}