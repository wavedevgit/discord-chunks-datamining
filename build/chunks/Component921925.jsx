/** Chunk was on web.js **/
/** chunk id: 921925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk136857 = require("./136857.js"),
  Chunk975571 = require("./975571.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    planError: t,
    purchaseErrorBlockRef: n,
    className: p
  } = e, {
    currencies: _,
    paymentError: h,
    purchaseError: m,
    purchasePreviewError: g,
    setSelectedPlanNotification: E
  } = (0, c.P5)(), y = null;
  null != g ? y = g : null != h && null == (0, u.ou)(h) ? y = h : null != m ? y = m : null != t && (y = t);
  let b = _.length > 1,
    O = null != y ? y.message : "";
  if (null != y && y instanceof s.Ey && (y.code === o.tG.CARD_DECLINED && b && (O += " ".concat(f.intl.string(f.t.iWvwQS))), y.code === o.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (O = f.intl.string(f.t.ypuSd8)), y.code === d.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (O = f.intl.string(f.t.mXMmWE)), y.code === o.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (O = f.intl.string(f.t.mC1Fjz)), y.code === o.tG.INVALID_BILLING_ADDRESS)) {
    let e = f.intl.format(f.t.BPDKoA, {
      helpdeskArticle: l.A.getArticleURL(d.MVz.BILLING).concat(d.bNI.INVALID_BILLING_ADDRESS)
    });
    O = (0, r.jsxs)(r.Fragment, {
      children: [f.intl.string(f.t["yVIm/G"]), " ", e]
    })
  }
  return (i.useEffect(() => {
    null != y && E(null)
  }, [y, E]), null == y) ? null : (0, r.jsx)("div", {
    ref: n,
    className: p,
    children: (0, r.jsx)(a.wx6, {
      type: "critical",
      children: O
    })
  })
}