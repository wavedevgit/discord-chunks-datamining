/** Chunk was on 6043 **/
/** chunk id: 217599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => B
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk979232 = require("./979232.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk304696 = require("./304696.js"),
  Chunk387745 = require("./387745.js"),
  Chunk115179 = require("./115179.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk542347 = require("./542347.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk35215 = require("./35215.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306946 = require("./306946.js");

function I(e) {
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

function k(e, t) {
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

function R(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    taskDetails: r
  } = e;
  return (0, a.jsx)(l.zxk, {
    variant: "primary",
    fullWidth: true,
    onClick: () => {
      var e;
      let a = (null == (e = t.userStatus) ? true : e.enrolledAt) == null ? m.jZ.ACCEPT_QUEST : m.jZ.WATCH_VIDEO;
      (0, E.openVideoQuestModal)({
        quest: t,
        questContent: h.jn.QUEST_BAR_V2,
        sourceQuestContent: n,
        sourceQuestContentCTA: a
      })
    },
    size: "sm",
    text: (0, _.F9)(r)
  })
}
let A = e => {
    let {
      quest: t,
      sourceQuestContent: n
    } = e, r = (0, p.aM)(), i = (0, g.V_)(t);
    return (0, a.jsx)(l.zxk, {
      size: "sm",
      fullWidth: true,
      onClick: () => (0, v.nc)(t, {
        content: h.jn.QUEST_BAR_V2,
        ctaContent: m.jZ.OPEN_GAME_LINK,
        impressionId: r,
        sourceQuestContent: n
      }),
      text: i
    })
  },
  Z = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: r
    } = e, i = null == (t = (0, p.WD)()) ? true : t.getId();
    return (0, a.jsx)(l.zxk, {
      fullWidth: true,
      onClick: () => (0, v.gI)({
        quest: n
      }, {
        content: h.jn.QUEST_BAR_V2,
        ctaContent: m.jZ.CONNECT_CONSOLE,
        impressionId: i,
        sourceQuestContent: r
      }),
      size: "sm",
      text: w.intl.string(w.t.csptqV)
    })
  },
  D = e => {
    let {
      quest: t
    } = e, n = (0, x.CR)({
      quest: t
    }), {
      launchInGameActivity: r
    } = (0, b.zB)(t);
    return (0, C.Rt)(t) ? (0, a.jsx)(l.zxk, {
      fullWidth: true,
      variant: "primary",
      icon: (0, E.getPrimaryCtaIcon)(t),
      onClick: r,
      size: "sm",
      text: n
    }) : null
  },
  L = e => {
    let {
      quest: t,
      sourceQuestContent: n,
      taskDetails: r,
      popoutTargetElementRef: i,
      onGameSheetOpened: s,
      onGameSheetClosed: o
    } = e, {
      applications: c
    } = r;
    return (0, a.jsx)(T.Z, {
      quest: t,
      sourceQuestContent: n,
      applications: null != c ? c : [],
      targetElementRef: i,
      onGameSheetOpened: s,
      onGameSheetClosed: o,
      children: e => (0, a.jsx)(l.zxk, I({
        variant: "secondary",
        fullWidth: true,
        size: "sm",
        text: w.intl.string(w.t["93PTEs"])
      }, e))
    })
  },
  M = e => {
    var t, n, {
        quest: i,
        useReducedMotion: c,
        isExpanded: p,
        className: x,
        ctaLabel: b,
        onClick: g,
        questContent: v = h.jn.QUEST_BAR_V2,
        sourceQuestContent: y
      } = e,
      C = function(e, t) {
        if (null == e) return {};
        var n, a, r = function(e, t) {
          if (null == e) return {};
          var n, a, r = {},
            i = Object.keys(e);
          for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(e, ["quest", "useReducedMotion", "isExpanded", "className", "ctaLabel", "onClick", "questContent", "sourceQuestContent"]);
    let _ = (null == (t = i.userStatus) ? true : t.completedAt) != null,
      E = (0, S.hf)({
        quest: i,
        questContent: v,
        sourceQuestContent: y
      }),
      T = r.useCallback(e => {
        var t;
        null == g || g(e), (0, j.xN)(i.config) && (null == (t = i.userStatus) ? true : t.claimedAt) != null ? (0, u.mK)({
          tab: N.AW.ORBS,
          analyticsLocations: [],
          analyticsSource: d.Z.QUEST_HOME_PAGE
        }) : E()
      }, [g, i.config, null == (n = i.userStatus) ? true : n.claimedAt, E]),
      {
        shouldUseShinyButton: O
      } = f.Z.useConfig({
        location: (0, m._b)(y) + "- CtaButton"
      });
    return O ? (0, a.jsx)(o.gtL, k(I({
      fullWidth: true,
      size: s.zx.Sizes.SMALL,
      onClick: T,
      pauseAnimation: c || !p && !_,
      className: x,
      buttonShineClassName: P.shine,
      "data-migration-pending": true
    }, C), {
      children: null != b ? b : w.intl.string(w.t.cfY4PE)
    })) : (0, a.jsx)(l.zxk, k(I({
      fullWidth: true,
      onClick: T,
      text: null != b ? b : w.intl.string(w.t.cfY4PE)
    }, C), {
      size: C.size === s.zx.Sizes.MEDIUM ? "md" : "sm"
    }))
  },
  U = e => {
    var t;
    let {
      isExpanded: n,
      sourceQuestContent: l,
      awaitingConsoleConnections: s,
      hasMadeProgress: o,
      isProgressing: d,
      activeScreen: u,
      popoutTargetElementRef: m
    } = e, {
      quest: p,
      onGameSheetOpen: f,
      onGameSheetClose: x,
      taskDetails: b
    } = r.useContext(O.A), g = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), v = (null == (t = p.userStatus) ? true : t.completedAt) != null, j = (0, y.q8)(p), _ = u !== h.LI.SELECT && !o && !d, S = null;
    return v ? S = (0, a.jsx)(M, {
      quest: p,
      sourceQuestContent: l,
      useReducedMotion: g,
      isExpanded: n
    }) : j ? S = (0, a.jsx)(R, {
      quest: p,
      sourceQuestContent: l,
      taskDetails: b
    }) : (0, C.Rt)(p) ? S = (0, a.jsx)(D, {
      quest: p
    }) : u === h.LI.CONSOLE && s ? S = (0, a.jsx)(Z, {
      quest: p,
      sourceQuestContent: l
    }) : _ && (0, C.Pb)(p) ? S = (0, a.jsx)(L, {
      quest: p,
      sourceQuestContent: l,
      taskDetails: b,
      popoutTargetElementRef: m,
      onGameSheetOpened: f,
      onGameSheetClosed: x
    }) : _ && (S = (0, a.jsx)(A, {
      quest: p,
      sourceQuestContent: l
    })), null == S ? null : (0, a.jsx)("div", {
      className: P.cta,
      children: S
    })
  };

function B(e) {
  let t = r.useRef(null);
  return (0, a.jsxs)("div", {
    className: P.ctaButtons,
    ref: t,
    children: [e.showBackButton && (0, a.jsx)(l.hU, {
      size: "sm",
      "aria-label": w.intl.string(w.t["13/7kX"]),
      onClick: e.onBack,
      icon: o.V7D,
      variant: "secondary"
    }), (0, a.jsx)(U, k(I({}, e), {
      popoutTargetElementRef: t
    }))]
  })
}