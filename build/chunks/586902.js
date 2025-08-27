/** Chunk was on web.js **/
/** chunk id: 586902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => u,
  Z: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk763296 = require("./763296.js"),
  Chunk944486 = require("./944486.js"),
  Chunk606304 = require("./606304.js"),
  Chunk979651 = require("./979651.js");

function l(e, t, n) {
  return e || t || n
}

function c(e) {
  let {
    userId: t,
    checkSoundSharing: n = false,
    checkSoundboardSounds: c = true,
    checkIsMuted: u = false,
    context: d
  } = e, f = (0, r.e7)([s.Z, a.Z], () => {
    let e = a.Z.getVoiceChannelId();
    return null != e ? s.Z.getVoiceStateForChannel(e, t) : null
  }), _ = u && ((null == f ? true : f.mute) || (null == f ? true : f.selfMute)), p = (0, r.e7)([o.Z], () => o.Z.isSpeaking(t, d) && !_), h = (0, r.e7)([o.Z], () => o.Z.isSoundSharing(t) && n);
  return l(p, (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(t) && c), h)
}

function u(e) {
  let {
    userId: t,
    checkSoundSharing: n = false,
    checkSoundboardSounds: r = true,
    checkIsMuted: c = false,
    context: u
  } = e, [d, f, _, p] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [s.Z, a.Z, o.Z, i.Z], h = f.getVoiceChannelId(), m = null != h ? d.getVoiceStateForChannel(h, t) : null, g = c && ((null == m ? true : m.mute) || (null == m ? true : m.selfMute)), E = _.isSpeaking(t, u) && !g, b = _.isSoundSharing(t) && n;
  return l(E, p.isUserPlayingSounds(t) && r, b)
}