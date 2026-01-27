/** Chunk was on web.js **/
/** chunk id: 337545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk788868 = require("./788868.js"),
  Chunk568065 = require("./568065.js"),
  Chunk307731 = require("./307731.js");

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

function u(e, t) {
  var n, o, l, u, d, f, p, _, h, m, g, E, y, b, O, v, A, I, S;
  let T = null == (n = t.powerup_metadata) ? true : n.category_type;
  if (null == T) return;
  let C = null == (o = t.sku) ? true : o.powerup_metadata;
  if (null == C) return;
  let N = {
    title: t.summary,
    skuId: t.sku.id,
    cost: C.boost_price,
    dependencies: null != t.sku.dependent_sku_id ? [t.sku.dependent_sku_id] : [],
    animatedImageUrl: null == (l = t.powerup_metadata) ? true : l.animated_image_url,
    staticImageUrl: null == (u = t.powerup_metadata) ? true : u.static_image_url,
    storeRemovalDate: null == (d = t.powerup_metadata) ? true : d.store_removal_date
  };
  switch (T) {
    case i.o9.LEVEL: {
      let n = null == (f = t.sku.powerup_metadata) ? true : f.guild_features;
      if (null == n) return;
      let o = a.Xn + n.additional_emoji_slots,
        l = r.OW + n.additional_sound_slots,
        u = r.GI + n.additional_sticker_slots,
        d = t.sku.dependent_sku_id;
      for (; null != d;) {
        let t = e.find(e => d === e.sku.id);
        o += null != (p = null == t || null == (E = t.sku) || null == (g = E.powerup_metadata) || null == (m = g.guild_features) ? true : m.additional_emoji_slots) ? p : 0, l += null != (_ = null == t || null == (O = t.sku) || null == (b = O.powerup_metadata) || null == (y = b.guild_features) ? true : y.additional_sound_slots) ? _ : 0, u += null != (h = null == t || null == (I = t.sku) || null == (A = I.powerup_metadata) || null == (v = A.guild_features) ? true : v.additional_sticker_slots) ? h : 0, d = null == t ? true : t.sku.dependent_sku_id
      }
      return s({
        type: i.o9.LEVEL,
        features: c(s({}, n), {
          total_emoji_slots: o,
          total_sound_slots: l,
          total_sticker_slots: u
        })
      }, N)
    }
    case i.o9.PERK:
      return s({
        type: i.o9.PERK,
        description: null != (S = t.description) ? S : ""
      }, N)
  }
}