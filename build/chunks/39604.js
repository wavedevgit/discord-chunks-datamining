/** Chunk was on web.js **/
/** chunk id: 39604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C1: () => $,
  Gh: () => et,
  N0: () => H,
  Pr: () => er,
  Rr: () => ed,
  So: () => ef,
  T1: () => Y,
  Tm: () => en,
  UY: () => ec,
  W6: () => eu,
  WY: () => em,
  XK: () => ep,
  ZW: () => ee,
  _Q: () => V,
  a2: () => e_,
  br: () => eh,
  eL: () => ei,
  eU: () => K,
  em: () => F,
  jv: () => eo,
  rO: () => el,
  sS: () => es,
  yg: () => Z,
  yi: () => W,
  yl: () => z,
  zq: () => ea
}), require("./388685.js"), require("./49124.js"), require("./642613.js"), require("./539854.js");
var Chunk46973 = require("./46973.js"),
  Chunk992774 = require("./992774.js"),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk579806 = require("./579806.js"),
  Chunk674466 = require("./674466.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk441167 = require("./441167.js"),
  Chunk957730 = require("./957730.js"),
  Chunk460181 = require("./460181.js"),
  Chunk695346 = require("./695346.js"),
  Chunk361291 = require("./361291.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function Z(e) {
  let {
    allowVoiceRecording: t
  } = e;
  await p.tU.updateSetting(t), I.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, {
    allow_voice_recording: t
  }), a.Z.dispatch({
    type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE"
  })
}
async function F(e) {
  let {
    clipsEnabled: t,
    guildId: n,
    trackAnalytics: r = false
  } = e;
  await a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: U({
      clipsEnabled: t
    }, !t && {
      decoupledClipsEnabled: false
    })
  }), r && I.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, U({
    clips_enabled: t,
    guild_id: n
  }, !t && {
    decoupled_clips_enabled: false
  }))
}

function V(e) {
  let {
    enabled: t,
    trackAnalytics: n = false
  } = e;
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: B(U({}, t && {
      clipsEnabled: true
    }), {
      decoupledClipsEnabled: t
    })
  }), n && I.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, B(U({}, t && {
    clips_enabled: true
  }), {
    decoupled_clips_enabled: t
  }))
}

function H(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      remindersEnabled: e
    }
  }), I.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, {
    reminders_enabled: e
  })
}

function Y(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      storageLocation: e
    }
  })
}

function W(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsQuality: e
    }
  })
}

function K(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsLength: e
    }
  })
}

function z(e) {
  let {
    enabled: t,
    trackAnalytics: n = false
  } = e;
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      viewerClipsEnabled: t
    }
  }), n && I.default.track(M.rMx.CLIPS_SETTINGS_UPDATED, {
    viewer_clips_enabled: t
  })
}

function q(e) {
  var t;
  let n, r, i;
  if (null != e) {
    n = null != e ? O.Z.getRTCConnection(e) : null;
    let t = (0, u.my)(e);
    r = t.guildId, i = t.channelId
  } else {
    let e = g.default.getId(),
      t = m.Z.getActiveStreamForUser(e, null);
    n = null != t ? O.Z.getRTCConnection((0, u.V9)(t)) : null, r = null == t ? true : t.guildId, i = null == t ? true : t.channelId
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

function X(e, t) {
  var n, r, i, a, o, s, c, u, d, f, _;
  let p = new Map;
  for (let e in t.framesEncodedByEncoder) {
    let r = t.framesEncodedByEncoder[e],
      i = (0, l.lG)(e),
      a = null != (n = p.get(i)) ? n : 0;
    p.set(i, a + r)
  }
  return B(U({}, e), {
    frames_encoded_nvidia_cuda: null != (r = p.get(l.Su.NVIDIA_CUDA)) ? r : 0,
    frames_encoded_nvidia_direct3d: null != (i = p.get(l.Su.NVIDIA_DIRECT_3D)) ? i : 0,
    frames_encoded_openh264: null != (a = p.get(l.Su.OPENH264)) ? a : 0,
    frames_encoded_videotoolbox: null != (o = p.get(l.Su.VIDEOTOOLBOX)) ? o : 0,
    frames_encoded_amd_direct3d: null != (s = p.get(l.Su.AMD_DIRECT_3D)) ? s : 0,
    frames_encoded_amd_vaapi: null != (c = p.get(l.Su.AMD_VAAPI)) ? c : 0,
    frames_encoded_intel: null != (u = p.get(l.Su.INTEL)) ? u : 0,
    frames_encoded_intel_direct3d: null != (d = p.get(l.Su.INTEL_DIRECT_3D)) ? d : 0,
    frames_encoded_uncategorized: null != (f = p.get(l.Su.UNCATEGORIZED)) ? f : 0,
    frames_encoded_unknown: null != (_ = p.get(l.Su.UNKNOWN)) ? _ : 0,
    frames_submitted: t.framesSubmitted,
    frames_submitted_during_clip: t.framesSubmittedDuringClip,
    frames_encoded: t.framesEncoded,
    frames_encoded_during_clip: t.framesEncodedDuringClip,
    frames_dropped: t.framesDropped,
    frames_dropped_during_clip: t.framesDroppedDuringClip,
    clip_duration_setting: A.Z.getSettings().clipsLength,
    clip_duration: t.clipDuration,
    clip_resolution_width: t.clipResolutionWidth,
    clip_resolution_height: t.clipResolutionHeight,
    min_fps: t.minFps,
    max_fps: t.maxFps,
    submitted_fps: t.submittedFps,
    target_fps: h.Z.getState().fps,
    audio_track_count: t.audioTrackCount,
    saved_at: t.savedAt
  })
}

function Q(e) {
  var t, n, r;
  let i = y.Z.getChannelId();
  if (null == i) return void x.jF.info("[ClipsActionCreators] No voice channel, skipping remote trigger message");
  let a = E.Z.getChannel(i);
  if (null == a) return;
  let s = {
      applicationId: e.applicationId,
      activityPartyId: null != (r = null == (n = e.activity) || null == (t = n.party) ? true : t.id) ? r : null,
      triggerClipId: e.id
    },
    l = "__REMOTE_CLIP_TRIGGER__",
    c = "".concat(l).concat(JSON.stringify(s)),
    u = f.ZP.parse(a, c);
  o.Z.sendMessage(i, u, false, {
    flags: M.iLy.SUPPRESS_NOTIFICATIONS,
    location: k.dy.OTHER
  })
}
async function J(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    n = arguments.length > 2 ? arguments[2] : true,
    r = arguments.length > 3 ? arguments[3] : true,
    i = A.Z.getSettings().storageLocation,
    o = (0, R.Z)(e, t, C.NJ.CLIP, n, r),
    l = "".concat((0, N.Z)(o.applicationName.substring(0, 20)), "_").concat(o.id, ".mp4"),
    c = s.Z.fileManager.join(i, l),
    d = b.Z.getMediaEngine(),
    f = JSON.stringify(o),
    _ = null != e ? (0, u.my)(e).ownerId : true,
    p = q(e);
  null != e && a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
    clip: B(U({}, o), {
      pending: true,
      filepath: c
    })
  });
  try {
    let {
      duration: e,
      clipStats: t
    } = await (null != _ ? d.saveClipForUser(_, c, f) : d.saveClip(c, f)), n = X(p, t);
    n.clip_save_time_ms = t.clipSaveTimeMs, n.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (n.decode_fps_during_clip = t.viewerDecodeFps, n.encode_fps_during_clip = t.viewerEncodeFps, n.target_fps = null), I.default.track(M.rMx.CLIP_SAVED, n);
    let r = "";
    try {
      r = await (0, L.R)(s.Z.clips.getClipProtocolURLFromPath(c), 0)
    } catch (e) {
      x.jF.warn("Failed to generate clip thumbnail:", e)
    }
    return o.thumbnail = r, o.length = e, x.jF.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(r.length, " bytes thumbnail.")), await d.updateClipMetadata(c, JSON.stringify(o)), B(U({}, o), {
      filepath: c
    })
  } catch (r) {
    if (null != e && a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
        clipId: o.id
      }), !("errorMessage" in r)) throw I.default.track(M.rMx.CLIP_SAVE_FAILURE, p), r;
    let t = r,
      n = X(p, t);
    throw n.error_at = t.errorAt, n.error_message = t.errorMessage, I.default.track(M.rMx.CLIP_SAVE_FAILURE, n), t.errorMessage
  }
}
async function $(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    o = arguments.length > 2 ? arguments[2] : true,
    s = arguments.length > 3 ? arguments[3] : true,
    {
      enableViewerClipping: l
    } = d.Z.getCurrentConfig({
      location: "SaveClip"
    }, {
      autoTrackExposure: false
    });
  if (A.Z.getIsAtMaxSaveClipOperations()) return;
  let f = (0, P.LI)() && null != m.Z.getCurrentUserActiveStream(),
    p = (0, P.CY)() && (null == (t = c.ZP.getVisibleGame()) ? true : t.windowHandle) != null && b.Z.hasClipsSource(),
    h = null != e && null != m.Z.getActiveStreamForStreamKey(e) && l,
    E = (0, S.n7)() && (0, P.LI)() && null == m.Z.getCurrentUserActiveStream() && null != y.Z.getChannelId();
  if (!f && !p && !h && !E) return;
  let O = m.Z.getCurrentUserActiveStream(),
    I = null != O ? (0, u.V9)(O) : true,
    T = null != e ? e : I,
    C = (() => {
      let e = null != T ? (0, u.my)(T).ownerId : true;
      return e === g.default.getId() ? x.X9.STREAMER : null != e ? x.X9.VIEWER : p ? x.X9.DECOUPLED : x.X9.VOICE
    })(),
    N = await (async () => {
      if (null == T) return;
      let {
        ownerId: e,
        guildId: t
      } = (0, u.my)(T), n = v.Z.getStreamId(e, t, r.Yn.STREAM);
      if (null != n) try {
        let e = (0, i.zS)(),
          t = await e.getNextVideoOutputFrame(n);
        return (0, L.W)(t)
      } catch (e) {
        return
      }
    })();
  a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: C,
    streamKey: T,
    thumbnail: N,
    clipMethod: n
  });
  let R = "manual" === n ? (0, _.GN)("clip_save", .5) : null,
    D = performance.now();
  try {
    if ("auto" === n) {
      let e = A.Z.getSettings().maxAutoClips,
        t = A.Z.getClips().filter(e => true === e.isTemporary),
        n = t.length - e + 1;
      if (n > 0) {
        let r = t.sort((e, t) => {
          let n = parseInt(e.id, 10),
            r = parseInt(t.id, 10);
          return n - r
        }).slice(0, n);
        for (let t of (x.jF.info("Deleting ".concat(r.length, " temporary clips to stay within limit of ").concat(e)), r)) try {
          await es(t.filepath)
        } catch (e) {
          x.jF.error("Failed to delete temporary clip", e)
        }
      }
    }
    let e = await J(T, n, o, s);
    a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    }), "manual" === n && (0, S.NS)() && Q(e)
  } catch (e) {
    x.jF.error("Clip Failed to Save", e), null == R || R.stop(), (0, _.GN)("clip_error", .5), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    })
  }
  x.jF.info("".concat(A.Z.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - D), "ms"))
}
async function ee(e, t) {
  let n, r;
  if (A.Z.getIsAtMaxSaveClipOperations()) return;
  let i = m.Z.getCurrentUserActiveStream(),
    o = null != i ? (0, u.V9)(i) : true,
    l = null != e ? e : o,
    d = b.Z.getMediaEngine(),
    f = (0, R.Z)(l, t, C.NJ.SCREENSHOT),
    p = A.Z.getSettings().storageLocation,
    h = "jpeg",
    E = "".concat((0, N.Z)(f.applicationName.substring(0, 20)), "_").concat(f.id, ".").concat(h),
    y = s.Z.fileManager.join(p, E),
    O = (null != l ? (0, u.my)(l).ownerId : true) === g.default.getId() ? x.X9.STREAMER : x.X9.VIEWER;
  if (null != f.applicationId && null != (r = c.ZP.getRunningGames().find(e => e.id === f.applicationId)) && x.jF.log("Matched application ID to running game:", f.applicationId, r.name), null == r && null != f.applicationName && null != (r = c.ZP.getRunningGames().find(e => e.name === f.applicationName)) && x.jF.log("Matched application name to running game:", f.applicationName), null == r && null != (r = c.ZP.getVisibleGame()) && x.jF.log("Using visible game for screenshot:", r.name), (null == r ? true : r.windowHandle) != null) n = parseInt(r.windowHandle, 10), x.jF.log("Using window handle for full resolution screenshot:", n);
  else {
    x.jF.error("Failed to save screenshot: No window handle available"), (0, _.GN)("clip_error", .5);
    return
  }
  a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: O,
    streamKey: l,
    thumbnail: true,
    clipMethod: null != t ? t : "manual"
  });
  let v = (0, _.GN)("clip_save", .5),
    I = performance.now();
  try {
    let e = B(U({}, f), {
        filepath: y,
        length: 0,
        thumbnail: ""
      }),
      t = JSON.stringify(e),
      r = (await d.saveScreenshot(y, t, 90, true, n)).toString("base64");
    e.thumbnail = "data:image/jpeg;base64,".concat(r), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    }), x.jF.info("Screenshot save took ".concat(Math.round(performance.now() - I), "ms")), x.jF.log("Successfully saved screenshot to:", y)
  } catch (e) {
    throw x.jF.error("Failed to save screenshot:", e), null == v || v.stop(), (0, _.GN)("clip_error", .5), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    }), e
  }
}

function et(e, t) {
  a.Z.dispatch({
    type: "CLIPS_SAVE_ANIMATION_END",
    streamKey: e,
    timestamp: t
  })
}
async function en(e, t) {
  let n = A.Z.getClips().find(t => t.id === e);
  if (null == n) return;
  let r = U({}, n, t);
  null != await (0, D.w)(r) && (await b.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)), I.default.track(M.rMx.CLIP_EDITED, {
    clip_id: r.id
  }), a.Z.dispatch({
    type: "CLIPS_UPDATE_METADATA",
    clip: r
  }))
}
async function er(e) {
  await en(e.id, {
    isFavorite: !e.isFavorite
  })
}

function ei() {
  Chunk570140.Z.dispatch({
    type: "CLIPS_CLEAR_CLIPS_SESSION"
  })
}

function ea() {
  Chunk570140.Z.dispatch({
    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
  })
}
async function eo(e) {
  var t;
  if (!(0, T.isDesktop)() || (null == (t = s.Z.clips) ? true : t.loadClipsDirectory) == null) return;
  let n = await s.Z.clips.loadClipsDirectory(e),
    r = [];
  for (let e of n) {
    let t = await (0, D.w)(B(U({}, e.metadata), {
      filepath: e.filepath
    }));
    null != t && r.push(t)
  }
  a.Z.dispatch({
    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
    clips: r
  })
}
async function es(e) {
  var t;
  (0, T.isDesktop)() && (null == (t = s.Z.clips) ? true : t.deleteClip) != null && (await s.Z.clips.deleteClip(e), a.Z.dispatch({
    type: "CLIPS_DELETE_CLIP",
    filepath: e
  }))
}
async function el(e) {
  var t;
  let n = b.Z.getMediaEngine(),
    r = await n.exportClip(e.filepath, null != (t = e.editMetadata) ? t : {
      start: 0,
      end: e.length / 1e3,
      applicationAudio: true,
      voiceAudio: true,
      soundboardAudio: true
    });
  return e.type === C.NJ.SCREENSHOT ? r : (0, w.Z)(r)
}

function ec(e) {
  a.Z.dispatch({
    type: "CLIPS_SET_EXPORTING",
    clipIds: e
  })
}

function eu(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      maxAutoClips: e
    }
  })
}

function ed(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipSignals: U({}, A.Z.getSettings().clipSignals, e)
    }
  })
}

function ef(e) {
  let t = b.Z.getMediaEngine().setClipsMLPipelineTypeEnabled;
  null != t && (t("emotion_classifier", e.emotionClassifier), t("wake_word_detector", e.wakeWordDetector), t("yell_detector", e.yellDetector), t("whisper_transcription", e.whisperTranscription)), a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      mlPipelinesEnabled: U({}, A.Z.getSettings().mlPipelinesEnabled, e)
    }
  })
}

function e_(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      autoClipPhrases: e
    }
  })
}

function ep(e, t) {
  a.Z.dispatch({
    type: "CLIPS_SIGNAL_CREATED",
    signal: e,
    timestamp: t
  })
}

function eh() {
  ep({
    type: Chunk894694.Bs.MANUAL
  })
}
async function em(e) {
  await en(e, {
    isTemporary: false
  })
}