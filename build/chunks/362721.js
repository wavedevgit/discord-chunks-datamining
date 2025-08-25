/** Chunk was on web.js **/
/** chunk id: 362721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => d,
  wQ: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk231338 = require("./231338.js");
let s = [Chunk231338.Pl.SET_VOICE_CHANNEL_STATUS, Chunk231338.Pl.CONNECT, Chunk231338.Pl.VIEW_CHANNEL],
  l = [Chunk231338.Pl.SET_VOICE_CHANNEL_STATUS];

function c(e, t, n, r) {
  return (n ? l : s).every(n => null == r ? t.can(n, e) : o.BT({
    permission: n,
    user: r,
    context: e
  }))
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  return c(e, i.Z, t, n)
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  return (0, r.e7)([i.Z], () => c(e, i.Z, t, n), [e, t, n])
}