/** Chunk was on web.js **/
/** chunk id: 223863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => I,
  I: () => m,
  _5: () => h,
  _g: () => g,
  pk: () => E
}), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  Chunk308528 = require("./308528.js"),
  Chunk629357 = require("./629357.js"),
  Chunk280157 = require("./280157.js"),
  Chunk174768 = require("./174768.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk507696 = require("./507696.js"),
  Chunk652215 = require("./652215.js");
require("./985018.jsx");
let _ = 15;

function h(e) {
  let t = l.A.getChannel(e);
  return (null == t ? true : t.type) === p.rbe.DM ? {
    type: "user",
    id: t.recipients[0]
  } : {
    type: "channel",
    id: e
  }
}

function m(e) {
  return "".concat(e.type, "-").concat(e.id)
}

function g(e) {
  if ("channel" === e.type) return e.id;
  let t = l.A.getDMFromUserId(e.id);
  if (null != t) return t
}
async function E(e) {
  let t = g(e);
  if (null != t) return t;
  if ("user" === e.type) try {
    return await i.A.getOrEnsurePrivateChannel(e.id)
  } catch (e) {
    return
  }
}

function y(e) {
  if ("user" !== e.type) return (0, s.A)(e.id);
  {
    let t = u.default.getUser(e.id);
    return null != t ? {
      type: a.rD.USER,
      record: t,
      score: 0
    } : null
  }
}

function b(e) {
  return e.type === AutocompleterResultTypes.USER || PermissionStore.can(Permissions.VIEW_CHANNEL, e.record)
}

function O(e, t) {
  return e.type === a.rD.USER ? t || null != l.A.getDMChannelFromUserId(e.record.id) : e.type === a.rD.GROUP_DM || e.record.type !== p.rbe.GUILD_FORUM && e.record.type !== p.rbe.GUILD_MEDIA && c.A.can(p.xBc.VIEW_CHANNEL, e.record) && c.A.can(p.xBc.SEND_MESSAGES, e.record)
}

function v(e, t) {
  let n, r = new Set;
  if (null != t)
    for (let e of t) r.add(e);
  let i = [];
  for (let t of e)
    if (null == t) continue;
    else if (t.type === a.rD.HEADER) n = t;
  else {
    let {
      id: e
    } = t.record;
    r.has(e) || (r.add(e), null != n && (i.push(n), n = true), i.push(t))
  }
  return i
}

function A(e, t) {
  return e.filter(e => (0, d.Vq)(e) && (e.type === a.rD.HEADER || (0, f.N)(e) && O(e, t)))
}

function I(e) {
  let {
    results: t,
    hasQuery: n,
    queryMode: i,
    frequentChannels: a,
    targetDestination: l,
    selectedDestinations: c,
    pinnedDestinations: u,
    originDestination: d,
    includeMissingDMs: f
  } = e;
  if (n) return v(A(t, f));
  let p = null != u && u.length > 0 ? u.map(e => y(e)) : [],
    h = o.A.getChannelHistory(),
    m = h.length > 0 ? h.map(e => (0, s.A)(e)) : [],
    g = a.length > 0 ? a.map(e => (0, s.A)(e.id)) : [],
    E = A([...p, null != l ? y(l) : null, ...m, ...g], f),
    b = (null == c ? true : c.find(e => (0, r.isEqual)(e, d))) != null,
    O = null == d || b ? [] : [d.id];
  return null != i ? v(E.filter(e => e.type === i)) : v(E, O).slice(0, _)
}