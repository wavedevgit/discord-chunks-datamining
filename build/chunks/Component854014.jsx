/** Chunk was on 75685 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => m
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk950941 = require("./950941.jsx"),
  Chunk721611 = require("./721611.jsx"),
  Chunk873395 = require("./873395.js");

function f(e) {
  let {
    onClick: t,
    active: n,
    children: l
  } = e;
  return (0, r.jsx)(a.P3F, {
    className: i()(d.item, {
      [d.active]: n
    }),
    onClick: t,
    children: l
  })
}

function m(e) {
  let {
    node: t,
    visibleContent: n
  } = e, {
    currentPanel: o,
    navigateTo: i,
    setShowNavigationMobile: m
  } = (0, s.t)(), {
    useTitle: b,
    stronglyDiscouragedCustomComponent: p,
    icon: j,
    trailing: v
  } = t, x = l.useMemo(() => t.layout[0], [t]), y = null != o && o.key === (null == x ? true : x.key), h = b(), g = null != x ? () => {
    i(x.key), m(false)
  } : t.onClick, O = l.useMemo(() => {
    var e;
    return null != (e = null == x ? true : x.layout.flatMap(e => e.layout)) ? e : []
  }, [x]);
  return null != p ? (0, r.jsxs)(f, {
    onClick: g,
    active: y,
    children: [(0, r.jsx)(p, {}), null != v && (0, r.jsx)("div", {
      className: d.itemContent,
      children: (0, r.jsx)(c.W, {
        trailing: v,
        visibleContent: n,
        isSelected: y
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f, {
      onClick: g,
      active: y,
      children: [(0, r.jsxs)("div", {
        className: d.itemContent,
        children: [(0, r.jsx)(j, {
          color: "currentColor",
          size: "refresh_sm",
          className: d.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: h
        })]
      }), null != v && (0, r.jsx)("div", {
        className: d.itemContent,
        children: (0, r.jsx)(c.W, {
          trailing: v,
          visibleContent: n,
          isSelected: y
        })
      })]
    }), y && O.length > 1 && (0, r.jsx)(u.Z, {
      categories: O
    })]
  })
}