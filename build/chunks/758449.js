/** Chunk was on web.js **/
/** chunk id: 758449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./997841.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk81825 = require("./81825.js");

function a(e, t, n) {
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
      a(e, t, n[t])
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
class u extends Chunk81825.Z {
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
    return !!(module > 0 && i()(this.createdAt).add(module, "seconds").isBefore(Date.now())) || false
  }
  getExpiresAt() {
    return this.maxAge > 0 ? i()(this.createdAt).add(this.maxAge, "seconds").toDate() : 1 / 0
  }
  toString() {
    return this.code
  }
  constructor(e) {
    super(), a(this, "code", true), a(this, "temporary", true), a(this, "revoked", true), a(this, "uses", true), a(this, "maxUses", true), a(this, "maxAge", true), a(this, "createdAt", true), a(this, "channel", true), a(this, "guild", true), a(this, "inviter", true), a(this, "targetType", true), a(this, "targetUser", true), a(this, "targetApplication", true), a(this, "type", true), a(this, "flags", true), a(this, "roles", true), this.code = e.code || "", this.temporary = e.temporary || false, this.revoked = e.revoked || false, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0, this.roles = e.roles || []
  }
}