/** Chunk was on web.js **/
/** chunk id: 166842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C8: () => i,
  dK: () => o,
  mq: () => a
});
var Chunk73800 = require("./73800.js"),
  i = Chunk73800.createContext(),
  a = Chunk73800.createContext();

function o(e) {
  var t = e.children,
    n = r.useState(null),
    o = n[0],
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
    value: o
  }, r.createElement(a.Provider, {
    value: c
  }, t))
}