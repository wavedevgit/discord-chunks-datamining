/** Chunk was on web.js **/
/** chunk id: 243839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => D
}), require("./415506.js"), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk16084 = require("./16084.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk985754 = require("./985754.js"),
  Chunk853872 = require("./853872.js"),
  Chunk622999 = require("./622999.js"),
  Chunk261538 = require("./261538.jsx"),
  Chunk3383 = require("./3383.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk611954 = require("./611954.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = (0, Chunk3383.F)();
async function C(e) {
  return (await o.tn.post({
    url: E.ANM.ORDER_SIGN(e),
    rejectWithError: true
  })).body
}
async function A(e) {
  return (await o.tn.get({
    url: E.ANM.ORDER_UPDATE(e),
    rejectWithError: true
  })).body
}
async function N(e, t) {
  let n = {
    billing_facet: {
      payment_source_id: t
    }
  };
  await o.tn.patch({
    url: E.ANM.ORDER_UPDATE(e),
    body: n,
    rejectWithError: true
  })
}

function P(e, t, n, r) {
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
        m().catch(e => {
          let r = e instanceof Error ? e.message : String(e);
          n("Failed to poll order status!\nOrder ID: ".concat(t, "\nError: ").concat(r))
        })
      }, e))
    },
    p = () => {
      null != d && clearTimeout(d)
    },
    _ = e => {
      n("Order signing timed out.\nOrder ID: ".concat(t, "\nStatus: ").concat(null != e ? e : "unknown", "\nPlease check the order status manually.")), p()
    },
    m = async () => {
      let e = Date.now() - u;
      if (e >= c) {
        try {
          let e = await A(t);
          _(e.status)
        } catch (r) {
          let e = r instanceof Error ? r.message : String(r);
          n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(e)), p()
        }
        return
      }
      try {
        let e = (await A(t)).status;
        if (2 === e) {
          n("Order signed successfully!\nOrder ID: ".concat(t, "\nPayment redirect completed.")), r(null), p();
          return
        }
        if (1 === e) {
          n("Order signed unsuccessfully\nOrder ID: ".concat(t)), p();
          return
        }
        f()
      } catch (i) {
        let r = i instanceof Error ? i.message : String(i);
        e < c ? f() : (n("Order signing timed out.\nOrder ID: ".concat(t, "\nError: ").concat(r)), p())
      }
    };
  m().catch(e => {
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
      let c = await (0, m.d2)();
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
      let p = null != (a = null != (i = e.id) ? i : t) ? a : "Unknown";
      r(null), n("3DS authentication completed successfully!\nOrder ID: ".concat(p))
    } catch (a) {
      let r = a instanceof Error ? a.message : String(a),
        i = null != (s = null != (o = e.id) ? o : t) ? s : "Unknown";
      n("Failed to complete 3DS!\nOrder ID: ".concat(i, "\nError: ").concat(r))
    }
  })()
}

function w() {
  let [e, t] = i.useState(false), [n, o] = i.useState(false), [f, m] = i.useState(null), [g, O] = i.useState(null), [S, A] = i.useState(T.defaultValue), [w, D] = i.useState(null), x = (0, a.e7)([_.Z], () => _.Z.paymentSources), L = (0, a.e7)([_.Z], () => _.Z.hasFetchedPaymentSources), j = (0, a.e7)([_.Z], () => _.Z.defaultPaymentSourceId);
  i.useEffect(() => {
    L || (0, u.tZ)()
  }, [L]), i.useEffect(() => {
    null != j && null == w && D(j)
  }, [j, w]);
  let M = i.useRef(null);
  i.useEffect(() => {
    if (null == g || "" === g) {
      M.current = w;
      return
    }
    if (w !== M.current) {
      if (null == w || "" === w) {
        M.current = w;
        return
      }
      N(g, w).then(() => {
        m("Order updated successfully!\nOrder ID: ".concat(g, "\nPayment source changed."))
      }).catch(e => {
        let t = e instanceof Error ? e.message : String(e);
        m("Failed to update order: ".concat(t))
      }), M.current = w
    }
  }, [g, w]);
  let k = i.useMemo(() => Object.values(x).map(e => {
      let t = (e => {
        let t = p.W[e];
        return null != t ? t() : String(e)
      })(e.type);
      if (e.type === b.He.CARD && "last4" in e) {
        var n, r;
        let i = null != (n = e.last4) ? n : "",
          a = null != (r = e.brand) ? r : "Unknown";
        t += " - ****".concat(i, " (").concat(a, ")")
      } else null != e.brand && "" !== e.brand && (t += " - ".concat(e.brand));
      return {
        value: e.id,
        label: t
      }
    }), [x]),
    U = (0, s.nV)({
      value: w,
      onChange: D
    }),
    G = (0, s.nV)({
      value: S,
      onChange: A
    }),
    Z = async () => {
      if (null == w || "" === w) return void m("Please select a payment source first.");
      if (null == S || "" === S || S === E.lds) return void m("Please select a SKU ID.");
      t(true), m(null), O(null);
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
          r = await (0, d.t_)(S, w, e, t, n);
        O(r), m("Order created successfully! Order ID: ".concat(r))
      } catch (t) {
        let e = t instanceof Error ? t.message : String(t);
        m("Failed to create order: ".concat(e))
      } finally {
        t(false)
      }
    }, F = async () => {
      if (null == g || "" === g) return void m("No order ID available. Please create an order first.");
      o(true);
      try {
        let e = await C(g);
        if (null == e.errors) {
          m("Order signed successfully! Order ID: ".concat(g)), O(null);
          return
        }
        let t = e.errors[0];
        1e3 === t ? (m("Order signing in progress!\nOrder ID: ".concat(g, "\nThis order requires additional authentication (3DS).")), R(e, g, m, O)) : 1001 === t ? (m("Order signing in progress!\nOrder ID: ".concat(g, "\nThis order requires redirection to complete the payment.\nPolling order status...")), P(e, g, m, O)) : m("Order signing failed\nOrder ID: ".concat(g, "\nError: ").concat(t))
      } catch (t) {
        let e = t instanceof Error ? t.message : String(t);
        m("Failed to sign order: ".concat(e))
      } finally {
        o(false)
      }
    };
  return (0, r.jsxs)(h.$0, {
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-xl/semibold",
      children: "Order SKU Test"
    }), (0, r.jsxs)(h.E_, {
      label: "Test Order Creation, Signing & 3DS",
      direction: "vertical",
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        className: y.labelSpacing,
        children: "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs."
      }), (0, r.jsxs)(c.C3N, {
        label: "Configuration",
        children: [(0, r.jsx)("div", {
          style: {
            marginBottom: "16px"
          },
          children: (0, r.jsx)(s.B6, I(v({}, G), {
            options: T.options,
            placeholder: "Select a SKU...",
            label: "SKU ID",
            clearable: true
          }))
        }), (0, r.jsxs)("div", {
          style: {
            marginBottom: "16px"
          },
          children: [(0, r.jsx)(s.B6, I(v({}, U), {
            options: k,
            placeholder: "Select a payment source...",
            isDisabled: !L,
            label: "Payment Source",
            clearable: true
          })), !L && (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: y.labelSpacing,
            children: "Loading payment sources..."
          })]
        })]
      }), (0, r.jsxs)("div", {
        style: {
          display: "flex",
          gap: "8px",
          marginBottom: "8px",
          flexWrap: "wrap"
        },
        children: [(0, r.jsx)(l.zxk, {
          variant: "primary",
          size: "sm",
          text: e ? "Creating Order..." : "Create Order",
          onClick: Z,
          disabled: e || null == w || "" === w || null == S || "" === S || S === E.lds
        }), (0, r.jsx)(l.zxk, {
          variant: "secondary",
          size: "sm",
          text: n ? "Signing Order..." : "Sign Order",
          onClick: F,
          disabled: n || null == g || "" === g
        })]
      }), null != f && (0, r.jsx)("div", {
        className: y.labelSpacing,
        children: f.split("\n").map((e, t) => (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          style: {
            display: "block",
            marginBottom: t < f.split("\n").length - 1 ? "4px" : "0"
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
    return (0, r.jsx)(f.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, r.jsx)(w, {})
    })
  },
  id: "order-sku-test",
  controls: {}
}