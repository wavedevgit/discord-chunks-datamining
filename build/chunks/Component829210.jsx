/** Chunk was on 47129 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk938288 = require("./938288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk503631 = require("./503631.js");

function f(e) {
  var t, n, l, o, a;
  let {
    node: g,
    visibleContent: f
  } = e, {
    currentPanel: O,
    navigateTo: E,
    setShowNavigationMobile: v
  } = (0, u.t)(), {
    useTitle: T,
    trailing: b,
    stronglyDiscouragedCustomTab: N
  } = g, p = T(), I = null != (o = null == b || null == (t = b.useDecoration) ? true : t.call(b)) ? o : null, C = null != (a = null == b || null == (n = b.useBadgeCount) ? true : n.call(b)) ? a : null, m = i.useMemo(() => g.layout.flatMap(e => e.layout), [g]), j = null != f && (null == b || null == (l = b.newIndicatorDismissibleContentTypes) ? true : l.includes(f)), S = (null == O ? true : O.key) === g.key, _ = () => {
    E(g.key), v(false)
  };
  return null != N ? (0, r.jsx)(N, {
    active: S,
    onClick: _
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      icon: g.icon,
      title: p,
      active: S,
      trailing: (0, r.jsx)(() => {
        if (j) {
          var e;
          return null != (e = null == b ? true : b.newIndicatorBadgeOverride) ? e : (0, r.jsx)(s.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != C && C > 0 ? (0, r.jsx)(s.mAB, {
          count: C
        }) : null != I ? I : null
      }, {}),
      onClick: _
    }), S && m.length > 1 && (0, r.jsx)(y, {
      categories: m
    })]
  })
}

function y(e) {
  let {
    categories: t
  } = e, [n, l] = i.useState(0), {
    setShowNavigationMobile: c,
    navigateTo: d
  } = (0, u.t)(), [f, y] = (0, s.q_F)(() => ({
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
    className: g.subnav,
    children: [(0, r.jsx)("div", {
      className: g.track,
      children: (0, r.jsx)(a.animated.div, {
        className: g.thumb,
        style: f
      })
    }), (0, r.jsx)("ul", {
      children: O.map((e, t) => {
        let {
          title: i,
          key: a
        } = e;
        return (0, r.jsx)(s.P3F, {
          onClick: () => {
            l(t), y({
              y: 36 * t
            }), c(false), d(a)
          },
          tag: "li",
          className: o()({
            [g.active]: t === n
          }),
          children: i
        }, a)
      })
    })]
  })
}