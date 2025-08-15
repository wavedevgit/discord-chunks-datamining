/** Chunk was on 49802 **/
/** chunk id: 946273, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BK: () => b,
  CX: () => _,
  lD: () => p,
  mm: () => g,
  nX: () => h,
  vV: () => f
}), require("./997841.js"), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk372897 = require("./372897.js"),
  Chunk981631 = require("./981631.js");
let f = (e, t) => {
  var n;
  let o = (0, r.e7)([i.ZP], () => {
      var n, r;
      return (0, u.yE)(null != (r = null == (n = i.ZP.getMember(e, t)) ? true : n.flags) ? r : 0, d.q.DID_REJOIN)
    }),
    s = (0, r.e7)([l.Z], () => {
      let t = l.Z.getGuild(e);
      return null != t && function(e) {
        let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 7,
          n = c.default.extractTimestamp(e.id);
        return Date.now() - n < 864e5 * t
      }(t)
    }),
    f = (0, r.e7)([a.default], () => {
      var e;
      return null == (e = a.default.getUser(t)) ? true : e.bot
    });
  return n = {
    maxDaysOld: 7
  }, (0, r.e7)([], () => (function(e, t, n) {
    let {
      maxDaysOld: r,
      minDaysOld: o = 0
    } = t, a = l.Z.getGuild(e), u = null == a ? true : a.joinedAt;
    if (null != n) {
      let t = i.ZP.getMember(e, n);
      u = (null == t ? true : t.joinedAt) == null ? null : new Date(t.joinedAt)
    }
    if (null == u) returnfalse;
    let c = Date.now() - u.getTime();
    return (null == r || c <= 864e5 * r) && c >= 864e5 * o
  })(e, n, t), [n, e, t]) && !s && !f && !o
};

function b(e, t) {
  let [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z, i.ZP];
  return null != t && h(e, t, [n]) && null != r.getMember(t.id, e.id)
}

function h(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z];
  return null != t && n.canManageUser(s.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot()
}

function g(e, t) {
  let [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z, i.ZP];
  return null != t && p(e, t, [n]) && null != r.getMember(t.id, e.id)
}

function p(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z];
  return null != t && n.canManageUser(s.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot
}

function _(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z];
  return null != e && null != t && n.canManageUser(s.Plq.MANAGE_MESSAGES, e, t) && !e.isNonUserBot()
}