/** Chunk was on web.js **/
/** chunk id: 489625, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk525405 = require("./525405.js");

function a(e, t) {
  return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
var o = "function" == typeof Object.is ? Object.is : a,
  s = Chunk525405.useSyncExternalStore,
  l = Chunk473749.useRef,
  c = Chunk473749.useEffect,
  u = Chunk473749.useMemo,
  d = Chunk473749.useDebugValue;
exports.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
  var a = l(null);
  if (null === a.current) {
    var f = {
      hasValue: false,
      value: null
    };
    a.current = f
  } else f = a.current;
  var p = s(e, (a = u(function() {
    function e(e) {
      if (!l) {
        if (l = true, a = e, e = r(e), true !== i && f.hasValue) {
          var t = f.value;
          if (i(t, e)) return s = t
        }
        return s = e
      }
      if (t = s, o(a, e)) return t;
      var n = r(e);
      return true !== i && i(t, n) ? (a = e, t) : (a = e, s = n)
    }
    var a, s, l = false,
      c = true === n ? null : n;
    return [function() {
      return e(t())
    }, null === c ? true : function() {
      return e(c())
    }]
  }, [t, n, r, i]))[0], a[1]);
  return c(function() {
    f.hasValue = true, f.value = p
  }, [p]), d(p), p
}