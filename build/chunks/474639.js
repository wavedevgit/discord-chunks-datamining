/** Chunk was on web.js **/
/** chunk id: 474639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./35282.js"), require("./388685.js");
var Chunk46973 = require("./46973.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js"),
  Chunk569545 = require("./569545.js"),
  Chunk441167 = require("./441167.js"),
  Chunk695346 = require("./695346.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js"),
  Chunk704806 = require("./704806.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk779618 = require("./779618.js"),
  Chunk341569 = require("./341569.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk70722 = require("./70722.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class C extends Chunk147913.Z {
  handleRTCConnectionState(e) {
    let {
      context: t,
      state: n,
      streamKey: i
    } = e;
    if (!(0, g.w2)() || n !== S.hes.RTC_CONNECTED) return;
    let a = u.default.getId();
    if (t === r.Yn.DEFAULT) {
      this.applyUserVoiceRecording(a), this.applyUserSoundboardRecording(a);
      return
    }
    if (t === r.Yn.STREAM && null != i) {
      let {
        ownerId: e
      } = (0, s.my)(i);
      if (e !== a) return;
      let t = p.Z.getRTCConnection(i);
      if (null == t) return;
      this.applyStreamRecording(a, t)
    }
  }
  handleRTCUsersUpdate(e) {
    let {
      userIds: t,
      context: n
    } = e;
    n === r.Yn.DEFAULT && t.forEach(e => {
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
    let i = p.Z.getRTCConnection(s.V9({
      streamType: null != r ? I.lo.GUILD : I.lo.CALL,
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
    h.default.track(S.rMx.CLIPS_INIT_FAILURE, {
      application_name: t,
      error_message: n
    })
  }
  maybeShowClipsWarning(e) {
    let t = f.Z.getChannelId();
    !(null == t || E.Z.getClipsWarningShown(t)) && e !== u.default.getId() && E.Z.isClipsEnabledForUser(e) && c.tU.getSetting() && (i.Z.dispatch({
      type: "CLIPS_SHOW_CALL_WARNING",
      channelId: t
    }), this.showClipsToast())
  }
  handleClipsAllowVoiceRecordingUpdate() {
    var e;
    null == (e = f.Z.getUserIds()) || e.forEach(e => this.maybeShowClipsWarning(e))
  }
  handlePostConnectionOpen() {
    if ((0, y.Z)(d.Z)) this.applyNativeClipsSettings(), (0, g.w2)() && (this.loadClipsFromStorage(), (null == E.Z.getHardwareClassification() || null == E.Z.getHardwareClassificationForDecoupled() || E.Z.getHardwareClassificationVersion() !== v.WM) && this.classifyHardwareAndTrack().then(e => {
      i.Z.dispatch({
        type: "CLIPS_CLASSIFY_HARDWARE",
        classification: e
      })
    }))
  }
  loadClipsFromStorage() {}
  handleRTCConnectionVideo(e) {
    let {
      userId: t,
      context: n,
      channelId: i,
      guildId: a
    } = e;
    if (n !== r.Yn.STREAM || !(0, y.Z)(d.Z)) return;
    let o = p.Z.getRTCConnection(s.V9({
      streamType: null != a ? I.lo.GUILD : I.lo.CALL,
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
        let e = await (0, _.q)();
        if ((null == e ? true : e.gpus) != null) {
          let t = e.gpus.map(e => e.brand),
            n = this.classifyHardware(t);
          return {
            gpuModels: t,
            classification: n
          }
        } {
          let e = (await o.Z.processUtils.getSystemInfo()).gpus.map(e => {
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
      return h.default.track(S.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
        classification: t,
        version: v.WM,
        gpu_models: e
      }), t
    } catch (e) {
      return b.xH.UNKNOWN
    }
  }
  classifyHardware(e) {
    if ((0, m.isWindows)()) {
      let t = e.some(e => v.rI.test(e)),
        n = e.some(e => v.nU.test(e));
      return t ? b.xH.MEETS_AUTO_ENABLE : n ? b.xH.MEETS_MINIMUM : b.xH.BELOW_MINIMUM
    }
    return (0, m.isMac)() ? "arm64" === o.Z.remoteApp.getAppArch() ? b.xH.MEETS_AUTO_ENABLE : b.xH.MEETS_MINIMUM : b.xH.UNKNOWN
  }
  applyUserVoiceRecording(e) {
    if (!(0, y.Z)(d.Z)) return;
    let t = f.Z.getRTCConnection();
    if (null == t) return;
    if (e === u.default.getId()) return void t.setClipRecordUser(e, "audio", (0, O.LI)());
    let n = E.Z.isVoiceRecordingAllowedForUser(e);
    t.setClipRecordUser(e, "audio", n)
  }
  applyUserSoundboardRecording(e) {
    if (!(0, y.Z)(d.Z)) return;
    let t = f.Z.getRTCConnection();
    null != t && t.setClipRecordUser(e, "soundboard", (0, O.LI)())
  }
  applyStreamRecording(e, t) {
    if (!(0, y.Z)(d.Z)) return;
    if (u.default.getId() === e) {
      let n = (0, O.LI)();
      t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
      return
    }
    let {
      enableViewerClipping: n,
      ignoreSenderPreference: r
    } = l.Z.getCurrentConfig({
      location: "ClipsManager:applyStreamRecording"
    });
    if (!n) return;
    let i = r || E.Z.isViewerClippingAllowedForUser(e);
    this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", i), t.setClipRecordUser(e, "video", i)
  }
  handleMessageCreate(e) {}
  handleRemoteClipTrigger(e) {}
  constructor(...e) {
    super(...e), T(this, "actions", {
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