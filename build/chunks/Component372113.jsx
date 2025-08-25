/** Chunk was on web.js **/
/** chunk id: 372113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk87894 = require("./87894.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997267 = require("./997267.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = (e, t, n) => (0, T.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function L(e) {
  let {
    containerSize: t,
    onClick: n,
    text: i,
    tabIndex: o
  } = e;
  return "xs" === t ? (0, r.jsx)(c.P3F, {
    tabIndex: o,
    className: N.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, r.jsx)(c.zxk, {
    fullWidth: true,
    tabIndex: o,
    variant: "secondary",
    onClick: n,
    text: i
  })
}

function j(e) {
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
    return null != t ? C.intl.formatToPlainString(C.t.RrxtPT, {
      reward: t,
      date: d
    }) : C.intl.formatToPlainString(C.t.zNoqRU, {
      reward: E,
      date: d
    })
  }
  if (p) return g ? C.intl.formatToPlainString(C.t.l1jCMz, {
    date: d
  }) : C.intl.formatToPlainString(C.t.zNoqRU, {
    reward: E,
    date: d
  });
  let b = g ? (0, h.o9)({
    quest: a,
    idx: 0
  }) : null;
  return l ? C.intl.formatToPlainString(C.t.DT3aub, {
    reward: null != (o = null == b ? true : b.messages.nameWithArticle) ? o : E
  }) : null != b && null != b.approximateCount ? C.intl.format(C.t["4bMK19"], {
    maxReward: b.messages.nameWithArticle,
    maxRewardCount: (0, _.Bs)(b.approximateCount, s),
    helpCenterLink: f.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE)
  }) : u
}

function M(e) {
  let {
    quest: t,
    progressState: n,
    isCollectibleQuest: i,
    questContent: o,
    questContentPosition: a,
    sourceQuestContent: d
  } = e, f = n >= m.OH.COMPLETED, _ = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), p = (0, s.e7)([g.Z], () => g.Z.isEnrolling(t.id)), E = (0, h.q8)(t), b = (0, h.Vl)(t), y = (0, I.Ks)({
    progressState: n,
    quest: t,
    questContent: o,
    isCollectibleQuest: i,
    questContentPosition: a,
    inGiftInventory: false,
    isVideoQuest: E,
    inGameQuest: b,
    sourceQuestContent: d
  });
  return (0, r.jsx)(c.ua7, {
    text: y.tooltipText,
    tooltipContentClassName: N.ctaTooltipText,
    children: e => {
      var t, n;
      return f && !_ ? (0, r.jsx)(c.gtL, D(P({}, e), {
        wrapperClassName: N.ctaButtonWrapper,
        color: l.Tt.BRAND,
        disabled: null == y.onClick,
        onClick: null != (t = y.onClick) ? t : true,
        children: y.text
      })) : (0, r.jsx)(c.zxk, D(P({}, e), {
        fullWidth: true,
        variant: "primary",
        disabled: null == y.onClick,
        loading: p,
        onClick: null != (n = y.onClick) ? n : true,
        text: y.text
      }))
    }
  }, y.tooltipText)
}
let k = e => {
  var t;
  let {
    quest: n,
    location: o,
    size: l,
    isFocused: u,
    isQuestExpired: f,
    isExpanded: _,
    isAnimating: I,
    contentPosition: T,
    sourceQuestContent: A
  } = e, R = (0, m._Q)(n), w = (0, m.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), k = R >= m.OH.ACCEPTED, U = R >= m.OH.COMPLETED, G = (0, h.Xv)(n.config), B = _ || I, Z = (0, m.t5)(n, S.dr.QUESTS_CARD, o, A), F = (0, p.O5)(), V = i.useMemo(() => y.r.build(n.config), [n.config]), H = (0, m.Rf)(n), Y = (0, b.DD)({
    quest: n,
    taskDetails: H,
    location: S.dr.QUESTS_CARD,
    questContent: E.jn.QUESTS_EMBED,
    sourceQuestContent: A
  }), W = (0, s.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []), K = () => {
    (0, v.navigateToQuestHome)({
      fromContent: o,
      questId: n.id
    }), F({
      questId: n.id,
      questContent: o,
      questContentPosition: T,
      questContentCTA: p.jZ.LEARN_MORE,
      sourceQuestContent: A
    })
  }, z = (0, s.e7)([d.default], () => d.default.locale), q = f && !U;
  return (0, r.jsx)("div", {
    className: N.root,
    children: (0, r.jsxs)("div", {
      className: a()(N.outerContainer, {
        [N.outerContainerSm]: "sm" === l,
        [N.outerContainerXs]: "xs" === l
      }),
      style: {
        visibility: B ? "inherit" : "hidden"
      },
      "aria-hidden": !B,
      children: [(0, r.jsx)(c.ua7, {
        text: q ? C.intl.string(C.t["04MTGR"]) : null,
        tooltipContentClassName: N.rewardTileExpirationTooltip,
        shouldShow: q,
        children: e => (0, r.jsxs)("div", D(P({
          className: N.rewardTileWrapper
        }, e), {
          children: [f && (0, r.jsx)("div", {
            className: N.rewardTileExpired,
            children: (0, r.jsx)(c.Mgn, {
              color: c.TVs.colors.WHITE
            })
          }), (0, r.jsx)(O.Z, {
            autoplay: u,
            className: a()({
              [N.questRewardEmbed]: "lg" === l,
              [N.questRewardEmbedSm]: "sm" === l,
              [N.questRewardEmbedXs]: "xs" === l
            }),
            learnMoreStyle: "text",
            location: S.dr.QUESTS_CARD,
            quest: n,
            questContent: o,
            questContentPosition: T,
            sourceQuestContent: A
          })]
        }))
      }), (0, r.jsxs)("div", {
        className: N.taskDetails,
        children: [(0, r.jsx)(c.Text, {
          variant: x(o, l, k),
          className: N.taskInstructions,
          children: f ? C.intl.formatToPlainString(C.t["ge+AJi"], {
            questName: n.config.messages.questName
          }) : Z
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: j({
            quest: n,
            locale: z,
            isQuestExpired: f,
            sharedQuestFields: V,
            collectibleQuestRewardDescription: Y,
            formattedCompletionDate: w
          })
        })]
      }), W ? (0, r.jsxs)(c.hE2, {
        direction: "horizontal",
        align: "center",
        fullWidth: "lg" !== l,
        children: [(0, r.jsx)(c.zxk, {
          variant: "secondary",
          disabled: true,
          text: C.intl.string(C.t.V293qq)
        }), (0, r.jsx)(c.zxk, {
          variant: "primary",
          onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(n, o, A),
          text: C.intl.string(C.t.vY9GgI)
        })]
      }) : (0, r.jsxs)(c.hE2, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: "lg" !== l,
        children: [(0, r.jsx)(L, {
          containerSize: l,
          onClick: K,
          text: C.intl.string(C.t.LLLLPD)
        }), !q && (0, r.jsx)(M, {
          quest: n,
          progressState: R,
          isCollectibleQuest: G,
          questContent: o,
          sourceQuestContent: A
        })]
      })]
    })
  })
}