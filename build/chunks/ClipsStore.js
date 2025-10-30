/** Chunk was on web.js **/
/** chunk id: 435064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => e_
}), require("./388685.js"), require("./997841.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js"),
  Chunk630388 = require("./630388.js");
require("./137058.js");
var Chunk358085 = require("./358085.js"),
  Chunk333291 = require("./333291.js"),
  Chunk924557 = require("./924557.js"),
  Chunk894694 = require("./894694.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = "default",
  I = [],
  T = [],
  S = [],
  A = 0,
  C = null,
  N = null,
  R = {},
  P = null,
  w = [],
  D = null,
  x = {},
  L = new Map,
  M = {
    clipsEnabled: false,
    storageLocation: v,
    clipsQuality: {
      resolution: Chunk37113.ApplicationStreamResolutions.RESOLUTION_1080,
      frameRate: Chunk37113.ApplicationStreamFPS.FPS_30
    },
    clipsLength: Chunk356659.OT.SECONDS_30,
    remindersEnabled: true,
    decoupledClipsEnabled: false,
    viewerClipsEnabled: true,
    viewerConnectivity: Chunk356659.dJ.ALL,
    maxAutoClips: Chunk356659.SU,
    clipSignals: {
      enableManualSignals: true,
      enableDistributedSignals: true,
      enablePhraseSignals: true,
      enableYellingSignals: true,
      enableGameSignals: true
    },
    mlPipelinesEnabled: {
      emotionClassifier: true,
      wakeWordDetector: false,
      yellDetector: true,
      whisperTranscription: true
    },
    autoClipPhrases: ["clip", "flip that", "flip it"]
  },
  k = {
    clipsSettings: M,
    clipDecisionEngineConfig: (0, Chunk333291.P_)(),
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
async function j() {
  if (k.clipsSettings.storageLocation !== v || null == Chunk579806.Z || null == Chunk579806.Z.remoteApp) return;
  let e = await Chunk579806.Z.remoteApp.getPath("documents");
  k.clipsSettings.storageLocation = module, ef.emitChange()
}

function U(e) {
  let {
    classification: t
  } = e, n = k.hardwareClassification;
  k.hardwareClassificationVersion = h.WM, k.hardwareClassification = t, k.hardwareClassification === p.xH.MEETS_AUTO_ENABLE && n !== p.xH.MEETS_AUTO_ENABLE && (k.clipsSettings.clipsEnabled = true);
  let r = k.hardwareClassificationForDecoupled;
  k.hardwareClassificationForDecoupled = t, k.hardwareClassificationForDecoupled === p.xH.MEETS_AUTO_ENABLE && r !== p.xH.MEETS_AUTO_ENABLE && k.clipsSettings.clipsEnabled && (k.clipsSettings.decoupledClipsEnabled = true)
}

function G(e) {
  let {
    clip: t
  } = e;
  for (let [e, n] of T.entries())
    if (n.id === t.id) {
      T[e] = t, T = [...T];
      return
    }
}

function B(e) {
  let {
    settings: t
  } = e;
  k = O(b({}, k), {
    clipsSettings: b({}, k.clipsSettings, t)
  })
}

function Z(e) {
  k = O(b({}, k), {
    clipDecisionEngineConfig: e.config
  })
}

function F(e) {
  let {
    clipType: t,
    streamKey: n,
    thumbnail: r
  } = e;
  if (A += 1, k.hasTakenDecoupledClip = k.hasTakenDecoupledClip || t === h.X9.DECOUPLED, null != n && null != r) {
    var i;
    let e = Date.now();
    D = null != D ? D : e, x[n] = [...null != (i = x[n]) ? i : [], {
      timestamp: e,
      thumbnail: r
    }]
  }
}

function V(e) {
  let {
    streamKey: t,
    timestamp: n
  } = e;
  D === n && (D = null), null == n ? x[t] = [] : x[t] = x[t].filter(e => e.timestamp !== n)
}

function H() {
  A = Math.max(A - 1, 0)
}

function Y(e) {
  var t, n;
  let {
    clip: r
  } = e;
  A = Math.max(A - 1, 0), N = O(b({
    applicationName: r.applicationName,
    ended: false
  }, N), {
    newClipIds: [...null != (t = null == N ? true : N.newClipIds) ? t : [], r.id]
  }), k = O(b({}, k), {
    newClipIds: [...null != (n = k.newClipIds) ? n : [], r.id]
  }), S = S.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  }), T = [r, ...T], k.hasClips = true
}

function W(e) {
  let {
    clip: t
  } = e;
  S = [t, ...S]
}

function K(e) {
  let {
    clipId: t
  } = e;
  S = S.filter(e => {
    let {
      id: n
    } = e;
    return n !== t
  })
}

function z(e) {
  let {
    channelId: t
  } = e;
  C = t
}

function q(e) {
  let {
    channelId: t
  } = e;
  t !== C && (C = null)
}

function X(e) {
  let {
    applicationName: t
  } = e;
  if (P = null, !k.clipsSettings.clipsEnabled) returnfalse;
  N = {
    applicationName: t,
    newClipIds: [],
    ended: false
  }
}

function Q(e) {
  let {
    errMsg: t
  } = e;
  P = t
}

function J(e) {
  let {
    sourceName: t,
    pid: n
  } = e;
  if (!k.clipsSettings.clipsEnabled) returnfalse;
  let r = t;
  if (null != n) {
    var i;
    let e = s.ZP.getGameForPID(n);
    r = null != (i = null == e ? true : e.name) ? i : r
  }
  if (null == r || "" === r) returnfalse;
  N = {
    applicationName: r,
    newClipIds: [],
    ended: false
  }
}

function $(e) {
  let {
    streamKey: t
  } = e;
  if (D = null, x[t] = [], null == N || (0, l.my)(t).ownerId !== c.default.getId()) returnfalse;
  N = 0 === N.newClipIds.length ? null : O(b({}, N), {
    ended: true
  })
}

function ee(e) {
  k.hasClips = e.clips.length > 0, T = e.clips
}

function et(e) {
  0 === (T = T.filter(t => {
    let {
      filepath: n
    } = t;
    return n !== e.filepath
  })).length && (k.hasClips = false)
}

function en() {
  if (null == N) returnfalse;
  N = null
}

function er() {
  k.newClipIds = []
}

function ei(e) {
  R[e.userId] = {
    clipsEnabled: (0, u.yE)(e.flags, m.BVn.CLIPS_ENABLED),
    allowVoiceRecording: (0, u.yE)(e.flags, m.BVn.ALLOW_VOICE_RECORDING),
    allowAnyViewerClips: (0, u.yE)(e.flags, m.BVn.ALLOW_ANY_VIEWER_CLIPS)
  }
}

function ea(e) {
  let {
    added: t
  } = e;
  t.length > 0 && (k.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
}

function eo(e) {
  let {
    educationType: t
  } = e;
  switch (t) {
    case h.D5.Error:
      P = null;
      break;
    case h.D5.Disabled:
    case h.D5.Enabled:
      k.clipsEducationState.dismissedAt = Date.now(), k.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, k.clipsEducationState.numberOfTimesDismissed += 1
  }
}

function es(e) {
  let {
    clipIds: t
  } = e;
  w = null != t ? t : []
}

function el(e, t, n) {
  if (!(0, _.NS)() || n !== c.default.getId() || null == t) returnfalse;
  let r = "__CLIP_METADATA__",
    i = t.indexOf(r);
  if (false === i) returnfalse;
  try {
    let n = i + r.length,
      a = t.substring(n),
      o = JSON.parse(a);
    if (null == o.id) returnfalse;
    let s = L.get(e);
    return null == s && (s = new Set, L.set(e, s)), s.add(o.id), true
  } catch (e) {
    returnfalse
  }
}

function ec(e) {
  var t;
  return el(e.channelId, e.message.content, null == (t = e.message.author) ? true : t.id)
}

function eu(e) {
  let t = false;
  for (let r of e.messages) {
    var n;
    t = t || el(e.channelId, r.content, null == (n = r.author) ? true : n.id)
  }
  return t
}
class ed extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (k = e), j(), this.waitFor(s.ZP)
  }
  getClips() {
    return T
  }
  getPendingClips() {
    return S
  }
  getUserAgnosticState() {
    return k
  }
  getSettings() {
    return k.clipsSettings
  }
  getClipDecisionEngineConfig() {
    return k.clipDecisionEngineConfig
  }
  getLastClipsSession() {
    return N
  }
  getClipsWarningShown(e) {
    return C === e
  }
  getActiveAnimation() {
    return D
  }
  getStreamClipAnimations(e) {
    var t;
    return null != (t = x[e]) ? t : I
  }
  hasAnyClipAnimations() {
    return Object.values(x).some(e => e.length > 0)
  }
  getHardwareClassification() {
    return k.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return k.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return k.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return A >= Chunk356659.Kw
  }
  getLastClipsError() {
    return P
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null != (n = null == (t = R[e]) ? true : t.clipsEnabled) && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null != (n = null == (t = R[e]) ? true : t.allowVoiceRecording) && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null != (n = null == (t = R[e]) ? true : t.allowAnyViewerClips) && n
  }
  isDecoupledGameClippingEnabled() {
    return (0, Chunk358085.isWindows)()
  }
  hasClips() {
    return k.hasClips
  }
  hasTakenDecoupledClip() {
    return k.hasTakenDecoupledClip
  }
  getNewClipIds() {
    return k.newClipIds
  }
  isClipExporting(e) {
    return w.includes(e)
  }
  getExportingClipIds() {
    return w
  }
  getMatchingGroupClip(e, t) {
    if (null == e && null == t) return null;
    for (let o of T) {
      var n, r, i, a;
      if (null != t && o.id === t || null != e && (null == (r = o.decision) || null == (n = r.signal) ? true : n.type) === p.Bs.DISTRIBUTED && (null == (a = o.decision) || null == (i = a.signal) ? true : i.remoteTriggerClipId) === e) return o
    }
    return null
  }
  wasClipSharedInChannel(e, t) {
    var n;
    let r = L.get(t);
    return null != (n = null == r ? true : r.has(e)) && n
  }
}
E(ed, "displayName", "ClipsStore"), E(ed, "persistKey", "ClipsStore"), E(ed, "migrations", [e => ({
  clipsSettings: null != e ? e : M,
  newClipsCount: 0
}), e => {
  let t = b({}, M, e.clipsSettings);
  return O(b({}, e), {
    clipsSettings: t
  })
}, e => {
  var t;
  return O(b({}, e), {
    newClipIds: null != (t = e.newClipIds) ? t : []
  })
}, e => {
  var t, n;
  return O(b({}, e), {
    hardwareClassification: null != (t = e.hardwareClassification) ? t : null,
    hardwareClassificationVersion: null != (n = e.hardwareClassificationVersion) ? n : 0
  })
}, e => {
  var t;
  return O(b({}, e), {
    hasClips: null != (t = e.hasClips) && t
  })
}, e => O(b({}, e), {
  clipsSettings: O(b({}, e.clipsSettings), {
    decoupledClipsEnabled: M.decoupledClipsEnabled
  })
}), e => {
  var t;
  return O(b({}, e), {
    hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null
  })
}, e => {
  var t;
  let r = null == (t = n(131951).Z) ? true : t.getHardwareEncoding();
  return O(b({}, e), {
    clipsSettings: O(b({}, e.clipsSettings), {
      clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
    })
  })
}, e => {
  var t;
  return O(b({}, e), {
    newClipIds: null != (t = e.newClipIds) ? t : [],
    newClipIDs: true
  })
}, e => O(b({}, e), {
  clipsSettings: O(b({}, e.clipsSettings), {
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? M.clipsQuality : e.clipsSettings.clipsQuality
  })
}), e => {
  var t;
  return O(b({}, e), {
    clipsSettings: O(b({}, e.clipsSettings), {
      remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : M.remindersEnabled
    })
  })
}, e => O(b({}, e), {
  hasTakenDecoupledClip: false,
  clipsEducationState: {
    dismissedAt: null,
    numberOfGamesLaunchedSinceDismissal: 0,
    numberOfTimesDismissed: 0
  }
}), e => {
  var t, n, r, i, a;
  return O(b({}, e), {
    clipsSettings: O(b({}, e.clipsSettings), {
      maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : M.maxAutoClips,
      clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : M.clipSignals,
      mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : M.mlPipelinesEnabled,
      autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : M.autoClipPhrases
    }),
    clipDecisionEngineConfig: null != (a = e.clipDecisionEngineConfig) ? a : (0, f.P_)()
  })
}, e => O(b({}, e), {
  clipsSettings: O(b({}, e.clipsSettings), {
    autoClipPhrases: 0 === e.clipsSettings.autoClipPhrases.length ? M.autoClipPhrases : e.clipsSettings.autoClipPhrases
  })
})]);
let ef = new ed(Chunk570140.Z, {
    CLIPS_SETTINGS_UPDATE: B,
    CLIPS_ENGINE_CONFIG_UPDATE: Z,
    CLIPS_SAVE_CLIP: Y,
    CLIPS_SAVE_CLIP_PLACEHOLDER: W,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: K,
    CLIPS_SAVE_CLIP_START: F,
    CLIPS_SAVE_CLIP_ERROR: H,
    CLIPS_SAVE_ANIMATION_END: V,
    STREAM_START: J,
    STREAM_STOP: $,
    CLIPS_CLEAR_CLIPS_SESSION: en,
    CLIPS_CLEAR_NEW_CLIP_IDS: er,
    CLIPS_LOAD_DIRECTORY_SUCCESS: ee,
    CLIPS_DELETE_CLIP: et,
    CLIPS_UPDATE_METADATA: G,
    RTC_CONNECTION_FLAGS: ei,
    CLIPS_SHOW_CALL_WARNING: z,
    VOICE_CHANNEL_SELECT: q,
    CLIPS_CLASSIFY_HARDWARE: U,
    CLIPS_INIT: X,
    CLIPS_INIT_FAILURE: Q,
    CLIPS_DISMISS_EDUCATION: eo,
    RUNNING_GAMES_CHANGE: ea,
    CLIPS_SET_EXPORTING: es,
    MESSAGE_CREATE: ec,
    LOAD_MESSAGES_SUCCESS: eu
  }),
  e_ = ef