/** Chunk was on web.js **/
/** chunk id: 883333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk706454 = require("./706454.js"),
  Chunk63063 = require("./63063.js"),
  Chunk930153 = require("./930153.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk979232 = require("./979232.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk254579 = require("./254579.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk231919 = require("./231919.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467415 = require("./467415.js");
let R = (e, t, n) => (0, T.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function w(e) {
  let {
    containerSize: t,
    onClick: n,
    text: i,
    tabIndex: o
  } = e;
  return "xs" === t ? (0, r.jsx)(u.P3F, {
    tabIndex: o,
    className: P.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, r.jsx)(u.Button, {
    fullWidth: true,
    tabIndex: o,
    variant: "secondary",
    onClick: n,
    text: i
  })
}

function D(e) {
  var t, n, r, i, o;
  let {
    quest: a,
    locale: s,
    isQuestExpired: l,
    collectibleQuestRewardDescription: c,
    formattedCompletionDate: u
  } = e, d = (null == (t = a.userStatus) ? true : t.completedAt) != null, f = d && (null == (n = a.userStatus) ? true : n.claimedAt) != null, m = (0, y.oo)({
    quest: a
  }), h = (0, y.B3)(a.config);
  if (f) {
    let e = m ? (0, y.o9)({
        quest: a,
        idx: null == (r = a.userStatus) ? true : r.claimedTier
      }) : null,
      t = null != (i = null == e ? true : e.messages.nameWithArticle) ? i : null;
    return null != t ? N.intl.formatToPlainString(N.t.RrxtPU, {
      reward: t,
      date: u
    }) : N.intl.formatToPlainString(N.t.zNoqRe, {
      reward: h,
      date: u
    })
  }
  if (d) return m ? N.intl.formatToPlainString(N.t["l1jCM/"], {
    date: u
  }) : N.intl.formatToPlainString(N.t.zNoqRe, {
    reward: h,
    date: u
  });
  let g = m ? (0, y.o9)({
    quest: a,
    idx: 0
  }) : null;
  return l ? N.intl.formatToPlainString(N.t.DT3auf, {
    reward: null != (o = null == g ? true : g.messages.nameWithArticle) ? o : h
  }) : null != g && null != g.approximateCount ? N.intl.format(N.t["4bMK1z"], {
    maxReward: g.messages.nameWithArticle,
    maxRewardCount: (0, _.Bs)(g.approximateCount, s),
    helpCenterLink: p.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE)
  }) : c
}

function x(e) {
  var t;
  let {
    quest: n,
    progressState: i,
    questContent: o,
    questContentPosition: a,
    sourceQuestContent: c
  } = e, f = i >= b.OH.COMPLETED, p = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), _ = (0, s.e7)([h.Z], () => h.Z.isEnrolling(n.id)), m = (0, O.q8)(n), g = (0, O.Vl)(n), E = (0, v.Ks)({
    progressState: i,
    quest: n,
    questContent: o,
    questContentPosition: a,
    inGiftInventory: false,
    isVideoQuest: m,
    inGameQuest: g,
    sourceQuestContent: c
  }), y = f && !p;
  return (0, r.jsx)(l.u, {
    text: E.tooltipText,
    children: y ? (0, r.jsx)(L, {
      ctaConfig: E
    }) : (0, r.jsx)(u.Button, {
      fullWidth: true,
      variant: "primary",
      disabled: null == E.onClick,
      loading: _,
      onClick: null != (t = E.onClick) ? t : true,
      text: E.text
    })
  }, E.tooltipText)
}

function L(e) {
  var t, n;
  let {
    ctaConfig: i
  } = e, {
    shouldUseShinyButton: a
  } = g.Z.useConfig({
    location: "QuestsCardFooter"
  }), s = (0, u.MgI)(), l = !!(null == s ? true : s.fullWidth);
  return a ? (0, r.jsx)("div", {
    className: o()({
      [P.fullWidthShinyCtaButtonWrapper]: l
    }),
    children: (0, r.jsx)(u.gtL, {
      "data-migration-pending": true,
      fullWidth: true,
      wrapperClassName: P.ctaButtonWrapper,
      color: c.Tt.BRAND,
      disabled: null == i.onClick,
      onClick: null != (t = i.onClick) ? t : true,
      children: i.text
    })
  }) : (0, r.jsx)(u.Button, {
    fullWidth: true,
    variant: "primary",
    disabled: null == i.onClick,
    onClick: null != (n = i.onClick) ? n : true,
    text: i.text
  })
}
let j = e => {
  var t;
  let {
    quest: n,
    location: i,
    size: c,
    isFocused: d,
    isQuestExpired: p,
    isExpanded: _,
    isAnimating: g,
    contentPosition: y,
    sourceQuestContent: O
  } = e, v = (0, b._Q)(n), T = (0, b.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), A = v >= b.OH.ACCEPTED, L = v >= b.OH.COMPLETED, j = _ || g, M = (0, E.t5)(n, C.dr.QUESTS_CARD, i, O), k = (0, m.O5)(), U = (0, b.Rf)(n), G = (0, E.DD)({
    quest: n,
    taskDetails: U,
    location: C.dr.QUESTS_CARD,
    questContent: a.j.QUESTS_EMBED,
    sourceQuestContent: O
  }), Z = (0, s.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []), F = () => {
    (0, I.navigateToQuestHome)({
      fromContent: i,
      questId: n.id
    }), k({
      questId: n.id,
      questContent: i,
      questContentPosition: y,
      questContentCTA: m.jZ.LEARN_MORE,
      sourceQuestContent: O
    })
  }, B = (0, s.e7)([f.default], () => f.default.locale), V = p && !L;
  return (0, r.jsx)("div", {
    className: P.root,
    children: (0, r.jsxs)("div", {
      className: o()(P.outerContainer, {
        [P.outerContainerSm]: "sm" === c,
        [P.outerContainerXs]: "xs" === c
      }),
      style: {
        visibility: j ? "inherit" : "hidden"
      },
      "aria-hidden": !j,
      children: [(0, r.jsx)(l.u, {
        text: V ? N.intl.string(N.t["04MTGf"]) : null,
        shouldShow: V,
        children: (0, r.jsxs)("div", {
          className: P.rewardTileWrapper,
          children: [p && (0, r.jsx)("div", {
            className: P.rewardTileExpired,
            children: (0, r.jsx)(u.Mgn, {
              color: u.TVs.colors.WHITE
            })
          }), (0, r.jsx)(S.Z, {
            autoplay: d,
            className: o()({
              [P.questRewardEmbed]: "lg" === c,
              [P.questRewardEmbedSm]: "sm" === c,
              [P.questRewardEmbedXs]: "xs" === c
            }),
            learnMoreStyle: "text",
            location: C.dr.QUESTS_CARD,
            quest: n,
            questContent: i,
            questContentPosition: y,
            sourceQuestContent: O
          })]
        })
      }), (0, r.jsxs)("div", {
        className: P.taskDetails,
        children: [(0, r.jsx)(u.Text, {
          variant: R(i, c, A),
          className: P.taskInstructions,
          children: p ? N.intl.formatToPlainString(N.t["ge+AJp"], {
            questName: n.config.messages.questName
          }) : M
        }), (0, r.jsx)(u.Text, {
          variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: D({
            quest: n,
            locale: B,
            isQuestExpired: p,
            collectibleQuestRewardDescription: G,
            formattedCompletionDate: T
          })
        })]
      }), Z ? (0, r.jsxs)(u.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        fullWidth: "lg" !== c,
        children: [(0, r.jsx)(u.Button, {
          variant: "secondary",
          disabled: true,
          text: N.intl.string(N.t.V293qn)
        }), (0, r.jsx)(u.Button, {
          variant: "primary",
          onClick: () => (0, I.openQuestMinorEnrollmentBlockModal)(n, i, O),
          text: N.intl.string(N.t.vY9GgG)
        })]
      }) : (0, r.jsxs)(u.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: "lg" !== c,
        children: [(0, r.jsx)(w, {
          containerSize: c,
          onClick: F,
          text: N.intl.string(N.t.LLLLPD)
        }), !V && (0, r.jsx)(x, {
          quest: n,
          progressState: v,
          questContent: i,
          sourceQuestContent: O
        })]
      })]
    })
  })
}