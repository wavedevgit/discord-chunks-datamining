/** Chunk was on web.js **/
/** chunk id: 246116, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => d,
  T: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk991261 = require("./991261.js"),
  Chunk213305 = require("./213305.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    o = r.useContext(a.S),
    l = null != (t = n.keyboardModeEnabled) ? t : o.keyboardModeEnabled,
    u = r.useRef(false);
  u.current = !l;
  let d = r.useMemo(() => {
      var t, r, i;
      return null != (i = null != (r = n.attachTo) ? r : null == (t = e.current) ? true : t.ownerDocument) ? i : document
    }, [n.attachTo, e]),
    f = r.useRef(null),
    _ = n.disable ? f : e;
  return (0, i.ZP)(_, c(s({}, n), {
    disableReturnRef: u,
    attachTo: d
  }))
}

function d(e) {
  let {
    keyboardModeEnabled: t
  } = e;
  return u(e.containerRef, {
    keyboardModeEnabled: t
  }), e.children
}