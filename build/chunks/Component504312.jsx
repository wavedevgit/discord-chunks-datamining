/** Chunk was on web.js **/
/** chunk id: 504312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => f
}), require("./321073.js"), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk397927 = require("./397927.js"),
  Chunk93159 = require("./93159.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk749226 = require("./749226.js");
let f = {
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
        className: d.SG,
        children: (0, r.jsx)(s.Vm, {
          label: t,
          lineItems: a,
          currency: c.Yri.USD
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
        leftSubtextStrikethrough: u,
        rightTitleDescriber: f,
        rightPrimaryText: p,
        rightSubtext: _,
        rightShowSubtext: h,
        rightSubtextStrikethrough: m
      } = e, [g, E] = i.useState(0);
      return (0, r.jsxs)("div", {
        className: d.Cd,
        children: [(0, r.jsx)(s.q7, {
          selection: g,
          onChange: E,
          planOptions: [{
            id: 0,
            title: (0, r.jsx)(s.ec, {
              size: "sm",
              color: "text-strong",
              premiumType: t
            }),
            titleDescriber: n,
            primaryText: a,
            subtext: c ? (0, r.jsx)(s.Lo, {
              strikethrough: u,
              price: l
            }) : true
          }, {
            id: 1,
            title: (0, r.jsx)(s.ec, {
              size: "sm",
              color: "text-strong",
              premiumType: t
            }),
            titleDescriber: f,
            primaryText: p,
            subtext: h ? (0, r.jsx)(s.Lo, {
              strikethrough: m,
              price: _
            }) : true
          }]
        }), (0, r.jsxs)(o.Text, {
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
        icon: (0, r.jsx)(o.tvc, {
          size: "xs"
        })
      }] : [];
      return (0, r.jsx)("div", {
        className: d.SG,
        children: (0, r.jsx)(s._D, {
          label: t,
          lineItems: i,
          intervalType: u.WT.MONTH,
          intervalCount: 1,
          currency: c.Yri.USD
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
  }, {
    name: "Primitive: Purchase Item",
    id: "unified-checkout-purchase-item",
    component: e => {
      let {
        header: t,
        showHeader: n,
        label: i,
        description: a,
        price: l,
        hasPriceIcon: c,
        hasStrikethroughPrice: u,
        strikethroughPrice: f,
        hasGift: p,
        giftUsername: _,
        giftNickname: h
      } = e;

      function m(e, d) {
        return (0, r.jsx)(s.f7, {
          header: n ? t : true,
          headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
          label: "".concat(i, " ").concat(d),
          description: a,
          price: l,
          PriceIcon: c ? o.tvc : true,
          strikethroughPrice: u ? f : true,
          graphic: (0, r.jsx)(e, {}),
          gift: p ? {
            username: _,
            nickname: h,
            avatarUrl: "https://cdn.discordapp.com/embed/avatars/2.png"
          } : true
        })
      }
      return (0, r.jsxs)("div", {
        className: d.SG,
        children: [m(s.JW, "Nitro"), m(s.DH, "Nitro Basic"), m(s.a6, "Boost"), m(s.jw, "App"), m(s.oo, "Nitro Credit")]
      })
    },
    controls: {
      header: {
        label: "Header",
        type: "text",
        defaultValue: "Marvel Rivals"
      },
      showHeader: {
        label: "Show Header",
        type: "boolean",
        defaultValue: false
      },
      label: {
        label: "Label",
        type: "text",
        defaultValue: "1 Month of"
      },
      description: {
        label: "Description",
        type: "text",
        defaultValue: "This is describing the item"
      },
      price: {
        label: "Price",
        type: "text",
        defaultValue: "$9.99"
      },
      hasPriceIcon: {
        label: "Has Price Icon",
        type: "boolean",
        defaultValue: false
      },
      hasStrikethroughPrice: {
        label: "Has Strikethrough Price",
        type: "boolean",
        defaultValue: false
      },
      strikethroughPrice: {
        label: "Strikethrough Price",
        type: "text",
        defaultValue: "$12.99"
      },
      hasGift: {
        label: "Has Gift",
        type: "boolean",
        defaultValue: false
      },
      giftUsername: {
        label: "Gift Username",
        type: "text",
        defaultValue: "moatmonster"
      },
      giftNickname: {
        label: "Gift Nickname",
        type: "text",
        defaultValue: "Matt"
      }
    }
  }, {
    name: "Primitive: Payment Select",
    id: "unified-checkout-payment-select",
    component: e => {
      let {
        label: t,
        disabled: n,
        error: c,
        errorMessage: u
      } = e, d = [{
        id: "visa-1234",
        label: "Visa ending in 1234",
        icon: l.Be.VISA
      }, {
        id: "mastercard-5678",
        label: "Mastercard ending in 5678",
        icon: l.Be.MASTERCARD
      }, {
        id: "paypal",
        label: "user@example.com",
        icon: l.Be.PAYPAL
      }, {
        id: "amex-9012",
        label: "Amex ending in 9012",
        icon: l.Be.AMEX
      }], [f, p] = i.useState(d[0].id);
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.v7, {
          label: t,
          value: f,
          options: d,
          onChange: p,
          onNew: a.noop,
          disabled: n,
          error: c ? u : true
        }), (0, r.jsxs)(o.Text, {
          variant: "text-sm/normal",
          children: ["Selected payment: ", null != f ? f : "None"]
        })]
      })
    },
    controls: {
      label: {
        label: "Label",
        type: "text",
        defaultValue: "Payment Method"
      },
      disabled: {
        label: "Disabled",
        type: "boolean",
        defaultValue: false
      },
      error: {
        label: "Show Error",
        type: "boolean",
        defaultValue: false
      },
      errorMessage: {
        label: "Error Message",
        type: "text",
        defaultValue: "Please select a valid payment method"
      }
    }
  }]
}