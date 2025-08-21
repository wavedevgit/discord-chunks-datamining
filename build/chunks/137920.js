/** Chunk was on web.js **/
/** chunk id: 137920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk835473 = require("./835473.js"),
  Chunk199902 = require("./199902.js"),
  Chunk594190 = require("./594190.js");

function c() {
  let e = (0, Chunk442837.e7)([Chunk199902.Z], () => Chunk199902.Z.getStreamerActiveStreamMetadata()),
    t = (0, Chunk442837.e7)([Chunk594190.ZP], () => {
      let e = Chunk594190.ZP.getVisibleGame();
      return null != module ? Chunk594190.ZP.getGameOrTransformedSubgameForPID(module.pid) : null
    }, [], i());

  function n() {
    return null != module && null != module.id ? module.id : null != exports && null != exports.id ? exports.id : true
  }
  let [r] = (0, Chunk835473.Z)([require()]);
  return {
    runningGame: null != exports ? exports : true,
    runningGameApplication: null != Chunk348327 ? Chunk348327 : true
  }
}