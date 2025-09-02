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
  var t, n, l, o, s;
  let {
    node: g,
    visibleContent: f
  } = e, {
    currentPanel: O,
    navigateTo: v,
    setShowNavigationMobile: E
  } = (0, u.t)(), {
    useTitle: b,
    trailing: N
  } = g, p = b(), T = null != (o = null == N || null == (t = N.useDecoration) ? true : t.call(N)) ? o : null, _ = null != (s = null == N || null == (n = N.useBadgeCount) ? true : n.call(N)) ? s : null, j = i.useMemo(() => g.layout.flatMap(e => e.layout), [g]), I = null != f && (null == N || null == (l = N.newIndicatorDismissibleContentTypes) ? true : l.includes(f)), m = (null == O ? true : O.key) === g.key;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      icon: g.icon,
      title: p,
      active: m,
      trailing: (0, r.jsx)(() => {
        if (I) {
          var e;
          return null != (e = null == N ? true : N.newIndicatorBadgeOverride) ? e : (0, r.jsx)(a.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != _ && _ > 0 ? (0, r.jsx)(a.mAB, {
          count: _
        }) : null != T ? T : null
      }, {}),
      onClick: () => {
        v(g), E(false)
      }
    }), m && j.length > 1 && (0, r.jsx)(y, {
      categories: j
    })]
  })
}

function y(e) {
  let {
    categories: t
  } = e, [n, l] = i.useState(0), {
    setShowNavigationMobile: c,
    navigateTo: d
  } = (0, u.t)(), [f, y] = (0, a.q_F)(() => ({
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
      children: O.map((e, t) => {
        let {
          title: i,
          key: s,
          type: u
        } = e;
        return (0, r.jsx)(a.P3F, {
          onClick: () => {
            var e;
            return e = {
              key: s,
              type: u
            }, void(l(t), y({
              y: 36 * t
            }), c(false), d(e))
          },
          tag: "li",
          className: o()({
            [g.active]: t === n
          }),
          children: i
        }, s)
      })
    })]
  })
}