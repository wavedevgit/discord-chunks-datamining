/** Chunk was on 38697 **/
/** chunk id: 605436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $7: () => $,
  $e: () => k,
  RZ: () => R,
  Tj: () => V,
  W: () => h,
  Wx: () => A,
  X0: () => O,
  Yh: () => H,
  Yk: () => B,
  _A: () => U,
  aq: () => C,
  cR: () => D,
  iI: () => G,
  ik: () => w,
  kA: () => M,
  nT: () => q,
  pM: () => v,
  yv: () => b,
  zB: () => L
}), require("./642613.js"), require("./539854.js");
var Chunk149765 = require("./149765.js"),
  Chunk741361 = require("./741361.js"),
  Chunk911969 = require("./911969.js"),
  Chunk131704 = require("./131704.js"),
  Chunk601964 = require("./601964.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk934415 = require("./934415.js"),
  Chunk823379 = require("./823379.js"),
  Chunk625137 = require("./625137.js"),
  Chunk700785 = require("./700785.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk71080 = require("./71080.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function T(e) {
  return (0, o.Fs)(e, p.Plq.ADMINISTRATOR)
}

function O(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
    r = T(e) ? I.aC.ADMINISTRATOR : I.aC.ROLE;
  return {
    rowType: r,
    colorString: null != (t = e.colorString) ? t : p.Pbq,
    name: e.name,
    id: e.id,
    disabled: T(e) || n,
    key: "".concat(r, ":").concat(e.id),
    tags: e.tags
  }
}

function h(e, t) {
  let n = +!T(e),
    r = +!T(t);
  return n !== r ? n - r : (0, E.y2)(e, t)
}

function C() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : m.intl.string(m.t["gnsna/"]);
  return [{
    rowType: I.aC.EMPTY_STATE,
    colorString: p.Pbq,
    name: e,
    disabled: true,
    id: "EMPTY_STATE"
  }]
}

function _(e, t, n, i) {
  let l = d.default.getCurrentUser();
  if (null == l) returnfalse;
  if (null == e) return l.id !== t;
  let u = e.permissionOverwrites[t];
  return (null == i ? true : i[t]) != null && (u = i[t]), null == u || !r.e$(u.allow, n)
}

function v(e, t) {
  return g.default.castGuildIdAsEveryoneGuildRoleId(e) === t
}

function w(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : () => true;
  return t.filter(e => !T(e) && _(n, e.id, r) && !(0, o.fI)(e) && i(e.name)).sort(h).map(e => O(e))
}

function A(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : () => true;
  return t.filter(e => !T(e) && _(n, e.id, r) && !(0, o.fI)(e) && i(e.name)).sort(h).map(e => O(e, (0, o.Fs)(e, r)))
}

function M(e, t, n, r, i) {
  let l = [];
  return 0 === (l = t.filter(e => T(e) || !_(n, e.id, r, i) && !(0, o.fI)(e)).sort(h).map(e => O(e))).length ? C(m.intl.string(m.t.nZfHsf)) : l
}

function R(e, t, n, i, l) {
  let u = [];
  return 0 === (u = t.filter(e => {
    var t;
    return T(e) || !_(n, e.id, i, l) && !(0, o.fI)(e) || r.e$(r.$e(e.permissions, null == (t = n.permissionOverwrites[e.id]) ? true : t.allow), i)
  }).sort(h).map(e => O(e, (0, o.Fs)(e, i)))).length ? C(m.intl.string(m.t.nZfHsf)) : u
}

function y(e, t) {
  var n;
  return null != (n = s.ZP.getNick(t.id, e.id)) ? n : N.ZP.getName(e)
}

function P(e, t) {
  var n;
  let r = (0, a.eM)(t, e) ? I.aC.OWNER : I.aC.MEMBER;
  return {
    rowType: r,
    name: y(e, t),
    nickname: null != (n = s.ZP.getNick(t.id, e.id)) ? n : null,
    username: N.ZP.getName(e),
    id: e.id,
    avatarURL: e.getAvatarURL(t.id, 24),
    bot: e.bot,
    verifiedBot: e.isVerifiedBot(),
    disabled: (0, a.eM)(t, e),
    key: "".concat(r, ":").concat(e.id)
  }
}

function Z(e, t) {
  return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
}

function G(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : () => true;
  return e.map(d.default.getUser).filter(f.lm).filter(e => !(0, a.eM)(n, e) && _(t, e.id, r) && (i(y(e, n)) || i(e.username) || i(e.discriminator))).map(e => P(e, n)).sort(Z)
}

function D(e, t, n, r, i) {
  return e.map(d.default.getUser).filter(f.lm).filter(e => !_(t, e.id, r, i) || (0, a.eM)(n, e)).map(e => P(e, n)).sort(Z)
}

function L(e, t) {
  switch (e) {
    case I.aC.ROLE:
      return m.intl.string(m.t.ZxoFOG);
    case I.aC.OWNER:
      return m.intl.string(m.t.NWhYJg);
    case I.aC.ADMINISTRATOR:
      return m.intl.string(m.t["dwlcc+"]);
    case I.aC.MEMBER:
      return t ? m.intl.string(m.t.UAJxZi) : null;
    case I.aC.USER:
      return m.intl.string(m.t.KD6OJJ);
    case I.aC.GUILD:
      return m.intl.string(m.t["5qyruI"]);
    case I.aC.EMPTY_STATE:
      return null
  }
}

function b(e) {
  switch (e) {
    case I.aC.ROLE:
      return m.intl.string(m.t["Gzc/a8"]);
    case I.aC.OWNER:
      return m.intl.string(m.t.icuNBM);
    case I.aC.ADMINISTRATOR:
      return m.intl.string(m.t.eTmN5a);
    case I.aC.MEMBER:
      return m.intl.string(m.t["Gzc/a8"]);
    case I.aC.EMPTY_STATE:
    default:
      return null
  }
}

function U(e, t, n) {
  let i = e.permissionOverwrites[e.guild_id];
  null == i && (i = S.we(e.guild_id));
  let l = function(e) {
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
  }({}, i);
  return l.deny = r.Od(l.deny, t), l.allow = r.Od(l.allow, t), n || (l.deny = r.IH(l.deny, t)), l
}

function k(e, t, n) {
  let r = U(e, t, n);
  (0, i.kY)(e, r.id, r.allow, r.deny)
}

function H(e, t) {
  let n = d.default.getCurrentUser();
  if (null == n) return;
  let u = e.permissionOverwrites[n.id];
  if (null == u) {
    let u = {
      id: n.id,
      type: l.BN.MEMBER,
      allow: r.IH(S.Hn, t),
      deny: S.Hn
    };
    return (0, i.hw)(e.id, [u], true)
  } {
    let {
      allow: n,
      deny: l
    } = u;
    return n = r.IH(n, t), (0, i.kY)(e, u.id, n, l)
  }
}

function B(e, t) {
  if (null == e) returnfalse;
  let n = e.permissionOverwrites[e.guild_id];
  return (null == t ? true : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && r.e$(n.deny, e.accessPermissions)
}

function q(e, t, n) {
  return e === p.d4z.GUILD_TEXT || e === p.d4z.GUILD_ANNOUNCEMENT ? t : !(0, u.bw)(e) && e !== p.d4z.GUILD_CATEGORY || t && n
}

function $(e) {
  switch (e) {
    case p.d4z.GUILD_TEXT:
    case p.d4z.GUILD_ANNOUNCEMENT:
      return m.intl.format(m.t.ZDtA0T, {});
    case p.d4z.GUILD_VOICE:
      return m.intl.format(m.t.iZAMty, {});
    case p.d4z.GUILD_CATEGORY:
      return m.intl.format(m.t.PhnARV, {});
    default:
      return null
  }
}

function V(e, t) {
  let n = [];
  return Object.values(e).forEach(e => {
    let {
      row: r
    } = e;
    null != r.id && "" !== r.id && (r.rowType === I.aC.ROLE ? n.push((0, c.rX)(r.id, t)) : r.rowType === I.aC.MEMBER && n.push((0, c.jZ)(r.id, t)))
  }), n
}