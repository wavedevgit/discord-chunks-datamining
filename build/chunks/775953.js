/** Chunk was on web.js **/
/** chunk id: 775953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SE: () => u
});
var Chunk68133 = require("./68133.js"),
  Chunk431462 = require("./431462.js"),
  Chunk51466 = require("./51466.js"),
  Chunk754396 = require("./754396.js"),
  Chunk961742 = require("./961742.js");
async function l(e, t = {}) {
  let {
    width: n,
    height: c
  } = (0, s.Ad)(e, t), u = await (0, r.s)(e, t, true);
  return await (0, a.Y)(u, t), await (0, i.A)(u, t), (0, o.b)(u, t), await (0, s.P9)(u, n, c)
}
async function c(e, t = {}) {
  let {
    width: n,
    height: r
  } = (0, s.Ad)(e, t), i = await l(e, t), o = await (0, s.Bi)(i), a = document.createElement("canvas"), u = a.getContext("2d"), d = t.pixelRatio || (0, s.mX)(), f = t.canvasWidth || n, _ = t.canvasHeight || r;
  return a.width = f * d, a.height = _ * d, t.skipAutoScale || (0, s.Nv)(a), a.style.width = `${f}`, a.style.height = `${_}`, t.backgroundColor && (u.fillStyle = t.backgroundColor, u.fillRect(0, 0, a.width, a.height)), u.drawImage(o, 0, 0, a.width, a.height), a
}
async function u(e, t = {}) {
  let n = await c(e, t);
  return await (0, s._c)(n)
}