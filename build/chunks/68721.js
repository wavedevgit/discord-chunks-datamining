/** Chunk was on web.js **/
/** chunk id: 68721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./415506.js");
var Chunk836560 = require("./836560.js"),
  Chunk579092 = require("./579092.js"),
  Chunk740197 = require("./740197.js"),
  Chunk106617 = require("./106617.js"),
  Chunk290488 = require("./290488.js"),
  Chunk830795 = require("./830795.js"),
  Chunk65154 = require("./65154.js"),
  Chunk231338 = require("./231338.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Chunk579092.Yd("Output"),
  p = new Chunk106617.Z;
class _ extends Chunk836560.EventEmitter {
  destroy() {
    var e, t, n;
    this.removeAllListeners(), null == (e = (t = this).cleanup) || module.call(exports), this.reset(), null != this.stream && (p.release(this.stream), this.stream = true), null == (n = this._audioFilter) || require.dispose(), this._audioFilter = true, this.destroyed = true
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
    let n = exports.createDelay(module);
    require.delayTime.value = module, exports.createMediaStreamSource(this.stream).connect(require);
    let r = exports.createMediaStreamDestination();
    return require.connect(Chunk836560), Chunk836560.stream
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
    let e = await (0, Chunk740197.Hg)(),
      t = {
        echoCancellation: this.echoCancellation,
        noiseSuppression: this.noiseSuppression,
        autoGainControl: this.automaticGainControl
      };
    module.some(e => e.id === this.sourceId) && (exports.deviceId = {
      exact: this.sourceId
    });
    try {
      let e = await p.acquire({
        audio: exports
      });
      if (this.destroyed) throw p.release(module), Error("AudioInput: Already destroyed");
      if (this._noiseCancellation) try {
        let t = await (0, Chunk290488.n)();
        this._audioFilter = await exports.createNoiseFilter(this.context), this._audioFilter.addEventListener("ready", e => {
          var t;
          null == (t = this._audioFilter) || t.enable()
        }), this._audioFilter.addEventListener("dispose", t => {
          p.release(e)
        });
        let n = this.context.createMediaStreamSource(module),
          r = this.context.createMediaStreamDestination();
        require.connect(this._audioFilter), this._audioFilter.connect(Chunk836560), this.stream = Chunk836560.stream
      } catch (t) {
        f.error("failure creating krisp node"), f.error(exports), this.stream = module
      } else this.stream = module;
      return this.updateMode(), this.updateAudioTracks(), this.emit("permission", true), this.emit("stream", this.stream), module
    } catch (e) {
      if ("string" != typeof module) switch (module.name) {
        case "PermissionDeniedError":
        case "NotAllowedError":
          throw this.emit("permission", false), Chunk231338.ET.PERMISSION_DENIED;
        case "PermissionDismissedError":
          throw this.emit("permission", false), Chunk231338.ET.PERMISSION_DISMISSED;
        case "DevicesNotFoundError":
        case "NotFoundError":
          throw Chunk231338.ET.NO_DEVICES_FOUND;
        default:
          throw module.name || "UNKNOWN"
      }
      throw module
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
    null != this.cleanup && (this.cleanup(), this.cleanup = true), null != this.stream && this.mode === Chunk65154.pM.VOICE_ACTIVITY && (this.cleanup = this.setupVoiceActivity(this.modeOptions))
  }
  setupVoiceActivity(e) {
    let {
      threshold: t
    } = e;
    if (null == this.stream) throw Error("stream cannot be null");
    null == t && (t = false);
    let n = new l.Z(this.context, this.stream, t);
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
      for (let t = 0, n = module.length; exports < require; exports++) module[exports].enabled = !this._mute
    }
  }
  constructor(e) {
    super(), d(this, "stream", true), d(this, "context", true), d(this, "sourceId", true), d(this, "_mute", false), d(this, "_echoCancellation", true), d(this, "_noiseSuppression", true), d(this, "_automaticGainControl", true), d(this, "_noiseCancellation", false), d(this, "_audioFilter", true), d(this, "speaking", false), d(this, "mode", c.pM.VOICE_ACTIVITY), d(this, "modeOptions", {
      delay: 20,
      threshold: false
    }), d(this, "cleanup", true), d(this, "pttReleaseDelayTimeout", true), d(this, "destroyed", false), this.context = e
  }
}