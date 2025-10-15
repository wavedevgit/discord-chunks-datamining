/** Chunk was on 37880 **/
/** chunk id: 897511, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./704826.js"), require("./35282.js"), require("./644351.js"), require("./146733.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk464179 = require("./464179.jsx"),
  Chunk479531 = require("./479531.js"),
  Chunk117938 = require("./117938.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function f(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}
async function b(t, e, n) {
  let r = p.ANM.BILLING_INVOICE_PDF,
    o = e ? {
      name: n.name,
      line_1: n.line1,
      line_2: n.line2,
      city: n.city,
      state: n.state,
      postal_code: n.postalCode,
      country: n.country
    } : null,
    a = await i.tn.post({
      url: r,
      body: {
        payment_id: t,
        billing_address_override: e ? o : null
      },
      oldFormErrors: true,
      rejectWithError: false
    });
  return ! function(t, e) {
    let n = atob(e.replace(/\s/g, "")),
      r = new Uint8Array(new ArrayBuffer(n.length));
    for (let t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
    let o = new Blob([r], {
        type: "application/pdf"
      }),
      a = URL.createObjectURL(o),
      i = document.createElement("a");
    i.href = a, i.download = "receipt_".concat(t, ".pdf"), document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(a)
  }(t, a.text), true
}

function O(t) {
  var {
    payment: e,
    paymentSource: n
  } = t, i = function(t, e) {
    if (null == t) return {};
    var n, r, o = function(t, e) {
      if (null == t) return {};
      var n, r, o = {},
        a = Object.keys(t);
      for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      for (r = 0; r < a.length; r++) n = a[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
    }
    return o
  }(t, ["payment", "paymentSource"]);
  let p = {
      name: "",
      line1: "",
      line2: "",
      city: "",
      postalCode: "",
      state: "",
      country: n.country
    },
    [O, g] = o.useState(p),
    [m, j] = o.useState(false),
    [h, w] = o.useState(false),
    [P, S] = o.useState(false),
    [v, C] = o.useState("");
  async function k() {
    S(true);
    try {
      await b(x, m, O)
    } catch (n) {
      var t;
      let e = JSON.parse(await n.body.text());
      C(null != (t = new u.Z(f(d({}, n), {
        body: e
      })).getAnyErrorMessage()) ? t : y.intl.formatToPlainString(y.t["4eT6rq"], {}))
    } finally {
      S(false)
    }
  }
  let _ = s.C,
    x = e.id,
    E = (0, r.jsx)(l.rsf, {
      label: y.intl.formatToPlainString(y.t["aJg+oa"], {}),
      description: y.intl.formatToPlainString(y.t["2p1XJS"], {}),
      checked: m,
      onChange: j
    }),
    A = m ? (0, r.jsx)(c.ZP, f(d({}, O), {
      mode: c.ZP.Modes.CREATE,
      layout: _,
      onBillingAddressChange: function(t, e) {
        g(t), w(e)
      },
      error: null
    })) : null;
  return (0, r.jsxs)(a.Modal, {
    transitionState: i.transitionState,
    onClose: i.onClose,
    title: y.intl.formatToPlainString(y.t.onRIxc, {}),
    actions: [{
      variant: "primary",
      text: y.intl.formatToPlainString(y.t.uqZjLi, {}),
      onClick: k,
      disabled: m && !h,
      loading: P,
      autoFocus: true
    }],
    children: [E, A, null != v && "" !== v && (0, r.jsx)(l.M14, {
      type: "critical",
      children: v
    })]
  })
}