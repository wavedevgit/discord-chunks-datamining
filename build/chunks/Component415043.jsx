/** Chunk was on 51693 **/
/** chunk id: 415043, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  H: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk342952 = require("./342952.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk457047 = require("./457047.js");

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
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function p(e) {
  let {
    label: t,
    className: n,
    size: l = s._3J.SIZE_16,
    maxUsers: o = 4
  } = e, p = f(e, ["label", "className", "size", "maxUsers"]), g = (0, c.GV)();
  return (0, r.jsxs)("div", {
    className: i()(n, u.k),
    children: [(0, r.jsx)(a.I, d({
      "aria-labelledby": g,
      overflowCountClassName: u.j,
      size: l,
      maxUsers: o
    }, p)), (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      id: g,
      children: t
    })]
  })
}

function g(e) {
  let {
    label: t,
    className: n,
    overflowCountClassName: l,
    size: c = s._3J.SIZE_16,
    maxUsers: p = 4,
    onClick: g
  } = e, m = f(e, ["label", "className", "overflowCountClassName", "size", "maxUsers", "onClick"]);
  return (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(o.m_, {
      text: t,
      asContainer: true,
      ariaHidden: true,
      children: (0, r.jsx)(s.DUT, {
        onClick: g,
        "aria-label": t,
        children: (0, r.jsx)(a.I, d({
          size: c,
          maxUsers: p,
          overflowCountClassName: i()(u.j, l),
          "aria-hidden": true
        }, m))
      })
    })
  })
}