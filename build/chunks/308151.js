/** Chunk was on web.js **/
/** chunk id: 308151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./228524.js");
var Chunk64700 = require("./64700.js");
let i = Symbol();

function a(e, t) {
  let n = r.useRef(i),
    a = r.useRef(t);
  return r.useSyncExternalStore(r.useCallback(t => e(() => {
    n.current = i, t()
  }), [e]), r.useCallback(() => (a.current !== t && (a.current = t, n.current = i), n.current === i && (n.current = t()), n.current), [t]))
}