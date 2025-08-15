/** Chunk was on 66866 **/
/** chunk id: 303737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GN: () => v,
  be: () => C,
  g4: () => b,
  m7: () => h,
  r4: () => O,
  sO: () => x,
  yL: () => y
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
let g = {};

function h(e) {
  let t = (0, l.e7)([s.Z], () => s.Z.getChannel(e)),
    n = (0, l.e7)([m.Z], () => m.Z.getChannel(e));
  return null != t ? t : n
}

function b(e, t, n) {
  let r = (0, l.e7)([u.Z], () => u.Z.getSubscriptionListingsForGuild(e)),
    i = (0, d.n)(t => t.editStateIdsForGroup[e]),
    a = (0, d.n)(e => e.listings);
  if (true === n || true === t) return null;
  let o = r.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
    s = [];
  true !== i && i.forEach(e => {
    let t = a[e],
      n = null == t ? true : t.priceTier;
    null != n && s.push(n)
  });
  let c = new Set(s.concat(o));
  if (!c.has(n)) return null;
  let p = t.indexOf(n);
  if (false === p) return null;
  let m = [];
  for (let e = p + 1; e < t.length && (c.has(t[e]) || m.push(t[e]), 3 !== m.length); e++);
  return m
}

function E(e) {
  let t = d.n.getState().editStateIdsForGroup[e],
    n = d.n.getState().listings,
    r = new Set;
  null != t && t.forEach(e => {
    var t;
    let i = null == (t = n[e]) ? true : t.channelBenefits;
    null == i || i.forEach(e => {
      null != m.Z.getChannel(e.ref_id) && r.add(e.ref_id)
    })
  });
  let i = [];
  for (let t of r) {
    let n = m.Z.getChannel(t);
    if (null != n) {
      let t = n.set("guild_id", e);
      i.push(t)
    }
  }
  return i
}

function C(e) {
  let t = E(e);
  g[e] = t, t.forEach(e => {
    let t = e.set("flags", _.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    a.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    })
  })
}

function v(e) {
  var t;
  (null != (t = g[e]) ? t : E(e)).forEach(e => {
    a.Z.dispatch({
      type: "CHANNEL_DELETE",
      channel: e
    })
  })
}
async function O(e, t) {
  let n = [],
    r = [];
  t.forEach(t => {
    let i = m.Z.getChannel(t.ref_id);
    null != i && (n.push(o.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i))
  }), 0 !== n.length && (await Promise.allSettled(n)).forEach((n, i) => {
    let l = r[i].id;
    if ("fulfilled" === n.status) {
      let t = n.value.body,
        r = d.n.getState().editStateIdsForGroup[e],
        i = d.n.getState().listings;
      null != r && r.forEach(e => {
        var n;
        let r = null == (n = i[e]) ? true : n.channelBenefits;
        null == r || r.forEach(e => {
          e.ref_id === l && (e.ref_id = t.id)
        })
      })
    } else if (null != t) {
      let e = t.findIndex(e => e.ref_id === l);
      false !== e && (null == t || t.splice(e, 1))
    }
  })
}

function y(e, t) {
  var n, r;
  let i = d.n.getState().listings[e],
    l = null == i ? true : i.usedTemplate;
  if (null == l) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let a = m.Z.getTemplateWithCategory(t, l);
  if (null == a) return {
    templateCategory: null,
    hasChangeFromTemplate: null
  };
  let o = a.listings[0];
  if ((null == i ? true : i.name) !== o.name || (null == i ? true : i.description) !== o.description || (null == i ? true : i.priceTier) !== o.price_tier || (null == i ? true : i.image) !== o.image || (null == i ? true : i.roleColor) !== o.role_color || (null == i || null == (n = i.channelBenefits) ? true : n.length) !== o.channels.length || (null == i || null == (r = i.intangibleBenefits) ? true : r.length) !== o.additional_perks.length) return {
    templateCategory: a.category,
    hasChangeFromTemplate: true
  };
  for (let e = 0; e < o.channels.length; e++) {
    let t = i.channelBenefits[e],
      n = o.channels[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: a.category,
      hasChangeFromTemplate: true
    }
  }
  for (let e = 0; e < o.additional_perks.length; e++) {
    let t = i.intangibleBenefits[e],
      n = o.additional_perks[e];
    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
      templateCategory: a.category,
      hasChangeFromTemplate: true
    }
  }
  return {
    templateCategory: a.category,
    hasChangeFromTemplate: false
  }
}

function x(e) {
  return (0, p.H2)(e) && e.features.has(f.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.$F)() && (0, c.hQ)(e.id)
}