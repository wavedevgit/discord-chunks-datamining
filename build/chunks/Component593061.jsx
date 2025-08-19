/** Chunk was on 66181 **/
/** chunk id: 593061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357841 = require("./357841.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982710 = require("./982710.js");
async function m(e) {
  try {
    return (await s.tn.get({
      url: o.ANM.BILLING_INVOICE_BREAKDOWN,
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
  } = e, [n, s] = r.useState(null), [o, p] = r.useState(null), g = async e => {
    try {
      let n = await m(t.id);
      s(n);
      let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
      window.open(i, "_blank"), p(null)
    } catch (e) {
      var n;
      p(null == (n = e.body) ? true : n.message)
    }
  }, h = null != t.paymentSource && t.status === c.Py.COMPLETED, f = null == n ? true : n.invoiceLink, b = null == n ? true : n.refundInvoiceLinks;
  return t.hasInvoiceURL && null == n ? (0, i.jsxs)("div", {
    className: u.downloadInvoice,
    children: [(0, i.jsx)(a.eee, {
      onClick: () => g(false),
      children: d.intl.formatToPlainString(d.t.R0xzCA, {})
    }), t.hasRefundInvoiceURLs ? (0, i.jsx)(a.eee, {
      className: u.downloadRefundInvoice,
      onClick: () => g(true),
      children: d.intl.formatToPlainString(d.t["3x6NGx"], {})
    }) : null, null != o && "" !== o && (0, i.jsx)(a.kzN, {
      children: o
    })]
  }) : t.hasInvoiceURL && null != n ? (0, i.jsxs)("div", {
    className: u.downloadInvoice,
    children: [(0, i.jsx)(a.eee, {
      href: f,
      children: d.intl.formatToPlainString(d.t.R0xzCA, {})
    }), null != b ? b.map((e, t) => (0, i.jsx)(a.eee, {
      className: u.downloadRefundInvoice,
      href: e,
      children: d.intl.formatToPlainString(d.t["3x6NGx"], {})
    }, t)) : null, null != o && "" !== o && (0, i.jsx)(a.kzN, {
      children: o
    })]
  }) : h ? (0, i.jsx)("div", {
    className: u.downloadInvoice,
    children: (0, i.jsx)(a.eee, {
      onClick: () => {
        var e;
        e = t.paymentSource, l.Z.open(t, e)
      },
      children: d.intl.formatToPlainString(d.t.onRIxc, {})
    })
  }) : null
}