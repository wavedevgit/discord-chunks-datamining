/** Chunk was on 83098 **/
/** chunk id: 987509, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => S,
  dL: () => h,
  hC: () => p,
  hl: () => m,
  qx: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  Chunk493683 = require("./493683.js"),
  Chunk212819 = require("./212819.js"),
  Chunk938078 = require("./938078.js"),
  Chunk823385 = require("./823385.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk41837 = require("./41837.js"),
  Chunk981631 = require("./981631.js");

function h(e) {
  let t = u.Z.getChannel(e);
  return (null == t ? true : t.type) === b.d4z.DM ? {
    type: "user",
    id: t.recipients[0]
  } : {
    type: "channel",
    id: e
  }
}

function p(e) {
  return "".concat(e.type, "-").concat(e.id)
}

function m(e) {
  if ("channel" === e.type) return e.id;
  let t = u.Z.getDMFromUserId(e.id);
  if (null != t) return t
}
async function g(e) {
  let t = m(e);
  if (null != t) return t;
  if ("user" === e.type) try {
    return await l.Z.getOrEnsurePrivateChannel(e.id)
  } catch (e) {
    return
  }
}

function y(e) {
  if ("user" !== e.type) return (0, i.Z)(e.id);
  {
    let t = c.default.getUser(e.id);
    return null != t ? {
      type: a.h8.USER,
      record: t,
      score: 0
    } : null
  }
}

function x(e, t) {
  let n, r = new Set;
  if (null != t)
    for (let e of t) r.add(e);
  let l = [];
  for (let t of e)
    if (null == t) continue;
    else if (t.type === a.h8.HEADER) n = t;
  else {
    let {
      id: e
    } = t.record;
    r.has(e) || (r.add(e), null != n && (l.push(n), n = true), l.push(t))
  }
  return l
}

function v(e, t) {
  return e.filter(e => (0, d.lm)(e) && (e.type === a.h8.HEADER || (0, f.o)(e) && (e.type === a.h8.USER ? t || null != u.Z.getDMChannelFromUserId(e.record.id) : e.type === a.h8.GROUP_DM || e.record.type !== b.d4z.GUILD_FORUM && e.record.type !== b.d4z.GUILD_MEDIA && o.Z.can(b.Plq.VIEW_CHANNEL, e.record) && o.Z.can(b.Plq.SEND_MESSAGES, e.record))))
}

function S(e) {
  let {
    results: t,
    hasQuery: n,
    queryMode: l,
    frequentChannels: a,
    targetDestination: u,
    selectedDestinations: o,
    pinnedDestinations: c,
    originDestination: d,
    includeMissingDMs: f
  } = e;
  if (n) return x(v(t, f));
  let b = null != c && c.length > 0 ? c.map(e => y(e)) : [],
    h = s.Z.getChannelHistory(),
    p = h.length > 0 ? h.map(e => (0, i.Z)(e)) : [],
    m = a.length > 0 ? a.map(e => (0, i.Z)(e.id)) : [],
    g = v([...b, null != u ? y(u) : null, ...p, ...m], f),
    S = (null == o ? true : o.find(e => (0, r.isEqual)(e, d))) != null,
    E = null == d || S ? [] : [d.id];
  return null != l ? x(g.filter(e => e.type === l)) : x(g, E).slice(0, 15)
}
require("./388032.jsx")