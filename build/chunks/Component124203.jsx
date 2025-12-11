/** Chunk was on web.js **/
/** chunk id: 124203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./49124.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk575053 = require("./575053.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk241209 = require("./241209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk261538 = require("./261538.jsx"),
  Chunk611954 = require("./611954.js");
let f = {
    DEFAULT: "Express Checkout Element - Default (No Config)",
    GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
    APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
    APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
    CONFIGURABLE: "Express Checkout Element - Configurable"
  },
  p = {
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
  _ = {
    appearance: {
      theme: "flat",
      variables: {
        spacingUnit: "12px",
        borderRadius: "36px"
      }
    }
  },
  m = {
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
  h = e => true !== e ? JSON.stringify(e, null, 2) : "undefined",
  g = "``";

function E() {
  let [e, t] = Chunk473749.useState(h(_)), [n, c] = Chunk473749.useState(_), [p, E] = Chunk473749.useState(h(m)), [b, y] = Chunk473749.useState(m), [O, v] = Chunk473749.useState(null), [S, I] = Chunk473749.useState((0, Chunk54381.jsx)(Chunk261538.DS, {
    errorLabel: f.CONFIGURABLE,
    elementOptions: _,
    children: (0, Chunk54381.jsx)(Chunk575053.ExpressCheckoutElement, {
      onConfirm: e => {
        console.log("ExpressCheckoutElement onConfirm event: ", e)
      },
      options: m
    })
  })), T = () => {
    try {
      let t = JSON.parse(module),
        n = JSON.parse(p);
      I(null), I((0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsxs)(Chunk481060.Text, {
          variant: "text-md/normal",
          className: Chunk611954.labelSpacing,
          children: ["Element updated at: ", new Date().toString()]
        }), (0, Chunk54381.jsx)(Chunk261538.DS, {
          errorLabel: f.CONFIGURABLE,
          elementOptions: exports,
          children: (0, Chunk54381.jsx)(Chunk575053.ExpressCheckoutElement, {
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
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk611954.labelSpacing,
      children: ["Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.", (0, Chunk54381.jsx)("br", {}), (0, Chunk54381.jsx)("br", {}), "Start by changing the `borderRadius` or `buttonHeight` as a test!"]
    }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk611954.labelSpacing,
      children: [(0, Chunk54381.jsx)("b", {
        children: "elements.options:"
      }), (0, Chunk54381.jsx)("br", {}), (0, Chunk54381.jsx)(Chunk261538.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632"
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk611954.textarea,
      children: (0, Chunk54381.jsx)(Chunk481060.Kx8, {
        placeholder: "Stripe Elements Container Options",
        showCharacterCount: true,
        value: module,
        onChange: exports,
        rows: 7
      })
    }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk611954.labelSpacing,
      children: [(0, Chunk54381.jsx)("b", {
        children: "expressCheckoutElement.options:"
      }), (0, Chunk54381.jsx)("br", {}), (0, Chunk54381.jsx)(Chunk261538.lD, {
        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314"
      }), (0, Chunk54381.jsx)("br", {}), (0, Chunk54381.jsx)(Chunk261538.lD, {
        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element"
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk611954.textarea,
      children: (0, Chunk54381.jsx)(Chunk481060.Kx8, {
        placeholder: "Stripe Express Checkout Element Options",
        showCharacterCount: true,
        value: p,
        onChange: E,
        rows: 7
      })
    }), null != O && (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-feedback-critical",
      children: O
    }), (0, Chunk54381.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk611954.applyChangesButton,
      children: (0, Chunk54381.jsx)(Chunk159691.zxk, {
        variant: "primary",
        size: "sm",
        text: "Apply Changes",
        onClick: T
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk611954.labelSpacing,
      children: "Current Element Options:"
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: (0, Chunk54381.jsx)(Chunk241209.Z, {
        className: Chunk611954.markdown,
        children: "".concat(g, " ").concat(h(require), " ").concat(g)
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk611954.labelSpacing,
      children: "Current Express Checkout Element Options:"
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: (0, Chunk54381.jsx)(Chunk241209.Z, {
        className: Chunk611954.markdown,
        children: "".concat(g, " ").concat(h(b), " ").concat(g)
      })
    }), S]
  })
}
let b = {
  name: "Stripe Components",
  id: "stripe-components",
  component: function() {
    return (0, Chunk54381.jsx)(Chunk563132.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, Chunk54381.jsxs)(Chunk261538.$0, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-xl/semibold",
          children: "Stripe Express Checkout Buttons"
        }), (0, Chunk54381.jsx)(Chunk261538.E_, {
          label: f.DEFAULT,
          children: (0, Chunk54381.jsx)("div", {
            children: (0, Chunk54381.jsx)(Chunk261538.DS, {
              errorLabel: f.DEFAULT,
              children: (0, Chunk54381.jsx)(Chunk575053.ExpressCheckoutElement, {
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
                  children: "".concat(g).concat(h(p[e]), " ").concat(g)
                })
              }), (0, r.jsx)(u.DS, {
                errorLabel: t,
                children: (0, r.jsx)(a.ExpressCheckoutElement, {
                  onConfirm: e => {
                    console.log("ExpressCheckoutElement onConfirm event: ", e)
                  },
                  options: p[e]
                })
              })]
            })
          }, e)
        }), (0, Chunk54381.jsx)(Chunk261538.E_, {
          label: f.CONFIGURABLE,
          children: (0, Chunk54381.jsx)(E, {})
        })]
      })
    })
  }
}