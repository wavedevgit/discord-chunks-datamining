/** Chunk was on 20941 **/
/** chunk id: 181380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk719718 = require("./719718.js");

function i(e) {
  let t = (0, r.useRef)(new Audio(e)),
    n = (0, l.bG)([a.A], () => a.A.volume),
    i = (0, l.bG)([a.A], () => a.A.isMuted);
  return () => {
    t.current.currentTime = 0, t.current.volume = i ? 0 : n, t.current.play()
  }
}