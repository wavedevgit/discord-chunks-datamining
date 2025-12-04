/** Chunk was on web.js **/
/** chunk id: 564756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk5888 = require("./5888.js"),
  Chunk612776 = require("./612776.js");

function o() {
  var e, t, n, o, s, l, c;
  let u = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    d = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getFetchState()),
    f = [Chunk612776.ij.WELCOME];
  return d !== Chunk5888.p.SUCCESS || null == u.messages || (f.push(Chunk612776.ij.MESSAGES), f.push(Chunk612776.ij.EMOJIS), f.push(Chunk612776.ij.VOICE), (null != (s = null == (e = u.guilds) ? true : module.guilds.length) ? s : 0) > 0 && f.push(Chunk612776.ij.GUILDS), (null != (l = null == (t = u.users) ? true : exports.length) ? l : 0) > 0 && null != u.sidekick && null != u.sidekick.user && (null == (n = u.users) ? true : require[0].id) !== u.sidekick.user.id && (f.push(Chunk612776.ij.FRIENDS_INTRO), f.push(Chunk612776.ij.FRIENDS_TRANSITION)), null != u.sidekick && null != u.sidekick.user && (f.push(Chunk612776.ij.FRIENDS_BEST), f.push(Chunk612776.ij.FRIENDS_LEAVE)), (null != (c = null == (o = u.applications) ? true : o.applications.length) ? c : 0) > 0 && f.push(Chunk612776.ij.GAMING), f.push(Chunk612776.ij.QUESTS), f.push(Chunk612776.ij.END_REWARD), f.push(Chunk612776.ij.END_CLAIM), f.push(Chunk612776.ij.END_SUMMARY)), f
}