/** Chunk was on web.js **/
/** chunk id: 659302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DH: () => G,
  Ks: () => U,
  Ws: () => B,
  g2: () => j,
  hf: () => L,
  k3: () => M,
  qN: () => Z,
  yc: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk148884 = require("./148884.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk638730 = require("./638730.js");
require("./594190.js");
var Chunk98278 = require("./98278.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk704161 = require("./704161.js"),
  Chunk200872 = require("./200872.js"),
  Chunk787695 = require("./787695.js"),
  Chunk111131 = require("./111131.js"),
  Chunk968843 = require("./968843.js"),
  Chunk725096 = require("./725096.js"),
  Chunk304696 = require("./304696.js"),
  Chunk862657 = require("./862657.js"),
  Chunk387745 = require("./387745.js"),
  Chunk115179 = require("./115179.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk542347 = require("./542347.js"),
  Chunk300917 = require("./300917.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function L(e) {
  let {
    quest: t,
    questContent: n,
    questContentPosition: r,
    questContentRowIndex: a,
    sourceQuestContent: s
  } = e, l = (0, o.e7)([u.default], () => u.default.getCurrentUser()), d = null == l ? true : l.hasVerifiedEmailOrPhone(), f = null == l ? true : l.verified, _ = (0, p.O5)();
  return i.useCallback(() => {
    null != t && (_({
      questId: t.id,
      questContent: n,
      questContentCTA: p.jZ.CLAIM_REWARD,
      questContentPosition: r,
      questContentRowIndex: a,
      sourceQuestContent: s
    }), (0, C.xN)(t.config) && !f ? (0, R.B)() : d ? (0, C.Bg)(t.config) ? (0, c.$)() : (0, C.Xv)(t.config) ? (0, D.openQuestCollectibleRewardModal)(t, n, s) : (0, C.vQ)(t.config) ? (0, D.openQuestInGameRewardModal)(t, n, s) : (0, C.xN)(t.config) ? (0, D.openQuestOrbsRewardModal)(t, n, s) : (0, D.openQuestsRewardCodeModal)({
      quest: t,
      sourceQuestContent: s
    }) : (0, R.B)())
  }, [t, _, n, r, a, d, f, s])
}
let j = e => {
    let {
      useReducedMotion: t,
      className: n
    } = e, [o, l] = (0, s.q_F)(() => ({})), c = i.useRef(false), u = e => {
      c.current = true, l({
        from: {
          rotate: "0deg"
        },
        to: {
          rotate: "360deg"
        },
        config: {
          tension: 750,
          mass: 5,
          friction: 100
        },
        loop: () => null != e ? e : c.current,
        immediate: t
      })
    }, d = (0, a.animated)(s.DuK);
    return {
      render: () => (0, r.jsx)(d, {
        className: n,
        style: t ? true : o,
        color: "currentColor",
        size: "xs"
      }),
      startAnimation: u,
      stopAnimation: () => {
        c.current = false
      }
    }
  },
  M = (e, t, n) => {
    let {
      message: i,
      xboxURL: a
    } = (0, O.KX)(), o = (0, p.O5)(), s = r => {
      var i;
      let s = r.target;
      (null == s || null == (i = s.tagName) ? true : i.toLowerCase()) === "a" && o({
        questId: e,
        questContent: t,
        questContentCTA: s.getAttribute("href") === a ? p.jZ.HOW_TO_HELP_ARTICLE_XBOX : p.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION,
        sourceQuestContent: n
      })
    };
    return (0, r.jsx)("span", {
      onClick: s,
      children: i
    })
  };

function k(e) {
  return e.config.features.includes(w.S7.START_QUEST_CTA) ? (0, A.pO)(e) ? e.config.features.includes(w.S7.CLOUD_GAMING_ACTIVITY) ? {
    text: x.intl.string(x.t["+qoymD"]),
    questContentCTA: p.jZ.START_QUEST
  } : {
    text: x.intl.string(x.t["Ie9++s"]),
    questContentCTA: p.jZ.START_QUEST
  } : {
    text: x.intl.string(x.t["hRIVy+"]),
    questContentCTA: p.jZ.START_QUEST
  } : {
    text: x.intl.string(x.t.l7E81v),
    questContentCTA: p.jZ.ACCEPT_QUEST
  }
}

function U(e) {
  var t;
  let {
    quest: n,
    progressState: r,
    questContent: a,
    questContentPosition: o,
    questContentRowIndex: s,
    inGiftInventory: l,
    isVideoQuest: c,
    inGameQuest: u,
    sourceQuestContent: d
  } = e, m = L({
    quest: n,
    questContent: a,
    questContentPosition: o,
    questContentRowIndex: s,
    sourceQuestContent: d
  }), h = (0, O._s)({
    quest: n
  }), g = (0, O.Rf)(n), E = null == (t = (0, _.WD)()) ? true : t.getId(), {
    launchInGameActivity: b
  } = (0, O.zB)(n), v = (0, N.Rt)(n);
  return i.useMemo(() => {
    switch (r) {
      case O.OH.UNACCEPTED:
        let e = x.intl.string(x.t.kUQLMJ),
          t = p.jZ.ACCEPT_QUEST;
        return c && (e = x.intl.string(x.t.umdNin), t = p.jZ.START_QUEST), (u || (0, A.pO)(n)) && ({
          text: e,
          questContentCTA: t
        } = k(n)), {
          text: e,
          tooltipText: null,
          onClick: async () => {
            if ((0, A.HJ)(n)) {
              await (0, f.AH)(n.id, {
                questContent: a,
                questContentCTA: t,
                questContentPosition: o,
                questContentRowIndex: s,
                sourceQuestContent: d
              }), (0, D.openPushToPhoneModal)(n);
              return
            }
            c || v || (0, f.AH)(n.id, {
              questContent: a,
              questContentCTA: t,
              questContentPosition: o,
              questContentRowIndex: s,
              sourceQuestContent: d
            }), c ? (0, y.R)(w.dr.QUEST_HOME_DESKTOP) ? await (0, D.enrollAndStartVideoQuestWithErrorHandling)(n, {
              questContent: a,
              questContentCTA: t,
              sourceQuestContent: d,
              sourceQuestContentCTA: p.jZ.ACCEPT_QUEST,
              questContentPosition: o,
              questContentRowIndex: s
            }) : ((0, f.AH)(n.id, {
              questContent: a,
              questContentCTA: t,
              questContentPosition: o,
              questContentRowIndex: s,
              sourceQuestContent: d
            }), (0, D.openVideoQuestModal)({
              quest: n,
              questContent: a,
              sourceQuestContent: d,
              sourceQuestContentCTA: p.jZ.ACCEPT_QUEST
            })) : v && ((0, y.R)(w.dr.QUEST_HOME_DESKTOP) ? await (0, f.AH)(n.id, {
              questContent: a,
              questContentCTA: t,
              questContentPosition: o,
              questContentRowIndex: s,
              sourceQuestContent: d
            }) : (0, f.AH)(n.id, {
              questContent: a,
              questContentCTA: t,
              questContentPosition: o,
              questContentRowIndex: s,
              sourceQuestContent: d
            }), b())
          }
        };
      case O.OH.ACCEPTED:
      case O.OH.IN_PROGRESS:
        if (h && l) return {
          text: x.intl.string(x.t.Cfye4v),
          tooltipText: null,
          onClick: () => (0, T.gI)({
            quest: n
          }, {
            content: a,
            ctaContent: p.jZ.CONNECT_CONSOLE,
            position: o,
            rowIndex: s,
            impressionId: E,
            sourceQuestContent: d
          })
        };
        if ((0, A.HJ)(n)) return {
          text: x.intl.string(x.t.IsH2Sp),
          tooltipText: null,
          onClick: () => {
            (0, D.openPushToPhoneModal)(n)
          }
        };
        if (c) return {
          text: (0, P.F9)(g),
          tooltipText: x.intl.string(x.t.hsbwjv),
          onClick: () => (0, D.openVideoQuestModal)({
            quest: n,
            questContent: a,
            sourceQuestContent: d,
            sourceQuestContentCTA: p.jZ.WATCH_VIDEO
          })
        };
        else if (v) {
          let {
            text: e
          } = k(n);
          return {
            text: e,
            tooltipText: x.intl.string(x.t.hsbwjv),
            onClick: () => {
              n.config.features.includes(w.S7.START_QUEST_CTA) && b()
            }
          }
        }
        return {
          text: x.intl.string(x.t.cfY4PE), tooltipText: x.intl.string(x.t.hsbwjv), onClick: null
        };
      case O.OH.COMPLETED:
        return {
          text: x.intl.string(x.t.cfY4PE), tooltipText: null, onClick: m
        };
      case O.OH.CLAIMED:
        return {
          tooltipText: null, onClick: m, text: (0, C.wj)(n.config) ? x.intl.string(x.t.bAGFz3) : x.intl.string(x.t.vTgCWx)
        }
    }
  }, [r, c, h, l, m, n, a, o, s, E, g, u, b, d, v])
}

function G() {
  let {
    enableNewRequestBehavior: e
  } = Chunk704161.Z.useConfig({
    location: "useQuestBarQuest"
  }), t = (0, Chunk725096.Z)(Chunk49436.Ok.DESKTOP_ACCOUNT_PANEL_AREA), n = (0, Chunk442837.e7)([Chunk616022.Z], () => {
    var e, t;
    return null != (t = null != (e = Chunk616022.Z.questDeliveryOverride) ? module : (0, Chunk862657.PM)(Chunk616022.Z.quests, Chunk616022.Z.questToDeliverForPlacement, Chunk49436.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) ? exports : null
  });
  return module ? exports : require
}

function Z(e) {
  var t;
  let {
    location: n,
    quest: r
  } = e, i = (0, b.Z)({
    location: n
  }), a = (0, O.tP)(r), s = (0, E.b)({
    location: n
  }), {
    premiumSubscription: l,
    hasFetchedSubscriptions: c
  } = (0, o.cj)([d.Z], () => ({
    premiumSubscription: d.Z.getPremiumSubscription(),
    hasFetchedSubscriptions: d.Z.hasFetchedSubscriptions()
  })), u = (0, o.e7)([m.Z], () => null != m.Z.questDeliveryOverride);
  if (null == r) return {
    isQuestBarVisible: false,
    reason: "quest_is_null"
  };
  if ((0, C.Bg)(r.config)) {
    if (!s && !c) return {
      isQuestBarVisible: false,
      reason: "premium_subscription_not_fetched"
    };
    if (null == l ? true : l.isPurchasedExternally) return {
      isQuestBarVisible: false,
      reason: "premium_subscription_is_purchased_externally"
    }
  }
  let f = (null == (t = r.userStatus) ? true : t.claimedAt) != null,
    p = !u && null != r.userStatus && (0, I.zE)(r.userStatus, h.jn.QUEST_BAR);
  return f ? {
    isQuestBarVisible: false,
    reason: "quest_claimed"
  } : a ? {
    isQuestBarVisible: false,
    reason: "quest_expired"
  } : i ? p ? {
    isQuestBarVisible: false,
    reason: "quest_dismissed"
  } : {
    isQuestBarVisible: true,
    reason: "quest_bar_visible"
  } : {
    isQuestBarVisible: false,
    reason: "quest_not_eligible_for_quests"
  }
}

function B(e) {
  let {
    location: t
  } = e, {
    isQuestBarVisible: n
  } = Z({
    location: t,
    quest: G()
  }), {
    lastFetchedCurrentQuests: r,
    lastFetchedQuestToDeliver: i
  } = (0, o.cj)([m.Z], () => ({
    lastFetchedCurrentQuests: m.Z.lastFetchedCurrentQuests,
    lastFetchedQuestToDeliver: m.Z.lastFetchedQuestToDeliver
  }));
  return {
    isQuestBarEmpty: !n,
    hasLoadedQuestBar: 0 !== r && 0 !== i
  }
}
let F = {
  leading: true,
  trailing: false
};

function V(e) {
  let {
    isShareable: t,
    questId: n,
    trackingCtx: r
  } = e;
  return (0, l.h)(i.useCallback(() => {
    t && ((0, S.f2)(n, r), (0, s.showToast)((0, s.createToast)(x.intl.string(x.t["+5kSoW"]), s.ToastType.SUCCESS)))
  }, [t, n, r]), 3e3, [], F)
}