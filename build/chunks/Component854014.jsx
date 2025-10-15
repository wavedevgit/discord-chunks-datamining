/** Chunk was on 75685 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => b
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk996435 = require("./996435.js"),
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

function b(e) {
  let {
    node: t,
    visibleContent: n
  } = e, {
    useTitle: o,
    stronglyDiscouragedCustomComponent: i,
    icon: b,
    trailing: m
  } = t, v = l.useMemo(() => t.layout[0], [t]), p = s.Z.useField("currentPanel"), j = null != p && p.key === (null == v ? true : v.key), x = o(), y = null != v ? () => s.Z.setState({
    targetKey: v.key,
    showNavigationMobile: false
  }) : t.onClick, h = l.useMemo(() => {
    var e;
    return null != (e = null == v ? true : v.layout.flatMap(e => e.layout)) ? e : []
  }, [v]);
  return null != i ? (0, r.jsxs)(f, {
    onClick: y,
    active: j,
    children: [(0, r.jsx)(i, {}), null != m && (0, r.jsx)("div", {
      className: d.itemContent,
      children: (0, r.jsx)(c.W, {
        trailing: m,
        visibleContent: n,
        isSelected: j
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f, {
      onClick: y,
      active: j,
      children: [(0, r.jsxs)("div", {
        className: d.itemContent,
        children: [(0, r.jsx)(b, {
          color: "currentColor",
          size: "refresh_sm",
          className: d.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: x
        })]
      }), null != m && (0, r.jsx)("div", {
        className: d.itemContent,
        children: (0, r.jsx)(c.W, {
          trailing: m,
          visibleContent: n,
          isSelected: j
        })
      })]
    }), j && h.length > 1 && (0, r.jsx)(u.Z, {
      categories: h
    })]
  })
}