/** Chunk was on 47129 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk6383 = require("./6383.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk28682 = require("./28682.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk643153 = require("./643153.js");

function y(e) {
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

function E(e) {
  let {
    useCount: t
  } = e, n = t();
  return 0 === n ? null : (0, r.jsx)(a.mAB, {
    count: n
  })
}

function b(e) {
  let {
    dismissibleContentTypes: t,
    badgeComponent: n,
    visibleContent: i
  } = e, l = null != i && t.includes(i), o = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(a.IGR, {
    text: g.intl.string(g.t.y2b7CA)
  });
  return l ? o : null
}

function p(e) {
  let {
    useDecoration: t,
    visibleContent: n
  } = e;
  return t(n)
}

function v(e) {
  let {
    trailing: t,
    visibleContent: n
  } = e;
  if (null == t) return null;
  switch (t.type) {
    case c.PU.BADGE_COUNT:
      return (0, r.jsx)(E, y({}, t));
    case c.PU.BADGE_NEW:
      return (0, r.jsx)(b, O(y({}, t), {
        visibleContent: n
      }));
    case c.PU.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, r.jsx)(p, O(y({}, t), {
        visibleContent: n
      }))
  }
}

function T(e) {
  let {
    node: t,
    visibleContent: n
  } = e, {
    currentPanel: l,
    navigateTo: o,
    setShowNavigationMobile: s
  } = (0, u.t)(), {
    useTitle: a,
    trailing: c,
    stronglyDiscouragedCustomTab: g
  } = t, f = a(), y = i.useMemo(() => t.layout.flatMap(e => e.layout), [t]), O = (null == l ? true : l.key) === t.key, E = () => {
    o(t.key), s(false)
  };
  return null != g ? (0, r.jsx)(g, {
    active: O,
    onClick: E
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z, {
      icon: t.icon,
      title: f,
      active: O,
      trailing: (0, r.jsx)(v, {
        trailing: c,
        visibleContent: n
      }),
      onClick: E
    }), O && y.length > 1 && (0, r.jsx)(S, {
      categories: y
    })]
  })
}

function S(e) {
  let {
    categories: t
  } = e, [n, l] = i.useState(0), {
    setShowNavigationMobile: c,
    navigateTo: d
  } = (0, u.t)(), [g, y] = (0, a.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), O = i.useMemo(() => t.map(e => {
    var t;
    return {
      title: null == (t = e.useTitle) ? true : t.call(e),
      key: e.key
    }
  }).filter(e => {
    let {
      title: t
    } = e;
    return null != t
  }), [t]);
  return (0, r.jsxs)("div", {
    className: f.subnav,
    children: [(0, r.jsx)("div", {
      className: f.track,
      children: (0, r.jsx)(s.animated.div, {
        className: f.thumb,
        style: g
      })
    }), (0, r.jsx)("ul", {
      children: O.map((e, t) => {
        let {
          title: i,
          key: s
        } = e;
        return (0, r.jsx)(a.P3F, {
          onClick: () => {
            l(t), y({
              y: 36 * t
            }), c(false), d(s)
          },
          tag: "li",
          className: o()({
            [f.active]: t === n
          }),
          children: i
        }, s)
      })
    })]
  })
}