/** Chunk was on web.js **/
/** chunk id: 104793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ft: () => g,
  ML: () => O,
  ZJ: () => y,
  mF: () => h
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk373793 = require("./373793.js"),
  Chunk149765 = require("./149765.js"),
  Chunk911969 = require("./911969.js"),
  Chunk399860 = require("./399860.js"),
  Chunk131704 = require("./131704.js"),
  Chunk430824 = require("./430824.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk807169 = require("./807169.js"),
  Chunk689079 = require("./689079.js"),
  Chunk981631 = require("./981631.js"),
  h = function(e) {
    return e[e.ALLOWED = 0] = "ALLOWED", e[e.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", e[e.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", e[e.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", e[e.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", e[e.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", e[e.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", e[e.USER_DENIED = 7] = "USER_DENIED", e
  }({});

function g(e, t, n) {
  var r;
  let {
    context: l,
    commandTypes: h,
    allowNsfw: g,
    computedPermissions: v,
    userId: S,
    roleIds: I,
    isImpersonating: T,
    hasBaseAccessPermissions: C
  } = t, {
    applicationAllowedForUser: A,
    applicationAllowedForChannel: N,
    isGuildInstalled: P,
    isUserInstalled: R,
    commandBotId: D
  } = n;
  if (!h.includes(e.type)) return 2;
  if (e.nsfw && !g) return 1;
  let w = null != l ? (0, p.Vh)(l, D) : true;
  if (null != e.contexts) {
    if (null != w && !e.contexts.includes(w)) return 4
  } else if (e.inputType === d.iw.BOT && (false === e.dmPermission && w === s.D.BOT_DM || w === s.D.PRIVATE_CHANNEL)) return 4;
  if (null != e.predicate && l instanceof c.Sf) {
    let t = u.Z.getGuild(l.guild_id);
    if (!e.predicate({
        channel: l,
        guild: t
      })) return 3
  }
  if (e.applicationId === _.bi.BUILT_IN) return 0;
  let x = null != l ? (0, p.ny)(l) : true;
  if (null == x || o.e$(v, m.Plq.ADMINISTRATOR) || R && (null == (r = e.integration_types) ? true : r.includes(a.Y.USER_INSTALL))) return 0;
  if (!C && P && (null == e.integration_types || e.integration_types.includes(a.Y.GUILD_INSTALL))) return 5;
  if (l instanceof c.Sf) {
    i()(true !== N, "missing applicationAllowedForChannel");
    let t = y(e.permissions, l, x);
    if (b(t) || !E(t) && b(N)) return 6
  }
  let L = O(e.permissions, x, S, I, T);
  if (E(L)) return 0;
  if (b(L) || b(A)) return 7;
  if (null != e.defaultMemberPermissions && !(!o.fS(e.defaultMemberPermissions, f.BO) && o.e$(v, e.defaultMemberPermissions))) return 7;
  return 0
}

function E(e) {
  returntrue === e
}

function b(e) {
  returnfalse === e
}

function y(e, t, n) {
  if (null == e) return null;
  let r = t.id;
  if (t.isThread()) {
    var i;
    r = null != (i = t.parent_id) ? i : t.id
  }
  let a = e[(0, l.rE)(r, d.Kw.CHANNEL)];
  if (null != a) return a.permission;
  let o = e[(0, l.rE)((0, f.bD)(n), d.Kw.CHANNEL)];
  return null != o ? o.permission : null
}

function O(e, t, n, r, i) {
  if (null == e) return null;
  if (!i) {
    let t = e[(0, l.rE)(n, d.Kw.USER)];
    if (null != t) return t.permission
  }
  let a = false;
  for (let t of r) {
    let n = e[(0, l.rE)(t, d.Kw.ROLE)];
    if (null != n) {
      if (n.permission) returntrue;
      a = true
    }
  }
  if (a) returnfalse;
  let o = null != t ? e[(0, l.rE)(t, d.Kw.ROLE)] : null;
  return null != o ? o.permission : null
}