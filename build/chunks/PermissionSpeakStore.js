/** Chunk was on web.js **/
/** chunk id: 737613, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => O
});
var a, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "hideSuppressWarning",
  p = false,
  _ = true,
  h = false;

function m(e) {
  r = e.sessionId, p = false
}

function g() {
  r = null, i = null, _ = true
}

function E(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => r !== t.sessionId ? e : (p !== t.suppress && (_ = !(p = t.suppress)), i !== t.channelId && (i = t.channelId, _ = !p), (h || null == t.channelId) && (_ = true), true), false)
}

function b(e) {
  let {
    forever: t
  } = e;
  _ = true, t && (h = true, o.w.set(f, h))
}
class y extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, u.A), h = o.w.get(f) || h
  }
  isAFKChannel() {
    let e = c.A.getChannel(i);
    if (null == e) returnfalse;
    let t = u.A.getGuild(e.getGuildId());
    return null != t && e.id === t.afkChannelId
  }
  shouldShowWarning() {
    var e;
    return !(null == (e = c.A.getChannel(i)) ? true : e.isGuildStageVoice()) && !_
  }
}
d(y, "displayName", "PermissionSpeakStore");
let O = new y(Chunk73153.h, {
  CONNECTION_OPEN: m,
  CONNECTION_CLOSED: g,
  VOICE_STATE_UPDATES: E,
  PERMISSION_CLEAR_SUPPRESS_WARNING: b
})