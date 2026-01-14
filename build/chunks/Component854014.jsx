/** Chunk was on 91968 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk28682 = require("./28682.js"),
  Chunk996435 = require("./996435.js"),
  Chunk950941 = require("./950941.jsx"),
  Chunk721611 = require("./721611.jsx"),
  Chunk732306 = require("./732306.js");

function y(e) {
  var t, n;
  let {
    tag: o,
    onClick: i,
    active: l,
    node: s,
    visibleContent: u,
    panelKey: d,
    listItemProps: y,
    children: p
  } = e, {
    icon: g,
    stronglyDiscouragedCustomComponent: m,
    trailing: O,
    useTitle: h
  } = s, j = null == h ? true : h();
  return (0, r.jsxs)(o, {
    "data-settings-sidebar-item": d,
    className: b.itemContainer,
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
      className: a()(b.item, {
        [b.active]: l
      }),
      onClick: i,
      children: [null != m ? (0, r.jsx)(m, {}) : (0, r.jsxs)("div", {
        className: b.itemContent,
        children: [(0, r.jsx)(g, {
          color: "currentColor",
          size: "refresh_sm",
          className: b.icon
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: j
        })]
      }), null != O && (0, r.jsx)("div", {
        className: b.itemContent,
        children: (0, r.jsx)(f.W, {
          trailing: O,
          visibleContent: u,
          isSelected: l
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
  } = e, a = o.useMemo(() => t.layout[0], [t]), c = u.Z.useField("currentPanelKey"), f = null != c && c === (null == a ? true : a.key), b = null != a ? () => u.Z.setState({
    requestedTargetKey: a.key,
    showNavigationMobile: false
  }) : t.onClick, p = o.useMemo(() => {
    if (!f || null == a || !(0, s.iU)(a.layout)) return null;
    let e = a.layout.filter(e => null != e.useTitle || null != e.useSubnavLabel);
    return e.length > 1 ? (0, r.jsx)(d.Z, {
      categories: e
    }) : null
  }, [f, a]), g = i ? "li" : "div";
  return i ? (0, r.jsx)(y, {
    tag: g,
    panelKey: null == a ? true : a.key,
    onClick: b,
    active: f,
    node: t,
    visibleContent: n,
    children: p
  }) : (0, r.jsx)(l.mh, {
    id: t.key,
    children: e => (0, r.jsx)(y, {
      tag: g,
      panelKey: null == a ? true : a.key,
      onClick: b,
      active: f,
      node: t,
      visibleContent: n,
      listItemProps: e,
      children: p
    })
  })
}