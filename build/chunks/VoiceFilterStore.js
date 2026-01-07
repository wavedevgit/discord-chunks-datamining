/** Chunk was on web.js **/
/** chunk id: 709706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U,
  r: () => h
}), require("./642613.js"), require("./388685.js"), require("./825670.js"), require("./467055.js");
var r, Chunk315008 = require("./315008.js"),
  Chunk347715 = require("./347715.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk750180 = require("./750180.js"),
  Chunk999224 = require("./999224.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var h = function(e) {
  return e.ERROR_DOWNLOADING_DEPENDENCY = "ERROR_DOWNLOADING_DEPENDENCY", e.ERROR_ACTIVATING_VOICE_FILTER = "ERROR_ACTIVATING_VOICE_FILTER", e
}({});
let g = new Chunk710845.Z("VoiceFilterStore"),
  E = {
    nativeVoiceFilterModuleState: Chunk750180.O.UNINITIALIZED,
    models: {},
    voiceFilters: {},
    modelState: {},
    sortedVoiceFilters: [],
    catalogFetchFailed: false,
    catalogLastFetchTime: true,
    catalogUpdateTime: true,
    limitedTimeVoices: true,
    error: null
  },
  b = null;

function y() {
  return (null === l.Z || true === l.Z ? true : l.Z.remoteApp.getVersion()) === "0.0.0"
}

function O(e) {
  return e.available ? 0 : e.temporarilyAvailable ? 1 : 2
}

function v(e) {
  if (null != e) {
    let t = new Date,
      n = new Date(e.current_set_start),
      r = new Date(e.current_set_end),
      i = new Date(e.next_set_start),
      a = new Date(e.next_set_end);
    if (t >= n && t < r) return {
      currentSet: e.current_set,
      catalogUpdateTime: r
    };
    if (t >= i && t < a) return {
      currentSet: e.next_set,
      catalogUpdateTime: a
    }
  }
  return {
    currentSet: [],
    catalogUpdateTime: true
  }
}

function S(e) {
  if (null == E.limitedTimeVoices) return void g.warn("No limited time voices available to update");
  E.limitedTimeVoices.current_set_end = e.toISOString(), E.limitedTimeVoices.next_set_start = e.toISOString(), E.limitedTimeVoices.next_set_end = (0, i.default)(e, 2).toISOString(), N()
}

function I(e) {
  return Object.entries(e).sort((e, t) => O(e[1]) - O(t[1])).map(e => {
    let [t] = e;
    return t
  })
}

function T(e) {
  let {
    catalog: t,
    initialModelState: n
  } = e, r = y();
  E.catalogFetchFailed = false, E.models = t.models, E.limitedTimeVoices = t.limited_time_voices;
  let i = {},
    a = v(E.limitedTimeVoices);
  if (E.catalogUpdateTime = a.catalogUpdateTime, r)
    for (let e of Object.keys(d.x)) i[e] = m(p({}, d.x[e]), {
      id: e,
      modelIds: true,
      available: true
    });
  for (let {
      id: e,
      models: n,
      available: o
    }
    of t.voices) Object.hasOwn(d.x, e) && (i[e] = m(p({}, d.x[e]), {
    id: e,
    modelIds: n,
    available: !!r || o,
    temporarilyAvailable: a.currentSet.includes(e)
  }));
  E.voiceFilters = i, E.sortedVoiceFilters = I(E.voiceFilters), E.catalogLastFetchTime = new Date, null != n && (Object.keys(E.modelState).length > 0 ? E.modelState = n : g.warn("Attempted to replace existing model state with initial model state"))
}

function C() {
  E.catalogFetchFailed = true
}
class A extends(r = Chunk442837.ZP.Store) {
  getVoiceFilterModels() {
    return E.models
  }
  getVoiceFilters() {
    return E.voiceFilters
  }
  getVoiceFilter(e) {
    return E.voiceFilters[e]
  }
  getModelState(e) {
    return E.modelState[e]
  }
  getOngoingDownloads() {
    return Object.fromEntries(Object.entries(E.modelState).filter(e => {
      let [t, {
        status: n
      }] = e;
      return n === u.L.DOWNLOADING
    }))
  }
  isVoiceFilterDownloaded(e) {
    var t, n;
    return Object.values(null != (n = null == (t = E.voiceFilters[e]) ? true : t.modelIds) ? n : {}).every(e => {
      var t;
      return (null == (t = E.modelState[e]) ? true : t.status) === u.L.DOWNLOADED
    })
  }
  isModelDownloaded(e) {
    var t;
    return (null == (t = E.modelState[e]) ? true : t.status) === u.L.DOWNLOADED
  }
  getSortedVoiceFilters() {
    return E.sortedVoiceFilters.map(e => E.voiceFilters[e])
  }
  getCatalogLastFetchTime() {
    return E.catalogLastFetchTime
  }
  getCatalogUpdateTime() {
    return E.catalogUpdateTime
  }
  getLimitedTimeVoices() {
    return E.limitedTimeVoices
  }
  isNativeModuleLoaded() {
    return E.nativeVoiceFilterModuleState === u.O.LOADED
  }
  isNativeModuleLoading() {
    return E.nativeVoiceFilterModuleState === u.O.LOADING
  }
  hasNativeModuleFailed() {
    return E.nativeVoiceFilterModuleState === u.O.FAILED
  }
  getCatalogFetchFailed() {
    return E.catalogFetchFailed
  }
  getError() {
    return E.error
  }
  getLastReportedLagTimestamp() {
    return b
  }
}

function N() {
  let e = v(E.limitedTimeVoices);
  E.catalogUpdateTime = e.catalogUpdateTime, Object.keys(E.voiceFilters).forEach(t => {
    E.voiceFilters[t].temporarilyAvailable = e.currentSet.includes(t)
  }), E.sortedVoiceFilters = I(E.voiceFilters)
}

function P(e) {
  let {
    modelId: t
  } = e;
  E.modelState[t] = m(p({}, E.modelState[t]), {
    status: u.L.DOWNLOADING,
    downloadedBytes: 0
  })
}

function R(e) {
  let {
    modelId: t,
    downloadedBytes: n,
    totalBytes: r
  } = e;
  E.modelState[t] = m(p({}, E.modelState[t]), {
    downloadedBytes: n,
    totalBytes: r
  })
}

function w(e) {
  var t;
  let {
    modelId: n,
    error: r
  } = e;
  (null == (t = E.modelState[n]) ? true : t.status) !== u.L.DOWNLOADED && (E.modelState[n] = m(p({}, E.modelState[n]), {
    status: u.L.MISSING
  }), "USER_CANCELED_DOWNLOAD" in (null != r ? r : {}) || (E.error = "ERROR_DOWNLOADING_DEPENDENCY"))
}

function D(e) {
  let {
    modelId: t
  } = e;
  E.modelState[t] = m(p({}, E.modelState[t]), {
    status: u.L.DOWNLOADED,
    downloadedBytes: true
  })
}

function x(e) {
  let {
    timeInSeconds: t
  } = e;
  S((0, a.Z)(new Date, t))
}

function L(e) {
  E.nativeVoiceFilterModuleState = e.state
}

function j() {
  E.error = "ERROR_ACTIVATING_VOICE_FILTER"
}

function M() {
  E.error = null
}

function k() {
  b = Date.now()
}
f(A, "displayName", "VoiceFilterStore");
let U = new A(Chunk570140.Z, {
  VOICE_FILTER_DOWNLOAD_STARTED: P,
  VOICE_FILTER_DOWNLOAD_PROGRESS: R,
  VOICE_FILTER_DOWNLOAD_FAILED: w,
  VOICE_FILTER_FILE_READY: D,
  VOICE_FILTER_CATALOG_FETCH_SUCCESS: T,
  VOICE_FILTER_CATALOG_FETCH_FAILED: C,
  VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES: N,
  VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: x,
  VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: L,
  VOICE_FILTER_APPLY_FAILED: j,
  VOICE_FILTER_REQUEST_SWITCH: M,
  VOICE_FILTER_LAGGING: k
})