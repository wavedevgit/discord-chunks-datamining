/** Chunk was on web.js **/
/** chunk id: 46477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CA: () => m,
  _W: () => y,
  we: () => O,
  zl: () => g
}), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk485845 = require("./485845.js"),
  Chunk136722 = require("./136722.js"),
  Chunk155718 = require("./155718.js"),
  Chunk200662 = require("./200662.js"),
  Chunk95701 = require("./95701.js"),
  Chunk71393 = require("./71393.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk240591 = require("./240591.js"),
  Chunk73510 = require("./73510.js"),
  Chunk652215 = require("./652215.js"),
  m = function(e) {
    return e[e.ALLOWED = 0] = "ALLOWED", e[e.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", e[e.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", e[e.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", e[e.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", e[e.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", e[e.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", e[e.USER_DENIED = 7] = "USER_DENIED", e
  }({});

function g(e, t, n) {
  var r;
  let {
    context: l,
    commandTypes: m,
    allowNsfw: g,
    computedPermissions: A,
    userId: v,
    roleIds: S,
    isImpersonating: I,
    hasBaseAccessPermissions: T
  } = t, {
    applicationAllowedForUser: C,
    applicationAllowedForChannel: N,
    isGuildInstalled: R,
    isUserInstalled: w,
    commandBotId: P
  } = n;
  if (!m.includes(e.type)) return 2;
  if (e.nsfw && !g) return 1;
  let D = null != l ? (0, p.ud)(l, P) : true;
  if (null != e.contexts) {
    if (null != D && !e.contexts.includes(D)) return 4
  } else if (e.inputType === d.y$.BOT && (false === e.dmPermission && D === o.OL.BOT_DM || D === o.OL.PRIVATE_CHANNEL)) return 4;
  if (null != e.predicate && l instanceof c.YB) {
    let t = u.A.getGuild(l.guild_id);
    if (!e.predicate({
        channel: l,
        guild: t
      })) return 3
  }
  if (e.applicationId === _.Ik.BUILT_IN) return 0;
  let x = null != l ? (0, p.wz)(l) : true;
  if (null == x || s.zy(A, h.xBc.ADMINISTRATOR) || w && (null == (r = e.integration_types) ? true : r.includes(a.b.USER_INSTALL))) return 0;
  if (!T && R && (null == e.integration_types || e.integration_types.includes(a.b.GUILD_INSTALL))) return 5;
  if (l instanceof c.YB) {
    i()(true !== N, "missing applicationAllowedForChannel");
    let t = y(e.permissions, l, x);
    if (b(t) || !E(t) && b(N)) return 6
  }
  let L = O(e.permissions, x, v, S, I);
  if (E(L)) return 0;
  if (b(L) || b(C)) return 7;
  if (null != e.defaultMemberPermissions && !(!s.aI(e.defaultMemberPermissions, f.Cq) && s.zy(A, e.defaultMemberPermissions))) return 7;
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
  let a = e[(0, l.Eu)(r, d.RA.CHANNEL)];
  if (null != a) return a.permission;
  let s = e[(0, l.Eu)((0, f.Ap)(n), d.RA.CHANNEL)];
  return null != s ? s.permission : null
}

function O(e, t, n, r, i) {
  if (null == e) return null;
  if (!i) {
    let t = e[(0, l.Eu)(n, d.RA.USER)];
    if (null != t) return t.permission
  }
  let a = false;
  for (let t of r) {
    let n = e[(0, l.Eu)(t, d.RA.ROLE)];
    if (null != n) {
      if (n.permission) returntrue;
      a = true
    }
  }
  if (a) returnfalse;
  let s = null != t ? e[(0, l.Eu)(t, d.RA.ROLE)] : null;
  return null != s ? s.permission : null
}