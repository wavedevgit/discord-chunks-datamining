/** Chunk was on 69432 **/
/** chunk id: 562218, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  G: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk434333 = require("./434333.jsx"),
  Chunk82659 = require("./82659.jsx"),
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
      transitionState: n,
      onClose: e,
      premiumType: s,
      setStep: m,
      premiumSubscription: p,
      paymentsBlocked: h,
      planId: x,
      handleCancellation: C
    } = (0, Chunk594135.a)(), [P, v] = (0, Chunk647438.useState)(false), [y, S] = (0, Chunk647438.useState)(false), _ = async () => {
      v(true), S(false);
      try {
        await C(), require()
      } catch (t) {
        S(true), v(false)
      }
    }, D = p.items.some(t => {
      let {
        planId: n
      } = t;
      return !d.dJ.has(n)
    }) && null == p.renewalMutations || (null == (t = p.renewalMutations) ? true : module.items.find(t => {
      let {
        planId: n
      } = t;
      return !d.dJ.has(n)
    })) != null, E = [];
    return E.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAA),
      onClick: () => require(),
      variant: "secondary"
    }), D ? E.push({
      text: Chunk388032.intl.string(Chunk388032.t.PDTjLC),
      onClick: () => Chunk981631(Chunk45474.R.PREVIEW),
      disabled: P,
      variant: "critical-primary",
      loading: P
    }) : E.push({
      text: Chunk388032.intl.string(Chunk388032.t["cY+Ooa"]),
      onClick: () => _(),
      disabled: P,
      variant: "critical-primary",
      loading: P
    }), (0, Chunk951288.jsx)(Chunk82659.Modal, {
      size: "md",
      transitionState: exports,
      title: "".concat(Chunk388032.intl.format(Chunk388032.t.LZunzc, {
        planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(x))
      })),
      subtitle: g(h, Chunk63063, p),
      actions: E,
      onClose: async () => require(),
      children: y ? (0, Chunk951288.jsx)(Chunk434333.k, {
        children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
      }) : null
    })
  },
  g = (t, n, e) => {
    switch (e.status) {
      case m.O0b.PAST_DUE:
      case m.O0b.PAUSED:
      case m.O0b.BILLING_RETRY:
        return f.intl.string(f.t.FClXh4);
      default:
        switch (n) {
          case d.p9.TIER_0:
            return t ? f.intl.format(f.t["l+A50N"], {
              date: e.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : f.intl.format(f.t.Y6Wfa2, {
              date: e.currentPeriodEnd
            });
          case d.p9.TIER_1:
            return t ? f.intl.format(f.t.QN7eIi, {
              date: e.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : f.intl.format(f.t.X7i9Dw, {
              date: e.currentPeriodEnd
            });
          default:
            return t ? f.intl.format(f.t.vuSNho, {
              date: e.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : f.intl.format(f.t.fCdmNj, {
              date: e.currentPeriodEnd
            })
        }
    }
  }