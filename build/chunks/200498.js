/** Chunk was on web.js **/
/** chunk id: 200498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => h,
  Os: () => _,
  _L: () => p,
  jU: () => g,
  nG: () => m
});
var Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk41776 = require("./41776.js");
require("./601964.js"), require("./314897.js");
var Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk146085 = require("./146085.js"),
  Chunk427679 = require("./427679.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  var i, o;
  let a = null == n ? true : n.permissionOverwrites[e];
  return {
    id: e,
    type: t,
    deny: null != (i = null == a ? true : a.deny) ? i : c.Hn,
    allow: r.Od(null != (o = null == a ? true : a.allow) ? o : c.Hn, u.yP)
  }
}

function _(e) {
  let {
    allow: t,
    deny: n
  } = e;
  return r.fS(t, c.Hn) && r.fS(n, c.Hn)
}

function m(e) {
  return (0, i.e7)([l.Z, s.Z, a.Z], () => {
    let t = a.Z.getChannel(e),
      n = s.Z.getGuild(null == t ? true : t.getGuildId());
    return !!(l.Z.can(f.Plq.ADMINISTRATOR, n) || l.Z.can(f.Plq.MANAGE_ROLES, t, true, true, true) || l.Z.can(u.N, t))
  }, [e])
}

function h(e) {
  return (0, i.e7)([a.Z, l.Z], () => null != e && l.Z.can(f.Plq.MUTE_MEMBERS, a.Z.getChannel(e)), [e])
}

function g(e) {
  return null != e && !!e.isGuildStageVoice() && !!o.Z.isLurking(e.guild_id) && !!d.Z.isPublic(e.id) && l.Z.can(u.gl, e)
}