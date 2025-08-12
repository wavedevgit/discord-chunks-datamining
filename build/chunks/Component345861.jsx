/** Chunk was on 72762 **/
/** chunk id: 345861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx");

function c(e) {
  var t, n, {
      buttonCTA: i,
      onChange: c,
      onFileSizeError: u,
      "aria-label": d,
      multiple: f = false,
      disabled: p = false,
      submitting: b = false,
      maxFileSizeBytes: O,
      filters: h,
      className: m
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["buttonCTA", "onChange", "onFileSizeError", "aria-label", "multiple", "disabled", "submitting", "maxFileSizeBytes", "filters", "className"]);
  return (0, r.jsx)(o.tEY, {
    within: true,
    children: (0, r.jsxs)("div", {
      className: l()((0, s.nY)((t = function(e) {
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
      }({}, g), n = n = {
        submitting: b,
        disabled: p
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)), m),
      style: {
        width: "max-content"
      },
      "aria-disabled": p,
      children: [(0, r.jsx)("span", {
        "aria-hidden": true,
        children: i
      }), (0, r.jsx)(a.ZP, {
        tabIndex: 0,
        onChange: c,
        onFileSizeError: u,
        multiple: f,
        maxFileSizeBytes: O,
        filters: h,
        "aria-label": null != d ? d : i,
        disabled: p
      })]
    })
  })
}