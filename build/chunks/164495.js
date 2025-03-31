/** Chunk was on 63689 **/
t.d(n, {
  i0: () => y,
  yD: () => k
});
var r = t(200651),
  o = t(192379),
  a = t(120356),
  i = t.n(a),
  d = t(481060),
  s = t(617136),
  c = t(915750),
  l = t(497505),
  f = t(918701),
  u = t(796111),
  p = t(667105),
  _ = t(341907),
  C = t(46140),
  b = t(388032),
  g = t(883695);

function v(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = r
    })
  }
  return e
}

function m(e) {
  let {
    quest: n,
    taskDetails: t
  } = e;
  return (0, r.jsx)(d.zxk, {
    className: g.cta,
    color: d.zxk.Colors.BRAND,
    fullWidth: !0,
    onClick: () => {
      (0, _.openVideoQuestModal)(n)
    },
    size: d.zxk.Sizes.SMALL,
    children: (0, f.F9)(t)
  })
}
let x = e => {
    let {
      quest: n
    } = e, t = (0, c.aM)();
    return (0, r.jsx)(d.zxk, {
      className: g.cta,
      size: d.zxk.Sizes.SMALL,
      onClick: () => (0, f.FE)(n, {
        content: l.jn.QUEST_BAR_V2,
        ctaContent: s.jZ.OPEN_GAME_LINK,
        impressionId: t
      }),
      children: (0, f.pO)(n) ? b.NW.string(b.t.hvVgAQ) : b.NW.string(b.t.lwQdjI)
    })
  },
  S = e => {
    var n;
    let {
      quest: t
    } = e, o = null === (n = (0, c.WD)()) || void 0 === n ? void 0 : n.getId();
    return (0, r.jsx)(d.zxk, {
      fullWidth: !0,
      className: g.cta,
      onClick: () => (0, f.gI)({
        quest: t
      }, {
        content: l.jn.QUEST_BAR_V2,
        ctaContent: s.jZ.CONNECT_CONSOLE,
        impressionId: o
      }),
      size: d.zxk.Sizes.SMALL,
      children: b.NW.string(b.t.csptqa)
    })
  },
  y = e => {
    var n, t, {
        quest: a,
        useReducedMotion: s,
        isExpanded: c,
        className: f,
        ctaLabel: u,
        onClick: _
      } = e,
      C = function(e, n) {
        if (null == e) return {};
        var t, r, o = function(e, n) {
          if (null == e) return {};
          var t, r, o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
          return o
        }(e, n);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++) t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
        }
        return o
      }(e, ["quest", "useReducedMotion", "isExpanded", "className", "ctaLabel", "onClick"]);
    let m = (0, p.hf)({
        quest: a,
        location: l.jn.QUEST_BAR_V2
      }),
      x = o.useCallback(e => {
        null == _ || _(e), m()
      }, [_, m]);
    return (0, r.jsx)(d.gtL, (n = v({
      fullWidth: !0,
      size: d.zxk.Sizes.SMALL,
      onClick: x,
      pauseAnimation: s || !c,
      className: i()(g.cta, f),
      buttonShineClassName: g.shine
    }, C), t = t = {
      children: null != u ? u : b.NW.string(b.t.cfY4PD)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t.push.apply(t, r)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), n))
  },
  B = e => {
    var n;
    let {
      quest: t,
      useReducedMotion: o,
      isExpanded: a,
      awaitingConsoleConnections: i,
      hasMadeProgress: d,
      isProgressing: s,
      activeScreen: c,
      taskDetails: p
    } = e, _ = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, b = (0, u.P)({
      location: C.dr.QUESTS_BAR
    }), g = (0, f.q8)(t), v = (0, f.Vl)(t);
    if (_) return (0, r.jsx)(y, {
      quest: t,
      useReducedMotion: o,
      isExpanded: a
    });
    if (g) return (0, r.jsx)(m, {
      quest: t,
      taskDetails: p
    });
    if (v);
    else if (c === l.LI.CONSOLE && i && !b) return (0, r.jsx)(S, {
      quest: t
    });
    else if (c !== l.LI.SELECT && !d && !s) return (0, r.jsx)(x, {
      quest: t
    });
    return null
  };

function k(e) {
  return (0, r.jsxs)("div", {
    className: g.ctaButtons,
    children: [e.showBackButton && (0, r.jsx)(d.zxk, {
      className: g.backButton,
      innerClassName: g.backButtonInner,
      look: "blank",
      grow: !1,
      fullWidth: !1,
      size: "none",
      onClick: e.onBack,
      children: (0, r.jsx)(d.V7D, {
        className: g.backIcon
      })
    }), (0, r.jsx)(B, v({}, e))]
  })
}