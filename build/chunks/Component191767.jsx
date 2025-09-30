/** Chunk was on 52461 **/
/** chunk id: 191767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => E
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk801937 = require("./801937.jsx"),
  Chunk502109 = require("./502109.jsx"),
  Chunk241209 = require("./241209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk586585 = require("./586585.jsx"),
  Chunk439021 = require("./439021.jsx"),
  Chunk954824 = require("./954824.js"),
  Chunk237012 = require("./237012.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306197 = require("./306197.js"),
  Chunk818033 = require("./818033.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E() {
  return (0, Chunk951288.jsx)(Chunk563132.PaymentContextProvider, {
    stepConfigs: [],
    skuIDs: [],
    activeSubscription: null,
    children: (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(N, {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        className: Chunk306197.labelSpacing,
        children: "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser."
      }), (0, Chunk951288.jsx)(S, {}), (0, Chunk951288.jsx)(k, {}), (0, Chunk951288.jsx)(M, {})]
    })
  })
}

function N() {
  let [e, t] = Chunk647438.useState("discord://".concat(location.host, "/feature/apple-payment-link"));
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Deeplinking"
    }), (0, Chunk951288.jsxs)(Chunk237012.E_, {
      label: "Test Deeplinking with a Custom Path",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
        value: module,
        onChange: e => t(e),
        placeholder: "Enter DeepLink Url",
        fullWidth: true
      }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
        variant: "primary",
        size: "sm",
        text: "Test Deeplink",
        onClick: () => {
          console.log("Opening deep link... ", module), Chunk954824.Z.launch(module, e => {
            console.log("onDone response: ", e)
          })
        }
      })]
    })]
  })
}

function S() {
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Google Pay"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Google Pay - Default View",
      children: (0, Chunk951288.jsx)(T, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Google Pay - Connector View",
      children: (0, Chunk951288.jsx)(T, {
        paymentRequestWallet: "googlePay",
        renderConnectorView: true
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Google Pay - Add Payment Step Body Connector View",
      children: (0, Chunk951288.jsx)(P, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Apple Pay"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Apple Pay - Default View",
      children: (0, Chunk951288.jsx)(T, {
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Apple Pay - Connector View",
      children: (0, Chunk951288.jsx)(T, {
        renderConnectorView: true,
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Apple Pay - Add Payment Step Body Connector View",
      children: (0, Chunk951288.jsx)(P, {
        paymentRequestWallet: "applePay"
      })
    })]
  })
}

function T(e) {
  let t = r.useRef(null),
    n = {
      paymentLabel: v.intl.string(v.t.ZURqX1),
      paymentRequestRef: t,
      onStripePaymentMethodReceived: () => {},
      onPaymentRequestFailure: () => {},
      onValidPaymentRequest: () => {},
      onChooseType: () => {},
      loadingComponent: (0, a.jsx)(c.$jN, {
        style: {
          marginTop: 16
        },
        type: c.RAz.PULSING_ELLIPSIS
      })
    };
  return e.renderStepBody ? (0, a.jsx)(x.t, y({}, n, e)) : "applePay" === e.paymentRequestWallet ? (0, a.jsx)(u.Ch, y({}, n, e)) : (0, a.jsx)(u.Tr, y({}, n, e))
}

function O(e) {
  let {
    children: t,
    footer: n,
    className: r
  } = e;
  return (0, a.jsx)("div", {
    className: s()(_.root, _.focusLock, _.small, _.rootWithShadow, j.modal, r),
    "aria-label": v.intl.string(v.t.eQ2bLi),
    children: (0, a.jsxs)("form", {
      className: j.form,
      onSubmit: e => {
        e.preventDefault()
      },
      children: [(0, a.jsx)(c.hzk, {
        className: j.scrollerContent,
        children: t
      }), n]
    })
  })
}

function P(e) {
  let {
    paymentRequestWallet: t
  } = e, n = r.useRef(null), [i, l] = r.useState(false);
  return (0, a.jsx)(O, {
    footer: (0, a.jsx)(h.Z, {
      primaryCTA: h.Z.CTAType.CONTINUE,
      primaryText: v.intl.string("applePay" === t ? v.t.WoXvJC : v.t.wnVVr6),
      primaryDisabled: !i,
      onPrimary: () => void(null != n.current && n.current.show()),
      onBack: () => {}
    }),
    children: (0, a.jsx)(T, {
      renderConnectorView: true,
      renderStepBody: true,
      paymentRequestWallet: t,
      paymentRequestRef: n,
      onValidPaymentRequest: () => l(true)
    })
  })
}

function I(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(O, {
    className: j.choosePaymentTypeModal,
    children: (0, a.jsx)("div", {
      className: j.choosePaymentTypeContainer,
      children: t
    })
  })
}

function k() {
  let e = {
    onChooseType: () => {},
    onStripePaymentMethodReceived: e => {
      console.log("onStripePaymentMethodReceived called: ", e)
    },
    isEligibleForTrial: false
  };
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Choose Payment Source Type Component"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "All Payment Request Wallets Enabled",
      children: (0, Chunk951288.jsx)(I, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, C(y({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: ["googlePay", "applePay"]
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "No Payment Wallets Enabled",
      children: (0, Chunk951288.jsx)(I, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, C(y({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Is Eligible for Trial",
      children: (0, Chunk951288.jsx)(I, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, C(y({}, module), {
          isEligibleForTrial: true,
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Only Stripe Card Enabled",
      children: (0, Chunk951288.jsx)(I, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, C(y({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: [],
          paymentSourceTypeRestrictions: [Chunk231338.He.CARD.valueOf()]
        }))
      })
    })]
  })
}
let w = {
    DEFAULT: "Express Checkout Element - Default (No Config)",
    GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
    APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
    APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
    CONFIGURABLE: "Express Checkout Element - Configurable"
  },
  R = {
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
  A = {
    appearance: {
      theme: "flat",
      variables: {
        spacingUnit: "12px",
        borderRadius: "36px"
      }
    }
  },
  Z = {
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
  D = e => true !== e ? JSON.stringify(e, null, 2) : "undefined";

function L() {
  let [e, t] = Chunk647438.useState(D(A)), [n, l] = Chunk647438.useState(A), [s, d] = Chunk647438.useState(D(Z)), [u, p] = Chunk647438.useState(Z), [h, x] = Chunk647438.useState(null), [f, g] = Chunk647438.useState((0, Chunk951288.jsx)(Chunk237012.DS, {
    errorLabel: w.CONFIGURABLE,
    elementOptions: A,
    children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
      onConfirm: e => {
        console.log("ExpressCheckoutElement onConfirm event: ", e)
      },
      options: Z
    })
  }));
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk306197.labelSpacing,
      children: ["Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.", (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)("br", {}), "Start by changing the `borderRadius` or `buttonHeight` as a test!"]
    }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk306197.labelSpacing,
      children: [(0, Chunk951288.jsx)("b", {
        children: "elements.options:"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk237012.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632"
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk306197.textarea,
      children: (0, Chunk951288.jsx)(Chunk481060.Kx8, {
        placeholder: "Stripe Elements Container Options",
        showCharacterCount: true,
        value: module,
        onChange: exports,
        rows: 7
      })
    }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk306197.labelSpacing,
      children: [(0, Chunk951288.jsx)("b", {
        children: "expressCheckoutElement.options:"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk237012.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk237012.lD, {
        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element"
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk306197.textarea,
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
      className: Chunk306197.applyChangesButton,
      children: (0, Chunk951288.jsx)(Chunk159691.zxk, {
        variant: "primary",
        size: "sm",
        text: "Apply Changes",
        onClick: () => {
          try {
            let t = JSON.parse(module),
              n = JSON.parse(s);
            Chunk231338(null), Chunk231338((0, Chunk951288.jsxs)(Chunk951288.Fragment, {
              children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
                variant: "text-md/normal",
                className: Chunk306197.labelSpacing,
                children: ["Element updated at: ", new Date().toString()]
              }), (0, Chunk951288.jsx)(Chunk237012.DS, {
                errorLabel: w.CONFIGURABLE,
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
        }
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk306197.labelSpacing,
      children: "Current Element Options:"
    }), (0, Chunk951288.jsx)(Chunk241209.Z, {
      className: Chunk306197.markdown,
      children: "".concat("``", " ").concat(D(require), " ").concat("``")
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk306197.labelSpacing,
      children: "Current Express Checkout Element Options:"
    }), (0, Chunk951288.jsx)(Chunk241209.Z, {
      className: Chunk306197.markdown,
      children: "".concat("``", " ").concat(D(Chunk502109), " ").concat("``")
    }), Chunk954824]
  })
}

function M() {
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Stripe Express Checkout Buttons"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: w.DEFAULT,
      children: (0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk237012.DS, {
          errorLabel: w.DEFAULT,
          children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
            onConfirm: e => {
              console.log("ExpressCheckoutElement onConfirm event: ", e)
            },
            options: {}
          })
        })
      })
    }), ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map(e => {
      let t = w[e];
      return (0, a.jsx)(b.E_, {
        label: t,
        children: (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            className: j.labelSpacing,
            children: "expressCheckoutElement.options:"
          }), (0, a.jsx)(m.Z, {
            className: j.markdown,
            children: "".concat("``").concat(D(R[e]), " ").concat("``")
          }), (0, a.jsx)(b.DS, {
            errorLabel: t,
            children: (0, a.jsx)(i.ExpressCheckoutElement, {
              onConfirm: e => {
                console.log("ExpressCheckoutElement onConfirm event: ", e)
              },
              options: R[e]
            })
          })]
        })
      }, e)
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: w.CONFIGURABLE,
      children: (0, Chunk951288.jsx)(L, {})
    })]
  })
}