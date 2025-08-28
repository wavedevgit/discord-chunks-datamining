/** Chunk was on 47129 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function E(e) {
  var t, n, l, o, s;
  let {
    node: _,
    visibleContent: E
  } = e, {
    currentPanel: N,
    setCurrentPanel: T,
    setShowNavigationMobile: g
  } = (0, u.t)(), {
    useTitle: O,
    trailing: I
  } = _, A = O(), C = null != (o = null == I || null == (t = I.useDecoration) ? true : t.call(I)) ? o : null, S = null != (s = null == I || null == (n = I.useBadgeCount) ? true : n.call(I)) ? s : null, y = r.useMemo(() => _.layout.flatMap(e => e.layout), [_]), b = null != E && (null == I || null == (l = I.newIndicatorDismissibleContentTypes) ? true : l.includes(E)), v = (null == N ? true : N.key) === _.key;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      icon: _.icon,
      title: A,
      active: v,
      trailing: (0, i.jsx)(() => {
        if (b) {
          var e;
          return null != (e = null == I ? true : I.newIndicatorBadgeOverride) ? e : (0, i.jsx)(a.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != S && S > 0 ? (0, i.jsx)(a.mAB, {
          count: S
        }) : null != C ? C : null
      }, {}),
      onClick: () => {
        T(_), g(false)
      }
    }), v && y.length > 1 && (0, i.jsx)(f, {
      categories: y
    })]
  })
}

function f(e) {
  let {
    categories: t
  } = e, [n, l] = r.useState(0), {
    setShowNavigationMobile: c
  } = (0, u.t)(), [d, E] = (0, a.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), f = r.useMemo(() => t.map(e => {
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
    className: _.subnav,
    children: [(0, i.jsx)("div", {
      className: _.track,
      children: (0, i.jsx)(s.animated.div, {
        className: _.thumb,
        style: d
      })
    }), (0, i.jsx)("ul", {
      children: f.map((e, t) => {
        let {
          title: r,
          key: s
        } = e;
        return (0, i.jsx)(a.P3F, {
          onClick: () => {
            l(t), E({
              y: 40 * t
            }), c(false)
          },
          tag: "li",
          className: o()({
            [_.active]: t === n
          }),
          children: r
        }, s)
      })
    })]
  })
}