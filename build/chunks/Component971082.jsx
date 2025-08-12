/** Chunk was on 11776 **/
/** chunk id: 971082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk448968 = require("./448968.js");

function d(e) {
  var {
    label: t,
    visuallyHideLabel: n = false,
    className: l,
    size: d = o.EFr.SIZE_16,
    maxUsers: u = 4
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["label", "visuallyHideLabel", "className", "size", "maxUsers"]);
  let p = (0, a.Dt)();
  return (0, r.jsxs)("div", {
    className: i()(l, s.container),
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
      "aria-labelledby": p,
      overflowCountClassName: s.overflowButton,
      size: d,
      maxUsers: u
    }, f)), n ? (0, r.jsx)(o.nn4, {
      id: p,
      children: t
    }) : (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      id: p,
      children: t
    })]
  })
}