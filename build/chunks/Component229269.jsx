/** Chunk was on web.js **/
/** chunk id: 229269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => A
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk801937 = require("./801937.jsx"),
  Chunk502109 = require("./502109.jsx"),
  Chunk241209 = require("./241209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk586585 = require("./586585.jsx"),
  Chunk439021 = require("./439021.jsx"),
  Chunk954824 = require("./954824.js"),
  Chunk450272 = require("./450272.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk403645 = require("./403645.js"),
  Chunk818033 = require("./818033.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A() {
  return (0, Chunk951288.jsx)(Chunk563132.PaymentContextProvider, {
    stepConfigs: [],
    skuIDs: [],
    activeSubscription: null,
    children: (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        className: Chunk403645.labelSpacing,
        children: "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser."
      }), (0, Chunk951288.jsx)(N, {}), (0, Chunk951288.jsx)(x, {}), (0, Chunk951288.jsx)(Z, {})]
    })
  })
}

function C() {
  let [e, t] = Chunk647438.useState("discord://".concat(location.host, "/feature/apple-payment-link")), n = () => {
    console.log("Opening deep link... ", module), Chunk954824.Z.launch(module, e => {
      console.log("onDone response: ", e)
    })
  };
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Deeplinking"
    }), (0, Chunk951288.jsxs)(Chunk450272.E_, {
      label: "Test Deeplinking with a Custom Path",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
        value: module,
        onChange: e => t(e),
        placeholder: "Enter DeepLink Url",
        fullWidth: true
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
        variant: "primary",
        size: "sm",
        text: "Test Deeplink",
        onClick: require
      })]
    })]
  })
}

function N() {
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Google Pay"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Google Pay - Default View",
      children: (0, Chunk951288.jsx)(R, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Google Pay - Connector View",
      children: (0, Chunk951288.jsx)(R, {
        paymentRequestWallet: "googlePay",
        renderConnectorView: true
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Google Pay - Add Payment Step Body Connector View",
      children: (0, Chunk951288.jsx)(w, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Apple Pay"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Default View",
      children: (0, Chunk951288.jsx)(R, {
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Connector View",
      children: (0, Chunk951288.jsx)(R, {
        renderConnectorView: true,
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Add Payment Step Body Connector View",
      children: (0, Chunk951288.jsx)(w, {
        paymentRequestWallet: "applePay"
      })
    })]
  })
}

function R(e) {
  let t = i.useRef(null),
    n = {
      paymentLabel: b.intl.string(b.t.ZURqX1),
      paymentRequestRef: t,
      onStripePaymentMethodReceived: () => {},
      onPaymentRequestFailure: () => {},
      onValidPaymentRequest: () => {},
      onChooseType: () => {},
      loadingComponent: (0, r.jsx)(c.$jN, {
        style: {
          marginTop: 16
        },
        type: c.RAz.PULSING_ELLIPSIS
      })
    };
  return e.renderStepBody ? (0, r.jsx)(h.t, I({}, n, e)) : "applePay" === e.paymentRequestWallet ? (0, r.jsx)(d.Ch, I({}, n, e)) : (0, r.jsx)(d.Tr, I({}, n, e))
}

function P(e) {
  let {
    children: t,
    footer: n,
    className: i
  } = e;
  return (0, r.jsx)("div", {
    className: s()(O.root, O.focusLock, O.small, O.rootWithShadow, y.modal, i),
    "aria-label": b.intl.string(b.t.eQ2bLi),
    children: (0, r.jsxs)("form", {
      className: y.form,
      onSubmit: e => {
        e.preventDefault()
      },
      children: [(0, r.jsx)(c.hzk, {
        className: y.scrollerContent,
        children: t
      }), n]
    })
  })
}

function w(e) {
  let {
    paymentRequestWallet: t
  } = e, n = i.useRef(null), [o, a] = i.useState(false), s = () => {
    null != n.current && n.current.show()
  };
  return (0, r.jsx)(P, {
    footer: (0, r.jsx)(p.Z, {
      primaryCTA: p.Z.CTAType.CONTINUE,
      primaryText: b.intl.string("applePay" === t ? b.t.WoXvJC : b.t.wnVVr6),
      primaryDisabled: !o,
      onPrimary: () => s(),
      onBack: () => {}
    }),
    children: (0, r.jsx)(R, {
      renderConnectorView: true,
      renderStepBody: true,
      paymentRequestWallet: t,
      paymentRequestRef: n,
      onValidPaymentRequest: () => a(true)
    })
  })
}

function D(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(P, {
    className: y.choosePaymentTypeModal,
    children: (0, r.jsx)("div", {
      className: y.choosePaymentTypeContainer,
      children: t
    })
  })
}

function x() {
  let e = {
    onChooseType: () => {},
    onStripePaymentMethodReceived: e => {
      console.log("onStripePaymentMethodReceived called: ", e)
    },
    isEligibleForTrial: false
  };
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Choose Payment Source Type Component"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "All Payment Request Wallets Enabled",
      children: (0, Chunk951288.jsx)(D, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, S(I({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: ["googlePay", "applePay"]
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "No Payment Wallets Enabled",
      children: (0, Chunk951288.jsx)(D, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, S(I({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Is Eligible for Trial",
      children: (0, Chunk951288.jsx)(D, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, S(I({}, module), {
          isEligibleForTrial: true,
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Only Stripe Card Enabled",
      children: (0, Chunk951288.jsx)(D, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, S(I({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: [],
          paymentSourceTypeRestrictions: [Chunk231338.He.CARD.valueOf()]
        }))
      })
    })]
  })
}
let L = {
    DEFAULT: "Express Checkout Element - Default (No Config)",
    GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
    APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
    APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
    CONFIGURABLE: "Express Checkout Element - Configurable"
  },
  j = {
    GPAY_FILTERED: {
      wallets: {
        googlePay: "always",
        applePay: "never"
      }
    },
    APPLE_PAY_FILTERED: {
      wallets: {
        googlePay: "never",
        applePay: "always"
      }
    },
    APPLE_AND_GPAY_DISABLED: {
      wallets: {
        googlePay: "never",
        applePay: "never"
      }
    }
  },
  k = {
    appearance: {
      theme: "flat",
      variables: {
        spacingUnit: "12px",
        borderRadius: "36px"
      }
    }
  },
  M = {
    buttonType: {
      googlePay: "pay",
      applePay: "book"
    },
    buttonTheme: {
      applePay: "black",
      googlePay: "white"
    },
    buttonHeight: 40
  },
  U = e => true !== e ? JSON.stringify(e, null, 2) : "undefined",
  G = "``";

function B() {
  let [e, t] = Chunk647438.useState(U(k)), [n, a] = Chunk647438.useState(k), [s, u] = Chunk647438.useState(U(M)), [d, _] = Chunk647438.useState(M), [p, h] = Chunk647438.useState(null), [m, E] = Chunk647438.useState((0, Chunk951288.jsx)(Chunk450272.DS, {
    errorLabel: L.CONFIGURABLE,
    elementOptions: k,
    children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
      onConfirm: e => {
        console.log("ExpressCheckoutElement onConfirm event: ", e)
      },
      options: M
    })
  })), b = () => {
    try {
      let t = JSON.parse(module),
        n = JSON.parse(s);
      Chunk231338(null), Chunk231338((0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-md/normal",
          className: Chunk403645.labelSpacing,
          children: ["Element updated at: ", new Date().toString()]
        }), (0, Chunk951288.jsx)(Chunk450272.DS, {
          errorLabel: L.CONFIGURABLE,
          elementOptions: exports,
          children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
            onConfirm: e => {
              console.log("ExpressCheckoutElement onConfirm event: ", e)
            },
            options: require
          })
        })]
      })), Chunk120356(exports), Chunk563132(require), Chunk439021(null)
    } catch (e) {
      console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", module), Chunk439021("Error parsing JSON. Check console for more information.")
    }
  };
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: ["Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.", (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)("br", {}), "Start by changing the `borderRadius` or `buttonHeight` as a test!"]
    }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: [(0, Chunk951288.jsx)("b", {
        children: "elements.options:"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk450272.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632"
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk403645.textarea,
      children: (0, Chunk951288.jsx)(Chunk481060.Kx8, {
        placeholder: "Stripe Elements Container Options",
        showCharacterCount: true,
        value: module,
        onChange: exports,
        rows: 7
      })
    }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: [(0, Chunk951288.jsx)("b", {
        children: "expressCheckoutElement.options:"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk450272.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk450272.lD, {
        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element"
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk403645.textarea,
      children: (0, Chunk951288.jsx)(Chunk481060.Kx8, {
        placeholder: "Stripe Express Checkout Element Options",
        showCharacterCount: true,
        value: s,
        onChange: Chunk801937,
        rows: 7
      })
    }), null != Chunk586585 && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-danger",
      children: Chunk586585
    }), (0, Chunk951288.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk403645.applyChangesButton,
      children: (0, Chunk951288.jsx)(Chunk680018.z, {
        variant: "primary",
        size: "sm",
        text: "Apply Changes",
        onClick: Chunk388032
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: "Current Element Options:"
    }), (0, Chunk951288.jsx)(Chunk241209.Z, {
      className: Chunk403645.markdown,
      children: "".concat(G, " ").concat(U(require), " ").concat(G)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: "Current Express Checkout Element Options:"
    }), (0, Chunk951288.jsx)(Chunk241209.Z, {
      className: Chunk403645.markdown,
      children: "".concat(G, " ").concat(U(Chunk502109), " ").concat(G)
    }), Chunk954824]
  })
}

function Z() {
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Stripe Express Checkout Buttons"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: L.DEFAULT,
      children: (0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk450272.DS, {
          errorLabel: L.DEFAULT,
          children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
            onConfirm: e => {
              console.log("ExpressCheckoutElement onConfirm event: ", e)
            },
            options: {}
          })
        })
      })
    }), ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map(e => {
      let t = L[e];
      return (0, r.jsx)(g.E_, {
        label: t,
        children: (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            className: y.labelSpacing,
            children: "expressCheckoutElement.options:"
          }), (0, r.jsx)(f.Z, {
            className: y.markdown,
            children: "".concat(G).concat(U(j[e]), " ").concat(G)
          }), (0, r.jsx)(g.DS, {
            errorLabel: t,
            children: (0, r.jsx)(o.ExpressCheckoutElement, {
              onConfirm: e => {
                console.log("ExpressCheckoutElement onConfirm event: ", e)
              },
              options: j[e]
            })
          })]
        })
      }, e)
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: L.CONFIGURABLE,
      children: (0, Chunk951288.jsx)(B, {})
    })]
  })
}