/** Chunk was on 34138 **/
/** chunk id: 206049, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./747238.js"), require("./812715.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk450233 = require("./450233.jsx"),
  Chunk181658 = require("./181658.js"),
  Chunk256006 = require("./256006.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
async function b(e, t, r) {
  let n = p.Rsh.BILLING_INVOICE_PDF,
    o = t ? {
      name: r.name,
      line_1: r.line1,
      line_2: r.line2,
      city: r.city,
      state: r.state,
      postal_code: r.postalCode,
      country: r.country
    } : null,
    l = await a.Bo.post({
      url: n,
      body: {
        payment_id: e,
        billing_address_override: t ? o : null
      },
      oldFormErrors: true,
      rejectWithError: false
    });
  return ! function(e, t) {
    let r = atob(t.replace(/\s/g, "")),
      n = new Uint8Array(new ArrayBuffer(r.length));
    for (let e = 0; e < r.length; e++) n[e] = r.charCodeAt(e);
    let o = new Blob([n], {
        type: "application/pdf"
      }),
      l = URL.createObjectURL(o),
      a = document.createElement("a");
    a.href = l, a.download = "receipt_".concat(e, ".pdf"), document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(l)
  }(e, l.text), true
}

function O(e) {
  let {
    payment: t,
    paymentSource: r
  } = e, a = function(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["payment", "paymentSource"]), p = {
    name: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: "",
    country: r.country
  }, [O, g] = o.useState(p), [m, j] = o.useState(false), [h, w] = o.useState(false), [S, P] = o.useState(false), [v, C] = o.useState("");
  async function x() {
    P(true);
    try {
      await b(_, m, O)
    } catch (r) {
      var e;
      let t = JSON.parse(await r.body.text());
      C(null != (e = new u.A(d(f({}, r), {
        body: t
      })).getAnyErrorMessage()) ? e : y.intl.formatToPlainString(y.t["4eT6rr"], {}))
    } finally {
      P(false)
    }
  }
  let E = s.K,
    _ = t.id,
    k = (0, n.jsx)(i.dOG, {
      label: y.intl.formatToPlainString(y.t["aJg+oS"], {}),
      description: y.intl.formatToPlainString(y.t["2p1XJW"], {}),
      checked: m,
      onChange: j
    }),
    R = m ? (0, n.jsx)(c.Ay, d(f({}, O), {
      mode: c.Ay.Modes.CREATE,
      layout: E,
      onBillingAddressChange: function(e, t) {
        g(e), w(t)
      },
      error: null
    })) : null;
  return (0, n.jsxs)(l.Modal, {
    transitionState: a.transitionState,
    onClose: a.onClose,
    title: y.intl.formatToPlainString(y.t.onRIxS, {}),
    actions: [{
      variant: "primary",
      text: y.intl.formatToPlainString(y.t.uqZjLi, {}),
      onClick: x,
      disabled: m && !h,
      loading: S,
      autoFocus: true
    }],
    children: [k, R, null != v && "" !== v && (0, n.jsx)(i.wx6, {
      type: "critical",
      children: v
    })]
  })
}