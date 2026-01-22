/** Chunk was on 22477 **/
/** chunk id: 268959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk590180 = require("./590180.js"),
  Chunk298072 = require("./298072.js"),
  Chunk993408 = require("./993408.js"),
  Chunk466459 = require("./466459.js"),
  Chunk561769 = require("./561769.js"),
  Chunk767503 = require("./767503.js"),
  Chunk525723 = require("./525723.js"),
  Chunk57020 = require("./57020.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk865687 = require("./865687.js");
let j = e => {
    let {
      product: t,
      badgeOverride: n,
      skipLimitedTimeCheck: l,
      className: u,
      prioritizedCurrency: f
    } = e, j = (0, h.sC)(), {
      isPurchased: y,
      isPartiallyOwnedBundle: _
    } = (0, p.h)(t), A = (0, m.G0)(t), C = (0, r.bG)([d.A], () => d.A.getCategoryForProduct(t.skuId)), S = (null == C ? true : C.unpublishedAt) != null ? (0, m.WU)(C.unpublishedAt) : null, O = (0, r.bG)([o.default], () => o.default.getCurrentUser()), E = c.Ay.canUseCollectibles(O), N = (0, x.V_)(t), {
      isOrbExclusive: T
    } = (0, b.FI)({
      product: t,
      isPremiumUser: E,
      prioritizedCurrency: f,
      hasDiscountOffer: null != N
    }), I = n;
    if (null == I && (!l && (0, m.HF)(null == C ? true : C.unpublishedAt) ? I = h.AW.LIMITED_TIME : !_ && !y && (0, m.aT)(t.skuId) ? I = h.AW.NEW : null != j && 3 === j ? I = h.AW.THREE_DAY_RENTAL : null != j && 7 === j ? I = h.AW.SEVEN_DAY_RENTAL : null != j ? I = h.AW.RENTAL : T ? I = h.AW.ORBS_EXCLUSIVE : A && (I = h.AW.NITRO_EXCLUSIVE)), null == I || I === h.AW.NONE) return null;
    let k = null;
    switch (I) {
      case h.AW.LIMITED_TIME:
        k = null != S ? S > 1 ? g.intl.formatToPlainString(g.t.Io7ozn, {
          days: S
        }) : g.intl.string(g.t.Bc13HF) : g.intl.string(g.t["h/uBCR"]);
        break;
      case h.AW.NEW:
        k = g.intl.string(g.t.y2b7CA);
        break;
      case h.AW.NITRO_EXCLUSIVE:
        k = g.intl.string(g.t.X3Ekj8);
        break;
      case h.AW.ORBS_EXCLUSIVE:
        k = g.intl.string(g.t["0TmQRG"]);
        break;
      case h.AW.THREE_DAY_RENTAL:
        k = g.intl.string(g.t["52UXCo"]);
        break;
      case h.AW.SEVEN_DAY_RENTAL:
        k = g.intl.string(g.t.FRR2s2);
        break;
      case h.AW.RENTAL:
        k = g.intl.string(g.t.VgsFa1)
    }
    return (0, a.jsx)(s.LpS, {
      text: k,
      disableColor: true,
      className: i()(u, v.$)
    })
  },
  y = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i,
      skipLimitedTimeCheck: r
    } = e, s = (0, h.Vm)(t), o = (0, u.Q)(s);
    if (null == s) return null;
    let c = (0, f.r)(s, o);
    return (0, a.jsx)(j, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: r,
      className: l,
      prioritizedCurrency: i
    })
  }