/** Chunk was on web.js **/
/** chunk id: 243839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => w
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
  Chunk591627 = require("./591627.js");

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

function D() {
  let [e, t] = Chunk473749.useState(false), [n, o] = Chunk473749.useState(false), [f, m] = Chunk473749.useState(null), [g, O] = Chunk473749.useState(null), [S, A] = Chunk473749.useState(T.defaultValue), [D, w] = Chunk473749.useState(null), x = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.paymentSources), L = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.hasFetchedPaymentSources), j = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.defaultPaymentSourceId);
  Chunk473749.useEffect(() => {
    L || (0, Chunk355467.tZ)()
  }, [L]), Chunk473749.useEffect(() => {
    null != j && null == D && w(j)
  }, [j, D]);
  let M = Chunk473749.useRef(null);
  Chunk473749.useEffect(() => {
    if (null == Chunk3383 || "" === Chunk3383) {
      M.current = D;
      return
    }
    if (D !== M.current) {
      if (null == D || "" === D) {
        M.current = D;
        return
      }
      N(Chunk3383, D).then(() => {
        Chunk622999("Order updated successfully!\nOrder ID: ".concat(Chunk3383, "\nPayment source changed."))
      }).catch(e => {
        let t = e instanceof Error ? e.message : String(e);
        m("Failed to update order: ".concat(t))
      }), M.current = D
    }
  }, [Chunk3383, D]);
  let k = Chunk473749.useMemo(() => Object.values(x).map(e => {
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
    U = (0, Chunk199849.nV)({
      value: D,
      onChange: w
    }),
    G = (0, Chunk199849.nV)({
      value: S,
      onChange: A
    }),
    Z = async () => {
      if (null == D || "" === D) return void Chunk622999("Please select a payment source first.");
      if (null == S || "" === S || S === Chunk981631.lds) return void Chunk622999("Please select a SKU ID.");
      exports(true), Chunk622999(null), O(null);
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
          r = await (0, Chunk16084.t_)(S, D, module, exports, require);
        O(Chunk54381), Chunk622999("Order created successfully! Order ID: ".concat(Chunk54381))
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        Chunk622999("Failed to create order: ".concat(module))
      } finally {
        exports(false)
      }
    }, B = async () => {
      if (null == Chunk3383 || "" === Chunk3383) return void Chunk622999("No order ID available. Please create an order first.");
      Chunk544891(true);
      try {
        let e = await C(Chunk3383);
        if (null == module.errors) {
          Chunk622999("Order signed successfully! Order ID: ".concat(Chunk3383)), O(null);
          return
        }
        let t = module.errors[0];
        1e3 === exports ? (Chunk622999("Order signing in progress!\nOrder ID: ".concat(Chunk3383, "\nThis order requires additional authentication (3DS).")), R(module, Chunk3383, Chunk622999, O)) : 1001 === exports ? (Chunk622999("Order signing in progress!\nOrder ID: ".concat(Chunk3383, "\nThis order requires redirection to complete the payment.\nPolling order status...")), P(module, Chunk3383, Chunk622999, O)) : Chunk622999("Order signing failed\nOrder ID: ".concat(Chunk3383, "\nError: ").concat(exports))
      } catch (t) {
        let e = exports instanceof Error ? exports.message : String(exports);
        Chunk622999("Failed to sign order: ".concat(module))
      } finally {
        Chunk544891(false)
      }
    };
  return (0, Chunk54381.jsxs)(Chunk261538.$0, {
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Order SKU Test"
    }), (0, Chunk54381.jsxs)(Chunk261538.E_, {
      label: "Test Order Creation, Signing & 3DS",
      direction: "vertical",
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk591627.labelSpacing,
        children: "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs."
      }), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: "Configuration",
        children: [(0, Chunk54381.jsx)("div", {
          style: {
            marginBottom: "16px"
          },
          children: (0, Chunk54381.jsx)(Chunk199849.B6, I(v({}, G), {
            options: T.options,
            placeholder: "Select a SKU...",
            label: "SKU ID",
            clearable: true
          }))
        }), (0, Chunk54381.jsxs)("div", {
          style: {
            marginBottom: "16px"
          },
          children: [(0, Chunk54381.jsx)(Chunk199849.B6, I(v({}, U), {
            options: k,
            placeholder: "Select a payment source...",
            isDisabled: !L,
            label: "Payment Source",
            clearable: true
          })), !L && (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: Chunk591627.labelSpacing,
            children: "Loading payment sources..."
          })]
        })]
      }), (0, Chunk54381.jsxs)("div", {
        style: {
          display: "flex",
          gap: "8px",
          marginBottom: "8px",
          flexWrap: "wrap"
        },
        children: [(0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "primary",
          size: "sm",
          text: module ? "Creating Order..." : "Create Order",
          onClick: Z,
          disabled: module || null == D || "" === D || null == S || "" === S || S === Chunk981631.lds
        }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "secondary",
          size: "sm",
          text: require ? "Signing Order..." : "Sign Order",
          onClick: B,
          disabled: require || null == Chunk3383 || "" === Chunk3383
        })]
      }), null != Chunk563132 && (0, Chunk54381.jsx)("div", {
        className: Chunk591627.labelSpacing,
        children: Chunk563132.split("\n").map((e, t) => (0, r.jsx)(c.Text, {
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
let w = {
  name: "Order SKU",
  component: function() {
    return (0, Chunk54381.jsx)(Chunk563132.PaymentContextProvider, {
      stepConfigs: [],
      skuIDs: [],
      activeSubscription: null,
      children: (0, Chunk54381.jsx)(D, {})
    })
  },
  id: "order-sku-test",
  controls: {}
}