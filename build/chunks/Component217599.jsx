/** Chunk was on 83615 **/
/** chunk id: 217599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => k
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
  Chunk509212 = require("./509212.js"),
  Chunk979232 = require("./979232.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk542347 = require("./542347.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk35215 = require("./35215.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk802378 = require("./802378.js");

function O(e) {
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

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    taskDetails: s
  } = e;
  return (0, r.jsx)(o.zxk, {
    variant: "primary",
    fullWidth: true,
    onClick: () => {
      var e;
      let r = (null == (e = t.userStatus) ? true : e.enrolledAt) == null ? d.jZ.ACCEPT_QUEST : d.jZ.WATCH_VIDEO;
      (0, j.openVideoQuestModal)({
        quest: t,
        questContent: p.jn.QUEST_BAR_V2,
        sourceQuestContent: n,
        sourceQuestContentCTA: r
      })
    },
    size: "sm",
    text: (0, _.F9)(s)
  })
}
let w = e => {
    let {
      quest: t,
      sourceQuestContent: n
    } = e, s = (0, u.aM)(), a = (0, m.V_)(t);
    return (0, r.jsx)(o.zxk, {
      size: "sm",
      fullWidth: true,
      onClick: () => (0, m.nc)(t, {
        content: p.jn.QUEST_BAR_V2,
        ctaContent: d.jZ.OPEN_GAME_LINK,
        impressionId: s,
        sourceQuestContent: n
      }),
      text: a
    })
  },
  P = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: s
    } = e, a = null == (t = (0, u.WD)()) ? true : t.getId();
    return (0, r.jsx)(o.zxk, {
      fullWidth: true,
      onClick: () => (0, m.gI)({
        quest: n
      }, {
        content: p.jn.QUEST_BAR_V2,
        ctaContent: d.jZ.CONNECT_CONSOLE,
        impressionId: a,
        sourceQuestContent: s
      }),
      size: "sm",
      text: y.intl.string(y.t.csptqV)
    })
  },
  N = e => {
    let {
      quest: t
    } = e, n = (0, f.CR)({
      quest: t
    }), {
      launchInGameActivity: s
    } = (0, h.zB)(t);
    return (0, m.Rt)(t) ? (0, r.jsx)(o.zxk, {
      fullWidth: true,
      variant: "primary",
      icon: (0, j.getPrimaryCtaIcon)(t),
      onClick: s,
      size: "sm",
      text: n
    }) : null
  },
  R = e => {
    let {
      quest: t,
      sourceQuestContent: n,
      taskDetails: s,
      popoutTargetElementRef: a,
      onGameSheetOpened: i,
      onGameSheetClosed: l
    } = e, {
      applications: c
    } = s;
    return (0, r.jsx)(v.Z, {
      quest: t,
      sourceQuestContent: n,
      applications: null != c ? c : [],
      targetElementRef: a,
      onGameSheetOpened: i,
      onGameSheetClosed: l,
      children: e => (0, r.jsx)(o.zxk, O({
        variant: "secondary",
        fullWidth: true,
        size: "sm",
        text: y.intl.string(y.t["93PTEs"])
      }, e))
    })
  },
  A = e => {
    var t, n, {
        quest: u,
        useReducedMotion: m,
        isExpanded: f,
        className: h,
        ctaLabel: _,
        onClick: j,
        questContent: v = p.jn.QUEST_BAR_V2,
        sourceQuestContent: T
      } = e,
      w = function(e, t) {
        if (null == e) return {};
        var n, r, s = function(e, t) {
          if (null == e) return {};
          var n, r, s = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
          return s
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
        }
        return s
      }(e, ["quest", "useReducedMotion", "isExpanded", "className", "ctaLabel", "onClick", "questContent", "sourceQuestContent"]);
    let P = (null == (t = u.userStatus) ? true : t.completedAt) != null,
      N = (0, b.hf)({
        quest: u,
        questContent: v,
        sourceQuestContent: T
      }),
      R = s.useCallback(e => {
        var t;
        null == j || j(e), (0, x.xN)(u.config) && (null == (t = u.userStatus) ? true : t.claimedAt) != null ? (0, c.mK)({
          tab: C.AW.ORBS,
          analyticsLocations: [],
          analyticsSource: l.Z.QUEST_HOME_PAGE
        }) : N()
      }, [j, u.config, null == (n = u.userStatus) ? true : n.claimedAt, N]),
      {
        shouldUseShinyButton: A
      } = g.Z.useConfig({
        location: (0, d._b)(T) + "- CtaButton"
      });
    return A ? (0, r.jsx)(i.gtL, S(O({
      fullWidth: true,
      size: a.zx.Sizes.SMALL,
      onClick: R,
      pauseAnimation: m || !f && !P,
      className: h,
      buttonShineClassName: E.shine,
      "data-migration-pending": true
    }, w), {
      children: null != _ ? _ : y.intl.string(y.t.cfY4PE)
    })) : (0, r.jsx)(o.zxk, S(O({
      fullWidth: true,
      onClick: R,
      text: null != _ ? _ : y.intl.string(y.t.cfY4PE)
    }, w), {
      size: w.size === a.zx.Sizes.MEDIUM ? "md" : "sm"
    }))
  },
  B = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: s,
      useReducedMotion: o,
      isExpanded: a,
      awaitingConsoleConnections: i,
      hasMadeProgress: l,
      isProgressing: c,
      activeScreen: d,
      taskDetails: u,
      popoutTargetElementRef: g,
      onGameSheetOpened: f,
      onGameSheetClosed: h
    } = e, x = (null == (t = n.userStatus) ? true : t.completedAt) != null, _ = (0, m.q8)(n), b = d !== p.LI.SELECT && !l && !c, j = null;
    return x ? j = (0, r.jsx)(A, {
      quest: n,
      sourceQuestContent: s,
      useReducedMotion: o,
      isExpanded: a
    }) : _ ? j = (0, r.jsx)(T, {
      quest: n,
      sourceQuestContent: s,
      taskDetails: u
    }) : (0, m.Rt)(n) ? j = (0, r.jsx)(N, {
      quest: n
    }) : d === p.LI.CONSOLE && i ? j = (0, r.jsx)(P, {
      quest: n,
      sourceQuestContent: s
    }) : b && (0, m.Pb)(n) ? j = (0, r.jsx)(R, {
      quest: n,
      sourceQuestContent: s,
      taskDetails: u,
      popoutTargetElementRef: g,
      onGameSheetOpened: f,
      onGameSheetClosed: h
    }) : b && (j = (0, r.jsx)(w, {
      quest: n,
      sourceQuestContent: s
    })), null == j ? null : (0, r.jsx)("div", {
      className: E.cta,
      children: j
    })
  };

function k(e) {
  let t = s.useRef(null);
  return (0, r.jsxs)("div", {
    className: E.ctaButtons,
    ref: t,
    children: [e.showBackButton && (0, r.jsx)(o.hU, {
      size: "sm",
      "aria-label": y.intl.string(y.t["13/7kX"]),
      onClick: e.onBack,
      icon: i.V7D,
      variant: "secondary"
    }), (0, r.jsx)(B, S(O({}, e), {
      popoutTargetElementRef: t,
      onGameSheetOpened: e.onGameSheetOpened,
      onGameSheetClosed: e.onGameSheetClosed
    }))]
  })
}