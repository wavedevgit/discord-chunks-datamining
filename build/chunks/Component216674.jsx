/** Chunk was on web.js **/
/** chunk id: 216674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./49124.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk241209 = require("./241209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk29594 = require("./29594.jsx"),
  Chunk328310 = require("./328310.js");
let f = {
    DEFAULT: "Express Checkout Element - Default (No Config)",
    GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
    APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
    APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
    CONFIGURABLE: "Express Checkout Element - Configurable"
  },
  _ = {
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
  p = {
    appearance: {
      theme: "flat",
      variables: {
        spacingUnit: "12px",
        borderRadius: "36px"
      }
    }
  },
  h = {
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
  m = e => true !== e ? JSON.stringify(e, null, 2) : "undefined",
  g = "``";

function E() {
  let [e, t] = Chunk647438.useState(m(p)), [n, c] = Chunk647438.useState(p), [_, E] = Chunk647438.useState(m(h)), [b, y] = Chunk647438.useState(h), [O, v] = Chunk647438.useState(null), [I, S] = Chunk647438.useState((0, Chunk951288.jsx)(Chunk29594.DS, {
    errorLabel: f.CONFIGURABLE,
    elementOptions: p,
    children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
      onConfirm: e => {
        console.log("ExpressCheckoutElement onConfirm event: ", e)
      },
      options: h
    })
  })), T = () => {
    try {
      let t = JSON.parse(module),
        n = JSON.parse(_);
      S(null), S((0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-md/normal",
          className: Chunk328310.labelSpacing,
          children: ["Element updated at: ", new Date().toString()]
        }), (0, Chunk951288.jsx)(Chunk29594.DS, {
          errorLabel: f.CONFIGURABLE,
          elementOptions: exports,
          children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
            onConfirm: e => {
              console.log("ExpressCheckoutElement onConfirm event: ", e)
            },
            options: require
          })
        })]
      })), Chunk563132(exports), y(require), v(null)
    } catch (e) {
      console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", module), v("Error parsing JSON. Check console for more information.")
    }
  };
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk328310.labelSpacing,
      children: ["Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.", (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)("br", {}), "Start by changing the `borderRadius` or `buttonHeight` as a test!"]
    }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk328310.labelSpacing,
      children: [(0, Chunk951288.jsx)("b", {
        children: "elements.options:"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk29594.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632"
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk328310.textarea,
      children: (0, Chunk951288.jsx)(Chunk481060.Kx8, {
        placeholder: "Stripe Elements Container Options",
        showCharacterCount: true,
        value: module,
        onChange: exports,
        rows: 7
      })
    }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk328310.labelSpacing,
      children: [(0, Chunk951288.jsx)("b", {
        children: "expressCheckoutElement.options:"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk29594.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314"
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk29594.lD, {
        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element"
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk328310.textarea,
      children: (0, Chunk951288.jsx)(Chunk481060.Kx8, {
        placeholder: "Stripe Express Checkout Element Options",
        showCharacterCount: true,
        value: _,
        onChange: E,
        rows: 7
      })
    }), null != O && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-danger",
      children: O
    }), (0, Chunk951288.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk328310.applyChangesButton,
      children: (0, Chunk951288.jsx)(Chunk159691.zxk, {
        variant: "primary",
        size: "sm",
        text: "Apply Changes",
        onClick: T
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk328310.labelSpacing,
      children: "Current Element Options:"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: (0, Chunk951288.jsx)(Chunk241209.Z, {
        className: Chunk328310.markdown,
        children: "".concat(g, " ").concat(m(require), " ").concat(g)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk328310.labelSpacing,
      children: "Current Express Checkout Element Options:"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: (0, Chunk951288.jsx)(Chunk241209.Z, {
        className: Chunk328310.markdown,
        children: "".concat(g, " ").concat(m(b), " ").concat(g)
      })
    }), I]
  })
}
let b = {
  name: "Stripe Components",
  id: "stripe-components",
  component: function() {
    return (0, Chunk951288.jsx)(Chunk563132.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, Chunk951288.jsxs)(Chunk29594.$0, {
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/semibold",
          children: "Stripe Express Checkout Buttons"
        }), (0, Chunk951288.jsx)(Chunk29594.E_, {
          label: f.DEFAULT,
          children: (0, Chunk951288.jsx)("div", {
            children: (0, Chunk951288.jsx)(Chunk29594.DS, {
              errorLabel: f.DEFAULT,
              children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
                onConfirm: e => {
                  console.log("ExpressCheckoutElement onConfirm event: ", e)
                },
                options: {}
              })
            })
          })
        }), ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map(e => {
          let t = f[e];
          return (0, r.jsx)(u.E_, {
            label: t,
            children: (0, r.jsxs)("div", {
              children: [(0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                className: d.labelSpacing,
                children: "expressCheckoutElement.options:"
              }), (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: (0, r.jsx)(l.Z, {
                  className: d.markdown,
                  children: "".concat(g).concat(m(_[e]), " ").concat(g)
                })
              }), (0, r.jsx)(u.DS, {
                errorLabel: t,
                children: (0, r.jsx)(a.ExpressCheckoutElement, {
                  onConfirm: e => {
                    console.log("ExpressCheckoutElement onConfirm event: ", e)
                  },
                  options: _[e]
                })
              })]
            })
          }, e)
        }), (0, Chunk951288.jsx)(Chunk29594.E_, {
          label: f.CONFIGURABLE,
          children: (0, Chunk951288.jsx)(E, {})
        })]
      })
    })
  }
}