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
  } = e, f = (0, r.e7)([s.Z, o.Z], () => {
    let e = o.Z.getVoiceChannelId();
    return null != e ? s.Z.getVoiceStateForChannel(e, t) : null
  }), p = u && ((null == f ? true : f.mute) || (null == f ? true : f.selfMute)), _ = (0, r.e7)([a.Z], () => a.Z.isSpeaking(t, d) && !p), m = (0, r.e7)([a.Z], () => a.Z.isSoundSharing(t) && n);
  return l(_, (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(t) && c), m)
}

function u(e) {
  let {
    userId: t,
    checkSoundSharing: n = false,
    checkSoundboardSounds: r = true,
    checkIsMuted: c = false,
    context: u
  } = e, [d, f, p, _] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [s.Z, o.Z, a.Z, i.Z], m = f.getVoiceChannelId(), h = null != m ? d.getVoiceStateForChannel(m, t) : null, g = c && ((null == h ? true : h.mute) || (null == h ? true : h.selfMute)), E = p.isSpeaking(t, u) && !g, b = p.isSoundSharing(t) && n;
  return l(E, _.isUserPlayingSounds(t) && r, b)
}