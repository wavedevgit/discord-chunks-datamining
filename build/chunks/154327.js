/** Chunk was on web.js **/
/** chunk id: 154327, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js");

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

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
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
  let e = (0, r.useRef)(null),
    t = (0, r.useRef)(l),
    n = (0, r.useCallback)(() => {
      let {
        current: n
      } = e, {
        dirty: r
      } = t.current;
      if (null == n || 0 === r) return t.current;
      if (1 === r) {
        let {
          scrollTop: e,
          scrollLeft: r
        } = n;
        t.current = o(a({}, t.current), {
          scrollTop: e,
          scrollLeft: r,
          dirty: 0
        })
      } else {
        let {
          scrollTop: e,
          scrollLeft: r,
          scrollHeight: i,
          scrollWidth: a,
          offsetHeight: s,
          offsetWidth: o
        } = n;
        t.current = {
          scrollTop: e,
          scrollLeft: r,
          scrollHeight: i,
          scrollWidth: a,
          offsetHeight: s,
          offsetWidth: o,
          dirty: 0
        }
      }
      return t.current
    }, []);
  return {
    scrollerRef: e,
    scrollerState: t,
    getScrollerState: n
  }
}