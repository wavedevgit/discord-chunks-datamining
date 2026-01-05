/** Chunk was on 60646 **/
/** chunk id: 971082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => p,
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk36563 = require("./36563.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk807438 = require("./807438.js");

function d(e) {
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
}

function f(e, t) {
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
}

function g(e) {
  var {
    label: t,
    className: n,
    size: i = c.EFr.SIZE_16,
    maxUsers: o = 4
  } = e, g = f(e, ["label", "className", "size", "maxUsers"]);
  let p = (0, s.Dt)();
  return (0, r.jsxs)("div", {
    className: a()(n, u.container),
    children: [(0, r.jsx)(l.g, d({
      "aria-labelledby": p,
      overflowCountClassName: u.overflow,
      size: i,
      maxUsers: o
    }, g)), (0, r.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      id: p,
      children: t
    })]
  })
}

function p(e) {
  var {
    label: t,
    className: n,
    overflowCountClassName: i,
    size: s = c.EFr.SIZE_16,
    maxUsers: g = 4,
    onClick: p
  } = e, b = f(e, ["label", "className", "overflowCountClassName", "size", "maxUsers", "onClick"]);
  return (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(o.u, {
      text: t,
      asContainer: true,
      ariaHidden: true,
      children: (0, r.jsx)(c.P3F, {
        onClick: p,
        "aria-label": t,
        children: (0, r.jsx)(l.g, d({
          size: s,
          maxUsers: g,
          overflowCountClassName: a()(u.overflow, i),
          "aria-hidden": true
        }, b))
      })
    })
  })
}