/** Chunk was on web.js **/
/** chunk id: 65557, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk473749 = require("./473749.js");

function i(e, t) {
  return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
var o = "function" == typeof Object.is ? Object.is : i,
  a = Chunk473749.useState,
  s = Chunk473749.useEffect,
  l = Chunk473749.useLayoutEffect,
  c = Chunk473749.useDebugValue;

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
var p = "undefined" == typeof window || true === window.document || true === window.document.createElement ? f : u;
exports.useSyncExternalStore = true !== Chunk473749.useSyncExternalStore ? Chunk473749.useSyncExternalStore : p