/** Chunk was on 30202 **/
/** chunk id: 229269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => v
}), require("./388685.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk245364 = require("./245364.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk680018 = require("./680018.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk801937 = require("./801937.jsx"),
  Chunk502109 = require("./502109.jsx"),
  Chunk241209 = require("./241209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk586585 = require("./586585.jsx"),
  Chunk439021 = require("./439021.jsx"),
  Chunk450272 = require("./450272.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk403645 = require("./403645.js"),
  Chunk818033 = require("./818033.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v() {
  return (0, Chunk255367.jsx)(Chunk563132.PaymentContextProvider, {
    stepConfigs: [],
    skuIDs: [],
    activeSubscription: null,
    children: (0, Chunk255367.jsxs)("div", {
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        className: Chunk403645.labelSpacing,
        children: "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser."
      }), (0, Chunk255367.jsx)(S, {}), (0, Chunk255367.jsx)(A, {}), (0, Chunk255367.jsx)(L, {})]
    })
  })
}

function S() {
  return (0, Chunk255367.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Google Pay"
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "Google Pay - Default View",
      children: (0, Chunk255367.jsx)(T, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "Google Pay - Connector View",
      children: (0, Chunk255367.jsx)(T, {
        paymentRequestWallet: "googlePay",
        renderConnectorView: true
      })
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "Google Pay - Add Payment Step Body Connector View",
      children: (0, Chunk255367.jsx)(N, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Apple Pay"
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Default View",
      children: (0, Chunk255367.jsx)(T, {
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Connector View",
      children: (0, Chunk255367.jsx)(T, {
        renderConnectorView: true,
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "Apple Pay - Add Payment Step Body Connector View",
      children: (0, Chunk255367.jsx)(N, {
        paymentRequestWallet: "applePay"
      })
    })]
  })
}

function T(e) {
  let t = r.useRef(null),
    n = {
      paymentLabel: _.intl.string(_.t.ZURqX1),
      paymentRequestRef: t,
      onStripePaymentMethodReceived: () => {},
      onPaymentRequestFailure: () => {},
      onValidPaymentRequest: () => {},
      onChooseType: () => {},
      loadingComponent: (0, i.jsx)(d.$jN, {
        style: {
          marginTop: 16
        },
        type: d.RAz.PULSING_ELLIPSIS
      })
    };
  return e.renderStepBody ? (0, i.jsx)(f.t, C({}, n, e)) : "applePay" === e.paymentRequestWallet ? (0, i.jsx)(m.Ch, C({}, n, e)) : (0, i.jsx)(m.Tr, C({}, n, e))
}

function I(e) {
  let {
    children: t,
    footer: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    className: l()(E.root, E.focusLock, E.small, E.rootWithShadow, j.modal, r),
    "aria-label": _.intl.string(_.t.eQ2bLi),
    children: (0, i.jsxs)("form", {
      className: j.form,
      onSubmit: e => {
        e.preventDefault()
      },
      children: [(0, i.jsx)(d.hzk, {
        className: j.scrollerContent,
        children: t
      }), n]
    })
  })
}

function N(e) {
  let {
    paymentRequestWallet: t
  } = e, n = r.useRef(null), [s, a] = r.useState(false);
  return (0, i.jsx)(I, {
    footer: (0, i.jsx)(h.Z, {
      primaryCTA: h.Z.CTAType.CONTINUE,
      primaryText: _.intl.string("applePay" === t ? _.t.WoXvJC : _.t.wnVVr6),
      primaryDisabled: !s,
      onPrimary: () => void(null != n.current && n.current.show()),
      onBack: () => {}
    }),
    children: (0, i.jsx)(T, {
      renderConnectorView: true,
      renderStepBody: true,
      paymentRequestWallet: t,
      paymentRequestRef: n,
      onValidPaymentRequest: () => a(true)
    })
  })
}

function y(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)(I, {
    className: j.choosePaymentTypeModal,
    children: (0, i.jsx)("div", {
      className: j.choosePaymentTypeContainer,
      children: t
    })
  })
}

function A() {
  let e = {
    onChooseType: () => {},
    onStripePaymentMethodReceived: e => {
      console.log("onStripePaymentMethodReceived called: ", e)
    },
    isEligibleForTrial: false
  };
  return (0, Chunk255367.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Choose Payment Source Type Component"
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "All Payment Request Wallets Enabled",
      children: (0, Chunk255367.jsx)(y, {
        children: (0, Chunk255367.jsx)(Chunk801937.Z, O(C({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: ["googlePay", "applePay"]
        }))
      })
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "No Payment Wallets Enabled",
      children: (0, Chunk255367.jsx)(y, {
        children: (0, Chunk255367.jsx)(Chunk801937.Z, O(C({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "Is Eligible for Trial",
      children: (0, Chunk255367.jsx)(y, {
        children: (0, Chunk255367.jsx)(Chunk801937.Z, O(C({}, module), {
          isEligibleForTrial: true,
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: "Only Stripe Card Enabled",
      children: (0, Chunk255367.jsx)(y, {
        children: (0, Chunk255367.jsx)(Chunk801937.Z, O(C({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: [],
          paymentSourceTypeRestrictions: [Chunk231338.He.CARD.valueOf()]
        }))
      })
    })]
  })
}
let P = {
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
  D = {
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
  w = e => true !== e ? JSON.stringify(e, null, 2) : "undefined";

function k() {
  let [e, t] = Chunk73800.useState(w(D)), [n, a] = Chunk73800.useState(D), [l, u] = Chunk73800.useState(w(Z)), [m, g] = Chunk73800.useState(Z), [h, f] = Chunk73800.useState(null), [x, _] = Chunk73800.useState((0, Chunk255367.jsx)(Chunk450272.DS, {
    errorLabel: P.CONFIGURABLE,
    elementOptions: D,
    children: (0, Chunk255367.jsx)(Chunk245364.ExpressCheckoutElement, {
      onConfirm: e => {
        console.log("ExpressCheckoutElement onConfirm event: ", e)
      },
      options: Z
    })
  }));
  return (0, Chunk255367.jsxs)("div", {
    children: [(0, Chunk255367.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: ["Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.", (0, Chunk255367.jsx)("br", {}), (0, Chunk255367.jsx)("br", {}), "Start by changing the `borderRadius` or `buttonHeight` as a test!"]
    }), (0, Chunk255367.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: [(0, Chunk255367.jsx)("b", {
        children: "elements.options:"
      }), (0, Chunk255367.jsx)("br", {}), (0, Chunk255367.jsx)(Chunk450272.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632"
      })]
    }), (0, Chunk255367.jsx)(Chunk755721.iS, {
      className: Chunk403645.textarea,
      placeholder: "Stripe Elements Container Options",
      showCharacterCount: true,
      value: module,
      onChange: exports
    }), (0, Chunk255367.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: [(0, Chunk255367.jsx)("b", {
        children: "expressCheckoutElement.options:"
      }), (0, Chunk255367.jsx)("br", {}), (0, Chunk255367.jsx)(Chunk450272.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314"
      }), (0, Chunk255367.jsx)("br", {}), (0, Chunk255367.jsx)(Chunk450272.lD, {
        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element"
      })]
    }), (0, Chunk255367.jsx)(Chunk755721.iS, {
      className: Chunk403645.textarea,
      placeholder: "Stripe Express Checkout Element Options",
      showCharacterCount: true,
      value: l,
      onChange: Chunk801937
    }), null != Chunk586585 && (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-danger",
      children: Chunk586585
    }), (0, Chunk255367.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk403645.applyChangesButton,
      children: (0, Chunk255367.jsx)(Chunk680018.z, {
        variant: "primary",
        size: "sm",
        text: "Apply Changes",
        onClick: () => {
          try {
            let t = JSON.parse(module),
              n = JSON.parse(l);
            Chunk388032(null), Chunk388032((0, Chunk255367.jsxs)(Chunk255367.Fragment, {
              children: [(0, Chunk255367.jsxs)(Chunk481060.Text, {
                variant: "text-md/normal",
                className: Chunk403645.labelSpacing,
                children: ["Element updated at: ", new Date().toString()]
              }), (0, Chunk255367.jsx)(Chunk450272.DS, {
                errorLabel: P.CONFIGURABLE,
                elementOptions: exports,
                children: (0, Chunk255367.jsx)(Chunk245364.ExpressCheckoutElement, {
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
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: "Current Element Options:"
    }), (0, Chunk255367.jsx)(Chunk241209.Z, {
      className: Chunk403645.markdown,
      children: "".concat("``", " ").concat(w(require), " ").concat("``")
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk403645.labelSpacing,
      children: "Current Express Checkout Element Options:"
    }), (0, Chunk255367.jsx)(Chunk241209.Z, {
      className: Chunk403645.markdown,
      children: "".concat("``", " ").concat(w(Chunk502109), " ").concat("``")
    }), Chunk231338]
  })
}

function L() {
  return (0, Chunk255367.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Stripe Express Checkout Buttons"
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: P.DEFAULT,
      children: (0, Chunk255367.jsx)("div", {
        children: (0, Chunk255367.jsx)(Chunk450272.DS, {
          errorLabel: P.DEFAULT,
          children: (0, Chunk255367.jsx)(Chunk245364.ExpressCheckoutElement, {
            onConfirm: e => {
              console.log("ExpressCheckoutElement onConfirm event: ", e)
            },
            options: {}
          })
        })
      })
    }), ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map(e => {
      let t = P[e];
      return (0, i.jsx)(b.E_, {
        label: t,
        children: (0, i.jsxs)("div", {
          children: [(0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            className: j.labelSpacing,
            children: "expressCheckoutElement.options:"
          }), (0, i.jsx)(p.Z, {
            className: j.markdown,
            children: "".concat("``").concat(w(R[e]), " ").concat("``")
          }), (0, i.jsx)(b.DS, {
            errorLabel: t,
            children: (0, i.jsx)(s.ExpressCheckoutElement, {
              onConfirm: e => {
                console.log("ExpressCheckoutElement onConfirm event: ", e)
              },
              options: R[e]
            })
          })]
        })
      }, e)
    }), (0, Chunk255367.jsx)(Chunk450272.E_, {
      label: P.CONFIGURABLE,
      children: (0, Chunk255367.jsx)(k, {})
    })]
  })
}