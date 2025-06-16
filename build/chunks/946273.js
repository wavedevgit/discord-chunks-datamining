/** Chunk was on 42707 **/
t.d(n, {
  BK: () => _,
  CX: () => A,
  lD: () => g,
  mm: () => f,
  nX: () => E,
  vV: () => s
}), t(997841), t(388685);
var l = t(442837),
  i = t(271383),
  r = t(430824),
  u = t(496675),
  a = t(594174),
  o = t(630388),
  d = t(372897),
  c = t(981631);
let s = (e, n) => {
  var t;
  let u = (0, l.e7)([i.ZP], () => {
      var t, l;
      return (0, o.yE)(null != (l = null == (t = i.ZP.getMember(e, n)) ? void 0 : t.flags) ? l : 0, d.q.DID_REJOIN)
    }),
    c = (0, l.e7)([r.Z], () => {
      var n;
      return null == (n = r.Z.getGuild(e)) ? void 0 : n.isNew()
    }),
    s = (0, l.e7)([a.default], () => {
      var e;
      return null == (e = a.default.getUser(n)) ? void 0 : e.bot
    });
  return t = {
    maxDaysOld: 7
  }, (0, l.e7)([], () => (function(e, n, t) {
    let {
      maxDaysOld: l,
      minDaysOld: u = 0
    } = n, a = r.Z.getGuild(e), o = null == a ? void 0 : a.joinedAt;
    if (null != t) {
      let n = i.ZP.getMember(e, t);
      o = (null == n ? void 0 : n.joinedAt) == null ? null : new Date(n.joinedAt)
    }
    if (null == o) return !1;
    let d = Date.now() - o.getTime();
    return (null == l || d <= 864e5 * l) && d >= 864e5 * u
  })(e, t, n), [t, e, n]) && !c && !s && !u
};

function _(e, n) {
  let [t, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z, i.ZP];
  return null != n && E(e, n, [t]) && null != l.getMember(n.id, e.id)
}

function E(e, n) {
  let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z];
  return null != n && t.canManageUser(c.Plq.KICK_MEMBERS, e, n) && !e.isNonUserBot()
}

function f(e, n) {
  let [t, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z, i.ZP];
  return null != n && g(e, n, [t]) && null != l.getMember(n.id, e.id)
}

function g(e, n) {
  let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z];
  return null != n && t.canManageUser(c.Plq.BAN_MEMBERS, e, n) && !e.isNonUserBot() && !e.bot
}

function A(e, n) {
  let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z];
  return null != e && null != n && t.canManageUser(c.Plq.MANAGE_MESSAGES, e, n) && !e.isNonUserBot()
}