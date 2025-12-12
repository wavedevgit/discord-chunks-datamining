/** Chunk was on web.js **/
/** chunk id: 452369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk699516 = require("./699516.js"),
  Chunk979651 = require("./979651.js"),
  Chunk414509 = require("./414509.js");
let l = {},
  c = {},
  u = new Set;

function d() {
  l = {}, c = {}
}

function f() {
  d();
  let e = Chunk979651.Z.getAllVoiceStates(),
    t = false;
  for (let n of Object.values(module))
    for (let e of Object.values(require)) null != module.channelId && (t = m(module.channelId, module.userId) || exports);
  return exports
}

function p(e) {
  let {
    relationship: t
  } = e, n = o.Z.getVoiceStateForUser(t.id);
  return null != n && null != n.channelId && m(n.channelId, t.id)
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
    null != e.channelId && (n = m(e.channelId, e.userId) || n)
  }), n
}

function m(e, t) {
  let n = false,
    r = false,
    i = new Set(l[e]),
    o = a.Z.isBlocked(t);
  o && !i.has(t) ? (i.add(t), r = true, n = true) : o || (n = i.delete(t)), 0 === i.size && n ? delete l[e] : n && (l[e] = i);
  let u = new Set(c[e]),
    d = a.Z.isIgnored(t);
  return d && !u.has(t) ? (u.add(t), r = true, n = true) : d || (n = u.delete(t)), 0 === u.size && n ? delete c[e] : n && (c[e] = u), r && s.ZP.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t), n
}
class h extends Chunk442837.ZP.Store {
  initialize() {
    this.waitFor(Chunk699516.Z, Chunk979651.Z)
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
let g = new h(Chunk570140.Z, {
  CONNECTION_OPEN: d,
  LOGOUT: d,
  OVERLAY_INITIALIZE: f,
  VOICE_STATE_UPDATES: _,
  RELATIONSHIP_ADD: p,
  RELATIONSHIP_REMOVE: p,
  RELATIONSHIP_UPDATE: p
})