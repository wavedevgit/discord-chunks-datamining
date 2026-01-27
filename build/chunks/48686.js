/** Chunk was on web.js **/
/** chunk id: 48686, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => c,
  t: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");
let l = () => {
    let e = o.A.getVoiceChannelId();
    if (null == e) returnfalse;
    let t = i.A.getChannel(e);
    if (null == t) returnfalse;
    let n = a.A.getGuild(t.getGuildId());
    return null != n && n.features.has(s.GuildFeatures.HUB)
  },
  c = e => (0, r.bG)([o.A, i.A, a.A], () => {
    let t = o.A.getVoiceChannelId();
    if (null == t) returnfalse;
    let n = i.A.getChannel(t);
    if (null == n) returnfalse;
    let r = a.A.getGuild(n.getGuildId());
    return null != r && r.id === e
  })