/** Chunk was on web.js **/
/** chunk id: 259612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o,
  W: () => i
}), require("./415506.js");
var Chunk356659 = require("./356659.js");

function i(e) {
  let t = document.createElement("canvas");
  t.width = e.width, t.height = e.height;
  let n = t.getContext("2d");
  if (null == n) throw Error("Could not create canvas context");
  return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", .9)
}
async function o(e, t) {
  let n = document.createElement("video");
  n.volume = 0, n.src = e, n.currentTime = t, await n.play(), n.pause();
  let i = Math.min(r.f_ / n.videoWidth, r.wD / n.videoHeight),
    o = n.videoWidth * i,
    a = n.videoHeight * i,
    s = document.createElement("canvas");
  s.width = o, s.height = a;
  let l = s.getContext("2d");
  if (null == l) throw Error("Could not create canvas context");
  return l.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, o, a), s.toDataURL("image/jpeg", .9)
}