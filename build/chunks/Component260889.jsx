/** Chunk was on 1272 **/
/** chunk id: 260889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk367907 = require("./367907.js"),
  Chunk359110 = require("./359110.js"),
  Chunk769654 = require("./769654.js"),
  Chunk496675 = require("./496675.js"),
  Chunk205129 = require("./205129.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
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
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let t = i.useContext(f.AnalyticsContext),
    n = e.voiceChannels[0],
    E = (0, l.e7)([d.Z], () => null != n && d.Z.can(g.Plq.CONNECT, n.channel));
  return null == n ? null : [(0, r.jsx)(a.sNh, {
    id: "join-voice",
    action: function() {
      (0, c.Kh)(n.channel.id), o.default.selectVoiceChannel(n.channel.id), s.ZP.trackWithMetadata(g.rMx.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, m({
        source: b(m({}, t.location), {
          object: g.qAy.LIST_ITEM
        }),
        guild_id: n.guild.id,
        channel_id: n.channel.id
      }, (0, p.y)(e)))
    },
    label: h.intl.string(h.t["8yOlh9"]),
    disabled: !E
  }, "join-voice"), (0, r.jsx)(a.sNh, {
    id: "goto-server",
    action: function() {
      (0, u.X)(n.guild.id), s.ZP.trackWithMetadata(g.rMx.ACTIVITY_FEED_GUILD_VISITED, m({
        source: b(m({}, t.location), {
          object: g.qAy.LIST_ITEM
        }),
        guild_id: n.guild.id,
        af_recently_played: false
      }, (0, p.y)(e)))
    },
    label: h.intl.string(h.t.RGgqm1)
  }, "goto-server")]
}