/** Chunk was on web.js **/
/** chunk id: 372113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk706454 = require("./706454.js"),
  Chunk63063 = require("./63063.js"),
  Chunk930153 = require("./930153.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk373370 = require("./373370.js"),
  Chunk566078 = require("./566078.js"),
  Chunk340100 = require("./340100.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk128535 = require("./128535.jsx"),
  Chunk87894 = require("./87894.js"),
  Chunk2660 = require("./2660.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk717735 = require("./717735.js");

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
let k = (e, t, n) => (0, A.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function j(e) {
  let {
    containerSize: t,
    onClick: n,
    children: i,
    tabIndex: o
  } = e;
  return "xs" === t ? (0, r.jsx)(c.P3F, {
    tabIndex: o,
    className: w.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, r.jsx)(l.zx, {
    tabIndex: o,
    wrapperClassName: w.ctaButtonWrapper,
    color: l.Tt.PRIMARY,
    onClick: n,
    children: i
  })
}

function U(e) {
  var t, n, r, i, o;
  let {
    quest: a,
    locale: s,
    isQuestExpired: l,
    sharedQuestFields: c,
    collectibleQuestRewardDescription: u,
    formattedCompletionDate: d
  } = e, p = (null == (t = a.userStatus) ? true : t.completedAt) != null, m = p && (null == (n = a.userStatus) ? true : n.claimedAt) != null, g = (0, h.oo)({
    quest: a
  }), E = c.defaultRewardNameWithArticle;
  if (m) {
    let e = g ? (0, h.o9)({
        quest: a,
        idx: null == (r = a.userStatus) ? true : r.claimedTier
      }) : null,
      t = null != (i = null == e ? true : e.messages.nameWithArticle) ? i : null;
    return null != t ? P.intl.formatToPlainString(P.t.RrxtPT, {
      reward: t,
      date: d
    }) : P.intl.formatToPlainString(P.t.zNoqRU, {
      reward: E,
      date: d
    })
  }
  if (p) return g ? P.intl.formatToPlainString(P.t.l1jCMz, {
    date: d
  }) : P.intl.formatToPlainString(P.t.zNoqRU, {
    reward: E,
    date: d
  });
  let b = g ? (0, h.o9)({
    quest: a,
    idx: 0
  }) : null;
  return l ? P.intl.formatToPlainString(P.t.DT3aub, {
    reward: null != (o = null == b ? true : b.messages.nameWithArticle) ? o : E
  }) : null != b && null != b.approximateCount ? P.intl.format(P.t["4bMK19"], {
    maxReward: b.messages.nameWithArticle,
    maxRewardCount: (0, _.Bs)(b.approximateCount, s),
    helpCenterLink: f.Z.getArticleURL(R.BhN.QUESTS_LEARN_MORE)
  }) : u
}

function G(e) {
  let {
    quest: t,
    progressState: n,
    isCollectibleQuest: i,
    questContent: o,
    questContentPosition: a,
    inGiftInventory: d,
    sourceQuestContent: f
  } = e, _ = n >= m.OH.COMPLETED, p = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), E = (0, s.e7)([g.Z], () => g.Z.isEnrolling(t.id)), b = (0, h.q8)(t), y = (0, h.Vl)(t), O = (0, T.Ks)({
    progressState: n,
    quest: t,
    questContent: o,
    isCollectibleQuest: i,
    questContentPosition: a,
    inGiftInventory: d,
    isVideoQuest: b,
    inGameQuest: y,
    sourceQuestContent: f
  }), v = _ && !p ? c.gtL : l.zx;
  return (0, r.jsx)(c.ua7, {
    text: O.tooltipText,
    tooltipContentClassName: w.ctaTooltipText,
    children: e => {
      var t;
      return (0, r.jsx)(v, M(L({}, e), {
        wrapperClassName: w.ctaButtonWrapper,
        color: l.Tt.BRAND,
        disabled: null == O.onClick,
        submitting: E,
        onClick: null != (t = O.onClick) ? t : () => {},
        children: (0, r.jsx)("div", {
          className: w.ctaButtonInner,
          children: O.text
        })
      }))
    }
  }, O.tooltipText)
}
let B = e => {
  var t;
  let {
    quest: n,
    location: o,
    size: u,
    isFocused: f,
    isQuestExpired: _,
    isExpanded: T,
    isAnimating: R,
    contentPosition: D,
    sourceQuestContent: x
  } = e, B = (0, m._Q)(n), Z = (0, m.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), F = B >= m.OH.ACCEPTED, V = B >= m.OH.COMPLETED, H = B >= m.OH.CLAIMED, Y = (0, h.Xv)(n.config), W = (0, A.uq)(o), K = o === E.jn.QUESTS_EMBED, z = T || R, q = F && !H && W, X = (0, m.t5)(n, C.dr.QUESTS_CARD, o, x), {
    xboxAndPlaystationAccounts: Q
  } = (0, m.z6)(), J = (0, p.O5)(), $ = i.useMemo(() => y.r.build(n.config), [n.config]), ee = (0, m.Rf)(n), et = (0, b.DD)({
    quest: n,
    taskDetails: ee,
    location: C.dr.QUESTS_CARD,
    questContent: E.jn.QUESTS_EMBED,
    sourceQuestContent: x
  }), en = (0, s.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []), er = () => {
    (0, I.navigateToQuestHome)({
      fromContent: o,
      questId: n.id
    }), J({
      questId: n.id,
      questContent: o,
      questContentPosition: D,
      questContentCTA: p.jZ.LEARN_MORE,
      sourceQuestContent: x
    })
  }, ei = (0, s.e7)([d.default], () => d.default.locale), eo = (0, m.z)(n), ea = W && Y, es = _ && !V, el = Q.length > 0 && W && (0, h.$J)(n) && F && !V && !eo, ec = (0, r.jsx)(v.Z, {
    autoplay: f,
    className: a()(w.gridImg, {
      [w.questRewardGiftInventory]: W && "lg" === u,
      [w.questRewardEmbed]: K && "lg" === u,
      [w.questRewardEmbedSm]: "sm" === u,
      [w.questRewardEmbedXs]: "xs" === u
    }),
    learnMoreStyle: W ? null : "text",
    location: C.dr.QUESTS_CARD,
    quest: n,
    questContent: o,
    questContentPosition: D,
    sourceQuestContent: x
  }), eu = () => _ && !V ? null : (0, r.jsx)(G, {
    quest: n,
    progressState: B,
    isCollectibleQuest: Y,
    questContent: o,
    inGiftInventory: W,
    sourceQuestContent: x
  });
  return (0, r.jsxs)("div", {
    className: w.root,
    children: [(0, r.jsxs)("div", {
      className: a()(w.outerContainer, {
        [w.outerContainerSm]: "sm" === u,
        [w.outerContainerXs]: "xs" === u,
        [w.outerContainerNoProgress]: !q
      }),
      style: {
        visibility: z ? "inherit" : "hidden"
      },
      "aria-hidden": !z,
      children: [(0, r.jsx)(c.ua7, {
        text: es ? P.intl.string(P.t["04MTGR"]) : null,
        tooltipContentClassName: w.rewardTileExpirationTooltip,
        shouldShow: es,
        children: e => (0, r.jsxs)("div", M(L({
          className: w.rewardTileWrapper
        }, e), {
          children: [_ && (0, r.jsx)("div", {
            className: w.rewardTileExpired,
            children: (0, r.jsx)(c.Mgn, {
              color: c.TVs.colors.WHITE
            })
          }), ea ? (0, r.jsx)(N.Z, {
            questConfig: n.config,
            fallback: ec,
            isFocused: f
          }) : ec]
        }))
      }), (0, r.jsxs)("div", {
        className: a()(w.gridText, w.taskDetails),
        children: [(0, r.jsx)(c.Text, {
          variant: k(o, u, F),
          className: w.taskInstructions,
          children: _ ? P.intl.formatToPlainString(P.t["ge+AJi"], {
            questName: n.config.messages.questName
          }) : X
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: U({
            quest: n,
            locale: ei,
            isQuestExpired: _,
            sharedQuestFields: $,
            collectibleQuestRewardDescription: et,
            formattedCompletionDate: Z
          })
        })]
      }), en ? (0, r.jsxs)("div", {
        className: a()(w.ctaButtonContainer, w.gridCtaButtons),
        children: [(0, r.jsx)(l.zx, {
          color: l.Tt.PRIMARY,
          disabled: true,
          className: w.questEnrollmentBlockedButton,
          children: P.intl.string(P.t.V293qq)
        }), (0, r.jsx)(l.zx, {
          color: l.Tt.BRAND,
          onClick: () => (0, I.openQuestMinorEnrollmentBlockModal)(n, o, x),
          className: w.questEnrollmentBlockedButton,
          children: P.intl.string(P.t.vY9GgI)
        })]
      }) : (0, r.jsxs)("div", {
        className: a()(w.ctaButtonContainer, w.gridCtaButtons),
        children: [!W && (0, r.jsx)(j, {
          containerSize: u,
          onClick: er,
          children: P.intl.string(P.t.LLLLPD)
        }), eu()]
      }), q && (0, r.jsx)(O.Z, {
        className: w.gridProgressBar,
        color: V ? c.TVs.colors.TEXT_FEEDBACK_POSITIVE : c.TVs.colors.BG_BRAND,
        quest: n,
        isInventory: W
      })]
    }), el && (0, r.jsxs)("div", {
      className: w.microphoneContainer,
      children: [(0, r.jsx)("div", {
        className: w.separator
      }), (0, r.jsx)(S.Z, {
        quest: n,
        location: o,
        sourceQuestContent: x
      })]
    })]
  })
}