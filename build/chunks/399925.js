/** Chunk was on web.js **/
/** chunk id: 399925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fb: () => et,
  GS: () => B,
  H1: () => ei,
  HU: () => F,
  MI: () => X,
  Mt: () => V,
  PW: () => es,
  Su: () => ee,
  Ts: () => ec,
  VO: () => er,
  Wn: () => Y,
  XK: () => J,
  Yy: () => Q,
  dR: () => eo,
  e6: () => ea,
  eQ: () => k,
  fd: () => G,
  h$: () => H,
  jA: () => $,
  l0: () => eu,
  oH: () => en,
  pM: () => el,
  w7: () => ed,
  yO: () => U,
  yT: () => Z,
  yd: () => q
}), require("./896048.js"), require("./457529.js"), require("./638769.js"), require("./321073.js");
var Chunk205693 = require("./205693.js"),
  Chunk823598 = require("./823598.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77729 = require("./77729.js"),
  Chunk166929 = require("./166929.js"),
  Chunk15285 = require("./15285.js"),
  Chunk652896 = require("./652896.js"),
  Chunk670470 = require("./670470.js"),
  Chunk400492 = require("./400492.js"),
  Chunk253932 = require("./253932.js"),
  Chunk929921 = require("./929921.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk162605 = require("./162605.js"),
  Chunk803301 = require("./803301.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js"),
  Chunk372684 = require("./372684.js"),
  Chunk439818 = require("./439818.js"),
  Chunk520165 = require("./520165.js"),
  Chunk572164 = require("./572164.js"),
  Chunk142135 = require("./142135.js"),
  Chunk93532 = require("./93532.js"),
  Chunk956050 = require("./956050.js"),
  Chunk696016 = require("./696016.js"),
  Chunk652215 = require("./652215.js");

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
  await f.Q$.updateSetting(t), b.default.track(D.HAw.CLIPS_SETTINGS_UPDATED, {
    allow_voice_recording: t
  }), a.h.dispatch({
    type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE"
  })
}
async function U(e) {
  let {
    clipsEnabled: t,
    guildId: n,
    trackAnalytics: r = false
  } = e;
  await a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: L({
      clipsEnabled: t
    }, !t && {
      decoupledClipsEnabled: false
    })
  }), r && b.default.track(D.HAw.CLIPS_SETTINGS_UPDATED, L({
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
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: M(L({}, t && {
      clipsEnabled: true
    }), {
      decoupledClipsEnabled: t
    })
  }), n && b.default.track(D.HAw.CLIPS_SETTINGS_UPDATED, M(L({}, t && {
    clips_enabled: true
  }), {
    decoupled_clips_enabled: t
  }))
}

function V(e) {
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      remindersEnabled: e
    }
  }), b.default.track(D.HAw.CLIPS_SETTINGS_UPDATED, {
    reminders_enabled: e
  })
}

function F(e) {
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      storageLocation: e
    }
  })
}

function B(e) {
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsQuality: e
    }
  })
}

function H(e) {
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsLength: e
    }
  })
}

function Y(e) {
  let {
    enabled: t,
    trackAnalytics: n = false
  } = e;
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      viewerClipsEnabled: t
    }
  }), n && b.default.track(D.HAw.CLIPS_SETTINGS_UPDATED, {
    viewer_clips_enabled: t
  })
}

function W(e) {
  var t;
  let n, r, i;
  if (null != e) {
    n = null != e ? E.A.getRTCConnection(e) : null;
    let t = (0, c.Iy)(e);
    r = t.guildId, i = t.channelId
  } else {
    let e = h.default.getId(),
      t = _.A.getActiveStreamForUser(e, null);
    n = null != t ? E.A.getRTCConnection((0, c._z)(t)) : null, r = null == t ? true : t.guildId, i = null == t ? true : t.channelId
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

function K(e, t) {
  var n, r, i, a, s, l, c, u, d, f, _;
  let h = new Map;
  for (let e in t.framesEncodedByEncoder) {
    let n = t.framesEncodedByEncoder[e],
      r = (0, o.kZ)(e),
      i = null != (_ = h.get(r)) ? _ : 0;
    h.set(r, i + n)
  }
  return M(L({}, e), {
    frames_encoded_nvidia_cuda: null != (n = h.get(o.yo.NVIDIA_CUDA)) ? n : 0,
    frames_encoded_nvidia_direct3d: null != (r = h.get(o.yo.NVIDIA_DIRECT_3D)) ? r : 0,
    frames_encoded_openh264: null != (i = h.get(o.yo.OPENH264)) ? i : 0,
    frames_encoded_videotoolbox: null != (a = h.get(o.yo.VIDEOTOOLBOX)) ? a : 0,
    frames_encoded_amd_direct3d: null != (s = h.get(o.yo.AMD_DIRECT_3D)) ? s : 0,
    frames_encoded_amd_vaapi: null != (l = h.get(o.yo.AMD_VAAPI)) ? l : 0,
    frames_encoded_intel: null != (c = h.get(o.yo.INTEL)) ? c : 0,
    frames_encoded_intel_direct3d: null != (u = h.get(o.yo.INTEL_DIRECT_3D)) ? u : 0,
    frames_encoded_uncategorized: null != (d = h.get(o.yo.UNCATEGORIZED)) ? d : 0,
    frames_encoded_unknown: null != (f = h.get(o.yo.UNKNOWN)) ? f : 0,
    frames_submitted: t.framesSubmitted,
    frames_submitted_during_clip: t.framesSubmittedDuringClip,
    frames_encoded: t.framesEncoded,
    frames_encoded_during_clip: t.framesEncodedDuringClip,
    frames_dropped: t.framesDropped,
    frames_dropped_during_clip: t.framesDroppedDuringClip,
    clip_duration_setting: A.A.getSettings().clipsLength,
    clip_duration: t.clipDuration,
    clip_resolution_width: t.clipResolutionWidth,
    clip_resolution_height: t.clipResolutionHeight,
    min_fps: t.minFps,
    max_fps: t.maxFps,
    submitted_fps: t.submittedFps,
    target_fps: p.A.getState().fps,
    audio_track_count: t.audioTrackCount,
    saved_at: t.savedAt
  })
}
async function z(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    n = arguments.length > 2 ? arguments[2] : true,
    r = arguments.length > 3 ? arguments[3] : true,
    i = A.A.getSettings().storageLocation,
    o = (0, T.A)(e, t, I.nQ.CLIP, n, r),
    l = "".concat((0, S.A)(o.applicationName.substring(0, 20)), "_").concat(o.id, ".mp4"),
    u = s.A.fileManager.join(i, l),
    d = m.A.getMediaEngine(),
    f = JSON.stringify(o),
    p = null != e ? (0, c.Iy)(e).ownerId : true,
    _ = W(e);
  null != e && a.h.dispatch({
    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
    clip: M(L({}, o), {
      pending: true,
      filepath: u
    })
  });
  try {
    let {
      duration: e,
      clipStats: t
    } = await (null != p ? d.saveClipForUser(p, u, f) : d.saveClip(u, f)), n = K(_, t);
    n.clip_save_time_ms = t.clipSaveTimeMs, n.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (n.decode_fps_during_clip = t.viewerDecodeFps, n.encode_fps_during_clip = t.viewerEncodeFps, n.target_fps = null), b.default.track(D.HAw.CLIP_SAVED, n);
    let r = "";
    try {
      r = await (0, R.m)(s.A.clips.getClipProtocolURLFromPath(u), 0)
    } catch (e) {
      P.nx.warn("Failed to generate clip thumbnail:", e)
    }
    return o.thumbnail = r, o.length = e, P.nx.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(r.length, " bytes thumbnail.")), await d.updateClipMetadata(u, JSON.stringify(o)), M(L({}, o), {
      filepath: u
    })
  } catch (r) {
    if (null != e && a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
        clipId: o.id
      }), !("errorMessage" in r)) throw b.default.track(D.HAw.CLIP_SAVE_FAILURE, _), r;
    let t = r,
      n = K(_, t);
    throw n.error_at = t.errorAt, n.error_message = t.errorMessage, b.default.track(D.HAw.CLIP_SAVE_FAILURE, n), t.errorMessage
  }
}
async function q(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    s = arguments.length > 2 ? arguments[2] : true,
    o = arguments.length > 3 ? arguments[3] : true,
    {
      enableViewerClipping: f
    } = u.A.getCurrentConfig({
      location: "SaveClip"
    }, {
      autoTrackExposure: false
    });
  if (A.A.getIsAtMaxSaveClipOperations()) return;
  let p = (0, C.TD)() && null != _.A.getCurrentUserActiveStream(),
    E = (0, C.Ao)() && (null == (t = l.Ay.getVisibleGame()) ? true : t.windowHandle) != null && m.A.hasClipsSource(),
    b = null != e && null != _.A.getActiveStreamForStreamKey(e) && f,
    O = (0, v.Vr)() && (0, C.TD)() && null == _.A.getCurrentUserActiveStream() && null != g.A.getChannelId();
  if (!p && !E && !b && !O) return;
  let I = _.A.getCurrentUserActiveStream(),
    S = null != I ? (0, c._z)(I) : true,
    T = null != e ? e : S,
    N = (() => {
      let e = null != T ? (0, c.Iy)(T).ownerId : true;
      return e === h.default.getId() ? P.Fv.STREAMER : null != e ? P.Fv.VIEWER : E ? P.Fv.DECOUPLED : P.Fv.VOICE
    })(),
    w = await (async () => {
      if (null == T) return;
      let {
        ownerId: e,
        guildId: t
      } = (0, c.Iy)(T), n = y.A.getStreamId(e, t, r.x.STREAM);
      if (null != n) try {
        let e = (0, i.lE)(),
          t = await e.getNextVideoOutputFrame(n);
        return (0, R.n)(t)
      } catch (e) {
        return
      }
    })();
  a.h.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: N,
    streamKey: T,
    thumbnail: w,
    clipMethod: n
  });
  let D = "manual" === n ? (0, d.Ak)("clip_save", .5) : null,
    x = performance.now();
  try {
    if ("auto" === n) {
      let e = A.A.getSettings().maxAutoClips,
        t = A.A.getClips().filter(e => true === e.isTemporary),
        n = t.length - e + 1;
      if (n > 0) {
        let r = t.sort((e, t) => {
          let n = parseInt(e.id, 10),
            r = parseInt(t.id, 10);
          return n - r
        }).slice(0, n);
        for (let t of (P.nx.info("Deleting ".concat(r.length, " temporary clips to stay within limit of ").concat(e)), r)) try {
          await en(t.filepath)
        } catch (e) {
          P.nx.error("Failed to delete temporary clip", e)
        }
      }
    }
    let e = await z(T, n, s, o);
    a.h.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    })
  } catch (e) {
    P.nx.error("Clip Failed to Save", e), null == D || D.stop(), (0, d.Ak)("clip_error", .5), a.h.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    })
  }
  P.nx.info("".concat(A.A.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - x), "ms"))
}
async function Z(e, t) {
  let n, r;
  if (A.A.getIsAtMaxSaveClipOperations()) return;
  let i = _.A.getCurrentUserActiveStream(),
    o = null != i ? (0, c._z)(i) : true,
    u = null != e ? e : o,
    f = m.A.getMediaEngine(),
    p = (0, T.A)(u, t, I.nQ.SCREENSHOT),
    g = A.A.getSettings().storageLocation,
    E = "jpeg",
    y = "".concat((0, S.A)(p.applicationName.substring(0, 20)), "_").concat(p.id, ".").concat(E),
    b = s.A.fileManager.join(g, y),
    O = (null != u ? (0, c.Iy)(u).ownerId : true) === h.default.getId() ? P.Fv.STREAMER : P.Fv.VIEWER;
  if (null != p.applicationId && null != (r = l.Ay.getRunningGames().find(e => e.id === p.applicationId)) && P.nx.log("Matched application ID to running game:", p.applicationId, r.name), null == r && null != p.applicationName && null != (r = l.Ay.getRunningGames().find(e => e.name === p.applicationName)) && P.nx.log("Matched application name to running game:", p.applicationName), null == r && null != (r = l.Ay.getVisibleGame()) && P.nx.log("Using visible game for screenshot:", r.name), (null == r ? true : r.windowHandle) != null) n = parseInt(r.windowHandle, 10), P.nx.log("Using window handle for full resolution screenshot:", n);
  else {
    P.nx.error("Failed to save screenshot: No window handle available"), (0, d.Ak)("clip_error", .5);
    return
  }
  a.h.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: O,
    streamKey: u,
    thumbnail: true,
    clipMethod: null != t ? t : "manual"
  });
  let v = (0, d.Ak)("clip_save", .5),
    C = performance.now();
  try {
    let e = M(L({}, p), {
        filepath: b,
        length: 0,
        thumbnail: ""
      }),
      t = JSON.stringify(e),
      r = (await f.saveScreenshot(b, t, 90, true, n)).toString("base64");
    e.thumbnail = "data:image/jpeg;base64,".concat(r), a.h.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    }), P.nx.info("Screenshot save took ".concat(Math.round(performance.now() - C), "ms")), P.nx.log("Successfully saved screenshot to:", b)
  } catch (e) {
    throw P.nx.error("Failed to save screenshot:", e), null == v || v.stop(), (0, d.Ak)("clip_error", .5), a.h.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    }), e
  }
}

function X(e, t) {
  a.h.dispatch({
    type: "CLIPS_SAVE_ANIMATION_END",
    streamKey: e,
    timestamp: t
  })
}
async function Q(e, t) {
  let n = A.A.getClips().find(t => t.id === e);
  if (null == n) return;
  let r = L({}, n, t);
  null != await (0, N.q)(r) && (await m.A.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)), b.default.track(D.HAw.CLIP_EDITED, {
    clip_id: r.id
  }), a.h.dispatch({
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
  a.h.dispatch({
    type: "CLIPS_CLEAR_CLIPS_SESSION"
  })
}

function ee() {
  a.h.dispatch({
    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
  })
}
async function et(e) {
  var t;
  if (!(0, O.isDesktop)() || (null == (t = s.A.clips) ? true : t.loadClipsDirectory) == null) return;
  let n = await s.A.clips.loadClipsDirectory(e),
    r = [];
  for (let e of n) {
    let t = await (0, N.q)(M(L({}, e.metadata), {
      filepath: e.filepath
    }));
    null != t && r.push(t)
  }
  a.h.dispatch({
    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
    clips: r
  })
}
async function en(e) {
  var t;
  (0, O.isDesktop)() && (null == (t = s.A.clips) ? true : t.deleteClip) != null && (await s.A.clips.deleteClip(e), a.h.dispatch({
    type: "CLIPS_DELETE_CLIP",
    filepath: e
  }))
}
async function er(e) {
  var t;
  let n = m.A.getMediaEngine(),
    r = await n.exportClip(e.filepath, null != (t = e.editMetadata) ? t : {
      start: 0,
      end: e.length / 1e3,
      applicationAudio: true,
      voiceAudio: true,
      soundboardAudio: true
    });
  return e.type === I.nQ.SCREENSHOT ? r : (0, w.A)(r)
}

function ei(e) {
  a.h.dispatch({
    type: "CLIPS_SET_EXPORTING",
    clipIds: e
  })
}

function ea(e) {
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      maxAutoClips: e
    }
  })
}

function es(e) {
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipSignals: L({}, A.A.getSettings().clipSignals, e)
    }
  })
}

function eo(e) {
  let t = m.A.getMediaEngine().setClipsMLPipelineTypeEnabled;
  null != t && (t("emotion_classifier", e.emotionClassifier), t("wake_word_detector", e.wakeWordDetector), t("yell_detector", e.yellDetector), t("whisper_transcription", e.whisperTranscription)), a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      mlPipelinesEnabled: L({}, A.A.getSettings().mlPipelinesEnabled, e)
    }
  })
}

function el(e) {
  a.h.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      autoClipPhrases: e
    }
  })
}

function ec(e, t) {
  a.h.dispatch({
    type: "CLIPS_SIGNAL_CREATED",
    signal: e,
    timestamp: t
  })
}

function eu() {
  ec({
    type: I.Gy.MANUAL
  })
}
async function ed(e) {
  await Q(e, {
    isTemporary: false
  })
}