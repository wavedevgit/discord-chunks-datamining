/** Chunk was on web.js **/
/** chunk id: 340619, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./65821.js");
var Chunk143236 = require("./143236.js"),
  Chunk201327 = require("./201327.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class c extends Chunk143236.EventEmitter {
  static async get(e, t, n) {
    var r;
    let i = {
      audio: t && {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      },
      video: l(s({}, e), {
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
    this.removeAllListeners(), (0, i.it)(this.streamId), this.stream.getTracks().forEach(e => e.stop())
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
    super(), a(this, "id", true), a(this, "stream", true), a(this, "pool", true), a(this, "streamId", true), e.getVideoTracks().forEach(e => {
      e.onended = () => {
        this.emit("desktopsourceend")
      }
    }), this.id = e.getVideoTracks()[0].label, this.stream = e, this.streamId = (0, i.ju)(e), this.pool = t
  }
}