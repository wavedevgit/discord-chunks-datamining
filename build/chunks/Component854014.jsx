/** Chunk was on 88569 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => p
}), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk28682 = require("./28682.js"),
  Chunk996435 = require("./996435.js"),
  Chunk950941 = require("./950941.jsx"),
  Chunk721611 = require("./721611.jsx"),
  Chunk873395 = require("./873395.js");

function y(e) {
  var t, n;
  let {
    tag: o,
    onClick: i,
    active: a,
    node: s,
    visibleContent: u,
    panelKey: f,
    listItemProps: y,
    children: p
  } = e, {
    icon: g,
    stronglyDiscouragedCustomComponent: O,
    trailing: m,
    useTitle: j
  } = s, v = null == j ? true : j();
  return (0, r.jsxs)(o, {
    "data-settings-sidebar-item": f,
    className: d.itemContainer,
    children: [(0, r.jsxs)(c.P3F, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, y), n = n = {
      className: l()(d.item, {
        [d.active]: a
      }),
      onClick: i,
      children: [null != O ? (0, r.jsx)(O, {}) : (0, r.jsxs)("div", {
        className: d.itemContent,
        children: [(0, r.jsx)(g, {
          color: "currentColor",
          size: "refresh_sm",
          className: d.icon
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: v
        })]
      }), null != m && (0, r.jsx)("div", {
        className: d.itemContent,
        children: (0, r.jsx)(b.W, {
          trailing: m,
          visibleContent: u,
          isSelected: a
        })
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), p]
  })
}

function p(e) {
  let {
    node: t,
    visibleContent: n,
    hoisted: i = false
  } = e, l = o.useMemo(() => t.layout[0], [t]), c = u.Z.useField("currentPanelKey"), b = null != c && c === (null == l ? true : l.key), d = null != l ? () => u.Z.setState({
    requestedTargetKey: l.key,
    showNavigationMobile: false
  }) : t.onClick, p = o.useMemo(() => {
    var e;
    if (!b || null == l || (0, s.sp)(l.layout)) return null;
    let t = (null != (e = null == l ? true : l.layout.flatMap(e => e.layout)) ? e : []).filter(e => null != e.useTitle);
    return t.length > 1 ? (0, r.jsx)(f.Z, {
      categories: t
    }) : null
  }, [b, l]), g = i ? "li" : "div";
  return i ? (0, r.jsx)(y, {
    tag: g,
    panelKey: null == l ? true : l.key,
    onClick: d,
    active: b,
    node: t,
    visibleContent: n,
    children: p
  }) : (0, r.jsx)(a.mh, {
    id: t.key,
    children: e => (0, r.jsx)(y, {
      tag: g,
      panelKey: null == l ? true : l.key,
      onClick: d,
      active: b,
      node: t,
      visibleContent: n,
      listItemProps: e,
      children: p
    })
  })
}