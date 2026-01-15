/** Chunk was on web.js **/
/** chunk id: 146779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  WebAudioSound: () => b,
  playGiftSound: () => g,
  voiceSinkId: () => h
}), require("./35282.js"), require("./415506.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk856901 = require("./856901.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk509571 = require("./509571.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "default",
  p = .6,
  _ = /^( Device)?( \([^()]+\))+$/,
  h = f;

function m(e, t) {
  return !!t.startsWith(e) && null != t.substring(e.length).match(_)
}

function g(e, t) {
  let n = new Audio((0, o.Z)(e));
  n.volume = (0, s.Z)(t), n.play()
}
async function E() {
  if (null != window.navigator.mediaDevices) try {
    var e;
    let t = await window.navigator.mediaDevices.enumerateDevices(),
      n = l.Z.getOutputDevices(),
      r = i()(n).sortBy(e => e.index).findIndex(e => e.id === l.Z.getOutputDeviceId()),
      o = n[l.Z.getOutputDeviceId()];
    if (null == o) {
      h = f;
      return
    }
    let s = t.filter(e => "audiooutput" === e.kind && "communications" !== e.deviceId),
      c = s[r];
    if (m(o.name, null != (e = null == c ? true : c.label) ? e : "")) {
      h = c.deviceId;
      return
    }
    if (c = i()(s).maxBy(e => (0, a.stringSimilarity)(e.label, o.name)), null == c || (0, a.stringSimilarity)(c.label, o.name) < p) {
      h = f;
      return
    }
    h = c.deviceId
  } catch (e) {
    h = f
  }
}
Chunk358085.isPlatformEmbedded && (Chunk131951.Z.addChangeListener(E), E());
let b = class {
  get volume() {
    return this._volume
  }
  set volume(e) {
    this._volume = e, this.ensureAudio().then(t => t.volume = e)
  }
  loop() {
    this.ensureAudio().then(e => {
      e.loop = true, e.play()
    })
  }
  play() {
    this.ensureAudio().then(e => {
      e.loop = false, e.play()
    })
  }
  pause() {
    var e;
    null == (e = this._audio) || e.then(e => e.pause())
  }
  stop() {
    this.destroyAudio()
  }
  playWithListener() {
    return new Promise((e, t) => {
      this.ensureAudio().then(n => {
        (null == n.duration || 0 === n.duration) && t("sound has no duration"), n.play(), setTimeout(() => {
          e(true)
        }, n.duration)
      })
    })
  }
  destroyAudio() {
    null != this._audio && (this._audio.then(e => {
      e.pause(), e.src = ""
    }), this._audio = null)
  }
  ensureAudio() {
    var e;
    return this._audio = null != (e = this._audio) ? e : new Promise((e, t) => {
      let r = new Audio;
      r.src = n(451343)("./".concat(this.name, ".mp3")), r.onloadeddata = () => {
        r.volume = Math.min(l.Z.getOutputVolume() / 100 * this._volume, 1), c.isPlatformEmbedded && r.setSinkId(this.outputChannel === u.w.DEFAULT ? f : h), e(r)
      }, r.onerror = () => t(Error("could not play audio")), r.onended = () => this.destroyAudio(), r.load()
    }), this._audio
  }
  constructor(e, t, n, r) {
    d(this, "name", true), d(this, "_volume", true), d(this, "_audio", true), d(this, "outputChannel", true), this.name = e, this._volume = n, this.outputChannel = r
  }
}