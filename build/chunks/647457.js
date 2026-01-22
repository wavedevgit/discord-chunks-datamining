/** Chunk was on web.js **/
/** chunk id: 647457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./65821.js");
var Chunk143236 = require("./143236.js"),
  Chunk118356 = require("./118356.js"),
  Chunk277738 = require("./277738.js"),
  Chunk256398 = require("./256398.js"),
  Chunk938866 = require("./938866.js"),
  Chunk956446 = require("./956446.js"),
  Chunk731854 = require("./731854.js"),
  Chunk818348 = require("./818348.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Chunk118356.Vy("Output"),
  p = new Chunk256398.A;
class _ extends Chunk143236.EventEmitter {
  destroy() {
    var e, t, n;
    this.removeAllListeners(), null == (e = (t = this).cleanup) || e.call(t), this.reset(), null != this.stream && (p.release(this.stream), this.stream = true), null == (n = this._audioFilter) || n.dispose(), this._audioFilter = true, this.destroyed = true
  }
  reset() {
    this.setSpeaking(false)
  }
  resume() {
    this.context.resume()
  }
  get state() {
    return this.context.state
  }
  getDelayedStream() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : .2,
      t = this.context;
    if (null == this.stream) throw Error("AudioInput: No MediaStream");
    let n = t.createDelay(e);
    n.delayTime.value = e, t.createMediaStreamSource(this.stream).connect(n);
    let r = t.createMediaStreamDestination();
    return n.connect(r), r.stream
  }
  get mute() {
    return this._mute
  }
  set mute(e) {
    this._mute = e, this.updateAudioTracks(), this.setSpeaking(false)
  }
  get echoCancellation() {
    return this._echoCancellation
  }
  set echoCancellation(e) {
    this._echoCancellation !== e && (this._echoCancellation = e, null != this.stream && this.enable())
  }
  get noiseSuppression() {
    return this._noiseSuppression
  }
  set noiseSuppression(e) {
    this._noiseSuppression !== e && (this._noiseSuppression = e, null != this.stream && this.enable())
  }
  get noiseCancellation() {
    return this._noiseCancellation
  }
  set noiseCancellation(e) {
    this._noiseCancellation !== e && (this._noiseCancellation = e, null != this.stream && this.enable())
  }
  get automaticGainControl() {
    return this._automaticGainControl
  }
  set automaticGainControl(e) {
    this._automaticGainControl !== e && (this._automaticGainControl = e, null != this.stream && this.enable())
  }
  async enable() {
    null != this.cleanup && (this.cleanup(), this.cleanup = true), null != this.stream && (p.release(this.stream), this.stream = true);
    let e = await (0, a._e)(),
      t = {
        echoCancellation: this.echoCancellation,
        noiseSuppression: this.noiseSuppression,
        autoGainControl: this.automaticGainControl
      };
    e.some(e => e.id === this.sourceId) && (t.deviceId = {
      exact: this.sourceId
    });
    try {
      let e = await p.acquire({
        audio: t
      });
      if (this.destroyed) throw p.release(e), Error("AudioInput: Already destroyed");
      if (this._noiseCancellation) try {
        let t = await (0, o.e)();
        this._audioFilter = await t.createNoiseFilter(this.context), this._audioFilter.addEventListener("ready", e => {
          var t;
          null == (t = this._audioFilter) || t.enable()
        }), this._audioFilter.addEventListener("dispose", t => {
          p.release(e)
        });
        let n = this.context.createMediaStreamSource(e),
          r = this.context.createMediaStreamDestination();
        n.connect(this._audioFilter), this._audioFilter.connect(r), this.stream = r.stream
      } catch (t) {
        f.error("failure creating krisp node"), f.error(t), this.stream = e
      } else this.stream = e;
      return this.updateMode(), this.updateAudioTracks(), this.emit("permission", true), this.emit("stream", this.stream), e
    } catch (e) {
      if ("string" != typeof e) switch (e.name) {
        case "PermissionDeniedError":
        case "NotAllowedError":
          throw this.emit("permission", false), u.xe.PERMISSION_DENIED;
        case "PermissionDismissedError":
          throw this.emit("permission", false), u.xe.PERMISSION_DISMISSED;
        case "DevicesNotFoundError":
        case "NotFoundError":
          throw u.xe.NO_DEVICES_FOUND;
        default:
          throw e.name || "UNKNOWN"
      }
      throw e
    }
  }
  setSource(e) {
    this.sourceId !== e && (this.sourceId = e, null != this.stream && this.enable())
  }
  setPTTActive(e) {
    this.mute || this.speaking !== e && (null != this.pttReleaseDelayTimeout && (window.clearTimeout(this.pttReleaseDelayTimeout), this.pttReleaseDelayTimeout = true), e ? this.setSpeaking(e) : this.pttReleaseDelayTimeout = window.setTimeout(() => {
      this.setSpeaking(false), this.pttReleaseDelayTimeout = true
    }, this.modeOptions.delay))
  }
  setMode(e, t) {
    this.mode = e, this.modeOptions = t, null != this.stream && this.enable()
  }
  updateMode() {
    null != this.cleanup && (this.cleanup(), this.cleanup = true), null != this.stream && this.mode === c.TB.VOICE_ACTIVITY && (this.cleanup = this.setupVoiceActivity(this.modeOptions))
  }
  setupVoiceActivity(e) {
    let {
      threshold: t
    } = e;
    if (null == this.stream) throw Error("stream cannot be null");
    null == t && (t = false);
    let n = new l.A(this.context, this.stream, t);
    return n.onProcess = (e, t) => {
      this.mute || this.setSpeaking(e), this.emit("voiceactivity", t)
    }, () => {
      null != n && (n.stop(), n = null, this.setSpeaking(false))
    }
  }
  setSpeaking(e) {
    this.speaking !== e && (this.speaking = e, this.emit("speaking", e))
  }
  updateAudioTracks() {
    if (null != this.stream) {
      let e = this.stream.getAudioTracks();
      for (let t = 0, n = e.length; t < n; t++) e[t].enabled = !this._mute
    }
  }
  constructor(e) {
    super(), d(this, "stream", true), d(this, "context", true), d(this, "sourceId", true), d(this, "_mute", false), d(this, "_echoCancellation", true), d(this, "_noiseSuppression", true), d(this, "_automaticGainControl", true), d(this, "_noiseCancellation", false), d(this, "_audioFilter", true), d(this, "speaking", false), d(this, "mode", c.TB.VOICE_ACTIVITY), d(this, "modeOptions", {
      delay: 20,
      threshold: false
    }), d(this, "cleanup", true), d(this, "pttReleaseDelayTimeout", true), d(this, "destroyed", false), this.context = e
  }
}