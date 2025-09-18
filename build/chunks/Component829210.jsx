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
  Chunk643153 = require("./643153.js");

function f(e) {
  var t, n, l, o, s;
  let {
    node: g,
    visibleContent: f
  } = e, {
    currentPanel: O,
    navigateTo: E,
    setShowNavigationMobile: b
  } = (0, u.t)(), {
    useTitle: v,
    trailing: p,
    stronglyDiscouragedCustomTab: T
  } = g, m = v(), N = null != (o = null == p || null == (t = p.useDecoration) ? true : t.call(p)) ? o : null, j = null != (s = null == p || null == (n = p.useBadgeCount) ? true : n.call(p)) ? s : null, S = i.useMemo(() => g.layout.flatMap(e => e.layout), [g]), I = null != f && (null == p || null == (l = p.newIndicatorDismissibleContentTypes) ? true : l.includes(f)), C = (null == O ? true : O.key) === g.key, _ = () => {
    E(g.key), b(false)
  };
  return null != T ? (0, r.jsx)(T, {
    active: C,
    onClick: _
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      icon: g.icon,
      title: m,
      active: C,
      trailing: (0, r.jsx)(() => {
        if (I) {
          var e;
          return null != (e = null == p ? true : p.newIndicatorBadgeOverride) ? e : (0, r.jsx)(a.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != j && j > 0 ? (0, r.jsx)(a.mAB, {
          count: j
        }) : null != N ? N : null
      }, {}),
      onClick: _
    }), C && S.length > 1 && (0, r.jsx)(y, {
      categories: S
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
      children: (0, r.jsx)(s.animated.div, {
        className: g.thumb,
        style: f
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
            [g.active]: t === n
          }),
          children: i
        }, s)
      })
    })]
  })
}