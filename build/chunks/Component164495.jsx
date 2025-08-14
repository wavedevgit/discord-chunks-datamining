/** Chunk was on 27458 **/
/** chunk id: 164495, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  i: () => w,
  y: () => z
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk373370 = require("./373370.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165016 = require("./165016.js");

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function k(e) {
  let {
    quest: t,
    sourceQuestContent: r,
    taskDetails: s
  } = e;
  return (0, n.jsx)(a.zx, {
    className: O.cta,
    color: a.zx.Colors.BRAND,
    fullWidth: true,
    onClick: () => {
      var e;
      let n = (null == (e = t.userStatus) ? true : e.enrolledAt) == null ? d.jZ.ACCEPT_QUEST : d.jZ.WATCH_VIDEO;
      (0, h.openVideoQuestModal)({
        quest: t,
        questContent: j.jn.QUEST_BAR_V2,
        sourceQuestContent: r,
        sourceQuestContentCTA: n
      })
    },
    size: a.zx.Sizes.SMALL,
    children: (0, p.F9)(s)
  })
}
let v = e => {
    let {
      quest: t,
      sourceQuestContent: r
    } = e, s = (0, f.aM)();
    return (0, n.jsx)(a.zx, {
      className: O.cta,
      size: a.zx.Sizes.SMALL,
      onClick: () => (0, p.nc)(t, {
        content: j.jn.QUEST_BAR_V2,
        ctaContent: d.jZ.OPEN_GAME_LINK,
        impressionId: s,
        sourceQuestContent: r
      }),
      children: (0, p.pO)(t) ? y.intl.string(y.t.hvVgAQ) : y.intl.string(y.t.lwQdjI)
    })
  },
  N = e => {
    var t;
    let {
      quest: r,
      sourceQuestContent: s
    } = e, o = null == (t = (0, f.WD)()) ? true : t.getId();
    return (0, n.jsx)(a.zx, {
      fullWidth: true,
      className: O.cta,
      onClick: () => (0, p.gI)({
        quest: r
      }, {
        content: j.jn.QUEST_BAR_V2,
        ctaContent: d.jZ.CONNECT_CONSOLE,
        impressionId: o,
        sourceQuestContent: s
      }),
      size: a.zx.Sizes.SMALL,
      children: y.intl.string(y.t.csptqa)
    })
  },
  E = e => {
    let {
      quest: t
    } = e, r = (0, p.Vl)(t), s = t.config.features.includes(b.S7.START_QUEST_CTA), o = (0, g.CR)({
      quest: t
    }), {
      launchInGameActivity: l
    } = (0, x.zB)(t);
    return r && s ? (0, n.jsx)(a.zx, {
      className: O.cta,
      color: a.zx.Colors.BRAND,
      fullWidth: true,
      onClick: l,
      size: a.zx.Sizes.SMALL,
      children: o
    }) : null
  },
  w = e => {
    var t, r, o, {
        quest: d,
        useReducedMotion: f,
        isExpanded: x,
        className: g,
        ctaLabel: h,
        onClick: b,
        questContent: k = j.jn.QUEST_BAR_V2,
        sourceQuestContent: v,
        shouldShowRewardsCTAWhenCollapsed: N = false
      } = e,
      E = function(e, t) {
        if (null == e) return {};
        var r, n, s = function(e, t) {
          if (null == e) return {};
          var r, n, s = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
          return s
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
        }
        return s
      }(e, ["quest", "useReducedMotion", "isExpanded", "className", "ctaLabel", "onClick", "questContent", "sourceQuestContent", "shouldShowRewardsCTAWhenCollapsed"]);
    let w = (0, C.hf)({
        quest: d,
        questContent: k,
        sourceQuestContent: v
      }),
      A = s.useCallback(e => {
        var t;
        null == b || b(e), (0, p.xN)(d.config) && (null == (t = d.userStatus) ? true : t.claimedAt) != null ? (0, u.mK)({
          openInLayer: false,
          tab: m.AW.ORBS,
          analyticsLocations: [],
          analyticsSource: i.Z.QUEST_HOME_PAGE
        }) : w()
      }, [b, d.config, null == (o = d.userStatus) ? true : o.claimedAt, w]);
    return (0, n.jsx)(c.gtL, (t = S({
      fullWidth: true,
      size: a.zx.Sizes.SMALL,
      onClick: A,
      pauseAnimation: f || !x && !N,
      className: l()(O.cta, g),
      buttonShineClassName: O.shine
    }, E), r = r = {
      children: null != h ? h : y.intl.string(y.t.cfY4PD)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  },
  A = e => {
    var t;
    let {
      quest: r,
      sourceQuestContent: s,
      useReducedMotion: o,
      isExpanded: l,
      awaitingConsoleConnections: a,
      hasMadeProgress: c,
      isProgressing: i,
      activeScreen: u,
      taskDetails: d,
      shouldShowRewardsCTAWhenCollapsed: f
    } = e, x = (null == (t = r.userStatus) ? true : t.completedAt) != null, g = (0, p.q8)(r), h = (0, p.Vl)(r);
    if (x) return (0, n.jsx)(w, {
      quest: r,
      sourceQuestContent: s,
      useReducedMotion: o,
      isExpanded: l,
      shouldShowRewardsCTAWhenCollapsed: f
    });
    if (g) return (0, n.jsx)(k, {
      quest: r,
      sourceQuestContent: s,
      taskDetails: d
    });
    if (h) return (0, n.jsx)(E, {
      quest: r
    });
    if (u === j.LI.CONSOLE && a) return (0, n.jsx)(N, {
      quest: r,
      sourceQuestContent: s
    });
    if (u !== j.LI.SELECT && !c && !i) return (0, n.jsx)(v, {
      quest: r,
      sourceQuestContent: s
    });
    return null
  };

function z(e) {
  return (0, n.jsxs)("div", {
    className: O.ctaButtons,
    children: [e.showBackButton && (0, n.jsx)(a.zx, {
      className: O.backButton,
      innerClassName: O.backButtonInner,
      look: "blank",
      grow: false,
      fullWidth: false,
      size: "none",
      onClick: e.onBack,
      children: (0, n.jsx)(c.V7D, {
        className: O.backIcon
      })
    }), (0, n.jsx)(A, S({}, e))]
  })
}