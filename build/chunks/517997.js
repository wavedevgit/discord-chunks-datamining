/** Chunk was on 1636 **/
/** chunk id: 517997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => p,
  u: () => g
}), require("./896048.js");
var Chunk448761 = require("./448761.js"),
  Chunk311907 = require("./311907.js"),
  Chunk870136 = require("./870136.js"),
  Chunk406704 = require("./406704.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function u(e, t, n) {
  return (e.isPrivate() ? !e.isSystemDM() : n.can(d.xB.SEND_MESSAGES, e) && n.can(d.xB.READ_MESSAGE_HISTORY, e)) && r.M.REPLYABLE.has(t.type)
}

function f(e, t, n, r, l) {
  let i = t.hasFlag(s.pr7.EPHEMERAL),
    o = t.state === s.cmJ.SENT,
    a = !e.isArchivedThread() || l;
  return n && o && !i && !r && a
}

function g(e, t) {
  var n;
  let r = (0, o.lK)(e),
    [, c] = (0, i.c)(null != (n = null == e ? true : e.getGuildId()) ? n : true),
    s = (0, l.bG)([a.A], () => null != e && null != t && u(e, t, a.A));
  return null != e && null != t && f(e, t, s, c, r)
}

function p(e, t) {
  var n;
  let r = (0, o.Et)(e),
    l = u(e, t, a.A),
    s = c.default.getCurrentUser(),
    [, d] = (0, i.U0)(null == s ? true : s.id, null != (n = e.getGuildId()) ? n : true);
  return f(e, t, l, d, r)
}