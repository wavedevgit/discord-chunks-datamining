/** Chunk was on web.js **/
/** chunk id: 377477, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk73800 = require("./73800.js"),
  Chunk544699 = require("./544699.js");

function o(e, t) {
  return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
var a = "function" == typeof Object.is ? Object.is : o,
  s = Chunk544699.useSyncExternalStore,
  l = Chunk73800.useRef,
  c = Chunk73800.useEffect,
  u = Chunk73800.useMemo,
  d = Chunk73800.useDebugValue;
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