/** Chunk was on web.js **/
/** chunk id: 286237, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f,
  b: () => d
}), require("./896048.js");
var Chunk812729 = require("./812729.js"),
  i = require.n(Chunk812729),
  Chunk311907 = require("./311907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk616356 = require("./616356.js"),
  Chunk15285 = require("./15285.js");

function u(e, t) {
  return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : true
}

function d() {
  let e = l.A.getStreamerActiveStreamMetadata(),
    t = c.Ay.getVisibleGame(),
    n = null != t ? c.Ay.getGameOrTransformedSubgameForPID(t.pid) : null,
    r = u(e, n),
    i = s.A.getApplication(r);
  return {
    runningGame: null != n ? n : true,
    runningGameApplication: null != i ? i : true
  }
}

function f() {
  let e = (0, a.bG)([l.A], () => l.A.getStreamerActiveStreamMetadata()),
    t = (0, a.bG)([c.Ay], () => {
      let e = c.Ay.getVisibleGame();
      return null != e ? c.Ay.getGameOrTransformedSubgameForPID(e.pid) : null
    }, [], i()),
    [n] = (0, o.A)([u(e, t)]);
  return {
    runningGame: null != t ? t : true,
    runningGameApplication: null != n ? n : true
  }
}