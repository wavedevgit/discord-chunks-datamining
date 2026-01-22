/** Chunk was on web.js **/
/** chunk id: 624793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GO: () => h,
  g_: () => _,
  rV: () => p
}), require("./228524.js");
var Chunk357758 = require("./357758.js"),
  Chunk562465 = require("./562465.js"),
  Chunk315069 = require("./315069.js"),
  Chunk486020 = require("./486020.js"),
  Chunk860689 = require("./860689.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var p = function(e) {
  return e.GUILD = "GUILD", e.APPLICATION = "APPLICATION", e
}({});
let _ = async e => {
  let t = null;
  try {
    let n = (await i.Bo.get({
      url: l.Rsh.EMOJI_SOURCE_DATA(e),
      oldFormErrors: true,
      timeout: 5e3,
      rejectWithError: true
    })).body;
    (null == n ? true : n.type) === "GUILD" ? t = {
      guild: h.createFromServer(n.guild),
      type: n.type
    }: (null == n ? true : n.type) === "APPLICATION" && (t = {
      application: m.createFromServer(n.application),
      type: n.type
    })
  } catch (e) {}
  return t
};
class h extends Chunk315069.A {
  getIconURL(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return s.Ay.getGuildIconURL({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    })
  }
  getIconSource(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return s.Ay.getAnimatableSourceWithFallback(t, t => s.Ay.getGuildIconSource({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    }))
  }
  hasFeature(e) {
    return this.features.has(e)
  }
  isDiscoverable() {
    return this.hasFeature(l.GuildFeatures.DISCOVERABLE)
  }
  static async getGuildFromEmojiId(e) {
    let t = await _(e);
    return null != t && (null == t ? true : t.type) === "GUILD" ? t.guild : null
  }
  static _mapCommon(e) {
    return {
      id: e.id,
      name: e.name,
      icon: e.icon,
      description: e.description,
      features: (0, r.y)(e.features)
    }
  }
  static createFromGuildRecord(e) {
    return new h(f(u({}, h._mapCommon(e)), {
      premiumTier: e.premiumTier,
      premiumSubscriberCount: e.premiumSubscriberCount,
      presenceCount: null,
      memberCount: null,
      emojis: null
    }))
  }
  static createFromDiscoverableGuild(e) {
    return new h(f(u({}, h._mapCommon(e)), {
      premiumTier: null,
      premiumSubscriberCount: e.premiumSubscriptionCount,
      presenceCount: e.presenceCount,
      memberCount: e.memberCount,
      emojis: e.emojis
    }))
  }
  static createFromServer(e) {
    return new h(f(u({}, h._mapCommon(e)), {
      premiumTier: e.premium_tier,
      premiumSubscriberCount: e.premium_subscription_count,
      presenceCount: e.approximate_presence_count,
      memberCount: e.approximate_member_count,
      emojis: e.emojis
    }))
  }
  static createFromGuildType(e) {
    return e instanceof h ? e : (0, o.fh)(e) ? h.createFromGuildRecord(e) : h.createFromDiscoverableGuild(e)
  }
  constructor(e) {
    super(), c(this, "id", true), c(this, "name", true), c(this, "icon", true), c(this, "description", true), c(this, "features", true), c(this, "premiumTier", true), c(this, "premiumSubscriberCount", true), c(this, "presenceCount", true), c(this, "memberCount", true), c(this, "emojis", true), this.id = e.id, this.name = e.name, this.icon = e.icon, this.description = e.description, this.features = e.features, this.premiumTier = e.premiumTier, this.premiumSubscriberCount = e.premiumSubscriberCount, this.presenceCount = e.presenceCount, this.memberCount = e.memberCount, this.emojis = e.emojis
  }
}
class m extends Chunk315069.A {
  static createFromServer(e) {
    return new m({
      id: e.id,
      name: e.name
    })
  }
  constructor(e) {
    super(), c(this, "id", true), c(this, "name", true), this.id = e.id, this.name = e.name
  }
}