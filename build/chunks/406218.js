/** Chunk was on web.js **/
/** chunk id: 406218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PC: () => h,
  o_: () => m,
  sO: () => _,
  xo: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk345074 = require("./345074.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk823379 = require("./823379.js"),
  Chunk330705 = require("./330705.js");

function l(e) {
  let {
    guildId: t,
    emojiId: n,
    emojiName: r
  } = e, a = i.De.get(t);
  if (null == n && null == r) return null;
  if (null != n)
    if (null != a) return a.getById(n);
    else return null;
  return null != r ? o.ZP.getByName(r) : null
}
let c = {
  label: ""
};

function u(e, t) {
  let n = Array(r.Sn).fill(c);
  for (let o of t) {
    var i;
    o.position < 0 || o.position >= r.Sn || (n[o.position] = {
      label: o.label,
      emoji: null != (i = l({
        guildId: e,
        emojiId: o.emoji_id,
        emojiName: o.emoji_name
      })) ? i : true
    })
  }
  return n
}

function d(e) {
  return null == e ? {} : Object.entries(e).reduce((e, t) => {
    let [n, r] = t;
    return e[n.toString()] = {
      level: r.activity_level,
      score: r.activity_score
    }, e
  }, {})
}

function f(e) {
  return null == e || "" === e ? null : e
}

function p(e) {
  var t, n, r, i;
  return {
    id: e.id,
    name: e.name,
    description: null != (t = e.description) ? t : "",
    icon: e.icon_hash,
    customBanner: e.custom_banner_hash,
    onlineCount: e.online_count,
    memberCount: e.member_count,
    brandColorPrimary: f(e.brand_color_primary),
    visibility: e.visibility,
    traits: u(e.id, null != (n = e.traits) ? n : []),
    gameApplicationIds: null != (r = e.game_application_ids) ? r : [],
    gameActivity: d(e.game_activity),
    features: null != (i = e.features) ? i : [],
    tag: e.tag,
    badge: e.badge,
    badgeColorPrimary: e.badge_color_primary,
    badgeColorSecondary: e.badge_color_secondary,
    badgeHash: e.badge_hash,
    premiumSubscriberCount: e.premium_subscription_count,
    premiumTier: e.premium_tier
  }
}

function _(e) {
  let t = {};
  return null != e.name && (t.name = e.name), null != e.description && (t.description = e.description), true !== e.icon && (t.icon = e.icon), true !== e.customBanner && (t.custom_banner = e.customBanner), null != e.visibility && (t.visibility = e.visibility), true !== e.brandColorPrimary && (t.brand_color_primary = e.brandColorPrimary), null != e.traits && (t.traits = e.traits.map((e, t) => {
    var n, r, i;
    return (null == e ? true : e.label) == null || e.label.length <= 0 ? null : {
      label: e.label,
      position: t,
      emoji_id: null == (n = e.emoji) ? true : n.id,
      emoji_name: null == (r = e.emoji) ? true : r.name,
      emoji_animated: null == (i = e.emoji) ? true : i.animated
    }
  }).filter(a.lm)), null != e.gameApplicationIds && (t.game_application_ids = e.gameApplicationIds), true !== e.tag && (t.tag = e.tag), true !== e.badge && (t.badge = e.badge), true !== e.badgeColorPrimary && (t.badge_color_primary = e.badgeColorPrimary), true !== e.badgeColorSecondary && (t.badge_color_secondary = e.badgeColorSecondary), t
}

function m(e) {
  return e.reduce((e, t) => (e[t.game_application_id] = {
    level: t.activity_level,
    score: t.activity_score
  }, e), {})
}

function h(e) {
  var t, n, r, i, o, a;
  let {
    guild: l,
    profile: c
  } = e, u = null != c ? p(c) : null;
  return null != u ? u : null == l ? null : {
    id: l.id,
    name: l.name,
    description: null != (t = l.description) ? t : "",
    icon: l.icon,
    customBanner: l.banner,
    onlineCount: null != (r = null != (n = l.approximate_presence_count) ? n : e.approximate_presence_count) ? r : 0,
    memberCount: null != (o = null != (i = l.approximate_member_count) ? i : e.approximate_member_count) ? o : 0,
    visibility: s.k.NOT_SPECIFIED,
    traits: [],
    gameApplicationIds: [],
    gameActivity: {},
    features: null != (a = l.features) ? a : [],
    brandColorPrimary: null,
    tag: null,
    badge: null,
    badgeHash: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null,
    premiumSubscriberCount: l.premium_subscription_count,
    premiumTier: l.premium_tier
  }
}