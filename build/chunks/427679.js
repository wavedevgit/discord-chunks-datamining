/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => y
});
var r, i = n(442837),
  o = n(570140),
  a = n(765305);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let c = {},
  u = {};

function d(e, t) {
  var n;
  let r = l({}, null !== (n = c[e]) && void 0 !== n ? n : {});
  null == t || t.forEach(e => {
    u[e.channel_id] = e, r[e.channel_id] = e
  }), c[e] = r
}

function f(e) {
  let {
    guilds: t
  } = e;
  c = {}, u = {}, t.forEach(e => d(e.id, e.stage_instances))
}

function p(e) {
  let {
    guild: t
  } = e;
  d(t.id, t.stage_instances)
}

function _(e) {
  var t;
  let {
    guild: n
  } = e, r = null !== (t = c[n.id]) && void 0 !== t ? t : {};
  delete c[n.id], Object.keys(r).forEach(e => {
    delete u[e]
  })
}

function h(e) {
  let {
    instance: t
  } = e;
  d(t.guild_id, [t])
}

function m(e, t) {
  var n;
  if (delete u[t], null == e) return;
  let r = l({}, null !== (n = c[e]) && void 0 !== n ? n : {});
  delete r[t], c[e] = r
}

function g(e) {
  let {
    instance: t
  } = e;
  m(t.guild_id, t.channel_id)
}

function E(e) {
  let {
    channel: t
  } = e;
  m(t.guild_id, t.id)
}

function v() {
  u = {}, c = {}
}
class b extends(r = i.ZP.Store) {
  getStageInstanceByChannel(e) {
    if (null != e) return u[e]
  }
  isLive(e) {
    return null != this.getStageInstanceByChannel(e)
  }
  isPublic(e) {
    var t;
    return (null === (t = this.getStageInstanceByChannel(e)) || void 0 === t ? void 0 : t.privacy_level) === a.j8.PUBLIC
  }
  getStageInstancesByGuild(e) {
    var t;
    return null == e ? {} : null !== (t = c[e]) && void 0 !== t ? t : {}
  }
  getAllStageInstances() {
    return Object.values(u)
  }
}
s(b, "displayName", "StageInstanceStore");
let y = new b(o.Z, {
  CONNECTION_OPEN: f,
  GUILD_CREATE: p,
  GUILD_DELETE: _,
  STAGE_INSTANCE_CREATE: h,
  STAGE_INSTANCE_UPDATE: h,
  STAGE_INSTANCE_DELETE: g,
  CHANNEL_DELETE: E,
  LOGOUT: v
})