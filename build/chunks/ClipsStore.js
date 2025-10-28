/** Chunk was on web.js **/
/** chunk id: 435064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ea
}), require("./388685.js"), require("./997841.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk358085 = require("./358085.js"),
  Chunk894694 = require("./894694.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = "default",
  v = [],
  I = [],
  T = [],
  S = 0,
  A = null,
  C = null,
  N = {},
  R = null,
  P = null,
  w = {},
  D = {
    clipsEnabled: false,
    storageLocation: O,
    clipsQuality: {
      resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1080,
      frameRate: Chunk37113.ApplicationStreamFPS.FPS_30
    },
    clipsLength: Chunk356659.OT.SECONDS_30,
    remindersEnabled: true,
    decoupledClipsEnabled: false,
    viewerClipsEnabled: true,
    viewerConnectivity: Chunk356659.dJ.ALL
  },
  L = {
    clipsSettings: D,
    hardwareClassification: null,
    hardwareClassificationForDecoupled: null,
    hardwareClassificationVersion: 0,
    newClipIds: [],
    hasClips: false,
    hasTakenDecoupledClip: false,
    clipsEducationState: {
      dismissedAt: null,
      numberOfGamesLaunchedSinceDismissal: 0,
      numberOfTimesDismissed: 0
    }
  };
async function x() {
  if (L.clipsSettings.storageLocation !== O || null == Chunk579806.Z || null == Chunk579806.Z.remoteApp) return;
  let e = await Chunk579806.Z.remoteApp.getPath("documents");
  L.clipsSettings.storageLocation = module, ei.emitChange()
}

function M(e) {
  let {
    classification: t
  } = e, n = L.hardwareClassification;
  L.hardwareClassificationVersion = p.WM, L.hardwareClassification = t, L.hardwareClassification === _.x.MEETS_AUTO_ENABLE && n !== _.x.MEETS_AUTO_ENABLE && (L.clipsSettings.clipsEnabled = true);
  let r = L.hardwareClassificationForDecoupled;
  L.hardwareClassificationForDecoupled = t, L.hardwareClassificationForDecoupled === _.x.MEETS_AUTO_ENABLE && r !== _.x.MEETS_AUTO_ENABLE && L.clipsSettings.clipsEnabled && (L.clipsSettings.decoupledClipsEnabled = true)
}

function k(e) {
  let {
    clip: t
  } = e;
  for (let [e, n] of I.entries())
    if (n.id === t.id) {
      I[e] = t, I = [...I];
      return
    }
}

function j(e) {
  let {
    settings: t
  } = e;
  L = y(E({}, L), {
    clipsSettings: E({}, L.clipsSettings, t)
  })
}

function U(e) {
  let {
    clipType: t,
    streamKey: n,
    thumbnail: r
  } = e;
  if (S += 1, L.hasTakenDecoupledClip = L.hasTakenDecoupledClip || t === p.X9.DECOUPLED, null != n && null != r) {
    var i;
    let e = Date.now();
    P = null != P ? P : e, w[n] = [...null != (i = w[n]) ? i : [], {
      timestamp: e,
      thumbnail: r
    }]
  }
}

function G(e) {
  let {
    streamKey: t,
    timestamp: n
  } = e;
  P === n && (P = null), null == n ? w[t] = [] : w[t] = w[t].filter(e => e.timestamp !== n)
}

function B() {
  S = Math.max(S - 1, 0)
}

function Z(e) {
  var t, n;
  let {
    clip: r
  } = e;
  S = Math.max(S - 1, 0), C = y(E({
    applicationName: r.applicationName,
    ended: false
  }, C), {
    newClipIds: [...null != (t = null == C ? true : C.newClipIds) ? t : [], r.id]
  }), L = y(E({}, L), {
    newClipIds: [...null != (n = L.newClipIds) ? n : [], r.id]
  }), T = T.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  }), I = [r, ...I], L.hasClips = true
}

function F(e) {
  let {
    clip: t
  } = e;
  T = [t, ...T]
}

function V(e) {
  let {
    clipId: t
  } = e;
  T = T.filter(e => {
    let {
      id: n
    } = e;
    return n !== t
  })
}

function H(e) {
  let {
    channelId: t
  } = e;
  A = t
}

function Y(e) {
  let {
    channelId: t
  } = e;
  t !== A && (A = null)
}

function W(e) {
  let {
    applicationName: t
  } = e;
  if (R = null, !L.clipsSettings.clipsEnabled) returnfalse;
  C = {
    applicationName: t,
    newClipIds: [],
    ended: false
  }
}

function K(e) {
  let {
    errMsg: t
  } = e;
  R = t
}

function z(e) {
  let {
    sourceName: t,
    pid: n
  } = e;
  if (!L.clipsSettings.clipsEnabled) returnfalse;
  let r = t;
  if (null != n) {
    var i;
    let e = s.ZP.getGameForPID(n);
    r = null != (i = null == e ? true : e.name) ? i : r
  }
  if (null == r || "" === r) returnfalse;
  C = {
    applicationName: r,
    newClipIds: [],
    ended: false
  }
}

function q(e) {
  let {
    streamKey: t
  } = e;
  if (P = null, w[t] = [], null == C || (0, l.my)(t).ownerId !== c.default.getId()) returnfalse;
  C = 0 === C.newClipIds.length ? null : y(E({}, C), {
    ended: true
  })
}

function X(e) {
  L.hasClips = e.clips.length > 0, I = e.clips
}

function Q(e) {
  0 === (I = I.filter(t => {
    let {
      filepath: n
    } = t;
    return n !== e.filepath
  })).length && (L.hasClips = false)
}

function J() {
  if (null == C) returnfalse;
  C = null
}

function $() {
  L.newClipIds = []
}

function ee(e) {
  N[e.userId] = {
    clipsEnabled: (0, d.yE)(e.flags, h.BVn.CLIPS_ENABLED),
    allowVoiceRecording: (0, d.yE)(e.flags, h.BVn.ALLOW_VOICE_RECORDING),
    allowAnyViewerClips: (0, d.yE)(e.flags, h.BVn.ALLOW_ANY_VIEWER_CLIPS)
  }
}

function et(e) {
  let {
    added: t
  } = e;
  t.length > 0 && (L.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
}

function en(e) {
  let {
    educationType: t
  } = e;
  switch (t) {
    case p.D5.Error:
      R = null;
      break;
    case p.D5.Disabled:
    case p.D5.Enabled:
      L.clipsEducationState.dismissedAt = Date.now(), L.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, L.clipsEducationState.numberOfTimesDismissed += 1
  }
}
class er extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (L = e), x(), this.waitFor(s.ZP)
  }
  getClips() {
    return I
  }
  getPendingClips() {
    return T
  }
  getUserAgnosticState() {
    return L
  }
  getSettings() {
    return L.clipsSettings
  }
  getLastClipsSession() {
    return C
  }
  getClipsWarningShown(e) {
    return A === e
  }
  getActiveAnimation() {
    return P
  }
  getStreamClipAnimations(e) {
    var t;
    return null != (t = w[e]) ? t : v
  }
  hasAnyClipAnimations() {
    return Object.values(w).some(e => e.length > 0)
  }
  getHardwareClassification() {
    return L.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return L.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return L.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return S >= Chunk356659.Kw
  }
  getLastClipsError() {
    return R
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null != (n = null == (t = N[e]) ? true : t.clipsEnabled) && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null != (n = null == (t = N[e]) ? true : t.allowVoiceRecording) && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null != (n = null == (t = N[e]) ? true : t.allowAnyViewerClips) && n
  }
  isDecoupledGameClippingEnabled() {
    let e = Chunk594174.default.getCurrentUser();
    return ((null == module ? true : module.isStaff()) || (null == module ? true : module.isStaffPersonal()) || false) && (0, Chunk358085.isWindows)()
  }
  hasClips() {
    return L.hasClips
  }
  hasTakenDecoupledClip() {
    return L.hasTakenDecoupledClip
  }
  getNewClipIds() {
    return L.newClipIds
  }
}
g(er, "displayName", "ClipsStore"), g(er, "persistKey", "ClipsStore"), g(er, "migrations", [e => ({
  clipsSettings: null != e ? e : D,
  newClipsCount: 0
}), e => {
  let t = E({}, D, e.clipsSettings);
  return y(E({}, e), {
    clipsSettings: t
  })
}, e => {
  var t;
  return y(E({}, e), {
    newClipIds: null != (t = e.newClipIds) ? t : []
  })
}, e => {
  var t, n;
  return y(E({}, e), {
    hardwareClassification: null != (t = e.hardwareClassification) ? t : null,
    hardwareClassificationVersion: null != (n = e.hardwareClassificationVersion) ? n : 0
  })
}, e => {
  var t;
  return y(E({}, e), {
    hasClips: null != (t = e.hasClips) && t
  })
}, e => y(E({}, e), {
  clipsSettings: y(E({}, e.clipsSettings), {
    decoupledClipsEnabled: D.decoupledClipsEnabled
  })
}), e => {
  var t;
  return y(E({}, e), {
    hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null
  })
}, e => {
  var t;
  let r = null == (t = n(131951).Z) ? true : t.getHardwareEncoding();
  return y(E({}, e), {
    clipsSettings: y(E({}, e.clipsSettings), {
      clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
    })
  })
}, e => {
  var t;
  return y(E({}, e), {
    newClipIds: null != (t = e.newClipIds) ? t : [],
    newClipIDs: true
  })
}, e => y(E({}, e), {
  clipsSettings: y(E({}, e.clipsSettings), {
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? D.clipsQuality : e.clipsSettings.clipsQuality
  })
}), e => {
  var t;
  return y(E({}, e), {
    clipsSettings: y(E({}, e.clipsSettings), {
      remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : D.remindersEnabled
    })
  })
}, e => y(E({}, e), {
  hasTakenDecoupledClip: false,
  clipsEducationState: {
    dismissedAt: null,
    numberOfGamesLaunchedSinceDismissal: 0,
    numberOfTimesDismissed: 0
  }
})]);
let ei = new er(Chunk570140.Z, {
    CLIPS_SETTINGS_UPDATE: j,
    CLIPS_SAVE_CLIP: Z,
    CLIPS_SAVE_CLIP_PLACEHOLDER: F,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: V,
    CLIPS_SAVE_CLIP_START: U,
    CLIPS_SAVE_CLIP_ERROR: B,
    CLIPS_SAVE_ANIMATION_END: G,
    STREAM_START: z,
    STREAM_STOP: q,
    CLIPS_CLEAR_CLIPS_SESSION: J,
    CLIPS_CLEAR_NEW_CLIP_IDS: $,
    CLIPS_LOAD_DIRECTORY_SUCCESS: X,
    CLIPS_DELETE_CLIP: Q,
    CLIPS_UPDATE_METADATA: k,
    RTC_CONNECTION_FLAGS: ee,
    CLIPS_SHOW_CALL_WARNING: H,
    VOICE_CHANNEL_SELECT: Y,
    CLIPS_CLASSIFY_HARDWARE: M,
    CLIPS_INIT: W,
    CLIPS_INIT_FAILURE: K,
    CLIPS_DISMISS_EDUCATION: en,
    RUNNING_GAMES_CHANGE: et
  }),
  ea = ei