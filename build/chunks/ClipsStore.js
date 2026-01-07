/** Chunk was on web.js **/
/** chunk id: 435064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eu
}), require("./388685.js"), require("./997841.js");
var r, Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js");
require("./137058.js");
var Chunk924557 = require("./924557.js"),
  Chunk894694 = require("./894694.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = "default",
  O = [],
  v = [],
  S = [],
  I = 0,
  T = null,
  C = null,
  A = {},
  N = null,
  P = [],
  R = null,
  w = {},
  D = new Map,
  x = {
    clipsEnabled: false,
    storageLocation: y,
    clipsQuality: {
      resolution: Chunk37113.LY.RESOLUTION_1080,
      frameRate: Chunk37113.ws.FPS_30
    },
    clipsLength: Chunk356659.OT.SECONDS_30,
    remindersEnabled: true,
    decoupledClipsEnabled: false,
    viewerClipsEnabled: true,
    viewerConnectivity: Chunk356659.dJ.ALL,
    maxAutoClips: Chunk356659.SU,
    clipSignals: {
      enableDistributedSignals: true,
      enablePhraseSignals: true,
      enableGameSignals: true
    },
    mlPipelinesEnabled: {
      emotionClassifier: true,
      wakeWordDetector: false,
      yellDetector: true,
      whisperTranscription: true
    },
    autoClipPhrases: ["clip that", "clip it", "clip clip"]
  },
  L = {
    clipsSettings: x,
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
  if (L.clipsSettings.storageLocation !== y || null == s.Z || null == s.Z.remoteApp) return;
  let e = await s.Z.remoteApp.getPath("documents");
  L.clipsSettings.storageLocation = e, ec.emitChange()
}

function M(e) {
  let {
    classification: t
  } = e, n = L.hardwareClassification;
  L.hardwareClassificationVersion = p.WM, L.hardwareClassification = t, L.hardwareClassification === f.xH.MEETS_AUTO_ENABLE && n !== f.xH.MEETS_AUTO_ENABLE && (L.clipsSettings.clipsEnabled = true);
  let r = L.hardwareClassificationForDecoupled;
  L.hardwareClassificationForDecoupled = t, L.hardwareClassificationForDecoupled === f.xH.MEETS_AUTO_ENABLE && r !== f.xH.MEETS_AUTO_ENABLE && L.clipsSettings.clipsEnabled && (L.clipsSettings.decoupledClipsEnabled = true)
}

function k(e) {
  let {
    clip: t
  } = e;
  for (let [e, n] of v.entries())
    if (n.id === t.id) {
      v[e] = t, v = [...v];
      return
    }
}

function U(e) {
  let {
    settings: t
  } = e;
  L = b(g({}, L), {
    clipsSettings: g({}, L.clipsSettings, t)
  })
}

function G(e) {
  let {
    clipType: t,
    streamKey: n,
    thumbnail: r
  } = e;
  if (I += 1, L.hasTakenDecoupledClip = L.hasTakenDecoupledClip || t === p.X9.DECOUPLED, null != n && null != r) {
    var i;
    let e = Date.now();
    R = null != R ? R : e, w[n] = [...null != (i = w[n]) ? i : [], {
      timestamp: e,
      thumbnail: r
    }]
  }
}

function Z(e) {
  let {
    streamKey: t,
    timestamp: n
  } = e;
  R === n && (R = null), null == n ? w[t] = [] : w[t] = w[t].filter(e => e.timestamp !== n)
}

function F() {
  I = Math.max(I - 1, 0)
}

function B(e) {
  var t, n;
  let {
    clip: r
  } = e;
  I = Math.max(I - 1, 0), C = b(g({
    applicationName: r.applicationName,
    ended: false
  }, C), {
    newClipIds: [...null != (t = null == C ? true : C.newClipIds) ? t : [], r.id]
  }), L = b(g({}, L), {
    newClipIds: [...null != (n = L.newClipIds) ? n : [], r.id]
  }), S = S.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  }), v = [r, ...v], L.hasClips = true
}

function V(e) {
  let {
    clip: t
  } = e;
  S = [t, ...S]
}

function H(e) {
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

function Y(e) {
  let {
    channelId: t
  } = e;
  T = t
}

function W(e) {
  let {
    channelId: t
  } = e;
  t !== T && (T = null)
}

function K(e) {
  let {
    applicationName: t
  } = e;
  if (N = null, !L.clipsSettings.clipsEnabled) returnfalse;
  C = {
    applicationName: t,
    newClipIds: [],
    ended: false
  }
}

function z(e) {
  let {
    errMsg: t
  } = e;
  N = t
}

function q(e) {
  let {
    sourceName: t,
    pid: n
  } = e;
  if (!L.clipsSettings.clipsEnabled) returnfalse;
  let r = t;
  if (null != n) {
    var i;
    let e = l.ZP.getGameForPID(n);
    r = null != (i = null == e ? true : e.name) ? i : r
  }
  if (null == r || "" === r) returnfalse;
  C = {
    applicationName: r,
    newClipIds: [],
    ended: false
  }
}

function Q(e) {
  let {
    streamKey: t
  } = e;
  if (R = null, w[t] = [], null == C || (0, c.my)(t).ownerId !== u.default.getId()) returnfalse;
  C = 0 === C.newClipIds.length ? null : b(g({}, C), {
    ended: true
  })
}

function X(e) {
  L.hasClips = e.clips.length > 0, v = e.clips
}

function J(e) {
  0 === (v = v.filter(t => {
    let {
      filepath: n
    } = t;
    return n !== e.filepath
  })).length && (L.hasClips = false)
}

function $() {
  if (null == C) returnfalse;
  C = null
}

function ee() {
  L.newClipIds = []
}

function et(e) {
  A[e.userId] = {
    clipsEnabled: (0, i.yE)(e.flags, _.BVn.CLIPS_ENABLED),
    allowVoiceRecording: (0, i.yE)(e.flags, _.BVn.ALLOW_VOICE_RECORDING),
    allowAnyViewerClips: (0, i.yE)(e.flags, _.BVn.ALLOW_ANY_VIEWER_CLIPS)
  }
}

function en(e) {
  let {
    added: t
  } = e;
  t.length > 0 && (L.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
}

function er(e) {
  let {
    educationType: t
  } = e;
  switch (t) {
    case p.D5.Error:
      N = null;
      break;
    case p.D5.Disabled:
    case p.D5.Enabled:
      L.clipsEducationState.dismissedAt = Date.now(), L.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, L.clipsEducationState.numberOfTimesDismissed += 1
  }
}

function ei(e) {
  let {
    clipIds: t
  } = e;
  P = null != t ? t : []
}

function ea(e, t, n) {
  if (!(0, d.NS)() || n !== u.default.getId() || null == t) returnfalse;
  let r = "__CLIP_METADATA__",
    i = t.indexOf(r);
  if (false === i) returnfalse;
  try {
    let n = i + r.length,
      a = t.substring(n),
      o = JSON.parse(a);
    if (null == o.id) returnfalse;
    let s = D.get(e);
    return null == s && (s = new Set, D.set(e, s)), s.add(o.id), true
  } catch (e) {
    returnfalse
  }
}

function eo(e) {
  var t;
  return ea(e.channelId, e.message.content, null == (t = e.message.author) ? true : t.id)
}

function es(e) {
  let t = false;
  for (let r of e.messages) {
    var n;
    t = t || ea(e.channelId, r.content, null == (n = r.author) ? true : n.id)
  }
  return t
}
class el extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (L = e), j(), this.waitFor(l.ZP)
  }
  getClips() {
    return v
  }
  getPendingClips() {
    return S
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
    return T === e
  }
  getActiveAnimation() {
    return R
  }
  getStreamClipAnimations(e) {
    var t;
    return null != (t = w[e]) ? t : O
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
    return I >= p.Kw
  }
  getLastClipsError() {
    return N
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null != (n = null == (t = A[e]) ? true : t.clipsEnabled) && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null != (n = null == (t = A[e]) ? true : t.allowVoiceRecording) && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null != (n = null == (t = A[e]) ? true : t.allowAnyViewerClips) && n
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
  isClipExporting(e) {
    return P.includes(e)
  }
  getExportingClipIds() {
    return P
  }
  getMatchingGroupClip(e, t) {
    if (null == e && null == t) return null;
    for (let o of v) {
      var n, r, i, a;
      if (null != t && o.id === t || null != e && (null == (r = o.decision) || null == (n = r.signal) ? true : n.type) === f.Bs.DISTRIBUTED && (null == (a = o.decision) || null == (i = a.signal) ? true : i.remoteTriggerClipId) === e) return o
    }
    return null
  }
  wasClipSharedInChannel(e, t) {
    var n;
    let r = D.get(t);
    return null != (n = null == r ? true : r.has(e)) && n
  }
}
h(el, "displayName", "ClipsStore"), h(el, "persistKey", "ClipsStore"), h(el, "migrations", [e => ({
  clipsSettings: null != e ? e : x,
  newClipsCount: 0
}), e => {
  let t = g({}, x, e.clipsSettings);
  return b(g({}, e), {
    clipsSettings: t
  })
}, e => {
  var t;
  return b(g({}, e), {
    newClipIds: null != (t = e.newClipIds) ? t : []
  })
}, e => {
  var t, n;
  return b(g({}, e), {
    hardwareClassification: null != (t = e.hardwareClassification) ? t : null,
    hardwareClassificationVersion: null != (n = e.hardwareClassificationVersion) ? n : 0
  })
}, e => {
  var t;
  return b(g({}, e), {
    hasClips: null != (t = e.hasClips) && t
  })
}, e => b(g({}, e), {
  clipsSettings: b(g({}, e.clipsSettings), {
    decoupledClipsEnabled: x.decoupledClipsEnabled
  })
}), e => {
  var t;
  return b(g({}, e), {
    hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null
  })
}, e => {
  var t;
  let r = null == (t = n(131951).Z) ? true : t.getHardwareEncoding();
  return b(g({}, e), {
    clipsSettings: b(g({}, e.clipsSettings), {
      clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
    })
  })
}, e => {
  var t;
  return b(g({}, e), {
    newClipIds: null != (t = e.newClipIds) ? t : [],
    newClipIDs: true
  })
}, e => b(g({}, e), {
  clipsSettings: b(g({}, e.clipsSettings), {
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? x.clipsQuality : e.clipsSettings.clipsQuality
  })
}), e => {
  var t;
  return b(g({}, e), {
    clipsSettings: b(g({}, e.clipsSettings), {
      remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : x.remindersEnabled
    })
  })
}, e => b(g({}, e), {
  hasTakenDecoupledClip: false,
  clipsEducationState: {
    dismissedAt: null,
    numberOfGamesLaunchedSinceDismissal: 0,
    numberOfTimesDismissed: 0
  }
}), e => {
  var t, n, r, i;
  return b(g({}, e), {
    clipsSettings: b(g({}, e.clipsSettings), {
      maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : x.maxAutoClips,
      clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : x.clipSignals,
      mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : x.mlPipelinesEnabled,
      autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : x.autoClipPhrases
    })
  })
}, e => b(g({}, e), {
  clipsSettings: b(g({}, e.clipsSettings), {
    autoClipPhrases: 0 === e.clipsSettings.autoClipPhrases.length ? x.autoClipPhrases : e.clipsSettings.autoClipPhrases
  })
})]);
let ec = new el(Chunk570140.Z, {
    CLIPS_SETTINGS_UPDATE: U,
    CLIPS_SAVE_CLIP: B,
    CLIPS_SAVE_CLIP_PLACEHOLDER: V,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: H,
    CLIPS_SAVE_CLIP_START: G,
    CLIPS_SAVE_CLIP_ERROR: F,
    CLIPS_SAVE_ANIMATION_END: Z,
    STREAM_START: q,
    STREAM_STOP: Q,
    CLIPS_CLEAR_CLIPS_SESSION: $,
    CLIPS_CLEAR_NEW_CLIP_IDS: ee,
    CLIPS_LOAD_DIRECTORY_SUCCESS: X,
    CLIPS_DELETE_CLIP: J,
    CLIPS_UPDATE_METADATA: k,
    RTC_CONNECTION_FLAGS: et,
    CLIPS_SHOW_CALL_WARNING: Y,
    VOICE_CHANNEL_SELECT: W,
    CLIPS_CLASSIFY_HARDWARE: M,
    CLIPS_INIT: K,
    CLIPS_INIT_FAILURE: z,
    CLIPS_DISMISS_EDUCATION: er,
    RUNNING_GAMES_CHANGE: en,
    CLIPS_SET_EXPORTING: ei,
    MESSAGE_CREATE: eo,
    LOAD_MESSAGES_SUCCESS: es
  }),
  eu = ec