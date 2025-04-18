/** Chunk was on 87918 **/
n.d(t, {
  BK: () => f,
  mm: () => _,
  vV: () => s
}), n(997841);
var r = n(442837),
  l = n(271383),
  i = n(430824),
  o = n(496675),
  u = n(594174),
  a = n(630388),
  c = n(372897),
  d = n(981631);
let s = (e, t) => {
  var n;
  let o = (0, r.e7)([l.ZP], () => {
      var n, r;
      return (0, a.yE)(null != (r = null == (n = l.ZP.getMember(e, t)) ? void 0 : n.flags) ? r : 0, c.q.DID_REJOIN)
    }),
    d = (0, r.e7)([i.Z], () => {
      var t;
      return null == (t = i.Z.getGuild(e)) ? void 0 : t.isNew()
    }),
    s = (0, r.e7)([u.default], () => {
      var e;
      return null == (e = u.default.getUser(t)) ? void 0 : e.bot
    });
  return n = {
    maxDaysOld: 7
  }, (0, r.e7)([], () => (function(e, t, n) {
    let {
      maxDaysOld: r,
      minDaysOld: o = 0
    } = t, u = i.Z.getGuild(e), a = null == u ? void 0 : u.joinedAt;
    if (null != n) {
      let t = l.ZP.getMember(e, n);
      a = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt)
    }
    if (null == a) return !1;
    let c = Date.now() - a.getTime();
    return (null == r || c <= 864e5 * r) && c >= 864e5 * o
  })(e, n, t), [n, e, t]) && !d && !s && !o
};

function f(e, t) {
  return null != t && o.Z.canManageUser(d.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot()
}

function _(e, t) {
  return null != t && o.Z.canManageUser(d.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot
}