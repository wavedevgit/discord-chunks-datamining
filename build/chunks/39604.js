/** Chunk was on web.js **/
/** chunk id: 39604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C1: () => z,
  Gh: () => Q,
  N0: () => Z,
  Pr: () => J,
  Rr: () => eo,
  So: () => es,
  T1: () => F,
  Tm: () => X,
  UY: () => ei,
  W6: () => ea,
  WY: () => ed,
  XK: () => ec,
  ZW: () => q,
  _Q: () => G,
  a2: () => el,
  br: () => eu,
  eL: () => $,
  eU: () => V,
  em: () => U,
  jv: () => et,
  rO: () => er,
  sS: () => en,
  yg: () => k,
  yi: () => B,
  yl: () => H,
  zq: () => ee
}), require("./388685.js"), require("./49124.js"), require("./642613.js"), require("./539854.js");
var Chunk46973 = require("./46973.js"),
  Chunk992774 = require("./992774.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk674466 = require("./674466.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk441167 = require("./441167.js"),
  Chunk460181 = require("./460181.js"),
  Chunk695346 = require("./695346.js"),
  Chunk361291 = require("./361291.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js"),
  Chunk33039 = require("./33039.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk894694 = require("./894694.js"),
  Chunk61994 = require("./61994.js"),
  Chunk550351 = require("./550351.js"),
  Chunk341569 = require("./341569.js"),
  Chunk659487 = require("./659487.js"),
  Chunk711644 = require("./711644.js"),
  Chunk259612 = require("./259612.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function k(e) {
  let {
    allowVoiceRecording: t
  } = e;
  await f.tU.updateSetting(t), y.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, {
    allow_voice_recording: t
  }), a.Z.dispatch({
    type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE"
  })
}
async function U(e) {
  let {
    clipsEnabled: t,
    guildId: n,
    trackAnalytics: r = false
  } = e;
  await a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: L({
      clipsEnabled: t
    }, !t && {
      decoupledClipsEnabled: false
    })
  }), r && y.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, L({
    clips_enabled: t,
    guild_id: n
  }, !t && {
    decoupled_clips_enabled: false
  }))
}

function G(e) {
  let {
    enabled: t,
    trackAnalytics: n = false
  } = e;
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: M(L({}, t && {
      clipsEnabled: true
    }), {
      decoupledClipsEnabled: t
    })
  }), n && y.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, M(L({}, t && {
    clips_enabled: true
  }), {
    decoupled_clips_enabled: t
  }))
}

function Z(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      remindersEnabled: e
    }
  }), y.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, {
    reminders_enabled: e
  })
}

function F(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      storageLocation: e
    }
  })
}

function B(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsQuality: e
    }
  })
}

function V(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsLength: e
    }
  })
}

function H(e) {
  let {
    enabled: t,
    trackAnalytics: n = false
  } = e;
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      viewerClipsEnabled: t
    }
  }), n && y.default.track(D.rMx.CLIPS_SETTINGS_UPDATED, {
    viewer_clips_enabled: t
  })
}

function Y(e) {
  var t;
  let n, r, i;
  if (null != e) {
    n = null != e ? E.Z.getRTCConnection(e) : null;
    let t = (0, c.my)(e);
    r = t.guildId, i = t.channelId
  } else {
    let e = m.default.getId(),
      t = _.Z.getActiveStreamForUser(e, null);
    n = null != t ? E.Z.getRTCConnection((0, c.V9)(t)) : null, r = null == t ? true : t.guildId, i = null == t ? true : t.channelId
  }
  let a = null == n || null == (t = n.analyticsContext) ? true : t.streamApplication;
  return {
    rtc_connection_id: null == n ? true : n.getRTCConnectionId(),
    media_session_id: null == n ? true : n.getMediaSessionId(),
    parent_media_session_id: null == n ? true : n.parentMediaSessionId,
    guild_id: r,
    channel_id: i,
    application_id: null == a ? true : a.id,
    application_name: null == a ? true : a.name
  }
}

function W(e, t) {
  var n, r, i, a, o, l, c, u, d, f, _;
  let m = new Map;
  for (let e in t.framesEncodedByEncoder) {
    let r = t.framesEncodedByEncoder[e],
      i = (0, s.lG)(e),
      a = null != (n = m.get(i)) ? n : 0;
    m.set(i, a + r)
  }
  return M(L({}, e), {
    frames_encoded_nvidia_cuda: null != (r = m.get(s.Su.NVIDIA_CUDA)) ? r : 0,
    frames_encoded_nvidia_direct3d: null != (i = m.get(s.Su.NVIDIA_DIRECT_3D)) ? i : 0,
    frames_encoded_openh264: null != (a = m.get(s.Su.OPENH264)) ? a : 0,
    frames_encoded_videotoolbox: null != (o = m.get(s.Su.VIDEOTOOLBOX)) ? o : 0,
    frames_encoded_amd_direct3d: null != (l = m.get(s.Su.AMD_DIRECT_3D)) ? l : 0,
    frames_encoded_amd_vaapi: null != (c = m.get(s.Su.AMD_VAAPI)) ? c : 0,
    frames_encoded_intel: null != (u = m.get(s.Su.INTEL)) ? u : 0,
    frames_encoded_intel_direct3d: null != (d = m.get(s.Su.INTEL_DIRECT_3D)) ? d : 0,
    frames_encoded_uncategorized: null != (f = m.get(s.Su.UNCATEGORIZED)) ? f : 0,
    frames_encoded_unknown: null != (_ = m.get(s.Su.UNKNOWN)) ? _ : 0,
    frames_submitted: t.framesSubmitted,
    frames_submitted_during_clip: t.framesSubmittedDuringClip,
    frames_encoded: t.framesEncoded,
    frames_encoded_during_clip: t.framesEncodedDuringClip,
    frames_dropped: t.framesDropped,
    frames_dropped_during_clip: t.framesDroppedDuringClip,
    clip_duration_setting: S.Z.getSettings().clipsLength,
    clip_duration: t.clipDuration,
    clip_resolution_width: t.clipResolutionWidth,
    clip_resolution_height: t.clipResolutionHeight,
    min_fps: t.minFps,
    max_fps: t.maxFps,
    submitted_fps: t.submittedFps,
    target_fps: p.Z.getState().fps,
    audio_track_count: t.audioTrackCount,
    saved_at: t.savedAt
  })
}
async function K(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    n = arguments.length > 2 ? arguments[2] : true,
    r = arguments.length > 3 ? arguments[3] : true,
    i = S.Z.getSettings().storageLocation,
    s = (0, C.Z)(e, t, I.NJ.CLIP, n, r),
    l = "".concat((0, T.Z)(s.applicationName.substring(0, 20)), "_").concat(s.id, ".mp4"),
    u = o.Z.fileManager.join(i, l),
    d = h.Z.getMediaEngine(),
    f = JSON.stringify(s),
    p = null != e ? (0, c.my)(e).ownerId : true,
    _ = Y(e);
  null != e && a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
    clip: M(L({}, s), {
      pending: true,
      filepath: u
    })
  });
  try {
    let {
      duration: e,
      clipStats: t
    } = await (null != p ? d.saveClipForUser(p, u, f) : d.saveClip(u, f)), n = W(_, t);
    n.clip_save_time_ms = t.clipSaveTimeMs, n.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (n.decode_fps_during_clip = t.viewerDecodeFps, n.encode_fps_during_clip = t.viewerEncodeFps, n.target_fps = null), y.default.track(D.rMx.CLIP_SAVED, n);
    let r = "";
    try {
      r = await (0, R.R)(o.Z.clips.getClipProtocolURLFromPath(u), 0)
    } catch (e) {
      w.jF.warn("Failed to generate clip thumbnail:", e)
    }
    return s.thumbnail = r, s.length = e, w.jF.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(r.length, " bytes thumbnail.")), await d.updateClipMetadata(u, JSON.stringify(s)), M(L({}, s), {
      filepath: u
    })
  } catch (r) {
    if (null != e && a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
        clipId: s.id
      }), !("errorMessage" in r)) throw y.default.track(D.rMx.CLIP_SAVE_FAILURE, _), r;
    let t = r,
      n = W(_, t);
    throw n.error_at = t.errorAt, n.error_message = t.errorMessage, y.default.track(D.rMx.CLIP_SAVE_FAILURE, n), t.errorMessage
  }
}
async function z(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    o = arguments.length > 2 ? arguments[2] : true,
    s = arguments.length > 3 ? arguments[3] : true,
    {
      enableViewerClipping: f
    } = u.Z.getCurrentConfig({
      location: "SaveClip"
    }, {
      autoTrackExposure: false
    });
  if (S.Z.getIsAtMaxSaveClipOperations()) return;
  let p = (0, A.LI)() && null != _.Z.getCurrentUserActiveStream(),
    E = (0, A.CY)() && (null == (t = l.ZP.getVisibleGame()) ? true : t.windowHandle) != null && h.Z.hasClipsSource(),
    y = null != e && null != _.Z.getActiveStreamForStreamKey(e) && f,
    O = (0, v.n7)() && (0, A.LI)() && null == _.Z.getCurrentUserActiveStream() && null != g.Z.getChannelId();
  if (!p && !E && !y && !O) return;
  let I = _.Z.getCurrentUserActiveStream(),
    T = null != I ? (0, c.V9)(I) : true,
    C = null != e ? e : T,
    N = (() => {
      let e = null != C ? (0, c.my)(C).ownerId : true;
      return e === m.default.getId() ? w.X9.STREAMER : null != e ? w.X9.VIEWER : E ? w.X9.DECOUPLED : w.X9.VOICE
    })(),
    P = await (async () => {
      if (null == C) return;
      let {
        ownerId: e,
        guildId: t
      } = (0, c.my)(C), n = b.Z.getStreamId(e, t, r.Yn.STREAM);
      if (null != n) try {
        let e = (0, i.zS)(),
          t = await e.getNextVideoOutputFrame(n);
        return (0, R.W)(t)
      } catch (e) {
        return
      }
    })();
  a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: N,
    streamKey: C,
    thumbnail: P,
    clipMethod: n
  });
  let D = "manual" === n ? (0, d.GN)("clip_save", .5) : null,
    x = performance.now();
  try {
    if ("auto" === n) {
      let e = S.Z.getSettings().maxAutoClips,
        t = S.Z.getClips().filter(e => true === e.isTemporary),
        n = t.length - e + 1;
      if (n > 0) {
        let r = t.sort((e, t) => {
          let n = parseInt(e.id, 10),
            r = parseInt(t.id, 10);
          return n - r
        }).slice(0, n);
        for (let t of (w.jF.info("Deleting ".concat(r.length, " temporary clips to stay within limit of ").concat(e)), r)) try {
          await en(t.filepath)
        } catch (e) {
          w.jF.error("Failed to delete temporary clip", e)
        }
      }
    }
    let e = await K(C, n, o, s);
    a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    })
  } catch (e) {
    w.jF.error("Clip Failed to Save", e), null == D || D.stop(), (0, d.GN)("clip_error", .5), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    })
  }
  w.jF.info("".concat(S.Z.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - x), "ms"))
}
async function q(e, t) {
  let n, r;
  if (S.Z.getIsAtMaxSaveClipOperations()) return;
  let i = _.Z.getCurrentUserActiveStream(),
    s = null != i ? (0, c.V9)(i) : true,
    u = null != e ? e : s,
    f = h.Z.getMediaEngine(),
    p = (0, C.Z)(u, t, I.NJ.SCREENSHOT),
    g = S.Z.getSettings().storageLocation,
    E = "jpeg",
    b = "".concat((0, T.Z)(p.applicationName.substring(0, 20)), "_").concat(p.id, ".").concat(E),
    y = o.Z.fileManager.join(g, b),
    O = (null != u ? (0, c.my)(u).ownerId : true) === m.default.getId() ? w.X9.STREAMER : w.X9.VIEWER;
  if (null != p.applicationId && null != (r = l.ZP.getRunningGames().find(e => e.id === p.applicationId)) && w.jF.log("Matched application ID to running game:", p.applicationId, r.name), null == r && null != p.applicationName && null != (r = l.ZP.getRunningGames().find(e => e.name === p.applicationName)) && w.jF.log("Matched application name to running game:", p.applicationName), null == r && null != (r = l.ZP.getVisibleGame()) && w.jF.log("Using visible game for screenshot:", r.name), (null == r ? true : r.windowHandle) != null) n = parseInt(r.windowHandle, 10), w.jF.log("Using window handle for full resolution screenshot:", n);
  else {
    w.jF.error("Failed to save screenshot: No window handle available"), (0, d.GN)("clip_error", .5);
    return
  }
  a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: O,
    streamKey: u,
    thumbnail: true,
    clipMethod: null != t ? t : "manual"
  });
  let v = (0, d.GN)("clip_save", .5),
    A = performance.now();
  try {
    let e = M(L({}, p), {
        filepath: y,
        length: 0,
        thumbnail: ""
      }),
      t = JSON.stringify(e),
      r = (await f.saveScreenshot(y, t, 90, true, n)).toString("base64");
    e.thumbnail = "data:image/jpeg;base64,".concat(r), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    }), w.jF.info("Screenshot save took ".concat(Math.round(performance.now() - A), "ms")), w.jF.log("Successfully saved screenshot to:", y)
  } catch (e) {
    throw w.jF.error("Failed to save screenshot:", e), null == v || v.stop(), (0, d.GN)("clip_error", .5), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    }), e
  }
}

function Q(e, t) {
  a.Z.dispatch({
    type: "CLIPS_SAVE_ANIMATION_END",
    streamKey: e,
    timestamp: t
  })
}
async function X(e, t) {
  let n = S.Z.getClips().find(t => t.id === e);
  if (null == n) return;
  let r = L({}, n, t);
  null != await (0, N.w)(r) && (await h.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)), y.default.track(D.rMx.CLIP_EDITED, {
    clip_id: r.id
  }), a.Z.dispatch({
    type: "CLIPS_UPDATE_METADATA",
    clip: r
  }))
}
async function J(e) {
  await X(e.id, {
    isFavorite: !e.isFavorite
  })
}

function $() {
  Chunk570140.Z.dispatch({
    type: "CLIPS_CLEAR_CLIPS_SESSION"
  })
}

function ee() {
  Chunk570140.Z.dispatch({
    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
  })
}
async function et(e) {
  var t;
  if (!(0, O.isDesktop)() || (null == (t = o.Z.clips) ? true : t.loadClipsDirectory) == null) return;
  let n = await o.Z.clips.loadClipsDirectory(e),
    r = [];
  for (let e of n) {
    let t = await (0, N.w)(M(L({}, e.metadata), {
      filepath: e.filepath
    }));
    null != t && r.push(t)
  }
  a.Z.dispatch({
    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
    clips: r
  })
}
async function en(e) {
  var t;
  (0, O.isDesktop)() && (null == (t = o.Z.clips) ? true : t.deleteClip) != null && (await o.Z.clips.deleteClip(e), a.Z.dispatch({
    type: "CLIPS_DELETE_CLIP",
    filepath: e
  }))
}
async function er(e) {
  var t;
  let n = h.Z.getMediaEngine(),
    r = await n.exportClip(e.filepath, null != (t = e.editMetadata) ? t : {
      start: 0,
      end: e.length / 1e3,
      applicationAudio: true,
      voiceAudio: true,
      soundboardAudio: true
    });
  return e.type === I.NJ.SCREENSHOT ? r : (0, P.Z)(r)
}

function ei(e) {
  a.Z.dispatch({
    type: "CLIPS_SET_EXPORTING",
    clipIds: e
  })
}

function ea(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      maxAutoClips: e
    }
  })
}

function eo(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipSignals: L({}, S.Z.getSettings().clipSignals, e)
    }
  })
}

function es(e) {
  let t = h.Z.getMediaEngine().setClipsMLPipelineTypeEnabled;
  null != t && (t("emotion_classifier", e.emotionClassifier), t("wake_word_detector", e.wakeWordDetector), t("yell_detector", e.yellDetector), t("whisper_transcription", e.whisperTranscription)), a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      mlPipelinesEnabled: L({}, S.Z.getSettings().mlPipelinesEnabled, e)
    }
  })
}

function el(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      autoClipPhrases: e
    }
  })
}

function ec(e, t) {
  a.Z.dispatch({
    type: "CLIPS_SIGNAL_CREATED",
    signal: e,
    timestamp: t
  })
}

function eu() {
  ec({
    type: Chunk894694.Bs.MANUAL
  })
}
async function ed(e) {
  await X(e, {
    isTemporary: false
  })
}