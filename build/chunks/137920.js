/** Chunk was on web.js **/
/** chunk id: 137920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => d,
  Z: () => f
}), require("./388685.js");
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk199902 = require("./199902.js"),
  Chunk594190 = require("./594190.js");

function u(e, t) {
  return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : true
}

function d() {
  let e = Chunk199902.Z.getStreamerActiveStreamMetadata(),
    t = Chunk594190.ZP.getVisibleGame(),
    n = null != exports ? Chunk594190.ZP.getGameOrTransformedSubgameForPID(exports.pid) : null,
    r = u(module, require),
    i = Chunk812206.Z.getApplication(Chunk348327);
  return {
    runningGame: null != require ? require : true,
    runningGameApplication: null != i ? i : true
  }
}

function f() {
  let e = (0, Chunk442837.e7)([Chunk199902.Z], () => Chunk199902.Z.getStreamerActiveStreamMetadata()),
    t = (0, Chunk442837.e7)([Chunk594190.ZP], () => {
      let e = Chunk594190.ZP.getVisibleGame();
      return null != module ? Chunk594190.ZP.getGameOrTransformedSubgameForPID(module.pid) : null
    }, [], i()),
    [n] = (0, Chunk835473.Z)([u(module, exports)]);
  return {
    runningGame: null != exports ? exports : true,
    runningGameApplication: null != require ? require : true
  }
}