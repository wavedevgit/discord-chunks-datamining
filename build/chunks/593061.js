/** Chunk was on 1815 **/
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(544891),
  a = n(481060),
  l = n(357841),
  o = n(981631),
  c = n(231338),
  d = n(388032),
  u = n(778170);
async function m(e) {
  try {
    return (await s.tn.get({
      url: o.ANM.BILLING_INVOICE_BREAKDOWN,
      query: {
        payment_id: e
      },
      oldFormErrors: !0,
      rejectWithError: !1
    })).body
  } catch (e) {
    throw e
  }
}

function p(e) {
  let {
    payment: t
  } = e, [n, s] = i.useState(null), [o, p] = i.useState(null), g = async e => {
    try {
      let n = await m(t.id);
      s(n);
      let r = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
      window.open(r, "_blank"), p(null)
    } catch (e) {
      var n;
      p(null === (n = e.body) || void 0 === n ? void 0 : n.message)
    }
  }, h = null != t.paymentSource && t.status === c.Py.COMPLETED, f = null == n ? void 0 : n.invoiceLink, b = null == n ? void 0 : n.refundInvoiceLinks;
  return t.hasInvoiceURL && null == n ? (0, r.jsxs)("div", {
    className: u.downloadInvoice,
    children: [(0, r.jsx)(a.eee, {
      onClick: () => g(!1),
      children: d.NW.string(d.t.R0xzCA)
    }), t.hasRefundInvoiceURLs ? (0, r.jsx)(a.eee, {
      className: u.downloadRefundInvoice,
      onClick: () => g(!0),
      children: d.NW.string(d.t["3x6NGx"])
    }) : null, (0, r.jsx)(a.Text, {
      color: "text-danger",
      variant: "text-sm/semibold",
      children: o
    })]
  }) : t.hasInvoiceURL && null != n ? (0, r.jsxs)("div", {
    className: u.downloadInvoice,
    children: [(0, r.jsx)(a.eee, {
      href: f,
      children: d.NW.string(d.t.R0xzCA)
    }), null != b ? b.map((e, t) => (0, r.jsx)(a.eee, {
      className: u.downloadRefundInvoice,
      href: e,
      children: d.NW.string(d.t["3x6NGx"])
    }, t)) : null, (0, r.jsx)(a.Text, {
      color: "text-danger",
      variant: "text-sm/semibold",
      children: o
    })]
  }) : h ? (0, r.jsx)("div", {
    className: u.downloadInvoice,
    children: (0, r.jsx)(a.eee, {
      onClick: () => {
        var e;
        e = t.paymentSource, l.Z.open(t, e)
      },
      children: d.NW.string(d.t.onRIxc)
    })
  }) : null
}