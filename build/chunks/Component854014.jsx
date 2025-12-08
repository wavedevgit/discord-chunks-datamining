/** Chunk was on 88569 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => y
}), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk996435 = require("./996435.js"),
  Chunk950941 = require("./950941.jsx"),
  Chunk721611 = require("./721611.jsx"),
  Chunk873395 = require("./873395.js");

function b(e) {
  var t, n;
  let {
    tag: o,
    onClick: i,
    active: a,
    node: s,
    visibleContent: d,
    panelKey: b,
    listItemProps: y,
    children: p
  } = e, {
    icon: g,
    stronglyDiscouragedCustomComponent: O,
    trailing: j,
    useTitle: m
  } = s, v = null == m ? true : m();
  return (0, r.jsxs)(o, {
    "data-settings-sidebar-item": b,
    className: f.itemContainer,
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
      className: l()(f.item, {
        [f.active]: a
      }),
      onClick: i,
      children: [null != O ? (0, r.jsx)(O, {}) : (0, r.jsxs)("div", {
        className: f.itemContent,
        children: [(0, r.jsx)(g, {
          color: "currentColor",
          size: "refresh_sm",
          className: f.icon
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: v
        })]
      }), null != j && (0, r.jsx)("div", {
        className: f.itemContent,
        children: (0, r.jsx)(u.W, {
          trailing: j,
          visibleContent: d,
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

function y(e) {
  let {
    node: t,
    visibleContent: n,
    hoisted: i = false
  } = e, l = o.useMemo(() => t.layout[0], [t]), c = s.Z.useField("currentPanelKey"), u = null != c && c === (null == l ? true : l.key), f = null != l ? () => s.Z.setState({
    requestedTargetKey: l.key,
    showNavigationMobile: false
  }) : t.onClick, y = o.useMemo(() => {
    var e;
    if (!u) return null;
    let t = (null != (e = null == l ? true : l.layout.flatMap(e => e.layout)) ? e : []).filter(e => null != e.useTitle);
    return t.length > 1 ? (0, r.jsx)(d.Z, {
      categories: t
    }) : null
  }, [u, null == l ? true : l.layout]), p = i ? "li" : "div";
  return i ? (0, r.jsx)(b, {
    tag: p,
    panelKey: null == l ? true : l.key,
    onClick: f,
    active: u,
    node: t,
    visibleContent: n,
    children: y
  }) : (0, r.jsx)(a.mh, {
    id: t.key,
    children: e => (0, r.jsx)(b, {
      tag: p,
      panelKey: null == l ? true : l.key,
      onClick: f,
      active: u,
      node: t,
      visibleContent: n,
      listItemProps: e,
      children: y
    })
  })
}