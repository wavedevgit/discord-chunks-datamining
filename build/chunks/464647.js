/** Chunk was on 84335 (8a7781247bbfeb16.js) **/
n.d(t, {
  Z: () => f
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  a = n.n(l),
  o = n(97028),
  s = n(481060),
  c = n(686546),
  u = n(562558),
  d = n(894661);

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function x(e, t) {
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

function v(e) {
  let {
    game: t,
    activityLevel: n,
    hideTooltip: i
  } = e, l = t.getIconURL(24);
  if (null == l) return null;
  let a = (null == n ? void 0 : n.level) === o.m.HIGH,
    u = (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "interactive-active",
      children: t.name
    });
  return (0, r.jsx)(s.ua7, {
    text: u,
    position: "bottom",
    "aria-label": t.name,
    shouldShow: !i,
    children: e => (0, r.jsxs)("div", x(m({}, e), {
      className: d.gameIcon,
      children: [(0, r.jsx)("img", {
        className: d.gameIconImage,
        src: l,
        alt: t.name
      }), a && (0, r.jsx)(c.ZP, {
        mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
        width: 14,
        height: 14,
        className: d.gameActivityLevel,
        children: (0, r.jsx)("div", {
          className: d.gameActivityLevelInner,
          children: (0, r.jsx)(s.YqE, {
            color: s.TVs.unsafe_rawColors.ORANGE_330.css,
            width: 10,
            height: 10,
            size: "custom"
          })
        })
      })]
    }))
  })
}

function j(e) {
  let {
    games: t,
    activity: n
  } = e;
  return (0, r.jsx)("div", {
    className: d.extraGamesContainer,
    children: t.map(e => (0, r.jsxs)("div", {
      className: d.extraGameRow,
      children: [(0, r.jsx)(v, {
        game: e,
        activityLevel: n[e.id]
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "interactive-active",
        children: e.name
      })]
    }, e.id))
  })
}

function h(e) {
  let {
    game: t,
    activityLevel: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.favoriteGameContainer,
    children: [(0, r.jsx)(v, {
      game: t,
      activityLevel: n,
      hideTooltip: !0
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: t.name
    })]
  })
}

function f(e) {
  let {
    profile: t
  } = e, n = t.gameActivity, {
    gamesToDisplay: l,
    lastGameToDisplay: o,
    remainingGames: c
  } = (0, u.Z)(t), f = i.useMemo(() => {
    if (null == o) return null;
    let e = o.getIconURL(24);
    return null == e ? null : 0 === c.length ? (0, r.jsx)(v, {
      game: o,
      activityLevel: n[o.id]
    }) : (0, r.jsx)(s.ua7, {
      "aria-label": "",
      position: "bottom",
      text: (0, r.jsx)(j, {
        games: c,
        activity: n
      }),
      children: t => (0, r.jsxs)("div", x(m({}, t), {
        className: a()(d.gameIcon, d.extraGameItem),
        children: [(0, r.jsx)("img", {
          className: a()(d.gameIconImage, d.extraGameIconImage),
          src: e,
          alt: o.name
        }), (0, r.jsx)("div", {
          className: d.extraGameOverlay
        }), (0, r.jsx)("div", {
          className: d.extraGameText,
          children: (0, r.jsx)(s.Text, {
            variant: "text-xs/normal",
            children: "+".concat(c.length)
          })
        })]
      }))
    })
  }, [o, c, n]);
  return null == l || 0 === l.length ? null : 1 === l.length ? (0, r.jsx)("div", {
    className: d.container,
    children: (0, r.jsx)(h, {
      game: l[0],
      activityLevel: n[l[0].id]
    })
  }) : (0, r.jsxs)("div", {
    className: d.container,
    children: [l.map(e => (0, r.jsx)(v, {
      game: e,
      activityLevel: n[e.id]
    }, e.id)), f]
  })
}