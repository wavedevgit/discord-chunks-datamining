/** Chunk was on 47147 **/
/** chunk id: 188180, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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
    tag: o,
    onClick: a,
    active: i,
    node: s,
    visibleContent: u,
    panelKey: _,
    listItemProps: p,
    children: f
  } = e, {
    icon: y,
    StronglyDiscouragedCustomComponent: g,
    trailing: m,
    useTitle: O
  } = s, h = null == O ? true : O();
  return (0, r.jsxs)(o, {
    "data-settings-sidebar-item": _,
    className: b.DB,
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
      className: l()(b.AS, {
        [b.vu]: i
      }),
      onClick: a,
      children: [null != g ? (0, r.jsx)(g, {}) : (0, r.jsxs)("div", {
        className: b.Ly,
        children: [(0, r.jsx)(y, {
          color: "currentColor",
          size: "refresh_sm",
          className: b.Kk
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: h
        })]
      }), null != m && (0, r.jsx)("div", {
        className: b.Ly,
        children: (0, r.jsx)(d.Z, {
          trailing: m,
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
    hoisted: a = false
  } = e, l = o.useMemo(() => t.layout[0], [t]), c = u.A.useField("currentPanelKey"), d = null != c && c === (null == l ? true : l.key), b = o.useMemo(() => {
    if (null == l || !(0, s.Iu)(l.layout)) return null;
    let e = l.layout.filter(e => null != e.useTitle || null != e.useSubnavLabel);
    return e.length > 1 ? e : null
  }, [l]), f = null != l ? () => {
    let e = c === l.key && null != b ? b[0].key : l.key;
    u.A.setState({
      requestedTargetKey: e,
      showNavigationMobile: false
    })
  } : t.onClick, y = o.useMemo(() => d && null != b ? (0, r.jsx)(_.A, {
    categories: b
  }) : null, [d, b]), g = a ? "li" : "div";
  return a ? (0, r.jsx)(p, {
    tag: g,
    panelKey: null == l ? true : l.key,
    onClick: f,
    active: d,
    node: t,
    visibleContent: n,
    children: y
  }) : (0, r.jsx)(i.tG, {
    id: t.key,
    children: e => (0, r.jsx)(p, {
      tag: g,
      panelKey: null == l ? true : l.key,
      onClick: f,
      active: d,
      node: t,
      visibleContent: n,
      listItemProps: e,
      children: y
    })
  })
}