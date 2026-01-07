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
  let u = (0, r.e7)([i.Z], () => i.Z.getCheckpointData()),
    d = (0, r.e7)([i.Z], () => i.Z.getFetchState()),
    f = [a.ij.WELCOME];
  return d !== i.p.SUCCESS || null == u.messages || (f.push(a.ij.MESSAGES), f.push(a.ij.EMOJIS), f.push(a.ij.VOICE), (null != (s = null == (e = u.guilds) ? true : e.guilds.length) ? s : 0) > 0 && f.push(a.ij.GUILDS), (null != (l = null == (t = u.users) ? true : t.length) ? l : 0) > 0 && null != u.sidekick && null != u.sidekick.user && (null == (n = u.users) ? true : n[0].id) !== u.sidekick.user.id && (f.push(a.ij.FRIENDS_INTRO), f.push(a.ij.FRIENDS_TRANSITION)), null != u.sidekick && null != u.sidekick.user && (f.push(a.ij.FRIENDS_BEST), f.push(a.ij.FRIENDS_LEAVE)), (null != (c = null == (o = u.applications) ? true : o.applications.length) ? c : 0) > 0 && f.push(a.ij.GAMING), f.push(a.ij.QUESTS), f.push(a.ij.END_REWARD), f.push(a.ij.END_CLAIM), f.push(a.ij.END_SUMMARY)), f
}