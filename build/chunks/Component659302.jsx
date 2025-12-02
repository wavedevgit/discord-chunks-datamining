/** Chunk was on web.js **/
/** chunk id: 659302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DH: () => L,
  Ks: () => x,
  Ws: () => M,
  g2: () => R,
  hf: () => P,
  k3: () => w,
  qN: () => j,
  yc: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk638730 = require("./638730.js");
require("./594190.js");
var Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk704161 = require("./704161.js"),
  Chunk200872 = require("./200872.js"),
  Chunk787695 = require("./787695.js"),
  Chunk111131 = require("./111131.js"),
  Chunk968843 = require("./968843.js"),
  Chunk725096 = require("./725096.js"),
  Chunk115179 = require("./115179.js"),
  Chunk542347 = require("./542347.js"),
  Chunk300917 = require("./300917.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function P(e) {
  let {
    quest: t,
    questContent: n,
    questContentPosition: r,
    questContentRowIndex: a,
    sourceQuestContent: s
  } = e, l = (0, o.e7)([c.default], () => c.default.getCurrentUser()), u = null == l ? true : l.hasVerifiedEmailOrPhone(), d = null == l ? true : l.verified, p = (0, f.O5)();
  return i.useCallback(() => {
    null != t && (p({
      questId: t.id,
      questContent: n,
      questContentCTA: f.jZ.CLAIM_REWARD,
      questContentPosition: r,
      questContentRowIndex: a,
      sourceQuestContent: s
    }), (0, S.xN)(t.config) && !d ? (0, T.B)() : u ? (0, S.Bg)(t.config) ? (0, A.openQuestsNitroRewardModal)(t, n) : (0, S.Xv)(t.config) ? (0, A.openQuestCollectibleRewardModal)(t, n, s) : (0, S.vQ)(t.config) ? (0, A.openQuestInGameRewardModal)(t, n, s) : (0, S.xN)(t.config) ? (0, A.openQuestOrbsRewardModal)(t, n, s) : (0, A.openQuestsRewardCodeModal)({
      quest: t,
      questContent: n,
      questContentPosition: r,
      sourceQuestContent: s
    }) : (0, T.B)())
  }, [t, p, n, r, a, u, d, s])
}
let R = e => {
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
  w = (e, t, n) => {
    let {
      message: i,
      xboxURL: a
    } = (0, O.KX)(), o = (0, f.O5)(), s = r => {
      var i;
      let s = r.target;
      (null == s || null == (i = s.tagName) ? true : i.toLowerCase()) === "a" && o({
        questId: e,
        questContent: t,
        questContentCTA: s.getAttribute("href") === a ? f.jZ.HOW_TO_HELP_ARTICLE_XBOX : f.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION,
        sourceQuestContent: n
      })
    };
    return (0, r.jsx)("span", {
      onClick: s,
      children: i
    })
  };

function D(e) {
  return e.config.features.includes(C.S7.START_QUEST_CTA) ? (0, h.pO)(e) ? e.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY) ? {
    text: N.intl.string(N.t["+qoymD"]),
    questContentCTA: f.jZ.START_QUEST
  } : {
    text: N.intl.string(N.t["Ie9++s"]),
    questContentCTA: f.jZ.START_QUEST
  } : {
    text: N.intl.string(N.t["hRIVy+"]),
    questContentCTA: f.jZ.START_QUEST
  } : {
    text: N.intl.string(N.t.l7E81v),
    questContentCTA: f.jZ.ACCEPT_QUEST
  }
}

function x(e) {
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
    sourceQuestContent: _
  } = e, m = P({
    quest: n,
    questContent: a,
    questContentPosition: o,
    questContentRowIndex: s,
    sourceQuestContent: _
  }), g = (0, O._s)({
    quest: n
  }), E = (0, O.Rf)(n), b = null == (t = (0, p.WD)()) ? true : t.getId(), {
    launchInGameActivity: v
  } = (0, O.zB)(n), T = (0, h.Rt)(n), R = i.useMemo(() => n.config.features.includes(C.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n.config.features]);
  return i.useMemo(() => {
    if (!R && (0, h.HJ)(n) && r !== O.OH.COMPLETED && r !== O.OH.CLAIMED) {
      let e = N.intl.string(N.t.BkZhUI);
      return {
        text: e,
        tooltipText: e,
        onClick: null
      }
    }
    switch (r) {
      case O.OH.UNACCEPTED:
        let e = N.intl.string(N.t.kUQLMJ),
          t = f.jZ.ACCEPT_QUEST;
        return c && (e = N.intl.string(N.t.umdNin), t = f.jZ.START_QUEST), (u || (0, h.pO)(n)) && ({
          text: e,
          questContentCTA: t
        } = D(n)), {
          text: e,
          tooltipText: null,
          onClick: async () => {
            if ((0, h.HJ)(n)) {
              await (0, d.AH)(n.id, {
                questContent: a,
                questContentCTA: t,
                questContentPosition: o,
                questContentRowIndex: s,
                sourceQuestContent: _
              }), (0, A.openPushToPhoneModal)(n);
              return
            }
            c || T || (0, d.AH)(n.id, {
              questContent: a,
              questContentCTA: t,
              questContentPosition: o,
              questContentRowIndex: s,
              sourceQuestContent: _
            }), c ? (0, y.R)(C.dr.QUEST_HOME_DESKTOP) ? await (0, A.enrollAndStartVideoQuestWithErrorHandling)(n, {
              questContent: a,
              questContentCTA: t,
              sourceQuestContent: _,
              sourceQuestContentCTA: f.jZ.ACCEPT_QUEST,
              questContentPosition: o,
              questContentRowIndex: s
            }) : ((0, d.AH)(n.id, {
              questContent: a,
              questContentCTA: t,
              questContentPosition: o,
              questContentRowIndex: s,
              sourceQuestContent: _
            }), (0, A.openVideoQuestModal)({
              quest: n,
              questContent: a,
              sourceQuestContent: _,
              sourceQuestContentCTA: f.jZ.ACCEPT_QUEST
            })) : T && ((0, y.R)(C.dr.QUEST_HOME_DESKTOP) ? await (0, d.AH)(n.id, {
              questContent: a,
              questContentCTA: t,
              questContentPosition: o,
              questContentRowIndex: s,
              sourceQuestContent: _
            }) : (0, d.AH)(n.id, {
              questContent: a,
              questContentCTA: t,
              questContentPosition: o,
              questContentRowIndex: s,
              sourceQuestContent: _
            }), v())
          }
        };
      case O.OH.ACCEPTED:
      case O.OH.IN_PROGRESS:
        if (g && l) return {
          text: N.intl.string(N.t.Cfye4v),
          tooltipText: null,
          onClick: () => (0, h.gI)({
            quest: n
          }, {
            content: a,
            ctaContent: f.jZ.CONNECT_CONSOLE,
            position: o,
            rowIndex: s,
            impressionId: b,
            sourceQuestContent: _
          })
        };
        if (R && (0, h.HJ)(n)) return {
          text: N.intl.string(N.t.IsH2Sp),
          tooltipText: null,
          onClick: () => {
            (0, A.openPushToPhoneModal)(n)
          }
        };
        if (c) return {
          text: (0, I.F9)(E),
          tooltipText: N.intl.string(N.t.hsbwjv),
          onClick: () => (0, A.openVideoQuestModal)({
            quest: n,
            questContent: a,
            sourceQuestContent: _,
            sourceQuestContentCTA: f.jZ.WATCH_VIDEO
          })
        };
        else if (T) {
          let {
            text: e
          } = D(n);
          return {
            text: e,
            tooltipText: N.intl.string(N.t.hsbwjv),
            onClick: () => {
              n.config.features.includes(C.S7.START_QUEST_CTA) && v()
            }
          }
        }
        return {
          text: N.intl.string(N.t.cfY4PE), tooltipText: N.intl.string(N.t.hsbwjv), onClick: null
        };
      case O.OH.COMPLETED:
        return {
          text: N.intl.string(N.t.cfY4PE), tooltipText: null, onClick: m
        };
      case O.OH.CLAIMED:
        return {
          tooltipText: null, onClick: m, text: (0, S.wj)(n.config) ? N.intl.string(N.t.bAGFz3) : N.intl.string(N.t.vTgCWx)
        }
    }
  }, [r, c, g, l, m, n, a, o, s, b, E, u, v, _, R, T])
}

function L() {
  let {
    enableNewRequestBehavior: e
  } = Chunk704161.Z.useConfig({
    location: "useQuestBarQuest"
  }), t = (0, Chunk725096.Z)(Chunk49436.Ok.DESKTOP_ACCOUNT_PANEL_AREA), n = (0, Chunk442837.e7)([Chunk616022.Z], () => {
    var e, t;
    return null != (t = null != (e = Chunk616022.Z.questDeliveryOverride) ? module : (0, Chunk509212.PM)(Chunk616022.Z.quests, Chunk616022.Z.questToDeliverForPlacement, Chunk49436.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) ? exports : null
  });
  return module ? exports : require
}

function j(e) {
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
  } = (0, o.cj)([u.Z], () => ({
    premiumSubscription: u.Z.getPremiumSubscription(),
    hasFetchedSubscriptions: u.Z.hasFetchedSubscriptions()
  })), d = (0, o.e7)([_.Z], () => null != _.Z.questDeliveryOverride);
  if (null == r) return {
    isQuestBarVisible: false,
    reason: "quest_is_null"
  };
  if ((0, S.Bg)(r.config)) {
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
    p = !d && null != r.userStatus && (0, h.zE)(r.userStatus, m.jn.QUEST_BAR);
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

function M(e) {
  let {
    location: t
  } = e, {
    isQuestBarVisible: n
  } = j({
    location: t,
    quest: L()
  }), {
    lastFetchedCurrentQuests: r,
    lastFetchedQuestToDeliver: i
  } = (0, o.cj)([_.Z], () => ({
    lastFetchedCurrentQuests: _.Z.lastFetchedCurrentQuests,
    lastFetchedQuestToDeliver: _.Z.lastFetchedQuestToDeliver
  }));
  return {
    isQuestBarEmpty: !n,
    hasLoadedQuestBar: 0 !== r && 0 !== i
  }
}
let k = {
  leading: true,
  trailing: false
};

function U(e) {
  let {
    isShareable: t,
    questId: n,
    trackingCtx: r
  } = e;
  return (0, l.h)(i.useCallback(() => {
    t && ((0, h.f2)(n, r), (0, s.showToast)((0, s.createToast)(N.intl.string(N.t["+5kSoW"]), s.ToastType.SUCCESS)))
  }, [t, n, r]), 3e3, [], k)
}