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
  var t, n, l, o, a;
  let {
    node: _,
    visibleContent: E
  } = e, {
    currentPanel: g,
    setCurrentPanel: O,
    setShowNavigationMobile: I
  } = (0, u.t)(), {
    useTitle: f,
    trailing: A
  } = _, T = f(), C = null != (o = null == A || null == (t = A.useDecoration) ? true : t.call(A)) ? o : null, y = null != (a = null == A || null == (n = A.useBadgeCount) ? true : n.call(A)) ? a : null, S = r.useMemo(() => _.layout.flatMap(e => e.layout), [_]), P = null != E && (null == A || null == (l = A.newIndicatorDismissibleContentTypes) ? true : l.includes(E)), p = (null == g ? true : g.key) === _.key;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      icon: _.icon,
      title: T,
      active: p,
      trailing: (0, i.jsx)(() => {
        if (P) {
          var e;
          return null != (e = null == A ? true : A.newIndicatorBadgeOverride) ? e : (0, i.jsx)(s.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != y && y > 0 ? (0, i.jsx)(s.mAB, {
          count: y
        }) : null != C ? C : null
      }, {}),
      onClick: () => {
        O(_), I(false)
      }
    }), p && S.length > 1 && (0, i.jsx)(N, {
      categories: S
    })]
  })
}

function N(e) {
  let {
    categories: t
  } = e, [n, l] = r.useState(0), {
    setShowNavigationMobile: c
  } = (0, u.t)(), [d, E] = (0, s.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), N = r.useMemo(() => t.map(e => {
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
      children: (0, i.jsx)(a.animated.div, {
        className: _.thumb,
        style: d
      })
    }), (0, i.jsx)("ul", {
      children: N.map((e, t) => {
        let {
          title: r,
          key: a
        } = e;
        return (0, i.jsx)(s.P3F, {
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
        }, a)
      })
    })]
  })
}