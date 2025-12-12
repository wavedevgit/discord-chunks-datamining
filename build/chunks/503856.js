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
    let e = Chunk944486.Z.getVoiceChannelId();
    if (null == module) returnfalse;
    let t = Chunk592125.Z.getChannel(module);
    if (null == exports) returnfalse;
    let n = Chunk430824.Z.getGuild(exports.getGuildId());
    return null != require && require.features.has(Chunk981631.GuildFeatures.HUB)
  },
  c = e => (0, r.e7)([a.Z, i.Z, o.Z], () => {
    let t = a.Z.getVoiceChannelId();
    if (null == t) returnfalse;
    let n = i.Z.getChannel(t);
    if (null == n) returnfalse;
    let r = o.Z.getGuild(n.getGuildId());
    return null != r && r.id === e
  })