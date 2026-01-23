/** Chunk was on 65599 **/
/** chunk id: 268959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
let j = e => {
    let {
      product: t,
      badgeOverride: n,
      skipLimitedTimeCheck: l,
      className: u,
      prioritizedCurrency: h
    } = e, j = (0, x.sC)(), {
      isPurchased: _,
      isPartiallyOwnedBundle: y
    } = (0, p.h)(t), A = (0, m.G0)(t), C = (0, i.bG)([d.A], () => d.A.getCategoryForProduct(t.skuId)), S = (null == C ? true : C.unpublishedAt) != null ? (0, m.WU)(C.unpublishedAt) : null, O = (0, i.bG)([o.default], () => o.default.getCurrentUser()), E = c.Ay.canUseCollectibles(O), T = (0, g.V_)(t), {
      isOrbExclusive: N
    } = (0, f.FI)({
      product: t,
      isPremiumUser: E,
      prioritizedCurrency: h,
      hasDiscountOffer: null != T
    }), w = n;
    if (null == w && (!l && (0, m.HF)(null == C ? true : C.unpublishedAt) ? w = x.AW.LIMITED_TIME : !y && !_ && (0, m.aT)(t.skuId) ? w = x.AW.NEW : null != j && 3 === j ? w = x.AW.THREE_DAY_RENTAL : null != j && 7 === j ? w = x.AW.SEVEN_DAY_RENTAL : null != j ? w = x.AW.RENTAL : N ? w = x.AW.ORBS_EXCLUSIVE : A && (w = x.AW.NITRO_EXCLUSIVE)), null == w || w === x.AW.NONE) return null;
    let I = null;
    switch (w) {
      case x.AW.LIMITED_TIME:
        I = null != S ? S > 1 ? b.intl.formatToPlainString(b.t.Io7ozn, {
          days: S
        }) : b.intl.string(b.t.Bc13HF) : b.intl.string(b.t["h/uBCR"]);
        break;
      case x.AW.NEW:
        I = b.intl.string(b.t.y2b7CA);
        break;
      case x.AW.NITRO_EXCLUSIVE:
        I = b.intl.string(b.t.X3Ekj8);
        break;
      case x.AW.ORBS_EXCLUSIVE:
        I = b.intl.string(b.t["0TmQRG"]);
        break;
      case x.AW.THREE_DAY_RENTAL:
        I = b.intl.string(b.t["52UXCo"]);
        break;
      case x.AW.SEVEN_DAY_RENTAL:
        I = b.intl.string(b.t.FRR2s2);
        break;
      case x.AW.RENTAL:
        I = b.intl.string(b.t.VgsFa1)
    }
    return (0, a.jsx)(s.LpS, {
      text: I,
      disableColor: true,
      className: r()(u, v.$)
    })
  },
  _ = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: r,
      skipLimitedTimeCheck: i
    } = e, s = (0, x.Vm)(t), o = (0, u.Q)(s);
    if (null == s) return null;
    let c = (0, h.rb)(s, o);
    return (0, a.jsx)(j, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: i,
      className: l,
      prioritizedCurrency: r
    })
  }