/** Chunk was on 21940 **/
/** chunk id: 188180, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  X: () => p
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

function d(e) {
  var t, r;
  let {
    tag: l,
    onClick: o,
    active: i,
    node: s,
    visibleContent: u,
    panelKey: f,
    listItemProps: d,
    children: p
  } = e, {
    icon: g,
    StronglyDiscouragedCustomComponent: O,
    trailing: j,
    useTitle: m
  } = s, h = null == m ? true : m();
  return (0, n.jsxs)(l, {
    "data-settings-sidebar-item": f,
    className: b.DB,
    children: [(0, n.jsxs)(c.DUT, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, d), r = r = {
      className: a()(b.AS, {
        [b.vu]: i
      }),
      onClick: o,
      children: [null != O ? (0, n.jsx)(O, {}) : (0, n.jsxs)("div", {
        className: b.Ly,
        children: [(0, n.jsx)(g, {
          color: "currentColor",
          size: "refresh_sm",
          className: b.Kk
        }), (0, n.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: h
        })]
      }), null != j && (0, n.jsx)("div", {
        className: b.Ly,
        children: (0, n.jsx)(y.Z, {
          trailing: j,
          visibleContent: u,
          isSelected: i
        })
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t)), p]
  })
}

function p(e) {
  let {
    node: t,
    visibleContent: r,
    hoisted: o = false
  } = e, a = l.useMemo(() => t.layout[0], [t]), c = u.A.useField("currentPanelKey"), y = null != c && c === (null == a ? true : a.key), b = null != a ? () => u.A.setState({
    requestedTargetKey: a.key,
    showNavigationMobile: false
  }) : t.onClick, p = l.useMemo(() => {
    if (!y || null == a || !(0, s.Iu)(a.layout)) return null;
    let e = a.layout.filter(e => null != e.useTitle || null != e.useSubnavLabel);
    return e.length > 1 ? (0, n.jsx)(f.A, {
      categories: e
    }) : null
  }, [y, a]), g = o ? "li" : "div";
  return o ? (0, n.jsx)(d, {
    tag: g,
    panelKey: null == a ? true : a.key,
    onClick: b,
    active: y,
    node: t,
    visibleContent: r,
    children: p
  }) : (0, n.jsx)(i.tG, {
    id: t.key,
    children: e => (0, n.jsx)(d, {
      tag: g,
      panelKey: null == a ? true : a.key,
      onClick: b,
      active: y,
      node: t,
      visibleContent: r,
      listItemProps: e,
      children: p
    })
  })
}