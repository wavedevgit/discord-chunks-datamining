/** Chunk was on 69432 **/
/** chunk id: 562218, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let p = () => {
    var t;
    let {
      transitionState: e,
      onClose: n,
      premiumType: s,
      setStep: m,
      premiumSubscription: p,
      paymentsBlocked: h,
      planId: x,
      handleCancellation: P
    } = (0, Chunk594135.a)(), [C, y] = (0, Chunk647438.useState)(false), [v, T] = (0, Chunk647438.useState)(false), E = async () => {
      y(true), T(false);
      try {
        await P(), require()
      } catch (t) {
        T(true), y(false)
      }
    }, S = p.items.some(t => {
      let {
        planId: e
      } = t;
      return !d.dJ.has(e)
    }) && null == p.renewalMutations || (null == (t = p.renewalMutations) ? true : module.items.find(t => {
      let {
        planId: e
      } = t;
      return !d.dJ.has(e)
    })) != null, _ = [];
    return _.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
      onClick: () => require(),
      variant: "secondary"
    }), S ? _.push({
      text: Chunk388032.intl.string(Chunk388032.t.PDTjLN),
      onClick: () => Chunk981631(Chunk45474.R.PREVIEW),
      disabled: C,
      variant: "critical-primary",
      loading: C
    }) : _.push({
      text: Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
      onClick: () => E(),
      disabled: C,
      variant: "critical-primary",
      loading: C
    }), (0, Chunk951288.jsx)(Chunk793030.Modal, {
      size: "md",
      transitionState: exports,
      title: "".concat(Chunk388032.intl.format(Chunk388032.t.LZunzZ, {
        planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(x))
      })),
      subtitle: g(h, Chunk63063, p),
      actions: _,
      onClose: async () => require(),
      children: v ? (0, Chunk951288.jsx)(Chunk481060.M14, {
        type: "critical",
        children: Chunk388032.intl.string(Chunk388032.t["5mlOCW"])
      }) : null
    })
  },
  g = (t, e, n) => {
    switch (n.status) {
      case m.O0b.PAST_DUE:
      case m.O0b.PAUSED:
      case m.O0b.BILLING_RETRY:
        return f.intl.string(f.t.FClXh9);
      default:
        switch (e) {
          case d.PremiumTypes.TIER_0:
            return t ? f.intl.format(f.t["l+A50F"], {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : f.intl.format(f.t.Y6Wfaw, {
              date: n.currentPeriodEnd
            });
          case d.PremiumTypes.TIER_1:
            return t ? f.intl.format(f.t.QN7eIt, {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : f.intl.format(f.t.X7i9D8, {
              date: n.currentPeriodEnd
            });
          default:
            return t ? f.intl.format(f.t.vuSNhj, {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : f.intl.format(f.t.fCdmNs, {
              date: n.currentPeriodEnd
            })
        }
    }
  }