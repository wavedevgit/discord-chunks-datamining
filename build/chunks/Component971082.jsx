/** Chunk was on 27069 **/
/** chunk id: 971082, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk245583 = require("./245583.js");

function u(e) {
  var {
    label: t,
    visuallyHideLabel: r = false,
    className: l,
    size: u = a.EFr.SIZE_16,
    maxUsers: d = 4
  } = e, f = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["label", "visuallyHideLabel", "className", "size", "maxUsers"]);
  let g = (0, c.Dt)();
  return (0, n.jsxs)("div", {
    className: i()(l, s.container),
    children: [(0, n.jsx)(o.Z, function(e) {
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
      "aria-labelledby": g,
      overflowCountClassName: s.overflowButton,
      size: u,
      maxUsers: d
    }, f)), r ? (0, n.jsx)(a.nn4, {
      id: g,
      children: t
    }) : (0, n.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      id: g,
      children: t
    })]
  })
}