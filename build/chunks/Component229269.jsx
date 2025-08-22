/** Chunk was on web.js **/
/** chunk id: 229269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => C
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk680018 = require("./680018.jsx"),
  Chunk159691 = require("./159691.js"),
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C() {
  return (0, Chunk951288.jsx)(Chunk563132.PaymentContextProvider, {
    stepConfigs: [],
    skuIDs: [],
    activeSubscription: null,
    children: (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(N, {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        className: Chunk403645.labelSpacing,
        children: "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser."
      }), (0, Chunk951288.jsx)(R, {}), (0, Chunk951288.jsx)(L, {}), (0, Chunk951288.jsx)(V, {})]
    })
  })
}

function N() {
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

function R() {
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Google Pay"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Google Pay - Default View",
      children: (0, Chunk951288.jsx)(P, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Google Pay - Connector View",
      children: (0, Chunk951288.jsx)(P, {
        paymentRequestWallet: "googlePay",
        renderConnectorView: true
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Google Pay - Add Payment Step Body Connector View",
      children: (0, Chunk951288.jsx)(D, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Apple Pay"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Default View",
      children: (0, Chunk951288.jsx)(P, {
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Connector View",
      children: (0, Chunk951288.jsx)(P, {
        renderConnectorView: true,
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Add Payment Step Body Connector View",
      children: (0, Chunk951288.jsx)(D, {
        paymentRequestWallet: "applePay"
      })
    })]
  })
}

function P(e) {
  let t = i.useRef(null),
    n = {
      paymentLabel: y.intl.string(y.t.ZURqX1),
      paymentRequestRef: t,
      onStripePaymentMethodReceived: () => {},
      onPaymentRequestFailure: () => {},
      onValidPaymentRequest: () => {},
      onChooseType: () => {},
      loadingComponent: (0, r.jsx)(u.$jN, {
        style: {
          marginTop: 16
        },
        type: u.RAz.PULSING_ELLIPSIS
      })
    };
  return e.renderStepBody ? (0, r.jsx)(m.t, T({}, n, e)) : "applePay" === e.paymentRequestWallet ? (0, r.jsx)(f.Ch, T({}, n, e)) : (0, r.jsx)(f.Tr, T({}, n, e))
}

function w(e) {
  let {
    children: t,
    footer: n,
    className: i
  } = e;
  return (0, r.jsx)("div", {
    className: s()(v.root, v.focusLock, v.small, v.rootWithShadow, O.modal, i),
    "aria-label": y.intl.string(y.t.eQ2bLi),
    children: (0, r.jsxs)("form", {
      className: O.form,
      onSubmit: e => {
        e.preventDefault()
      },
      children: [(0, r.jsx)(u.hzk, {
        className: O.scrollerContent,
        children: t
      }), n]
    })
  })
}

function D(e) {
  let {
    paymentRequestWallet: t
  } = e, n = i.useRef(null), [a, o] = i.useState(false), s = () => {
    null != n.current && n.current.show()
  };
  return (0, r.jsx)(w, {
    footer: (0, r.jsx)(h.Z, {
      primaryCTA: h.Z.CTAType.CONTINUE,
      primaryText: y.intl.string("applePay" === t ? y.t.WoXvJC : y.t.wnVVr6),
      primaryDisabled: !a,
      onPrimary: () => s(),
      onBack: () => {}
    }),
    children: (0, r.jsx)(P, {
      renderConnectorView: true,
      renderStepBody: true,
      paymentRequestWallet: t,
      paymentRequestRef: n,
      onValidPaymentRequest: () => o(true)
    })
  })
}

function x(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(w, {
    className: O.choosePaymentTypeModal,
    children: (0, r.jsx)("div", {
      className: O.choosePaymentTypeContainer,
      children: t
    })
  })
}

function L() {
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
      children: (0, Chunk951288.jsx)(x, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, A(T({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: ["googlePay", "applePay"]
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "No Payment Wallets Enabled",
      children: (0, Chunk951288.jsx)(x, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, A(T({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Is Eligible for Trial",
      children: (0, Chunk951288.jsx)(x, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, A(T({}, module), {
          isEligibleForTrial: true,
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Only Stripe Card Enabled",
      children: (0, Chunk951288.jsx)(x, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, A(T({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: [],
          paymentSourceTypeRestrictions: [Chunk231338.He.CARD.valueOf()]
        }))
      })
    })]
  })
}
let j = {
    DEFAULT: "Express Checkout Element - Default (No Config)",
    GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
    APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
    APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
    CONFIGURABLE: "Express Checkout Element - Configurable"
  },
  M = {
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
  U = {
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
  G = e => true !== e ? JSON.stringify(e, null, 2) : "undefined",
  B = "``";

function Z() {
  let [e, t] = Chunk647438.useState(G(k)), [n, o] = Chunk647438.useState(k), [s, d] = Chunk647438.useState(G(U)), [f, p] = Chunk647438.useState(U), [h, m] = Chunk647438.useState(null), [g, b] = Chunk647438.useState((0, Chunk951288.jsx)(Chunk450272.DS, {
    errorLabel: j.CONFIGURABLE,
    elementOptions: k,
    children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
      onConfirm: e => {
        console.log("ExpressCheckoutElement onConfirm event: ", e)
      },
      options: U
    })
  })), y = () => {
    try {
      let t = JSON.parse(module),
        n = JSON.parse(s);
      Chunk231338(null), Chunk231338((0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-md/normal",
          className: Chunk403645.labelSpacing,
          children: ["Element updated at: ", new Date().toString()]
        }), (0, Chunk951288.jsx)(Chunk450272.DS, {
          errorLabel: j.CONFIGURABLE,
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
      children: (0, Chunk951288.jsx)(Chunk159691.Kx, {
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
      children: (0, Chunk951288.jsx)(Chunk159691.Kx, {
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
      children: "".concat(B, " ").concat(G(require), " ").concat(B)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: "Current Express Checkout Element Options:"
    }), (0, Chunk951288.jsx)(Chunk241209.Z, {
      className: Chunk403645.markdown,
      children: "".concat(B, " ").concat(G(Chunk502109), " ").concat(B)
    }), Chunk954824]
  })
}

function V() {
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Stripe Express Checkout Buttons"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: j.DEFAULT,
      children: (0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk450272.DS, {
          errorLabel: j.DEFAULT,
          children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
            onConfirm: e => {
              console.log("ExpressCheckoutElement onConfirm event: ", e)
            },
            options: {}
          })
        })
      })
    }), ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map(e => {
      let t = j[e];
      return (0, r.jsx)(E.E_, {
        label: t,
        children: (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            className: O.labelSpacing,
            children: "expressCheckoutElement.options:"
          }), (0, r.jsx)(_.Z, {
            className: O.markdown,
            children: "".concat(B).concat(G(M[e]), " ").concat(B)
          }), (0, r.jsx)(E.DS, {
            errorLabel: t,
            children: (0, r.jsx)(a.ExpressCheckoutElement, {
              onConfirm: e => {
                console.log("ExpressCheckoutElement onConfirm event: ", e)
              },
              options: M[e]
            })
          })]
        })
      }, e)
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: j.CONFIGURABLE,
      children: (0, Chunk951288.jsx)(Z, {})
    })]
  })
}