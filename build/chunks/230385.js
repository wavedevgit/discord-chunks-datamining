/** Chunk was on web.js **/
/** chunk id: 230385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./539854.js"), require("./388685.js");
var Chunk704215 = require("./704215.js"),
  Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk266454 = require("./266454.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk998502 = require("./998502.js"),
  Chunk778033 = require("./778033.js"),
  Chunk709706 = require("./709706.js"),
  Chunk358820 = require("./358820.js"),
  Chunk999224 = require("./999224.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

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
let y = new Chunk710845.Z("VoiceFilterManager");

function O(e) {
  var t;
  let n = c.ZP.getVoiceFilters();
  return null != n.getModelIdsForVoiceId ? n.getModelIdsForVoiceId(e.id) : Object.values(null != (t = e.modelIds) ? t : {})
}
let v = null;
class I extends Chunk147913.Z {
  async handleVoiceFilterRequestSwitch(e) {
    let {
      newVoiceFilterId: t,
      analyticsContext: n
    } = e;
    if (__OVERLAY__) return;
    null != v && v.abort();
    let r = new AbortController;
    if (v = r, null == t) return void(0, f.rk)(null, n);
    let i = d.Z.getVoiceFilter(t);
    if (null == i) return void y.error("requested Voice Filter is missing in VoiceFilterStore");
    let a = O(i);
    if (a.length > 0) {
      let e = d.Z.getVoiceFilterModels(),
        t = [];
      for (let n of a) {
        var o;
        let r = null == (o = e[n]) ? true : o.url;
        if (null == r) {
          y.error("Missing model url for voice filter", i.id, n);
          continue
        }
        t.push({
          voiceFilterId: i.id,
          modelId: n,
          url: r,
          fileName: (0, _.i)(n)
        })
      }
      y.info("Waiting for dependencies for voice filter", i.id, t);
      let r = t.map(e => (0, f.fz)(e, n));
      await Promise.all(r)
    }
    r.signal.aborted || (0, f.rk)(t, n)
  }
  handleVoiceFilterPrefetch(e) {
    if (__OVERLAY__) return;
    let t = d.Z.getVoiceFilters(),
      n = d.Z.getVoiceFilterModels(),
      r = new Set;
    for (let e of Object.values(t))
      for (let t of O(e)) r.has(t) || (r.add(t), (0, f.fz)({
        voiceFilterId: e.id,
        modelId: t,
        url: n[t].url,
        fileName: (0, _.i)(t)
      }, {
        reason: u.W.AUTO_PREFETCH
      }))
  }
  handleVoiceFilterDownloadFailed(e) {
    var t, n;
    let {
      modelId: r,
      voiceFilterId: i,
      error: a
    } = e, o = "USER_CANCELED_DOWNLOAD", c = null != a && o in a, u = (null != (t = null == a ? true : a.message) ? t : String(a)).substring(0, 200);
    c && (u = o), l.default.track(p.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
      canceled: c,
      active_voice_filter_id: null != (n = s.Z.getActiveVoiceFilter()) ? n : null,
      success: false,
      voice_filter_id: i,
      model_id: r,
      error_message: u
    })
  }
  handleVoiceFilterApplied(e) {
    let {
      voiceFilterId: t,
      analyticsContext: n,
      activationDurationMs: i
    } = e, a = s.Z.getPreviousVoiceFilter();
    if (null !== a && null === t) {
      let e = s.Z.getPreviousVoiceFilterAppliedAt(),
        t = null === e ? null : Date.now() - e;
      l.default.track(p.rMx.VOICE_FILTER_DISABLED, {
        active_voice_filter_id: a,
        duration_voice_filter_applied: t
      })
    }
    null !== t && ((0, o.Q3)(r.z.VOICE_FILTER_IN_CALL_COACHMARK, {
      dismissAction: h.L.INDIRECT_ACTION
    }), (0, o.Q3)(r.z.VOICE_FILTER_FIRST_USE_COACHMARK, {
      dismissAction: h.L.INDIRECT_ACTION
    }), l.default.track(p.rMx.VOICE_FILTER_ENABLED, b(g({
      active_voice_filter_id: t,
      previous_filter_id: a
    }, (0, u.w)(n)), {
      time_to_activate_native_ms: i
    })))
  }
  handleVoiceFilterApplyFailed(e) {
    let {
      voiceFilterId: t
    } = e;
    l.default.track(p.rMx.VOICE_FILTER_ACTIVATE_FAILED, {
      active_voice_filter_id: null != t ? t : null
    })
  }
  handleVoiceFilterDownloadCanceled() {
    Chunk998502.ZP.stopVoiceFilterDownloads()
  }
  constructor(...e) {
    super(...e), m(this, "actions", {
      VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch,
      VOICE_FILTER_PREFETCH: this.handleVoiceFilterPrefetch,
      VOICE_FILTER_DOWNLOAD_FAILED: this.handleVoiceFilterDownloadFailed,
      VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled,
      VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied,
      VOICE_FILTER_APPLY_FAILED: this.handleVoiceFilterApplyFailed
    })
  }
}
let T = new I