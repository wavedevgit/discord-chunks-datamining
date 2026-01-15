/** Chunk was on 26494 **/
/** chunk id: 968644, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p,
  p: () => h
});
var Chunk442837 = require("./442837.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return 0 === e.length ? "" : d.intl.format(n ? d.t.cJZxWf : d.t.Kj5GIT, {
    count: e.length,
    extraCount: Math.max(e.length - 2, 0),
    role1: e[0],
    role2: e[1],
    itemHook: t
  })
}

function p(e) {
  let {
    guild: t,
    prompt: n,
    selectedRoleIds: p,
    selectedChannelIds: h,
    itemHook: f
  } = e, g = null == t ? true : t.id, j = (0, l.Wu)([o.Z], () => null != g ? o.Z.getManyRoles(g, p) : [], [g, p]), x = (0, l.Wu)([r.Z, s.default, c.Z, a.Z], () => Array.from(h).map(e => r.Z.getChannel(e)).filter(e => null != e && a.Z.can(u.Plq.VIEW_CHANNEL, e)).map(e => (0, i.F6)(e, s.default, c.Z, true))), v = j.map(e => "@".concat(e.name)), y = (null == n ? true : n.singleSelect) ? "" : d.intl.string(d.t.JshhEl), b = "";
  if (0 === x.length && v.length > 0) y = m(v, f);
  else x.length > 0 && (y = 0 === x.length ? "" : d.intl.format(d.t.Rj841R, {
    count: x.length,
    extraCount: Math.max(x.length - 2, 0),
    channel1: x[0],
    channel2: x[1],
    itemHook: f
  }), v.length > 0 && (b = m(v, f, true)));
  return {
    helpText: y,
    helpTextAdditional: b
  }
}

function h(e) {
  let {
    guild: t,
    prompt: n,
    selectedRoleIds: m,
    selectedChannelIds: p,
    itemHook: h
  } = e, f = null == t ? true : t.id, g = (0, l.Wu)([o.Z], () => null != f ? o.Z.getManyRoles(f, m) : [], [f, m]), j = (0, l.Wu)([r.Z, s.default, c.Z, a.Z], () => Array.from(p).map(e => r.Z.getChannel(e)).filter(e => null != e && a.Z.can(u.Plq.VIEW_CHANNEL, e)).map(e => (0, i.F6)(e, s.default, c.Z, true))), x = g.map(e => "@".concat(e.name)), v = (null == n ? true : n.singleSelect) ? "" : d.intl.string(d.t.JshhEl);
  return 0 === j.length && x.length > 0 ? v = d.intl.format(d.t.vdtNYa, {
    count: x.length,
    extraCount: Math.max(x.length - 2, 0),
    role1: x[0],
    role2: x[1],
    itemHook: h
  }) : j.length > 0 && 0 === x.length ? v = d.intl.format(d.t.ZKywGU, {
    count: j.length,
    extraCount: Math.max(j.length - 2, 0),
    channel1: j[0],
    channel2: j[1],
    itemHook: h
  }) : j.length > 0 && x.length > 0 && (v = d.intl.format(d.t.WewRHM, {
    channelCount: j.length,
    extraChannelCount: Math.max(j.length - 2, 0),
    channel1: j[0],
    channel2: j[1],
    itemHook: h,
    roleCount: x.length,
    extraRoleCount: Math.max(x.length - 2, 0),
    role1: x[0],
    role2: x[1]
  })), {
    helpText: v,
    helpTextAdditional: ""
  }
}