/** Chunk was on 52199 **/
/** chunk id: 772475, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380519 = require("./380519.js");

function u(e) {
  let {
    className: t,
    count: r
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(c.zr, c.Yd, t),
    children: [(0, n.jsx)(a.nFg, {
      size: "md",
      color: "currentColor",
      className: c.Kk
    }), null != r && (0, n.jsx)(a.Text, {
      color: "none",
      className: c.U9,
      variant: "text-md/normal",
      children: r
    })]
  })
}

function d(e) {
  let {
    count: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          s = Object.getOwnPropertyNames(e);
        for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    return s
  }(e, ["count"]);
  return (0, n.jsx)(i.A, function(e) {
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
  }({
    label: o.intl.string(o.t["jNqDh/"]),
    iconComponent: e => {
      let {
        className: r
      } = e;
      return (0, n.jsx)(u, {
        className: r,
        count: t
      })
    },
    tooltipPosition: "bottom"
  }, r))
}