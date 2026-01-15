/** Chunk was on web.js **/
/** chunk id: 987170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk473749 = require("./473749.js"),
  Chunk232616 = require("./232616.js"),
  Chunk314897 = require("./314897.js"),
  Chunk492435 = require("./492435.js"),
  Chunk353926 = require("./353926.js"),
  Chunk980944 = require("./980944.js"),
  Chunk987338 = require("./987338.js");

function u(e, t) {
  return "guild" === e ? (0, o.gK)(t) : (0, o.Xz)(t)
}

function d(e, t, n) {
  return "guild" === e ? s.Z.getGuildExperimentDescriptor(t, n.guildId) : s.Z.getUserExperimentDescriptor(t)
}

function f(e, t, n, r) {
  var i, a;
  return (null == r ? true : r.aaMode) ? e.defaultConfig : null != (a = null == (i = n.get(t)) ? true : i.config) ? a : e.defaultConfig
}

function p(e) {
  (0, l.K)(e.id, e.label, e.commonTriggerPoint);
  let t = new Map;
  t.set(c.NZ.NOT_ELIGIBLE, {
    description: "Not Eligible",
    config: e.defaultConfig
  }), t.set(c.NZ.CONTROL, {
    description: "Control Bucket",
    config: e.defaultConfig
  }), e.treatments.forEach(e => {
    t.set(e.id, {
      description: "Treatment ".concat(e.id, ": ").concat(e.label),
      config: e.config
    })
  });
  let n = u(e.kind, {
    id: e.id,
    title: e.label,
    commonTriggerPoint: e.commonTriggerPoint,
    description: [...t.values()].map(e => e.description),
    buckets: [...t.keys()]
  });

  function p(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : true,
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
    if (t.exposureType = n ? c.a0.AUTO_FALLBACK : c.a0.AUTO, t.excluded = false, null == r) return void _(e, t);
    h(e, t, r)
  }

  function _(t) {
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
        excluded: false,
        exposureType: c.a0.MANUAL
      },
      i = d(e.kind, n.id, t);
    null != i && h(t, r, i)
  }

  function h(e, t, r) {
    if (null != r) {
      var i, s, l, u, d;
      let f = c.a0.MANUAL,
        p = false;
      (0, o.W9)(n.id, r, {
        location: null != (i = null == e ? true : e.location) ? i : "unknown",
        analyticsLocations: null != (s = null == t ? true : t.analyticsLocations) ? s : [],
        fingerprint: null != (u = null != (l = null == t ? true : t.fingerprint) ? l : a.default.getFingerprint()) ? u : true,
        excluded: (null == t ? true : t.excluded) || p,
        exposureType: null != (d = null == t ? true : t.exposureType) ? d : f
      })
    }
  }

  function m(n, r) {
    let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      a = null != i.disable && i.disable,
      o = d(e.kind, e.id, n),
      l = null == o || a ? c.NZ.NOT_ELIGIBLE : o.bucket,
      u = null == o ? false : o.revision;

    function p() {
      let i = d(e.kind, e.id, n),
        o = null == i || a ? c.NZ.NOT_ELIGIBLE : i.bucket,
        s = null == i ? false : i.revision;
      (o !== l || u !== s) && (r(f(e, o, t, i), o, s), l = o, u = s)
    }
    return r(f(e, l, t, o), l, u), s.Z.addReactChangeListener(p), () => {
      s.Z.removeReactChangeListener(p)
    }
  }

  function g(t) {
    let n = d(e.kind, e.id, t);
    return !!(null == n ? true : n.aaMode)
  }
  return {
    useExperiment: function(n) {
      var a, o, s;
      let l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
          autoTrackExposure: true
        },
        u = null != (a = l.disable) && a,
        _ = false !== l.autoTrackExposure,
        h = d(e.kind, e.id, n),
        g = null == l.trackExposureOptions ? true : (0, i.Z)(null != (o = l.trackExposureOptions) ? o : {}),
        E = null != (s = null == h ? true : h.triggerDebuggingEnabled) && s,
        [
          [b, y, O], v
        ] = (0, r.useState)(() => {
          let n = null == h || u ? c.NZ.NOT_ELIGIBLE : h.bucket;
          return [f(e, n, t, h), n, null == h ? false : h.revision]
        }),
        S = (0, i.Z)(n);
      return (0, r.useEffect)(() => {
        !u && (_ || E) && null == e.commonTriggerPoint && p(S, g, false === _)
      }, [u, _, S, g, y, O, E]), (0, r.useEffect)(() => m(S, (e, t, n) => {
        v(r => r[0] === e && r[1] === t && r[2] === n ? r : [e, t, n])
      }, {
        disable: u
      }), [u, S]), b
    },
    subscribe: m,
    trackExposure: _,
    getCurrentConfig: function(n) {
      let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
          autoTrackExposure: true
        },
        i = d(e.kind, e.id, n);
      if (null == i || r.disable) return f(e, c.NZ.NOT_ELIGIBLE, t, i);
      if ((false !== r.autoTrackExposure || i.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
        let e = false === r.autoTrackExposure;
        p(n, r.trackExposureOptions, e, i)
      }
      return f(e, i.bucket, t, i)
    },
    definition: e,
    isAAMode: g
  }
}