/** Chunk was on web.js **/
/** chunk id: 435064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eu
}), require("./388685.js"), require("./997841.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js"),
  Chunk630388 = require("./630388.js");
require("./137058.js");
var Chunk924557 = require("./924557.js"),
  Chunk894694 = require("./894694.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js");

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
  v = [],
  I = [],
  T = 0,
  S = null,
  A = null,
  C = {},
  N = null,
  R = [],
  P = null,
  D = {},
  w = new Map,
  L = {
    clipsEnabled: false,
    storageLocation: y,
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
  if (x.clipsSettings.storageLocation !== y || null == Chunk579806.Z || null == Chunk579806.Z.remoteApp) return;
  let e = await Chunk579806.Z.remoteApp.getPath("documents");
  x.clipsSettings.storageLocation = module, ec.emitChange()
}

function k(e) {
  let {
    classification: t
  } = e, n = x.hardwareClassification;
  x.hardwareClassificationVersion = _.WM, x.hardwareClassification = t, x.hardwareClassification === f.xH.MEETS_AUTO_ENABLE && n !== f.xH.MEETS_AUTO_ENABLE && (x.clipsSettings.clipsEnabled = true);
  let r = x.hardwareClassificationForDecoupled;
  x.hardwareClassificationForDecoupled = t, x.hardwareClassificationForDecoupled === f.xH.MEETS_AUTO_ENABLE && r !== f.xH.MEETS_AUTO_ENABLE && x.clipsSettings.clipsEnabled && (x.clipsSettings.decoupledClipsEnabled = true)
}

function j(e) {
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
  x = b(g({}, x), {
    clipsSettings: g({}, x.clipsSettings, t)
  })
}

function G(e) {
  let {
    clipType: t,
    streamKey: n,
    thumbnail: r
  } = e;
  if (T += 1, x.hasTakenDecoupledClip = x.hasTakenDecoupledClip || t === _.X9.DECOUPLED, null != n && null != r) {
    var i;
    let e = Date.now();
    P = null != P ? P : e, D[n] = [...null != (i = D[n]) ? i : [], {
      timestamp: e,
      thumbnail: r
    }]
  }
}

function B(e) {
  let {
    streamKey: t,
    timestamp: n
  } = e;
  P === n && (P = null), null == n ? D[t] = [] : D[t] = D[t].filter(e => e.timestamp !== n)
}

function Z() {
  T = Math.max(T - 1, 0)
}

function F(e) {
  var t, n;
  let {
    clip: r
  } = e;
  T = Math.max(T - 1, 0), A = b(g({
    applicationName: r.applicationName,
    ended: false
  }, A), {
    newClipIds: [...null != (t = null == A ? true : A.newClipIds) ? t : [], r.id]
  }), x = b(g({}, x), {
    newClipIds: [...null != (n = x.newClipIds) ? n : [], r.id]
  }), I = I.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  }), v = [r, ...v], x.hasClips = true
}

function V(e) {
  let {
    clip: t
  } = e;
  I = [t, ...I]
}

function H(e) {
  let {
    clipId: t
  } = e;
  I = I.filter(e => {
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
  S = t
}

function W(e) {
  let {
    channelId: t
  } = e;
  t !== S && (S = null)
}

function K(e) {
  let {
    applicationName: t
  } = e;
  if (N = null, !x.clipsSettings.clipsEnabled) returnfalse;
  A = {
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
  if (!x.clipsSettings.clipsEnabled) returnfalse;
  let r = t;
  if (null != n) {
    var i;
    let e = s.ZP.getGameForPID(n);
    r = null != (i = null == e ? true : e.name) ? i : r
  }
  if (null == r || "" === r) returnfalse;
  A = {
    applicationName: r,
    newClipIds: [],
    ended: false
  }
}

function X(e) {
  let {
    streamKey: t
  } = e;
  if (P = null, D[t] = [], null == A || (0, l.my)(t).ownerId !== c.default.getId()) returnfalse;
  A = 0 === A.newClipIds.length ? null : b(g({}, A), {
    ended: true
  })
}

function Q(e) {
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
  if (null == A) returnfalse;
  A = null
}

function ee() {
  x.newClipIds = []
}

function et(e) {
  C[e.userId] = {
    clipsEnabled: (0, u.yE)(e.flags, p.BVn.CLIPS_ENABLED),
    allowVoiceRecording: (0, u.yE)(e.flags, p.BVn.ALLOW_VOICE_RECORDING),
    allowAnyViewerClips: (0, u.yE)(e.flags, p.BVn.ALLOW_ANY_VIEWER_CLIPS)
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
    case _.D5.Error:
      N = null;
      break;
    case _.D5.Disabled:
    case _.D5.Enabled:
      x.clipsEducationState.dismissedAt = Date.now(), x.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, x.clipsEducationState.numberOfTimesDismissed += 1
  }
}

function ei(e) {
  let {
    clipIds: t
  } = e;
  R = null != t ? t : []
}

function ea(e, t, n) {
  if (!(0, d.NS)() || n !== c.default.getId() || null == t) returnfalse;
  let r = "__CLIP_METADATA__",
    i = t.indexOf(r);
  if (false === i) returnfalse;
  try {
    let n = i + r.length,
      a = t.substring(n),
      o = JSON.parse(a);
    if (null == o.id) returnfalse;
    let s = w.get(e);
    return null == s && (s = new Set, w.set(e, s)), s.add(o.id), true
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
    null != e && (x = e), M(), this.waitFor(s.ZP)
  }
  getClips() {
    return v
  }
  getPendingClips() {
    return I
  }
  getUserAgnosticState() {
    return x
  }
  getSettings() {
    return x.clipsSettings
  }
  getLastClipsSession() {
    return A
  }
  getClipsWarningShown(e) {
    return S === e
  }
  getActiveAnimation() {
    return P
  }
  getStreamClipAnimations(e) {
    var t;
    return null != (t = D[e]) ? t : O
  }
  hasAnyClipAnimations() {
    return Object.values(D).some(e => e.length > 0)
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
    return T >= Chunk356659.Kw
  }
  getLastClipsError() {
    return N
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null != (n = null == (t = C[e]) ? true : t.clipsEnabled) && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null != (n = null == (t = C[e]) ? true : t.allowVoiceRecording) && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null != (n = null == (t = C[e]) ? true : t.allowAnyViewerClips) && n
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
    return R.includes(e)
  }
  getExportingClipIds() {
    return R
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
    let r = w.get(t);
    return null != (n = null == r ? true : r.has(e)) && n
  }
}
m(el, "displayName", "ClipsStore"), m(el, "persistKey", "ClipsStore"), m(el, "migrations", [e => ({
  clipsSettings: null != e ? e : L,
  newClipsCount: 0
}), e => {
  let t = g({}, L, e.clipsSettings);
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
    decoupledClipsEnabled: L.decoupledClipsEnabled
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
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? L.clipsQuality : e.clipsSettings.clipsQuality
  })
}), e => {
  var t;
  return b(g({}, e), {
    clipsSettings: b(g({}, e.clipsSettings), {
      remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : L.remindersEnabled
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
      maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : L.maxAutoClips,
      clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : L.clipSignals,
      mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : L.mlPipelinesEnabled,
      autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : L.autoClipPhrases
    })
  })
}, e => b(g({}, e), {
  clipsSettings: b(g({}, e.clipsSettings), {
    autoClipPhrases: 0 === e.clipsSettings.autoClipPhrases.length ? L.autoClipPhrases : e.clipsSettings.autoClipPhrases
  })
})]);
let ec = new el(Chunk570140.Z, {
    CLIPS_SETTINGS_UPDATE: U,
    CLIPS_SAVE_CLIP: F,
    CLIPS_SAVE_CLIP_PLACEHOLDER: V,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: H,
    CLIPS_SAVE_CLIP_START: G,
    CLIPS_SAVE_CLIP_ERROR: Z,
    CLIPS_SAVE_ANIMATION_END: B,
    STREAM_START: q,
    STREAM_STOP: X,
    CLIPS_CLEAR_CLIPS_SESSION: $,
    CLIPS_CLEAR_NEW_CLIP_IDS: ee,
    CLIPS_LOAD_DIRECTORY_SUCCESS: Q,
    CLIPS_DELETE_CLIP: J,
    CLIPS_UPDATE_METADATA: j,
    RTC_CONNECTION_FLAGS: et,
    CLIPS_SHOW_CALL_WARNING: Y,
    VOICE_CHANNEL_SELECT: W,
    CLIPS_CLASSIFY_HARDWARE: k,
    CLIPS_INIT: K,
    CLIPS_INIT_FAILURE: z,
    CLIPS_DISMISS_EDUCATION: er,
    RUNNING_GAMES_CHANGE: en,
    CLIPS_SET_EXPORTING: ei,
    MESSAGE_CREATE: eo,
    LOAD_MESSAGES_SUCCESS: es
  }),
  eu = ec