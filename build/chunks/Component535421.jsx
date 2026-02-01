/** Chunk was on 9753 **/
/** chunk id: 535421, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk283823 = require("./283823.jsx"),
  Chunk455207 = require("./455207.js"),
  Chunk542287 = require("./542287.jsx"),
  Chunk589022 = require("./589022.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk943667 = require("./943667.js");

function m(e, t) {
  var n, i, m, f;
  if ((0, s.MZ)(t)) return (0, r.jsx)(o.A, {});
  if ((0, p.A)(t)) {
    let l = (null != (n = null == t || null == (i = t.author) ? true : i.username) ? n : "").split(" ").slice(0, false).join(" "),
      {
        guild_id: s
      } = t.messageReference;
    if (null != s) return (0, r.jsx)(a.A, {
      setPopoutRef: e.setPopoutRef,
      guildId: s,
      name: l
    })
  }
  if (null != t.interaction && "SENDING" === t.state) return (0, r.jsx)(r.Fragment, {});
  let g = null != t.webhookId ? t.author : d.default.getUser(t.author.id);
  l()(null != g, "renderUserGuildPopout: user should never be null");
  let _ = d.default.getCurrentUser();
  l()(null != _, "renderUserGuildPopout: currentUser should never be null");
  let h = u.A.getChannel(t.channel_id);
  return l()(null != h, "renderUserGuildPopout: channel should never be null"), (0, r.jsx)(c.A, (m = function(e) {
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
    user: g,
    currentUser: _,
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