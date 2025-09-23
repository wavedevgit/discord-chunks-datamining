/** Chunk was on web.js **/
/** chunk id: 762364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _,
  T: () => f
});
var r, Chunk647438 = require("./647438.js"),
  Chunk34415 = require("./34415.js"),
  Chunk213305 = require("./213305.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = null != (r = document.getElementById("app-mount")) ? r : document;

function f(e) {
  var t, n, r;
  let s = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      keyboardModeEnabled: c
    } = i.useContext(o.S),
    f = i.useRef(false);
  return f.current = !c, (0, a.ZP)(e, u(l({}, s), {
    disableReturnRef: f,
    attachTo: null != (r = null != (n = s.attachTo) ? n : null == (t = e.current) ? true : t.ownerDocument) ? r : d,
    returnRef: s.returnRef
  }))
}

function _(e) {
  return f(e.containerRef), e.children
}