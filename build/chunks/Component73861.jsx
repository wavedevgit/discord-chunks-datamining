/** Chunk was on web.js **/
/** chunk id: 73861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk189081 = require("./189081.js"),
  Chunk67480 = require("./67480.js"),
  Chunk674378 = require("./674378.js"),
  Chunk598429 = require("./598429.jsx"),
  Chunk979604 = require("./979604.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e) {
  let {
    application: t,
    fullWidth: n = false,
    size: u = "md",
    playButtonVariant: f,
    disabledVariant: _,
    hideNotLaunchable: h,
    tooltipPosition: m,
    onClick: g,
    className: E,
    source: y,
    hover: b,
    innerClassName: O
  } = e, v = {
    fullWidth: n,
    size: u,
    disabledVariant: _,
    tooltipPosition: m,
    onClick: g,
    className: E,
    hover: b,
    innerClassName: O
  }, A = (0, i.bG)([a.A], () => a.A.getActiveLibraryApplication(t.id)), I = null != A ? A.sku.id : null, S = null != I ? I : t.primarySkuId, T = (0, i.bG)([s.A], () => null != S && !s.A.didFetchingSkuFail(S));
  return null != A && (0, o.XZ)(A) ? (0, r.jsx)(c.A, p(d({}, v), {
    playButtonVariant: f,
    libraryApplication: A,
    source: y
  })) : T ? (0, r.jsx)("div", {
    children: "deprecated!"
  }) : (0, r.jsx)(l.A, p(d({}, v), {
    variant: f,
    hideNotLaunchable: h,
    applicationId: t.id
  }))
}