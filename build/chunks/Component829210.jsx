/** Chunk was on 76210 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
    setShowNavigationMobile: s
  } = (0, a.t)(), o = t.useTitle(), u = i.useMemo(() => t.layout.flatMap(e => e.layout), [t]), d = (null == n ? true : n.key) === t.key;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Z, {
      icon: t.icon,
      title: o,
      active: d,
      onClick: () => {
        r(t), s(false)
      }
    }), d && u.length > 1 && (0, l.jsx)(g, {
      categories: u
    })]
  })
}

function g(e) {
  let {
    categories: t
  } = e, [n, r] = i.useState(0), {
    setShowNavigationMobile: c
  } = (0, a.t)(), [f, g] = (0, u.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), v = i.useMemo(() => t.map(e => {
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
  return (0, l.jsxs)("div", {
    className: d.subnav,
    children: [(0, l.jsx)("div", {
      className: d.track,
      children: (0, l.jsx)(o.animated.div, {
        className: d.thumb,
        style: f
      })
    }), (0, l.jsx)("ul", {
      children: v.map((e, t) => {
        let {
          title: i,
          key: o
        } = e;
        return (0, l.jsx)(u.P3F, {
          onClick: () => {
            r(t), g({
              y: 40 * t
            }), c(false)
          },
          tag: "li",
          className: s()({
            [d.active]: t === n
          }),
          children: i
        }, o)
      })
    })]
  })
}