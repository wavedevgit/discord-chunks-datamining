/** Chunk was on web.js **/
/** chunk id: 268959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk590180 = require("./590180.js"),
  Chunk298072 = require("./298072.js"),
  Chunk993408 = require("./993408.js"),
  Chunk466459 = require("./466459.js"),
  Chunk623373 = require("./623373.js"),
  Chunk561769 = require("./561769.js"),
  Chunk525723 = require("./525723.js"),
  Chunk57020 = require("./57020.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk865687 = require("./865687.js");
let b = e => {
    let {
      product: t,
      badgeOverride: n,
      skipLimitedTimeCheck: i,
      className: d,
      prioritizedCurrency: _
    } = e, b = (0, h.sC)(), {
      isPurchased: O,
      isPartiallyOwnedBundle: v
    } = (0, p.h)(t), A = (0, f.G0)(t), I = (0, s.bG)([u.A], () => u.A.getCategoryForProduct(t.skuId)), S = (null == I ? true : I.unpublishedAt) != null ? (0, f.WU)(I.unpublishedAt) : null, T = (0, s.bG)([l.default], () => l.default.getCurrentUser()), C = c.Ay.canUseCollectibles(T), N = null != (0, m.V_)(t), {
      isOrbExclusive: w
    } = (0, g.FI)({
      product: t,
      isPremiumUser: C,
      prioritizedCurrency: _,
      hasDiscountOffer: N
    }), R = n;
    if (null == R && (!i && (0, f.HF)(null == I ? true : I.unpublishedAt) ? R = h.AW.LIMITED_TIME : !v && !O && (0, f.aT)(t.skuId) ? R = h.AW.NEW : null != b && 3 === b ? R = h.AW.THREE_DAY_RENTAL : null != b && 7 === b ? R = h.AW.SEVEN_DAY_RENTAL : null != b ? R = h.AW.RENTAL : w ? R = h.AW.ORBS_EXCLUSIVE : A && (R = h.AW.NITRO_EXCLUSIVE)), null == R || R === h.AW.NONE) return null;
    let P = null;
    switch (R) {
      case h.AW.LIMITED_TIME:
        P = null != S ? S > 1 ? E.intl.formatToPlainString(E.t.Io7ozn, {
          days: S
        }) : E.intl.string(E.t.Bc13HF) : E.intl.string(E.t["h/uBCR"]);
        break;
      case h.AW.NEW:
        P = E.intl.string(E.t.y2b7CA);
        break;
      case h.AW.NITRO_EXCLUSIVE:
        P = E.intl.string(E.t.X3Ekj8);
        break;
      case h.AW.ORBS_EXCLUSIVE:
        P = E.intl.string(E.t["0TmQRG"]);
        break;
      case h.AW.THREE_DAY_RENTAL:
        P = E.intl.string(E.t["52UXCo"]);
        break;
      case h.AW.SEVEN_DAY_RENTAL:
        P = E.intl.string(E.t.FRR2s2);
        break;
      case h.AW.RENTAL:
        P = E.intl.string(E.t.VgsFa1)
    }
    return (0, r.jsx)(o.LpS, {
      text: P,
      disableColor: true,
      className: a()(d, y.$)
    })
  },
  O = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: i,
      prioritizedCurrency: a,
      skipLimitedTimeCheck: s
    } = e, o = (0, h.Vm)(t), l = (0, d.Q)(o);
    if (null == o) return null;
    let c = (0, _.rb)(o, l);
    return (0, r.jsx)(b, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: s,
      className: i,
      prioritizedCurrency: a
    })
  }