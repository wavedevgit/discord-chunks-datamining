/** Chunk was on web.js **/
/** chunk id: 288531, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk696292 = require("./696292.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk975571 = require("./975571.js"),
  Chunk252424 = require("./252424.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk245853 = require("./245853.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk92246 = require("./92246.js"),
  Chunk792620 = require("./792620.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk212614 = require("./212614.jsx"),
  Chunk646764 = require("./646764.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk433745 = require("./433745.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk242243 = require("./242243.js");
let R = (e, t, n) => (0, I.a3)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function w(e) {
  let {
    containerSize: t,
    onClick: n,
    text: i,
    tabIndex: a
  } = e;
  return "xs" === t ? (0, r.jsx)(c.DUT, {
    tabIndex: a,
    className: N.CU,
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
    quest: s,
    locale: o,
    isQuestExpired: l,
    collectibleQuestRewardDescription: c,
    formattedCompletionDate: u
  } = e, p = (null == (t = s.userStatus) ? true : t.completedAt) != null, _ = p && (null == (n = s.userStatus) ? true : n.claimedAt) != null, h = (0, E.kr)({
    quest: s
  }), m = (0, E.mH)(s.config);
  if (_) {
    let e = h ? (0, E.cg)({
        quest: s,
        idx: null == (i = s.userStatus) ? true : i.claimedTier
      }) : null,
      t = null != (r = null == e ? true : e.messages.nameWithArticle) ? r : null;
    return null != t ? C.intl.formatToPlainString(C.t.RrxtPU, {
      reward: t,
      date: u
    }) : C.intl.formatToPlainString(C.t.zNoqRe, {
      reward: m,
      date: u
    })
  }
  if (p) return h ? C.intl.formatToPlainString(C.t["l1jCM/"], {
    date: u
  }) : C.intl.formatToPlainString(C.t.zNoqRe, {
    reward: m,
    date: u
  });
  let g = h ? (0, E.cg)({
    quest: s,
    idx: 0
  }) : null;
  return l ? C.intl.formatToPlainString(C.t.DT3auf, {
    reward: null != (a = null == g ? true : g.messages.nameWithArticle) ? a : m
  }) : null != g && null != g.approximateCount ? C.intl.format(C.t["4bMK1z"], {
    maxReward: g.messages.nameWithArticle,
    maxRewardCount: (0, f.tg)(g.approximateCount, o),
    helpCenterLink: d.A.getArticleURL(T.MVz.QUESTS_LEARN_MORE)
  }) : c
}

function D(e) {
  var t;
  let {
    quest: n,
    progressState: i,
    questContent: a,
    questContentPosition: s,
    sourceQuestContent: u
  } = e, d = (0, o.bG)([_.A], () => _.A.isEnrolling(n.id)), f = (0, y.vv)(n), p = (0, y.Cr)(n), h = (0, b._c)({
    progressState: i,
    quest: n,
    questContent: a,
    questContentPosition: s,
    inGiftInventory: false,
    isVideoQuest: f,
    inGameQuest: p,
    sourceQuestContent: u
  });
  return (0, r.jsx)(l.m_, {
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
    isExpanded: b,
    isAnimating: I,
    contentPosition: T,
    sourceQuestContent: x
  } = e, L = (0, g.In)(n), j = (0, g.S5)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), M = L >= g.F3.ACCEPTED, k = L >= g.F3.COMPLETED, U = b || I, G = (0, m.wT)(n, S.rE.QUESTS_CARD, i, x), V = (0, p.Ut)(), F = (0, g.fc)(n), B = (0, m.mU)({
    quest: n,
    taskDetails: F,
    location: S.rE.QUESTS_CARD,
    questContent: s.u.QUESTS_EMBED,
    sourceQuestContent: x
  }), H = (0, o.bG)([_.A], () => null != _.A.questEnrollmentBlockedUntil, []), Y = h.t$.useConfig({
    location: S.rE.QUEST_HOME_DESKTOP
  }).enabled, W = () => {
    (0, A.navigateToQuestHome)({
      fromContent: i,
      questId: n.id
    }), V({
      questId: n.id,
      questContent: i,
      questContentPosition: T,
      questContentCTA: p.Cy.LEARN_MORE,
      sourceQuestContent: x
    })
  }, K = (0, o.bG)([u.default], () => u.default.locale), z = E && !k, q = (0, y.vv)(n);
  return (0, r.jsx)("div", {
    className: N.zr,
    children: (0, r.jsxs)("div", {
      className: a()(N.nw, {
        [N.dF]: "sm" === d,
        [N.e5]: "xs" === d
      }),
      style: {
        visibility: U ? "inherit" : "hidden"
      },
      "aria-hidden": !U,
      children: [(0, r.jsx)(l.m_, {
        text: z ? C.intl.string(C.t["04MTGf"]) : null,
        shouldShow: z,
        children: (0, r.jsxs)("div", {
          className: N.D9,
          children: [E && (0, r.jsx)("div", {
            className: N.FL,
            children: (0, r.jsx)(c.EpV, {
              color: c.LU0.colors.WHITE
            })
          }), (0, r.jsx)(v.A, {
            autoplay: f,
            className: a()({
              [N.Lu]: "lg" === d,
              [N.je]: "sm" === d,
              [N.ks]: "xs" === d
            }),
            learnMoreStyle: "text",
            quest: n,
            questContent: i,
            questContentPosition: T,
            sourceQuestContent: x
          })]
        })
      }), (0, r.jsxs)("div", {
        className: N.oW,
        children: [!q && (0, r.jsx)(c.Text, {
          variant: R(i, d, M),
          className: N.$p,
          children: E ? C.intl.formatToPlainString(C.t["ge+AJp"], {
            questName: n.config.messages.questName
          }) : G
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: P({
            quest: n,
            locale: K,
            isQuestExpired: E,
            collectibleQuestRewardDescription: B,
            formattedCompletionDate: j
          })
        })]
      }), H ? (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        fullWidth: "lg" !== d,
        children: [(0, r.jsx)(c.Button, {
          variant: "secondary",
          disabled: true,
          text: C.intl.string(C.t.V293qn)
        }), (0, r.jsx)(c.Button, {
          variant: "primary",
          onClick: () => (0, A.m6)(n, i, x),
          text: C.intl.string(C.t.vY9GgG)
        })]
      }) : (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: "lg" !== d,
        children: [(0, r.jsx)(w, {
          containerSize: d,
          onClick: W,
          text: C.intl.string(C.t.LLLLPD)
        }), !z && (Y && !M ? (0, r.jsx)(O.A, {
          quest: n,
          analyticsCtxQuestContent: i,
          analyticsCtxSourceQuestContent: x,
          analyticsCtxQuestContentPosition: T
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