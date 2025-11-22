/** Chunk was on 83615 **/
/** chunk id: 164495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => B
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
  Chunk313481 = require("./313481.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk979232 = require("./979232.js"),
  Chunk373370 = require("./373370.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk35215 = require("./35215.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165016 = require("./165016.js");

function E(e) {
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

function O(e, t) {
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

function S(e) {
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
      (0, _.openVideoQuestModal)({
        quest: t,
        questContent: m.jn.QUEST_BAR_V2,
        sourceQuestContent: n,
        sourceQuestContentCTA: r
      })
    },
    size: "sm",
    text: (0, g.F9)(s)
  })
}
let T = e => {
    let {
      quest: t,
      sourceQuestContent: n
    } = e, s = (0, u.aM)(), a = (() => {
      var e;
      let n = null == (e = t.config.ctaConfig) ? true : e.buttonLabel;
      return null != n ? n : (0, g.pO)(t) || t.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) ? C.intl.string(C.t.hvVgAZ) : C.intl.string(C.t.lwQdjB)
    })();
    return (0, r.jsx)(o.zxk, {
      size: "sm",
      fullWidth: true,
      onClick: () => (0, g.nc)(t, {
        content: m.jn.QUEST_BAR_V2,
        ctaContent: d.jZ.OPEN_GAME_LINK,
        impressionId: s,
        sourceQuestContent: n
      }),
      text: a
    })
  },
  w = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: s
    } = e, a = null == (t = (0, u.WD)()) ? true : t.getId();
    return (0, r.jsx)(o.zxk, {
      fullWidth: true,
      onClick: () => (0, g.gI)({
        quest: n
      }, {
        content: m.jn.QUEST_BAR_V2,
        ctaContent: d.jZ.CONNECT_CONSOLE,
        impressionId: a,
        sourceQuestContent: s
      }),
      size: "sm",
      text: C.intl.string(C.t.csptqV)
    })
  },
  P = e => {
    let {
      quest: t
    } = e, n = (0, h.CR)({
      quest: t
    }), {
      launchInGameActivity: s
    } = (0, p.zB)(t);
    return (0, g.Rt)(t) ? (0, r.jsx)(o.zxk, {
      fullWidth: true,
      variant: "primary",
      icon: (0, _.getPrimaryCtaIcon)(t),
      onClick: s,
      size: "sm",
      text: n
    }) : null
  },
  N = e => {
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
    return (0, r.jsx)(b.Z, {
      quest: t,
      sourceQuestContent: n,
      applications: null != c ? c : [],
      targetElementRef: a,
      onGameSheetOpened: i,
      onGameSheetClosed: l,
      children: e => (0, r.jsx)(o.zxk, E({
        variant: "secondary",
        fullWidth: true,
        size: "sm",
        text: C.intl.string(C.t["93PTEs"])
      }, e))
    })
  },
  A = e => {
    var t, n, {
        quest: u,
        useReducedMotion: p,
        isExpanded: h,
        className: _,
        ctaLabel: b,
        onClick: j,
        questContent: S = m.jn.QUEST_BAR_V2,
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
      N = (0, x.hf)({
        quest: u,
        questContent: S,
        sourceQuestContent: T
      }),
      A = s.useCallback(e => {
        var t;
        null == j || j(e), (0, g.xN)(u.config) && (null == (t = u.userStatus) ? true : t.claimedAt) != null ? (0, c.mK)({
          tab: v.AW.ORBS,
          analyticsLocations: [],
          analyticsSource: l.Z.QUEST_HOME_PAGE
        }) : N()
      }, [j, u.config, null == (n = u.userStatus) ? true : n.claimedAt, N]),
      {
        shouldUseShinyButton: R
      } = f.Z.useConfig({
        location: (0, d._b)(T) + "- CtaButton"
      });
    return R ? (0, r.jsx)(i.gtL, O(E({
      fullWidth: true,
      size: a.zx.Sizes.SMALL,
      onClick: A,
      pauseAnimation: p || !h && !P,
      className: _,
      buttonShineClassName: y.shine,
      "data-migration-pending": true
    }, w), {
      children: null != b ? b : C.intl.string(C.t.cfY4PE)
    })) : (0, r.jsx)(o.zxk, O(E({
      fullWidth: true,
      onClick: A,
      text: null != b ? b : C.intl.string(C.t.cfY4PE)
    }, w), {
      size: w.size === a.zx.Sizes.MEDIUM ? "md" : "sm"
    }))
  },
  R = e => {
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
      popoutTargetElementRef: p,
      onGameSheetOpened: f,
      onGameSheetClosed: h
    } = e, x = (null == (t = n.userStatus) ? true : t.completedAt) != null, _ = (0, g.q8)(n), b = d !== m.LI.SELECT && !l && !c, j = null;
    return x ? j = (0, r.jsx)(A, {
      quest: n,
      sourceQuestContent: s,
      useReducedMotion: o,
      isExpanded: a
    }) : _ ? j = (0, r.jsx)(S, {
      quest: n,
      sourceQuestContent: s,
      taskDetails: u
    }) : (0, g.Rt)(n) ? j = (0, r.jsx)(P, {
      quest: n
    }) : d === m.LI.CONSOLE && i ? j = (0, r.jsx)(w, {
      quest: n,
      sourceQuestContent: s
    }) : b && (0, g.Pb)(n) ? j = (0, r.jsx)(N, {
      quest: n,
      sourceQuestContent: s,
      taskDetails: u,
      popoutTargetElementRef: p,
      onGameSheetOpened: f,
      onGameSheetClosed: h
    }) : b && (j = (0, r.jsx)(T, {
      quest: n,
      sourceQuestContent: s
    })), null == j ? null : (0, r.jsx)("div", {
      className: y.cta,
      children: j
    })
  };

function B(e) {
  let t = s.useRef(null);
  return (0, r.jsxs)("div", {
    className: y.ctaButtons,
    ref: t,
    children: [e.showBackButton && (0, r.jsx)(o.hU, {
      size: "sm",
      "aria-label": C.intl.string(C.t["13/7kX"]),
      onClick: e.onBack,
      icon: i.V7D,
      variant: "secondary"
    }), (0, r.jsx)(R, O(E({}, e), {
      popoutTargetElementRef: t,
      onGameSheetOpened: e.onGameSheetOpened,
      onGameSheetClosed: e.onGameSheetClosed
    }))]
  })
}