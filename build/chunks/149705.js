/** Chunk was on 45620 **/
/** chunk id: 149705, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  a: () => s
});
var Chunk663042 = require("./663042.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let i = {
    skus: [],
    currentPage: 0,
    totalCount: 0,
    hasMorePages: false,
    searchError: null,
    isFetchingResults: false
  },
  s = (0, Chunk663042.U)(e => o(l({}, i), {
    onSetResponse: t => {
      let n = Math.floor(t.pageOffset / t.pageLimit) + 1;
      e(o(l({}, t), {
        currentPage: n
      }))
    },
    setSearchError: t => {
      e(o(l({}, i), {
        searchError: t
      }))
    },
    setIsFetchingResults: t => {
      e({
        isFetchingResults: t
      })
    },
    clearError: () => {
      e({
        searchError: null
      })
    },
    clear: () => {
      e(l({}, i))
    }
  }))