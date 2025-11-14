/** Chunk was on 16985 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => p
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk996435 = require("./996435.js"),
  Chunk950941 = require("./950941.jsx"),
  Chunk721611 = require("./721611.jsx"),
  Chunk873395 = require("./873395.js");

function b(e) {
  var t, n;
  let {
    onClick: l,
    active: i,
    node: a,
    visibleContent: s,
    itemProps: d
  } = e, {
    icon: b,
    stronglyDiscouragedCustomComponent: p,
    trailing: y,
    useTitle: j
  } = a, m = null == j ? true : j();
  return (0, r.jsxs)(c.P3F, (t = function(e) {
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
  }({
    className: o()(f.item, {
      [f.active]: i
    }),
    onClick: l
  }, d), n = n = {
    children: [null != p ? (0, r.jsx)(p, {}) : (0, r.jsxs)("div", {
      className: f.itemContent,
      children: [(0, r.jsx)(b, {
        color: "currentColor",
        size: "refresh_sm",
        className: f.icon
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "currentColor",
        children: m
      })]
    }), null != y && (0, r.jsx)("div", {
      className: f.itemContent,
      children: (0, r.jsx)(u.W, {
        trailing: y,
        visibleContent: s,
        isSelected: i
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
  }), t))
}

function p(e) {
  let {
    node: t,
    visibleContent: n,
    hoisted: i = false
  } = e, o = l.useMemo(() => t.layout[0], [t]), c = s.Z.useField("currentPanelKey"), u = null != c && c === (null == o ? true : o.key), f = null != o ? () => s.Z.setState({
    targetKey: o.key,
    showNavigationMobile: false
  }) : t.onClick, p = l.useMemo(() => {
    var e;
    return (null != (e = null == o ? true : o.layout.flatMap(e => e.layout)) ? e : []).filter(e => null != e.useTitle || null != e.useNavigationTitle)
  }, [o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [i ? (0, r.jsx)("li", {
      children: (0, r.jsx)(b, {
        onClick: f,
        active: u,
        node: t,
        visibleContent: n
      })
    }) : (0, r.jsx)(a.mh, {
      id: t.key,
      children: e => (0, r.jsx)(b, {
        onClick: f,
        active: u,
        node: t,
        visibleContent: n,
        itemProps: e
      })
    }), u && p.length > 1 && (0, r.jsx)(d.Z, {
      categories: p
    })]
  })
}