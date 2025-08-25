/** Chunk was on 76210 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk643153 = require("./643153.js");

function g(e) {
  var t, n, r, s, u;
  let {
    node: f,
    visibleContent: g
  } = e, {
    currentPanel: m,
    setCurrentPanel: j,
    setShowNavigationMobile: b
  } = (0, a.t)(), {
    useTitle: y,
    trailing: x
  } = f, p = y(), h = null != (s = null == x || null == (t = x.useDecoration) ? true : t.call(x)) ? s : null, O = null != (u = null == x || null == (n = x.useBadgeCount) ? true : n.call(x)) ? u : null, T = i.useMemo(() => f.layout.flatMap(e => e.layout), [f]), C = null != g && (null == x || null == (r = x.newIndicatorDismissibleContentTypes) ? true : r.includes(g)), N = (null == m ? true : m.key) === f.key;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Z, {
      icon: f.icon,
      title: p,
      active: N,
      trailing: (0, l.jsx)(() => {
        if (C) {
          var e;
          return null != (e = null == x ? true : x.newIndicatorBadgeOverride) ? e : (0, l.jsx)(o.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != O && O > 0 ? (0, l.jsx)(o.mAB, {
          count: O
        }) : null != h ? h : null
      }, {}),
      onClick: () => {
        j(f), b(false)
      }
    }), N && T.length > 1 && (0, l.jsx)(v, {
      categories: T
    })]
  })
}

function v(e) {
  let {
    categories: t
  } = e, [n, r] = i.useState(0), {
    setShowNavigationMobile: c
  } = (0, a.t)(), [d, g] = (0, o.q_F)(() => ({
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
    className: f.subnav,
    children: [(0, l.jsx)("div", {
      className: f.track,
      children: (0, l.jsx)(u.animated.div, {
        className: f.thumb,
        style: d
      })
    }), (0, l.jsx)("ul", {
      children: v.map((e, t) => {
        let {
          title: i,
          key: u
        } = e;
        return (0, l.jsx)(o.P3F, {
          onClick: () => {
            r(t), g({
              y: 40 * t
            }), c(false)
          },
          tag: "li",
          className: s()({
            [f.active]: t === n
          }),
          children: i
        }, u)
      })
    })]
  })
}