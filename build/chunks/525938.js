/** Chunk was on web.js **/
/** chunk id: 525938, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C8: () => i,
  dK: () => a,
  mq: () => o
});
var Chunk647438 = require("./647438.js"),
  i = Chunk647438.createContext(),
  o = Chunk647438.createContext();

function a(e) {
  var t = e.children,
    n = r.useState(null),
    a = n[0],
    s = n[1],
    l = r.useRef(false);
  r.useEffect(function() {
    return function() {
      l.current = true
    }
  }, []);
  var c = r.useCallback(function(e) {
    l.current || s(e)
  }, []);
  return r.createElement(i.Provider, {
    value: a
  }, r.createElement(o.Provider, {
    value: c
  }, t))
}