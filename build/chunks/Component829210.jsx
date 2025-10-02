/** Chunk was on 54573 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk28682 = require("./28682.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk503631 = require("./503631.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e, t) {
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

function j(e) {
  let {
    useCount: t
  } = e, n = t();
  return 0 === n ? null : (0, r.jsx)(s.mAB, {
    count: n
  })
}

function x(e) {
  let {
    dismissibleContentTypes: t,
    badgeComponent: n,
    visibleContent: l
  } = e, o = null != l && t.includes(l), i = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(s.IGR, {
    text: f.intl.string(f.t.y2b7CA)
  });
  return o ? i : null
}

function v(e) {
  let {
    useDecoration: t,
    visibleContent: n
  } = e;
  return t(n)
}

function y(e) {
  let {
    trailing: t,
    visibleContent: n
  } = e;
  if (null == t) return null;
  switch (t.type) {
    case u.PU.BADGE_COUNT:
      return (0, r.jsx)(j, m({}, t));
    case u.PU.BADGE_NEW:
      return (0, r.jsx)(x, p(m({}, t), {
        visibleContent: n
      }));
    case u.PU.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, r.jsx)(v, p(m({}, t), {
        visibleContent: n
      }))
  }
}

function h(e) {
  let {
    node: t,
    visibleContent: n
  } = e, {
    currentPanel: o,
    navigateTo: i,
    setShowNavigationMobile: a
  } = (0, c.t)(), {
    useTitle: s,
    trailing: u,
    stronglyDiscouragedCustomTab: f
  } = t, b = s(), m = l.useMemo(() => t.layout.flatMap(e => e.layout), [t]), p = (null == o ? true : o.key) === t.key, j = () => {
    i(t.key), a(false)
  };
  return null != f ? (0, r.jsx)(f, {
    active: p,
    onClick: j
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z, {
      icon: t.icon,
      title: b,
      active: p,
      trailing: (0, r.jsx)(y, {
        trailing: u,
        visibleContent: n
      }),
      onClick: j
    }), p && m.length > 1 && (0, r.jsx)(g, {
      categories: m
    })]
  })
}

function g(e) {
  let {
    categories: t
  } = e, [n, o] = l.useState(0), {
    setShowNavigationMobile: u,
    navigateTo: d
  } = (0, c.t)(), [f, m] = (0, s.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), p = l.useMemo(() => t.map(e => {
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
    className: b.subnav,
    children: [(0, r.jsx)("div", {
      className: b.track,
      children: (0, r.jsx)(a.animated.div, {
        className: b.thumb,
        style: f
      })
    }), (0, r.jsx)("ul", {
      children: p.map((e, t) => {
        let {
          title: l,
          key: a
        } = e;
        return (0, r.jsx)(s.P3F, {
          onClick: () => {
            o(t), m({
              y: 36 * t
            }), u(false), d(a)
          },
          tag: "li",
          className: i()({
            [b.active]: t === n
          }),
          children: l
        }, a)
      })
    })]
  })
}