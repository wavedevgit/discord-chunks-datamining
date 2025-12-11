/** Chunk was on 945 **/
/** chunk id: 217599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306946 = require("./306946.js");

function N(e) {
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

function P(e, t) {
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
    taskDetails: r
  } = e;
  return (0, a.jsx)(i.zxk, {
    variant: "primary",
    fullWidth: true,
    onClick: () => {
      var e;
      let a = (null == (e = t.userStatus) ? true : e.enrolledAt) == null ? d.jZ.ACCEPT_QUEST : d.jZ.WATCH_VIDEO;
      (0, _.openVideoQuestModal)({
        quest: t,
        questContent: m.jn.QUEST_BAR_V2,
        sourceQuestContent: n,
        sourceQuestContentCTA: a
      })
    },
    size: "sm",
    text: (0, y.F9)(r)
  })
}
let I = e => {
    let {
      quest: t,
      sourceQuestContent: n
    } = e, r = (0, u.aM)(), l = (0, x.V_)(t);
    return (0, a.jsx)(i.zxk, {
      size: "sm",
      fullWidth: true,
      onClick: () => (0, b.nc)(t, {
        content: m.jn.QUEST_BAR_V2,
        ctaContent: d.jZ.OPEN_GAME_LINK,
        impressionId: r,
        sourceQuestContent: n
      }),
      text: l
    })
  },
  k = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: r
    } = e, l = null == (t = (0, u.WD)()) ? true : t.getId();
    return (0, a.jsx)(i.zxk, {
      fullWidth: true,
      onClick: () => (0, b.gI)({
        quest: n
      }, {
        content: m.jn.QUEST_BAR_V2,
        ctaContent: d.jZ.CONNECT_CONSOLE,
        impressionId: l,
        sourceQuestContent: r
      }),
      size: "sm",
      text: O.intl.string(O.t.csptqV)
    })
  },
  R = e => {
    let {
      quest: t
    } = e, n = (0, h.CR)({
      quest: t
    }), {
      launchInGameActivity: r
    } = (0, f.zB)(t);
    return (0, j.Rt)(t) ? (0, a.jsx)(i.zxk, {
      fullWidth: true,
      variant: "primary",
      icon: (0, _.getPrimaryCtaIcon)(t),
      onClick: r,
      size: "sm",
      text: n
    }) : null
  },
  A = e => {
    let {
      quest: t,
      sourceQuestContent: n,
      taskDetails: r,
      popoutTargetElementRef: l,
      onGameSheetOpened: s,
      onGameSheetClosed: o
    } = e, {
      applications: c
    } = r;
    return (0, a.jsx)(S.Z, {
      quest: t,
      sourceQuestContent: n,
      applications: null != c ? c : [],
      targetElementRef: l,
      onGameSheetOpened: s,
      onGameSheetClosed: o,
      children: e => (0, a.jsx)(i.zxk, N({
        variant: "secondary",
        fullWidth: true,
        size: "sm",
        text: O.intl.string(O.t["93PTEs"])
      }, e))
    })
  },
  D = e => {
    var t, n, {
        quest: u,
        useReducedMotion: h,
        isExpanded: f,
        className: x,
        ctaLabel: b,
        onClick: v,
        questContent: j = m.jn.QUEST_BAR_V2,
        sourceQuestContent: y
      } = e,
      _ = function(e, t) {
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
    let S = (null == (t = u.userStatus) ? true : t.completedAt) != null,
      w = (0, C.hf)({
        quest: u,
        questContent: j,
        sourceQuestContent: y
      }),
      I = r.useCallback(e => {
        var t;
        null == v || v(e), (0, g.xN)(u.config) && (null == (t = u.userStatus) ? true : t.claimedAt) != null ? (0, c.mK)({
          tab: E.AW.ORBS,
          analyticsLocations: [],
          analyticsSource: o.Z.QUEST_HOME_PAGE
        }) : w()
      }, [v, u.config, null == (n = u.userStatus) ? true : n.claimedAt, w]),
      {
        shouldUseShinyButton: k
      } = p.Z.useConfig({
        location: (0, d._b)(y) + "- CtaButton"
      });
    return k ? (0, a.jsx)(s.gtL, P(N({
      fullWidth: true,
      size: l.zx.Sizes.SMALL,
      onClick: I,
      pauseAnimation: h || !f && !S,
      className: x,
      buttonShineClassName: T.shine,
      "data-migration-pending": true
    }, _), {
      children: null != b ? b : O.intl.string(O.t.cfY4PE)
    })) : (0, a.jsx)(i.zxk, P(N({
      fullWidth: true,
      onClick: I,
      text: null != b ? b : O.intl.string(O.t.cfY4PE)
    }, _), {
      size: _.size === l.zx.Sizes.MEDIUM ? "md" : "sm"
    }))
  },
  Z = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: r,
      useReducedMotion: i,
      isExpanded: l,
      awaitingConsoleConnections: s,
      hasMadeProgress: o,
      isProgressing: c,
      activeScreen: d,
      taskDetails: u,
      popoutTargetElementRef: p,
      onGameSheetOpened: h,
      onGameSheetClosed: f
    } = e, x = (null == (t = n.userStatus) ? true : t.completedAt) != null, b = (0, v.q8)(n), g = d !== m.LI.SELECT && !o && !c, y = null;
    return x ? y = (0, a.jsx)(D, {
      quest: n,
      sourceQuestContent: r,
      useReducedMotion: i,
      isExpanded: l
    }) : b ? y = (0, a.jsx)(w, {
      quest: n,
      sourceQuestContent: r,
      taskDetails: u
    }) : (0, j.Rt)(n) ? y = (0, a.jsx)(R, {
      quest: n
    }) : d === m.LI.CONSOLE && s ? y = (0, a.jsx)(k, {
      quest: n,
      sourceQuestContent: r
    }) : g && (0, j.Pb)(n) ? y = (0, a.jsx)(A, {
      quest: n,
      sourceQuestContent: r,
      taskDetails: u,
      popoutTargetElementRef: p,
      onGameSheetOpened: h,
      onGameSheetClosed: f
    }) : g && (y = (0, a.jsx)(I, {
      quest: n,
      sourceQuestContent: r
    })), null == y ? null : (0, a.jsx)("div", {
      className: T.cta,
      children: y
    })
  };

function L(e) {
  let t = r.useRef(null);
  return (0, a.jsxs)("div", {
    className: T.ctaButtons,
    ref: t,
    children: [e.showBackButton && (0, a.jsx)(i.hU, {
      size: "sm",
      "aria-label": O.intl.string(O.t["13/7kX"]),
      onClick: e.onBack,
      icon: s.V7D,
      variant: "secondary"
    }), (0, a.jsx)(Z, P(N({}, e), {
      popoutTargetElementRef: t,
      onGameSheetOpened: e.onGameSheetOpened,
      onGameSheetClosed: e.onGameSheetClosed
    }))]
  })
}