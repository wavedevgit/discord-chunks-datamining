/** Chunk was on 53485 **/
n.d(t, {
  Z: () => c
}), n(47120);
var r = n(392711),
  i = n.n(r),
  s = n(492435),
  a = n(353926),
  l = n(987338);

function o(e) {
  for (let t of e) {
    let e = a.Z.getUserExperimentDescriptor(t);
    if (null != e) return [t, e]
  }
  return null
}
let c = {
  getFirstEligibleUserExperiment: o,
  isInExperimentBucket: function(e, t) {
    return a.Z.getUserExperimentBucket(e) === t
  },
  experimentDescriptorEquals: function(e, t) {
    if (null == e && null == t || e === t) return !0;
    if (null == e && null != t || null != e && null == t) return !1;
    if (null != e && null != t) {
      if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision) return !1;
      if (e.type === l.xY.USER && t.type === l.xY.USER) return i().isEqual(e.context, t.context)
    }
    return !0
  },
  trackExposureToFirstEligibleUserExperiment: function(e) {
    let t = o(e);
    if (null != t) {
      let [e, n] = t;
      return (0, s.W9)(e, n), n
    }
  },
  getExperimentBucketName: function(e) {
    let t;
    return e === l.NZ.CONTROL ? "Control" : e === l.NZ.NOT_ELIGIBLE ? "Not Eligible" : "Treatment ".concat(e)
  }
}