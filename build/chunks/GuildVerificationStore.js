/** Chunk was on web.js **/
/** chunk id: 607744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./997841.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk601964 = require("./601964.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {
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
  if (null == n || n.verificationLevel === _.sFg.NONE || null == r || (0, o.eM)(n, r) || r.isPhoneVerified()) return;
  let i = c.ZP.getMember(n.id, r.id);
  if (null != i) {
    var l;
    if ((0, s.yE)(null != (l = i.flags) ? l : 0, p.q.BYPASSES_VERIFICATION)) return;
    let e = new Set;
    for (let t of i.roles) {
      let r = u.Z.getRole(n.id, t);
      null == r || r.managed || e.add(t)
    }
    let t = new Date("2022-12-02 00:00:00"),
      r = null == i.joinedAt || new Date(i.joinedAt) < t;
    if (!(n.features.has(_.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return
  }
  let h = +r.createdAt + 6e4 * _.YeM.ACCOUNT_AGE - Date.now(),
    m = +n.joinedAt + 6e4 * _.YeM.MEMBER_AGE - Date.now(),
    b = n.verificationLevel >= _.sFg.LOW && !r.isClaimed(),
    O = false,
    v = false,
    I = false,
    S = false;
  r.isPhoneVerified() || r.isStaff() || (O = n.verificationLevel >= _.sFg.LOW && !r.verified, v = n.verificationLevel >= _.sFg.VERY_HIGH, I = n.verificationLevel >= _.sFg.MEDIUM && h > 0, S = n.verificationLevel >= _.sFg.HIGH && m > 0);
  let T = [];
  S && T.push(m), I && T.push(h), T.length > 0 && (t = setTimeout(() => a.Z.dispatch({
    type: "GUILD_VERIFICATION_CHECK",
    guildId: e
  }), Math.max(...T))), E[e] = {
    notClaimed: b,
    notEmailVerified: O,
    notPhoneVerified: v,
    newAccount: I,
    newMember: S,
    canChat: !(b || O || v || I || S),
    accountDeadline: new Date(Date.now() + h),
    memberDeadline: new Date(Date.now() + m),
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

function I(e) {
  g.delete(e.guild.id), b(e.guild.id)
}

function S(e) {
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
    return null == e ? m : (g.has(e) || b(e), null != (t = E[e]) ? t : m)
  }
  canChatInGuild(e) {
    return this.getCheck(e).canChat
  }
}
h(N, "displayName", "GuildVerificationStore");
let R = new N(Chunk570140.Z, {
  CONNECTION_OPEN: O,
  CONNECTION_CLOSED: v,
  CURRENT_USER_UPDATE: A,
  GUILD_CREATE: I,
  GUILD_UPDATE: I,
  GUILD_DELETE: S,
  GUILD_MEMBER_UPDATE: T,
  GUILD_VERIFICATION_CHECK: C
})