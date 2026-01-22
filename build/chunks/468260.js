/** Chunk was on web.js **/
/** chunk id: 468260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk584648 = require("./584648.js");

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

function l(e, t, n, i) {
  let s = (0, r.A)(e, t, i),
    l = (e, t) => n.computeScrollPosition(e, t);
  return o(a({}, s), {
    getScrollPosition: l,
    isItemVisible(e, n) {
      let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
        [i, a] = l(e, n),
        s = t();
      return r ? i >= s.scrollTop && i + a <= s.scrollTop + s.offsetHeight : i + a >= s.scrollTop && i <= s.scrollTop + s.offsetHeight
    },
    scrollToIndex(e) {
      let {
        section: t,
        row: n,
        animate: r,
        callback: i,
        padding: a = 0
      } = e, [o, c] = l(t, n);
      s.scrollIntoViewRect({
        start: o,
        end: o + c,
        padding: a,
        animate: r,
        callback: i
      })
    }
  })
}