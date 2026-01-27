/** Chunk was on web.js **/
/** chunk id: 741812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk994500 = require("./994500.js"),
  Chunk977997 = require("./977997.js"),
  Chunk158160 = require("./158160.js");
let l = {},
  c = {},
  u = new Set;

function d() {
  l = {}, c = {}
}

function f() {
  d();
  let e = o.A.getAllVoiceStates(),
    t = false;
  for (let n of Object.values(e))
    for (let e of Object.values(n)) null != e.channelId && (t = h(e.channelId, e.userId) || t);
  return t
}

function p(e) {
  let {
    relationship: t
  } = e, n = o.A.getVoiceStateForUser(t.id);
  return null != n && null != n.channelId && h(n.channelId, t.id)
}

function _(e) {
  let {
    voiceStates: t
  } = e, n = false;
  return t.forEach(e => {
    if (null != e.oldChannelId) {
      var t, r;
      null != l[e.oldChannelId] && (null == (t = l[e.oldChannelId]) || t.delete(e.userId), n = true), null != c[e.oldChannelId] && (null == (r = c[e.oldChannelId]) || r.delete(e.userId), n = true)
    }
    null != e.channelId && (n = h(e.channelId, e.userId) || n)
  }), n
}

function h(e, t) {
  let n = false,
    r = false,
    i = new Set(l[e]),
    o = a.A.isBlocked(t);
  o && !i.has(t) ? (i.add(t), r = true, n = true) : o || (n = i.delete(t)), 0 === i.size && n ? delete l[e] : n && (l[e] = i);
  let u = new Set(c[e]),
    d = a.A.isIgnored(t);
  return d && !u.has(t) ? (u.add(t), r = true, n = true) : d || (n = u.delete(t)), 0 === u.size && n ? delete c[e] : n && (c[e] = u), r && s.Ay.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t), n
}
class m extends Chunk311907.Ay.Store {
  initialize() {
    this.waitFor(a.A, o.A)
  }
  getBlockedUsersForVoiceChannel(e) {
    var t;
    return null != (t = l[e]) ? t : u
  }
  getIgnoredUsersForVoiceChannel(e) {
    var t;
    return null != (t = c[e]) ? t : u
  }
}
let g = new m(Chunk73153.h, {
  CONNECTION_OPEN: d,
  LOGOUT: d,
  OVERLAY_INITIALIZE: f,
  VOICE_STATE_UPDATES: _,
  RELATIONSHIP_ADD: p,
  RELATIONSHIP_REMOVE: p,
  RELATIONSHIP_UPDATE: p
})