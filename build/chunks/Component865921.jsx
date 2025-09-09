/** Chunk was on web.js **/
/** chunk id: 865921, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk48931 = require("./48931.jsx"),
  Chunk456251 = require("./456251.jsx"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: p,
    hasFetchedSkus: h,
    paymentSources: m,
    hasFetchedPaymentSources: g,
    application: E,
    skusById: b,
    selectedSkuId: y
  } = (0, c.JL)(), {
    isGift: O
  } = (0, l.wD)(), [v, I] = i.useState(true), [T, S] = (0, a.Wu)([s.Z], () => [s.Z.isFetchingCategories, s.Z.error]);
  return (i.useEffect(() => {
    let e = null != E;
    h && g && e && I(T)
  }, [h, g, E, T]), i.useEffect(() => {
    if (v || p || null == y) return;
    let e = b[y];
    return O && ((null == e ? true : e.productLine) === _.POd.COLLECTIBLES || (null == e ? true : e.productLine) === _.POd.APPLICATION || (null == e ? true : e.productLine) === _.POd.SOCIAL_LAYER_GAME_ITEM) ? void t(u.h8.GIFT_CUSTOMIZATION) : 0 === Object.keys(m).length ? void t(u.h8.ADD_PAYMENT_STEPS) : void t(u.h8.REVIEW)
  }, [v, p, t, m, O, b, y]), v) ? (0, r.jsx)(f.Z, {}) : p ? (0, r.jsx)(o.Vq, {
    onClose: n
  }) : null != S ? (0, r.jsx)(d.Z, {
    onClose: n
  }) : null
}