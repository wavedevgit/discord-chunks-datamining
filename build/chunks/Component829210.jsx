/** Chunk was on 36878 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk643153 = require("./643153.js");

function f(e) {
  let {
    node: t
  } = e, {
    currentPanel: n,
    setCurrentPanel: r,
    setShowNavigationMobile: o
  } = (0, u.t)(), s = t.useTitle(), a = l.useMemo(() => t.layout.flatMap(e => e.layout), [t]), d = (null == n ? true : n.key) === t.key;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      icon: t.icon,
      title: s,
      active: d,
      onClick: () => {
        r(t), o(false)
      }
    }), d && a.length > 1 && (0, i.jsx)(g, {
      categories: a
    })]
  })
}

function g(e) {
  let {
    categories: t
  } = e, [n, r] = l.useState(0), {
    setShowNavigationMobile: c
  } = (0, u.t)(), [f, g] = (0, a.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), v = l.useMemo(() => t.map(e => {
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
  return (0, i.jsxs)("div", {
    className: d.subnav,
    children: [(0, i.jsx)("div", {
      className: d.track,
      children: (0, i.jsx)(s.animated.div, {
        className: d.thumb,
        style: f
      })
    }), (0, i.jsx)("ul", {
      children: v.map((e, t) => {
        let {
          title: l,
          key: s
        } = e;
        return (0, i.jsx)(a.P3F, {
          onClick: () => {
            r(t), g({
              y: 40 * t
            }), c(false)
          },
          tag: "li",
          className: o()({
            [d.active]: t === n
          }),
          children: l
        }, s)
      })
    })]
  })
}