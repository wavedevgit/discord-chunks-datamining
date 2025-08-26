/** Chunk was on 76210 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  var t, n, r, s, a;
  let {
    node: T,
    visibleContent: O
  } = e, {
    currentPanel: N,
    setCurrentPanel: I,
    setShowNavigationMobile: E
  } = (0, u.t)(), {
    useTitle: g,
    trailing: _
  } = T, v = g(), C = null != (s = null == _ || null == (t = _.useDecoration) ? true : t.call(_)) ? s : null, S = null != (a = null == _ || null == (n = _.useBadgeCount) ? true : n.call(_)) ? a : null, m = i.useMemo(() => T.layout.flatMap(e => e.layout), [T]), A = null != O && (null == _ || null == (r = _.newIndicatorDismissibleContentTypes) ? true : r.includes(O)), j = (null == N ? true : N.key) === T.key;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Z, {
      icon: T.icon,
      title: v,
      active: j,
      trailing: (0, l.jsx)(() => {
        if (A) {
          var e;
          return null != (e = null == _ ? true : _.newIndicatorBadgeOverride) ? e : (0, l.jsx)(o.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != S && S > 0 ? (0, l.jsx)(o.mAB, {
          count: S
        }) : null != C ? C : null
      }, {}),
      onClick: () => {
        I(T), E(false)
      }
    }), j && m.length > 1 && (0, l.jsx)(f, {
      categories: m
    })]
  })
}

function f(e) {
  let {
    categories: t
  } = e, [n, r] = i.useState(0), {
    setShowNavigationMobile: c
  } = (0, u.t)(), [d, O] = (0, o.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), f = i.useMemo(() => t.map(e => {
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
    className: T.subnav,
    children: [(0, l.jsx)("div", {
      className: T.track,
      children: (0, l.jsx)(a.animated.div, {
        className: T.thumb,
        style: d
      })
    }), (0, l.jsx)("ul", {
      children: f.map((e, t) => {
        let {
          title: i,
          key: a
        } = e;
        return (0, l.jsx)(o.P3F, {
          onClick: () => {
            r(t), O({
              y: 40 * t
            }), c(false)
          },
          tag: "li",
          className: s()({
            [T.active]: t === n
          }),
          children: i
        }, a)
      })
    })]
  })
}