/** Chunk was on web.js **/
/** chunk id: 834942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js"), require("./938796.js"), require("./321073.js");
var r, Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk260509 = require("./260509.js"),
  Chunk661191 = require("./661191.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js");

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

function y(e) {
  let t;
  b(e), g.add(e);
  let n = d.A.getGuild(e),
    r = f.default.getCurrentUser();
  if (null == n || n.verificationLevel === p.PvD.NONE || null == r || (0, o.bM)(n, r) || r.isPhoneVerified()) return;
  let a = c.Ay.getMember(n.id, r.id);
  if (null != a) {
    var l;
    if ((0, i.Lt)(null != (l = a.flags) ? l : 0, _.D.BYPASSES_VERIFICATION)) return;
    let e = new Set;
    for (let t of a.roles) {
      let r = u.A.getRole(n.id, t);
      null == r || r.managed || e.add(t)
    }
    let t = new Date("2022-12-02 00:00:00"),
      r = null == a.joinedAt || new Date(a.joinedAt) < t;
    if (!(n.features.has(p.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return
  }
  let h = +r.createdAt + 6e4 * p.$8o.ACCOUNT_AGE - Date.now(),
    m = +n.joinedAt + 6e4 * p.$8o.MEMBER_AGE - Date.now(),
    y = n.verificationLevel >= p.PvD.LOW && !r.isClaimed(),
    O = false,
    v = false,
    A = false,
    I = false;
  r.isPhoneVerified() || r.isStaff() || (O = n.verificationLevel >= p.PvD.LOW && !r.verified, v = n.verificationLevel >= p.PvD.VERY_HIGH, A = n.verificationLevel >= p.PvD.MEDIUM && h > 0, I = n.verificationLevel >= p.PvD.HIGH && m > 0);
  let S = [];
  I && S.push(m), A && S.push(h), S.length > 0 && (t = setTimeout(() => s.h.dispatch({
    type: "GUILD_VERIFICATION_CHECK",
    guildId: e
  }), Math.max(...S))), E[e] = {
    notClaimed: y,
    notEmailVerified: O,
    notPhoneVerified: v,
    newAccount: A,
    newMember: I,
    canChat: !(y || O || v || A || I),
    accountDeadline: new Date(Date.now() + h),
    memberDeadline: new Date(Date.now() + m),
    timeoutRef: t
  }
}

function b(e) {
  let t = E[e];
  null != t && clearTimeout(t.timeoutRef), delete E[e]
}

function O() {
  for (let e in g.clear(), E) b(e)
}

function v() {
  l.default.keys(E).forEach(b)
}

function A(e) {
  g.delete(e.guild.id), y(e.guild.id)
}

function I(e) {
  let {
    guild: t
  } = e;
  b(t.id)
}

function S(e) {
  var t;
  let {
    guildId: n,
    user: r
  } = e;
  if (r.id !== (null == (t = f.default.getCurrentUser()) ? true : t.id)) returnfalse;
  g.delete(n)
}

function T() {
  g.clear()
}

function C(e) {
  let {
    guildId: t
  } = e;
  y(t)
}
class N extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.Ay, u.A, d.A, f.default)
  }
  getCheck(e) {
    var t;
    return null == e ? m : (g.has(e) || y(e), null != (t = E[e]) ? t : m)
  }
  canChatInGuild(e) {
    return this.getCheck(e).canChat
  }
}
h(N, "displayName", "GuildVerificationStore");
let R = new N(Chunk73153.h, {
  CONNECTION_OPEN: O,
  CONNECTION_CLOSED: v,
  CURRENT_USER_UPDATE: T,
  GUILD_CREATE: A,
  GUILD_UPDATE: A,
  GUILD_DELETE: I,
  GUILD_MEMBER_UPDATE: S,
  GUILD_VERIFICATION_CHECK: C
})