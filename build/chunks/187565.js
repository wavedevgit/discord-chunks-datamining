/** Chunk was on 36605 **/
/** chunk id: 187565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KJ: () => g,
  N0: () => v,
  k3: () => _,
  lk: () => j,
  ng: () => b
}), require("./388685.js"), require("./457542.js"), require("./781311.js"), require("./953529.js");
var r, Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk999382 = require("./999382.js"),
  Chunk658666 = require("./658666.js"),
  Chunk384632 = require("./384632.js"),
  Chunk430824 = require("./430824.js"),
  Chunk411198 = require("./411198.js"),
  Chunk863249 = require("./863249.js"),
  Chunk944163 = require("./944163.js"),
  Chunk246364 = require("./246364.js"),
  Chunk983736 = require("./983736.js"),
  Chunk266395 = require("./266395.js"),
  Chunk388032 = require("./388032.jsx"),
  g = ((r = {})[r.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", r[r.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", r[r.VERIFICATION_FORM = 2] = "VERIFICATION_FORM", r);

function b(e, t, n) {
  let [r, s] = i.useState(false), c = (0, l.e7)([m.Z], () => m.Z.get(e)), u = (0, l.e7)([o.Z], () => o.Z.pendingState);
  i.useEffect(() => {
    t || d.ZP.fetchVerificationForm(e, n).finally(() => s(true))
  }, [e, n, t]);
  let h = i.useMemo(() => {
    var e, n;
    let r;
    if (!t || null == u) return null;
    if (u.joinType === a.A.APPLY) r = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : true;
    else if (null != u.termRules) {
      let e = u.termRules.map(e => e.value.trim()).filter(e => "" !== e);
      r = [{
        field_type: f.QJ.TERMS,
        label: x.intl.string(x.t["9suSIC"]),
        values: e,
        required: true
      }]
    }
    return null == r ? null : {
      version: null != (e = null == c ? true : c.version) ? e : "",
      description: null != (n = null == c ? true : c.description) ? n : "",
      formFields: r,
      guild: null == c ? true : c.guild
    }
  }, [t, u, c]);
  return {
    hasFetched: r,
    verificationForm: null != h ? h : c
  }
}

function v(e, t, n) {
  let r = (0, l.e7)([c.Z], () => c.Z.getGuild(e)),
    o = (0, l.e7)([s.Z], () => s.Z.getGuild());
  return i.useMemo(() => n && (null == o ? true : o.id) === e ? o : null != r ? r : null != t ? (0, u.Rj)(t) : null, [n, o, e, r, t])
}

function _(e) {
  let t = !(null == e ? true : e.isClaimed()),
    n = null == e ? true : e.verified,
    [r, l] = i.useState(2 * !t);
  return i.useEffect(() => {
    null != e && e.isClaimed() && l(2)
  }, [e]), i.useEffect(() => {
    1 === r && n && l(2)
  }, [r, n]), {
    currentStep: r,
    setCurrentStep: l
  }
}

function j(e) {
  let t = (0, p.rb)(e => e.hasUnsubmittedChanges);
  i.useEffect(() => ((0, p.a5)(false), () => {
    (0, p.a5)(false)
  }), []), i.useEffect(() => {
    let n = e.some(e => e.field_type !== f.QJ.TERMS && (0, h.OA)(e));
    n && !t ? (0, p.a5)(true) : !n && t && (0, p.a5)(false)
  }, [e, t])
}