/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120), n(266796);
var r = n(192379),
  i = n(128456),
  o = n(314897),
  a = n(492435),
  s = n(353926),
  l = n(980944),
  c = n(987338);

function u(e, t) {
  return "guild" === e ? (0, a.gK)(t) : (0, a.Xz)(t)
}

function d(e, t, n) {
  return "guild" === e ? s.Z.getGuildExperimentDescriptor(t, n.guildId) : s.Z.getUserExperimentDescriptor(t)
}

function f(e, t, n, r) {
  var i, o;
  return (null == r ? void 0 : r.aaMode) ? e.defaultConfig : null !== (o = null === (i = n.get(t)) || void 0 === i ? void 0 : i.config) && void 0 !== o ? o : e.defaultConfig
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t.exposureType = n ? c.a0.AUTO_FALLBACK : c.a0.AUTO, t.excluded = !1, null == r) {
      _(e, t);
      return
    }
    h(e, t, r)
  }

  function _(t) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        excluded: !1,
        exposureType: c.a0.MANUAL
      },
      i = d(e.kind, n.id, t);
    null != i && h(t, r, i)
  }

  function h(e, t, r) {
    if (null != r) {
      var i, s, l, u, d;
      let f = c.a0.MANUAL,
        p = !1;
      (0, a.W9)(n.id, r, {
        location: null !== (i = null == e ? void 0 : e.location) && void 0 !== i ? i : "unknown",
        analyticsLocations: null !== (s = null == t ? void 0 : t.analyticsLocations) && void 0 !== s ? s : [],
        fingerprint: null !== (u = null !== (l = null == t ? void 0 : t.fingerprint) && void 0 !== l ? l : o.default.getFingerprint()) && void 0 !== u ? u : void 0,
        excluded: (null == t ? void 0 : t.excluded) || p,
        exposureType: null !== (d = null == t ? void 0 : t.exposureType) && void 0 !== d ? d : f
      })
    }
  }

  function m(n, r) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      o = null != i.disable && i.disable,
      a = d(e.kind, e.id, n),
      l = null == a || o ? c.NZ.NOT_ELIGIBLE : a.bucket,
      u = null == a ? -1 : a.revision;

    function p() {
      let i = d(e.kind, e.id, n),
        a = null == i || o ? c.NZ.NOT_ELIGIBLE : i.bucket,
        s = null == i ? -1 : i.revision;
      (a !== l || u !== s) && (r(f(e, a, t, i), a, s), l = a, u = s)
    }
    return r(f(e, l, t, a), l, u), s.Z.addReactChangeListener(p), () => {
      s.Z.removeReactChangeListener(p)
    }
  }

  function g(t) {
    let n = d(e.kind, e.id, t);
    return !!(null == n ? void 0 : n.aaMode)
  }
  return {
    useExperiment: function(n) {
      var o, a, s;
      let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          autoTrackExposure: !0
        },
        u = null !== (o = l.disable) && void 0 !== o && o,
        _ = !1 !== l.autoTrackExposure,
        h = d(e.kind, e.id, n),
        g = null == l.trackExposureOptions ? void 0 : (0, i.Z)(null !== (a = l.trackExposureOptions) && void 0 !== a ? a : {}),
        E = null !== (s = null == h ? void 0 : h.triggerDebuggingEnabled) && void 0 !== s && s,
        [
          [v, b, y], O
        ] = (0, r.useState)(() => {
          let n = null == h || u ? c.NZ.NOT_ELIGIBLE : h.bucket;
          return [f(e, n, t, h), n, null == h ? -1 : h.revision]
        }),
        S = (0, i.Z)(n);
      return (0, r.useEffect)(() => {
        !u && (_ || E) && null == e.commonTriggerPoint && p(S, g, !1 === _)
      }, [u, _, S, g, b, y, E]), (0, r.useEffect)(() => m(S, (e, t, n) => {
        O(r => r[0] === e && r[1] === t && r[2] === n ? r : [e, t, n])
      }, {
        disable: u
      }), [u, S]), v
    },
    subscribe: m,
    trackExposure: _,
    getCurrentConfig: function(n) {
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          autoTrackExposure: !0
        },
        i = d(e.kind, e.id, n);
      if (null == i || r.disable) return f(e, c.NZ.NOT_ELIGIBLE, t, i);
      if ((!1 !== r.autoTrackExposure || i.triggerDebuggingEnabled) && null == e.commonTriggerPoint) {
        let e = !1 === r.autoTrackExposure;
        p(n, r.trackExposureOptions, e, i)
      }
      return f(e, i.bucket, t, i)
    },
    definition: e,
    isAAMode: g
  }
}