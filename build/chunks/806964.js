/** Chunk was on web.js **/
/** chunk id: 806964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => l
});
var Chunk951001 = require("./951001.js"),
  Chunk265422 = require("./265422.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");
let l = {
  binds: ["mod+alt+left"],
  comboKeysBindGlobal: true,
  action() {
    var e;
    if (!a.A.isConnected()) returnfalse;
    let t = null != (e = a.A.getGuildId()) ? e : o.ME,
      n = s.A.getChannelId(t);
    return (0, i.i)(t, n), r.A.channelListScrollTo(t, a.A.getChannelId()), false
  }
}