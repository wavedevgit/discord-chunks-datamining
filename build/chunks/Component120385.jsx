/** Chunk was on 5606 **/
/** chunk id: 120385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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
async function p(e) {
  try {
    return (await l.Bo.get({
      url: o.Rsh.BILLING_INVOICE_BREAKDOWN,
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

function _(e) {
  let {
    payment: t
  } = e, [n, l] = i.useState(null), [o, _] = i.useState(null), m = async e => {
    try {
      let n = await p(t.id);
      l(n);
      let r = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
      window.open(r, "_blank"), _(null)
    } catch (e) {
      var n;
      _(null == (n = e.body) ? true : n.message)
    }
  }, g = null != t.paymentSource && t.status === c.__.COMPLETED, f = null == n ? true : n.invoiceLink, b = null == n ? true : n.refundInvoiceLinks;
  return t.hasInvoiceURL && null == n ? (0, r.jsxs)("div", {
    className: u.It,
    children: [(0, r.jsx)(s.MzZ, {
      onClick: () => m(false),
      children: d.intl.formatToPlainString(d.t.R0xzCN, {})
    }), t.hasRefundInvoiceURLs ? (0, r.jsx)(s.MzZ, {
      className: u.oe,
      onClick: () => m(true),
      children: d.intl.formatToPlainString(d.t["3x6NGw"], {})
    }) : null, null != o && "" !== o && (0, r.jsx)(s.wx6, {
      type: "critical",
      children: o
    })]
  }) : t.hasInvoiceURL && null != n ? (0, r.jsxs)("div", {
    className: u.It,
    children: [(0, r.jsx)(s.MzZ, {
      href: f,
      children: d.intl.formatToPlainString(d.t.R0xzCN, {})
    }), null != b ? b.map((e, t) => (0, r.jsx)(s.MzZ, {
      className: u.oe,
      href: e,
      children: d.intl.formatToPlainString(d.t["3x6NGw"], {})
    }, t)) : null, null != o && "" !== o && (0, r.jsx)(s.wx6, {
      type: "critical",
      children: o
    })]
  }) : g ? (0, r.jsx)("div", {
    className: u.It,
    children: (0, r.jsx)(s.MzZ, {
      onClick: () => {
        var e;
        e = t.paymentSource, a.A.open(t, e)
      },
      children: d.intl.formatToPlainString(d.t.onRIxS, {})
    })
  }) : null
}