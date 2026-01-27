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

function d(e) {
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

function f(e, t) {
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
  let n = y.Rsh.BILLING_INVOICE_PDF,
    o = t ? {
      name: r.name,
      line_1: r.line1,
      line_2: r.line2,
      city: r.city,
      state: r.state,
      postal_code: r.postalCode,
      country: r.country
    } : null,
    a = await l.Bo.post({
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
      a = URL.createObjectURL(o),
      l = document.createElement("a");
    l.href = a, l.download = "receipt_".concat(e, ".pdf"), document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(a)
  }(e, a.text), true
}

function O(e) {
  let {
    payment: t,
    paymentSource: r
  } = e, l = function(e, t) {
    if (null == e) return {};
    var r, n, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["payment", "paymentSource"]), y = {
    name: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: "",
    country: r.country
  }, [O, S] = o.useState(y), [g, m] = o.useState(false), [h, j] = o.useState(false), [E, T] = o.useState(false), [_, w] = o.useState("");
  async function I() {
    T(true);
    try {
      await b(A, g, O)
    } catch (r) {
      var e;
      let t = JSON.parse(await r.body.text());
      w(null != (e = new s.A(f(d({}, r), {
        body: t
      })).getAnyErrorMessage()) ? e : p.intl.formatToPlainString(p.t["4eT6rr"], {}))
    } finally {
      T(false)
    }
  }
  let L = u.K,
    A = t.id,
    N = (0, n.jsx)(i.dOG, {
      label: p.intl.formatToPlainString(p.t["aJg+oS"], {}),
      description: p.intl.formatToPlainString(p.t["2p1XJW"], {}),
      checked: g,
      onChange: m
    }),
    P = g ? (0, n.jsx)(c.Ay, f(d({}, O), {
      mode: c.Ay.Modes.CREATE,
      layout: L,
      onBillingAddressChange: function(e, t) {
        S(e), j(t)
      },
      error: null
    })) : null;
  return (0, n.jsxs)(a.Modal, {
    transitionState: l.transitionState,
    onClose: l.onClose,
    title: p.intl.formatToPlainString(p.t.onRIxS, {}),
    actions: [{
      variant: "primary",
      text: p.intl.formatToPlainString(p.t.uqZjLi, {}),
      onClick: I,
      disabled: g && !h,
      loading: E,
      autoFocus: true
    }],
    children: [N, P, null != _ && "" !== _ && (0, n.jsx)(i.wx6, {
      type: "critical",
      children: _
    })]
  })
}