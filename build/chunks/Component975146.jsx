/** Chunk was on 54157 **/
/** chunk id: 975146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk59213 = require("./59213.js");

function u(e) {
  let {
    className: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(c.root, c.comboIcon, t),
    children: [(0, r.jsx)(a.BFJ, {
      size: "md",
      color: "currentColor",
      className: c.icon
    }), null != n && (0, r.jsx)(a.Text, {
      color: "none",
      className: c.count,
      variant: "text-md/normal",
      children: n
    })]
  })
}

function d(e) {
  var {
    count: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, s = function(e, t) {
      if (null == e) return {};
      var n, r, s = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
      return s
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
    }
    return s
  }(e, ["count"]);
  return (0, r.jsx)(i.Z, function(e) {
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
    label: o.intl.string(o.t.jNqDh4),
    iconComponent: e => {
      let {
        className: n
      } = e;
      return (0, r.jsx)(u, {
        className: n,
        count: t
      })
    },
    tooltipPosition: "bottom"
  }, n))
}