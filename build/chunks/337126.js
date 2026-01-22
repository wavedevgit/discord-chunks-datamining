/** Chunk was on web.js **/
/** chunk id: 337126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  useCallback: () => l,
  useCallbackOne: () => s,
  useMemo: () => o,
  useMemoOne: () => a
});
var Chunk64700 = require("./64700.js");

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
    s = (0, r.useRef)(n),
    o = a.current || t && s.current.inputs && i(t, s.current.inputs) ? s.current : {
      inputs: t,
      result: e()
    };
  return (0, r.useEffect)(function() {
    a.current = false, s.current = o
  }, [o]), o.result
}

function s(e, t) {
  return a(function() {
    return e
  }, t)
}
var o = a,
  l = s