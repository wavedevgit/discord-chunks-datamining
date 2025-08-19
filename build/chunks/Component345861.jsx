/** Chunk was on 30866 **/
/** chunk id: 345861, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx");

function s(e) {
  var n, t, {
      buttonCTA: i,
      onChange: s,
      onFileSizeError: d,
      "aria-label": u,
      multiple: _ = false,
      disabled: b = false,
      submitting: p = false,
      maxFileSizeBytes: f,
      filters: h,
      className: m
    } = e,
    g = function(e, n) {
      if (null == e) return {};
      var t, r, i = function(e, n) {
        if (null == e) return {};
        var t, r, i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
        return i
      }(e, n);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
      }
      return i
    }(e, ["buttonCTA", "onChange", "onFileSizeError", "aria-label", "multiple", "disabled", "submitting", "maxFileSizeBytes", "filters", "className"]);
  return (0, r.jsx)(l.tEY, {
    within: true,
    children: (0, r.jsxs)("div", {
      className: a()((0, o.nY)((n = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.forEach(function(n) {
            var r;
            r = t[n], n in e ? Object.defineProperty(e, n, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = r
          })
        }
        return e
      }({}, g), t = t = {
        submitting: p,
        disabled: b
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      })(Object(t)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
      }), n)), m),
      style: {
        width: "max-content"
      },
      "aria-disabled": b,
      children: [(0, r.jsx)("span", {
        "aria-hidden": true,
        children: i
      }), (0, r.jsx)(c.ZP, {
        tabIndex: 0,
        onChange: s,
        onFileSizeError: d,
        multiple: _,
        maxFileSizeBytes: f,
        filters: h,
        "aria-label": null != u ? u : i,
        disabled: b
      })]
    })
  })
}