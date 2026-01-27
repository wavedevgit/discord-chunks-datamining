/** Chunk was on 20941 **/
/** chunk id: 101492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk719718 = require("./719718.js"),
  Chunk532294 = require("./532294.js");

function i() {
  var e, t, n, i, s, o, c;
  let u = (0, r.bG)([l.A], () => l.A.getCheckpointData()),
    d = (0, r.bG)([l.A], () => l.A.getFetchState()),
    m = [a.Wf.WELCOME];
  return d !== l.$.SUCCESS || null == u.messages || (m.push(a.Wf.MESSAGES), m.push(a.Wf.EMOJIS), m.push(a.Wf.VOICE), (null != (e = null == (i = u.guilds) ? true : i.guilds.length) ? e : 0) > 0 && m.push(a.Wf.GUILDS), (null != (t = null == (s = u.users) ? true : s.length) ? t : 0) > 0 && null != u.sidekick && null != u.sidekick.user && (null == (o = u.users) ? true : o[0].id) !== u.sidekick.user.id && (m.push(a.Wf.FRIENDS_INTRO), m.push(a.Wf.FRIENDS_TRANSITION)), null != u.sidekick && null != u.sidekick.user && (m.push(a.Wf.FRIENDS_BEST), m.push(a.Wf.FRIENDS_LEAVE)), (null != (n = null == (c = u.applications) ? true : c.applications.length) ? n : 0) > 0 && m.push(a.Wf.GAMING), m.push(a.Wf.QUESTS), m.push(a.Wf.END_REWARD), m.push(a.Wf.END_CLAIM), m.push(a.Wf.END_SUMMARY)), m
}