/** Chunk was on web.js **/
/** chunk id: 562218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => h
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
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk441677 = require("./441677.js"),
  Chunk388032 = require("./388032.jsx");
let h = () => {
    var e;
    let {
      transitionState: t,
      onClose: n,
      premiumType: s,
      setStep: f,
      premiumSubscription: p,
      paymentsBlocked: h,
      planId: E,
      handleCancellation: b
    } = (0, Chunk594135.a)(), [y, O] = (0, Chunk473749.useState)(false), [v, S] = (0, Chunk473749.useState)(false), I = async () => {
      O(true), S(false);
      try {
        await b(), require()
      } catch (e) {
        S(true), O(false)
      }
    }, T = Chunk981631.items.some(e => {
      let {
        planId: t
      } = e;
      return !d.dJ.has(t)
    }) && null == Chunk981631.renewalMutations || (null == (e = Chunk981631.renewalMutations) ? true : module.items.find(e => {
      let {
        planId: t
      } = e;
      return !d.dJ.has(t)
    })) != null, C = [];
    C.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
      onClick: () => require(),
      variant: "secondary"
    }), T ? C.push({
      text: Chunk388032.intl.string(Chunk388032.t.PDTjLN),
      onClick: () => Chunk282793(Chunk45474.R.PREVIEW),
      disabled: y,
      variant: "critical-primary",
      loading: y
    }) : C.push({
      text: Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
      onClick: () => I(),
      disabled: y,
      variant: "critical-primary",
      loading: y
    });
    let A = (0, Chunk74538.Ju)(E),
      N = A ? Chunk388032.intl.string(Chunk441677.default.qbDPGM) : Chunk388032.intl.formatToPlainString(Chunk388032.t.LZunzZ, {
        planPremiumType: Chunk74538.ZP.getTierDisplayNameByPlanId("".concat(E))
      });
    return (0, Chunk54381.jsx)(Chunk793030.Modal, {
      size: "md",
      transitionState: exports,
      title: N,
      subtitle: g(h, Chunk63063, Chunk981631, A),
      actions: C,
      onClose: async () => require(),
      children: v ? (0, Chunk54381.jsx)(Chunk481060.M14, {
        type: "critical",
        children: Chunk388032.intl.string(Chunk388032.t["5mlOCW"])
      }) : null
    })
  },
  g = (e, t, n, r) => {
    switch (n.status) {
      case p.O0b.PAST_DUE:
      case p.O0b.PAUSED:
      case p.O0b.BILLING_RETRY:
        return m.intl.string(m.t.FClXh9);
      default:
        if (r) return m.intl.formatToPlainString(_.default.MI8Rml, {
          endDate: n.currentPeriodEnd,
          premiumGroupProductName: (0, f.sO)()
        });
        switch (t) {
          case d.PremiumTypes.TIER_0:
            return e ? m.intl.format(m.t["l+A50F"], {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
            }) : m.intl.format(m.t.Y6Wfaw, {
              date: n.currentPeriodEnd
            });
          case d.PremiumTypes.TIER_1:
            return e ? m.intl.format(m.t.QN7eIt, {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
            }) : m.intl.format(m.t.X7i9D8, {
              date: n.currentPeriodEnd
            });
          default:
            return e ? m.intl.format(m.t.vuSNhj, {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
            }) : m.intl.format(m.t.fCdmNs, {
              date: n.currentPeriodEnd
            })
        }
    }
  }