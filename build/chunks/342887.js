/** Chunk was on web.js **/
/** chunk id: 342887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DF: () => P,
  HD: () => j,
  g8: () => R,
  md: () => M,
  st: () => L
}), require("./896048.js"), require("./65821.js"), require("./492834.js");
var Chunk735438 = require("./735438.js"),
  Chunk562465 = require("./562465.js"),
  Chunk205693 = require("./205693.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js"),
  Chunk456989 = require("./456989.js"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js"),
  Chunk504292 = require("./504292.js"),
  Chunk971778 = require("./971778.js"),
  Chunk736666 = require("./736666.js"),
  Chunk797169 = require("./797169.js"),
  Chunk805026 = require("./805026.js"),
  Chunk652215 = require("./652215.js");

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

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = new Chunk626584.A("VoiceFilterActionCreators"),
  T = 1e3,
  C = (0, Chunk735438.debounce)(() => {
    o.h.dispatch({
      type: "VOICE_FILTER_LAGGING"
    })
  }, T, {
    leading: true
  }),
  N = false,
  w = new Map;

function R(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    {
      url: n,
      modelId: r,
      fileName: i
    } = e,
    a = m.A.getModelState(r),
    s = w.get(r);
  if (null != s) return s;
  if ((null == a ? true : a.status) === g.u.DOWNLOADED) return Promise.resolve();
  if ((null == a ? true : a.status) === g.u.DOWNLOADING) return Promise.reject(Error("Voice filter model is downloading but not in active downloads map"));
  o.h.dispatch(v({
    type: "VOICE_FILTER_DOWNLOAD_STARTED"
  }, e));
  let l = _.Ay.downloadVoiceFilterFile(n, i, t => {
    let {
      downloadedBytes: n,
      totalBytes: r
    } = t;
    o.h.dispatch(I(v({
      type: "VOICE_FILTER_DOWNLOAD_PROGRESS"
    }, e), {
      downloadedBytes: n,
      totalBytes: r
    }))
  }).then(n => {
    if (n.fetchedFromNetwork) {
      var i, a;
      u.default.track(b.HAw.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
        active_voice_filter_id: null != (i = c.A.getActiveVoiceFilter()) ? i : null,
        success: true,
        voice_filter_id: e.voiceFilterId,
        model_id: r,
        reason: null != (a = null == t ? true : t.reason) ? a : null
      })
    }
    o.h.dispatch(I(v({
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
      }, e)), u.default.track(b.HAw.VOICE_FILTER_ERROR, {
        error_message: n,
        cause: (0, d.P)(Error(t))
      }), p.A.captureException(Error(n, {
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
    o.h.dispatch(I(v({
      type: "VOICE_FILTER_DOWNLOAD_FAILED"
    }, e), {
      error: t
    }))
  }).finally(() => {
    w.delete(r)
  });
  return w.set(r, l), l
}
async function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
  await M();
  let n = performance.now();
  try {
    let r = _.Ay.getVoiceFilters();
    S.info("Setting voice filter in native module:", e), await r.setVoiceFilter({
      name: e
    }), o.h.dispatch({
      type: "VOICE_FILTER_APPLIED",
      voiceFilterId: e,
      analyticsContext: t,
      activationDurationMs: performance.now() - n
    })
  } catch (t) {
    S.error("failed to set voice filter", t), o.h.dispatch({
      type: "VOICE_FILTER_APPLY_FAILED",
      voiceFilterId: e,
      error: t
    })
  }
}
async function D(e) {
  if (null == e.getCatalogNonce || null == e.getModuleVersion || null == e.getRequestedModelIds || null == e.setCatalog) throw Error("Voice filters signed catalog is not supported");
  let t = e.getCatalogNonce(),
    n = await i.Bo.get({
      url: b.Rsh.VOICE_FILTERS_CATALOG,
      query: {
        vfm_version: e.getModuleVersion(),
        models: e.getRequestedModelIds().join(","),
        nonce: t
      },
      rejectWithError: true
    }),
    r = n.text,
    a = n.body,
    s = n.headers["x-discord-catalog-signature"];
  if (null == a.models) throw Error("Voice filters catalog response is empty");
  if (null == s) throw Error("Voice filters catalog signature is missing");
  return await e.setCatalog(r, s), a
}
async function x(e) {
  if (!_.Ay.canCheckVoiceFilterFilesExist()) return;
  let t = Object.keys(e.models).map(e => ({
      id: e,
      fileName: (0, y.L)(e)
    })),
    n = await _.Ay.checkVoiceFilterFilesExist(t),
    r = {};
  for (let {
      id: e,
      exists: t
    }
    of n) r[e] = {
    status: t ? g.u.DOWNLOADED : g.u.MISSING
  };
  let i = t.map(e => e.fileName);
  return (0, s.YV)(i) && await (0, E.a)(i), r
}
async function L() {
  if (!m.A.isNativeModuleLoaded()) return void S.info("Voice Filter catalog refresh ignored, module not loaded.");
  if (!N) try {
    N = true;
    let e = _.Ay.getVoiceFilters(),
      t = await D(e),
      n = null == m.A.getCatalogLastFetchTime() ? await x(t) : true;
    await o.h.dispatch({
      type: "VOICE_FILTER_CATALOG_FETCH_SUCCESS",
      catalog: t,
      initialModelState: n
    })
  } catch (e) {
    S.warn("Failed to refresh voice filters catalog: ".concat(e.message)), u.default.track(b.HAw.VOICE_FILTER_ERROR, {
      error_message: "Failed to refresh voice filters catalog",
      cause: (0, d.P)(e)
    }), p.A.captureException(e), await o.h.dispatch({
      type: "VOICE_FILTER_CATALOG_FETCH_FAILED"
    })
  } finally {
    N = false
  }
}

function j() {
  o.h.dispatch({
    type: "VOICE_FILTER_DOWNLOAD_CANCELED"
  })
}
async function M() {
  if (!(m.A.isNativeModuleLoaded() || m.A.isNativeModuleLoading()) && !__OVERLAY__) {
    if (!(0, f.isWindows)() && !(0, f.isMac)()) return void o.h.dispatch({
      type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
      state: g.R.UNSUPPORTED
    });
    try {
      o.h.dispatch({
        type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
        state: g.R.LOADING
      }), await _.Ay.ensureModule("discord_voice_filters");
      let t = _.Ay.getVoiceFilters();
      await t.setupResources(), true !== t.setVoiceFilterLaggingCallback && await t.setVoiceFilterLaggingCallback(C), true !== t.setVoiceFilterReadyCallback && await t.setVoiceFilterReadyCallback(e => {
        o.h.dispatch({
          type: "VOICE_FILTER_READY",
          name: e
        })
      }), await o.h.dispatch({
        type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
        state: g.R.LOADED
      }), await L();
      let n = c.A.getMostRecentlyRequestedVoiceFilter();
      if (null != n) {
        var e;
        (null == (e = m.A.getVoiceFilter(n)) ? true : e.available) !== true ? (0, h.OR)(null) : (0, h.OR)(n)
      }
      c.A.getMediaEngine().on(a.bg.VoiceFiltersFailed, e => {
        S.warn("Voice Filters failed in process: ".concat(e)), u.default.track(b.HAw.VOICE_FILTER_ERROR, {
          error_message: "Voice Filters failed in process",
          cause: (0, d.P)(Error(e))
        }), p.A.captureException(Error("Voice Filters failed in process", {
          cause: e
        }))
      })
    } catch (e) {
      S.warn("Failed to load Voice Filters module: ".concat(e.message)), u.default.track(b.HAw.VOICE_FILTER_ERROR, {
        error_message: "Failed to load Voice Filters module",
        cause: (0, d.P)(e)
      }), p.A.captureException(e), o.h.dispatch({
        type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
        state: g.R.FAILED
      })
    }
  }
}