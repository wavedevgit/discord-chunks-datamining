/** Chunk was on web.js **/
/** chunk id: 288531, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk696292 = require("./696292.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk409626 = require("./409626.js"),
  Chunk773669 = require("./773669.js"),
  Chunk975571 = require("./975571.js"),
  Chunk252424 = require("./252424.js"),
  Chunk859703 = require("./859703.js"),
  Chunk245853 = require("./245853.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
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
let P = (e, t, n) => (0, T.a3)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function D(e) {
  let {
    containerSize: t,
    onClick: n,
    text: i,
    tabIndex: a
  } = e;
  return "xs" === t ? (0, r.jsx)(c.DUT, {
    tabIndex: a,
    className: R.CU,
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

function x(e) {
  var t, n, r, i, a;
  let {
    quest: s,
    locale: o,
    isQuestExpired: l,
    collectibleQuestRewardDescription: c,
    formattedCompletionDate: u
  } = e, d = (null == (t = s.userStatus) ? true : t.completedAt) != null, _ = d && (null == (n = s.userStatus) ? true : n.claimedAt) != null, h = (0, b.kr)({
    quest: s
  }), m = (0, b.mH)(s.config);
  if (_) {
    let e = h ? (0, b.cg)({
        quest: s,
        idx: null == (i = s.userStatus) ? true : i.claimedTier
      }) : null,
      t = null != (r = null == e ? true : e.messages.nameWithArticle) ? r : null;
    return null != t ? w.intl.formatToPlainString(w.t.RrxtPU, {
      reward: t,
      date: u
    }) : w.intl.formatToPlainString(w.t.zNoqRe, {
      reward: m,
      date: u
    })
  }
  if (d) return h ? w.intl.formatToPlainString(w.t["l1jCM/"], {
    date: u
  }) : w.intl.formatToPlainString(w.t.zNoqRe, {
    reward: m,
    date: u
  });
  let g = h ? (0, b.cg)({
    quest: s,
    idx: 0
  }) : null;
  return l ? w.intl.formatToPlainString(w.t.DT3auf, {
    reward: null != (a = null == g ? true : g.messages.nameWithArticle) ? a : m
  }) : null != g && null != g.approximateCount ? w.intl.format(w.t["4bMK1z"], {
    maxReward: g.messages.nameWithArticle,
    maxRewardCount: (0, p.tg)(g.approximateCount, o),
    helpCenterLink: f.A.getArticleURL(N.MVz.QUESTS_LEARN_MORE)
  }) : c
}

function L(e) {
  var t;
  let {
    quest: n,
    progressState: i,
    questContent: a,
    questContentPosition: s,
    sourceQuestContent: u
  } = e, d = (0, o.bG)([_.A], () => _.A.isEnrolling(n.id)), f = (0, O.vv)(n), p = (0, O.Cr)(n), h = (0, v._c)({
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
let j = e => {
  var t;
  let {
    quest: n,
    location: i,
    size: f,
    isFocused: p,
    isQuestExpired: b,
    isExpanded: v,
    isAnimating: T,
    contentPosition: N,
    sourceQuestContent: j
  } = e, M = (0, g.In)(n), k = (0, g.S5)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), U = M >= g.F3.ACCEPTED, G = M >= g.F3.COMPLETED, V = v || T, F = (0, m.wT)(n, C.rE.QUESTS_CARD, i, j), B = (0, E.Ut)(), H = (0, g.fc)(n), Y = (0, m.mU)({
    quest: n,
    taskDetails: H,
    location: C.rE.QUESTS_CARD,
    questContent: s.u.QUESTS_EMBED,
    sourceQuestContent: j,
    gameProfileSource: u.Ob.QuestEmbed
  }), W = (0, o.bG)([_.A], () => null != _.A.questEnrollmentBlockedUntil, []), K = h.t$.useConfig({
    location: C.rE.QUEST_HOME_DESKTOP
  }).enabled, z = () => {
    (0, S.navigateToQuestHome)({
      fromContent: i,
      questId: n.id
    }), B({
      questId: n.id,
      questContent: i,
      questContentPosition: N,
      questContentCTA: y.Cy.LEARN_MORE,
      sourceQuestContent: j
    })
  }, q = (0, o.bG)([d.default], () => d.default.locale), Z = b && !G, X = (0, O.vv)(n);
  return (0, r.jsx)("div", {
    className: R.zr,
    children: (0, r.jsxs)("div", {
      className: a()(R.nw, {
        [R.dF]: "sm" === f,
        [R.e5]: "xs" === f
      }),
      style: {
        visibility: V ? "inherit" : "hidden"
      },
      "aria-hidden": !V,
      children: [(0, r.jsx)(l.m_, {
        text: Z ? w.intl.string(w.t["04MTGf"]) : null,
        shouldShow: Z,
        children: (0, r.jsxs)("div", {
          className: R.D9,
          children: [b && (0, r.jsx)("div", {
            className: R.FL,
            children: (0, r.jsx)(c.EpV, {
              color: c.LU0.colors.WHITE
            })
          }), (0, r.jsx)(I.A, {
            autoplay: p,
            className: a()({
              [R.Lu]: "lg" === f,
              [R.je]: "sm" === f,
              [R.ks]: "xs" === f
            }),
            learnMoreStyle: "text",
            quest: n,
            questContent: i,
            questContentPosition: N,
            sourceQuestContent: j
          })]
        })
      }), (0, r.jsxs)("div", {
        className: R.oW,
        children: [!X && (0, r.jsx)(c.Text, {
          variant: P(i, f, U),
          className: R.$p,
          children: b ? w.intl.formatToPlainString(w.t["ge+AJp"], {
            questName: n.config.messages.questName
          }) : F
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === f ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: x({
            quest: n,
            locale: q,
            isQuestExpired: b,
            collectibleQuestRewardDescription: Y,
            formattedCompletionDate: k
          })
        })]
      }), W ? (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        fullWidth: "lg" !== f,
        children: [(0, r.jsx)(c.Button, {
          variant: "secondary",
          disabled: true,
          text: w.intl.string(w.t.V293qn)
        }), (0, r.jsx)(c.Button, {
          variant: "primary",
          onClick: () => (0, S.m6)(n, i, j),
          text: w.intl.string(w.t.vY9GgG)
        })]
      }) : (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: "lg" !== f,
        children: [(0, r.jsx)(D, {
          containerSize: f,
          onClick: z,
          text: w.intl.string(w.t.LLLLPD)
        }), !Z && (K && !U ? (0, r.jsx)(A.A, {
          quest: n,
          analyticsCtxQuestContent: i,
          analyticsCtxSourceQuestContent: j,
          analyticsCtxQuestContentPosition: N
        }) : (0, r.jsx)(L, {
          quest: n,
          progressState: M,
          questContent: i,
          sourceQuestContent: j
        }))]
      })]
    })
  })
}