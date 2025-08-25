/** Chunk was on web.js **/
/** chunk id: 597442, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => p,
  T: () => _
});
var r, Chunk647438 = require("./647438.js"),
  Chunk34415 = require("./34415.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

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
let f = null != (r = document.getElementById("app-mount")) ? r : document;

function _(e) {
  var t, n, r;
  let l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    u = (0, a.e7)([s.Z], () => s.Z.keyboardModeEnabled),
    _ = i.useRef(false);
  return _.current = !u, (0, o.ZP)(e, d(c({}, l), {
    disableReturnRef: _,
    attachTo: null != (r = null != (n = l.attachTo) ? n : null == (t = e.current) ? true : t.ownerDocument) ? r : f,
    returnRef: l.returnRef
  }))
}

function p(e) {
  return _(e.containerRef), e.children
}