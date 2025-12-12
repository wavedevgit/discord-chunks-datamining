/** Chunk was on web.js **/
/** chunk id: 348533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  useCallback: () => l,
  useCallbackOne: () => o,
  useMemo: () => s,
  useMemoOne: () => a
});
var Chunk473749 = require("./473749.js");

function i(e, t) {
  if (e.length !== t.length) returnfalse;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n]) returnfalse;
  returntrue
}

function a(e, t) {
  var n = (0, r.useState)(function() {
      return {
        inputs: t,
        result: e()
      }
    })[0],
    a = (0, r.useRef)(true),
    o = (0, r.useRef)(n),
    s = a.current || t && o.current.inputs && i(t, o.current.inputs) ? o.current : {
      inputs: t,
      result: e()
    };
  return (0, r.useEffect)(function() {
    a.current = false, o.current = s
  }, [s]), s.result
}

function o(e, t) {
  return a(function() {
    return e
  }, t)
}
var s = a,
  l = o