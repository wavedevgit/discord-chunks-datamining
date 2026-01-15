/** Chunk was on web.js **/
/** chunk id: 464253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./415506.js"), require("./35282.js");
var Chunk570140 = require("./570140.js"),
  Chunk846027 = require("./846027.js"),
  Chunk872810 = require("./872810.js"),
  Chunk710845 = require("./710845.js"),
  Chunk252759 = require("./252759.js"),
  Chunk361291 = require("./361291.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk569545 = require("./569545.js"),
  Chunk803647 = require("./803647.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m {
  _onGameDetectionUpdate(e) {
    this.applications = e.map(e => {
      var t, n;
      return {
        applicationId: null != (t = e.id) ? t : null,
        processId: e.pid,
        processPath: e.pidPath,
        windowHandle: null != (n = e.windowHandle) ? n : null,
        executableName: e.exeName
      }
    }), "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications)
  }
  _onStreamApplication(e, t, n) {
    this.mode = "application", this.streamKey = e, this.director.onStreamBegin(this.applications, t, n)
  }
  _onStreamDirectSource(e, t, n, r) {
    this.mode = "verbatim-source", this.streamKey = e, this.director.sound = null == r || r, this.director.application = null, this._onDirectorAction({
      type: s.A.STREAM,
      sourceId: t,
      audioSourceId: n,
      sound: r
    })
  }
  _onStreamEnd(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
      case "application":
        this.director.onStreamEnd();
        break;
      case "verbatim-source":
        this._onDirectorAction({
          type: s.A.STOP,
          alsoClose: t
        });
        break;
      default:
        var n;
        throw Error("unknown streaming mode: ".concat(null != (n = this.mode) ? n : "(none)"))
    }
  }
  _onStreamKilled(e) {
    if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
      case "application":
        this.director.onStreamKilled();
        break;
      case "verbatim-source":
        break;
      default:
        var t;
        throw Error("unknown streaming mode: ".concat(null != (t = this.mode) ? t : "(none)"))
    }
  }
  _onDirectorAction(e) {
    var t, n;
    let r = c.Z.getCurrentUserActiveStream(),
      o = l.Z.getState();
    switch (e.type) {
      case s.A.STREAM:
        if (null != r && (0, a.tK)(r, false), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
          let t = e.sourceId.split(":")[1];
          i.Z.setGoLiveSource({
            cameraSettings: {
              videoDeviceGuid: t,
              audioDeviceGuid: e.audioSourceId
            },
            qualityOptions: {
              preset: o.preset,
              resolution: o.resolution,
              frameRate: o.fps
            },
            context: _.Yn.STREAM
          })
        } else i.Z.setGoLiveSource({
          desktopSettings: {
            sourceId: e.sourceId,
            sound: null == (t = e.sound) || t
          },
          qualityOptions: {
            preset: o.preset,
            resolution: o.resolution,
            frameRate: o.fps
          },
          context: _.Yn.STREAM
        });
        break;
      case s.A.PAUSE:
        null != r && (0, a.tK)(r, true);
        break;
      case s.A.STOP:
        null != r && (0, f.Z)(r, true, null == (n = e.alsoClose) || n);
        break;
      default:
        throw Error("unhandled stream action: ".concat(e.type))
    }
  }
  _onCapturePaused(e) {
    let t = c.Z.getCurrentUserActiveStream();
    null != t && (0, a.tK)(t, e)
  }
  _onCaptureEnded() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    switch (this.mode) {
      case "application":
        this._onCapturePaused(true);
        break;
      case "verbatim-source":
        null != this.streamKey && this._onStreamEnd(this.streamKey, e);
        break;
      default:
        var t;
        throw Error("unknown streaming mode: ".concat(null != (t = this.mode) ? t : "(none)"))
    }
  }
  constructor() {
    h(this, "director", true), h(this, "applications", true), h(this, "streamKey", true), h(this, "mode", true), this.mode = null, this.applications = [], this.director = new s.a(e => this._onDirectorAction(e)), r.Z.subscribe("STREAM_START", e => {
      let {
        streamType: t,
        guildId: n,
        channelId: r,
        pid: i,
        sourceId: a,
        audioSourceId: s,
        sound: l
      } = e, c = u.default.getId(), f = (0, d.V9)({
        streamType: t,
        guildId: n,
        channelId: r,
        ownerId: c
      });
      null == i != (null == a) ? (null != i && this._onStreamApplication(f, i, null == l || l), null != a && this._onStreamDirectSource(f, a, s, l)) : new o.Z("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(i, ", source-id: ").concat(a, ")"))
    }), r.Z.subscribe("STREAM_DELETE", e => {
      let {
        streamKey: t
      } = e;
      this._onStreamKilled(t)
    }), r.Z.subscribe("STREAM_STOP", e => {
      let {
        streamKey: t
      } = e;
      this._onStreamEnd(t)
    }), r.Z.subscribe("RUNNING_GAMES_CHANGE", e => {
      let {
        games: t
      } = e;
      this._onGameDetectionUpdate(t)
    }), r.Z.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
      let {
        videoState: t,
        context: n
      } = e;
      n === _.Yn.STREAM && this._onCapturePaused(t === p.FQ1.PAUSED)
    }), r.Z.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", e => {
      var t;
      let {
        settings: n,
        errorCode: r
      } = e;
      (null == n ? true : n.context) === _.Yn.STREAM && (null == n ? true : n.desktopSettings) == null && (null == n ? true : n.cameraSettings) == null && this._onCaptureEnded(null == r), (null == n || null == (t = n.desktopSettings) ? true : t.sound) != null && (this.director.sound = n.desktopSettings.sound)
    })
  }
}
let g = {
  instance: null,
  init() {
    null == this.instance && (this.instance = new m)
  }
}