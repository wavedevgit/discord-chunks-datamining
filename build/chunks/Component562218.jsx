/** Chunk was on web.js **/
/** chunk id: 562218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    var e;
    let {
      transitionState: t,
      onClose: n,
      premiumType: s,
      setStep: f,
      premiumSubscription: p,
      paymentsBlocked: m,
      planId: g,
      handleCancellation: E
    } = (0, Chunk594135.a)(), [b, y] = (0, Chunk473749.useState)(false), [O, v] = (0, Chunk473749.useState)(false), I = async () => {
      y(true), v(false);
      try {
        await E(), require()
      } catch (e) {
        v(true), y(false)
      }
    }, T = p.items.some(e => {
      let {
        planId: t
      } = e;
      return !d.dJ.has(t)
    }) && null == p.renewalMutations || (null == (e = p.renewalMutations) ? true : module.items.find(e => {
      let {
        planId: t
      } = e;
      return !d.dJ.has(t)
    })) != null, S = [];
    return S.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
      onClick: () => require(),
      variant: "secondary"
    }), T ? S.push({
      text: Chunk388032.intl.string(Chunk388032.t.PDTjLN),
      onClick: () => Chunk981631(Chunk45474.R.PREVIEW),
      disabled: b,
      variant: "critical-primary",
      loading: b
    }) : S.push({
      text: Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
      onClick: () => I(),
      disabled: b,
      variant: "critical-primary",
      loading: b
    }), (0, Chunk54381.jsx)(Chunk793030.Modal, {
      size: "md",
      transitionState: exports,
      title: "".concat(Chunk388032.intl.format(Chunk388032.t.LZunzZ, {
        planPremiumType: Chunk74538.ZP.getTierDisplayNameByPlanId("".concat(g))
      })),
      subtitle: h(m, Chunk63063, p),
      actions: S,
      onClose: async () => require(),
      children: O ? (0, Chunk54381.jsx)(Chunk481060.M14, {
        type: "critical",
        children: Chunk388032.intl.string(Chunk388032.t["5mlOCW"])
      }) : null
    })
  },
  h = (e, t, n) => {
    switch (n.status) {
      case f.O0b.PAST_DUE:
      case f.O0b.PAUSED:
      case f.O0b.BILLING_RETRY:
        return _.intl.string(_.t.FClXh9);
      default:
        switch (t) {
          case d.PremiumTypes.TIER_0:
            return e ? _.intl.format(_.t["l+A50F"], {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS)
            }) : _.intl.format(_.t.Y6Wfaw, {
              date: n.currentPeriodEnd
            });
          case d.PremiumTypes.TIER_1:
            return e ? _.intl.format(_.t.QN7eIt, {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS)
            }) : _.intl.format(_.t.X7i9D8, {
              date: n.currentPeriodEnd
            });
          default:
            return e ? _.intl.format(_.t.vuSNhj, {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(f.BhN.BLOCKED_PAYMENTS)
            }) : _.intl.format(_.t.fCdmNs, {
              date: n.currentPeriodEnd
            })
        }
    }
  }