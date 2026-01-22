/** Chunk was on web.js **/
/** chunk id: 274372, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eu
}), require("./896048.js"), require("./938796.js");
var r, Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77729 = require("./77729.js"),
  Chunk15285 = require("./15285.js"),
  Chunk652896 = require("./652896.js"),
  Chunk961350 = require("./961350.js");
require("./741394.js");
var Chunk734066 = require("./734066.js"),
  Chunk372684 = require("./372684.js"),
  Chunk696016 = require("./696016.js"),
  Chunk652215 = require("./652215.js"),
  Chunk753070 = require("./753070.js");

function m(e, t, n) {
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
      m(e, t, n[t])
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
  A = [],
  v = [],
  S = 0,
  I = null,
  T = null,
  C = {},
  N = null,
  R = [],
  w = null,
  P = {},
  D = new Map,
  x = {
    clipsEnabled: false,
    storageLocation: y,
    clipsQuality: {
      resolution: Chunk753070.on.RESOLUTION_1080,
      frameRate: Chunk753070.kn.FPS_30
    },
    clipsLength: Chunk696016.LX.SECONDS_30,
    remindersEnabled: true,
    decoupledClipsEnabled: false,
    viewerClipsEnabled: true,
    viewerConnectivity: Chunk696016.on.ALL,
    maxAutoClips: Chunk696016.T2,
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
  if (L.clipsSettings.storageLocation !== y || null == o.A || null == o.A.remoteApp) return;
  let e = await o.A.remoteApp.getPath("documents");
  L.clipsSettings.storageLocation = e, ec.emitChange()
}

function M(e) {
  let {
    classification: t
  } = e, n = L.hardwareClassification;
  L.hardwareClassificationVersion = p.V0, L.hardwareClassification = t, L.hardwareClassification === f.k9.MEETS_AUTO_ENABLE && n !== f.k9.MEETS_AUTO_ENABLE && (L.clipsSettings.clipsEnabled = true);
  let r = L.hardwareClassificationForDecoupled;
  L.hardwareClassificationForDecoupled = t, L.hardwareClassificationForDecoupled === f.k9.MEETS_AUTO_ENABLE && r !== f.k9.MEETS_AUTO_ENABLE && L.clipsSettings.clipsEnabled && (L.clipsSettings.decoupledClipsEnabled = true)
}

function k(e) {
  let {
    clip: t
  } = e;
  for (let [e, n] of A.entries())
    if (n.id === t.id) {
      A[e] = t, A = [...A];
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
  if (S += 1, L.hasTakenDecoupledClip = L.hasTakenDecoupledClip || t === p.Fv.DECOUPLED, null != n && null != r) {
    var i;
    let e = Date.now();
    w = null != w ? w : e, P[n] = [...null != (i = P[n]) ? i : [], {
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
  w === n && (w = null), null == n ? P[t] = [] : P[t] = P[t].filter(e => e.timestamp !== n)
}

function F() {
  S = Math.max(S - 1, 0)
}

function B(e) {
  var t, n;
  let {
    clip: r
  } = e;
  S = Math.max(S - 1, 0), T = b(g({
    applicationName: r.applicationName,
    ended: false
  }, T), {
    newClipIds: [...null != (t = null == T ? true : T.newClipIds) ? t : [], r.id]
  }), L = b(g({}, L), {
    newClipIds: [...null != (n = L.newClipIds) ? n : [], r.id]
  }), v = v.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  }), A = [r, ...A], L.hasClips = true
}

function H(e) {
  let {
    clip: t
  } = e;
  v = [t, ...v]
}

function Y(e) {
  let {
    clipId: t
  } = e;
  v = v.filter(e => {
    let {
      id: n
    } = e;
    return n !== t
  })
}

function W(e) {
  let {
    channelId: t
  } = e;
  I = t
}

function K(e) {
  let {
    channelId: t
  } = e;
  t !== I && (I = null)
}

function z(e) {
  let {
    applicationName: t
  } = e;
  if (N = null, !L.clipsSettings.clipsEnabled) returnfalse;
  T = {
    applicationName: t,
    newClipIds: [],
    ended: false
  }
}

function q(e) {
  let {
    errMsg: t
  } = e;
  N = t
}

function X(e) {
  let {
    sourceName: t,
    pid: n
  } = e;
  if (!L.clipsSettings.clipsEnabled) returnfalse;
  let r = t;
  if (null != n) {
    var i;
    let e = l.Ay.getGameForPID(n);
    r = null != (i = null == e ? true : e.name) ? i : r
  }
  if (null == r || "" === r) returnfalse;
  T = {
    applicationName: r,
    newClipIds: [],
    ended: false
  }
}

function Z(e) {
  let {
    streamKey: t
  } = e;
  if (w = null, P[t] = [], null == T || (0, c.Iy)(t).ownerId !== u.default.getId()) returnfalse;
  T = 0 === T.newClipIds.length ? null : b(g({}, T), {
    ended: true
  })
}

function Q(e) {
  L.hasClips = e.clips.length > 0, A = e.clips
}

function $(e) {
  0 === (A = A.filter(t => {
    let {
      filepath: n
    } = t;
    return n !== e.filepath
  })).length && (L.hasClips = false)
}

function J() {
  if (null == T) returnfalse;
  T = null
}

function ee() {
  L.newClipIds = []
}

function et(e) {
  C[e.userId] = {
    clipsEnabled: (0, i.Lt)(e.flags, _.Ajs.CLIPS_ENABLED),
    allowVoiceRecording: (0, i.Lt)(e.flags, _.Ajs.ALLOW_VOICE_RECORDING),
    allowAnyViewerClips: (0, i.Lt)(e.flags, _.Ajs.ALLOW_ANY_VIEWER_CLIPS)
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
    case p.P4.Error:
      N = null;
      break;
    case p.P4.Disabled:
    case p.P4.Enabled:
      L.clipsEducationState.dismissedAt = Date.now(), L.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, L.clipsEducationState.numberOfTimesDismissed += 1
  }
}

function ei(e) {
  let {
    clipIds: t
  } = e;
  R = null != t ? t : []
}

function ea(e, t, n) {
  if (!(0, d.J)() || n !== u.default.getId() || null == t) returnfalse;
  let r = "__CLIP_METADATA__",
    i = t.indexOf(r);
  if (false === i) returnfalse;
  try {
    let n = i + r.length,
      a = t.substring(n),
      s = JSON.parse(a);
    if (null == s.id) returnfalse;
    let o = D.get(e);
    return null == o && (o = new Set, D.set(e, o)), o.add(s.id), true
  } catch (e) {
    returnfalse
  }
}

function es(e) {
  var t;
  return ea(e.channelId, e.message.content, null == (t = e.message.author) ? true : t.id)
}

function eo(e) {
  let t = false;
  for (let r of e.messages) {
    var n;
    t = t || ea(e.channelId, r.content, null == (n = r.author) ? true : n.id)
  }
  return t
}
class el extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    null != e && (L = e), j(), this.waitFor(l.Ay)
  }
  getClips() {
    return A
  }
  getPendingClips() {
    return v
  }
  getUserAgnosticState() {
    return L
  }
  getSettings() {
    return L.clipsSettings
  }
  getLastClipsSession() {
    return T
  }
  getClipsWarningShown(e) {
    return I === e
  }
  getActiveAnimation() {
    return w
  }
  getStreamClipAnimations(e) {
    var t;
    return null != (t = P[e]) ? t : O
  }
  hasAnyClipAnimations() {
    return Object.values(P).some(e => e.length > 0)
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
    return S >= p.VP
  }
  getLastClipsError() {
    return N
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null != (t = null == (n = C[e]) ? true : n.clipsEnabled) && t
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null != (t = null == (n = C[e]) ? true : n.allowVoiceRecording) && t
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null != (t = null == (n = C[e]) ? true : n.allowAnyViewerClips) && t
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
    return R.includes(e)
  }
  getExportingClipIds() {
    return R
  }
  getMatchingGroupClip(e, t) {
    if (null == e && null == t) return null;
    for (let s of A) {
      var n, r, i, a;
      if (null != t && s.id === t || null != e && (null == (r = s.decision) || null == (n = r.signal) ? true : n.type) === f.Gy.DISTRIBUTED && (null == (a = s.decision) || null == (i = a.signal) ? true : i.remoteTriggerClipId) === e) return s
    }
    return null
  }
  wasClipSharedInChannel(e, t) {
    var n;
    let r = D.get(t);
    return null != (n = null == r ? true : r.has(e)) && n
  }
}
m(el, "displayName", "ClipsStore"), m(el, "persistKey", "ClipsStore"), m(el, "migrations", [e => ({
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
  let r = null == (t = n(430452).A) ? true : t.getHardwareEncoding();
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
let ec = new el(Chunk73153.h, {
    CLIPS_SETTINGS_UPDATE: U,
    CLIPS_SAVE_CLIP: B,
    CLIPS_SAVE_CLIP_PLACEHOLDER: H,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: Y,
    CLIPS_SAVE_CLIP_START: G,
    CLIPS_SAVE_CLIP_ERROR: F,
    CLIPS_SAVE_ANIMATION_END: V,
    STREAM_START: X,
    STREAM_STOP: Z,
    CLIPS_CLEAR_CLIPS_SESSION: J,
    CLIPS_CLEAR_NEW_CLIP_IDS: ee,
    CLIPS_LOAD_DIRECTORY_SUCCESS: Q,
    CLIPS_DELETE_CLIP: $,
    CLIPS_UPDATE_METADATA: k,
    RTC_CONNECTION_FLAGS: et,
    CLIPS_SHOW_CALL_WARNING: W,
    VOICE_CHANNEL_SELECT: K,
    CLIPS_CLASSIFY_HARDWARE: M,
    CLIPS_INIT: z,
    CLIPS_INIT_FAILURE: q,
    CLIPS_DISMISS_EDUCATION: er,
    RUNNING_GAMES_CHANGE: en,
    CLIPS_SET_EXPORTING: ei,
    MESSAGE_CREATE: es,
    LOAD_MESSAGES_SUCCESS: eo
  }),
  eu = ec