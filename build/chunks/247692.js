/** Chunk was on web.js **/
/** chunk id: 247692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./65821.js"), require("./896048.js");
var Chunk143236 = require("./143236.js"),
  Chunk277738 = require("./277738.js"),
  Chunk256398 = require("./256398.js"),
  Chunk201327 = require("./201327.js"),
  Chunk731854 = require("./731854.js"),
  Chunk818348 = require("./818348.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Chunk256398.A;
class d extends Chunk143236.EventEmitter {
  destroy() {
    null != this.stream && (u.release(this.stream), this.stream = null), null != this.streamId && (0, o.it)(this.streamId), this.destroyed = true
  }
  getStreamId() {
    return this.streamId
  }
  async setSource(e) {
    if (this.sourceId === e) return this.stream;
    this.sourceId = e, null != this.stream && (u.release(this.stream), this.stream = null);
    let t = await (0, i.DT)();
    if (this.sourceId === s.qe) return this.setStream(new MediaStream);
    let n = {
      width: 1280
    };
    t.some(e => e.id === this.sourceId) && (n.deviceId = this.sourceId);
    try {
      let e = await u.acquire({
        audio: false,
        video: n
      });
      if (this.destroyed) throw u.release(e), Error("VideoInput: Already destroyed");
      return this.emit("permission", true), this.setStream(e)
    } catch (e) {
      if ("string" != typeof e) switch (e.name) {
        case "PermissionDeniedError":
        case "NotAllowedError":
          throw this.emit("permission", false), l.xe.PERMISSION_DENIED;
        case "PermissionDismissedError":
          throw this.emit("permission", false), l.xe.PERMISSION_DISMISSED;
        case "DevicesNotFoundError":
        case "NotFoundError":
          throw l.xe.NO_DEVICES_FOUND;
        default:
          throw e.name || "UNKNOWN"
      }
      throw e
    }
  }
  setStream(e) {
    return null != this.streamId && ((0, o.it)(this.streamId), this.streamId = null), this.stream = e, e.onaddtrack = e => this.emit("add-video-track", e), e.getVideoTracks().length > 0 && (this.streamId = (0, o.ju)(e)), this.emit("stream", e), this.emit("video", this.getStreamId()), e
  }
  constructor(...e) {
    super(...e), c(this, "stream", new MediaStream), c(this, "sourceId", s.qe), c(this, "streamId", null), c(this, "destroyed", false)
  }
}