/** Chunk was on web.js **/
/** chunk id: 814501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => T
}), require("./415506.js"), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk16084 = require("./16084.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk853872 = require("./853872.js"),
  Chunk622999 = require("./622999.js"),
  Chunk29594 = require("./29594.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk328310 = require("./328310.js");

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
async function v(e) {
  return (await o.tn.post({
    url: h.ANM.ORDER_SIGN(e),
    rejectWithError: true
  })).body
}
async function I(e) {
  try {
    let t = (await o.tn.get({
      url: h.ANM.ORDER_UPDATE(e),
      rejectWithError: true
    })).body;
    console.log("Order data:", t);
    let n = t.billing_facet;
    if (null == n) throw Error("Order does not have billing facet information");
    let r = n.order_signing_deferral_context;
    if (null == r) throw Error("Order does not have payment redirect context");
    let i = r.stripe_3ds_context;
    if (null == i) throw Error("Order does not have 3DS context information");
    console.log("3DS Context:", i);
    let a = await (0, _.d2)();
    if (null == a) throw Error("Stripe not loaded");
    let s = i.client_secret;
    if (null == s || "" === s) throw Error("No client secret found in 3DS context");
    let {
      error: l,
      paymentIntent: c
    } = await a.confirmCardPayment(s, {
      payment_method: i.payment_method_id
    });
    if (null != l) throw Error("3DS authentication failed: ".concat(l.message));
    if (null == c) throw Error("No payment intent returned from 3DS authentication");
    console.log("3DS authentication completed successfully:", c)
  } catch (e) {
    throw console.error("3DS completion error:", e), e
  }
}

function S() {
  let [e, t] = Chunk647438.useState(false), [n, o] = Chunk647438.useState(false), [d, _] = Chunk647438.useState(false), [h, E] = Chunk647438.useState(null), [y, S] = Chunk647438.useState(null), [T, A] = Chunk647438.useState(null), [C, N] = Chunk647438.useState(false), R = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.paymentSources), P = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.hasFetchedPaymentSources), w = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.defaultPaymentSourceId);
  Chunk647438.useEffect(() => {
    P || (0, Chunk355467.tZ)()
  }, [P]), Chunk647438.useEffect(() => {
    null != w && null == T && A(w)
  }, [w, T]);
  let D = Chunk647438.useMemo(() => Object.values(R).map(e => {
      let t = String(e.type);
      if (e.type === m.He.CARD && "last4" in e) {
        var n, r;
        let i = null != (n = e.last4) ? n : "",
          a = null != (r = e.brand) ? r : "Unknown";
        t += " - ****".concat(i, " (").concat(a, ")")
      } else null != e.brand && "" !== e.brand && (t += " - ".concat(e.brand));
      return {
        value: e.id,
        label: t
      }
    }), [R]),
    x = (0, Chunk481060.nVN)({
      value: T,
      onChange: A
    }),
    L = async () => {
      if (null == T || "" === T) return void E("Please select a payment source first.");
      exports(true), E(null), S(null), N(false);
      try {
        let e = "1420045362965512212",
          t = "US",
          n = false,
          r = {
            gift_style: null,
            recipient_id: true,
            custom_message: true,
            emoji_id: true,
            emoji_name: true,
            sound_id: true,
            reward_sku_ids: true
          },
          i = await (0, Chunk16084.t_)(module, T, exports, require, Chunk951288);
        S(Chunk647438), E("Order created successfully! Order ID: ".concat(Chunk647438)), console.log("Order created successfully with ID:", Chunk647438)
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        E("Failed to create order: ".concat(module)), console.error("Failed to create order:", exports)
      } finally {
        exports(false)
      }
    }, M = async () => {
      if (null == y || "" === y) return void E("No order ID available. Please create an order first.");
      Chunk544891(true);
      try {
        var e;
        let t = (await v(y)).billing_facet,
          n = (null == exports || null == (e = exports.order_signing_deferral_context) ? true : module.stripe_3ds_context) != null;
        N(require);
        let r = "Order signed successfully! Order ID: ".concat(y);
        require && (r = "Order signing in progress! Order ID: ".concat(y, ". This order requires additional authentication (3DS).")), E(Chunk951288)
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        E("Failed to sign order: ".concat(module)), console.error("Failed to sign order:", exports)
      } finally {
        Chunk544891(false)
      }
    }, j = async () => {
      if (null == y || "" === y) return void E("No order ID available. Please create an order first.");
      Chunk622999(true);
      try {
        await I(y), E("3DS authentication completed successfully! Order ID: ".concat(y)), console.log("3DS authentication completed successfully for order:", y)
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        E("Failed to complete 3DS: ".concat(module)), console.error("Failed to complete 3DS:", exports)
      } finally {
        Chunk622999(false)
      }
    };
  return (0, Chunk951288.jsxs)(Chunk29594.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Order SKU Test"
    }), (0, Chunk951288.jsxs)(Chunk29594.E_, {
      label: "Test Order Creation, Signing & 3DS",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk328310.labelSpacing,
        children: "This section tests the orderSKU function, order signing, and 3DS authentication with example parameters. Check the console for detailed logs."
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          marginBottom: "16px"
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          className: Chunk328310.labelSpacing,
          children: "Payment Source:"
        }), (0, Chunk951288.jsx)(Chunk481060.PhF, O(b({}, x), {
          options: D,
          placeholder: "Select a payment source...",
          isDisabled: !P,
          label: "Payment Source",
          clearable: true
        })), !P && (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: Chunk328310.labelSpacing,
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
          onClick: L,
          disabled: module || null == T || "" === T
        }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
          variant: "secondary",
          size: "sm",
          text: require ? "Signing Order..." : "Sign Order",
          onClick: M,
          disabled: require || null == y || "" === y
        }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
          variant: "secondary",
          size: "sm",
          text: Chunk563132 ? "Completing 3DS..." : "Complete 3DS",
          onClick: j,
          disabled: Chunk563132 || null == y || "" === y || !C
        })]
      }), null != Chunk981631 && (0, Chunk951288.jsx)("div", {
        className: Chunk328310.labelSpacing,
        children: Chunk981631.split("\n").map((e, t) => (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          style: {
            display: "block",
            marginBottom: t < h.split("\n").length - 1 ? "4px" : "0"
          },
          children: e
        }, t))
      })]
    })]
  })
}
let T = {
  name: "Order SKU",
  component: function() {
    return (0, Chunk951288.jsx)(Chunk563132.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, Chunk951288.jsx)(S, {})
    })
  },
  id: "order-sku-test",
  controls: {}
}