/** Chunk was on web.js **/
/** chunk id: 701223, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk647438 = require("./647438.js"),
  Chunk13826 = require("./13826.js");

function o(e, t) {
  return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
var a = "function" == typeof Object.is ? Object.is : o,
  s = Chunk13826.useSyncExternalStore,
  l = Chunk647438.useRef,
  c = Chunk647438.useEffect,
  u = Chunk647438.useMemo,
  d = Chunk647438.useDebugValue;
exports.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
  var o = l(null);
  if (null === o.current) {
    var f = {
      hasValue: false,
      value: null
    };
    o.current = f
  } else f = o.current;
  var _ = s(e, (o = u(function() {
    function e(e) {
      if (!l) {
        if (l = true, o = e, e = r(e), true !== i && f.hasValue) {
          var t = f.value;
          if (i(t, e)) return s = t
        }
        return s = e
      }
      if (t = s, a(o, e)) return t;
      var n = r(e);
      return true !== i && i(t, n) ? (o = e, t) : (o = e, s = n)
    }
    var o, s, l = false,
      c = true === n ? null : n;
    return [function() {
      return e(t())
    }, null === c ? true : function() {
      return e(c())
    }]
  }, [t, n, r, i]))[0], o[1]);
  return c(function() {
    f.hasValue = true, f.value = _
  }, [_]), d(_), _
}