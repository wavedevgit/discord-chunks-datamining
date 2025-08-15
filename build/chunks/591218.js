/** Chunk was on web.js **/
/** chunk id: 591218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./415506.js"), require("./388685.js");
var Chunk836560 = require("./836560.js"),
  Chunk740197 = require("./740197.js"),
  Chunk106617 = require("./106617.js"),
  Chunk376398 = require("./376398.js"),
  Chunk65154 = require("./65154.js"),
  Chunk231338 = require("./231338.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Chunk106617.Z;
class d extends Chunk836560.EventEmitter {
  destroy() {
    null != this.stream && (u.release(this.stream), this.stream = null), null != this.streamId && (0, Chunk376398.jC)(this.streamId), this.destroyed = true
  }
  getStreamId() {
    return this.streamId
  }
  async setSource(e) {
    if (this.sourceId === e) return this.stream;
    this.sourceId = e, null != this.stream && (u.release(this.stream), this.stream = null);
    let t = await (0, i.l0)();
    if (this.sourceId === s.Av) return this.setStream(new MediaStream);
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
          throw this.emit("permission", false), l.ET.PERMISSION_DENIED;
        case "PermissionDismissedError":
          throw this.emit("permission", false), l.ET.PERMISSION_DISMISSED;
        case "DevicesNotFoundError":
        case "NotFoundError":
          throw l.ET.NO_DEVICES_FOUND;
        default:
          throw e.name || "UNKNOWN"
      }
      throw e
    }
  }
  setStream(e) {
    return null != this.streamId && ((0, o.jC)(this.streamId), this.streamId = null), this.stream = e, e.onaddtrack = e => this.emit("add-video-track", e), e.getVideoTracks().length > 0 && (this.streamId = (0, o.N7)(e)), this.emit("stream", e), this.emit("video", this.getStreamId()), e
  }
  constructor(...e) {
    super(...e), c(this, "stream", new MediaStream), c(this, "sourceId", s.Av), c(this, "streamId", null), c(this, "destroyed", false)
  }
}