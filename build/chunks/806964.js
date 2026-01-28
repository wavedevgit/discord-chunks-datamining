/** Chunk was on 5606 **/
/** chunk id: 806964, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => o
});
var Chunk951001 = require("./951001.js"),
  Chunk265422 = require("./265422.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");
let o = {
  binds: ["mod+alt+left"],
  comboKeysBindGlobal: true,
  action() {
    var e;
    if (!l.A.isConnected()) returnfalse;
    let t = null != (e = l.A.getGuildId()) ? e : a.ME,
      n = s.A.getChannelId(t);
    return (0, i.i)(t, n), r.A.channelListScrollTo(t, l.A.getChannelId()), false
  }
}