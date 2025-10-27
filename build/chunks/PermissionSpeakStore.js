/** Chunk was on web.js **/
/** chunk id: 209590, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => O
});
var a, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "hideSuppressWarning",
  _ = false,
  p = true,
  h = false;

function m(e) {
  r = e.sessionId, _ = false
}

function g() {
  r = null, i = null, p = true
}

function E(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => r !== t.sessionId ? e : (_ !== t.suppress && (p = !(_ = t.suppress)), i !== t.channelId && (i = t.channelId, p = !_), (h || null == t.channelId) && (p = true), true), false)
}

function b(e) {
  let {
    forever: t
  } = e;
  p = true, t && (h = true, s.K.set(f, h))
}
class y extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z), h = Chunk433517.K.get(f) || h
  }
  isAFKChannel() {
    let e = Chunk592125.Z.getChannel(i);
    if (null == module) returnfalse;
    let t = Chunk430824.Z.getGuild(module.getGuildId());
    return null != exports && module.id === exports.afkChannelId
  }
  shouldShowWarning() {
    var e;
    return !(null == (e = Chunk592125.Z.getChannel(i)) ? true : module.isGuildStageVoice()) && !p
  }
}
d(y, "displayName", "PermissionSpeakStore");
let O = new y(Chunk570140.Z, {
  CONNECTION_OPEN: m,
  CONNECTION_CLOSED: g,
  VOICE_STATE_UPDATES: E,
  PERMISSION_CLEAR_SUPPRESS_WARNING: b
})