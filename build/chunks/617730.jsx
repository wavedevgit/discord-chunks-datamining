/** Chunk was on 27978 **/
/** chunk id: 617730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk973616 = require("./973616.js"),
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk411198 = require("./411198.js"),
  Chunk230224 = require("./230224.jsx"),
  Chunk258356 = require("./258356.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk15282 = require("./15282.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = e => {
  let {
    state: t
  } = e;
  switch (t) {
    case d.r2o.ACCEPTING:
    case d.r2o.APP_OPENING:
      returntrue;
    default:
      returnfalse
  }
};

function _(e) {
  let {
    invite: t,
    onAcceptInvite: n,
    disableUser: _ = false
  } = e;
  if (null == t) return null;
  let x = null != t.guild ? (0, a.Qs)(t.guild) : null,
    b = null != t.channel ? (0, o.jD)(t.channel) : null,
    E = null != t.target_application ? new l.ZP(t.target_application) : null,
    v = _ || null == t.inviter ? null : new s.Z(t.inviter),
    j = !(null != t.approximate_member_count && t.approximate_member_count > c.mx || null != x && x.features.has(d.oNc.COMMUNITY)) && null != v && (0, c.WT)(t),
    I = g(t),
    O = {
      invite: t,
      user: v,
      guild: x,
      channel: b,
      application: E
    };
  return (0, c.JI)(t) ? <u.Z invite={t} channel={b} isSubmitting={I} onAcceptInvite={n} /> : <div className={p.container}>{<c.GB application={E} guild={x} user={j || (0, c.X7)(t) ? v : null} />}{(0, c.X7)(t) ? null : <c.jq{...m(f({}, O), {
      showBigUserIcon: j
    })} />}{<c.UM{...m(f({}, O), {
      showBigUserIcon: j
    })} />}{<c.V6{...f({}, O)} />}{<i.zx onClick={n} submitting={I} className={p.acceptButton}>{h.intl.string(h.t.ohMvm5)}</i.zx>}</div>
}