/** Chunk was on 89839 **/
n.d(t, {
  Z: () => v
}), n(388685), n(467055);
var a, i, r, l = n(108131),
  s = n.n(l),
  d = n(442837),
  u = n(570140),
  o = n(314897),
  c = n(626135),
  g = n(981631);
let E = {
    user: {},
    guild: {}
  },
  m = {
    user: {},
    guild: {}
  },
  x = {};
class _ extends(a = d.ZP.Store) {
  initialize() {
    this.waitFor(o.default)
  }
  handleConnectionOpen(e) {
    this.processExperimentsMessage(e.apexUserExperiments), this.trackCurrentEvaluationExposure("user", o.default.getId(), "connection_open")
  }
  processExperimentsMessage(e) {
    var t;
    if (null == e || null == e.header || null == e.body) return !1;
    let n = e.header[1],
      a = e.body[0],
      i = e.body[1];
    if (null == n || null == a || null == i) return !1;
    let r = {
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
    E[a][i] = r
  }
  registerExperiment(e, t, n) {
    let a = m[t],
      i = {
        id: e,
        kind: t,
        defaultConfig: n
      };
    return a[e] = i, x[e] = s().v3(e), i
  }
  getAssignedConfig(e, t) {
    var n;
    let a = null == (n = this.getExperimentAssignment(e)) ? void 0 : n.config;
    return null != a && this.isCompatibleConfig(a, t.defaultConfig) ? a : t.defaultConfig
  }
  getEvaluation(e, t) {
    var n, a;
    return null == (a = E[e]) || null == (n = a[t]) ? void 0 : n.evaluationId
  }
  trackEvaluationExposure(e) {
    let {
      evaluationId: t,
      kind: n,
      experimentId: a,
      location: i
    } = e;
    c.default.track(g.rMx.EXPERIMENT_USER_EVALUATION_EXPOSED, {
      evaluation: t,
      experiment: a,
      exposure_location: i,
      unit_type: n
    })
  }
  trackCurrentEvaluationExposure(e, t, n) {
    let a = this.getEvaluation(e, t);
    null != a && this.trackEvaluationExposure({
      evaluationId: a,
      kind: e,
      location: n
    })
  }
  isCompatibleConfig(e, t) {
    return Object.keys(t).every(t => t in e)
  }
  getExperimentAssignment(e) {
    var t, n;
    let a = x[e.experimentId];
    return null == (n = E[e.kind]) || null == (t = n[e.unitId]) ? void 0 : t.experiments[a]
  }
  constructor() {
    super(u.Z, {
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      CONNECTION_OPEN_STATE_UPDATE: e => this.processExperimentsMessage(e.apexUserExperiments)
    }, u.c.Early)
  }
}
r = "ApexExperimentStore", (i = "displayName") in _ ? Object.defineProperty(_, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[i] = r;
let v = new _