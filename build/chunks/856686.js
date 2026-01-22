/** Chunk was on 59275 **/
/** chunk id: 856686, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => i
});
var Chunk353640 = require("./353640.js");

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}
let a = {
    skus: [],
    currentPage: 0,
    totalCount: 0,
    hasMorePages: false,
    searchError: null,
    isFetchingResults: false
  },
  i = (0, Chunk353640.v)(e => s(r({}, a), {
    onSetResponse: t => {
      let l = Math.floor(t.pageOffset / t.pageLimit) + 1;
      e(s(r({}, t), {
        currentPage: l
      }))
    },
    setSearchError: t => {
      e(s(r({}, a), {
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
      e(r({}, a))
    }
  }))