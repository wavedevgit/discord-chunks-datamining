/** Chunk was on 1636 **/
/** chunk id: 517997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => f,
  u: () => p
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

function g(e, t, n, r, i) {
  let l = t.hasFlag(s.pr7.EPHEMERAL),
    a = t.state === s.cmJ.SENT,
    o = !e.isArchivedThread() || i;
  return n && a && !l && !r && o
}

function p(e, t) {
  var n;
  let r = (0, a.lK)(e),
    [, c] = (0, l.c)(null != (n = null == e ? true : e.getGuildId()) ? n : true),
    s = (0, i.bG)([o.A], () => null != e && null != t && u(e, t, o.A));
  return null != e && null != t && g(e, t, s, c, r)
}

function f(e, t) {
  var n;
  let r = (0, a.Et)(e),
    i = u(e, t, o.A),
    s = c.default.getCurrentUser(),
    [, d] = (0, l.U0)(null == s ? true : s.id, null != (n = e.getGuildId()) ? n : true);
  return g(e, t, i, d, r)
}