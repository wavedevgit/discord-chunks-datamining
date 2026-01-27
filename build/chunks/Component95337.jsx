/** Chunk was on web.js **/
/** chunk id: 95337, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => m
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk473702 = require("./473702.js"),
  Chunk916974 = require("./916974.js"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx");
let m = () => {
    var e;
    let {
      transitionState: t,
      onClose: n,
      premiumType: s,
      setStep: f,
      premiumSubscription: p,
      paymentsBlocked: m,
      planId: E,
      handleCancellation: y
    } = (0, u.X)(), [b, O] = (0, i.useState)(false), [v, A] = (0, i.useState)(false), I = async () => {
      O(true), A(false);
      try {
        await y(), n()
      } catch (e) {
        A(true), O(false)
      }
    }, S = p.items.some(e => {
      let {
        planId: t
      } = e;
      return !d.JM.has(t)
    }) && null == p.renewalMutations || (null == (e = p.renewalMutations) ? true : e.items.find(e => {
      let {
        planId: t
      } = e;
      return !d.JM.has(t)
    })) != null, T = [];
    T.push({
      text: h.intl.string(h.t.h9tkAK),
      onClick: () => n(),
      variant: "secondary"
    }), S ? T.push({
      text: h.intl.string(h.t.PDTjLN),
      onClick: () => f(c.g.PREVIEW),
      disabled: b,
      variant: "critical-primary",
      loading: b
    }) : T.push({
      text: h.intl.string(h.t["cY+Oob"]),
      onClick: () => I(),
      disabled: b,
      variant: "critical-primary",
      loading: b
    });
    let C = (0, l.Zb)(E),
      N = C ? h.intl.string(_.default.qbDPGM) : h.intl.formatToPlainString(h.t.LZunzZ, {
        planPremiumType: l.Ay.getTierDisplayNameByPlanId("".concat(E))
      });
    return (0, r.jsx)(a.Modal, {
      size: "md",
      transitionState: t,
      title: N,
      subtitle: g(m, s, p, C),
      actions: T,
      onClose: async () => n(),
      children: v ? (0, r.jsx)(o.wx6, {
        type: "critical",
        children: h.intl.string(h.t["5mlOCW"])
      }) : null
    })
  },
  g = (e, t, n, r) => {
    switch (n.status) {
      case p.Dmq.PAST_DUE:
      case p.Dmq.PAUSED:
      case p.Dmq.BILLING_RETRY:
        return h.intl.string(h.t.FClXh9);
      default:
        if (r) return h.intl.formatToPlainString(_.default.MI8Rml, {
          endDate: n.currentPeriodEnd,
          premiumGroupProductName: (0, f.DP)()
        });
        switch (t) {
          case d.PremiumTypes.TIER_0:
            return e ? h.intl.format(h.t["l+A50F"], {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS)
            }) : h.intl.format(h.t.Y6Wfaw, {
              date: n.currentPeriodEnd
            });
          case d.PremiumTypes.TIER_1:
            return e ? h.intl.format(h.t.QN7eIt, {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS)
            }) : h.intl.format(h.t.X7i9D8, {
              date: n.currentPeriodEnd
            });
          default:
            return e ? h.intl.format(h.t.vuSNhj, {
              date: n.currentPeriodEnd,
              helpdeskArticle: s.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS)
            }) : h.intl.format(h.t.fCdmNs, {
              date: n.currentPeriodEnd
            })
        }
    }
  }