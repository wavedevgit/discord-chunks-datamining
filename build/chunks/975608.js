/** Chunk was on web.js **/
/** chunk id: 975608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk960048 = require("./960048.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
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

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = (e, t, n, o, s) => {
  let c = (0, r.useRef)(false),
    u = {
      componentName: e,
      sentryErrorOptions: s,
      stateToCapture: o
    },
    d = (0, r.useRef)(u);
  (0, r.useEffect)(() => {
    d.current = u
  }), (0, r.useEffect)(() => {
    let {
      componentName: e,
      sentryErrorOptions: r,
      stateToCapture: o
    } = d.current;
    if (t && !c.current) {
      c.current = true;
      let t = setTimeout(() => {
        let t = Error("".concat(e, " is taking too long to load."));
        i.Z.setExtra({
          loadingState: o,
          loadingTimeSeconds: n
        }), i.Z.captureException(t, l(a({}, r), {
          tags: a({}, null == r ? true : r.tags)
        }))
      }, 1e3 * n);
      return () => {
        clearTimeout(t)
      }
    }
  }, [t, n])
}