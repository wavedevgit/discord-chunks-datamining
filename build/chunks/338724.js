/** Chunk was on 20601 **/
/** chunk id: 338724, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  $x: () => g,
  Qg: () => v,
  dy: () => p,
  he: () => C,
  x$: () => j
}), require("./896048.js"), require("./492834.js"), require("./733351.js"), require("./228524.js");
var n, Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk555337 = require("./555337.js"),
  Chunk306846 = require("./306846.js"),
  Chunk894222 = require("./894222.js"),
  Chunk71393 = require("./71393.js"),
  Chunk860689 = require("./860689.js"),
  Chunk408213 = require("./408213.js"),
  Chunk60175 = require("./60175.js"),
  Chunk513461 = require("./513461.js"),
  Chunk709977 = require("./709977.js"),
  Chunk890620 = require("./890620.js"),
  Chunk985018 = require("./985018.jsx"),
  v = ((n = {})[n.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", n[n.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", n[n.VERIFICATION_FORM = 2] = "VERIFICATION_FORM", n);

function g(e, t, l) {
  let [n, i] = r.useState(false), c = (0, s.bG)([f.A], () => f.A.get(e)), d = (0, s.bG)([a.A], () => a.A.pendingState);
  r.useEffect(() => {
    t || u.Ay.fetchVerificationForm(e, l).finally(() => i(true))
  }, [e, l, t]);
  let x = r.useMemo(() => {
    var e, l;
    let n;
    if (!t || null == d) return null;
    if (d.joinType === o.J.APPLY) n = null != d.pendingVerificationFields ? [...d.pendingVerificationFields] : true;
    else if (null != d.termRules) {
      let e = d.termRules.map(e => e.value.trim()).filter(e => "" !== e);
      n = [{
        field_type: m.rX.TERMS,
        label: h.intl.string(h.t["9suSIA"]),
        values: e,
        required: true
      }]
    }
    return null == n ? null : {
      version: null != (e = null == c ? true : c.version) ? e : "",
      description: null != (l = null == c ? true : c.description) ? l : "",
      formFields: n,
      guild: null == c ? true : c.guild
    }
  }, [t, d, c]);
  return {
    hasFetched: n,
    verificationForm: null != x ? x : c
  }
}

function j(e, t, l) {
  let n = (0, s.bG)([c.A], () => c.A.getGuild(e)),
    a = (0, s.bG)([i.A], () => i.A.getGuild());
  return r.useMemo(() => l && (null == a ? true : a.id) === e ? a : null != n ? n : null != t ? (0, d.Yh)(t) : null, [l, a, e, n, t])
}

function p(e) {
  let t = !(null == e ? true : e.isClaimed()),
    l = null == e ? true : e.verified,
    [n, s] = r.useState(2 * !t);
  return r.useEffect(() => {
    null != e && e.isClaimed() && s(2)
  }, [e]), r.useEffect(() => {
    1 === n && l && s(2)
  }, [n, l]), {
    currentStep: n,
    setCurrentStep: s
  }
}

function C(e) {
  let t = (0, b.YN)(e => e.hasUnsubmittedChanges);
  r.useEffect(() => ((0, b.Yb)(false), () => {
    (0, b.Yb)(false)
  }), []), r.useEffect(() => {
    let l = e.some(e => e.field_type !== m.rX.TERMS && (0, x.Ge)(e));
    l && !t ? (0, b.Yb)(true) : !l && t && (0, b.Yb)(false)
  }, [e, t])
}