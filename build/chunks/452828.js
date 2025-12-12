/** Chunk was on web.js **/
/** chunk id: 452828, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js");

function i(e, t, n) {
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
      i(e, t, n[t])
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

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let l = Object.freeze({
  scrollTop: 0,
  scrollLeft: 0,
  scrollHeight: 0,
  scrollWidth: 0,
  offsetHeight: 0,
  offsetWidth: 0,
  dirty: 2
});

function c() {
  let e = (0, Chunk473749.useRef)(null),
    t = (0, Chunk473749.useRef)(l),
    n = (0, Chunk473749.useCallback)(() => {
      let {
        current: n
      } = module, {
        dirty: r
      } = exports.current;
      if (null == require || 0 === Chunk473749) return exports.current;
      if (1 === Chunk473749) {
        let {
          scrollTop: e,
          scrollLeft: r
        } = require;
        exports.current = s(a({}, exports.current), {
          scrollTop: module,
          scrollLeft: Chunk473749,
          dirty: 0
        })
      } else {
        let {
          scrollTop: e,
          scrollLeft: r,
          scrollHeight: i,
          scrollWidth: a,
          offsetHeight: o,
          offsetWidth: s
        } = require;
        exports.current = {
          scrollTop: module,
          scrollLeft: Chunk473749,
          scrollHeight: i,
          scrollWidth: a,
          offsetHeight: o,
          offsetWidth: s,
          dirty: 0
        }
      }
      return exports.current
    }, []);
  return {
    scrollerRef: module,
    scrollerState: exports,
    getScrollerState: require
  }
}