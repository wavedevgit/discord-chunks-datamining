/** Chunk was on web.js **/
/** chunk id: 717558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c,
  R: () => u
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk209932 = require("./209932.js"),
  Chunk309010 = require("./309010.js"),
  Chunk485296 = require("./485296.js"),
  Chunk977997 = require("./977997.js");

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
  } = e, f = (0, r.bG)([o.A, a.A], () => {
    let e = a.A.getVoiceChannelId();
    return null != e ? o.A.getVoiceStateForChannel(e, t) : null
  }), p = u && ((null == f ? true : f.mute) || (null == f ? true : f.selfMute)), _ = (0, r.bG)([s.A], () => s.A.isSpeaking(t, d) && !p), h = (0, r.bG)([s.A], () => s.A.isSoundSharing(t) && n);
  return l(_, (0, r.bG)([i.A], () => i.A.isUserPlayingSounds(t) && c), h)
}

function u(e) {
  let {
    userId: t,
    checkSoundSharing: n = false,
    checkSoundboardSounds: r = true,
    checkIsMuted: c = false,
    context: u
  } = e, [d, f, p, _] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.A, a.A, s.A, i.A], h = f.getVoiceChannelId(), m = null != h ? d.getVoiceStateForChannel(h, t) : null, g = c && ((null == m ? true : m.mute) || (null == m ? true : m.selfMute)), E = p.isSpeaking(t, u) && !g, b = p.isSoundSharing(t) && n;
  return l(E, _.isUserPlayingSounds(t) && r, b)
}