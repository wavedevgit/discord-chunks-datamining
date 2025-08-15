/** Chunk was on 81498 **/
/** chunk id: 345861, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx");

function u(e) {
  var t, n, {
      buttonCTA: r,
      onChange: u,
      onFileSizeError: c,
      "aria-label": d,
      multiple: h = false,
      disabled: p = false,
      submitting: g = false,
      maxFileSizeBytes: f,
      filters: v,
      className: m
    } = e,
    C = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["buttonCTA", "onChange", "onFileSizeError", "aria-label", "multiple", "disabled", "submitting", "maxFileSizeBytes", "filters", "className"]);
  return (0, i.jsx)(o.tEY, {
    within: true,
    children: (0, i.jsxs)("div", {
      className: s()((0, l.nY)((t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, C), n = n = {
        submitting: g,
        disabled: p
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)), m),
      style: {
        width: "max-content"
      },
      "aria-disabled": p,
      children: [(0, i.jsx)("span", {
        "aria-hidden": true,
        children: r
      }), (0, i.jsx)(a.ZP, {
        tabIndex: 0,
        onChange: u,
        onFileSizeError: c,
        multiple: h,
        maxFileSizeBytes: f,
        filters: v,
        "aria-label": null != d ? d : r,
        disabled: p
      })]
    })
  })
}