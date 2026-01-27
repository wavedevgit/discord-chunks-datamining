/** Chunk was on 20601 **/
/** chunk id: 338724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $x: () => p,
  Qg: () => v,
  dy: () => b,
  he: () => _,
  x$: () => j
}), require("./896048.js"), require("./492834.js"), require("./733351.js"), require("./228524.js");
var r, Chunk64700 = require("./64700.js"),
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
  v = ((r = {})[r.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", r[r.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", r[r.VERIFICATION_FORM = 2] = "VERIFICATION_FORM", r);

function p(e, t, n) {
  let [r, s] = l.useState(false), c = (0, i.bG)([m.A], () => m.A.get(e)), u = (0, i.bG)([a.A], () => a.A.pendingState);
  l.useEffect(() => {
    t || d.Ay.fetchVerificationForm(e, n).finally(() => s(true))
  }, [e, n, t]);
  let h = l.useMemo(() => {
    var e, n;
    let r;
    if (!t || null == u) return null;
    if (u.joinType === o.J.APPLY) r = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : true;
    else if (null != u.termRules) {
      let e = u.termRules.map(e => e.value.trim()).filter(e => "" !== e);
      r = [{
        field_type: f.rX.TERMS,
        label: g.intl.string(g.t["9suSIA"]),
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

function j(e, t, n) {
  let r = (0, i.bG)([c.A], () => c.A.getGuild(e)),
    a = (0, i.bG)([s.A], () => s.A.getGuild());
  return l.useMemo(() => n && (null == a ? true : a.id) === e ? a : null != r ? r : null != t ? (0, u.Yh)(t) : null, [n, a, e, r, t])
}

function b(e) {
  let t = !(null == e ? true : e.isClaimed()),
    n = null == e ? true : e.verified,
    [r, i] = l.useState(2 * !t);
  return l.useEffect(() => {
    null != e && e.isClaimed() && i(2)
  }, [e]), l.useEffect(() => {
    1 === r && n && i(2)
  }, [r, n]), {
    currentStep: r,
    setCurrentStep: i
  }
}

function _(e) {
  let t = (0, x.YN)(e => e.hasUnsubmittedChanges);
  l.useEffect(() => ((0, x.Yb)(false), () => {
    (0, x.Yb)(false)
  }), []), l.useEffect(() => {
    let n = e.some(e => e.field_type !== f.rX.TERMS && (0, h.Ge)(e));
    n && !t ? (0, x.Yb)(true) : !n && t && (0, x.Yb)(false)
  }, [e, t])
}