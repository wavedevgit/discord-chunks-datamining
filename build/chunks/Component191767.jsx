/** Chunk was on 42340 **/
/** chunk id: 191767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => A
}), require("./415506.js"), require("./388685.js"), require("./35282.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk16084 = require("./16084.js"),
  Chunk801937 = require("./801937.jsx"),
  Chunk502109 = require("./502109.jsx"),
  Chunk241209 = require("./241209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk586585 = require("./586585.jsx"),
  Chunk439021 = require("./439021.jsx"),
  Chunk853872 = require("./853872.js"),
  Chunk622999 = require("./622999.js"),
  Chunk954824 = require("./954824.js"),
  Chunk237012 = require("./237012.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306197 = require("./306197.js"),
  Chunk818033 = require("./818033.js");

function P(e) {
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

function I(e, t) {
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
async function w(e) {
  return (await c.tn.post({
    url: S.ANM.ORDER_SIGN(e),
    rejectWithError: true
  })).body
}
async function k(e) {
  try {
    let t = (await c.tn.get({
      url: S.ANM.ORDER_UPDATE(e),
      rejectWithError: true
    })).body;
    console.log("Order data:", t);
    let n = t.billing_facet;
    if (null == n) throw Error("Order does not have billing facet information");
    let a = n.order_signing_deferral_context;
    if (null == a) throw Error("Order does not have payment redirect context");
    let r = a.stripe_3ds_context;
    if (null == r) throw Error("Order does not have 3DS context information");
    console.log("3DS Context:", r);
    let l = await (0, _.d2)();
    if (null == l) throw Error("Stripe not loaded");
    let i = r.client_secret;
    if (null == i || "" === i) throw Error("No client secret found in 3DS context");
    let {
      error: o,
      paymentIntent: s
    } = await l.confirmCardPayment(i, {
      payment_method: r.payment_method_id
    });
    if (null != o) throw Error("3DS authentication failed: ".concat(o.message));
    if (null == s) throw Error("No payment intent returned from 3DS authentication");
    console.log("3DS authentication completed successfully:", s)
  } catch (e) {
    throw console.error("3DS completion error:", e), e
  }
}

function R() {
  let [e, t] = Chunk647438.useState(false), [n, l] = Chunk647438.useState(false), [i, o] = Chunk647438.useState(false), [c, h] = Chunk647438.useState(null), [x, g] = Chunk647438.useState(null), [f, b] = Chunk647438.useState(null), [v, _] = Chunk647438.useState(false), y = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.paymentSources), S = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.hasFetchedPaymentSources), T = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.defaultPaymentSourceId);
  Chunk647438.useEffect(() => {
    Chunk981631 || (0, Chunk355467.tZ)()
  }, [Chunk981631]), Chunk647438.useEffect(() => {
    null != Chunk388032 && null == Chunk563132 && Chunk586585(Chunk388032)
  }, [Chunk388032, Chunk563132]);
  let N = Chunk647438.useMemo(() => Object.values(Chunk954824).map(e => {
      let t = String(e.type);
      if (e.type === E.He.CARD && "last4" in e) {
        var n, a;
        let r = null != (n = e.last4) ? n : "",
          l = null != (a = e.brand) ? a : "Unknown";
        t += " - ****".concat(r, " (").concat(l, ")")
      } else null != e.brand && "" !== e.brand && (t += " - ".concat(e.brand));
      return {
        value: e.id,
        label: t
      }
    }), [Chunk954824]),
    R = (0, Chunk481060.nVN)({
      value: Chunk563132,
      onChange: Chunk586585
    }),
    A = async () => {
      if (null == Chunk563132 || "" === Chunk563132) return void Chunk801937("Please select a payment source first.");
      exports(true), Chunk801937(null), Chunk241209(null), Chunk622999(false);
      try {
        let e = await (0, Chunk16084.t_)("1420045362965512212", Chunk563132, "US", false, {
          gift_style: null,
          recipient_id: true,
          custom_message: true,
          emoji_id: true,
          emoji_name: true,
          sound_id: true,
          reward_sku_ids: true
        });
        Chunk241209(module), Chunk801937("Order created successfully! Order ID: ".concat(module)), console.log("Order created successfully with ID:", module)
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        Chunk801937("Failed to create order: ".concat(module)), console.error("Failed to create order:", exports)
      } finally {
        exports(false)
      }
    }, D = async () => {
      if (null == Chunk502109 || "" === Chunk502109) return void Chunk801937("No order ID available. Please create an order first.");
      Chunk289008(true);
      try {
        var e;
        let t = (await w(Chunk502109)).billing_facet,
          n = (null == exports || null == (e = exports.order_signing_deferral_context) ? true : module.stripe_3ds_context) != null;
        Chunk622999(require);
        let a = "Order signed successfully! Order ID: ".concat(Chunk502109);
        require && (a = "Order signing in progress! Order ID: ".concat(Chunk502109, ". This order requires additional authentication (3DS).")), Chunk801937(Chunk951288)
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        Chunk801937("Failed to sign order: ".concat(module)), console.error("Failed to sign order:", exports)
      } finally {
        Chunk289008(false)
      }
    }, Z = async () => {
      if (null == Chunk502109 || "" === Chunk502109) return void Chunk801937("No order ID available. Please create an order first.");
      o(true);
      try {
        await k(Chunk502109), Chunk801937("3DS authentication completed successfully! Order ID: ".concat(Chunk502109)), console.log("3DS authentication completed successfully for order:", Chunk502109)
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        Chunk801937("Failed to complete 3DS: ".concat(module)), console.error("Failed to complete 3DS:", exports)
      } finally {
        o(false)
      }
    };
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Order SKU Test"
    }), (0, Chunk951288.jsxs)(Chunk237012.E_, {
      label: "Test Order Creation, Signing & 3DS",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk306197.labelSpacing,
        children: "This section tests the orderSKU function, order signing, and 3DS authentication with example parameters. Check the console for detailed logs."
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          marginBottom: "16px"
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          className: Chunk306197.labelSpacing,
          children: "Payment Source:"
        }), (0, Chunk951288.jsx)(Chunk481060.PhF, I(P({}, R), {
          options: Chunk818033,
          placeholder: "Select a payment source...",
          isDisabled: !Chunk981631,
          label: "Payment Source",
          clearable: true
        })), !Chunk981631 && (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: Chunk306197.labelSpacing,
          children: "Loading payment sources..."
        })]
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          display: "flex",
          gap: "8px",
          marginBottom: "8px",
          flexWrap: "wrap"
        },
        children: [(0, Chunk951288.jsx)(Chunk159691.zxk, {
          variant: "primary",
          size: "sm",
          text: module ? "Creating Order..." : "Create Order",
          onClick: A,
          disabled: module || null == Chunk563132 || "" === Chunk563132
        }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
          variant: "secondary",
          size: "sm",
          text: require ? "Signing Order..." : "Sign Order",
          onClick: D,
          disabled: require || null == Chunk502109 || "" === Chunk502109
        }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
          variant: "secondary",
          size: "sm",
          text: Chunk120356 ? "Completing 3DS..." : "Complete 3DS",
          onClick: Z,
          disabled: Chunk120356 || null == Chunk502109 || "" === Chunk502109 || !Chunk439021
        })]
      }), null != Chunk544891 && (0, Chunk951288.jsx)("div", {
        className: Chunk306197.labelSpacing,
        children: Chunk544891.split("\n").map((e, t) => (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          style: {
            display: "block",
            marginBottom: t < c.split("\n").length - 1 ? "4px" : "0"
          },
          children: e
        }, t))
      })]
    })]
  })
}

function A() {
  return (0, Chunk951288.jsx)(Chunk563132.PaymentContextProvider, {
    stepConfigs: [],
    skuIDs: [],
    activeSubscription: null,
    children: (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(R, {}), (0, Chunk951288.jsx)(D, {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        className: Chunk306197.labelSpacing,
        children: "Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser."
      }), (0, Chunk951288.jsx)(Z, {}), (0, Chunk951288.jsx)(F, {}), (0, Chunk951288.jsx)(q, {})]
    })
  })
}

function D() {
  let [e, t] = Chunk647438.useState("discord://".concat(location.host, "/feature/apple-payment-link"));
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
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

function Z() {
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Google Pay"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Google Pay - Default View",
      children: (0, Chunk951288.jsx)(L, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Google Pay - Connector View",
      children: (0, Chunk951288.jsx)(L, {
        paymentRequestWallet: "googlePay",
        renderConnectorView: true
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Google Pay - Add Payment Step Body Connector View",
      children: (0, Chunk951288.jsx)(U, {
        paymentRequestWallet: "googlePay"
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Payment Request Components - Apple Pay"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Apple Pay - Default View",
      children: (0, Chunk951288.jsx)(L, {
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Apple Pay - Connector View",
      children: (0, Chunk951288.jsx)(L, {
        renderConnectorView: true,
        paymentRequestWallet: "applePay"
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Apple Pay - Add Payment Step Body Connector View",
      children: (0, Chunk951288.jsx)(U, {
        paymentRequestWallet: "applePay"
      })
    })]
  })
}

function L(e) {
  let t = r.useRef(null),
    n = {
      paymentLabel: T.intl.string(T.t.ZURqX0),
      paymentRequestRef: t,
      onStripePaymentMethodReceived: () => {},
      onPaymentRequestFailure: () => {},
      onValidPaymentRequest: () => {},
      onChooseType: () => {},
      loadingComponent: (0, a.jsx)(u.$jN, {
        style: {
          marginTop: 16
        },
        type: u.RAz.PULSING_ELLIPSIS
      })
    };
  return e.renderStepBody ? (0, a.jsx)(v.t, P({}, n, e)) : "applePay" === e.paymentRequestWallet ? (0, a.jsx)(x.Ch, P({}, n, e)) : (0, a.jsx)(x.Tr, P({}, n, e))
}

function M(e) {
  let {
    children: t,
    footer: n,
    className: r
  } = e;
  return (0, a.jsx)("div", {
    className: o()(N.root, N.focusLock, N.small, N.rootWithShadow, O.modal, r),
    "aria-label": T.intl.string(T.t.eQ2bLp),
    children: (0, a.jsxs)("form", {
      className: O.form,
      onSubmit: e => {
        e.preventDefault()
      },
      children: [(0, a.jsx)(u.hzk, {
        className: O.scrollerContent,
        children: t
      }), n]
    })
  })
}

function U(e) {
  let {
    paymentRequestWallet: t
  } = e, n = r.useRef(null), [l, i] = r.useState(false);
  return (0, a.jsx)(M, {
    footer: (0, a.jsx)(b.Z, {
      primaryCTA: b.Z.CTAType.CONTINUE,
      primaryText: T.intl.string("applePay" === t ? T.t.WoXvJL : T.t.wnVVr0),
      primaryDisabled: !l,
      onPrimary: () => void(null != n.current && n.current.show()),
      onBack: () => {}
    }),
    children: (0, a.jsx)(L, {
      renderConnectorView: true,
      renderStepBody: true,
      paymentRequestWallet: t,
      paymentRequestRef: n,
      onValidPaymentRequest: () => i(true)
    })
  })
}

function B(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(M, {
    className: O.choosePaymentTypeModal,
    children: (0, a.jsx)("div", {
      className: O.choosePaymentTypeContainer,
      children: t
    })
  })
}

function F() {
  let e = {
    onChooseType: () => {},
    onStripePaymentMethodReceived: e => {
      console.log("onStripePaymentMethodReceived called: ", e)
    },
    isEligibleForTrial: false
  };
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Choose Payment Source Type Component"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "All Payment Request Wallets Enabled",
      children: (0, Chunk951288.jsx)(B, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, I(P({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: ["googlePay", "applePay"]
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "No Payment Wallets Enabled",
      children: (0, Chunk951288.jsx)(B, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, I(P({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Is Eligible for Trial",
      children: (0, Chunk951288.jsx)(B, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, I(P({}, module), {
          isEligibleForTrial: true,
          onChooseType: () => {},
          paymentRequestWallets: []
        }))
      })
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Only Stripe Card Enabled",
      children: (0, Chunk951288.jsx)(B, {
        children: (0, Chunk951288.jsx)(Chunk801937.Z, I(P({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: [],
          paymentSourceTypeRestrictions: [Chunk231338.He.CARD.valueOf()]
        }))
      })
    })]
  })
}
let G = {
    DEFAULT: "Express Checkout Element - Default (No Config)",
    GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
    APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
    APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
    CONFIGURABLE: "Express Checkout Element - Configurable"
  },
  z = {
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
  H = {
    appearance: {
      theme: "flat",
      variables: {
        spacingUnit: "12px",
        borderRadius: "36px"
      }
    }
  },
  V = {
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
  W = e => true !== e ? JSON.stringify(e, null, 2) : "undefined";

function K() {
  let [e, t] = Chunk647438.useState(W(H)), [n, i] = Chunk647438.useState(H), [o, s] = Chunk647438.useState(W(V)), [c, m] = Chunk647438.useState(V), [p, h] = Chunk647438.useState(null), [x, f] = Chunk647438.useState((0, Chunk951288.jsx)(Chunk237012.DS, {
    errorLabel: G.CONFIGURABLE,
    elementOptions: H,
    children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
      onConfirm: e => {
        console.log("ExpressCheckoutElement onConfirm event: ", e)
      },
      options: V
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
        value: o,
        onChange: Chunk442837,
        rows: 7
      })
    }), null != Chunk16084 && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-danger",
      children: Chunk16084
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
              n = JSON.parse(o);
            Chunk563132(null), Chunk563132((0, Chunk951288.jsxs)(Chunk951288.Fragment, {
              children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
                variant: "text-md/normal",
                className: Chunk306197.labelSpacing,
                children: ["Element updated at: ", new Date().toString()]
              }), (0, Chunk951288.jsx)(Chunk237012.DS, {
                errorLabel: G.CONFIGURABLE,
                elementOptions: exports,
                children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
                  onConfirm: e => {
                    console.log("ExpressCheckoutElement onConfirm event: ", e)
                  },
                  options: require
                })
              })]
            })), Chunk120356(exports), Chunk355467(require), Chunk801937(null)
          } catch (e) {
            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", module), Chunk801937("Error parsing JSON. Check console for more information.")
          }
        }
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk306197.labelSpacing,
      children: "Current Element Options:"
    }), (0, Chunk951288.jsx)(Chunk241209.Z, {
      className: Chunk306197.markdown,
      children: "".concat("``", " ").concat(W(require), " ").concat("``")
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk306197.labelSpacing,
      children: "Current Express Checkout Element Options:"
    }), (0, Chunk951288.jsx)(Chunk241209.Z, {
      className: Chunk306197.markdown,
      children: "".concat("``", " ").concat(W(Chunk544891), " ").concat("``")
    }), Chunk502109]
  })
}

function q() {
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Stripe Express Checkout Buttons"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: G.DEFAULT,
      children: (0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk237012.DS, {
          errorLabel: G.DEFAULT,
          children: (0, Chunk951288.jsx)(Chunk289008.ExpressCheckoutElement, {
            onConfirm: e => {
              console.log("ExpressCheckoutElement onConfirm event: ", e)
            },
            options: {}
          })
        })
      })
    }), ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map(e => {
      let t = G[e];
      return (0, a.jsx)(C.E_, {
        label: t,
        children: (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.Text, {
            variant: "text-md/normal",
            className: O.labelSpacing,
            children: "expressCheckoutElement.options:"
          }), (0, a.jsx)(g.Z, {
            className: O.markdown,
            children: "".concat("``").concat(W(z[e]), " ").concat("``")
          }), (0, a.jsx)(C.DS, {
            errorLabel: t,
            children: (0, a.jsx)(l.ExpressCheckoutElement, {
              onConfirm: e => {
                console.log("ExpressCheckoutElement onConfirm event: ", e)
              },
              options: z[e]
            })
          })]
        })
      }, e)
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: G.CONFIGURABLE,
      children: (0, Chunk951288.jsx)(K, {})
    })]
  })
}