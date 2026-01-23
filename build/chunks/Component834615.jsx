/** Chunk was on 21738 **/
/** chunk id: 834615, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544028 = require("./544028.js"),
  Chunk829219 = require("./829219.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk245853 = require("./245853.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
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

function P(e) {
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

function w(e) {
  var t;
  let {
    quest: n
  } = e, i = (0, m.S5)(n.config.expiresAt), l = (0, m.S5)(n.config.rewardsConfig.rewardsExpireAt), a = (0, s.bG)([c.A], () => c.A.getState().theme), u = (0, o.Mwr)(a) ? T.NJ8.DARK : T.NJ8.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
  return (0, r.jsxs)("div", {
    className: x.R_,
    children: [(0, r.jsx)("img", {
      className: x.tb,
      alt: "",
      src: (0, A.tW)(n, A.fY.GAME_TILE, u).url
    }), (0, r.jsxs)("div", {
      className: x.UD,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: d ? j.intl.string(j.t.XBboAK) : j.intl.formatToPlainString(j.t.EQa7os, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: d ? j.intl.formatToPlainString(j.t.APddvF, {
          expirationDate: l
        }) : j.intl.formatToPlainString(j.t["pX+fmn"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function L(e) {
  var t, n, l;
  let {
    nodeRef: c,
    quest: A
  } = e, E = (0, d.Ut)(), T = (0, s.bG)([p.A], () => p.A.isEnrolling(A.id), [A]), [L, R] = i.useState(false), D = i.useCallback(() => R(true), []), M = i.useCallback(() => R(false), []), {
    launchInGameActivity: k
  } = (0, m.zW)(A), U = g.t$.useConfig({
    location: N.rE.ACTIVITY_PANEL
  }).enabled, G = i.useCallback(e => {
    e.stopPropagation()
  }, []), V = i.useCallback(() => {
    (0, u.Oy)(A.id, {
      questContent: h.uF.ACTIVITY_PANEL,
      questContentCTA: d.Cy.ACCEPT_QUEST,
      sourceQuestContent: h.uF.ACTIVITY_PANEL
    }), (0, b.vA)(A) && k()
  }, [A, k]), B = i.useCallback(() => {
    null != A && (E({
      questId: A.id,
      questContent: h.uF.ACTIVITY_PANEL,
      questContentCTA: d.Cy.TRACK_PROGRESS,
      sourceQuestContent: h.uF.ACTIVITY_PANEL
    }), (0, C.navigateToQuestHome)({
      fromContent: h.uF.ACTIVITY_PANEL,
      questId: A.id
    }))
  }, [A, E]), H = i.useCallback(() => {
    E({
      questId: A.id,
      questContent: h.uF.ACTIVITY_PANEL,
      questContentCTA: d.Cy.LEARN_MORE,
      sourceQuestContent: h.uF.ACTIVITY_PANEL
    }), (0, C.navigateToQuestHome)({
      fromContent: h.uF.ACTIVITY_PANEL,
      questId: A.id
    })
  }, [A.id, E]), F = (0, y.ix)({
    quest: A,
    questContent: h.uF.ACTIVITY_PANEL,
    sourceQuestContent: h.uF.ACTIVITY_PANEL
  }), Y = (null == (t = A.userStatus) ? true : t.enrolledAt) != null, K = (null == (n = A.userStatus) ? true : n.completedAt) != null, W = (0, m.fc)(A), q = (0, f.mU)({
    quest: A,
    taskDetails: W,
    location: N.rE.ACTIVITY_PANEL,
    questContent: h.uF.ACTIVITY_PANEL,
    sourceQuestContent: h.uF.ACTIVITY_PANEL
  }), z = (0, b.vA)(A), Q = (0, f.NA)({
    quest: A
  }), X = z ? Q : j.intl.string(j.t.l7E81v);
  return (0, r.jsxs)("div", {
    ref: e => {
      c.current = e
    },
    className: a()(x.iE, {
      [x.tJ]: Y
    }),
    onClick: G,
    onKeyPress: G,
    onFocus: D,
    onMouseEnter: D,
    onBlur: M,
    onMouseLeave: M,
    children: [(0, r.jsxs)("div", {
      className: x.Wp,
      children: [Y ? (0, r.jsx)(w, {
        quest: A
      }) : (0, r.jsx)(v.A, {}), (0, r.jsx)(O.C, {
        quest: A,
        questContent: h.uF.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (l = A.userStatus) ? true : l.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: h.uF.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(o.DUT, (t = P({}, e), n = n = {
            "aria-label": j.intl.string(j.t.DEoVWZ),
            children: (0, r.jsx)(o.jNK, {
              size: "md",
              color: "currentColor",
              className: x.Bx
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
    }), !Y && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(w, {
        quest: A
      }), (0, r.jsx)("div", {
        className: x.GA,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: q
        })
      })]
    }), Y && !K && (0, r.jsx)(S.A, {
      autoplay: L,
      className: x.t3,
      quest: A,
      questContent: h.uF.ACTIVITY_PANEL,
      location: N.rE.ACTIVITY_PANEL,
      taskDetails: W,
      sourceQuestContent: h.uF.ACTIVITY_PANEL
    }), (0, r.jsxs)("div", {
      className: x.uz,
      children: [!Y && (0, r.jsxs)(o.ButtonGroup, {
        size: "sm",
        direction: z ? "vertical" : "horizontal",
        fullWidth: true,
        children: [(0, r.jsx)(o.Button, {
          variant: "secondary",
          text: j.intl.string(j.t.LLLLPD),
          onClick: H
        }), U && !(0, _.Ic)(A) ? (0, r.jsx)(I.A, {
          quest: A,
          size: "md",
          analyticsCtxQuestContent: h.uF.ACTIVITY_PANEL,
          analyticsCtxSourceQuestContent: h.uF.ACTIVITY_PANEL
        }) : (0, r.jsx)(o.Button, {
          variant: "primary",
          text: X,
          onClick: V,
          loading: T,
          icon: (0, C.Oz)(A)
        })]
      }), Y && !K && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: j.intl.string(j.t.VN1Ajl),
        onClick: B
      }), K && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: j.intl.string(j.t.cfY4PE),
        onClick: F
      })]
    })]
  })
}
let R = function(e) {
  return (0, r.jsx)(E.R, {
    questOrQuests: e.quest,
    questContent: h.uF.ACTIVITY_PANEL,
    sourceQuestContent: h.uF.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(L, P({
      nodeRef: t
    }, e))
  })
}