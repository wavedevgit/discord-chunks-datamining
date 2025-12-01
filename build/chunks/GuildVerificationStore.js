/** Chunk was on web.js **/
/** chunk id: 607744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./997841.js"), require("./539854.js");
var r, Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk601964 = require("./601964.js"),
  Chunk709054 = require("./709054.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = {
    notClaimed: false,
    notEmailVerified: false,
    notPhoneVerified: false,
    newAccount: false,
    newMember: false,
    canChat: true
  },
  g = new Set,
  E = {};

function b(e) {
  let t;
  y(e), g.add(e);
  let n = d.Z.getGuild(e),
    r = f.default.getCurrentUser();
  if (null == n || n.verificationLevel === p.sFg.NONE || null == r || (0, s.eM)(n, r) || r.isPhoneVerified()) return;
  let a = c.ZP.getMember(n.id, r.id);
  if (null != a) {
    var l;
    if ((0, i.yE)(null != (l = a.flags) ? l : 0, _.q.BYPASSES_VERIFICATION)) return;
    let e = new Set;
    for (let t of a.roles) {
      let r = u.Z.getRole(n.id, t);
      null == r || r.managed || e.add(t)
    }
    let t = new Date("2022-12-02 00:00:00"),
      r = null == a.joinedAt || new Date(a.joinedAt) < t;
    if (!(n.features.has(p.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return
  }
  let m = +r.createdAt + 6e4 * p.YeM.ACCOUNT_AGE - Date.now(),
    h = +n.joinedAt + 6e4 * p.YeM.MEMBER_AGE - Date.now(),
    b = n.verificationLevel >= p.sFg.LOW && !r.isClaimed(),
    O = false,
    v = false,
    S = false,
    I = false;
  r.isPhoneVerified() || r.isStaff() || (O = n.verificationLevel >= p.sFg.LOW && !r.verified, v = n.verificationLevel >= p.sFg.VERY_HIGH, S = n.verificationLevel >= p.sFg.MEDIUM && m > 0, I = n.verificationLevel >= p.sFg.HIGH && h > 0);
  let T = [];
  I && T.push(h), S && T.push(m), T.length > 0 && (t = setTimeout(() => o.Z.dispatch({
    type: "GUILD_VERIFICATION_CHECK",
    guildId: e
  }), Math.max(...T))), E[e] = {
    notClaimed: b,
    notEmailVerified: O,
    notPhoneVerified: v,
    newAccount: S,
    newMember: I,
    canChat: !(b || O || v || S || I),
    accountDeadline: new Date(Date.now() + m),
    memberDeadline: new Date(Date.now() + h),
    timeoutRef: t
  }
}

function y(e) {
  let t = E[e];
  null != t && clearTimeout(t.timeoutRef), delete E[e]
}

function O() {
  for (let e in g.clear(), E) y(module)
}

function v() {
  Chunk709054.default.keys(E).forEach(y)
}

function S(e) {
  g.delete(e.guild.id), b(e.guild.id)
}

function I(e) {
  let {
    guild: t
  } = e;
  y(t.id)
}

function T(e) {
  var t;
  let {
    guildId: n,
    user: r
  } = e;
  if (r.id !== (null == (t = f.default.getCurrentUser()) ? true : t.id)) returnfalse;
  g.delete(n)
}

function A() {
  g.clear()
}

function C(e) {
  let {
    guildId: t
  } = e;
  b(t)
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk271383.ZP, Chunk485386.Z, Chunk430824.Z, Chunk594174.default)
  }
  getCheck(e) {
    var t;
    return null == e ? h : (g.has(e) || b(e), null != (t = E[e]) ? t : h)
  }
  canChatInGuild(e) {
    return this.getCheck(e).canChat
  }
}
m(N, "displayName", "GuildVerificationStore");
let P = new N(Chunk570140.Z, {
  CONNECTION_OPEN: O,
  CONNECTION_CLOSED: v,
  CURRENT_USER_UPDATE: A,
  GUILD_CREATE: S,
  GUILD_UPDATE: S,
  GUILD_DELETE: I,
  GUILD_MEMBER_UPDATE: T,
  GUILD_VERIFICATION_CHECK: C
})