/** Chunk was on 21738 **/
/** chunk id: 834615, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
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

function w(e) {
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

function L(e) {
  var t;
  let {
    quest: n
  } = e, i = (0, f.S5)(n.config.expiresAt), l = (0, f.S5)(n.config.rewardsConfig.rewardsExpireAt), a = (0, s.bG)([c.A], () => c.A.getState().theme), u = (0, o.Mwr)(a) ? j.NJ8.DARK : j.NJ8.LIGHT, d = (null == (t = n.userStatus) ? true : t.completedAt) != null;
  return (0, r.jsxs)("div", {
    className: P.R_,
    children: [(0, r.jsx)("img", {
      className: P.tb,
      alt: "",
      src: (0, m.tW)(n, m.fY.GAME_TILE, u).url
    }), (0, r.jsxs)("div", {
      className: P.UD,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: d ? x.intl.string(x.t.XBboAK) : x.intl.formatToPlainString(x.t.EQa7os, {
          questName: n.config.messages.questName
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: d ? x.intl.formatToPlainString(x.t.APddvF, {
          expirationDate: l
        }) : x.intl.formatToPlainString(x.t["pX+fmn"], {
          expirationDate: i
        })
      })]
    })]
  })
}

function R(e) {
  var t, n, l;
  let {
    nodeRef: c,
    quest: m
  } = e, O = (0, A.Ut)(), j = (0, s.bG)([d.A], () => d.A.isEnrolling(m.id), [m]), [R, D] = i.useState(false), M = i.useCallback(() => D(true), []), k = i.useCallback(() => D(false), []), {
    launchInGameActivity: U
  } = (0, f.zW)(m), G = h.t$.useConfig({
    location: T.rE.ACTIVITY_PANEL
  }).enabled, V = i.useCallback(e => {
    e.stopPropagation()
  }, []), B = i.useCallback(() => {
    (0, u.Oy)(m.id, {
      questContent: p.uF.ACTIVITY_PANEL,
      questContentCTA: _.Cy.ACCEPT_QUEST,
      sourceQuestContent: p.uF.ACTIVITY_PANEL
    }), (0, E.vA)(m) && U()
  }, [m, U]), H = i.useCallback(() => {
    null != m && (O({
      questId: m.id,
      questContent: p.uF.ACTIVITY_PANEL,
      questContentCTA: _.Cy.TRACK_PROGRESS,
      sourceQuestContent: p.uF.ACTIVITY_PANEL
    }), (0, N.navigateToQuestHome)({
      fromContent: p.uF.ACTIVITY_PANEL,
      questId: m.id
    }))
  }, [m, O]), F = i.useCallback(() => {
    O({
      questId: m.id,
      questContent: p.uF.ACTIVITY_PANEL,
      questContentCTA: _.Cy.LEARN_MORE,
      sourceQuestContent: p.uF.ACTIVITY_PANEL
    }), (0, N.navigateToQuestHome)({
      fromContent: p.uF.ACTIVITY_PANEL,
      questId: m.id
    })
  }, [m.id, O]), Y = (0, I.ix)({
    quest: m,
    questContent: p.uF.ACTIVITY_PANEL,
    sourceQuestContent: p.uF.ACTIVITY_PANEL
  }), K = (null == (t = m.userStatus) ? true : t.enrolledAt) != null, W = (null == (n = m.userStatus) ? true : n.completedAt) != null, q = (0, f.fc)(m), z = (0, g.mU)({
    quest: m,
    taskDetails: q,
    location: T.rE.ACTIVITY_PANEL,
    questContent: p.uF.ACTIVITY_PANEL,
    sourceQuestContent: p.uF.ACTIVITY_PANEL
  }), Q = (0, E.vA)(m), X = (0, g.NA)({
    quest: m
  }), Z = Q ? X : x.intl.string(x.t.l7E81v);
  return (0, r.jsxs)("div", {
    ref: e => {
      c.current = e
    },
    className: a()(P.iE, {
      [P.tJ]: K
    }),
    onClick: V,
    onKeyPress: V,
    onFocus: M,
    onMouseEnter: M,
    onBlur: k,
    onMouseLeave: k,
    children: [(0, r.jsxs)("div", {
      className: P.Wp,
      children: [K ? (0, r.jsx)(L, {
        quest: m
      }) : (0, r.jsx)(S.A, {}), (0, r.jsx)(y.C, {
        quest: m,
        questContent: p.uF.ACTIVITY_PANEL,
        shouldShowDisclosure: (null == (l = m.userStatus) ? true : l.enrolledAt) == null,
        showShareLink: true,
        sourceQuestContent: p.uF.ACTIVITY_PANEL,
        children: e => {
          var t, n;
          return (0, r.jsx)(o.DUT, (t = w({}, e), n = n = {
            "aria-label": x.intl.string(x.t.DEoVWZ),
            children: (0, r.jsx)(o.jNK, {
              size: "md",
              color: "currentColor",
              className: P.Bx
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
    }), !K && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(L, {
        quest: m
      }), (0, r.jsx)("div", {
        className: P.GA,
        children: (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: z
        })
      })]
    }), K && !W && (0, r.jsx)(C.A, {
      autoplay: R,
      className: P.t3,
      quest: m,
      questContent: p.uF.ACTIVITY_PANEL,
      location: T.rE.ACTIVITY_PANEL,
      taskDetails: q,
      sourceQuestContent: p.uF.ACTIVITY_PANEL
    }), (0, r.jsxs)("div", {
      className: P.uz,
      children: [!K && (0, r.jsxs)(o.ButtonGroup, {
        size: "sm",
        direction: Q ? "vertical" : "horizontal",
        fullWidth: true,
        children: [(0, r.jsx)(o.Button, {
          variant: "secondary",
          text: x.intl.string(x.t.LLLLPD),
          onClick: F
        }), G && !(0, b.Ic)(m) ? (0, r.jsx)(v.A, {
          quest: m,
          size: "md",
          analyticsCtxQuestContent: p.uF.ACTIVITY_PANEL,
          analyticsCtxSourceQuestContent: p.uF.ACTIVITY_PANEL
        }) : (0, r.jsx)(o.Button, {
          variant: "primary",
          text: Z,
          onClick: B,
          loading: j,
          icon: (0, N.Oz)(m)
        })]
      }), K && !W && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: x.intl.string(x.t.VN1Ajl),
        onClick: H
      }), W && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: x.intl.string(x.t.cfY4PE),
        onClick: Y
      })]
    })]
  })
}
let D = function(e) {
  return (0, r.jsx)(O.R, {
    questOrQuests: e.quest,
    questContent: p.uF.ACTIVITY_PANEL,
    sourceQuestContent: p.uF.ACTIVITY_PANEL,
    children: t => (0, r.jsx)(R, w({
      nodeRef: t
    }, e))
  })
}