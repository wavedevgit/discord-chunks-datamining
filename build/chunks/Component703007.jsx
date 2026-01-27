/** Chunk was on 67096 **/
/** chunk id: 703007, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx");

function o(e) {
  var A, t;
  let {
    children: n,
    className: o,
    innerClassName: d,
    onChange: u,
    "aria-label": c,
    "aria-describedby": g,
    filters: f,
    multiple: p = false,
    disabled: m = false,
    submitting: v = false
  } = e, h = function(e, A) {
    if (null == e) return {};
    var t, r, n, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, A) {
        if (null == e) return {};
        var t, r, n = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
        return n
      }(e, A), Object.getOwnPropertySymbols)
      for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["children", "className", "innerClassName", "onChange", "aria-label", "aria-describedby", "filters", "multiple", "disabled", "submitting"]);
  return (0, r.jsx)(i.vN3, {
    within: true,
    children: (0, r.jsxs)("div", {
      className: l()(o, (0, a.WS)((A = function(e) {
        for (var A = 1; A < arguments.length; A++) {
          var t = null != arguments[A] ? arguments[A] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.forEach(function(A) {
            var r;
            r = t[A], A in e ? Object.defineProperty(e, A, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[A] = r
          })
        }
        return e
      }({}, h), t = t = {
        submitting: v,
        disabled: m
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : (function(e, A) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      })(Object(t)).forEach(function(e) {
        Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
      }), A))),
      "aria-disabled": m,
      children: [(0, r.jsx)("span", {
        "aria-hidden": true,
        className: d,
        children: n
      }), (0, r.jsx)(s.A, {
        tabIndex: 0,
        onChange: u,
        filters: f,
        multiple: p,
        "aria-label": c,
        "aria-describedby": g,
        disabled: m
      })]
    })
  })
}