/** Chunk was on 26494 **/
/** chunk id: 968644, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  p: () => h
});
var Chunk442837 = require("./442837.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, n, t) {
  return 0 === e.length ? "" : c.intl.format(t ? c.t.cJZxWf : c.t.Kj5GIT, {
    count: e.length,
    extraCount: Math.max(e.length - 2, 0),
    role1: e[0],
    role2: e[1],
    itemHook: n
  })
}

function m(e) {
  let {
    guild: n,
    prompt: t,
    selectedRoleIds: m,
    selectedChannelIds: h,
    itemHook: x
  } = e, f = null == n ? true : n.id, g = (0, l.Wu)([o.Z], () => null != f ? o.Z.getManyRoles(f, m) : [], [f, m]), p = (0, l.Wu)([a.Z, s.default, r.Z], () => Array.from(h).map(e => a.Z.getChannel(e)).filter(u.lm).map(e => (0, i.F6)(e, s.default, r.Z, true))), v = g.map(e => "@".concat(e.name)), j = (null == t ? true : t.singleSelect) ? "" : c.intl.string(c.t.JshhEl), C = "";
  if (0 === p.length && v.length > 0) j = d(v, x);
  else p.length > 0 && (j = 0 === p.length ? "" : c.intl.format(c.t.Rj841R, {
    count: p.length,
    extraCount: Math.max(p.length - 2, 0),
    channel1: p[0],
    channel2: p[1],
    itemHook: x
  }), v.length > 0 && (C = d(v, x, true)));
  return {
    helpText: j,
    helpTextAdditional: C
  }
}

function h(e) {
  let {
    guild: n,
    prompt: t,
    selectedRoleIds: d,
    selectedChannelIds: m,
    itemHook: h
  } = e, x = null == n ? true : n.id, f = (0, l.Wu)([o.Z], () => null != x ? o.Z.getManyRoles(x, d) : [], [x, d]), g = (0, l.Wu)([a.Z, s.default, r.Z], () => Array.from(m).map(e => a.Z.getChannel(e)).filter(u.lm).map(e => (0, i.F6)(e, s.default, r.Z, true))), p = f.map(e => "@".concat(e.name)), v = (null == t ? true : t.singleSelect) ? "" : c.intl.string(c.t.JshhEl);
  return 0 === g.length && p.length > 0 ? v = c.intl.format(c.t.vdtNYa, {
    count: p.length,
    extraCount: Math.max(p.length - 2, 0),
    role1: p[0],
    role2: p[1],
    itemHook: h
  }) : g.length > 0 && 0 === p.length ? v = c.intl.format(c.t.ZKywGU, {
    count: g.length,
    extraCount: Math.max(g.length - 2, 0),
    channel1: g[0],
    channel2: g[1],
    itemHook: h
  }) : g.length > 0 && p.length > 0 && (v = c.intl.format(c.t.WewRHM, {
    channelCount: g.length,
    extraChannelCount: Math.max(g.length - 2, 0),
    channel1: g[0],
    channel2: g[1],
    itemHook: h,
    roleCount: p.length,
    extraRoleCount: Math.max(p.length - 2, 0),
    role1: p[0],
    role2: p[1]
  })), {
    helpText: v,
    helpTextAdditional: ""
  }
}