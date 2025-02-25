/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => D
}), n(230036), n(47120), n(51350);
var r, i = n(315008),
  o = n(347715),
  a = n(259443),
  s = n(442837),
  l = n(570140),
  c = n(750180),
  u = n(999224);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = new a.Yd("VoiceFilterStore"),
  g = {
    nativeVoiceFilterModuleState: c.O.UNINITIALIZED,
    models: {},
    voiceFilters: {},
    modelState: {},
    sortedVoiceFilters: [],
    catalogLastFetchTime: void 0,
    catalogUpdateTime: void 0,
    limitedTimeVoices: void 0,
    catalogFailed: !1
  };

function m(e) {
  return e.available ? 0 : e.temporarilyAvailable ? 1 : 2
}

function E(e) {
  if (null != e) {
    let t = new Date,
      n = new Date(e.current_set_start),
      r = new Date(e.current_set_end),
      i = new Date(e.next_set_start),
      o = new Date(e.next_set_end);
    if (t >= n && t < r) return {
      currentSet: e.current_set,
      catalogUpdateTime: r
    };
    if (t >= i && t < o) return {
      currentSet: e.next_set,
      catalogUpdateTime: o
    }
  }
  return {
    currentSet: [],
    catalogUpdateTime: void 0
  }
}

function v(e) {
  if (null == g.limitedTimeVoices) {
    h.warn("No limited time voices available to update");
    return
  }
  g.limitedTimeVoices.current_set_end = e.toISOString(), g.limitedTimeVoices.next_set_start = e.toISOString(), g.limitedTimeVoices.next_set_end = (0, i.default)(e, 2).toISOString(), I()
}

function b(e) {
  return Object.entries(e).sort((e, t) => m(e[1]) - m(t[1])).map(e => {
    let [t] = e;
    return t
  })
}

function y(e) {
  let {
    catalog: t
  } = e;
  g.catalogFailed = !1, g.models = t.models, g.limitedTimeVoices = t.limited_time_voices;
  let n = {},
    r = E(g.limitedTimeVoices);
  for (let {
      id: e,
      models: i,
      available: o
    }
    of(g.catalogUpdateTime = r.catalogUpdateTime, t.voices)) Object.hasOwn(u.x, e) && (n[e] = p(f({}, u.x[e]), {
    id: e,
    modelIds: i,
    available: o,
    temporarilyAvailable: r.currentSet.includes(e)
  }));
  return g.voiceFilters = n, g.sortedVoiceFilters = b(g.voiceFilters), g.catalogLastFetchTime = new Date, !0
}

function O() {
  g.catalogFailed = !0
}
class S extends(r = s.ZP.Store) {
  getVoiceFilterModels() {
    return g.models
  }
  getVoiceFilters() {
    return g.voiceFilters
  }
  getVoiceFilter(e) {
    return g.voiceFilters[e]
  }
  getModelState(e) {
    return g.modelState[e]
  }
  isModelDownloaded(e) {
    var t;
    return (null === (t = g.modelState[e]) || void 0 === t ? void 0 : t.status) === c.L.DOWNLOADED
  }
  getSortedVoiceFilters() {
    return g.sortedVoiceFilters.map(e => g.voiceFilters[e])
  }
  getCatalogLastFetchTime() {
    return g.catalogLastFetchTime
  }
  getCatalogUpdateTime() {
    return g.catalogUpdateTime
  }
  getLimitedTimeVoices() {
    return g.limitedTimeVoices
  }
  isNativeModuleLoaded() {
    return g.nativeVoiceFilterModuleState === c.O.LOADED
  }
  isNativeModuleLoading() {
    return g.nativeVoiceFilterModuleState === c.O.LOADING
  }
  showFailure() {
    var e;
    if (Object.keys(null !== (e = null == g ? void 0 : g.models) && void 0 !== e ? e : {}).length) return !1;
    let t = g.nativeVoiceFilterModuleState === c.O.FAILED;
    return g.catalogFailed || t
  }
}

function I() {
  let e = E(g.limitedTimeVoices);
  g.catalogUpdateTime = e.catalogUpdateTime, Object.keys(g.voiceFilters).forEach(t => {
    g.voiceFilters[t].temporarilyAvailable = e.currentSet.includes(t)
  }), g.sortedVoiceFilters = b(g.voiceFilters)
}

function T(e) {
  let {
    modelId: t
  } = e;
  g.modelState[t] = p(f({}, g.modelState[t]), {
    status: c.L.DOWNLOADING,
    downloadedBytes: 0
  })
}

function N(e) {
  let {
    modelId: t
  } = e;
  g.modelState[t] = p(f({}, g.modelState[t]), {
    status: c.L.DOWNLOADED,
    downloadedBytes: void 0
  })
}

function A(e) {
  let {
    modelId: t,
    downloadedBytes: n,
    totalBytes: r
  } = e;
  g.modelState[t] = p(f({}, g.modelState[t]), {
    downloadedBytes: n,
    totalBytes: r
  })
}

function C(e) {
  var t;
  let {
    modelId: n
  } = e;
  (null === (t = g.modelState[n]) || void 0 === t ? void 0 : t.status) !== c.L.DOWNLOADED && (g.modelState[n] = p(f({}, g.modelState[n]), {
    status: c.L.MISSING
  }))
}

function R(e) {
  let {
    timeInSeconds: t
  } = e;
  v((0, o.Z)(new Date, t))
}

function P(e) {
  g.nativeVoiceFilterModuleState = e.state
}
d(S, "displayName", "VoiceFilterStore");
let D = new S(l.Z, {
  VOICE_FILTER_DOWNLOAD_STARTED: T,
  VOICE_FILTER_DOWNLOAD_READY: N,
  VOICE_FILTER_DOWNLOAD_PROGRESS: A,
  VOICE_FILTER_DOWNLOAD_FAILED: C,
  VOICE_FILTER_CATALOG_FETCH_SUCCESS: y,
  VOICE_FILTER_CATALOG_FETCH_FAILED: O,
  VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES: I,
  VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: R,
  VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: P
})