/** Chunk was on web.js **/
/** chunk id: 671759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./938796.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk315069 = require("./315069.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class u extends Chunk315069.A {
  static createFromServer(e) {
    var t;
    return new u(c(s({}, e), {
      maxUses: e.max_uses,
      maxAge: e.max_age,
      createdAt: i()(null != (t = e.created_at) ? t : true),
      targetType: e.target_type,
      targetUser: e.target_user,
      targetApplication: e.target_application
    }))
  }
  isExpired() {
    let e = this.maxAge;
    return !!(e > 0 && i()(this.createdAt).add(e, "seconds").isBefore(Date.now())) || false
  }
  getExpiresAt() {
    return this.maxAge > 0 ? i()(this.createdAt).add(this.maxAge, "seconds").toDate() : 1 / 0
  }
  toString() {
    return this.code
  }
  constructor(e) {
    super(), o(this, "code", true), o(this, "temporary", true), o(this, "revoked", true), o(this, "uses", true), o(this, "maxUses", true), o(this, "maxAge", true), o(this, "createdAt", true), o(this, "channel", true), o(this, "guild", true), o(this, "inviter", true), o(this, "targetType", true), o(this, "targetUser", true), o(this, "targetApplication", true), o(this, "type", true), o(this, "flags", true), o(this, "roles", true), this.code = e.code || "", this.temporary = e.temporary || false, this.revoked = e.revoked || false, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0, this.roles = e.roles || []
  }
}