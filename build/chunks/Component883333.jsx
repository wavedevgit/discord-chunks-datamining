/** Chunk was on web.js **/
/** chunk id: 883333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
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
  Chunk804982 = require("./804982.js");
let A = (e, t, n) => (0, v.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function N(e) {
  let {
    containerSize: t,
    onClick: n,
    text: i,
    tabIndex: a
  } = e;
  return "xs" === t ? (0, r.jsx)(c.P3F, {
    tabIndex: a,
    className: C.learnMoreLink,
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

function P(e) {
  var t, n, r, i, a;
  let {
    quest: o,
    locale: s,
    isQuestExpired: l,
    collectibleQuestRewardDescription: c,
    formattedCompletionDate: u
  } = e, p = (null == (t = o.userStatus) ? true : t.completedAt) != null, _ = p && (null == (n = o.userStatus) ? true : n.claimedAt) != null, m = (0, g.oo)({
    quest: o
  }), h = (0, g.B3)(o.config);
  if (_) {
    let e = m ? (0, g.o9)({
        quest: o,
        idx: null == (r = o.userStatus) ? true : r.claimedTier
      }) : null,
      t = null != (i = null == e ? true : e.messages.nameWithArticle) ? i : null;
    return null != t ? T.intl.formatToPlainString(T.t.RrxtPU, {
      reward: t,
      date: u
    }) : T.intl.formatToPlainString(T.t.zNoqRe, {
      reward: h,
      date: u
    })
  }
  if (p) return m ? T.intl.formatToPlainString(T.t["l1jCM/"], {
    date: u
  }) : T.intl.formatToPlainString(T.t.zNoqRe, {
    reward: h,
    date: u
  });
  let E = m ? (0, g.o9)({
    quest: o,
    idx: 0
  }) : null;
  return l ? T.intl.formatToPlainString(T.t.DT3auf, {
    reward: null != (a = null == E ? true : E.messages.nameWithArticle) ? a : h
  }) : null != E && null != E.approximateCount ? T.intl.format(T.t["4bMK1z"], {
    maxReward: E.messages.nameWithArticle,
    maxRewardCount: (0, f.Bs)(E.approximateCount, s),
    helpCenterLink: d.Z.getArticleURL(I.BhN.QUESTS_LEARN_MORE)
  }) : c
}

function R(e) {
  var t;
  let {
    quest: n,
    progressState: i,
    questContent: a,
    questContentPosition: o,
    sourceQuestContent: u
  } = e, d = (0, s.e7)([_.Z], () => _.Z.isEnrolling(n.id)), f = (0, E.q8)(n), p = (0, E.Vl)(n), m = (0, b.Ks)({
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
    text: m.tooltipText,
    children: (0, r.jsx)(c.Button, {
      fullWidth: true,
      variant: "primary",
      disabled: null == m.onClick,
      loading: d,
      onClick: null != (t = m.onClick) ? t : true,
      text: m.text
    })
  }, m.tooltipText)
}
let w = e => {
  var t;
  let {
    quest: n,
    location: i,
    size: d,
    isFocused: f,
    isQuestExpired: g,
    isExpanded: E,
    isAnimating: b,
    contentPosition: v,
    sourceQuestContent: I
  } = e, w = (0, h._Q)(n), D = (0, h.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), x = w >= h.OH.ACCEPTED, L = w >= h.OH.COMPLETED, j = E || b, M = (0, m.t5)(n, S.dr.QUESTS_CARD, i, I), k = (0, p.O5)(), U = (0, h.Rf)(n), G = (0, m.DD)({
    quest: n,
    taskDetails: U,
    location: S.dr.QUESTS_CARD,
    questContent: o.j.QUESTS_EMBED,
    sourceQuestContent: I
  }), Z = (0, s.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil, []), F = () => {
    (0, O.navigateToQuestHome)({
      fromContent: i,
      questId: n.id
    }), k({
      questId: n.id,
      questContent: i,
      questContentPosition: v,
      questContentCTA: p.jZ.LEARN_MORE,
      sourceQuestContent: I
    })
  }, B = (0, s.e7)([u.default], () => u.default.locale), V = g && !L;
  return (0, r.jsx)("div", {
    className: C.root,
    children: (0, r.jsxs)("div", {
      className: a()(C.outerContainer, {
        [C.outerContainerSm]: "sm" === d,
        [C.outerContainerXs]: "xs" === d
      }),
      style: {
        visibility: j ? "inherit" : "hidden"
      },
      "aria-hidden": !j,
      children: [(0, r.jsx)(l.u, {
        text: V ? T.intl.string(T.t["04MTGf"]) : null,
        shouldShow: V,
        children: (0, r.jsxs)("div", {
          className: C.rewardTileWrapper,
          children: [g && (0, r.jsx)("div", {
            className: C.rewardTileExpired,
            children: (0, r.jsx)(c.Mgn, {
              color: c.TVs.colors.WHITE
            })
          }), (0, r.jsx)(y.Z, {
            autoplay: f,
            className: a()({
              [C.questRewardEmbed]: "lg" === d,
              [C.questRewardEmbedSm]: "sm" === d,
              [C.questRewardEmbedXs]: "xs" === d
            }),
            learnMoreStyle: "text",
            quest: n,
            questContent: i,
            questContentPosition: v,
            sourceQuestContent: I
          })]
        })
      }), (0, r.jsxs)("div", {
        className: C.taskDetails,
        children: [(0, r.jsx)(c.Text, {
          variant: A(i, d, x),
          className: C.taskInstructions,
          children: g ? T.intl.formatToPlainString(T.t["ge+AJp"], {
            questName: n.config.messages.questName
          }) : M
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: P({
            quest: n,
            locale: B,
            isQuestExpired: g,
            collectibleQuestRewardDescription: G,
            formattedCompletionDate: D
          })
        })]
      }), Z ? (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        fullWidth: "lg" !== d,
        children: [(0, r.jsx)(c.Button, {
          variant: "secondary",
          disabled: true,
          text: T.intl.string(T.t.V293qn)
        }), (0, r.jsx)(c.Button, {
          variant: "primary",
          onClick: () => (0, O.openQuestMinorEnrollmentBlockModal)(n, i, I),
          text: T.intl.string(T.t.vY9GgG)
        })]
      }) : (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: "lg" !== d,
        children: [(0, r.jsx)(N, {
          containerSize: d,
          onClick: F,
          text: T.intl.string(T.t.LLLLPD)
        }), !V && (0, r.jsx)(R, {
          quest: n,
          progressState: w,
          questContent: i,
          sourceQuestContent: I
        })]
      })]
    })
  })
}