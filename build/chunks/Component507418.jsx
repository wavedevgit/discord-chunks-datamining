/** Chunk was on 91173 **/
/** chunk id: 507418, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk527562 = require("./527562.jsx"),
  Chunk245315 = require("./245315.js"),
  Chunk556041 = require("./556041.jsx"),
  Chunk726033 = require("./726033.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk368859 = require("./368859.js");

function m(e, t) {
  var n, i, m, f;
  if ((0, o.cp)(t)) return (0, r.jsx)(s.Z, {});
  if ((0, p.Z)(t)) {
    let l = (null != (i = null == t || null == (n = t.author) ? true : n.username) ? i : "").split(" ").slice(0, false).join(" "),
      {
        guild_id: o
      } = t.messageReference;
    if (null != o) return (0, r.jsx)(a.Z, {
      setPopoutRef: e.setPopoutRef,
      guildId: o,
      name: l
    })
  }
  if (null != t.interaction && "SENDING" === t.state) return (0, r.jsx)(r.Fragment, {});
  let _ = null != t.webhookId ? t.author : d.default.getUser(t.author.id);
  l()(null != _, "renderUserGuildPopout: user should never be null");
  let g = d.default.getCurrentUser();
  l()(null != g, "renderUserGuildPopout: currentUser should never be null");
  let h = u.Z.getChannel(t.channel_id);
  return l()(null != h, "renderUserGuildPopout: channel should never be null"), (0, r.jsx)(c.Z, (m = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, e), f = f = {
    user: _,
    currentUser: g,
    guildId: h.guild_id,
    channelId: t.channel_id,
    messageId: t.id
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(f)).forEach(function(e) {
    Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(f, e))
  }), m))
}