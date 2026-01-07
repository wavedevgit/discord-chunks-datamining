/** Chunk was on web.js **/
/** chunk id: 503856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => l,
  r: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");
let l = () => {
    let e = o.Z.getVoiceChannelId();
    if (null == e) returnfalse;
    let t = i.Z.getChannel(e);
    if (null == t) returnfalse;
    let n = a.Z.getGuild(t.getGuildId());
    return null != n && n.features.has(s.GuildFeatures.HUB)
  },
  c = e => (0, r.e7)([o.Z, i.Z, a.Z], () => {
    let t = o.Z.getVoiceChannelId();
    if (null == t) returnfalse;
    let n = i.Z.getChannel(t);
    if (null == n) returnfalse;
    let r = a.Z.getGuild(n.getGuildId());
    return null != r && r.id === e
  })