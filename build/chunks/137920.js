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
  let e = l.Z.getStreamerActiveStreamMetadata(),
    t = c.ZP.getVisibleGame(),
    n = null != t ? c.ZP.getGameOrTransformedSubgameForPID(t.pid) : null,
    r = u(e, n),
    i = o.Z.getApplication(r);
  return {
    runningGame: null != n ? n : true,
    runningGameApplication: null != i ? i : true
  }
}

function f() {
  let e = (0, a.e7)([l.Z], () => l.Z.getStreamerActiveStreamMetadata()),
    t = (0, a.e7)([c.ZP], () => {
      let e = c.ZP.getVisibleGame();
      return null != e ? c.ZP.getGameOrTransformedSubgameForPID(e.pid) : null
    }, [], i()),
    [n] = (0, s.Z)([u(e, t)]);
  return {
    runningGame: null != t ? t : true,
    runningGameApplication: null != n ? n : true
  }
}