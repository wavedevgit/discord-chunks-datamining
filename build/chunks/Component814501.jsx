/** Chunk was on web.js **/
/** chunk id: 814501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => D
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
  Chunk985754 = require("./985754.js"),
  Chunk853872 = require("./853872.js"),
  Chunk622999 = require("./622999.js"),
  Chunk29594 = require("./29594.jsx"),
  Chunk793202 = require("./793202.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk328310 = require("./328310.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = (0, Chunk793202.F)();
async function S(e) {
  return (await o.tn.post({
    url: g.ANM.ORDER_SIGN(e),
    rejectWithError: true
  })).body
}
async function A(e) {
  return (await o.tn.get({
    url: g.ANM.ORDER_UPDATE(e),
    rejectWithError: true
  })).body
}
async function C(e, t) {
  let n = {
    billing_facet: {
      payment_source_id: t
    }
  };
  await o.tn.patch({
    url: g.ANM.ORDER_UPDATE(e),
    body: n,
    rejectWithError: true
  })
}

function N(e, t, n, r) {
  var i;
  let a = e.billing_facet,
    o = null == a || null == (i = a.order_signing_deferral_context) ? true : i.payment_redirect_context,
    s = null == o ? true : o.redirect_url;
  null != s && window.open(s);
  let l = 3e3,
    c = 3e4,
    u = Date.now(),
    d = null,
    f = () => {
      let e = Math.min(l, c - (Date.now() - u));
      e > 0 && (d = setTimeout(() => {
        h().catch(e => {
          let r = e instanceof Error ? e.message : String(e);
          n("Failed to poll order status!\nOrder ID: ".concat(t, "\nError: ").concat(r))
        })
      }, e))
    },
    _ = () => {
      null != d && clearTimeout(d)
    },
    p = e => {
      n("Order signing timed out.\nOrder ID: ".concat(t, "\nStatus: ").concat(null != e ? e : "unknown", "\nPlease check the order status manually.")), _()
    },
    h = async () => {
      let e = Date.now() - u;
      if (e >= c) {
        try {
          let e = await A(t);
          p(e.status)
        } catch (r) {
          let e = r instanceof Error ? r.message : String(r);
          n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(e)), _()
        }
        return
      }
      try {
        let e = (await A(t)).status;
        if (2 === e) {
          n("Order signed successfully!\nOrder ID: ".concat(t, "\nPayment redirect completed.")), r(null), _();
          return
        }
        if (1 === e) {
          n("Order signed unsuccessfully\nOrder ID: ".concat(t)), _();
          return
        }
        f()
      } catch (i) {
        let r = i instanceof Error ? i.message : String(i);
        e < c ? f() : (n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(r)), _())
      }
    };
  h().catch(e => {
    let r = e instanceof Error ? e.message : String(e);
    n("Failed to start polling order status!\nOrder ID: ".concat(t, "\nError: ").concat(r))
  })
}

function R(e, t, n, r) {
  (async () => {
    var i, a, o, s;
    try {
      let o = e.billing_facet;
      if (null == o) throw Error("Order does not have billing facet information");
      let s = o.order_signing_deferral_context;
      if (null == s) throw Error("Order does not have payment redirect context");
      let l = s.stripe_3ds_context;
      if (null == l) throw Error("Order does not have 3DS context information");
      let c = await (0, p.d2)();
      if (null == c) throw Error("Stripe not loaded");
      let u = l.client_secret;
      if (null == u || "" === u) throw Error("No client secret found in 3DS context");
      let {
        error: d,
        paymentIntent: f
      } = await c.confirmCardPayment(u, {
        payment_method: l.payment_method_id
      });
      if (null != d) throw Error("3DS authentication failed: ".concat(d.message));
      if (null == f) throw Error("No payment intent returned from 3DS authentication");
      let _ = null != (a = null != (i = e.id) ? i : t) ? a : "Unknown";
      r(null), n("3DS authentication completed successfully!\nOrder ID: ".concat(_))
    } catch (a) {
      let r = a instanceof Error ? a.message : String(a),
        i = null != (s = null != (o = e.id) ? o : t) ? s : "Unknown";
      n("Failed to complete 3DS!\nOrder ID: ".concat(i, "\nError: ").concat(r))
    }
  })()
}

function P() {
  let [e, t] = Chunk647438.useState(false), [n, o] = Chunk647438.useState(false), [d, p] = Chunk647438.useState(null), [m, y] = Chunk647438.useState(null), [v, A] = Chunk647438.useState(T.defaultValue), [P, D] = Chunk647438.useState(null), w = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.paymentSources), x = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.hasFetchedPaymentSources), L = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.defaultPaymentSourceId);
  Chunk647438.useEffect(() => {
    x || (0, Chunk355467.tZ)()
  }, [x]), Chunk647438.useEffect(() => {
    null != L && null == P && D(L)
  }, [L, P]);
  let M = Chunk647438.useRef(null);
  Chunk647438.useEffect(() => {
    if (null == Chunk793202 || "" === Chunk793202) {
      M.current = P;
      return
    }
    if (P !== M.current) {
      if (null == P || "" === P) {
        M.current = P;
        return
      }
      C(Chunk793202, P).then(() => {
        Chunk622999("Order updated successfully!\nOrder ID: ".concat(Chunk793202, "\nPayment source changed."))
      }).catch(e => {
        let t = e instanceof Error ? e.message : String(e);
        p("Failed to update order: ".concat(t))
      }), M.current = P
    }
  }, [Chunk793202, P]);
  let j = Chunk647438.useMemo(() => Object.values(w).map(e => {
      let t = (e => {
        let t = f.W[e];
        return null != t ? t() : String(e)
      })(e.type);
      if (e.type === E.He.CARD && "last4" in e) {
        var n, r;
        let i = null != (n = e.last4) ? n : "",
          a = null != (r = e.brand) ? r : "Unknown";
        t += " - ****".concat(i, " (").concat(a, ")")
      } else null != e.brand && "" !== e.brand && (t += " - ".concat(e.brand));
      return {
        value: e.id,
        label: t
      }
    }), [w]),
    k = (0, Chunk481060.nVN)({
      value: P,
      onChange: D
    }),
    U = (0, Chunk481060.nVN)({
      value: v,
      onChange: A
    }),
    G = async () => {
      if (null == P || "" === P) return void Chunk622999("Please select a payment source first.");
      if (null == v || "" === v || v === Chunk981631.lds) return void Chunk622999("Please select a SKU ID.");
      exports(true), Chunk622999(null), y(null);
      try {
        let e = "US",
          t = false,
          n = {
            gift_style: null,
            recipient_id: true,
            custom_message: true,
            emoji_id: true,
            emoji_name: true,
            sound_id: true,
            reward_sku_ids: true
          },
          r = await (0, Chunk16084.t_)(v, P, module, exports, require);
        y(Chunk951288), Chunk622999("Order created successfully! Order ID: ".concat(Chunk951288))
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        Chunk622999("Failed to create order: ".concat(module))
      } finally {
        exports(false)
      }
    }, B = async () => {
      if (null == Chunk793202 || "" === Chunk793202) return void Chunk622999("No order ID available. Please create an order first.");
      Chunk544891(true);
      try {
        let e = await S(Chunk793202);
        if (null == module.errors) {
          Chunk622999("Order signed successfully! Order ID: ".concat(Chunk793202)), y(null);
          return
        }
        let t = module.errors[0];
        1e3 === exports ? (Chunk622999("Order signing in progress!\nOrder ID: ".concat(Chunk793202, "\nThis order requires additional authentication (3DS).")), R(module, Chunk793202, Chunk622999, y)) : 1001 === exports ? (Chunk622999("Order signing in progress!\nOrder ID: ".concat(Chunk793202, "\nThis order requires redirection to complete the payment.\nPolling order status...")), N(module, Chunk793202, Chunk622999, y)) : Chunk622999("Order signing failed\nOrder ID: ".concat(Chunk793202, "\nError: ").concat(exports))
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        Chunk622999("Failed to sign order: ".concat(module))
      } finally {
        Chunk544891(false)
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
        children: "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs."
      }), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
        label: "Configuration",
        children: [(0, Chunk951288.jsx)("div", {
          style: {
            marginBottom: "16px"
          },
          children: (0, Chunk951288.jsx)(Chunk481060.PhF, I(O({}, U), {
            options: T.options,
            placeholder: "Select a SKU...",
            label: "SKU ID",
            clearable: true
          }))
        }), (0, Chunk951288.jsxs)("div", {
          style: {
            marginBottom: "16px"
          },
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, I(O({}, k), {
            options: j,
            placeholder: "Select a payment source...",
            isDisabled: !x,
            label: "Payment Source",
            clearable: true
          })), !x && (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: Chunk328310.labelSpacing,
            children: "Loading payment sources..."
          })]
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
          onClick: G,
          disabled: module || null == P || "" === P || null == v || "" === v || v === Chunk981631.lds
        }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
          variant: "secondary",
          size: "sm",
          text: require ? "Signing Order..." : "Sign Order",
          onClick: B,
          disabled: require || null == Chunk793202 || "" === Chunk793202
        })]
      }), null != Chunk563132 && (0, Chunk951288.jsx)("div", {
        className: Chunk328310.labelSpacing,
        children: Chunk563132.split("\n").map((e, t) => (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          style: {
            display: "block",
            marginBottom: t < d.split("\n").length - 1 ? "4px" : "0"
          },
          children: e
        }, t))
      })]
    })]
  })
}
let D = {
  name: "Order SKU",
  component: function() {
    return (0, Chunk951288.jsx)(Chunk563132.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, Chunk951288.jsx)(P, {})
    })
  },
  id: "order-sku-test",
  controls: {}
}