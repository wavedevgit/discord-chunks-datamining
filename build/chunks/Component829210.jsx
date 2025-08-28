/** Chunk was on 47129 **/
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
  Chunk388032 = require("./388032.jsx"),
  Chunk643153 = require("./643153.js");

function f(e) {
  var t, n, i, o, s;
  let {
    node: g,
    visibleContent: f
  } = e, {
    currentPanel: v,
    navigateTo: E,
    setShowNavigationMobile: O
  } = (0, u.t)(), {
    useTitle: N,
    trailing: b
  } = g, T = N(), _ = null != (o = null == b || null == (t = b.useDecoration) ? true : t.call(b)) ? o : null, I = null != (s = null == b || null == (n = b.useBadgeCount) ? true : n.call(b)) ? s : null, p = l.useMemo(() => g.layout.flatMap(e => e.layout), [g]), m = null != f && (null == b || null == (i = b.newIndicatorDismissibleContentTypes) ? true : i.includes(f)), S = (null == v ? true : v.key) === g.key;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      icon: g.icon,
      title: T,
      active: S,
      trailing: (0, r.jsx)(() => {
        if (m) {
          var e;
          return null != (e = null == b ? true : b.newIndicatorBadgeOverride) ? e : (0, r.jsx)(a.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != I && I > 0 ? (0, r.jsx)(a.mAB, {
          count: I
        }) : null != _ ? _ : null
      }, {}),
      onClick: () => {
        E(g), O(false)
      }
    }), S && p.length > 1 && (0, r.jsx)(y, {
      categories: p
    })]
  })
}

function y(e) {
  let {
    categories: t
  } = e, [n, i] = l.useState(0), {
    setShowNavigationMobile: c,
    navigateTo: d
  } = (0, u.t)(), [f, y] = (0, a.q_F)(() => ({
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
      key: e.key,
      type: e.type
    }
  }).filter(e => {
    let {
      title: t
    } = e;
    return null != t
  }), [t]);
  return (0, r.jsxs)("div", {
    className: g.subnav,
    children: [(0, r.jsx)("div", {
      className: g.track,
      children: (0, r.jsx)(s.animated.div, {
        className: g.thumb,
        style: f
      })
    }), (0, r.jsx)("ul", {
      children: v.map((e, t) => {
        let {
          title: l,
          key: s,
          type: u
        } = e;
        return (0, r.jsx)(a.P3F, {
          onClick: () => {
            var e;
            return e = {
              key: s,
              type: u
            }, void(i(t), y({
              y: 36 * t
            }), c(false), d(e))
          },
          tag: "li",
          className: o()({
            [g.active]: t === n
          }),
          children: l
        }, s)
      })
    })]
  })
}