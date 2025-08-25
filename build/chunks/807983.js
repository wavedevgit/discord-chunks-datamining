/** Chunk was on web.js **/
/** chunk id: 807983, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk647438 = require("./647438.js");

function i(e, t) {
  return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
var o = "function" == typeof Object.is ? Object.is : i,
  a = Chunk647438.useState,
  s = Chunk647438.useEffect,
  l = Chunk647438.useLayoutEffect,
  c = Chunk647438.useDebugValue;

function u(e, t) {
  var n = t(),
    r = a({
      inst: {
        value: n,
        getSnapshot: t
      }
    }),
    i = r[0].inst,
    o = r[1];
  return l(function() {
    i.value = n, i.getSnapshot = t, d(i) && o({
      inst: i
    })
  }, [e, n, t]), s(function() {
    return d(i) && o({
      inst: i
    }), e(function() {
      d(i) && o({
        inst: i
      })
    })
  }, [e]), c(n), n
}

function d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !o(e, n)
  } catch (e) {
    returntrue
  }
}

function f(e, t) {
  return t()
}
var _ = "undefined" == typeof window || true === window.document || true === window.document.createElement ? f : u;
exports.useSyncExternalStore = true !== Chunk647438.useSyncExternalStore ? Chunk647438.useSyncExternalStore : _