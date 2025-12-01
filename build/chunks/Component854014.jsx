/** Chunk was on 88569 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => b
}), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk996435 = require("./996435.js"),
  Chunk950941 = require("./950941.jsx"),
  Chunk721611 = require("./721611.jsx"),
  Chunk873395 = require("./873395.js");

function p(e) {
  var t, n;
  let {
    tag: l,
    onClick: i,
    active: a,
    node: c,
    visibleContent: d,
    panelKey: p,
    listItemProps: b,
    children: y
  } = e, {
    icon: g,
    stronglyDiscouragedCustomComponent: v,
    trailing: m,
    useTitle: h
  } = c, x = null == h ? true : h();
  return (0, r.jsxs)(l, {
    "data-settings-sidebar-item": p,
    className: f.itemContainer,
    children: [(0, r.jsxs)(s.P3F, (t = function(e) {
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
    }({}, b), n = n = {
      className: o()(f.item, {
        [f.active]: a
      }),
      onClick: i,
      children: [null != v ? (0, r.jsx)(v, {}) : (0, r.jsxs)("div", {
        className: f.itemContent,
        children: [(0, r.jsx)(g, {
          color: "currentColor",
          size: "refresh_sm",
          className: f.icon
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: x
        })]
      }), null != m && (0, r.jsx)("div", {
        className: f.itemContent,
        children: (0, r.jsx)(u.W, {
          trailing: m,
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
    }), t)), y]
  })
}

function b(e) {
  let {
    node: t,
    visibleContent: n,
    hoisted: i = false
  } = e, o = l.useMemo(() => t.layout[0], [t]), s = c.Z.useField("currentPanelKey"), u = null != s && s === (null == o ? true : o.key), f = null != o ? () => c.Z.setState({
    requestedTargetKey: o.key,
    showNavigationMobile: false
  }) : t.onClick, b = l.useMemo(() => {
    var e;
    if (!u) return null;
    let t = (null != (e = null == o ? true : o.layout.flatMap(e => e.layout)) ? e : []).filter(e => null != e.useTitle || null != e.useNavigationTitle);
    return t.length > 1 ? (0, r.jsx)(d.Z, {
      categories: t
    }) : null
  }, [u, null == o ? true : o.layout]), y = i ? "li" : "div";
  return i ? (0, r.jsx)(p, {
    tag: y,
    panelKey: null == o ? true : o.key,
    onClick: f,
    active: u,
    node: t,
    visibleContent: n,
    children: b
  }) : (0, r.jsx)(a.mh, {
    id: t.key,
    children: e => (0, r.jsx)(p, {
      tag: y,
      panelKey: null == o ? true : o.key,
      onClick: f,
      active: u,
      node: t,
      visibleContent: n,
      listItemProps: e,
      children: b
    })
  })
}