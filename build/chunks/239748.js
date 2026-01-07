/** Chunk was on web.js **/
/** chunk id: 239748, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => l
});
var Chunk925549 = require("./925549.js"),
  Chunk475468 = require("./475468.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");
let l = {
  binds: ["mod+alt+left"],
  comboKeysBindGlobal: true,
  action() {
    var e;
    if (!a.Z.isConnected()) returnfalse;
    let t = null != (e = a.Z.getGuildId()) ? e : s.ME,
      n = o.Z.getChannelId(t);
    return (0, i.K)(t, n), r.Z.channelListScrollTo(t, a.Z.getChannelId()), false
  }
}