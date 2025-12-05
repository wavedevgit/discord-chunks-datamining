/** Chunk was on 83615 **/
/** chunk id: 217599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => q
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
  Chunk802378 = require("./802378.js");

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

function P(e, t) {
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

function N(e) {
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
      let r = (null == (e = t.userStatus) ? true : e.enrolledAt) == null ? u.jZ.ACCEPT_QUEST : u.jZ.WATCH_VIDEO;
      (0, y.openVideoQuestModal)({
        quest: t,
        questContent: p.jn.QUEST_BAR_V2,
        sourceQuestContent: n,
        sourceQuestContentCTA: r
      })
    },
    size: "sm",
    text: (0, v.F9)(s)
  })
}
let R = e => {
    let {
      quest: t,
      sourceQuestContent: n
    } = e, s = (0, d.aM)(), a = (0, x.V_)(t);
    return (0, r.jsx)(o.zxk, {
      size: "sm",
      fullWidth: true,
      onClick: () => (0, h.nc)(t, {
        content: p.jn.QUEST_BAR_V2,
        ctaContent: u.jZ.OPEN_GAME_LINK,
        impressionId: s,
        sourceQuestContent: n
      }),
      text: a
    })
  },
  A = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: s
    } = e, a = null == (t = (0, d.WD)()) ? true : t.getId();
    return (0, r.jsx)(o.zxk, {
      fullWidth: true,
      onClick: () => (0, h.gI)({
        quest: n
      }, {
        content: p.jn.QUEST_BAR_V2,
        ctaContent: u.jZ.CONNECT_CONSOLE,
        impressionId: a,
        sourceQuestContent: s
      }),
      size: "sm",
      text: S.intl.string(S.t.csptqV)
    })
  },
  B = e => {
    let {
      quest: t
    } = e, n = (0, f.CR)({
      quest: t
    }), {
      launchInGameActivity: s
    } = (0, g.zB)(t);
    return (0, j.Rt)(t) ? (0, r.jsx)(o.zxk, {
      fullWidth: true,
      variant: "primary",
      icon: (0, y.getPrimaryCtaIcon)(t),
      onClick: s,
      size: "sm",
      text: n
    }) : null
  },
  k = e => {
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
    return (0, r.jsx)(E.Z, {
      quest: t,
      sourceQuestContent: n,
      applications: null != c ? c : [],
      targetElementRef: a,
      onGameSheetOpened: i,
      onGameSheetClosed: l,
      children: e => (0, r.jsx)(o.zxk, w({
        variant: "secondary",
        fullWidth: true,
        size: "sm",
        text: S.intl.string(S.t["93PTEs"])
      }, e))
    })
  },
  I = e => {
    var t, n, {
        quest: d,
        useReducedMotion: f,
        isExpanded: g,
        className: x,
        ctaLabel: h,
        onClick: b,
        questContent: j = p.jn.QUEST_BAR_V2,
        sourceQuestContent: v
      } = e,
      y = function(e, t) {
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
    let E = (null == (t = d.userStatus) ? true : t.completedAt) != null,
      N = (0, C.hf)({
        quest: d,
        questContent: j,
        sourceQuestContent: v
      }),
      R = s.useCallback(e => {
        var t;
        null == b || b(e), (0, _.xN)(d.config) && (null == (t = d.userStatus) ? true : t.claimedAt) != null ? (0, c.mK)({
          tab: O.AW.ORBS,
          analyticsLocations: [],
          analyticsSource: l.Z.QUEST_HOME_PAGE
        }) : N()
      }, [b, d.config, null == (n = d.userStatus) ? true : n.claimedAt, N]),
      {
        shouldUseShinyButton: A
      } = m.Z.useConfig({
        location: (0, u._b)(v) + "- CtaButton"
      });
    return A ? (0, r.jsx)(i.gtL, P(w({
      fullWidth: true,
      size: a.zx.Sizes.SMALL,
      onClick: R,
      pauseAnimation: f || !g && !E,
      className: x,
      buttonShineClassName: T.shine,
      "data-migration-pending": true
    }, y), {
      children: null != h ? h : S.intl.string(S.t.cfY4PE)
    })) : (0, r.jsx)(o.zxk, P(w({
      fullWidth: true,
      onClick: R,
      text: null != h ? h : S.intl.string(S.t.cfY4PE)
    }, y), {
      size: y.size === a.zx.Sizes.MEDIUM ? "md" : "sm"
    }))
  },
  D = e => {
    var t;
    let {
      quest: n,
      sourceQuestContent: s,
      useReducedMotion: o,
      isExpanded: a,
      awaitingConsoleConnections: i,
      hasMadeProgress: l,
      isProgressing: c,
      activeScreen: u,
      taskDetails: d,
      popoutTargetElementRef: m,
      onGameSheetOpened: f,
      onGameSheetClosed: g
    } = e, x = (null == (t = n.userStatus) ? true : t.completedAt) != null, h = (0, b.q8)(n), _ = u !== p.LI.SELECT && !l && !c, v = null;
    return x ? v = (0, r.jsx)(I, {
      quest: n,
      sourceQuestContent: s,
      useReducedMotion: o,
      isExpanded: a
    }) : h ? v = (0, r.jsx)(N, {
      quest: n,
      sourceQuestContent: s,
      taskDetails: d
    }) : (0, j.Rt)(n) ? v = (0, r.jsx)(B, {
      quest: n
    }) : u === p.LI.CONSOLE && i ? v = (0, r.jsx)(A, {
      quest: n,
      sourceQuestContent: s
    }) : _ && (0, j.Pb)(n) ? v = (0, r.jsx)(k, {
      quest: n,
      sourceQuestContent: s,
      taskDetails: d,
      popoutTargetElementRef: m,
      onGameSheetOpened: f,
      onGameSheetClosed: g
    }) : _ && (v = (0, r.jsx)(R, {
      quest: n,
      sourceQuestContent: s
    })), null == v ? null : (0, r.jsx)("div", {
      className: T.cta,
      children: v
    })
  };

function q(e) {
  let t = s.useRef(null);
  return (0, r.jsxs)("div", {
    className: T.ctaButtons,
    ref: t,
    children: [e.showBackButton && (0, r.jsx)(o.hU, {
      size: "sm",
      "aria-label": S.intl.string(S.t["13/7kX"]),
      onClick: e.onBack,
      icon: i.V7D,
      variant: "secondary"
    }), (0, r.jsx)(D, P(w({}, e), {
      popoutTargetElementRef: t,
      onGameSheetOpened: e.onGameSheetOpened,
      onGameSheetClosed: e.onGameSheetClosed
    }))]
  })
}