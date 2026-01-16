/** Chunk was on web.js **/
/** chunk id: 883333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk63063 = require("./63063.js"),
  Chunk930153 = require("./930153.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk937797 = require("./937797.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk254579 = require("./254579.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk504411 = require("./504411.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk231919 = require("./231919.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk804982 = require("./804982.js");
let P = (e, t, n) => (0, I.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function w(e) {
  let {
    containerSize: t,
    onClick: n,
    text: i,
    tabIndex: a
  } = e;
  return "xs" === t ? (0, r.jsx)(c.P3F, {
    tabIndex: a,
    className: N.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, r.jsx)(c.Button, {
    fullWidth: true,
    tabIndex: a,
    variant: "secondary",
    onClick: n,
    text: i
  })
}

function R(e) {
  var t, n, r, i, a;
  let {
    quest: o,
    locale: s,
    isQuestExpired: l,
    collectibleQuestRewardDescription: c,
    formattedCompletionDate: u
  } = e, p = (null == (t = o.userStatus) ? true : t.completedAt) != null, _ = p && (null == (n = o.userStatus) ? true : n.claimedAt) != null, h = (0, E.oo)({
    quest: o
  }), m = (0, E.B3)(o.config);
  if (_) {
    let e = h ? (0, E.o9)({
        quest: o,
        idx: null == (r = o.userStatus) ? true : r.claimedTier
      }) : null,
      t = null != (i = null == e ? true : e.messages.nameWithArticle) ? i : null;
    return null != t ? A.intl.formatToPlainString(A.t.RrxtPU, {
      reward: t,
      date: u
    }) : A.intl.formatToPlainString(A.t.zNoqRe, {
      reward: m,
      date: u
    })
  }
  if (p) return h ? A.intl.formatToPlainString(A.t["l1jCM/"], {
    date: u
  }) : A.intl.formatToPlainString(A.t.zNoqRe, {
    reward: m,
    date: u
  });
  let g = h ? (0, E.o9)({
    quest: o,
    idx: 0
  }) : null;
  return l ? A.intl.formatToPlainString(A.t.DT3auf, {
    reward: null != (a = null == g ? true : g.messages.nameWithArticle) ? a : m
  }) : null != g && null != g.approximateCount ? A.intl.format(A.t["4bMK1z"], {
    maxReward: g.messages.nameWithArticle,
    maxRewardCount: (0, f.Bs)(g.approximateCount, s),
    helpCenterLink: d.Z.getArticleURL(C.BhN.QUESTS_LEARN_MORE)
  }) : c
}

function D(e) {
  var t;
  let {
    quest: n,
    progressState: i,
    questContent: a,
    questContentPosition: o,
    sourceQuestContent: u
  } = e, d = (0, s.e7)([_.Z], () => _.Z.isEnrolling(n.id)), f = (0, b.q8)(n), p = (0, b.Vl)(n), h = (0, y.Ks)({
    progressState: i,
    quest: n,
    questContent: a,
    questContentPosition: o,
    inGiftInventory: false,
    isVideoQuest: f,
    inGameQuest: p,
    sourceQuestContent: u
  });
  return (0, r.jsx)(l.u, {
    text: h.tooltipText,
    children: (0, r.jsx)(c.Button, {
      fullWidth: true,
      variant: "primary",
      disabled: null == h.onClick,
      loading: d,
      onClick: null != (t = h.onClick) ? t : true,
      text: h.text
    })
  }, h.tooltipText)
}
let x = e => {
  var t;
  let {
    quest: n,
    location: i,
    size: d,
    isFocused: f,
    isQuestExpired: E,
    isExpanded: y,
    isAnimating: I,
    contentPosition: C,
    sourceQuestContent: x
  } = e, L = (0, g._Q)(n), j = (0, g.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), M = L >= g.OH.ACCEPTED, k = L >= g.OH.COMPLETED, U = y || I, G = (0, m.t5)(n, T.dr.QUESTS_CARD, i, x), Z = (0, p.O5)(), F = (0, g.Rf)(n), B = (0, m.DD)({
    quest: n,
    taskDetails: F,
    location: T.dr.QUESTS_CARD,
    questContent: o.j.QUESTS_EMBED,
    sourceQuestContent: x
  }), V = (0, s.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil, []), H = h.Cx.useConfig({
    location: T.dr.QUEST_HOME_DESKTOP
  }).enabled, Y = () => {
    (0, S.navigateToQuestHome)({
      fromContent: i,
      questId: n.id
    }), Z({
      questId: n.id,
      questContent: i,
      questContentPosition: C,
      questContentCTA: p.jZ.LEARN_MORE,
      sourceQuestContent: x
    })
  }, W = (0, s.e7)([u.default], () => u.default.locale), K = E && !k, z = (0, b.q8)(n);
  return (0, r.jsx)("div", {
    className: N.root,
    children: (0, r.jsxs)("div", {
      className: a()(N.outerContainer, {
        [N.outerContainerSm]: "sm" === d,
        [N.outerContainerXs]: "xs" === d
      }),
      style: {
        visibility: U ? "inherit" : "hidden"
      },
      "aria-hidden": !U,
      children: [(0, r.jsx)(l.u, {
        text: K ? A.intl.string(A.t["04MTGf"]) : null,
        shouldShow: K,
        children: (0, r.jsxs)("div", {
          className: N.rewardTileWrapper,
          children: [E && (0, r.jsx)("div", {
            className: N.rewardTileExpired,
            children: (0, r.jsx)(c.Mgn, {
              color: c.TVs.colors.WHITE
            })
          }), (0, r.jsx)(v.Z, {
            autoplay: f,
            className: a()({
              [N.questRewardEmbed]: "lg" === d,
              [N.questRewardEmbedSm]: "sm" === d,
              [N.questRewardEmbedXs]: "xs" === d
            }),
            learnMoreStyle: "text",
            quest: n,
            questContent: i,
            questContentPosition: C,
            sourceQuestContent: x
          })]
        })
      }), (0, r.jsxs)("div", {
        className: N.taskDetails,
        children: [!z && (0, r.jsx)(c.Text, {
          variant: P(i, d, M),
          className: N.taskInstructions,
          children: E ? A.intl.formatToPlainString(A.t["ge+AJp"], {
            questName: n.config.messages.questName
          }) : G
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: R({
            quest: n,
            locale: W,
            isQuestExpired: E,
            collectibleQuestRewardDescription: B,
            formattedCompletionDate: j
          })
        })]
      }), V ? (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        fullWidth: "lg" !== d,
        children: [(0, r.jsx)(c.Button, {
          variant: "secondary",
          disabled: true,
          text: A.intl.string(A.t.V293qn)
        }), (0, r.jsx)(c.Button, {
          variant: "primary",
          onClick: () => (0, S.openQuestMinorEnrollmentBlockModal)(n, i, x),
          text: A.intl.string(A.t.vY9GgG)
        })]
      }) : (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: "lg" !== d,
        children: [(0, r.jsx)(w, {
          containerSize: d,
          onClick: Y,
          text: A.intl.string(A.t.LLLLPD)
        }), !K && (H && !M ? (0, r.jsx)(O.Z, {
          quest: n,
          analyticsCtxQuestContent: i,
          analyticsCtxSourceQuestContent: x,
          analyticsCtxQuestContentPosition: C
        }) : (0, r.jsx)(D, {
          quest: n,
          progressState: L,
          questContent: i,
          sourceQuestContent: x
        }))]
      })]
    })
  })
}