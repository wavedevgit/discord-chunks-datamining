/** Chunk was on web.js **/
/** chunk id: 384136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./415506.js");
var Chunk836560 = require("./836560.js"),
  Chunk376398 = require("./376398.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class c extends Chunk836560.EventEmitter {
  static async get(e, t, n) {
    var r;
    let i = {
      audio: t && {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      },
      video: l(a({}, e), {
        frameRate: 30
      })
    };
    if ((null == (r = navigator.mediaDevices) ? true : r.getDisplayMedia) != null) return new c(await navigator.mediaDevices.getDisplayMedia(i), n);
    throw Error("UNKNOWN")
  }
  reuse() {
    this.removeAllListeners(), this.pool.release(this)
  }
  destroy() {
    this.removeAllListeners(), (0, Chunk376398.jC)(this.streamId), this.stream.getTracks().forEach(e => e.stop())
  }
  reset() {
    this.refreshSpeaking()
  }
  getStreamId() {
    return this.streamId
  }
  refreshSpeaking() {
    this.emit("speaking", this.stream.getAudioTracks().some(e => e.enabled))
  }
  constructor(e, t) {
    super(), o(this, "id", true), o(this, "stream", true), o(this, "pool", true), o(this, "streamId", true), e.getVideoTracks().forEach(e => {
      e.onended = () => {
        this.emit("desktopsourceend")
      }
    }), this.id = e.getVideoTracks()[0].label, this.stream = e, this.streamId = (0, i.N7)(e), this.pool = t
  }
}