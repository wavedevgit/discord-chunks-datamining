/** Chunk was on web.js **/
/** chunk id: 767581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U1: () => u,
  mf: () => p,
  yg: () => d,
  yr: () => h,
  yz: () => _
}), require("./896048.js");
var Chunk602137 = require("./602137.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk253913 = require("./253913.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Ay];
  return {
    isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
    hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
  }
}

function d(e) {
  let [t, n, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A, a.A, o.Ay], s = t.getChannel(e);
  if (null == s) return null;
  let l = n.getGuild(s.guild_id);
  return null == l ? null : u(s, l, [r])
}
let f = () => ({
  minutes: c.t.nFt9ck,
  hours: c.t.jzCewe,
  days: c.t.U4I0sw,
  month: c.intl.string(c.t["nBNJ/L"])
});

function p(e, t) {
  if (t === s.EG.POSTED_DURATION_AGO && e === r.T.CREATION_DATE) return f
}

function _(e, t) {
  let [n] = t, r = n.hasTrackedUnread(e), i = n.hasOpenedThread(e), a = null != n.getTrackedAckMessageId(e);
  return r && i && a
}

function h(e) {
  var t;
  return (null == (t = i.A.getChannel(e)) ? true : t.hasFlag(l.lx.PINNED)) === true
}