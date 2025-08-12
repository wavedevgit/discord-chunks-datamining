/** Chunk was on 37880 **/
/** chunk id: 897511, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./704826.js"), require("./35282.js"), require("./644351.js"), require("./146733.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk464179 = require("./464179.jsx"),
  Chunk479531 = require("./479531.js"),
  Chunk117938 = require("./117938.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222839 = require("./222839.js");

function b(e) {
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
async function m(e, t, r) {
  let n = d.ANM.BILLING_INVOICE_PDF,
    o = t ? {
      name: r.name,
      line_1: r.line1,
      line_2: r.line2,
      city: r.city,
      state: r.state,
      postal_code: r.postalCode,
      country: r.country
    } : null,
    i = await l.tn.post({
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
      i = document.createElement("a");
    i.href = l, i.download = "receipt_".concat(e, ".pdf"), document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(l)
  }(e, i.text), true
}

function g(e) {
  var {
    payment: t,
    paymentSource: r
  } = e, l = function(e, t) {
    if (null == e) return {};
    var r, n, o = function(e, t) {
      if (null == e) return {};
      var r, n, o = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
  }(e, ["payment", "paymentSource"]);
  let d = {
      name: "",
      line1: "",
      line2: "",
      city: "",
      postalCode: "",
      state: "",
      country: r.country
    },
    [g, O] = o.useState(d),
    [j, h] = o.useState(false),
    [w, x] = o.useState(false),
    [v, C] = o.useState(false),
    [_, P] = o.useState("");
  async function S() {
    C(true);
    try {
      await m(k, j, g)
    } catch (r) {
      var e;
      let t = JSON.parse(await r.body.text());
      P(null != (e = new s.Z(f(b({}, r), {
        body: t
      })).getAnyErrorMessage()) ? e : p.intl.string(p.t["4eT6rq"]))
    } finally {
      C(false)
    }
  }
  let E = u.C,
    k = t.id,
    N = (0, n.jsx)("div", {
      children: (0, n.jsx)(a.j7V, {
        value: j,
        note: p.intl.string(p.t["2p1XJS"]),
        onChange: h,
        children: p.intl.string(p.t["aJg+oa"])
      })
    }),
    A = j ? (0, n.jsx)(c.ZP, f(b({}, g), {
      mode: c.ZP.Modes.CREATE,
      layout: E,
      onBillingAddressChange: function(e, t) {
        O(e), x(t)
      },
      error: null
    })) : null;
  return (0, n.jsxs)(a.Y0X, f(b({
    className: y.modal,
    size: a.CgR.DYNAMIC
  }, l), {
    parentComponent: "DownloadInvoiceModal",
    children: [(0, n.jsx)(a.xBx, {
      separator: false,
      children: (0, n.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        children: p.intl.string(p.t.onRIxc)
      })
    }), (0, n.jsxs)(a.hzk, {
      className: y.body,
      children: [N, A]
    }), (0, n.jsxs)(a.mzw, {
      children: [(0, n.jsx)(i.zx, {
        type: "submit",
        color: i.zx.Colors.GREEN,
        disabled: j && !w,
        onClick: S,
        submitting: v,
        autoFocus: true,
        children: p.intl.string(p.t.uqZjLi)
      }), (0, n.jsx)(a.Text, {
        color: "text-danger",
        className: y.error,
        variant: "text-sm/semibold",
        children: _
      })]
    })]
  }))
}