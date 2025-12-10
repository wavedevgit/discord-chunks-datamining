/** Chunk was on 37220 **/
/** chunk id: 280845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => g,
  o: () => b
}), require("./388685.js");
var Chunk275726 = require("./275726.js"),
  Chunk442837 = require("./442837.js"),
  Chunk71619 = require("./71619.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function d(e, t, n) {
  return (e.isPrivate() ? !e.isSystemDM() : n.can(u.Pl.SEND_MESSAGES, e) && n.can(u.Pl.READ_MESSAGE_HISTORY, e)) && r.V.REPLYABLE.has(t.type)
}

function f(e, t, n, r, i) {
  let l = t.hasFlag(c.iLy.EPHEMERAL),
    o = t.state === c.yb.SENT,
    a = !e.isArchivedThread() || i;
  return n && o && !l && !r && a
}

function g(e, t) {
  var n;
  let r = (0, o.tc)(e),
    [, s] = (0, l.AB)(null != (n = null == e ? true : e.getGuildId()) ? n : true),
    c = (0, i.e7)([a.Z], () => null != e && null != t && d(e, t, a.Z));
  return null != e && null != t && f(e, t, c, s, r)
}

function b(e, t) {
  var n;
  let r = (0, o.kn)(e),
    i = d(e, t, a.Z),
    c = s.default.getCurrentUser(),
    [, u] = (0, l.s5)(null == c ? true : c.id, null != (n = e.getGuildId()) ? n : true);
  return f(e, t, i, u, r)
}