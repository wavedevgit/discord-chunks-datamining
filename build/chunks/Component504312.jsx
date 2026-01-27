/** Chunk was on web.js **/
/** chunk id: 504312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => w
}), require("./321073.js"), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk96337 = require("./96337.js"),
  Chunk997101 = require("./997101.js"),
  Chunk397927 = require("./397927.js"),
  Chunk169797 = require("./169797.jsx"),
  Chunk93159 = require("./93159.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk749226 = require("./749226.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let O = {
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
        className: _.SG,
        children: (0, r.jsx)(u.Vm, {
          label: t,
          lineItems: a,
          currency: f.Yri.USD
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
  },
  v = {
    name: "Primitive: Nitro Plan Select",
    id: "unified-checkout-nitro-plan-select",
    component: e => {
      let {
        variant: t,
        leftTitleDescriber: n,
        leftPrimaryText: a,
        leftSubtext: o,
        leftShowSubtext: s,
        leftSubtextStrikethrough: c,
        rightTitleDescriber: d,
        rightPrimaryText: f,
        rightSubtext: p,
        rightShowSubtext: h,
        rightSubtextStrikethrough: m
      } = e, [g, E] = i.useState(0);
      return (0, r.jsxs)("div", {
        className: _.Cd,
        children: [(0, r.jsx)(u.q7, {
          selection: g,
          onChange: E,
          planOptions: [{
            id: 0,
            title: (0, r.jsx)(u.ec, {
              size: "sm",
              color: "text-strong",
              premiumType: t
            }),
            titleDescriber: n,
            primaryText: a,
            subtext: s ? (0, r.jsx)(u.Lo, {
              strikethrough: c,
              price: o
            }) : true
          }, {
            id: 1,
            title: (0, r.jsx)(u.ec, {
              size: "sm",
              color: "text-strong",
              premiumType: t
            }),
            titleDescriber: d,
            primaryText: f,
            subtext: h ? (0, r.jsx)(u.Lo, {
              strikethrough: m,
              price: p
            }) : true
          }]
        }), (0, r.jsxs)(l.Text, {
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
  },
  A = {
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
        icon: (0, r.jsx)(l.tvc, {
          size: "xs"
        })
      }] : [];
      return (0, r.jsx)("div", {
        className: _.SG,
        children: (0, r.jsx)(u._D, {
          label: t,
          lineItems: i,
          intervalType: p.WT.MONTH,
          intervalCount: 1,
          currency: f.Yri.USD
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
  },
  I = {
    name: "Primitive: Purchase Item",
    id: "unified-checkout-purchase-item",
    component: e => {
      let {
        header: t,
        showHeader: n,
        label: i,
        description: a,
        price: o,
        hasPriceIcon: s,
        hasStrikethroughPrice: c,
        strikethroughPrice: d,
        hasGift: f,
        giftUsername: p,
        giftNickname: h
      } = e;

      function m(e, _) {
        return (0, r.jsx)(u.f7, {
          header: n ? t : true,
          headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
          label: "".concat(i, " ").concat(_),
          description: a,
          price: o,
          PriceIcon: s ? l.tvc : true,
          strikethroughPrice: c ? d : true,
          graphic: (0, r.jsx)(e, {}),
          gift: f ? {
            username: p,
            nickname: h,
            avatarUrl: "https://cdn.discordapp.com/embed/avatars/2.png"
          } : true
        })
      }
      return (0, r.jsxs)("div", {
        className: _.SG,
        children: [m(u.JW, "Nitro"), m(u.DH, "Nitro Basic"), m(u.a6, "Boost"), m(u.jw, "App"), m(u.oo, "Nitro Credit")]
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
  },
  S = {
    name: "Primitive: Payment Select",
    id: "unified-checkout-payment-select",
    component: e => {
      let {
        label: t,
        disabled: n,
        error: o,
        errorMessage: s
      } = e, c = [{
        id: "visa-1234",
        label: "Visa ending in 1234",
        icon: d.Be.VISA
      }, {
        id: "mastercard-5678",
        label: "Mastercard ending in 5678",
        icon: d.Be.MASTERCARD
      }, {
        id: "paypal",
        label: "user@example.com",
        icon: d.Be.PAYPAL
      }, {
        id: "amex-9012",
        label: "Amex ending in 9012",
        icon: d.Be.AMEX
      }], [f, p] = i.useState(c[0].id);
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.v7, {
          label: t,
          value: f,
          options: c,
          onChange: p,
          onNew: a.noop,
          disabled: n,
          error: o ? s : true
        }), (0, r.jsxs)(l.Text, {
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
  },
  T = {
    "nitro-wheel": Chunk397927.tvc,
    gift: Chunk397927.okO,
    orbs: Chunk397927.Cp8
  };

function C(e) {
  let {
    primaryButtonText: t,
    primaryButtonIcon: n
  } = e, i = y(e, ["primaryButtonText", "primaryButtonIcon"]);
  return (0, r.jsxs)(l.BJc, {
    gap: 16,
    align: "center",
    children: [(0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: "Click the button below to open the Unified Checkout modal"
    }), (0, r.jsx)(l.Button, {
      variant: "primary",
      text: "Open Unified Checkout Modal",
      onClick: () => (0, l.qfG)(e => (0, r.jsx)(c.oH, E(m({}, e, i), {
        title: i.title,
        primaryButtonProps: {
          onClick: e.onClose,
          text: t,
          icon: "none" !== n ? T[n] : true
        },
        onBackClick: e.onClose,
        children: (0, r.jsx)(l.BJc, {
          gap: 16,
          children: (0, r.jsx)("div", {
            style: {
              border: "1px solid blue",
              height: 500
            },
            children: "The Unified Checkout step content will go here."
          })
        })
      })), {
        dismissable: i.dismissable
      })
    })]
  })
}
let N = Chunk96337.A.map(e => ({
    id: e.alpha2,
    value: e.alpha2,
    label: e.name
  })),
  w = {
    title: "Unified Checkout",
    stories: [{
      name: "Modal: Unified Checkout Stateless Modal",
      id: "unified-checkout-stateless-modal",
      component: C,
      controls: {
        title: {
          label: "Title",
          type: "text",
          defaultValue: "Checkout"
        },
        primaryButtonText: {
          label: "Primary Button Text",
          type: "text",
          defaultValue: "Get Nitro Yearly"
        },
        primaryButtonIcon: {
          label: "Primary Button Icon",
          type: "select",
          defaultValue: "nitro-wheel",
          options: [{
            label: "Nitro Wheel",
            value: "nitro-wheel"
          }, {
            label: "Gift",
            value: "gift"
          }, {
            label: "Orbs",
            value: "orbs"
          }, {
            label: "None",
            value: "none"
          }]
        },
        countryCode: {
          label: "Country Code",
          type: "select",
          defaultValue: Chunk997101.d.US,
          options: N
        },
        headerPillText: {
          label: "Header Pill Text",
          type: "text",
          defaultValue: "PROMO"
        },
        gradientColor: {
          label: "Gradient Color",
          type: "select",
          defaultValue: "nitro-pink",
          options: [{
            label: "Nitro Pink",
            value: "nitro-pink"
          }, {
            label: "Nitro Green",
            value: "nitro-green"
          }, {
            label: "Purple",
            value: "purple"
          }, {
            label: "Blue",
            value: "blue"
          }]
        },
        dismissable: {
          label: "Dismissable",
          type: "boolean",
          defaultValue: true
        }
      }
    }, O, v, A, I, S]
  }