/** Chunk was on web.js **/
/** chunk id: 882252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FS: () => u,
  Uw: () => p,
  nC: () => d,
  nU: () => _,
  yv: () => m
}), require("./388685.js");
var Chunk683860 = require("./683860.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk710352 = require("./710352.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.ZP];
  return {
    isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
    hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
  }
}

function d(e) {
  let [t, n, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.Z, a.Z, o.ZP], s = t.getChannel(e);
  if (null == s) return null;
  let l = n.getGuild(s.guild_id);
  return null == l ? null : u(s, l, [r])
}
let f = () => ({
  minutes: Chunk388032.t.nFt9ck,
  hours: Chunk388032.t.jzCewe,
  days: Chunk388032.t.U4I0sw,
  month: Chunk388032.intl.string(Chunk388032.t["nBNJ/L"])
});

function p(e, t) {
  if (t === s.R6.POSTED_DURATION_AGO && e === r.z.CREATION_DATE) return f
}

function _(e, t) {
  let [n] = t, r = n.hasTrackedUnread(e), i = n.hasOpenedThread(e), a = null != n.getTrackedAckMessageId(e);
  return r && i && a
}

function m(e) {
  var t;
  return (null == (t = i.Z.getChannel(e)) ? true : t.hasFlag(l.zZ.PINNED)) === true
}