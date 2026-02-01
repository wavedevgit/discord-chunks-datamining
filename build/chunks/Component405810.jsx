/** Chunk was on 76719 **/
/** chunk id: 405810, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk872752 = require("./872752.js");

function a(e) {
  var t, n;
  let {
    onChange: a,
    onFileSizeError: d,
    multiple: u = false,
    disabled: c = false,
    maxFileSizeBytes: h,
    filters: p
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, i, s, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var n, i, s = {},
          r = Object.getOwnPropertyNames(e);
        for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
      }(e, t), Object.getOwnPropertySymbols)
      for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
    return r
  }(e, ["onChange", "onFileSizeError", "multiple", "disabled", "maxFileSizeBytes", "filters"]), f = s.useRef(null);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o.l,
      children: (0, i.jsx)(l.Ay, {
        ref: f,
        onChange: a,
        onFileSizeError: d,
        multiple: u,
        maxFileSizeBytes: h,
        filters: p,
        disabled: c,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, i.jsx)(r.Button, (t = function(e) {
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
    }({}, g), n = n = {
      disabled: c,
      onClick: () => {
        var e;
        null == (e = f.current) || e.activateUploadDialogue()
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}