/** Chunk was on web.js **/
/** chunk id: 667105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DH: () => F,
  Ks: () => Z,
  Ws: () => H,
  g2: () => U,
  hf: () => k,
  k3: () => G,
  qN: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk358458 = require("./358458.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js");
require("./594190.js");
var Chunk98278 = require("./98278.js"),
  Chunk507808 = require("./507808.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk704161 = require("./704161.js"),
  Chunk200872 = require("./200872.js"),
  Chunk977156 = require("./977156.js"),
  Chunk323811 = require("./323811.js"),
  Chunk111131 = require("./111131.js"),
  Chunk725096 = require("./725096.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk669041 = require("./669041.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  let {
    quest: t,
    questContent: n,
    questContentPosition: r,
    questContentRowIndex: a,
    sourceQuestContent: s
  } = e, l = (0, o.e7)([f.default], () => f.default.getCurrentUser()), c = null == l ? true : l.hasVerifiedEmailOrPhone(), u = null == l ? true : l.verified, d = (0, h.O5)();
  return i.useCallback(() => {
    null != t && (d({
      questId: t.id,
      questContent: n,
      questContentCTA: h.jZ.CLAIM_REWARD,
      questContentPosition: r,
      questContentRowIndex: a,
      sourceQuestContent: s
    }), (0, g.xN)(t.config) && !u ? (0, N.B)() : c ? (0, g.Bg)(t.config) ? (0, C.openQuestsNitroRewardModal)(t, n) : (0, g.Xv)(t.config) ? (0, C.openQuestCollectibleRewardModal)(t, n, s) : (0, g.vQ)(t.config) ? (0, C.openQuestInGameRewardModal)(t, n, s) : (0, g.xN)(t.config) ? (0, C.openQuestOrbsRewardModal)(t, n, s) : (0, C.openQuestsRewardCodeModal)({
      quest: t,
      questContent: n,
      questContentPosition: r,
      sourceQuestContent: s
    }) : (0, N.B)())
  }, [t, d, n, r, a, c, u, s])
}
let U = e => {
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
  G = (e, t, n) => {
    let {
      message: i,
      xboxURL: a
    } = (0, E.KX)(), o = (0, h.O5)(), s = r => {
      var i;
      let s = r.target;
      (null == s || null == (i = s.tagName) ? true : i.toLowerCase()) === "a" && o({
        questId: e,
        questContent: t,
        questContentCTA: s.getAttribute("href") === a ? h.jZ.HOW_TO_HELP_ARTICLE_XBOX : h.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION,
        sourceQuestContent: n
      })
    };
    return (0, r.jsx)("span", {
      onClick: s,
      children: i
    })
  };

function B(e) {
  return e.config.features.includes(R.S7.START_QUEST_CTA) ? (0, g.pO)(e) ? e.config.features.includes(R.S7.CLOUD_GAMING_ACTIVITY) ? {
    text: D.intl.string(D.t["+qoymD"]),
    questContentCTA: h.jZ.START_QUEST
  } : {
    text: D.intl.string(D.t["Ie9++s"]),
    questContentCTA: h.jZ.START_QUEST
  } : {
    text: D.intl.string(D.t["hRIVy+"]),
    questContentCTA: h.jZ.START_QUEST
  } : {
    text: D.intl.string(D.t.l7E81v),
    questContentCTA: h.jZ.ACCEPT_QUEST
  }
}

function Z(e) {
  var t;
  let {
    quest: n,
    progressState: r,
    isCollectibleQuest: a,
    questContent: o,
    questContentPosition: s,
    questContentRowIndex: f,
    inGiftInventory: _,
    isVideoQuest: b,
    inGameQuest: y,
    sourceQuestContent: O
  } = e, v = k({
    quest: n,
    questContent: o,
    questContentPosition: s,
    questContentRowIndex: f,
    sourceQuestContent: O
  }), I = (0, E._s)({
    quest: n
  }), A = (0, E.Rf)(n), N = i.useCallback(() => {
    (0, u.$)()
  }, []), x = i.useCallback(() => {
    (0, d.Y)({
      pageType: P.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: P.jXE.QUEST_TILE_CTA,
      ctaObject: P.qAy.CTA_TO_ORBS_SHOP
    }), (0, c.mK)({
      tab: w.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: l.Z.QUEST_HOME_PAGE
    })
  }, []), M = null == (t = (0, m.WD)()) ? true : t.getId(), {
    launchInGameActivity: U
  } = (0, E.zB)(n), G = (0, g.Rt)(n), Z = i.useMemo(() => n.config.features.includes(R.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n.config.features]);
  return i.useMemo(() => {
    if (!Z && (0, g.HJ)(n) && r !== E.OH.COMPLETED && r !== E.OH.CLAIMED) {
      let e = D.intl.string(D.t.BkZhUI);
      return {
        text: e,
        tooltipText: e,
        onClick: null
      }
    }
    switch (r) {
      case E.OH.UNACCEPTED:
        let e = D.intl.string(D.t.kUQLMJ),
          t = h.jZ.ACCEPT_QUEST;
        return b && (e = D.intl.string(D.t.umdNin), t = h.jZ.START_QUEST), (y || (0, g.pO)(n)) && ({
          text: e,
          questContentCTA: t
        } = B(n)), {
          text: e,
          tooltipText: null,
          onClick: async () => {
            if ((0, g.HJ)(n)) {
              await (0, p.AH)(n.id, {
                questContent: o,
                questContentCTA: t,
                questContentPosition: s,
                questContentRowIndex: f,
                sourceQuestContent: O
              }), (0, C.openPushToPhoneModal)(n);
              return
            }
            b || G || (0, p.AH)(n.id, {
              questContent: o,
              questContentCTA: t,
              questContentPosition: s,
              questContentRowIndex: f,
              sourceQuestContent: O
            }), b ? (0, S.R)(R.dr.QUEST_HOME_DESKTOP) ? await (0, C.enrollAndStartVideoQuestWithErrorHandling)(n, {
              questContent: o,
              questContentCTA: t,
              sourceQuestContent: O,
              sourceQuestContentCTA: h.jZ.ACCEPT_QUEST,
              questContentPosition: s,
              questContentRowIndex: f
            }) : ((0, p.AH)(n.id, {
              questContent: o,
              questContentCTA: t,
              questContentPosition: s,
              questContentRowIndex: f,
              sourceQuestContent: O
            }), (0, C.openVideoQuestModal)({
              quest: n,
              questContent: o,
              sourceQuestContent: O,
              sourceQuestContentCTA: h.jZ.ACCEPT_QUEST
            })) : G && ((0, S.R)(R.dr.QUEST_HOME_DESKTOP) ? await (0, p.AH)(n.id, {
              questContent: o,
              questContentCTA: t,
              questContentPosition: s,
              questContentRowIndex: f,
              sourceQuestContent: O
            }) : (0, p.AH)(n.id, {
              questContent: o,
              questContentCTA: t,
              questContentPosition: s,
              questContentRowIndex: f,
              sourceQuestContent: O
            }), U())
          }
        };
      case E.OH.ACCEPTED:
      case E.OH.IN_PROGRESS:
        if (I && _) return {
          text: D.intl.string(D.t.Cfye4v),
          tooltipText: null,
          onClick: () => (0, g.gI)({
            quest: n
          }, {
            content: o,
            ctaContent: h.jZ.CONNECT_CONSOLE,
            position: s,
            rowIndex: f,
            impressionId: M,
            sourceQuestContent: O
          })
        };
        if (Z && (0, g.HJ)(n)) return {
          text: D.intl.string(D.t.IsH2Sp),
          tooltipText: null,
          onClick: () => {
            (0, C.openPushToPhoneModal)(n)
          }
        };
        if (b) return {
          text: (0, g.F9)(A),
          tooltipText: D.intl.string(D.t.hsbwjv),
          onClick: () => (0, C.openVideoQuestModal)({
            quest: n,
            questContent: o,
            sourceQuestContent: O,
            sourceQuestContentCTA: h.jZ.WATCH_VIDEO
          })
        };
        else if (G) {
          let {
            text: e
          } = B(n);
          return {
            text: e,
            tooltipText: D.intl.string(D.t.hsbwjv),
            onClick: () => {
              n.config.features.includes(R.S7.START_QUEST_CTA) && U()
            }
          }
        }
        return {
          text: D.intl.string(D.t.cfY4PE), tooltipText: D.intl.string(D.t.hsbwjv), onClick: null
        };
      case E.OH.COMPLETED:
        return {
          text: D.intl.string(D.t.cfY4PE), tooltipText: null, onClick: v
        };
      case E.OH.CLAIMED:
        let i = {
          tooltipText: null,
          onClick: v
        };
        if ((0, T.i)("useCtaConfig")) return {
          tooltipText: null,
          onClick: v,
          text: (0, g.wj)(n.config) ? D.intl.string(D.t.bAGFz3) : D.intl.string(D.t.vTgCWx)
        };
        if (a) return j(L({}, i), {
          text: D.intl.string(D.t.MAS7uK)
        });
        if ((0, g.vQ)(n.config)) return j(L({}, i), {
          text: D.intl.string(D.t.vTgCWx)
        });
        if ((0, g.Bg)(n.config)) return {
          tooltipText: null,
          onClick: N,
          text: D.intl.string(D.t["eQX+gg"])
        };
        else if ((0, g.xN)(n.config)) return {
          tooltipText: null,
          text: D.intl.string(D.t.WYchde),
          onClick: x
        };
        return j(L({}, i), {
          text: D.intl.string(D.t.bAGFz3)
        })
    }
  }, [r, b, I, _, v, a, n, o, s, f, M, A, N, x, y, U, O, Z, G])
}

function F() {
  let {
    enableNewRequestBehavior: e
  } = Chunk704161.Z.useConfig({
    location: "useQuestBarQuest"
  }), t = (0, Chunk725096.Z)(Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA), n = (0, Chunk442837.e7)([Chunk569984.Z], () => {
    var e, t;
    return null != (t = null != (e = Chunk569984.Z.questDeliveryOverride) ? module : (0, Chunk509212.PM)(Chunk569984.Z.quests, Chunk569984.Z.questToDeliverForPlacement, Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) ? exports : null
  });
  return module ? exports : require
}

function V(e) {
  var t;
  let {
    location: n,
    quest: r
  } = e, i = (0, I.Z)({
    location: n
  }), a = (0, E.tP)(r), s = (0, v.b)({
    location: n
  }), {
    premiumSubscription: l,
    hasFetchedSubscriptions: c
  } = (0, o.cj)([_.Z], () => ({
    premiumSubscription: _.Z.getPremiumSubscription(),
    hasFetchedSubscriptions: _.Z.hasFetchedSubscriptions()
  })), u = (0, o.e7)([b.Z], () => null != b.Z.questDeliveryOverride);
  if (null == r) return {
    isQuestBarVisible: false,
    reason: "quest_is_null"
  };
  if ((0, g.Bg)(r.config)) {
    if (!s && !c) return {
      isQuestBarVisible: false,
      reason: "premium_subscription_not_fetched"
    };
    if (null == l ? true : l.isPurchasedExternally) return {
      isQuestBarVisible: false,
      reason: "premium_subscription_is_purchased_externally"
    }
  }
  let d = (null == (t = r.userStatus) ? true : t.claimedAt) != null,
    f = !u && null != r.userStatus && (0, g.zE)(r.userStatus, y.jn.QUEST_BAR);
  return d ? {
    isQuestBarVisible: false,
    reason: "quest_claimed"
  } : a ? {
    isQuestBarVisible: false,
    reason: "quest_expired"
  } : i ? f ? {
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

function H(e) {
  let {
    location: t
  } = e, {
    isQuestBarVisible: n
  } = V({
    location: t,
    quest: F()
  }), {
    lastFetchedCurrentQuests: r,
    lastFetchedQuestToDeliver: i
  } = (0, o.cj)([b.Z], () => ({
    lastFetchedCurrentQuests: b.Z.lastFetchedCurrentQuests,
    lastFetchedQuestToDeliver: b.Z.lastFetchedQuestToDeliver
  }));
  return {
    isQuestBarEmpty: !n,
    hasLoadedQuestBar: 0 !== r && 0 !== i
  }
}