/** Chunk was on web.js **/
/** chunk id: 593061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357841 = require("./357841.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk708016 = require("./708016.js");
async function f(e) {
  try {
    return (await a.tn.get({
      url: l.ANM.BILLING_INVOICE_BREAKDOWN,
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
  } = e, [n, a] = i.useState(null), [l, _] = i.useState(null), p = async e => {
    try {
      let n = await f(t.id);
      a(n);
      let r = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
      window.open(r, "_blank"), _(null)
    } catch (e) {
      var n;
      _(null == (n = e.body) ? true : n.message)
    }
  };

  function h(e, t) {
    s.Z.open(e, t)
  }
  let m = null != t.paymentSource && t.status === c.Py.COMPLETED,
    g = null == n ? true : n.invoiceLink,
    E = null == n ? true : n.refundInvoiceLinks;
  return t.hasInvoiceURL && null == n ? (0, r.jsxs)("div", {
    className: d.downloadInvoice,
    children: [(0, r.jsx)(o.Anchor, {
      onClick: () => p(false),
      children: u.intl.formatToPlainString(u.t.R0xzCN, {})
    }), t.hasRefundInvoiceURLs ? (0, r.jsx)(o.Anchor, {
      className: d.downloadRefundInvoice,
      onClick: () => p(true),
      children: u.intl.formatToPlainString(u.t["3x6NGw"], {})
    }) : null, null != l && "" !== l && (0, r.jsx)(o.M14, {
      type: "critical",
      children: l
    })]
  }) : t.hasInvoiceURL && null != n ? (0, r.jsxs)("div", {
    className: d.downloadInvoice,
    children: [(0, r.jsx)(o.Anchor, {
      href: g,
      children: u.intl.formatToPlainString(u.t.R0xzCN, {})
    }), null != E ? E.map((e, t) => (0, r.jsx)(o.Anchor, {
      className: d.downloadRefundInvoice,
      href: e,
      children: u.intl.formatToPlainString(u.t["3x6NGw"], {})
    }, t)) : null, null != l && "" !== l && (0, r.jsx)(o.M14, {
      type: "critical",
      children: l
    })]
  }) : m ? (0, r.jsx)("div", {
    className: d.downloadInvoice,
    children: (0, r.jsx)(o.Anchor, {
      onClick: () => {
        h(t, t.paymentSource)
      },
      children: u.intl.formatToPlainString(u.t.onRIxS, {})
    })
  }) : null
}