/** Chunk was on 75708 **/
/** chunk id: 593061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357841 = require("./357841.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk468590 = require("./468590.js");
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
  return t.hasInvoiceURL && null == n ? <div className={u.downloadInvoice}>{<a.eee onClick={() => g(false)}>{d.intl.string(d.t.R0xzCA)}</a.eee>}{t.hasRefundInvoiceURLs ? <a.eee className={u.downloadRefundInvoice} onClick={() => g(true)}>{d.intl.string(d.t["3x6NGx"])}</a.eee> : null}{<a.Text color={"text-danger"} variant={"text-sm/semibold"}>{o}</a.Text>}</div> : t.hasInvoiceURL && null != n ? <div className={u.downloadInvoice}>{<a.eee href={f}>{d.intl.string(d.t.R0xzCA)}</a.eee>}{null != b ? b.map((e, t) => <a.eee className={u.downloadRefundInvoice} href={e}>{d.intl.string(d.t["3x6NGx"])}</a.eee>) : null}{<a.Text color={"text-danger"} variant={"text-sm/semibold"}>{o}</a.Text>}</div> : h ? <div className={u.downloadInvoice}><a.eee onClick={() => {
        var e;
        e = t.paymentSource, l.Z.open(t, e)
      }}>{d.intl.string(d.t.onRIxc)}</a.eee></div> : null
}