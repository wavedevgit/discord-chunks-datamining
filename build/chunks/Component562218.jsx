/** Chunk was on 75708 **/
/** chunk id: 562218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk434333 = require("./434333.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = () => {
    var e;
    let {
      transitionState: t,
      onClose: n,
      premiumType: l,
      setStep: m,
      premiumSubscription: g,
      paymentsBlocked: f,
      planId: b,
      handleCancellation: x
    } = (0, Chunk594135.a)(), [_, j] = (0, Chunk73800.useState)(false), [E, C] = (0, Chunk73800.useState)(false), O = async () => {
      j(true), C(false);
      try {
        await x(), require()
      } catch (e) {
        C(true), j(false)
      }
    }, v = g.items.some(e => {
      let {
        planId: t
      } = e;
      return !u.dJ.has(t)
    }) && null == g.renewalMutations || (null == (e = g.renewalMutations) ? true : module.items.find(e => {
      let {
        planId: t
      } = e;
      return !u.dJ.has(t)
    })) != null, S = [];
    return S.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAA),
      onClick: () => require(),
      variant: "secondary"
    }), v ? S.push({
      text: Chunk388032.intl.string(Chunk388032.t.PDTjLC),
      onClick: () => Chunk981631(Chunk45474.R.PREVIEW),
      disabled: _,
      variant: "critical-primary",
      loading: _
    }) : S.push({
      text: Chunk388032.intl.string(Chunk388032.t["cY+Ooa"]),
      onClick: () => O(),
      disabled: _,
      variant: "critical-primary",
      loading: _
    }), (0, Chunk255367.jsx)(Chunk82659.Modal, {
      size: "md",
      transitionState: exports,
      title: "".concat(Chunk388032.intl.format(Chunk388032.t.LZunzc, {
        planPremiumType: Chunk74538.ZP.getDisplayPremiumType("".concat(b))
      })),
      subtitle: h(f, Chunk63063, g),
      actions: S,
      onClose: async () => require(),
      children: E ? (0, Chunk255367.jsx)(Chunk434333.k, {
        children: Chunk388032.intl.string(Chunk388032.t["5mlOCQ"])
      }) : null
    })
  },
  h = (e, t, n) => {
    switch (n.status) {
      case m.O0b.PAST_DUE:
      case m.O0b.PAUSED:
      case m.O0b.BILLING_RETRY:
        return p.intl.string(p.t.FClXh4);
      default:
        switch (t) {
          case u.p9.TIER_0:
            return e ? p.intl.format(p.t["l+A50N"], {
              date: n.currentPeriodEnd,
              helpdeskArticle: l.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : p.intl.format(p.t.Y6Wfa2, {
              date: n.currentPeriodEnd
            });
          case u.p9.TIER_1:
            return e ? p.intl.format(p.t.QN7eIi, {
              date: n.currentPeriodEnd,
              helpdeskArticle: l.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : p.intl.format(p.t.X7i9Dw, {
              date: n.currentPeriodEnd
            });
          default:
            return e ? p.intl.format(p.t.vuSNho, {
              date: n.currentPeriodEnd,
              helpdeskArticle: l.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS)
            }) : p.intl.format(p.t.fCdmNj, {
              date: n.currentPeriodEnd
            })
        }
    }
  }