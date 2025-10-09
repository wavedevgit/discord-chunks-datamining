/** Chunk was on web.js **/
/** chunk id: 358820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  fz: () => P,
  ge: () => M,
  r5: () => k,
  rk: () => w,
  wV: () => L
}), require("./388685.js"), require("./415506.js"), require("./457542.js");
var Chunk392711 = require("./392711.js"),
  Chunk544891 = require("./544891.js"),
  Chunk46973 = require("./46973.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk460366 = require("./460366.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk743498 = require("./743498.js"),
  Chunk709706 = require("./709706.js"),
  Chunk750180 = require("./750180.js"),
  Chunk547614 = require("./547614.js"),
  Chunk999224 = require("./999224.js"),
  Chunk981631 = require("./981631.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = new Chunk710845.Z("VoiceFilterActionCreators"),
  A = 1e3,
  C = (0, Chunk392711.debounce)(() => {
    Chunk570140.Z.dispatch({
      type: "VOICE_FILTER_LAGGING"
    })
  }, A, {
    leading: true
  }),
  N = false,
  R = new Map;

function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    {
      url: n,
      modelId: r,
      fileName: i
    } = e,
    a = m.Z.getModelState(r),
    o = R.get(r);
  if (null != o) return o;
  if ((null == a ? true : a.status) === g.L.DOWNLOADED) return Promise.resolve();
  if ((null == a ? true : a.status) === g.L.DOWNLOADING) return Promise.reject(Error("Voice filter model is downloading but not in active downloads map"));
  s.Z.dispatch(v({
    type: "VOICE_FILTER_DOWNLOAD_STARTED"
  }, e));
  let l = p.ZP.downloadVoiceFilterFile(n, i, t => {
    let {
      downloadedBytes: n,
      totalBytes: r
    } = t;
    s.Z.dispatch(T(v({
      type: "VOICE_FILTER_DOWNLOAD_PROGRESS"
    }, e), {
      downloadedBytes: n,
      totalBytes: r
    }))
  }).then(n => {
    if (n.fetchedFromNetwork) {
      var i, a;
      u.default.track(y.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
        active_voice_filter_id: null != (i = c.Z.getActiveVoiceFilter()) ? i : null,
        success: true,
        voice_filter_id: e.voiceFilterId,
        model_id: r,
        reason: null != (a = null == t ? true : t.reason) ? a : null
      })
    }
    s.Z.dispatch(T(v({
      type: "VOICE_FILTER_FILE_READY"
    }, e), {
      analyticsContext: t
    }))
  }).catch(t => {
    if (null == t ? true : t.USER_CANCELED_DOWNLOAD) S.info("User canceled the download for Voice Filter dependency", e);
    else {
      let n = "Failed to download voice filter dependency";
      S.error(n, v({
        reason: t
      }, e)), u.default.track(y.rMx.VOICE_FILTER_ERROR, {
        error_message: n,
        cause: (0, d.X)(Error(t))
      }), _.Z.captureException(Error(n, {
        cause: t
      }), {
        tags: {
          modelId: r
        },
        extra: {
          reason: t
        }
      })
    }
    s.Z.dispatch(T(v({
      type: "VOICE_FILTER_DOWNLOAD_FAILED"
    }, e), {
      error: t
    }))
  }).finally(() => {
    R.delete(r)
  });
  return R.set(r, l), l
}
async function w(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
  await k();
  let n = performance.now();
  try {
    let r = p.ZP.getVoiceFilters();
    S.info("Setting voice filter in native module:", e), await r.setVoiceFilter({
      name: e
    }), s.Z.dispatch({
      type: "VOICE_FILTER_APPLIED",
      voiceFilterId: e,
      analyticsContext: t,
      activationDurationMs: performance.now() - n
    })
  } catch (t) {
    S.error("failed to set voice filter", t), s.Z.dispatch({
      type: "VOICE_FILTER_APPLY_FAILED",
      voiceFilterId: e,
      error: t
    })
  }
}
async function D(e) {
  if (null == e.getCatalogNonce || null == e.getModuleVersion || null == e.getRequestedModelIds || null == e.setCatalog) throw Error("Voice filters signed catalog is not supported");
  let t = e.getCatalogNonce(),
    n = await i.tn.get({
      url: y.ANM.VOICE_FILTERS_CATALOG,
      query: {
        vfm_version: e.getModuleVersion(),
        models: e.getRequestedModelIds().join(","),
        nonce: t
      },
      rejectWithError: true
    }),
    r = n.text,
    a = n.body,
    o = n.headers["x-discord-catalog-signature"];
  if (null == a.models) throw Error("Voice filters catalog response is empty");
  if (null == o) throw Error("Voice filters catalog signature is missing");
  return await e.setCatalog(r, o), a
}
async function x(e) {
  if (!p.ZP.canCheckVoiceFilterFilesExist()) return;
  let t = Object.keys(e.models).map(e => ({
      id: e,
      fileName: (0, b.i)(e)
    })),
    n = await p.ZP.checkVoiceFilterFilesExist(t),
    r = {};
  for (let {
      id: e,
      exists: t
    }
    of n) r[e] = {
    status: t ? g.L.DOWNLOADED : g.L.MISSING
  };
  let i = t.map(e => e.fileName);
  return (0, o.dZ)(i) && await (0, E.A)(i), r
}
async function L() {
  if (!Chunk709706.Z.isNativeModuleLoaded()) return void S.info("Voice Filter catalog refresh ignored, module not loaded.");
  if (!N) try {
    N = true;
    let e = Chunk998502.ZP.getVoiceFilters(),
      t = await D(module),
      n = null == Chunk709706.Z.getCatalogLastFetchTime() ? await x(exports) : true;
    await Chunk570140.Z.dispatch({
      type: "VOICE_FILTER_CATALOG_FETCH_SUCCESS",
      catalog: exports,
      initialModelState: require
    })
  } catch (e) {
    S.warn("Failed to refresh voice filters catalog: ".concat(module.message)), Chunk626135.default.track(Chunk981631.rMx.VOICE_FILTER_ERROR, {
      error_message: "Failed to refresh voice filters catalog",
      cause: (0, Chunk460366.X)(module)
    }), Chunk960048.Z.captureException(module), await Chunk570140.Z.dispatch({
      type: "VOICE_FILTER_CATALOG_FETCH_FAILED"
    })
  } finally {
    N = false
  }
}

function M() {
  Chunk570140.Z.dispatch({
    type: "VOICE_FILTER_DOWNLOAD_CANCELED"
  })
}
async function k() {
  if (!(Chunk709706.Z.isNativeModuleLoaded() || Chunk709706.Z.isNativeModuleLoading()) && !__OVERLAY__) {
    if (!(0, Chunk358085.isWindows)() && !(0, Chunk358085.isMac)()) return void Chunk570140.Z.dispatch({
      type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
      state: Chunk750180.O.UNSUPPORTED
    });
    try {
      Chunk570140.Z.dispatch({
        type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
        state: Chunk750180.O.LOADING
      }), await Chunk998502.ZP.ensureModule("discord_voice_filters");
      let t = Chunk998502.ZP.getVoiceFilters();
      await exports.setupResources(), true !== exports.setVoiceFilterLaggingCallback && await exports.setVoiceFilterLaggingCallback(C), true !== exports.setVoiceFilterReadyCallback && await exports.setVoiceFilterReadyCallback(e => {
        s.Z.dispatch({
          type: "VOICE_FILTER_READY",
          name: e
        })
      }), await Chunk570140.Z.dispatch({
        type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
        state: Chunk750180.O.LOADED
      }), await L();
      let n = Chunk131951.Z.getMostRecentlyRequestedVoiceFilter();
      if (null != require) {
        var e;
        (null == (e = Chunk709706.Z.getVoiceFilter(require)) ? true : module.available) !== true ? (0, Chunk743498.v6)(null) : (0, Chunk743498.v6)(require)
      }
      Chunk131951.Z.getMediaEngine().on(Chunk46973.aB.VoiceFiltersFailed, e => {
        S.warn("Voice Filters failed in process: ".concat(e)), u.default.track(y.rMx.VOICE_FILTER_ERROR, {
          error_message: "Voice Filters failed in process",
          cause: (0, d.X)(Error(e))
        }), _.Z.captureException(Error("Voice Filters failed in process", {
          cause: e
        }))
      })
    } catch (e) {
      S.warn("Failed to load Voice Filters module: ".concat(module.message)), Chunk626135.default.track(Chunk981631.rMx.VOICE_FILTER_ERROR, {
        error_message: "Failed to load Voice Filters module",
        cause: (0, Chunk460366.X)(module)
      }), Chunk960048.Z.captureException(module), Chunk570140.Z.dispatch({
        type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
        state: Chunk750180.O.FAILED
      })
    }
  }
}