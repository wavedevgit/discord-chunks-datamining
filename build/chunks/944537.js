/** Chunk was on web.js **/
/** chunk id: 944537, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => c,
  n: () => u
});
var Chunk663042 = require("./663042.js"),
  Chunk731965 = require("./731965.js");

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
var c = function(e) {
  return e[e.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", e[e.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS", e
}({});
let u = (0, Chunk663042.U)(e => ({
  listings: {},
  setListing: (t, n) => (0, i.j)(() => e(e => ({
    listings: l(a({}, e.listings), {
      [t]: n(e.listings[t])
    })
  }))),
  editStateIdsForGroup: {},
  setEditStateIdsForGroup: (t, n) => (0, i.j)(() => {
    e(e => ({
      editStateIdsForGroup: l(a({}, e.editStateIdsForGroup), {
        [t]: n(e.editStateIdsForGroup[t])
      })
    }))
  })
}))