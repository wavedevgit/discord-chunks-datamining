/** Chunk was on 9753 **/
/** chunk id: 288531, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk696292 = require("./696292.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk409626 = require("./409626.js"),
  Chunk773669 = require("./773669.js"),
  Chunk975571 = require("./975571.js"),
  Chunk252424 = require("./252424.js"),
  Chunk859703 = require("./859703.js"),
  Chunk33621 = require("./33621.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk92246 = require("./92246.js"),
  Chunk792620 = require("./792620.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk212614 = require("./212614.jsx"),
  Chunk79545 = require("./79545.js"),
  Chunk646764 = require("./646764.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk433745 = require("./433745.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk242243 = require("./242243.js");

function w(e) {
  let {
    containerSize: t,
    onClick: n,
    text: i,
    tabIndex: l
  } = e;
  return "xs" === t ? (0, r.jsx)(c.DUT, {
    tabIndex: l,
    className: P.CU,
    tag: "span",
    onClick: n,
    children: (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, r.jsx)(c.Button, {
    fullWidth: true,
    tabIndex: l,
    variant: "secondary",
    onClick: n,
    text: i
  })
}

function R(e) {
  var t;
  let {
    quest: n,
    progressState: i,
    questContent: l,
    questContentPosition: a,
    sourceQuestContent: u
  } = e, d = (0, s.bG)([f.A], () => f.A.isEnrolling(n.id)), p = (0, v.vv)(n), m = (0, v.Cr)(n), g = (0, O._c)({
    progressState: i,
    quest: n,
    questContent: l,
    questContentPosition: a,
    inGiftInventory: false,
    isVideoQuest: p,
    inGameQuest: m,
    sourceQuestContent: u
  });
  return (0, r.jsx)(o.m_, {
    text: g.tooltipText,
    children: (0, r.jsx)(c.Button, {
      fullWidth: true,
      variant: "primary",
      disabled: null == g.onClick,
      loading: d,
      onClick: null != (t = g.onClick) ? t : true,
      text: g.text
    })
  }, g.tooltipText)
}
let D = e => {
  var t;
  let {
    quest: n,
    location: i,
    size: O,
    isFocused: D,
    isQuestExpired: L,
    isExpanded: M,
    isAnimating: k,
    contentPosition: U,
    sourceQuestContent: G
  } = e, B = (0, h.In)(n), F = (0, h.S5)(null == (t = n.userStatus) ? true : t.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), H = B >= h.F3.ACCEPTED, V = B >= h.F3.COMPLETED, z = M || k, W = (0, _.wT)(n, S.rE.QUESTS_CARD, i, G), K = (0, b.Ut)(), Y = (0, h.fc)(n), q = (0, _.mU)({
    quest: n,
    taskDetails: Y,
    location: S.rE.QUESTS_CARD,
    questContent: a.u.QUESTS_EMBED,
    sourceQuestContent: G,
    gameProfileSource: u.Ob.QuestEmbed
  }), Q = (0, s.bG)([f.A], () => null != f.A.questEnrollmentBlockedUntil, []), J = g.t.useConfig({
    location: S.rE.QUEST_HOME_DESKTOP
  }), X = (0, E.P)(n), Z = (0, s.bG)([d.default], () => d.default.locale), $ = L && !V, ee = (0, v.vv)(n);
  return (0, r.jsx)("div", {
    className: P.zr,
    children: (0, r.jsxs)("div", {
      className: l()(P.nw, {
        [P.dF]: "sm" === O,
        [P.e5]: "xs" === O
      }),
      style: {
        visibility: z ? "inherit" : "hidden"
      },
      "aria-hidden": !z,
      children: [(0, r.jsx)(o.m_, {
        text: $ ? N.intl.string(N.t["04MTGf"]) : null,
        shouldShow: $,
        children: (0, r.jsxs)("div", {
          className: P.D9,
          children: [L && (0, r.jsx)("div", {
            className: P.FL,
            children: (0, r.jsx)(c.EpV, {
              color: c.LU0.colors.WHITE
            })
          }), (0, r.jsx)(j.A, {
            autoplay: D,
            className: l()({
              [P.Lu]: "lg" === O,
              [P.je]: "sm" === O,
              [P.ks]: "xs" === O
            }),
            learnMoreStyle: "text",
            quest: n,
            questContent: i,
            questContentPosition: U,
            sourceQuestContent: G
          })]
        })
      }), (0, r.jsxs)("div", {
        className: P.oW,
        children: [!ee && (0, r.jsx)(c.Text, {
          variant: (0, I.a3)(i) && !H && "lg" === O ? "text-lg/medium" : "lg" === O ? "text-md/medium" : "sm" === O ? "text-sm/medium" : "text-xs/medium",
          className: P.$p,
          children: L ? N.intl.formatToPlainString(N.t["ge+AJp"], {
            questName: n.config.messages.questName
          }) : W
        }), (0, r.jsx)(c.Text, {
          variant: "lg" === O ? "text-sm/medium" : "text-xs/medium",
          color: "text-muted",
          children: function(e) {
            var t, n, r, i, l;
            let {
              quest: a,
              locale: s,
              isQuestExpired: o,
              collectibleQuestRewardDescription: c,
              formattedCompletionDate: u
            } = e, d = (null == (t = a.userStatus) ? true : t.completedAt) != null, f = d && (null == (n = a.userStatus) ? true : n.claimedAt) != null, g = (0, A.kr)({
              quest: a
            }), _ = (0, A.mH)(a.config);
            if (f) {
              let e = g ? (0, A.cg)({
                  quest: a,
                  idx: null == (i = a.userStatus) ? true : i.claimedTier
                }) : null,
                t = null != (r = null == e ? true : e.messages.nameWithArticle) ? r : null;
              return null != t ? N.intl.formatToPlainString(N.t.RrxtPU, {
                reward: t,
                date: u
              }) : N.intl.formatToPlainString(N.t.zNoqRe, {
                reward: _,
                date: u
              })
            }
            if (d) return g ? N.intl.formatToPlainString(N.t["l1jCM/"], {
              date: u
            }) : N.intl.formatToPlainString(N.t.zNoqRe, {
              reward: _,
              date: u
            });
            let h = g ? (0, A.cg)({
              quest: a,
              idx: 0
            }) : null;
            return o ? N.intl.formatToPlainString(N.t.DT3auf, {
              reward: null != (l = null == h ? true : h.messages.nameWithArticle) ? l : _
            }) : null != h && null != h.approximateCount ? N.intl.format(N.t["4bMK1z"], {
              maxReward: h.messages.nameWithArticle,
              maxRewardCount: (0, m.tg)(h.approximateCount, s),
              helpCenterLink: p.A.getArticleURL(T.MVz.QUESTS_LEARN_MORE)
            }) : c
          }({
            quest: n,
            locale: Z,
            isQuestExpired: L,
            collectibleQuestRewardDescription: q,
            formattedCompletionDate: F
          })
        })]
      }), Q ? (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        fullWidth: "lg" !== O,
        children: [(0, r.jsx)(c.Button, {
          variant: "secondary",
          disabled: true,
          text: N.intl.string(N.t.V293qn)
        }), (0, r.jsx)(c.Button, {
          variant: "primary",
          onClick: () => (0, C.m6)(n, i, G),
          text: N.intl.string(N.t.vY9GgG)
        })]
      }) : (0, r.jsxs)(c.ButtonGroup, {
        direction: "horizontal",
        align: "center",
        justify: "end",
        fullWidth: "lg" !== O,
        children: [(0, r.jsx)(w, {
          containerSize: O,
          onClick: () => {
            (0, C.navigateToQuestHome)({
              fromContent: i,
              questId: n.id
            }), K({
              questId: n.id,
              questContent: i,
              questContentPosition: U,
              questContentCTA: y.Cy.LEARN_MORE,
              sourceQuestContent: G
            })
          },
          text: N.intl.string(N.t.LLLLPD)
        }), !$ && (J.enabled && X === E.U.UNENROLLED && J.enabledQuestStates.has(E.U.UNENROLLED) ? (0, r.jsx)(x.A, {
          quest: n,
          analyticsCtxQuestContent: i,
          analyticsCtxSourceQuestContent: G,
          analyticsCtxQuestContentPosition: U
        }) : (0, r.jsx)(R, {
          quest: n,
          progressState: B,
          questContent: i,
          sourceQuestContent: G
        }))]
      })]
    })
  })
}