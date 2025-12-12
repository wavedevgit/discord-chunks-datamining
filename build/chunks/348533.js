/** Chunk was on web.js **/
/** chunk id: 348533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  useCallback: () => l,
  useCallbackOne: () => a,
  useMemo: () => s,
  useMemoOne: () => o
});
var Chunk473749 = require("./473749.js");

function i(e, t) {
  if (e.length !== t.length) returnfalse;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n]) returnfalse;
  returntrue
}

function o(e, t) {
  var n = (0, r.useState)(function() {
      return {
        inputs: t,
        result: e()
      }
    })[0],
    o = (0, r.useRef)(true),
    a = (0, r.useRef)(n),
    s = o.current || t && a.current.inputs && i(t, a.current.inputs) ? a.current : {
      inputs: t,
      result: e()
    };
  return (0, r.useEffect)(function() {
    o.current = false, a.current = s
  }, [s]), s.result
}

function a(e, t) {
  return o(function() {
    return e
  }, t)
}
var s = o,
  l = a