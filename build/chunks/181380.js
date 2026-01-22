/** Chunk was on web.js **/
/** chunk id: 181380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk719718 = require("./719718.js");

function s(e) {
  let t = (0, r.useRef)(new Audio(e)),
    n = (0, i.bG)([a.A], () => a.A.volume),
    s = (0, i.bG)([a.A], () => a.A.isMuted);
  return () => {
    t.current.currentTime = 0, t.current.volume = s ? 0 : n, t.current.play()
  }
}