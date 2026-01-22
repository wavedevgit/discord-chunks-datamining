/** Chunk was on web.js **/
/** chunk id: 101492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk719718 = require("./719718.js"),
  Chunk532294 = require("./532294.js");

function s() {
  var e, t, n, s, o, l, c;
  let u = (0, r.bG)([i.A], () => i.A.getCheckpointData()),
    d = (0, r.bG)([i.A], () => i.A.getFetchState()),
    f = [a.Wf.WELCOME];
  return d !== i.$.SUCCESS || null == u.messages || (f.push(a.Wf.MESSAGES), f.push(a.Wf.EMOJIS), f.push(a.Wf.VOICE), (null != (e = null == (s = u.guilds) ? true : s.guilds.length) ? e : 0) > 0 && f.push(a.Wf.GUILDS), (null != (t = null == (o = u.users) ? true : o.length) ? t : 0) > 0 && null != u.sidekick && null != u.sidekick.user && (null == (l = u.users) ? true : l[0].id) !== u.sidekick.user.id && (f.push(a.Wf.FRIENDS_INTRO), f.push(a.Wf.FRIENDS_TRANSITION)), null != u.sidekick && null != u.sidekick.user && (f.push(a.Wf.FRIENDS_BEST), f.push(a.Wf.FRIENDS_LEAVE)), (null != (n = null == (c = u.applications) ? true : c.applications.length) ? n : 0) > 0 && f.push(a.Wf.GAMING), f.push(a.Wf.QUESTS), f.push(a.Wf.END_REWARD), f.push(a.Wf.END_CLAIM), f.push(a.Wf.END_SUMMARY)), f
}