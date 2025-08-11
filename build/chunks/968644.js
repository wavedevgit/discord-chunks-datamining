/** Chunk was on 58121 **/
/** chunk id: 968644, original params: e,t,n (module,exports,require) **/
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

function u(e, t, n) {
  return 0 === e.length ? "" : d.intl.format(n ? d.t.cJZxWV : d.t.Kj5GIS, {
    count: e.length,
    extraCount: Math.max(e.length - 2, 0),
    role1: e[0],
    role2: e[1],
    itemHook: t
  })
}

function m(e) {
  let {
    guild: t,
    prompt: n,
    selectedRoleIds: m,
    selectedChannelIds: h,
    itemHook: p
  } = e, f = null == t ? true : t.id, g = (0, l.Wu)([a.Z], () => null != f ? a.Z.getManyRoles(f, m) : [], [f, m]), x = (0, l.Wu)([i.Z, s.default, o.Z], () => Array.from(h).map(e => i.Z.getChannel(e)).filter(c.lm).map(e => (0, r.F6)(e, s.default, o.Z, true))), _ = g.map(e => "@".concat(e.name)), C = (null == n ? true : n.singleSelect) ? "" : d.intl.string(d.t.JshhEh), b = "";
  if (0 === x.length && _.length > 0) C = u(_, p);
  else x.length > 0 && (C = 0 === x.length ? "" : d.intl.format(d.t.Rj841d, {
    count: x.length,
    extraCount: Math.max(x.length - 2, 0),
    channel1: x[0],
    channel2: x[1],
    itemHook: p
  }), _.length > 0 && (b = u(_, p, true)));
  return {
    helpText: C,
    helpTextAdditional: b
  }
}

function h(e) {
  let {
    guild: t,
    prompt: n,
    selectedRoleIds: u,
    selectedChannelIds: m,
    itemHook: h
  } = e, p = null == t ? true : t.id, f = (0, l.Wu)([a.Z], () => null != p ? a.Z.getManyRoles(p, u) : [], [p, u]), g = (0, l.Wu)([i.Z, s.default, o.Z], () => Array.from(m).map(e => i.Z.getChannel(e)).filter(c.lm).map(e => (0, r.F6)(e, s.default, o.Z, true))), x = f.map(e => "@".concat(e.name)), _ = (null == n ? true : n.singleSelect) ? "" : d.intl.string(d.t.JshhEh);
  return 0 === g.length && x.length > 0 ? _ = d.intl.format(d.t.vdtNYW, {
    count: x.length,
    extraCount: Math.max(x.length - 2, 0),
    role1: x[0],
    role2: x[1],
    itemHook: h
  }) : g.length > 0 && 0 === x.length ? _ = d.intl.format(d.t.ZKywGR, {
    count: g.length,
    extraCount: Math.max(g.length - 2, 0),
    channel1: g[0],
    channel2: g[1],
    itemHook: h
  }) : g.length > 0 && x.length > 0 && (_ = d.intl.format(d.t.WewRHB, {
    channelCount: g.length,
    extraChannelCount: Math.max(g.length - 2, 0),
    channel1: g[0],
    channel2: g[1],
    itemHook: h,
    roleCount: x.length,
    extraRoleCount: Math.max(x.length - 2, 0),
    role1: x[0],
    role2: x[1]
  })), {
    helpText: _,
    helpTextAdditional: ""
  }
}