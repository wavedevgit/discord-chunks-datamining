/** Chunk was on web.js **/
/** chunk id: 303737, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GN: () => O,
  be: () => y,
  g4: () => E,
  m7: () => g,
  r4: () => v,
  sO: () => T,
  yL: () => I
}), require("./539854.js"), require("./388685.js"), require("./993155.js"), require("./953529.js");
var Chunk991637 = require("./991637.js"),
  i = require.n(Chunk991637),
  Chunk399606 = require("./399606.js"),
  Chunk570140 = require("./570140.js"),
  Chunk333848 = require("./333848.js"),
  Chunk592125 = require("./592125.js"),
  Chunk923726 = require("./923726.js"),
  Chunk289393 = require("./289393.js"),
  Chunk944537 = require("./944537.js"),
  Chunk144507 = require("./144507.js"),
  Chunk853439 = require("./853439.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
i().shim();
let m = {};

function g(e) {
  let t = (0, a.e7)([l.Z], () => l.Z.getChannel(e)),
    n = (0, a.e7)([_.Z], () => _.Z.getChannel(e));
  return null != t ? t : n
}

function E(e, t, n) {
  let r = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListingsForGuild(e)),
    i = (0, d.n)(t => t.editStateIdsForGroup[e]),
    o = (0, d.n)(e => e.listings);
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
  let _ = [];
  for (let e = f + 1; e < t.length && (c.has(t[e]) || _.push(t[e]), 3 !== _.length); e++);
  return _
}

function b(e) {
  let t = d.n.getState().editStateIdsForGroup[e],
    n = d.n.getState().listings,
    r = new Set;
  null != t && t.forEach(e => {
    var t;
    let i = null == (t = n[e]) ? true : t.channelBenefits;
    null == i || i.forEach(e => {
      null != _.Z.getChannel(e.ref_id) && r.add(e.ref_id)
    })
  });
  let i = [];
  for (let t of r) {
    let n = _.Z.getChannel(t);
    if (null != n) {
      let t = n.set("guild_id", e);
      i.push(t)
    }
  }
  return i
}

function y(e) {
  let t = b(e);
  m[e] = t, t.forEach(e => {
    let t = e.set("flags", h.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    o.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    })
  })
}

function O(e) {
  var t;
  (null != (t = m[e]) ? t : b(e)).forEach(e => {
    o.Z.dispatch({
      type: "CHANNEL_DELETE",
      channel: e
    })
  })
}
async function v(e, t) {
  let n = [],
    r = [];
  t.forEach(t => {
    let i = _.Z.getChannel(t.ref_id);
    null != i && (n.push(s.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i))
  }), 0 !== n.length && (await Promise.allSettled(n)).forEach((n, i) => {
    let a = r[i].id;
    if ("fulfilled" === n.status) {
      let t = n.value.body,
        r = d.n.getState().editStateIdsForGroup[e],
        i = d.n.getState().listings;
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

function I(e, t) {
  var n, r;
  let i = d.n.getState().listings[e],
    a = null == i ? true : i.usedTemplate;
  if (null == a) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let o = _.Z.getTemplateWithCategory(t, a);
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

function T(e) {
  return (0, f.H2)(e) && e.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.$F)() && (0, c.hQ)(e.id)
}