/** Chunk was on web.js **/
/** chunk id: 975335, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk979232 = require("./979232.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk724684 = require("./724684.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736272 = require("./736272.js");
let R = (e, t, n) => (0, T.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function P(e) {
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

function D(e) {
  var t, n, r, i, a;
  let {
    quest: o,
    locale: s,
    isQuestExpired: l,
    collectibleQuestRewardDescription: c,
    formattedCompletionDate: u
  } = e, d = (null == (t = o.userStatus) ? true : t.completedAt) != null, p = d && (null == (n = o.userStatus) ? true : n.claimedAt) != null, m = (0, h.oo)({
    quest: o
  }), g = (0, h.B3)(o.config);
  if (p) {
    let e = m ? (0, h.o9)({
        quest: o,
        idx: null == (r = o.userStatus) ? true : r.claimedTier
      }) : null,
      t = null != (i = null == e ? true : e.messages.nameWithArticle) ? i : null;
    return null != t ? C.intl.formatToPlainString(C.t.RrxtPU, {
      reward: t,
      date: u
    }) : C.intl.formatToPlainString(C.t.zNoqRe, {
      reward: g,
      date: u
    })
  }
  if (d) return m ? C.intl.formatToPlainString(C.t["l1jCM/"], {
    date: u
  }) : C.intl.formatToPlainString(C.t.zNoqRe, {
    reward: g,
    date: u
  });
  let E = m ? (0, h.o9)({
    quest: o,
    idx: 0
  }) : null;
  return l ? C.intl.formatToPlainString(C.t.DT3auf, {
    reward: null != (a = null == E ? true : E.messages.nameWithArticle) ? a : g
  }) : null != E && null != E.approximateCount ? C.intl.format(C.t["4bMK1z"], {
    maxReward: E.messages.nameWithArticle,
    maxRewardCount: (0, _.Bs)(E.approximateCount, s),
    helpCenterLink: f.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE)
  }) : c
}

function w(e) {
  var t;
  let {
    quest: n,
    progressState: i,
    isCollectibleQuest: a,
    questContent: l,
    questContentPosition: d,
    sourceQuestContent: f
  } = e, _ = i >= m.OH.COMPLETED, p = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), E = (0, o.e7)([g.Z], () => g.Z.isEnrolling(n.id)), b = (0, h.q8)(n), y = (0, h.Vl)(n), O = (0, I.Ks)({
    progressState: i,
    quest: n,
    questContent: l,
    isCollectibleQuest: a,
    questContentPosition: d,
    inGiftInventory: false,
    isVideoQuest: b,
    inGameQuest: y,
    sourceQuestContent: f
  }), v = _ && !p;
  return (0, r.jsx)(s.u, {
    text: O.tooltipText,
    children: v ? (0, r.jsx)(L, {
      ctaConfig: O
    }) : (0, r.jsx)(c.Button, {
      fullWidth: true,
      variant: "primary",
      disabled: null == O.onClick,
      loading: E,
      onClick: null != (t = O.onClick) ? t : true,
      text: O.text
    })
  }, O.tooltipText)
}

function L(e) {
  var t, n;
  let {
    ctaConfig: i
  } = e, {
    shouldUseShinyButton: o
  } = b.Z.useConfig({
    location: "QuestsCardFooter"
  }), s = (0, c.MgI)(), u = !!(null == s ? true : s.fullWidth);
  return o ? (0, r.jsx)("div", {
    className: a()({
      [N.fullWidthShinyCtaButtonWrapper]: u
    }),
    children: (0, r.jsx)(c.gtL, {
      "data-migration-pending": true,
      fullWidth: true,
      wrapperClassName: N.ctaButtonWrapper,
      color: l.Tt.BRAND,
      disabled: null == i.onClick,
      onClick: null != (t = i.onClick) ? t : true,
      children: i.text
    })
  }) : (0, r.jsx)(c.Button, {
    fullWidth: true,
    variant: "primary",
    disabled: null == i.onClick,
    onClick: null != (n = i.onClick) ? n : true,
    text: i.text
  })
}
let x = e => {
  var t;
  let {
    quest: n,
    location: i,
    size: l,
    isFocused: u,
    isQuestExpired: f,
    isExpanded: _,
    isAnimating: b,
    contentPosition: I,
    sourceQuestContent: T
  } = e, A = (0, m._Q)(n), L = (0, m.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), x = A >= m.OH.ACCEPTED, M = A >= m.OH.COMPLETED, k = (0, h.Xv)(n.config), j = _ || b, U = (0, m.t5)(n, S.dr.QUESTS_CARD, i, T), G = (0, p.O5)(), B = (0, m.Rf)(n), Z = (0, y.DD)({
    quest: n,
    taskDetails: B,
    location: S.dr.QUESTS_CARD,
    questContent: E.jn.QUESTS_EMBED,
    sourceQuestContent: T
  }), F = (0, o.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []), V = () => {
    (0, v.navigateToQuestHome)({
      fromContent: i,
      questId: n.id
    }), G({
      questId: n.id,
      questContent: i,
      questContentPosition: I,
      questContentCTA: p.jZ.LEARN_MORE,
      sourceQuestContent: T
    })
  }, H = (0, o.e7)([d.default], () => d.default.locale), Y = f && !M;
  return (0, r.jsx)("div", {
    className: N.root,
    children: (0, r.jsxs)("div", {
      className: a()(N.outerContainer, {
        [N.outerContainerSm]: "sm" === l,
        [N.outerContainerXs]: "xs" === l
      }),
      style: {
        visibility: j ? "inherit" : "hidden"
      },
      "aria-hidden": !j,
      children: [(0, r.jsx)(s.u, {
        text: Y ? C.intl.string(C.t["04MTGf"]) : null,
        shouldShow: Y,
        children: (0, r.jsxs)("div", {
          className: N.rewardTileWrapper,
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
            questContent: i,
            questContentPosition: I,
            sourceQuestContent: T
          })]
        })
      }), (0, r.jsxs)("div", {
        className: N.taskDetails,
        children: [(0, r.jsx)(c.Text, {
          variant: R(i, l, x),
          className: N.taskInstructions,
          children: f ? C.intl.formatToPlainString(C.t["ge+AJp"], {
            questName: n.config.messages.questName
          }) : U
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === l ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: D({
            quest: n,
            locale: H,
            isQuestExpired: f,
            collectibleQuestRewardDescription: Z,
            formattedCompletionDate: L
          })
        })]
      }), F ? (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        fullWidth: "lg" !== l,
        children: [(0, r.jsx)(c.Button, {
          variant: "secondary",
          disabled: true,
          text: C.intl.string(C.t.V293qn)
        }), (0, r.jsx)(c.Button, {
          variant: "primary",
          onClick: () => (0, v.openQuestMinorEnrollmentBlockModal)(n, i, T),
          text: C.intl.string(C.t.vY9GgG)
        })]
      }) : (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: "lg" !== l,
        children: [(0, r.jsx)(P, {
          containerSize: l,
          onClick: V,
          text: C.intl.string(C.t.LLLLPD)
        }), !Y && (0, r.jsx)(w, {
          quest: n,
          progressState: A,
          isCollectibleQuest: k,
          questContent: i,
          sourceQuestContent: T
        })]
      })]
    })
  })
}