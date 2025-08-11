/** Chunk was on web.js **/
/** chunk id: 280845, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => _,
  o: () => p
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
  let i;
  return (i = e.isPrivate() ? !e.isSystemDM() : n.can(u.Pl.SEND_MESSAGES, e) && n.can(u.Pl.READ_MESSAGE_HISTORY, e)) && r.V.REPLYABLE.has(t.type)
}

function f(e, t, n, r, i) {
  let o = t.hasFlag(c.iLy.EPHEMERAL),
    a = t.state === c.yb.SENT,
    s = !e.isArchivedThread() || i;
  return n && a && !o && !r && s
}

function _(e, t) {
  var n;
  let r = (0, a.tc)(e),
    [, l] = (0, o.AB)(null != (n = null == e ? true : e.getGuildId()) ? n : true),
    c = (0, i.e7)([s.Z], () => null != e && null != t && d(e, t, s.Z));
  return null != e && null != t && f(e, t, c, l, r)
}

function p(e, t) {
  var n;
  let r = (0, a.kn)(e),
    i = d(e, t, s.Z),
    c = l.default.getCurrentUser(),
    [, u] = (0, o.s5)(null == c ? true : c.id, null != (n = e.getGuildId()) ? n : true);
  return f(e, t, i, u, r)
}