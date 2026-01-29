/** Chunk was on 59024 **/
/** chunk id: 188180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk963935 = require("./963935.js"),
  Chunk894858 = require("./894858.js"),
  Chunk942596 = require("./942596.jsx"),
  Chunk362205 = require("./362205.jsx"),
  Chunk71862 = require("./71862.js");

function p(e) {
  var t, n;
  let {
    tag: l,
    onClick: o,
    active: i,
    node: s,
    visibleContent: u,
    panelKey: b,
    listItemProps: p,
    children: f
  } = e, {
    icon: g,
    StronglyDiscouragedCustomComponent: m,
    trailing: h,
    useTitle: j
  } = s, O = null == j ? true : j();
  return (0, r.jsxs)(l, {
    "data-settings-sidebar-item": b,
    className: y.DB,
    children: [(0, r.jsxs)(c.DUT, (t = function(e) {
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
    }({}, p), n = n = {
      className: a()(y.AS, {
        [y.vu]: i
      }),
      onClick: o,
      children: [null != m ? (0, r.jsx)(m, {}) : (0, r.jsxs)("div", {
        className: y.Ly,
        children: [(0, r.jsx)(g, {
          color: "currentColor",
          size: "refresh_sm",
          className: y.Kk
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: O
        })]
      }), null != h && (0, r.jsx)("div", {
        className: y.Ly,
        children: (0, r.jsx)(d.Z, {
          trailing: h,
          visibleContent: u,
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
    }), t)), f]
  })
}

function f(e) {
  let {
    node: t,
    visibleContent: n,
    hoisted: o = false
  } = e, a = l.useMemo(() => t.layout[0], [t]), c = u.A.useField("currentPanelKey"), d = null != c && c === (null == a ? true : a.key), y = l.useMemo(() => {
    if (null == a || !(0, s.Iu)(a.layout)) return null;
    let e = a.layout.filter(e => null != e.useTitle || null != e.useSubnavLabel);
    return e.length > 1 ? e : null
  }, [a]), f = null != a ? () => {
    let e = c === a.key && null != y ? y[0].key : a.key;
    u.A.setState({
      requestedTargetKey: e,
      showNavigationMobile: false
    })
  } : t.onClick, g = l.useMemo(() => d && null != y ? (0, r.jsx)(b.A, {
    categories: y
  }) : null, [d, y]), m = o ? "li" : "div";
  return o ? (0, r.jsx)(p, {
    tag: m,
    panelKey: null == a ? true : a.key,
    onClick: f,
    active: d,
    node: t,
    visibleContent: n,
    children: g
  }) : (0, r.jsx)(i.tG, {
    id: t.key,
    children: e => (0, r.jsx)(p, {
      tag: m,
      panelKey: null == a ? true : a.key,
      onClick: f,
      active: d,
      node: t,
      visibleContent: n,
      listItemProps: e,
      children: g
    })
  })
}