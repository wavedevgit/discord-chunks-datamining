/** Chunk was on web.js **/
/** chunk id: 989392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk5888 = require("./5888.js");

function a(e) {
  let t = (0, r.useRef)(new Audio(e)),
    n = (0, i.e7)([o.Z], () => o.Z.volume),
    a = (0, i.e7)([o.Z], () => o.Z.isMuted);
  return () => {
    t.current.currentTime = 0, t.current.volume = a ? 0 : n, t.current.play()
  }
}