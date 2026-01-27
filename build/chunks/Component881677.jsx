/** Chunk was on web.js **/
/** chunk id: 881677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk49420 = require("./49420.jsx"),
  Chunk534479 = require("./534479.jsx"),
  Chunk652215 = require("./652215.js");

function _(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: _,
    hasFetchedSkus: h,
    paymentSources: m,
    hasFetchedPaymentSources: g,
    application: E,
    skusById: y,
    selectedSkuId: b
  } = (0, c.P5)(), {
    isGift: O
  } = (0, l.Pv)(), [v, A] = i.useState(true), [I, S] = (0, a.yK)([s.A], () => [s.A.isFetchingCategories, s.A.error]);
  return (i.useEffect(() => {
    let e = null != E;
    h && g && e && A(I)
  }, [h, g, E, I]), i.useEffect(() => {
    if (v || _ || null == b) return;
    let e = y[b];
    O && ((null == e ? true : e.productLine) === p.EZt.COLLECTIBLES || (null == e ? true : e.productLine) === p.EZt.APPLICATION || (null == e ? true : e.productLine) === p.EZt.SOCIAL_LAYER_GAME_ITEM) ? t(u.pn.GIFT_CUSTOMIZATION) : 0 === Object.keys(m).length ? t(u.pn.ADD_PAYMENT_STEPS) : t(u.pn.REVIEW)
  }, [v, _, t, m, O, y, b]), v) ? (0, r.jsx)(f.A, {}) : _ ? (0, r.jsx)(o.oO, {
    onClose: n
  }) : null != S ? (0, r.jsx)(d.A, {
    onClose: n
  }) : null
}