/** Chunk was on 21738 **/
/** chunk id: 834615, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk409626 = require("./409626.js"),
  Chunk544028 = require("./544028.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk245853 = require("./245853.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk710969 = require("./710969.js"),
  Chunk814793 = require("./814793.js"),
  Chunk73473 = require("./73473.js"),
  Chunk270045 = require("./270045.jsx"),
  Chunk201805 = require("./201805.jsx"),
  Chunk212614 = require("./212614.jsx"),
  Chunk847641 = require("./847641.jsx"),
  Chunk311243 = require("./311243.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk502511 = require("./502511.js");

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function R(e) {
  var t;
  let {
    quest: n
  } = e, i = (0, m.S5)(n.config.expiresAt), l = (0, m.S5)(n.config.rewardsConfig.rewardsExpireAt), a = (0, s.bG)([u.A], () => u.A.getState().theme), c = (0, o.Mwr)(a) ? x.NJ8.DARK : x.NJ8.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
  return (0, r.jsxs)("div", {
    className: w.R_,
    children: [(0, r.jsx)("img", {
      className: w.tb,
      alt: "",
      src: (0, A.tW)(n, A.fY.GAME_TILE, c).url
    }), (0, r.jsxs)("div", {
      className: w.UD,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: d ? P.intl.string(P.t.XBboAK) : P.intl.formatToPlainString(P.t.EQa7os, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: d ? P.intl.formatToPlainString(P.t.APddvF, {
          expirationDate: l
        }) : P.intl.formatToPlainString(P.t["pX+fmn"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function D(e) {
  var t, n, l;
  let {
    nodeRef: u,
    quest: A
  } = e, y = (0, _.Ut)(), x = (0, s.bG)([p.A], () => p.A.isEnrolling(A.id), [A]), [D, M] = i.useState(false), k = i.useCallback(() => M(true), []), U = i.useCallback(() => M(false), []), {
    launchInGameActivity: G
  } = (0, m.zW)(A), V = g.t$.useConfig({
    location: j.rE.ACTIVITY_PANEL
  }).enabled, B = i.useCallback(e => {
    e.stopPropagation()
  }, []), H = i.useCallback(() => {
    (0, d.Oy)(A.id, {
      questContent: h.uF.ACTIVITY_PANEL,
      questContentCTA: b.Cy.ACCEPT_QUEST,
      sourceQuestContent: h.uF.ACTIVITY_PANEL
    }), (0, O.vA)(A) && G()
  }, [A, G]), F = i.useCallback(() => {
    null != A && (y({
      questId: A.id,
      questContent: h.uF.ACTIVITY_PANEL,
      questContentCTA: b.Cy.TRACK_PROGRESS,
      sourceQuestContent: h.uF.ACTIVITY_PANEL
    }), (0, T.navigateToQuestHome)({
      fromContent: h.uF.ACTIVITY_PANEL,
      questId: A.id
    }))
  }, [A, y]), Y = i.useCallback(() => {
    y({
      questId: A.id,
      questContent: h.uF.ACTIVITY_PANEL,
      questContentCTA: b.Cy.LEARN_MORE,
      sourceQuestContent: h.uF.ACTIVITY_PANEL
    }), (0, T.navigateToQuestHome)({
      fromContent: h.uF.ACTIVITY_PANEL,
      questId: A.id
    })
  }, [A.id, y]), K = (0, v.ix)({
    quest: A,
    questContent: h.uF.ACTIVITY_PANEL,
    sourceQuestContent: h.uF.ACTIVITY_PANEL
  }), W = (null == (t = A.userStatus) ? true : t.enrolledAt) != null, q = (null == (n = A.userStatus) ? true : n.completedAt) != null, z = (0, m.fc)(A), Q = (0, f.mU)({
    quest: A,
    taskDetails: z,
    location: j.rE.ACTIVITY_PANEL,
    questContent: h.uF.ACTIVITY_PANEL,
    sourceQuestContent: h.uF.ACTIVITY_PANEL,
    gameProfileSource: c.Ob.QuestActivityPanel
  }), X = (0, O.vA)(A), Z = (0, f.NA)({
    quest: A
  }), $ = X ? Z : P.intl.string(P.t.l7E81v);
  return (0, r.jsxs)("div", {
    ref: e => {
      u.current = e
    },
    className: a()(w.iE, {
      [w.tJ]: W
    }),
    onClick: B,
    onKeyPress: B,
    onFocus: k,
    onMouseEnter: k,
    onBlur: U,
    onMouseLeave: U,
    children: [(0, r.jsxs)("div", {
      className: w.Wp,
      children: [W ? (0, r.jsx)(R, {
        quest: A
      }) : (0, r.jsx)(C.A, {}), (0, r.jsx)(I.C, {
        quest: A,
        questContent: h.uF.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (l = A.userStatus) ? true : l.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: h.uF.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(o.DUT, (t = L({}, e), n = n = {
            "aria-label": P.intl.string(P.t.DEoVWZ),
            children: (0, r.jsx)(o.jNK, {
              size: "md",
              color: "currentColor",
              className: w.Bx
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })]
    }), !W && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R, {
        quest: A
      }), (0, r.jsx)("div", {
        className: w.GA,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: Q
        })
      })]
    }), W && !q && (0, r.jsx)(N.A, {
      autoplay: D,
      className: w.t3,
      quest: A,
      questContent: h.uF.ACTIVITY_PANEL,
      location: j.rE.ACTIVITY_PANEL,
      taskDetails: z,
      sourceQuestContent: h.uF.ACTIVITY_PANEL,
      gameProfileSource: c.Ob.QuestActivityPanel
    }), (0, r.jsxs)("div", {
      className: w.uz,
      children: [!W && (0, r.jsxs)(o.ButtonGroup, {
        size: "sm",
        direction: X ? "vertical" : "horizontal",
        fullWidth: true,
        children: [(0, r.jsx)(o.Button, {
          variant: "secondary",
          text: P.intl.string(P.t.LLLLPD),
          onClick: Y
        }), V && !(0, E.Ic)(A) ? (0, r.jsx)(S.A, {
          quest: A,
          size: "md",
          analyticsCtxQuestContent: h.uF.ACTIVITY_PANEL,
          analyticsCtxSourceQuestContent: h.uF.ACTIVITY_PANEL
        }) : (0, r.jsx)(o.Button, {
          variant: "primary",
          text: $,
          onClick: H,
          loading: x,
          icon: (0, T.Oz)(A)
        })]
      }), W && !q && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: P.intl.string(P.t.VN1Ajl),
        onClick: F
      }), q && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: P.intl.string(P.t.cfY4PE),
        onClick: K
      })]
    })]
  })
}
let M = function(e) {
  return (0, r.jsx)(y.R, {
    questOrQuests: e.quest,
    questContent: h.uF.ACTIVITY_PANEL,
    sourceQuestContent: h.uF.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(D, L({
      nodeRef: t
    }, e))
  })
}