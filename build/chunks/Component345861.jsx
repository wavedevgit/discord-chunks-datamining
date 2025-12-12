/** Chunk was on web.js **/
/** chunk id: 345861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk338637 = require("./338637.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function _(e) {
  var {
    onChange: t,
    onFileSizeError: n,
    multiple: l = false,
    disabled: u = false,
    maxFileSizeBytes: p,
    filters: _
  } = e, m = f(e, ["onChange", "onFileSizeError", "multiple", "disabled", "maxFileSizeBytes", "filters"]);
  let h = i.useRef(null),
    g = () => {
      var e;
      null == (e = h.current) || e.activateUploadDialogue()
    };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: s.imageInputContainer,
      children: (0, r.jsx)(a.ZP, {
        ref: h,
        onChange: t,
        onFileSizeError: n,
        multiple: l,
        maxFileSizeBytes: p,
        filters: _,
        disabled: u,
        tabIndex: false,
        "aria-hidden": true
      })
    }), (0, r.jsx)(o.Button, d(c({}, m), {
      disabled: u,
      onClick: g
    }))]
  })
}