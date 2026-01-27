/** Chunk was on web.js **/
/** chunk id: 554352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $$: () => a,
  kr: () => i,
  mS: () => o
});
var Chunk64700 = require("./64700.js"),
  i = Chunk64700.createContext(),
  a = Chunk64700.createContext();

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