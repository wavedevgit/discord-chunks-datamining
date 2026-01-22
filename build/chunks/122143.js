/** Chunk was on web.js **/
/** chunk id: 122143, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk214958 = require("./214958.js"),
  a = require.n(Chunk214958),
  Chunk604948 = require("./604948.js");
window.AudioContext = null != (r = window.AudioContext) ? r : window.webkitAudioContext, null != window.RTCPeerConnection && "Chrome" === a().name && 52 > (0, Chunk604948.U)() && ["createOffer", "createAnswer"].forEach(e => {
  let t = RTCPeerConnection.prototype[e];
  RTCPeerConnection.prototype[e] = function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    let i = this;
    if (n.length < 1 || 1 === n.length && "object" == typeof n[0]) {
      let e = 1 === n.length ? n[0] : true;
      return null != e && (e = {
        mandatory: {
          OfferToReceiveAudio: e.offerToReceiveAudio || false,
          OfferToReceiveVideo: e.offerToReceiveVideo || false
        },
        optional: [{
          VoiceActivityDetection: e.voiceActivityDetection || false
        }, {
          IceRestart: e.iceRestart || false
        }]
      }), new Promise((n, r) => t.apply(i, [n, r, e]))
    }
    return t.apply(this, n)
  }
})