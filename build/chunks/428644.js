/** Chunk was on web.js **/
/** chunk id: 428644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk728458 = require("./728458.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = (e, t, n, a, o) => {
  let c = (0, r.useRef)(false),
    u = {
      componentName: e,
      sentryErrorOptions: o,
      stateToCapture: a
    },
    d = (0, r.useRef)(u);
  (0, r.useEffect)(() => {
    d.current = u
  }), (0, r.useEffect)(() => {
    let {
      componentName: e,
      sentryErrorOptions: r,
      stateToCapture: a
    } = d.current;
    if (t && !c.current) {
      c.current = true;
      let t = setTimeout(() => {
        let t = Error("".concat(e, " is taking too long to load."));
        i.A.setExtra({
          loadingState: a,
          loadingTimeSeconds: n
        }), i.A.captureException(t, l(s({}, r), {
          tags: s({}, null == r ? true : r.tags)
        }))
      }, 1e3 * n);
      return () => {
        clearTimeout(t)
      }
    }
  }, [t, n])
}