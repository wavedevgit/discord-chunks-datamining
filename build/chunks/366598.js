/** Chunk was on web.js **/
/** chunk id: 366598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./747238.js"), require("./896048.js");
var Chunk205693 = require("./205693.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk77729 = require("./77729.js"),
  Chunk652896 = require("./652896.js"),
  Chunk670470 = require("./670470.js"),
  Chunk253932 = require("./253932.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk162605 = require("./162605.js"),
  Chunk851581 = require("./851581.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk915618 = require("./915618.js"),
  Chunk572164 = require("./572164.js"),
  Chunk696016 = require("./696016.js"),
  Chunk652215 = require("./652215.js"),
  Chunk502075 = require("./502075.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class T extends Chunk439372.A {
  handleRTCConnectionState(e) {
    let {
      context: t,
      state: n,
      streamKey: i
    } = e;
    if (!(0, g.Pm)() || n !== A.S7L.RTC_CONNECTED) return;
    let a = u.default.getId();
    if (t === r.x.DEFAULT) {
      this.applyUserVoiceRecording(a), this.applyUserSoundboardRecording(a);
      return
    }
    if (t === r.x.STREAM && null != i) {
      let {
        ownerId: e
      } = (0, s.Iy)(i);
      if (e !== a) return;
      let t = p.A.getRTCConnection(i);
      if (null == t) return;
      this.applyStreamRecording(a, t)
    }
  }
  handleRTCUsersUpdate(e) {
    let {
      userIds: t,
      context: n
    } = e;
    n === r.x.DEFAULT && t.forEach(e => {
      this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e)
    })
  }
  handleRTCConnectionFlags(e) {
    let {
      userId: t,
      channelId: n,
      guildId: r
    } = e;
    this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
    let i = p.A.getRTCConnection(s._z({
      streamType: null != r ? I.U4.GUILD : I.U4.CALL,
      ownerId: t,
      channelId: n,
      guildId: r
    }));
    null != i && this.applyStreamRecording(t, i)
  }
  handleClipsInitFailure(e) {
    let {
      applicationName: t,
      errMsg: n
    } = e;
    h.default.track(A.HAw.CLIPS_INIT_FAILURE, {
      application_name: t,
      error_message: n
    })
  }
  maybeShowClipsWarning(e) {
    let t = f.A.getChannelId();
    null == t || E.A.getClipsWarningShown(t) || e === u.default.getId() || !E.A.isClipsEnabledForUser(e) || c.Q$.getSetting() && (i.h.dispatch({
      type: "CLIPS_SHOW_CALL_WARNING",
      channelId: t
    }), this.showClipsToast())
  }
  handleClipsAllowVoiceRecordingUpdate() {
    var e;
    null == (e = f.A.getUserIds()) || e.forEach(e => this.maybeShowClipsWarning(e))
  }
  handlePostConnectionOpen() {
    !(0, b.A)(d.A) || (this.applyNativeClipsSettings(), (0, g.Pm)() && (this.loadClipsFromStorage(), (null == E.A.getHardwareClassification() || null == E.A.getHardwareClassificationForDecoupled() || E.A.getHardwareClassificationVersion() !== v.V0) && this.classifyHardwareAndTrack().then(e => {
      i.h.dispatch({
        type: "CLIPS_CLASSIFY_HARDWARE",
        classification: e
      })
    })))
  }
  loadClipsFromStorage() {}
  handleRTCConnectionVideo(e) {
    let {
      userId: t,
      context: n,
      channelId: i,
      guildId: a
    } = e;
    if (n !== r.x.STREAM || !(0, b.A)(d.A)) return;
    let o = p.A.getRTCConnection(s._z({
      streamType: null != a ? I.U4.GUILD : I.U4.CALL,
      ownerId: t,
      channelId: i,
      guildId: a
    }));
    null != o && this.applyStreamRecording(t, o)
  }
  async classifyHardwareAndTrack() {
    try {
      let {
        gpuModels: e,
        classification: t
      } = await (async () => {
        let e = await (0, _.w)();
        if ((null == e ? true : e.gpus) != null) {
          let t = e.gpus.map(e => e.brand),
            n = this.classifyHardware(t);
          return {
            gpuModels: t,
            classification: n
          }
        } {
          let e = (await o.A.processUtils.getSystemInfo()).gpus.map(e => {
              let {
                model: t
              } = e;
              return t
            }),
            t = this.classifyHardware(e);
          return {
            gpuModels: e,
            classification: t
          }
        }
      })();
      return h.default.track(A.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
        classification: t,
        version: v.V0,
        gpu_models: e
      }), t
    } catch (e) {
      return y.k9.UNKNOWN
    }
  }
  classifyHardware(e) {
    if ((0, m.isWindows)()) {
      let t = e.some(e => v.sc.test(e)),
        n = e.some(e => v.l_.test(e));
      return t ? y.k9.MEETS_AUTO_ENABLE : n ? y.k9.MEETS_MINIMUM : y.k9.BELOW_MINIMUM
    }
    return (0, m.isMac)() ? "arm64" === o.A.remoteApp.getAppArch() ? y.k9.MEETS_AUTO_ENABLE : y.k9.MEETS_MINIMUM : y.k9.UNKNOWN
  }
  applyUserVoiceRecording(e) {
    if (!(0, b.A)(d.A)) return;
    let t = f.A.getRTCConnection();
    if (null == t) return;
    if (e === u.default.getId()) return void t.setClipRecordUser(e, "audio", (0, O.TD)());
    let n = E.A.isVoiceRecordingAllowedForUser(e);
    t.setClipRecordUser(e, "audio", n)
  }
  applyUserSoundboardRecording(e) {
    if (!(0, b.A)(d.A)) return;
    let t = f.A.getRTCConnection();
    null != t && t.setClipRecordUser(e, "soundboard", (0, O.TD)())
  }
  applyStreamRecording(e, t) {
    if (!(0, b.A)(d.A)) return;
    if (u.default.getId() === e) {
      let n = (0, O.TD)();
      t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
      return
    }
    let {
      enableViewerClipping: n,
      ignoreSenderPreference: r
    } = l.A.getCurrentConfig({
      location: "ClipsManager:applyStreamRecording"
    });
    if (!n) return;
    let i = r || E.A.isViewerClippingAllowedForUser(e);
    this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", i), t.setClipRecordUser(e, "video", i)
  }
  handleMessageCreate(e) {}
  handleRemoteClipTrigger(e) {}
  constructor(...e) {
    super(...e), S(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handlePostConnectionOpen(),
      RTC_CONNECTION_FLAGS: e => this.handleRTCConnectionFlags(e),
      RTC_CONNECTION_USERS_MERGED: e => this.handleRTCUsersUpdate(e),
      CLIPS_INIT_FAILURE: e => this.handleClipsInitFailure(e),
      CLIPS_SETTINGS_UPDATE: e => this.applyNativeClipsSettings(e),
      CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
      STREAM_START: () => this.applyNativeClipsSettings(),
      RUNNING_GAME_TOGGLE_DETECTION: e => this.handleClipsInitOnToggleDetection(e),
      RUNNING_GAMES_CHANGE: e => this.handleClipsInitOnGamesChange(e),
      CLIPS_RESTART: () => this.fireClipsInitEvent(),
      RTC_CONNECTION_VIDEO: e => this.handleRTCConnectionVideo(e),
      RTC_CONNECTION_STATE: e => this.handleRTCConnectionState(e)
    })
  }
}