/** Chunk was on 22477 **/
/** chunk id: 207869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => L
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk979286 = require("./979286.js"),
  Chunk216456 = require("./216456.js"),
  Chunk906822 = require("./906822.jsx"),
  Chunk341915 = require("./341915.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk651892 = require("./651892.js"),
  Chunk901406 = require("./901406.js"),
  Chunk92246 = require("./92246.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk753386 = require("./753386.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk194267 = require("./194267.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk703653 = require("./703653.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    taskDetails: l
  } = e;
  return (0, a.jsx)(r.$nd, {
    variant: "primary",
    fullWidth: true,
    onClick: () => {
      var e;
      let a = (null == (e = t.userStatus) ? true : e.enrolledAt) == null ? d.Cy.ACCEPT_QUEST : d.Cy.WATCH_VIDEO;
      (0, y.d5)({
        quest: t,
        questContent: m.uF.QUEST_BAR_V2,
        sourceQuestContent: n,
        sourceQuestContentCTA: a
      })
    },
    size: "sm",
    text: (0, j.WM)(l)
  })
}
let I = e => {
    let {
      quest: t,
      sourceQuestContent: n
    } = e, l = (0, u.go)(), i = (0, x.wr)(t);
    return (0, a.jsx)(r.$nd, {
      size: "sm",
      fullWidth: true,
      onClick: () => (0, g.pu)(t, {
        content: m.uF.QUEST_BAR_V2,
        ctaContent: d.Cy.OPEN_GAME_LINK,
        impressionId: l,
        sourceQuestContent: n
      }),
      text: i
    })
  },
  k = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: l
    } = e, i = null == (t = (0, u.vU)()) ? true : t.getId();
    return (0, a.jsx)(r.$nd, {
      fullWidth: true,
      onClick: () => (0, g.se)({
        quest: n
      }, {
        content: m.uF.QUEST_BAR_V2,
        ctaContent: d.Cy.CONNECT_CONSOLE,
        impressionId: i,
        sourceQuestContent: l
      }),
      size: "sm",
      text: O.intl.string(O.t.csptqV)
    })
  },
  P = e => {
    let {
      quest: t
    } = e, n = (0, p.NA)({
      quest: t
    }), {
      launchInGameActivity: l
    } = (0, h.zW)(t);
    return (0, v.vA)(t) ? (0, a.jsx)(r.$nd, {
      fullWidth: true,
      variant: "primary",
      icon: (0, y.Oz)(t),
      onClick: l,
      size: "sm",
      text: n
    }) : null
  },
  R = e => {
    let {
      quest: t,
      sourceQuestContent: n,
      taskDetails: l,
      popoutTargetElementRef: i,
      onGameSheetOpened: s,
      onGameSheetClosed: o
    } = e, {
      applications: c
    } = l;
    return (0, a.jsx)(A.A, {
      quest: t,
      sourceQuestContent: n,
      applications: null != c ? c : [],
      targetElementRef: i,
      onGameSheetOpened: s,
      onGameSheetClosed: o,
      children: e => (0, a.jsx)(r.$nd, T({
        variant: "secondary",
        fullWidth: true,
        size: "sm",
        text: O.intl.string(O.t["93PTEs"])
      }, e))
    })
  },
  D = e => {
    var t;
    let {
      quest: n,
      ctaLabel: s,
      onClick: d,
      questContent: u = m.uF.QUEST_BAR_V2,
      sourceQuestContent: p
    } = e, h = function(e, t) {
      if (null == e) return {};
      var n, a, l, r = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
        return r
      }
      if (r = function(e, t) {
          if (null == e) return {};
          var n, a, l = {},
            r = Object.getOwnPropertyNames(e);
          for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
      return r
    }(e, ["quest", "ctaLabel", "onClick", "questContent", "sourceQuestContent"]), x = (0, _.ix)({
      quest: n,
      questContent: u,
      sourceQuestContent: p
    }), g = l.useCallback(e => {
      var t;
      null == d || d(e), (0, f.ks)(n.config) && (null == (t = n.userStatus) ? true : t.claimedAt) != null ? (0, c.Cz)({
        tab: S.G2.ORBS,
        analyticsLocations: [],
        analyticsSource: o.A.QUEST_HOME_PAGE
      }) : x()
    }, [d, n.config, null == (t = n.userStatus) ? true : t.claimedAt, x]);
    return (0, a.jsx)(r.$nd, N(T({
      fullWidth: true,
      onClick: g,
      text: null != s ? s : O.intl.string(O.t.cfY4PE)
    }, h), {
      size: h.size === i.$n.Sizes.MEDIUM ? "md" : "sm"
    }))
  },
  M = e => {
    var t;
    let {
      sourceQuestContent: n,
      awaitingConsoleConnections: r,
      hasMadeProgress: i,
      isProgressing: s,
      activeScreen: o,
      popoutTargetElementRef: c
    } = e, {
      quest: d,
      onGameSheetOpen: u,
      onGameSheetClose: p,
      taskDetails: h
    } = l.useContext(C.T), x = (null == (t = d.userStatus) ? true : t.completedAt) != null, g = (0, b.vv)(d), f = o !== m.X0.SELECT && !i && !s, j = null;
    return x ? j = (0, a.jsx)(D, {
      quest: d,
      sourceQuestContent: n
    }) : g ? j = (0, a.jsx)(w, {
      quest: d,
      sourceQuestContent: n,
      taskDetails: h
    }) : (0, v.vA)(d) ? j = (0, a.jsx)(P, {
      quest: d
    }) : o === m.X0.CONSOLE && r ? j = (0, a.jsx)(k, {
      quest: d,
      sourceQuestContent: n
    }) : f && (0, v.ui)(d) ? j = (0, a.jsx)(R, {
      quest: d,
      sourceQuestContent: n,
      taskDetails: h,
      popoutTargetElementRef: c,
      onGameSheetOpened: u,
      onGameSheetClosed: p
    }) : f && (j = (0, a.jsx)(I, {
      quest: d,
      sourceQuestContent: n
    })), null == j ? null : (0, a.jsx)("div", {
      className: E.lO,
      children: j
    })
  };

function L(e) {
  let t = l.useRef(null);
  return (0, a.jsxs)("div", {
    className: E.oG,
    ref: t,
    children: [e.showBackButton && (0, a.jsx)(r.K0, {
      size: "sm",
      "aria-label": O.intl.string(O.t["13/7kX"]),
      onClick: e.onBack,
      icon: s.n2b,
      variant: "secondary"
    }), (0, a.jsx)(M, N(T({}, e), {
      popoutTargetElementRef: t
    }))]
  })
}