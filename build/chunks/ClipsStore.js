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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = "default",
  O = [],
  v = [],
  A = [],
  I = 0,
  S = null,
  T = null,
  C = {},
  N = null,
  w = [],
  R = null,
  P = {},
  D = new Map,
  L = {
    clipsEnabled: false,
    storageLocation: b,
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
  x = {
    clipsSettings: L,
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
async function M() {
  if (x.clipsSettings.storageLocation !== b || null == s.A || null == s.A.remoteApp) return;
  let e = await s.A.remoteApp.getPath("documents");
  x.clipsSettings.storageLocation = e, ec.emitChange()
}

function j(e) {
  let {
    classification: t
  } = e, n = x.hardwareClassification;
  x.hardwareClassificationVersion = p.V0, x.hardwareClassification = t, x.hardwareClassification === f.k9.MEETS_AUTO_ENABLE && n !== f.k9.MEETS_AUTO_ENABLE && (x.clipsSettings.clipsEnabled = true);
  let r = x.hardwareClassificationForDecoupled;
  x.hardwareClassificationForDecoupled = t, x.hardwareClassificationForDecoupled === f.k9.MEETS_AUTO_ENABLE && r !== f.k9.MEETS_AUTO_ENABLE && x.clipsSettings.clipsEnabled && (x.clipsSettings.decoupledClipsEnabled = true)
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
  x = y(g({}, x), {
    clipsSettings: g({}, x.clipsSettings, t)
  })
}

function G(e) {
  let {
    clipType: t,
    streamKey: n,
    thumbnail: r
  } = e;
  if (I += 1, x.hasTakenDecoupledClip = x.hasTakenDecoupledClip || t === p.Fv.DECOUPLED, null != n && null != r) {
    var i;
    let e = Date.now();
    R = null != R ? R : e, P[n] = [...null != (i = P[n]) ? i : [], {
      timestamp: e,
      thumbnail: r
    }]
  }
}

function F(e) {
  let {
    streamKey: t,
    timestamp: n
  } = e;
  R === n && (R = null), null == n ? P[t] = [] : P[t] = P[t].filter(e => e.timestamp !== n)
}

function V() {
  I = Math.max(I - 1, 0)
}

function B(e) {
  var t, n;
  let {
    clip: r
  } = e;
  I = Math.max(I - 1, 0), T = y(g({
    applicationName: r.applicationName,
    ended: false
  }, T), {
    newClipIds: [...null != (t = null == T ? true : T.newClipIds) ? t : [], r.id]
  }), x = y(g({}, x), {
    newClipIds: [...null != (n = x.newClipIds) ? n : [], r.id]
  }), A = A.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  }), v = [r, ...v], x.hasClips = true
}

function H(e) {
  let {
    clip: t
  } = e;
  A = [t, ...A]
}

function Y(e) {
  let {
    clipId: t
  } = e;
  A = A.filter(e => {
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
  S = t
}

function K(e) {
  let {
    channelId: t
  } = e;
  t !== S && (S = null)
}

function z(e) {
  let {
    applicationName: t
  } = e;
  if (N = null, !x.clipsSettings.clipsEnabled) returnfalse;
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

function Z(e) {
  let {
    sourceName: t,
    pid: n
  } = e;
  if (!x.clipsSettings.clipsEnabled) returnfalse;
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

function Q(e) {
  let {
    streamKey: t
  } = e;
  if (R = null, P[t] = [], null == T || (0, c.Iy)(t).ownerId !== u.default.getId()) returnfalse;
  T = 0 === T.newClipIds.length ? null : y(g({}, T), {
    ended: true
  })
}

function X(e) {
  x.hasClips = e.clips.length > 0, v = e.clips
}

function J(e) {
  0 === (v = v.filter(t => {
    let {
      filepath: n
    } = t;
    return n !== e.filepath
  })).length && (x.hasClips = false)
}

function $() {
  if (null == T) returnfalse;
  T = null
}

function ee() {
  x.newClipIds = []
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
  t.length > 0 && (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
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
      x.clipsEducationState.dismissedAt = Date.now(), x.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, x.clipsEducationState.numberOfTimesDismissed += 1
  }
}

function ei(e) {
  let {
    clipIds: t
  } = e;
  w = null != t ? t : []
}

function ea(e, t, n) {
  if (!(0, d.J)() || n !== u.default.getId() || null == t) returnfalse;
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
class el extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    null != e && (x = e), M(), this.waitFor(l.Ay)
  }
  getClips() {
    return v
  }
  getPendingClips() {
    return A
  }
  getUserAgnosticState() {
    return x
  }
  getSettings() {
    return x.clipsSettings
  }
  getLastClipsSession() {
    return T
  }
  getClipsWarningShown(e) {
    return S === e
  }
  getActiveAnimation() {
    return R
  }
  getStreamClipAnimations(e) {
    var t;
    return null != (t = P[e]) ? t : O
  }
  hasAnyClipAnimations() {
    return Object.values(P).some(e => e.length > 0)
  }
  getHardwareClassification() {
    return x.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return x.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return x.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return I >= p.VP
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
    return x.hasClips
  }
  hasTakenDecoupledClip() {
    return x.hasTakenDecoupledClip
  }
  getNewClipIds() {
    return x.newClipIds
  }
  isClipExporting(e) {
    return w.includes(e)
  }
  getExportingClipIds() {
    return w
  }
  getMatchingGroupClip(e, t) {
    if (null == e && null == t) return null;
    for (let o of v) {
      var n, r, i, a;
      if (null != t && o.id === t || null != e && (null == (r = o.decision) || null == (n = r.signal) ? true : n.type) === f.Gy.DISTRIBUTED && (null == (a = o.decision) || null == (i = a.signal) ? true : i.remoteTriggerClipId) === e) return o
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
  clipsSettings: null != e ? e : L,
  newClipsCount: 0
}), e => {
  let t = g({}, L, e.clipsSettings);
  return y(g({}, e), {
    clipsSettings: t
  })
}, e => {
  var t;
  return y(g({}, e), {
    newClipIds: null != (t = e.newClipIds) ? t : []
  })
}, e => {
  var t, n;
  return y(g({}, e), {
    hardwareClassification: null != (t = e.hardwareClassification) ? t : null,
    hardwareClassificationVersion: null != (n = e.hardwareClassificationVersion) ? n : 0
  })
}, e => {
  var t;
  return y(g({}, e), {
    hasClips: null != (t = e.hasClips) && t
  })
}, e => y(g({}, e), {
  clipsSettings: y(g({}, e.clipsSettings), {
    decoupledClipsEnabled: L.decoupledClipsEnabled
  })
}), e => {
  var t;
  return y(g({}, e), {
    hardwareClassificationForDecoupled: null != (t = e.hardwareClassificationForDecoupled) ? t : null
  })
}, e => {
  var t;
  let r = null == (t = n(430452).A) ? true : t.getHardwareEncoding();
  return y(g({}, e), {
    clipsSettings: y(g({}, e.clipsSettings), {
      clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
    })
  })
}, e => {
  var t;
  return y(g({}, e), {
    newClipIds: null != (t = e.newClipIds) ? t : [],
    newClipIDs: true
  })
}, e => y(g({}, e), {
  clipsSettings: y(g({}, e.clipsSettings), {
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? L.clipsQuality : e.clipsSettings.clipsQuality
  })
}), e => {
  var t;
  return y(g({}, e), {
    clipsSettings: y(g({}, e.clipsSettings), {
      remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : L.remindersEnabled
    })
  })
}, e => y(g({}, e), {
  hasTakenDecoupledClip: false,
  clipsEducationState: {
    dismissedAt: null,
    numberOfGamesLaunchedSinceDismissal: 0,
    numberOfTimesDismissed: 0
  }
}), e => {
  var t, n, r, i;
  return y(g({}, e), {
    clipsSettings: y(g({}, e.clipsSettings), {
      maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : L.maxAutoClips,
      clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : L.clipSignals,
      mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : L.mlPipelinesEnabled,
      autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : L.autoClipPhrases
    })
  })
}, e => y(g({}, e), {
  clipsSettings: y(g({}, e.clipsSettings), {
    autoClipPhrases: 0 === e.clipsSettings.autoClipPhrases.length ? L.autoClipPhrases : e.clipsSettings.autoClipPhrases
  })
})]);
let ec = new el(Chunk73153.h, {
    CLIPS_SETTINGS_UPDATE: U,
    CLIPS_SAVE_CLIP: B,
    CLIPS_SAVE_CLIP_PLACEHOLDER: H,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: Y,
    CLIPS_SAVE_CLIP_START: G,
    CLIPS_SAVE_CLIP_ERROR: V,
    CLIPS_SAVE_ANIMATION_END: F,
    STREAM_START: Z,
    STREAM_STOP: Q,
    CLIPS_CLEAR_CLIPS_SESSION: $,
    CLIPS_CLEAR_NEW_CLIP_IDS: ee,
    CLIPS_LOAD_DIRECTORY_SUCCESS: X,
    CLIPS_DELETE_CLIP: J,
    CLIPS_UPDATE_METADATA: k,
    RTC_CONNECTION_FLAGS: et,
    CLIPS_SHOW_CALL_WARNING: W,
    VOICE_CHANNEL_SELECT: K,
    CLIPS_CLASSIFY_HARDWARE: j,
    CLIPS_INIT: z,
    CLIPS_INIT_FAILURE: q,
    CLIPS_DISMISS_EDUCATION: er,
    RUNNING_GAMES_CHANGE: en,
    CLIPS_SET_EXPORTING: ei,
    MESSAGE_CREATE: eo,
    LOAD_MESSAGES_SUCCESS: es
  }),
  eu = ec