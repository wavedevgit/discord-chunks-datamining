/** Chunk was on 30397 **/
/** chunk id: 971082, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk245583 = require("./245583.js");

function u(e) {
  var {
    label: t,
    visuallyHideLabel: r = false,
    className: a,
    size: u = i.EFr.SIZE_16,
    maxUsers: d = 4
  } = e, f = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["label", "visuallyHideLabel", "className", "size", "maxUsers"]);
  let b = (0, l.Dt)();
  return (0, n.jsxs)("div", {
    className: o()(a, s.container),
    children: [(0, n.jsx)(c.Z, function(e) {
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
      "aria-labelledby": b,
      overflowCountClassName: s.overflowButton,
      size: u,
      maxUsers: d
    }, f)), r ? (0, n.jsx)(i.nn4, {
      id: b,
      children: t
    }) : (0, n.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      id: b,
      children: t
    })]
  })
}