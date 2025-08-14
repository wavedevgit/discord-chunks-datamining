/** Chunk was on 36878 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk643153 = require("./643153.js");

function f(e) {
  let {
    node: t
  } = e, {
    history: n,
    activeIndex: s,
    pushPanel: o
  } = (0, u.t)(), r = t.useTitle(), a = l.useMemo(() => t.layout.flatMap(e => e.layout), [t]), d = n[s] === t;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      icon: t.icon,
      title: r,
      active: d,
      onClick: () => o(t)
    }), d && a.length > 1 && (0, i.jsx)(g, {
      categories: a
    })]
  })
}

function g(e) {
  let {
    categories: t
  } = e, [n, s] = l.useState(0), [u, c] = (0, a.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), f = l.useMemo(() => t.map(e => {
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
      children: (0, i.jsx)(r.animated.div, {
        className: d.thumb,
        style: u
      })
    }), (0, i.jsx)("ul", {
      children: f.map((e, t) => {
        let {
          title: l,
          key: r
        } = e;
        return (0, i.jsx)(a.P3F, {
          onClick: () => {
            s(t), c({
              y: 40 * t
            })
          },
          tag: "li",
          className: o()({
            [d.active]: t === n
          }),
          children: l
        }, r)
      })
    })]
  })
}