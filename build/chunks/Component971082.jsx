/** Chunk was on 3091 **/
/** chunk id: 971082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk245583 = require("./245583.js");

function u(e) {
  var {
    label: t,
    visuallyHideLabel: n = false,
    className: i,
    size: u = l.EFr.SIZE_16,
    maxUsers: d = 4
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["label", "visuallyHideLabel", "className", "size", "maxUsers"]);
  let g = (0, o.Dt)();
  return (0, r.jsxs)("div", {
    className: a()(i, s.container),
    children: [(0, r.jsx)(c.Z, function(e) {
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
      "aria-labelledby": g,
      overflowCountClassName: s.overflowButton,
      size: u,
      maxUsers: d
    }, f)), n ? (0, r.jsx)(l.nn4, {
      id: g,
      children: t
    }) : (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      id: g,
      children: t
    })]
  })
}