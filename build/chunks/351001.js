/** Chunk was on web.js **/
/** chunk id: 351001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EZ: () => y,
  HU: () => m,
  KX: () => E,
  Kd: () => O,
  L7: () => g,
  fJ: () => b
}), require("./938796.js"), require("./896048.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk340837 = require("./340837.js"),
  Chunk652215 = require("./652215.js");
let f = 864e5;

function p(e, t, n) {
  let {
    maxDaysOld: r,
    minDaysOld: i = 0
  } = t, s = o.A.getGuild(e), l = null == s ? true : s.joinedAt;
  if (null != n) {
    let t = a.Ay.getMember(e, n);
    l = (null == t ? true : t.joinedAt) == null ? null : new Date(t.joinedAt)
  }
  if (null == l) returnfalse;
  let c = Date.now() - l.getTime(),
    u = null == r || c <= f * r,
    d = c >= f * i;
  return u && d
}

function _(e, t, n) {
  return (0, i.bG)([], () => p(e, t, n), [t, e, n])
}

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 7,
    n = c.default.extractTimestamp(e.id);
  return Date.now() - n < 864e5 * t
}
let m = (e, t) => {
  let n = (0, i.bG)([a.Ay], () => {
      var n, i;
      return (0, r.Lt)(null != (n = null == (i = a.Ay.getMember(e, t)) ? true : i.flags) ? n : 0, u.D.DID_REJOIN)
    }),
    s = (0, i.bG)([o.A], () => {
      let t = o.A.getGuild(e);
      return null != t && h(t)
    }),
    c = (0, i.bG)([l.default], () => {
      var e;
      return null == (e = l.default.getUser(t)) ? true : e.bot
    });
  return _(e, {
    maxDaysOld: 7
  }, t) && !s && !c && !n
};

function g(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [s.A];
  return null != t && E(e, t, [n]) && !e.isProvisional
}

function E(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [s.A];
  return null != t && n.canManageUser(d.xBc.KICK_MEMBERS, e, t) && !e.isNonUserBot()
}

function y(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [s.A];
  return null != t && b(e, t, [n]) && !e.isProvisional
}

function b(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [s.A];
  return null != t && n.canManageUser(d.xBc.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot
}

function O(e, t) {
  let [n] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [s.A];
  return null != e && null != t && n.canManageUser(d.xBc.MANAGE_MESSAGES, e, t) && !e.isNonUserBot()
}