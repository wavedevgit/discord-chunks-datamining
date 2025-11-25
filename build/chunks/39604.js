/** Chunk was on web.js **/
/** chunk id: 39604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C1: () => z,
  Gh: () => X,
  N0: () => B,
  Pr: () => J,
  Rr: () => eo,
  So: () => es,
  T1: () => Z,
  Tm: () => Q,
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
  yg: () => j,
  yi: () => F,
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

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function j(e) {
  let {
    allowVoiceRecording: t
  } = e;
  await f.tU.updateSetting(t), y.default.track(w.rMx.CLIPS_SETTINGS_UPDATED, {
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
    settings: x({
      clipsEnabled: t
    }, !t && {
      decoupledClipsEnabled: false
    })
  }), r && y.default.track(w.rMx.CLIPS_SETTINGS_UPDATED, x({
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
    settings: k(x({}, t && {
      clipsEnabled: true
    }), {
      decoupledClipsEnabled: t
    })
  }), n && y.default.track(w.rMx.CLIPS_SETTINGS_UPDATED, k(x({}, t && {
    clips_enabled: true
  }), {
    decoupled_clips_enabled: t
  }))
}

function B(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      remindersEnabled: e
    }
  }), y.default.track(w.rMx.CLIPS_SETTINGS_UPDATED, {
    reminders_enabled: e
  })
}

function Z(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      storageLocation: e
    }
  })
}

function F(e) {
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
  }), n && y.default.track(w.rMx.CLIPS_SETTINGS_UPDATED, {
    viewer_clips_enabled: t
  })
}

function W(e) {
  var t;
  let n, r, i;
  if (null != e) {
    n = null != e ? E.Z.getRTCConnection(e) : null;
    let t = (0, c.my)(e);
    r = t.guildId, i = t.channelId
  } else {
    let e = h.default.getId(),
      t = p.Z.getActiveStreamForUser(e, null);
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

function Y(e, t) {
  var n, r, i, a, o, l, c, u, d, f, p;
  let h = new Map;
  for (let e in t.framesEncodedByEncoder) {
    let r = t.framesEncodedByEncoder[e],
      i = (0, s.lG)(e),
      a = null != (n = h.get(i)) ? n : 0;
    h.set(i, a + r)
  }
  return k(x({}, e), {
    frames_encoded_nvidia_cuda: null != (r = h.get(s.Su.NVIDIA_CUDA)) ? r : 0,
    frames_encoded_nvidia_direct3d: null != (i = h.get(s.Su.NVIDIA_DIRECT_3D)) ? i : 0,
    frames_encoded_openh264: null != (a = h.get(s.Su.OPENH264)) ? a : 0,
    frames_encoded_videotoolbox: null != (o = h.get(s.Su.VIDEOTOOLBOX)) ? o : 0,
    frames_encoded_amd_direct3d: null != (l = h.get(s.Su.AMD_DIRECT_3D)) ? l : 0,
    frames_encoded_amd_vaapi: null != (c = h.get(s.Su.AMD_VAAPI)) ? c : 0,
    frames_encoded_intel: null != (u = h.get(s.Su.INTEL)) ? u : 0,
    frames_encoded_intel_direct3d: null != (d = h.get(s.Su.INTEL_DIRECT_3D)) ? d : 0,
    frames_encoded_uncategorized: null != (f = h.get(s.Su.UNCATEGORIZED)) ? f : 0,
    frames_encoded_unknown: null != (p = h.get(s.Su.UNKNOWN)) ? p : 0,
    frames_submitted: t.framesSubmitted,
    frames_submitted_during_clip: t.framesSubmittedDuringClip,
    frames_encoded: t.framesEncoded,
    frames_encoded_during_clip: t.framesEncodedDuringClip,
    frames_dropped: t.framesDropped,
    frames_dropped_during_clip: t.framesDroppedDuringClip,
    clip_duration_setting: I.Z.getSettings().clipsLength,
    clip_duration: t.clipDuration,
    clip_resolution_width: t.clipResolutionWidth,
    clip_resolution_height: t.clipResolutionHeight,
    min_fps: t.minFps,
    max_fps: t.maxFps,
    submitted_fps: t.submittedFps,
    target_fps: _.Z.getState().fps,
    audio_track_count: t.audioTrackCount,
    saved_at: t.savedAt
  })
}
async function K(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    n = arguments.length > 2 ? arguments[2] : true,
    r = arguments.length > 3 ? arguments[3] : true,
    i = I.Z.getSettings().storageLocation,
    s = (0, A.Z)(e, t, T.NJ.CLIP, n, r),
    l = "".concat((0, S.Z)(s.applicationName.substring(0, 20)), "_").concat(s.id, ".mp4"),
    u = o.Z.fileManager.join(i, l),
    d = m.Z.getMediaEngine(),
    f = JSON.stringify(s),
    _ = null != e ? (0, c.my)(e).ownerId : true,
    p = W(e);
  null != e && a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
    clip: k(x({}, s), {
      pending: true,
      filepath: u
    })
  });
  try {
    let {
      duration: e,
      clipStats: t
    } = await (null != _ ? d.saveClipForUser(_, u, f) : d.saveClip(u, f)), n = Y(p, t);
    n.clip_save_time_ms = t.clipSaveTimeMs, n.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (n.decode_fps_during_clip = t.viewerDecodeFps, n.encode_fps_during_clip = t.viewerEncodeFps, n.target_fps = null), y.default.track(w.rMx.CLIP_SAVED, n);
    let r = "";
    try {
      r = await (0, P.R)(o.Z.clips.getClipProtocolURLFromPath(u), 0)
    } catch (e) {
      D.jF.warn("Failed to generate clip thumbnail:", e)
    }
    return s.thumbnail = r, s.length = e, D.jF.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(r.length, " bytes thumbnail.")), await d.updateClipMetadata(u, JSON.stringify(s)), k(x({}, s), {
      filepath: u
    })
  } catch (r) {
    if (null != e && a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
        clipId: s.id
      }), !("errorMessage" in r)) throw y.default.track(w.rMx.CLIP_SAVE_FAILURE, p), r;
    let t = r,
      n = Y(p, t);
    throw n.error_at = t.errorAt, n.error_message = t.errorMessage, y.default.track(w.rMx.CLIP_SAVE_FAILURE, n), t.errorMessage
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
  if (I.Z.getIsAtMaxSaveClipOperations()) return;
  let _ = (0, C.LI)() && null != p.Z.getCurrentUserActiveStream(),
    E = (0, C.CY)() && (null == (t = l.ZP.getVisibleGame()) ? true : t.windowHandle) != null && m.Z.hasClipsSource(),
    y = null != e && null != p.Z.getActiveStreamForStreamKey(e) && f,
    O = (0, v.n7)() && (0, C.LI)() && null == p.Z.getCurrentUserActiveStream() && null != g.Z.getChannelId();
  if (!_ && !E && !y && !O) return;
  let T = p.Z.getCurrentUserActiveStream(),
    S = null != T ? (0, c.V9)(T) : true,
    A = null != e ? e : S,
    N = (() => {
      let e = null != A ? (0, c.my)(A).ownerId : true;
      return e === h.default.getId() ? D.X9.STREAMER : null != e ? D.X9.VIEWER : E ? D.X9.DECOUPLED : D.X9.VOICE
    })(),
    R = await (async () => {
      if (null == A) return;
      let {
        ownerId: e,
        guildId: t
      } = (0, c.my)(A), n = b.Z.getStreamId(e, t, r.Yn.STREAM);
      if (null != n) try {
        let e = (0, i.zS)(),
          t = await e.getNextVideoOutputFrame(n);
        return (0, P.W)(t)
      } catch (e) {
        return
      }
    })();
  a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: N,
    streamKey: A,
    thumbnail: R,
    clipMethod: n
  });
  let w = "manual" === n ? (0, d.GN)("clip_save", .5) : null,
    L = performance.now();
  try {
    if ("auto" === n) {
      let e = I.Z.getSettings().maxAutoClips,
        t = I.Z.getClips().filter(e => true === e.isTemporary),
        n = t.length - e + 1;
      if (n > 0) {
        let r = t.sort((e, t) => {
          let n = parseInt(e.id, 10),
            r = parseInt(t.id, 10);
          return n - r
        }).slice(0, n);
        for (let t of (D.jF.info("Deleting ".concat(r.length, " temporary clips to stay within limit of ").concat(e)), r)) try {
          await en(t.filepath)
        } catch (e) {
          D.jF.error("Failed to delete temporary clip", e)
        }
      }
    }
    let e = await K(A, n, o, s);
    a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    })
  } catch (e) {
    D.jF.error("Clip Failed to Save", e), null == w || w.stop(), (0, d.GN)("clip_error", .5), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    })
  }
  D.jF.info("".concat(I.Z.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - L), "ms"))
}
async function q(e, t) {
  let n, r;
  if (I.Z.getIsAtMaxSaveClipOperations()) return;
  let i = p.Z.getCurrentUserActiveStream(),
    s = null != i ? (0, c.V9)(i) : true,
    u = null != e ? e : s,
    f = m.Z.getMediaEngine(),
    _ = (0, A.Z)(u, t, T.NJ.SCREENSHOT),
    g = I.Z.getSettings().storageLocation,
    E = "jpeg",
    b = "".concat((0, S.Z)(_.applicationName.substring(0, 20)), "_").concat(_.id, ".").concat(E),
    y = o.Z.fileManager.join(g, b),
    O = (null != u ? (0, c.my)(u).ownerId : true) === h.default.getId() ? D.X9.STREAMER : D.X9.VIEWER;
  if (null != _.applicationId && null != (r = l.ZP.getRunningGames().find(e => e.id === _.applicationId)) && D.jF.log("Matched application ID to running game:", _.applicationId, r.name), null == r && null != _.applicationName && null != (r = l.ZP.getRunningGames().find(e => e.name === _.applicationName)) && D.jF.log("Matched application name to running game:", _.applicationName), null == r && null != (r = l.ZP.getVisibleGame()) && D.jF.log("Using visible game for screenshot:", r.name), (null == r ? true : r.windowHandle) != null) n = parseInt(r.windowHandle, 10), D.jF.log("Using window handle for full resolution screenshot:", n);
  else {
    D.jF.error("Failed to save screenshot: No window handle available"), (0, d.GN)("clip_error", .5);
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
    C = performance.now();
  try {
    let e = k(x({}, _), {
        filepath: y,
        length: 0,
        thumbnail: ""
      }),
      t = JSON.stringify(e),
      r = (await f.saveScreenshot(y, t, 90, true, n)).toString("base64");
    e.thumbnail = "data:image/jpeg;base64,".concat(r), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    }), D.jF.info("Screenshot save took ".concat(Math.round(performance.now() - C), "ms")), D.jF.log("Successfully saved screenshot to:", y)
  } catch (e) {
    throw D.jF.error("Failed to save screenshot:", e), null == v || v.stop(), (0, d.GN)("clip_error", .5), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    }), e
  }
}

function X(e, t) {
  a.Z.dispatch({
    type: "CLIPS_SAVE_ANIMATION_END",
    streamKey: e,
    timestamp: t
  })
}
async function Q(e, t) {
  let n = I.Z.getClips().find(t => t.id === e);
  if (null == n) return;
  let r = x({}, n, t);
  null != await (0, N.w)(r) && (await m.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)), y.default.track(w.rMx.CLIP_EDITED, {
    clip_id: r.id
  }), a.Z.dispatch({
    type: "CLIPS_UPDATE_METADATA",
    clip: r
  }))
}
async function J(e) {
  await Q(e.id, {
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
    let t = await (0, N.w)(k(x({}, e.metadata), {
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
  let n = m.Z.getMediaEngine(),
    r = await n.exportClip(e.filepath, null != (t = e.editMetadata) ? t : {
      start: 0,
      end: e.length / 1e3,
      applicationAudio: true,
      voiceAudio: true,
      soundboardAudio: true
    });
  return e.type === T.NJ.SCREENSHOT ? r : (0, R.Z)(r)
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
      clipSignals: x({}, I.Z.getSettings().clipSignals, e)
    }
  })
}

function es(e) {
  let t = m.Z.getMediaEngine().setClipsMLPipelineTypeEnabled;
  null != t && (t("emotion_classifier", e.emotionClassifier), t("wake_word_detector", e.wakeWordDetector), t("yell_detector", e.yellDetector), t("whisper_transcription", e.whisperTranscription)), a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      mlPipelinesEnabled: x({}, I.Z.getSettings().mlPipelinesEnabled, e)
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
  await Q(e, {
    isTemporary: false
  })
}