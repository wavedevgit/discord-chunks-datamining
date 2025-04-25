/** Chunk was on 89839 **/
n.d(t, {
  Z: () => f
}), n(388685), n(467055);
var a, r, i, l = n(108131),
  s = n.n(l),
  d = n(442837),
  u = n(570140),
  o = n(314897),
  c = n(626135),
  g = n(981631);
let m = {
    user: {},
    guild: {}
  },
  E = {
    user: {},
    guild: {}
  },
  x = {};
class _ extends(a = d.ZP.Store) {
  initialize() {
    this.waitFor(o.default)
  }
  processExperimentsMessage(e) {
    var t;
    if (null == e || null == e.header || null == e.body) return !1;
    let n = e.header[1],
      a = e.body[0],
      r = e.body[1];
    if (null == n || null == a || null == r) return !1;
    let i = {
      evaluationId: n,
      experiments: Object.fromEntries((null != (t = e.body[2]) ? t : []).filter(e => {
        let [t, n, a] = e;
        return null != t && null != n
      }).map(e => {
        let [t, n, a] = e;
        return [t, {
          hashedId: t,
          config: n,
          isWarehouseOverride: 1 === a
        }]
      }))
    };
    m[a][r] = i
  }
  registerExperiment(e, t, n) {
    let a = E[t],
      r = {
        id: e,
        kind: t,
        defaultConfig: n
      };
    return a[e] = r, x[e] = s().v3(e), r
  }
  getAssignedConfig(e, t) {
    var n;
    let a = null == (n = this.getExperimentAssignment(e)) ? void 0 : n.config;
    return null != a && this.isCompatibleConfig(a, t.defaultConfig) ? a : t.defaultConfig
  }
  getEvaluation(e, t) {
    var n, a;
    return null == (a = m[e]) || null == (n = a[t]) ? void 0 : n.evaluationId
  }
  trackExposure(e, t, n, a) {
    "user" === t && c.default.track(g.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
      evaluation: e,
      experiment: n,
      exposure_location: a,
      unit_type: t
    })
  }
  isCompatibleConfig(e, t) {
    return Object.keys(t).every(t => t in e)
  }
  getExperimentAssignment(e) {
    var t, n;
    let a = x[e.experimentId];
    return null == (n = m[e.kind]) || null == (t = n[e.unitId]) ? void 0 : t.experiments[a]
  }
  constructor() {
    super(u.Z, {
      CONNECTION_OPEN: e => this.processExperimentsMessage(e.apexUserExperiments),
      CONNECTION_OPEN_STATE_UPDATE: e => this.processExperimentsMessage(e.apexUserExperiments)
    }, u.c.Early)
  }
}
i = "ApexExperimentStore", (r = "displayName") in _ ? Object.defineProperty(_, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[r] = i;
let f = new _