/** Chunk was on 21738 **/
/** chunk id: 971203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk58149 = require("./58149.js"),
  Chunk378570 = require("./378570.js"),
  Chunk345942 = require("./345942.js"),
  Chunk576705 = require("./576705.js"),
  Chunk231608 = require("./231608.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
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

function A(e, t) {
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

function _(e) {
  let t = i.useContext(h.AnalyticsContext),
    n = e.voiceChannels[0],
    _ = (0, l.bG)([d.A], () => null != n && d.A.can(g.xBc.CONNECT, n.channel));
  return null == n ? null : [(0, r.jsx)(a.Drp, {
    id: "join-voice",
    action: function() {
      (0, c.iN)(n.channel.id), s.default.selectVoiceChannel(n.channel.id), o.Ay.trackWithMetadata(g.HAw.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, f({
        source: A(f({}, t.location), {
          object: g.ZSU.LIST_ITEM
        }),
        guild_id: n.guild.id,
        channel_id: n.channel.id
      }, (0, p.o)(e)))
    },
    label: m.intl.string(m.t["8yOlh9"]),
    disabled: !_
  }, "join-voice"), (0, r.jsx)(a.Drp, {
    id: "goto-server",
    action: function() {
      (0, u.u)(n.guild.id), o.Ay.trackWithMetadata(g.HAw.ACTIVITY_FEED_GUILD_VISITED, f({
        source: A(f({}, t.location), {
          object: g.ZSU.LIST_ITEM
        }),
        guild_id: n.guild.id,
        af_recently_played: false
      }, (0, p.o)(e)))
    },
    label: m.intl.string(m.t.RGgqm1)
  }, "goto-server")]
}