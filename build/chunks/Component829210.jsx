/** Chunk was on 5550 **/
/** chunk id: 829210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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

function E(e) {
  var t, n, r, s, a;
  let {
    node: _,
    visibleContent: E
  } = e, {
    currentPanel: T,
    setCurrentPanel: I,
    setShowNavigationMobile: g
  } = (0, u.t)(), {
    useTitle: O,
    trailing: A
  } = _, f = O(), S = null != (s = null == A || null == (t = A.useDecoration) ? true : t.call(A)) ? s : null, C = null != (a = null == A || null == (n = A.useBadgeCount) ? true : n.call(A)) ? a : null, v = l.useMemo(() => _.layout.flatMap(e => e.layout), [_]), y = null != E && (null == A || null == (r = A.newIndicatorDismissibleContentTypes) ? true : r.includes(E)), L = (null == T ? true : T.key) === _.key;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      icon: _.icon,
      title: f,
      active: L,
      trailing: (0, i.jsx)(() => {
        if (y) {
          var e;
          return null != (e = null == A ? true : A.newIndicatorBadgeOverride) ? e : (0, i.jsx)(o.IGR, {
            text: d.intl.string(d.t.y2b7CA)
          })
        }
        return null != C && C > 0 ? (0, i.jsx)(o.mAB, {
          count: C
        }) : null != S ? S : null
      }, {}),
      onClick: () => {
        I(_), g(false)
      }
    }), L && v.length > 1 && (0, i.jsx)(N, {
      categories: v
    })]
  })
}

function N(e) {
  let {
    categories: t
  } = e, [n, r] = l.useState(0), {
    setShowNavigationMobile: c
  } = (0, u.t)(), [d, E] = (0, o.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  })), N = l.useMemo(() => t.map(e => {
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
          title: l,
          key: a
        } = e;
        return (0, i.jsx)(o.P3F, {
          onClick: () => {
            r(t), E({
              y: 40 * t
            }), c(false)
          },
          tag: "li",
          className: s()({
            [_.active]: t === n
          }),
          children: l
        }, a)
      })
    })]
  })
}