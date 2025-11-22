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
  Chunk313481 = require("./313481.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk979232 = require("./979232.js"),
  Chunk373370 = require("./373370.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk724684 = require("./724684.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk825502 = require("./825502.js");
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
  } = e, d = (null == (t = o.userStatus) ? true : t.completedAt) != null, p = d && (null == (n = o.userStatus) ? true : n.claimedAt) != null, h = (0, E.oo)({
    quest: o
  }), m = (0, E.B3)(o.config);
  if (p) {
    let e = h ? (0, E.o9)({
        quest: o,
        idx: null == (r = o.userStatus) ? true : r.claimedTier
      }) : null,
      t = null != (i = null == e ? true : e.messages.nameWithArticle) ? i : null;
    return null != t ? C.intl.formatToPlainString(C.t.RrxtPU, {
      reward: t,
      date: u
    }) : C.intl.formatToPlainString(C.t.zNoqRe, {
      reward: m,
      date: u
    })
  }
  if (d) return h ? C.intl.formatToPlainString(C.t["l1jCM/"], {
    date: u
  }) : C.intl.formatToPlainString(C.t.zNoqRe, {
    reward: m,
    date: u
  });
  let g = h ? (0, E.o9)({
    quest: o,
    idx: 0
  }) : null;
  return l ? C.intl.formatToPlainString(C.t.DT3auf, {
    reward: null != (a = null == g ? true : g.messages.nameWithArticle) ? a : m
  }) : null != g && null != g.approximateCount ? C.intl.format(C.t["4bMK1z"], {
    maxReward: g.messages.nameWithArticle,
    maxRewardCount: (0, _.Bs)(g.approximateCount, s),
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
  } = e, _ = i >= h.OH.COMPLETED, p = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), g = (0, o.e7)([m.Z], () => m.Z.isEnrolling(n.id)), b = (0, E.q8)(n), y = (0, E.Vl)(n), v = (0, O.Ks)({
    progressState: i,
    quest: n,
    questContent: l,
    isCollectibleQuest: a,
    questContentPosition: d,
    inGiftInventory: false,
    isVideoQuest: b,
    inGameQuest: y,
    sourceQuestContent: f
  }), I = _ && !p;
  return (0, r.jsx)(s.u, {
    text: v.tooltipText,
    children: I ? (0, r.jsx)(L, {
      ctaConfig: v
    }) : (0, r.jsx)(c.Button, {
      fullWidth: true,
      variant: "primary",
      disabled: null == v.onClick,
      loading: g,
      onClick: null != (t = v.onClick) ? t : true,
      text: v.text
    })
  }, v.tooltipText)
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
    contentPosition: O,
    sourceQuestContent: T
  } = e, A = (0, h._Q)(n), L = (0, h.B6)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), x = A >= h.OH.ACCEPTED, M = A >= h.OH.COMPLETED, k = (0, E.Xv)(n.config), j = _ || b, U = (0, h.t5)(n, S.dr.QUESTS_CARD, i, T), G = (0, p.O5)(), B = (0, h.Rf)(n), Z = (0, y.DD)({
    quest: n,
    taskDetails: B,
    location: S.dr.QUESTS_CARD,
    questContent: g.jn.QUESTS_EMBED,
    sourceQuestContent: T
  }), F = (0, o.e7)([m.Z], () => null != m.Z.questEnrollmentBlockedUntil, []), V = () => {
    (0, I.navigateToQuestHome)({
      fromContent: i,
      questId: n.id
    }), G({
      questId: n.id,
      questContent: i,
      questContentPosition: O,
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
          }), (0, r.jsx)(v.Z, {
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
            questContentPosition: O,
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
          onClick: () => (0, I.openQuestMinorEnrollmentBlockModal)(n, i, T),
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