/** Chunk was on web.js **/
/** chunk id: 120385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk279280 = require("./279280.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk124953 = require("./124953.js");
async function f(e) {
  try {
    return (await a.Bo.get({
      url: l.Rsh.BILLING_INVOICE_BREAKDOWN,
      query: {
        payment_id: e
      },
      oldFormErrors: true,
      rejectWithError: false
    })).body
  } catch (e) {
    throw e
  }
}

function p(e) {
  let {
    payment: t
  } = e, [n, a] = i.useState(null), [l, p] = i.useState(null), _ = async e => {
    try {
      let n = await f(t.id);
      a(n);
      let r = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
      window.open(r, "_blank"), p(null)
    } catch (e) {
      var n;
      p(null == (n = e.body) ? true : n.message)
    }
  };

  function h(e, t) {
    o.A.open(e, t)
  }
  let m = null != t.paymentSource && t.status === c.__.COMPLETED,
    g = null == n ? true : n.invoiceLink,
    E = null == n ? true : n.refundInvoiceLinks;
  return t.hasInvoiceURL && null == n ? (0, r.jsxs)("div", {
    className: d.It,
    children: [(0, r.jsx)(s.MzZ, {
      onClick: () => _(false),
      children: u.intl.formatToPlainString(u.t.R0xzCN, {})
    }), t.hasRefundInvoiceURLs ? (0, r.jsx)(s.MzZ, {
      className: d.oe,
      onClick: () => _(true),
      children: u.intl.formatToPlainString(u.t["3x6NGw"], {})
    }) : null, null != l && "" !== l && (0, r.jsx)(s.wx6, {
      type: "critical",
      children: l
    })]
  }) : t.hasInvoiceURL && null != n ? (0, r.jsxs)("div", {
    className: d.It,
    children: [(0, r.jsx)(s.MzZ, {
      href: g,
      children: u.intl.formatToPlainString(u.t.R0xzCN, {})
    }), null != E ? E.map((e, t) => (0, r.jsx)(s.MzZ, {
      className: d.oe,
      href: e,
      children: u.intl.formatToPlainString(u.t["3x6NGw"], {})
    }, t)) : null, null != l && "" !== l && (0, r.jsx)(s.wx6, {
      type: "critical",
      children: l
    })]
  }) : m ? (0, r.jsx)("div", {
    className: d.It,
    children: (0, r.jsx)(s.MzZ, {
      onClick: () => {
        h(t, t.paymentSource)
      },
      children: u.intl.formatToPlainString(u.t.onRIxS, {})
    })
  }) : null
}