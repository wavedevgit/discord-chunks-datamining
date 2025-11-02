/** Chunk was on web.js **/
/** chunk id: 435064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ed
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
  Chunk924557 = require("./924557.js"),
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
  P = [],
  w = null,
  D = {},
  x = new Map,
  L = {
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
  M = {
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
async function j() {
  if (M.clipsSettings.storageLocation !== O || null == Chunk579806.Z || null == Chunk579806.Z.remoteApp) return;
  let e = await Chunk579806.Z.remoteApp.getPath("documents");
  M.clipsSettings.storageLocation = module, eu.emitChange()
}

function k(e) {
  let {
    classification: t
  } = e, n = M.hardwareClassification;
  M.hardwareClassificationVersion = p.WM, M.hardwareClassification = t, M.hardwareClassification === _.xH.MEETS_AUTO_ENABLE && n !== _.xH.MEETS_AUTO_ENABLE && (M.clipsSettings.clipsEnabled = true);
  let r = M.hardwareClassificationForDecoupled;
  M.hardwareClassificationForDecoupled = t, M.hardwareClassificationForDecoupled === _.xH.MEETS_AUTO_ENABLE && r !== _.xH.MEETS_AUTO_ENABLE && M.clipsSettings.clipsEnabled && (M.clipsSettings.decoupledClipsEnabled = true)
}

function U(e) {
  let {
    clip: t
  } = e;
  for (let [e, n] of I.entries())
    if (n.id === t.id) {
      I[e] = t, I = [...I];
      return
    }
}

function G(e) {
  let {
    settings: t
  } = e;
  M = y(E({}, M), {
    clipsSettings: E({}, M.clipsSettings, t)
  })
}

function B(e) {
  let {
    clipType: t,
    streamKey: n,
    thumbnail: r
  } = e;
  if (S += 1, M.hasTakenDecoupledClip = M.hasTakenDecoupledClip || t === p.X9.DECOUPLED, null != n && null != r) {
    var i;
    let e = Date.now();
    w = null != w ? w : e, D[n] = [...null != (i = D[n]) ? i : [], {
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
  w === n && (w = null), null == n ? D[t] = [] : D[t] = D[t].filter(e => e.timestamp !== n)
}

function F() {
  S = Math.max(S - 1, 0)
}

function V(e) {
  var t, n;
  let {
    clip: r
  } = e;
  S = Math.max(S - 1, 0), C = y(E({
    applicationName: r.applicationName,
    ended: false
  }, C), {
    newClipIds: [...null != (t = null == C ? true : C.newClipIds) ? t : [], r.id]
  }), M = y(E({}, M), {
    newClipIds: [...null != (n = M.newClipIds) ? n : [], r.id]
  }), T = T.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  }), I = [r, ...I], M.hasClips = true
}

function H(e) {
  let {
    clip: t
  } = e;
  T = [t, ...T]
}

function Y(e) {
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

function W(e) {
  let {
    channelId: t
  } = e;
  A = t
}

function K(e) {
  let {
    channelId: t
  } = e;
  t !== A && (A = null)
}

function z(e) {
  let {
    applicationName: t
  } = e;
  if (R = null, !M.clipsSettings.clipsEnabled) returnfalse;
  C = {
    applicationName: t,
    newClipIds: [],
    ended: false
  }
}

function q(e) {
  let {
    errMsg: t
  } = e;
  R = t
}

function X(e) {
  let {
    sourceName: t,
    pid: n
  } = e;
  if (!M.clipsSettings.clipsEnabled) returnfalse;
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

function Q(e) {
  let {
    streamKey: t
  } = e;
  if (w = null, D[t] = [], null == C || (0, l.my)(t).ownerId !== c.default.getId()) returnfalse;
  C = 0 === C.newClipIds.length ? null : y(E({}, C), {
    ended: true
  })
}

function J(e) {
  M.hasClips = e.clips.length > 0, I = e.clips
}

function $(e) {
  0 === (I = I.filter(t => {
    let {
      filepath: n
    } = t;
    return n !== e.filepath
  })).length && (M.hasClips = false)
}

function ee() {
  if (null == C) returnfalse;
  C = null
}

function et() {
  M.newClipIds = []
}

function en(e) {
  N[e.userId] = {
    clipsEnabled: (0, u.yE)(e.flags, h.BVn.CLIPS_ENABLED),
    allowVoiceRecording: (0, u.yE)(e.flags, h.BVn.ALLOW_VOICE_RECORDING),
    allowAnyViewerClips: (0, u.yE)(e.flags, h.BVn.ALLOW_ANY_VIEWER_CLIPS)
  }
}

function er(e) {
  let {
    added: t
  } = e;
  t.length > 0 && (M.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
}

function ei(e) {
  let {
    educationType: t
  } = e;
  switch (t) {
    case p.D5.Error:
      R = null;
      break;
    case p.D5.Disabled:
    case p.D5.Enabled:
      M.clipsEducationState.dismissedAt = Date.now(), M.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, M.clipsEducationState.numberOfTimesDismissed += 1
  }
}

function ea(e) {
  let {
    clipIds: t
  } = e;
  P = null != t ? t : []
}

function eo(e, t, n) {
  if (!(0, f.NS)() || n !== c.default.getId() || null == t) returnfalse;
  let r = "__CLIP_METADATA__",
    i = t.indexOf(r);
  if (false === i) returnfalse;
  try {
    let n = i + r.length,
      a = t.substring(n),
      o = JSON.parse(a);
    if (null == o.id) returnfalse;
    let s = x.get(e);
    return null == s && (s = new Set, x.set(e, s)), s.add(o.id), true
  } catch (e) {
    returnfalse
  }
}

function es(e) {
  var t;
  return eo(e.channelId, e.message.content, null == (t = e.message.author) ? true : t.id)
}

function el(e) {
  let t = false;
  for (let r of e.messages) {
    var n;
    t = t || eo(e.channelId, r.content, null == (n = r.author) ? true : n.id)
  }
  return t
}
class ec extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (M = e), j(), this.waitFor(s.ZP)
  }
  getClips() {
    return I
  }
  getPendingClips() {
    return T
  }
  getUserAgnosticState() {
    return M
  }
  getSettings() {
    return M.clipsSettings
  }
  getLastClipsSession() {
    return C
  }
  getClipsWarningShown(e) {
    return A === e
  }
  getActiveAnimation() {
    return w
  }
  getStreamClipAnimations(e) {
    var t;
    return null != (t = D[e]) ? t : v
  }
  hasAnyClipAnimations() {
    return Object.values(D).some(e => e.length > 0)
  }
  getHardwareClassification() {
    return M.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return M.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return M.hardwareClassificationVersion
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
    return (0, Chunk358085.isWindows)()
  }
  hasClips() {
    return M.hasClips
  }
  hasTakenDecoupledClip() {
    return M.hasTakenDecoupledClip
  }
  getNewClipIds() {
    return M.newClipIds
  }
  isClipExporting(e) {
    return P.includes(e)
  }
  getExportingClipIds() {
    return P
  }
  getMatchingGroupClip(e, t) {
    if (null == e && null == t) return null;
    for (let o of I) {
      var n, r, i, a;
      if (null != t && o.id === t || null != e && (null == (r = o.decision) || null == (n = r.signal) ? true : n.type) === _.Bs.DISTRIBUTED && (null == (a = o.decision) || null == (i = a.signal) ? true : i.remoteTriggerClipId) === e) return o
    }
    return null
  }
  wasClipSharedInChannel(e, t) {
    var n;
    let r = x.get(t);
    return null != (n = null == r ? true : r.has(e)) && n
  }
}
g(ec, "displayName", "ClipsStore"), g(ec, "persistKey", "ClipsStore"), g(ec, "migrations", [e => ({
  clipsSettings: null != e ? e : L,
  newClipsCount: 0
}), e => {
  let t = E({}, L, e.clipsSettings);
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
    decoupledClipsEnabled: L.decoupledClipsEnabled
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
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? L.clipsQuality : e.clipsSettings.clipsQuality
  })
}), e => {
  var t;
  return y(E({}, e), {
    clipsSettings: y(E({}, e.clipsSettings), {
      remindersEnabled: null != (t = e.clipsSettings.remindersEnabled) ? t : L.remindersEnabled
    })
  })
}, e => y(E({}, e), {
  hasTakenDecoupledClip: false,
  clipsEducationState: {
    dismissedAt: null,
    numberOfGamesLaunchedSinceDismissal: 0,
    numberOfTimesDismissed: 0
  }
}), e => {
  var t, n, r, i;
  return y(E({}, e), {
    clipsSettings: y(E({}, e.clipsSettings), {
      maxAutoClips: null != (t = e.clipsSettings.maxAutoClips) ? t : L.maxAutoClips,
      clipSignals: null != (n = e.clipsSettings.clipSignals) ? n : L.clipSignals,
      mlPipelinesEnabled: null != (r = e.clipsSettings.mlPipelinesEnabled) ? r : L.mlPipelinesEnabled,
      autoClipPhrases: null != (i = e.clipsSettings.autoClipPhrases) ? i : L.autoClipPhrases
    })
  })
}, e => y(E({}, e), {
  clipsSettings: y(E({}, e.clipsSettings), {
    autoClipPhrases: 0 === e.clipsSettings.autoClipPhrases.length ? L.autoClipPhrases : e.clipsSettings.autoClipPhrases
  })
})]);
let eu = new ec(Chunk570140.Z, {
    CLIPS_SETTINGS_UPDATE: G,
    CLIPS_SAVE_CLIP: V,
    CLIPS_SAVE_CLIP_PLACEHOLDER: H,
    CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: Y,
    CLIPS_SAVE_CLIP_START: B,
    CLIPS_SAVE_CLIP_ERROR: F,
    CLIPS_SAVE_ANIMATION_END: Z,
    STREAM_START: X,
    STREAM_STOP: Q,
    CLIPS_CLEAR_CLIPS_SESSION: ee,
    CLIPS_CLEAR_NEW_CLIP_IDS: et,
    CLIPS_LOAD_DIRECTORY_SUCCESS: J,
    CLIPS_DELETE_CLIP: $,
    CLIPS_UPDATE_METADATA: U,
    RTC_CONNECTION_FLAGS: en,
    CLIPS_SHOW_CALL_WARNING: W,
    VOICE_CHANNEL_SELECT: K,
    CLIPS_CLASSIFY_HARDWARE: k,
    CLIPS_INIT: z,
    CLIPS_INIT_FAILURE: q,
    CLIPS_DISMISS_EDUCATION: ei,
    RUNNING_GAMES_CHANGE: er,
    CLIPS_SET_EXPORTING: ea,
    MESSAGE_CREATE: es,
    LOAD_MESSAGES_SUCCESS: el
  }),
  ed = eu