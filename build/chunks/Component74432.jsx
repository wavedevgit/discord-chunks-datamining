/** Chunk was on web.js **/
/** chunk id: 74432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  iZ: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk575053 = require("./575053.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk476365 = require("./476365.js"),
  Chunk483454 = require("./483454.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk409813 = require("./409813.js"),
  Chunk771206 = require("./771206.js"),
  Chunk938590 = require("./938590.jsx"),
  Chunk590617 = require("./590617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk701323 = require("./701323.js"),
  Chunk616926 = require("./616926.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = new Chunk710845.Z("PaymentElement.web.stories"),
  S = "Color Text",
  I = "Color Background",
  T = "Input Background Color",
  A = "Tab Background Color",
  C = e => ({
    key: d.h8.ADD_PAYMENT_STEPS,
    renderStep: () => (0, r.jsx)("div", {}),
    options: {
      renderHeader: false,
      bodyClassName: "joined-payment-address-elements" === e ? h.fullLengthPaymentElementStepModalBody : h.paymentElementStepModalBody
    }
  }),
  N = () => {
    let {
      elementsAppearanceOptions: e
    } = (0, Chunk476365.M)();
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        className: Chunk616926.headerWithSpacing,
        children: "Default Options"
      }), (0, Chunk54381.jsx)("div", {
        children: Object.entries(module).map(e => {
          let [t, n] = e;
          return (0, r.jsx)(p.T, {
            label: t,
            value: n
          }, t)
        })
      })]
    })
  },
  P = e => {
    let {
      theme: t,
      colorText: n,
      colorBackground: a,
      inputBackgroundColor: u,
      tabBackgroundColor: p,
      storyType: E
    } = e, y = (0, f.Z)(), {
      stripePaymentElementProps: S,
      stripeAddressElementProps: I
    } = (0, c.MM)({
      step: d.h8.PAYMENT_ELEMENT,
      handleStepChange: m.dG4,
      onBillingAddressChange: m.dG4,
      paymentElementsEnabled: true,
      logger: v,
      shouldLogOnChangeEvents: true,
      continueSessionToInitialStep: true
    }), {
      elementsOptions: T,
      isLoading: A,
      setupError: P,
      customPaymentMethodIdsToSourceTypes: R
    } = (0, l.S)({
      onSetupError: e => {
        v.info("Stripe Payment Element options setup error: ", e)
      },
      elementsAppearanceOptions: {
        theme: t,
        colorText: n,
        colorBackground: a,
        inputBackgroundColor: u,
        tabBackgroundColor: p
      }
    });
    return A || null != P || null == y ? (0, r.jsx)(c.p7, {}) : (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        style: {
          marginBottom: 16
        },
        children: (0, r.jsx)(s.M14, {
          type: "info",
          children: "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access."
        })
      }), (0, r.jsxs)("div", {
        className: h.paymentElementStoryContainer,
        children: [(0, r.jsx)(_.H, {
          stepConfigs: [C(E)],
          children: (0, r.jsx)("div", {
            className: o()(h.paymentElementContainer, {
              [h.fullLengthPaymentElementContainer]: "joined-payment-address-elements" === E
            }),
            children: (0, r.jsxs)(i.Elements, {
              stripe: y,
              options: b({}, T),
              children: ["stripe-address-element" === E ? (0, r.jsx)("div", {
                className: g.hidden,
                children: (0, r.jsx)(c.Q5, O(b({}, S), {
                  customPaymentMethodIdsToSourceTypes: R,
                  step: d.h8.PAYMENT_ELEMENT
                }))
              }) : (0, r.jsx)(c.Q5, O(b({}, S), {
                customPaymentMethodIdsToSourceTypes: R,
                step: d.h8.PAYMENT_ELEMENT
              })), ("joined-payment-address-elements" === E || "stripe-address-element" === E) && (0, r.jsx)(c.wk, O(b({}, I), {
                billingAddressInfo: {
                  email: "",
                  name: "",
                  country: "",
                  line1: "",
                  line2: "",
                  city: "",
                  postalCode: "",
                  state: ""
                }
              }))]
            })
          })
        }), (0, r.jsx)(N, {})]
      })]
    })
  },
  R = e => (0, r.jsx)(P, O(b({}, e), {
    storyType: "joined-payment-address-elements"
  })),
  w = e => (0, r.jsx)(P, O(b({}, e), {
    storyType: "stripe-payment-element"
  })),
  D = e => (0, r.jsx)(P, O(b({}, e), {
    storyType: "stripe-address-element"
  })),
  x = {
    theme: {
      label: "Theme",
      type: "select",
      options: ["flat", "stripe", "night"].map(e => ({
        label: e.toLocaleUpperCase(),
        value: e
      })),
      defaultValue: "flat"
    },
    colorText: {
      label: S,
      type: "text",
      defaultValue: "#2f3035"
    },
    colorBackground: {
      label: I,
      type: "text",
      defaultValue: "#ffffff"
    },
    inputBackgroundColor: {
      label: T,
      type: "text",
      defaultValue: "#00000014"
    },
    tabBackgroundColor: {
      label: A,
      type: "text",
      defaultValue: "#00000014"
    }
  },
  L = {
    name: "Joined Payment + Address",
    id: "joined-payment-address-elements",
    component: R,
    controls: b({}, x)
  },
  j = {
    title: "Payment Elements",
    stories: [{
      name: "Stripe Payment Element",
      id: "stripe-payment-element",
      component: w,
      controls: b({}, x)
    }, {
      name: "Stripe Address Element",
      id: "stripe-address-element",
      component: D,
      controls: b({}, x)
    }, L]
  }