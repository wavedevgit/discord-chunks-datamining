/** Chunk was on web.js **/
/** chunk id: 946273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BK: () => g,
  CX: () => O,
  lD: () => y,
  mm: () => b,
  nX: () => E,
  vV: () => m
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
let f = 864e5;

function _(e, t, n) {
  let {
    maxDaysOld: r,
    minDaysOld: o = 0
  } = t, s = a.Z.getGuild(e), l = null == s ? true : s.joinedAt;
  if (null != n) {
    let t = i.ZP.getMember(e, n);
    l = (null == t ? true : t.joinedAt) == null ? null : new Date(t.joinedAt)
  }
  if (null == l) returnfalse;
  let c = Date.now() - l.getTime(),
    u = null == r || c <= f * r,
    d = c >= f * o;
  return u && d
}

function p(e, t, n) {
  return (0, r.e7)([], () => _(e, t, n), [t, e, n])
}

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 7,
    n = c.default.extractTimestamp(e.id);
  return Date.now() - n < 864e5 * t
}
let m = (e, t) => {
  let n = (0, r.e7)([i.ZP], () => {
      var n, r;
      return (0, l.yE)(null != (r = null == (n = i.ZP.getMember(e, t)) ? true : n.flags) ? r : 0, u.q.DID_REJOIN)
    }),
    o = (0, r.e7)([a.Z], () => {
      let t = a.Z.getGuild(e);
      return null != t && h(t)
    }),
    c = (0, r.e7)([s.default], () => {
      var e;
      return null == (e = s.default.getUser(t)) ? true : e.bot
    });
  return p(e, {
    maxDaysOld: 7
  }, t) && !o && !c && !n
};

function g(e, t) {
  let [n, r] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z, i.ZP];
  return null != t && E(e, t, [n]) && null != r.getMember(t.id, e.id)
}

function E(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z];
  return null != t && n.canManageUser(d.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot()
}

function b(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z];
  return null != t && y(e, t, [n]) && !e.isProvisional
}

function y(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z];
  return null != t && n.canManageUser(d.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot
}

function O(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z];
  return null != e && null != t && n.canManageUser(d.Plq.MANAGE_MESSAGES, e, t) && !e.isNonUserBot()
}