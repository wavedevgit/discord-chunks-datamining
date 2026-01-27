/** Chunk was on web.js **/
/** chunk id: 739455, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fx: () => O,
  JH: () => A,
  SY: () => b,
  aV: () => I,
  fE: () => g,
  pF: () => v,
  zu: () => E
}), require("./321073.js"), require("./896048.js"), require("./848778.js"), require("./228524.js");
var Chunk975975 = require("./975975.js"),
  i = require.n(Chunk975975),
  Chunk417597 = require("./417597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk755584 = require("./755584.js"),
  Chunk734057 = require("./734057.js"),
  Chunk567305 = require("./567305.js"),
  Chunk636194 = require("./636194.js"),
  Chunk846922 = require("./846922.js"),
  Chunk555325 = require("./555325.js"),
  Chunk74399 = require("./74399.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");
i().shim();
let m = {};

function g(e) {
  let t = (0, a.bG)([l.A], () => l.A.getChannel(e)),
    n = (0, a.bG)([p.A], () => p.A.getChannel(e));
  return null != t ? t : n
}

function E(e, t, n) {
  let r = (0, a.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
    i = (0, d.y)(t => t.editStateIdsForGroup[e]),
    o = (0, d.y)(e => e.listings);
  if (true === n || true === t) return null;
  let s = r.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
    l = [];
  true !== i && i.forEach(e => {
    let t = o[e],
      n = null == t ? true : t.priceTier;
    null != n && l.push(n)
  });
  let c = new Set(l.concat(s));
  if (!c.has(n)) return null;
  let f = t.indexOf(n);
  if (false === f) return null;
  let p = [];
  for (let e = f + 1; e < t.length && (c.has(t[e]) || p.push(t[e]), 3 !== p.length); e++);
  return p
}

function y(e) {
  let t = d.y.getState().editStateIdsForGroup[e],
    n = d.y.getState().listings,
    r = new Set;
  null != t && t.forEach(e => {
    var t;
    let i = null == (t = n[e]) ? true : t.channelBenefits;
    null == i || i.forEach(e => {
      null != p.A.getChannel(e.ref_id) && r.add(e.ref_id)
    })
  });
  let i = [];
  for (let t of r) {
    let n = p.A.getChannel(t);
    if (null != n) {
      let t = n.set("guild_id", e);
      i.push(t)
    }
  }
  return i
}

function b(e) {
  let t = y(e);
  m[e] = t, t.forEach(e => {
    let t = e.set("flags", h.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    o.h.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    })
  })
}

function O(e) {
  var t;
  (null != (t = m[e]) ? t : y(e)).forEach(e => {
    o.h.dispatch({
      type: "CHANNEL_DELETE",
      channel: e
    })
  })
}
async function v(e, t) {
  let n = [],
    r = [];
  t.forEach(t => {
    let i = p.A.getChannel(t.ref_id);
    null != i && (n.push(s.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i))
  }), 0 === n.length || (await Promise.allSettled(n)).forEach((n, i) => {
    let a = r[i].id;
    if ("fulfilled" === n.status) {
      let t = n.value.body,
        r = d.y.getState().editStateIdsForGroup[e],
        i = d.y.getState().listings;
      null != r && r.forEach(e => {
        var n;
        let r = null == (n = i[e]) ? true : n.channelBenefits;
        null == r || r.forEach(e => {
          e.ref_id === a && (e.ref_id = t.id)
        })
      })
    } else if (null != t) {
      let e = t.findIndex(e => e.ref_id === a);
      false !== e && (null == t || t.splice(e, 1))
    }
  })
}

function A(e, t) {
  var n, r;
  let i = d.y.getState().listings[e],
    a = null == i ? true : i.usedTemplate;
  if (null == a) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let o = p.A.getTemplateWithCategory(t, a);
  if (null == o) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let s = o.listings[0];
  if ((null == i ? true : i.name) !== s.name || (null == i ? true : i.description) !== s.description || (null == i ? true : i.priceTier) !== s.price_tier || (null == i ? true : i.image) !== s.image || (null == i ? true : i.roleColor) !== s.role_color || (null == i || null == (n = i.channelBenefits) ? true : n.length) !== s.channels.length || (null == i || null == (r = i.intangibleBenefits) ? true : r.length) !== s.additional_perks.length) return {
    templateCategory: o.category,
    hasChangeFromTemplate: true
  };
  for (let e = 0; e < s.channels.length; e++) {
    let t = i.channelBenefits[e],
      n = s.channels[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: o.category,
      hasChangeFromTemplate: true
    }
  }
  for (let e = 0; e < s.additional_perks.length; e++) {
    let t = i.intangibleBenefits[e],
      n = s.additional_perks[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: o.category,
      hasChangeFromTemplate: true
    }
  }
  return {
    templateCategory: o.category,
    hasChangeFromTemplate: false
  }
}

function I(e) {
  return (0, f.X9)(e) && e.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.D3)() && (0, c.TG)(e.id)
}