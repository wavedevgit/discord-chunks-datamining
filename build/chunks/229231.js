/** Chunk was on web.js **/
/** chunk id: 229231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ok: () => o,
  Zc: () => s,
  _u: () => l,
  gk: () => c
});
var Chunk540185 = require("./540185.js"),
  Chunk587895 = require("./587895.js"),
  Chunk985018 = require("./985018.jsx");
let s = [Chunk540185.x.APPLICATION, Chunk540185.x.FAVORITE_GAMES, Chunk540185.x.PLAYED_GAMES, Chunk540185.x.CURRENT_GAMES, Chunk540185.x.WANT_TO_PLAY_GAMES],
  o = {
    [Chunk540185.x.FAVORITE_GAMES]: () => a.intl.string(a.t.sUQar8),
    [Chunk540185.x.CURRENT_GAMES]: () => a.intl.string(a.t.SqNnus),
    [Chunk540185.x.WANT_TO_PLAY_GAMES]: () => a.intl.string(a.t.bWSQwW),
    [Chunk540185.x.PLAYED_GAMES]: () => a.intl.string(a.t.scOKET),
    [Chunk540185.x.APPLICATION]: e => {
      var t, n;
      return null != (t = null == (n = i.A.getApplication(e.applicationId)) ? true : n.name) ? t : ""
    }
  },
  l = [Chunk540185.x.FAVORITE_GAMES],
  c = [Chunk540185.x.CURRENT_GAMES, Chunk540185.x.FAVORITE_GAMES]