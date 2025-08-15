/** Chunk was on web.js **/
/** chunk id: 667105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DH: () => F,
  Ks: () => V,
  Ws: () => H,
  g2: () => U,
  hf: () => k,
  k3: () => G,
  qN: () => Z,
  tP: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk717976 = require("./717976.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js"),
  Chunk594190 = require("./594190.js"),
  Chunk98278 = require("./98278.js"),
  Chunk507808 = require("./507808.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk530691 = require("./530691.js"),
  Chunk200872 = require("./200872.js"),
  Chunk977156 = require("./977156.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk920916 = require("./920916.jsx"),
  Chunk669041 = require("./669041.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");

function D(e, t, n) {
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
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
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
  } = e, l = (0, o.e7)([_.default], () => _.default.getCurrentUser()), c = null == l ? true : l.hasVerifiedEmailOrPhone(), u = null == l ? true : l.verified, d = (0, h.O5)();
  return i.useCallback(() => {
    null != t && (d({
      questId: t.id,
      questContent: n,
      questContentCTA: h.jZ.CLAIM_REWARD,
      questContentPosition: r,
      questContentRowIndex: a,
      sourceQuestContent: s
    }), (0, g.xN)(t.config) && !u ? (0, N.B)() : c ? (0, g.Bg)(t.config) ? (0, S.openQuestsNitroRewardModal)(t, n) : (0, g.Xv)(t.config) ? (0, A.m)(t, n) : (0, g.vQ)(t.config) ? (0, S.openQuestInGameRewardModal)(t, n, s) : (0, g.xN)(t.config) ? (0, S.openQuestOrbsRewardModal)(t, n) : (0, S.openQuestsRewardCodeModal)({
      questId: t.id,
      questContent: n,
      questContentPosition: r,
      sourceQuestContent: s
    }) : (0, N.B)())
  }, [t, d, n, r, a, c, u, s])
}

function j(e) {
  var t;
  let n = (0, o.Wu)([u.ZP], () => u.ZP.getGamesSeen(false)).find(t => (null == t ? true : t.id) === e);
  return null != n && Date.now() - 2592e7 <= (null != (t = n.lastLaunched) ? t : 0)
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
    } = (0, b.KX)(), o = (0, h.O5)(), s = r => {
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
  return e.config.features.includes(C.S7.START_QUEST_CTA) ? {
    text: w.intl.string(w.t.ToGcxM),
    questContentCTA: h.jZ.START_QUEST
  } : {
    text: w.intl.string(w.t.l7E81t),
    questContentCTA: h.jZ.ACCEPT_QUEST
  }
}

function V(e) {
  var t;
  let {
    quest: n,
    progressState: r,
    isCollectibleQuest: a,
    questContent: o,
    questContentPosition: s,
    questContentRowIndex: u,
    inGiftInventory: _,
    isVideoQuest: p,
    inGameQuest: y,
    sourceQuestContent: O
  } = e, I = k({
    quest: n,
    questContent: o,
    questContentPosition: s,
    questContentRowIndex: u,
    sourceQuestContent: O
  }), T = (0, b._s)({
    quest: n
  }), A = (0, b.Rf)(n), N = i.useCallback(() => {
    (0, d.$)()
  }, []), D = i.useCallback(() => {
    (0, f.Y)({
      pageType: R.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: R.jXE.QUEST_TILE_CTA,
      ctaObject: R.qAy.CTA_TO_ORBS_SHOP
    }), (0, c.mK)({
      openInLayer: false,
      tab: P.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: l.Z.QUEST_HOME_PAGE
    })
  }, []), x = null == (t = (0, m.WD)()) ? true : t.getId(), {
    launchInGameActivity: j
  } = (0, b.zB)(n), U = (0, v.f)({
    location: C.dr.QUEST_HOME_DESKTOP,
    questFeatures: n.config.features
  });
  return i.useMemo(() => {
    if (!U && (0, g.HJ)(n) && r !== b.OH.COMPLETED && r !== b.OH.CLAIMED) {
      let e = w.intl.string(w.t.BkZhUF);
      return {
        text: e,
        tooltipText: e,
        onClick: null
      }
    }
    switch (r) {
      case b.OH.UNACCEPTED:
        let e = w.intl.string(w.t.kUQLMD),
          t = h.jZ.ACCEPT_QUEST;
        return p && (e = w.intl.string(w.t.umdNio), t = h.jZ.START_QUEST), y && ({
          text: e,
          questContentCTA: t
        } = B(n)), {
          text: e,
          tooltipText: null,
          onClick: async () => {
            if ((0, g.HJ)(n)) {
              let {
                enrollOnDesktop: e
              } = v.S.getCurrentConfig({
                location: C.dr.QUEST_HOME_DESKTOP
              }, {
                autoTrackExposure: false
              });
              e && await (0, E.AH)(n.id, {
                questContent: o,
                questContentCTA: t,
                questContentPosition: s,
                questContentRowIndex: u,
                sourceQuestContent: O
              }), (0, S.openPushToPhoneModal)(n);
              return
            }(0, E.AH)(n.id, {
              questContent: o,
              questContentCTA: t,
              questContentPosition: s,
              questContentRowIndex: u,
              sourceQuestContent: O
            }), p ? (0, S.openVideoQuestModal)({
              quest: n,
              questContent: o,
              sourceQuestContent: O,
              sourceQuestContentCTA: h.jZ.ACCEPT_QUEST
            }) : y && n.config.features.includes(C.S7.START_QUEST_CTA) && j()
          }
        };
      case b.OH.ACCEPTED:
      case b.OH.IN_PROGRESS:
        if (T && _) return {
          text: w.intl.string(w.t.Cfye4u),
          tooltipText: null,
          onClick: () => (0, g.gI)({
            quest: n
          }, {
            content: o,
            ctaContent: h.jZ.CONNECT_CONSOLE,
            position: s,
            rowIndex: u,
            impressionId: x,
            sourceQuestContent: O
          })
        };
        if (U && (0, g.HJ)(n)) return {
          text: w.intl.string(w.t.IsH2Sk),
          tooltipText: null,
          onClick: () => {
            (0, S.openPushToPhoneModal)(n)
          }
        };
        if (p) return {
          text: (0, g.F9)(A),
          tooltipText: w.intl.string(w.t.hsbwjo),
          onClick: () => (0, S.openVideoQuestModal)({
            quest: n,
            questContent: o,
            sourceQuestContent: O,
            sourceQuestContentCTA: h.jZ.WATCH_VIDEO
          })
        };
        else if (y && n.config.features.includes(C.S7.START_QUEST_CTA)) {
          let {
            text: e
          } = B(n);
          return {
            text: e,
            tooltipText: w.intl.string(w.t.hsbwjo),
            onClick: () => {
              n.config.features.includes(C.S7.START_QUEST_CTA) && j()
            }
          }
        }
        return {
          text: w.intl.string(w.t.cfY4PD), tooltipText: w.intl.string(w.t.hsbwjo), onClick: null
        };
      case b.OH.COMPLETED:
        return {
          text: w.intl.string(w.t.cfY4PD), tooltipText: null, onClick: I
        };
      case b.OH.CLAIMED:
        let i = {
          tooltipText: null,
          onClick: I
        };
        if (a) return M(L({}, i), {
          text: w.intl.string(w.t.MAS7uL)
        });
        if ((0, g.vQ)(n.config)) return M(L({}, i), {
          text: w.intl.string(w.t.vTgCW1)
        });
        if ((0, g.Bg)(n.config)) return {
          tooltipText: null,
          onClick: N,
          text: w.intl.string(w.t["eQX+go"])
        };
        else if ((0, g.xN)(n.config)) return {
          tooltipText: null,
          text: w.intl.string(w.t.WYchdX),
          onClick: D
        };
        return M(L({}, i), {
          text: w.intl.string(w.t.bAGFz8)
        })
    }
  }, [r, p, T, _, I, a, n, o, s, u, x, A, N, D, y, j, O, U])
}

function F() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => {
    var e, t;
    return null != (t = null != (e = Chunk569984.Z.questDeliveryOverride) ? module : (0, Chunk509212.PM)(Chunk569984.Z.quests, Chunk569984.Z.questToDeliverForPlacement, Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) ? exports : null
  })
}

function Z(e) {
  var t;
  let {
    location: n,
    quest: r
  } = e, i = (0, T.Zy)({
    location: n
  }), a = (0, b.tP)(r), s = (0, I.b)({
    location: n
  }), {
    premiumSubscription: l,
    hasFetchedSubscriptions: c
  } = (0, o.cj)([p.Z], () => ({
    premiumSubscription: p.Z.getPremiumSubscription(),
    hasFetchedSubscriptions: p.Z.hasFetchedSubscriptions()
  })), u = (0, o.e7)([y.Z], () => null != y.Z.questDeliveryOverride);
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
    f = !u && null != r.userStatus && (0, g.zE)(r.userStatus, O.jn.QUEST_BAR);
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
  } = Z({
    location: t,
    quest: F()
  }), {
    lastFetchedCurrentQuests: r,
    lastFetchedQuestToDeliver: i
  } = (0, o.cj)([y.Z], () => ({
    lastFetchedCurrentQuests: y.Z.lastFetchedCurrentQuests,
    lastFetchedQuestToDeliver: y.Z.lastFetchedQuestToDeliver
  }));
  return 0 !== r && 0 !== i && !n
}