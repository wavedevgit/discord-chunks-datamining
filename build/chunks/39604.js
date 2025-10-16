/** Chunk was on web.js **/
/** chunk id: 39604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C1: () => H,
  Gh: () => Y,
  N0: () => k,
  T1: () => j,
  Tm: () => W,
  _Q: () => M,
  eL: () => K,
  eU: () => G,
  em: () => x,
  jv: () => q,
  rO: () => Q,
  sS: () => X,
  yg: () => L,
  yi: () => U,
  yl: () => B,
  zq: () => z
}), require("./388685.js"), require("./49124.js"), require("./539854.js");
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
  Chunk959457 = require("./959457.js"),
  Chunk33039 = require("./33039.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk435064 = require("./435064.js"),
  Chunk61994 = require("./61994.js"),
  Chunk550351 = require("./550351.js"),
  Chunk659487 = require("./659487.js"),
  Chunk711644 = require("./711644.js"),
  Chunk259612 = require("./259612.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function L(e) {
  let {
    allowVoiceRecording: t
  } = e;
  await f.tU.updateSetting(t), b.default.track(N.rMx.CLIPS_SETTINGS_UPDATED, {
    allow_voice_recording: t
  }), a.Z.dispatch({
    type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE"
  })
}
async function x(e) {
  let {
    clipsEnabled: t,
    guildId: n,
    trackAnalytics: r = false
  } = e;
  await a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: P({
      clipsEnabled: t
    }, !t && {
      decoupledClipsEnabled: false
    })
  }), r && b.default.track(N.rMx.CLIPS_SETTINGS_UPDATED, P({
    clips_enabled: t,
    guild_id: n
  }, !t && {
    decoupled_clips_enabled: false
  }))
}

function M(e) {
  let {
    enabled: t,
    trackAnalytics: n = false
  } = e;
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: D(P({}, t && {
      clipsEnabled: true
    }), {
      decoupledClipsEnabled: t
    })
  }), n && b.default.track(N.rMx.CLIPS_SETTINGS_UPDATED, D(P({}, t && {
    clips_enabled: true
  }), {
    decoupled_clips_enabled: t
  }))
}

function k(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      remindersEnabled: e
    }
  }), b.default.track(N.rMx.CLIPS_SETTINGS_UPDATED, {
    reminders_enabled: e
  })
}

function j(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      storageLocation: e
    }
  })
}

function U(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsQuality: e
    }
  })
}

function G(e) {
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsLength: e
    }
  })
}

function B(e) {
  let {
    enabled: t,
    trackAnalytics: n = false
  } = e;
  a.Z.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      viewerClipsEnabled: t
    }
  }), n && b.default.track(N.rMx.CLIPS_SETTINGS_UPDATED, {
    viewer_clips_enabled: t
  })
}

function Z(e) {
  var t;
  let n, r, i;
  if (null != e) {
    n = null != e ? g.Z.getRTCConnection(e) : null;
    let t = (0, c.my)(e);
    r = t.guildId, i = t.channelId
  } else {
    let e = h.default.getId(),
      t = p.Z.getActiveStreamForUser(e, null);
    n = null != t ? g.Z.getRTCConnection((0, c.V9)(t)) : null, r = null == t ? true : t.guildId, i = null == t ? true : t.channelId
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

function F(e, t) {
  var n, r, i, a, o, l, c, u, d, f, p;
  let h = new Map;
  for (let e in t.framesEncodedByEncoder) {
    let r = t.framesEncodedByEncoder[e],
      i = (0, s.lG)(e),
      a = null != (n = h.get(i)) ? n : 0;
    h.set(i, a + r)
  }
  return D(P({}, e), {
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
    clip_duration_setting: O.Z.getSettings().clipsLength,
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
async function V(e) {
  let t = O.Z.getSettings().storageLocation,
    n = (0, I.Z)(e),
    r = "".concat((0, v.Z)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4"),
    i = o.Z.fileManager.join(t, r),
    s = m.Z.getMediaEngine(),
    l = JSON.stringify(n),
    u = null != e ? (0, c.my)(e).ownerId : true,
    d = Z(e);
  null != e && a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
    clip: D(P({}, n), {
      filepath: i
    })
  });
  try {
    var f;
    let {
      duration: e,
      clipStats: t
    } = await (null != u ? s.saveClipForUser(u, i, l) : s.saveClip(i, l)), r = F(d, t);
    r.clip_save_time_ms = t.clipSaveTimeMs, r.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (r.decode_fps_during_clip = t.viewerDecodeFps, r.encode_fps_during_clip = t.viewerEncodeFps, r.target_fps = null), b.default.track(N.rMx.CLIP_SAVED, r);
    let a = await (0, A.R)(o.Z.clips.getClipProtocolURLFromPath(i), 0);
    return n.thumbnail = a, n.length = e, C.jF.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null != (f = null == a ? true : a.length) ? f : 0, " bytes thumbnail.")), await s.updateClipMetadata(i, JSON.stringify(n)), D(P({}, n), {
      filepath: i
    })
  } catch (i) {
    if (null != e && a.Z.dispatch({
        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
        clipId: n.id
      }), !("errorMessage" in i)) throw b.default.track(N.rMx.CLIP_SAVE_FAILURE, d), i;
    let t = i,
      r = F(d, t);
    throw r.error_at = t.errorAt, r.error_message = t.errorMessage, b.default.track(N.rMx.CLIP_SAVE_FAILURE, r), t.errorMessage
  }
}
async function H(e) {
  var t;
  let n = O.Z.isDecoupledGameClippingEnabled(),
    {
      enableViewerClipping: o
    } = u.Z.getCurrentConfig({
      location: "SaveClip"
    }, {
      autoTrackExposure: false
    });
  if (O.Z.getIsAtMaxSaveClipOperations()) return;
  let s = O.Z.getSettings().clipsEnabled && null != p.Z.getCurrentUserActiveStream(),
    f = n && O.Z.getSettings().decoupledClipsEnabled && (null == (t = l.ZP.getVisibleGame()) ? true : t.windowHandle) != null && m.Z.hasClipsSource(),
    _ = null != e && null != p.Z.getActiveStreamForStreamKey(e) && o;
  if (!s && !f && !_) return;
  let g = p.Z.getCurrentUserActiveStream(),
    b = null != g ? (0, c.V9)(g) : true,
    y = null != e ? e : b,
    v = (() => {
      let e = null != y ? (0, c.my)(y).ownerId : true;
      return e === h.default.getId() ? C.X9.STREAMER : null != e ? C.X9.VIEWER : C.X9.DECOUPLED
    })(),
    I = await (async () => {
      if (null == y) return;
      let {
        ownerId: e,
        guildId: t
      } = (0, c.my)(y), n = E.Z.getStreamId(e, t, r.Yn.STREAM);
      if (null != n) try {
        let e = (0, i.zS)(),
          t = await e.getNextVideoOutputFrame(n);
        return (0, A.W)(t)
      } catch (e) {
        return
      }
    })();
  a.Z.dispatch({
    type: "CLIPS_SAVE_CLIP_START",
    clipType: v,
    streamKey: y,
    thumbnail: I
  });
  let T = (0, d.GN)("clip_save", .5),
    S = performance.now();
  try {
    let e = await V(y);
    a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: e
    })
  } catch (e) {
    C.jF.error("Clip Failed to Save", e), null == T || T.stop(), (0, d.GN)("clip_error", .5), a.Z.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    })
  }
  C.jF.info("".concat(O.Z.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - S), "ms"))
}

function Y(e, t) {
  a.Z.dispatch({
    type: "CLIPS_SAVE_ANIMATION_END",
    streamKey: e,
    timestamp: t
  })
}
async function W(e, t) {
  let n = O.Z.getClips().find(t => t.id === e);
  if (null == n) return;
  let r = P({}, n, t);
  null != await (0, T.w)(r) && (await m.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)), b.default.track(N.rMx.CLIP_EDITED, {
    clip_id: r.id
  }), a.Z.dispatch({
    type: "CLIPS_UPDATE_METADATA",
    clip: r
  }))
}

function K() {
  Chunk570140.Z.dispatch({
    type: "CLIPS_CLEAR_CLIPS_SESSION"
  })
}

function z() {
  Chunk570140.Z.dispatch({
    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
  })
}
async function q(e) {
  var t;
  if (!(0, y.isDesktop)() || (null == (t = o.Z.clips) ? true : t.loadClipsDirectory) == null) return;
  let n = await o.Z.clips.loadClipsDirectory(e),
    r = [];
  for (let e of n) {
    let t = await (0, T.w)(D(P({}, e.metadata), {
      filepath: e.filepath
    }));
    null != t && r.push(t)
  }
  a.Z.dispatch({
    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
    clips: r
  })
}
async function X(e) {
  var t;
  (0, y.isDesktop)() && (null == (t = o.Z.clips) ? true : t.deleteClip) != null && (await o.Z.clips.deleteClip(e), a.Z.dispatch({
    type: "CLIPS_DELETE_CLIP",
    filepath: e
  }))
}
async function Q(e, t) {
  let n = m.Z.getMediaEngine(),
    r = await n.exportClip(e.filepath, t);
  return (0, S.Z)(r)
}