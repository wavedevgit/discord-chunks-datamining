/** Chunk was on web.js **/
/** chunk id: 247397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S5: () => l,
  Wk: () => s,
  rR: () => a,
  uX: () => c
});
var Chunk296009 = require("./296009.js"),
  Chunk812206 = require("./812206.js"),
  Chunk388032 = require("./388032.jsx");
let a = [Chunk296009.l.APPLICATION, Chunk296009.l.FAVORITE_GAMES, Chunk296009.l.PLAYED_GAMES, Chunk296009.l.CURRENT_GAMES, Chunk296009.l.WANT_TO_PLAY_GAMES],
  s = {
    [Chunk296009.l.FAVORITE_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.sUQar8),
    [Chunk296009.l.CURRENT_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.SqNnus),
    [Chunk296009.l.WANT_TO_PLAY_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.bWSQwW),
    [Chunk296009.l.PLAYED_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.scOKET),
    [Chunk296009.l.APPLICATION]: e => {
      var t, n;
      return null != (n = null == (t = i.Z.getApplication(e.applicationId)) ? true : t.name) ? n : ""
    }
  },
  l = [Chunk296009.l.FAVORITE_GAMES],
  c = [Chunk296009.l.CURRENT_GAMES, Chunk296009.l.FAVORITE_GAMES]