/** Chunk was on web.js **/
/** chunk id: 507418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk527562 = require("./527562.js"),
  Chunk245315 = require("./245315.js"),
  Chunk556041 = require("./556041.js"),
  Chunk726033 = require("./726033.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk368859 = require("./368859.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if ((0, s.cp)(t)) return <l.Z />;
  if ((0, f.Z)(t)) {
    var n, i;
    let o = (null != (i = null == t || null == (n = t.author) ? true : n.username) ? i : "").split(" ").slice(0, false).join(" "),
      {
        guild_id: s
      } = t.messageReference;
    if (null != s) return <a.Z setPopoutRef={e.setPopoutRef} guildId={s} name={o} />
  }
  if (null != t.interaction && "SENDING" === t.state) return <r.Fragment />;
  let _ = null != t.webhookId ? t.author : d.default.getUser(t.author.id);
  o()(null != _, "renderUserGuildPopout: user should never be null");
  let h = d.default.getCurrentUser();
  o()(null != h, "renderUserGuildPopout: currentUser should never be null");
  let g = u.Z.getChannel(t.channel_id);
  return o()(null != g, "renderUserGuildPopout: channel should never be null"), <c.Z{...m(p({}, e), {
    user: _,
    currentUser: h,
    guildId: g.guild_id,
    channelId: t.channel_id,
    messageId: t.id
  })} />
}