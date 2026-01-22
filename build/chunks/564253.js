/** Chunk was on web.js **/
/** chunk id: 564253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./667532.js"), require("./896048.js");
var Chunk478437 = require("./478437.js"),
  Chunk629357 = require("./629357.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk248465 = require("./248465.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js");
require("./827669.js");
var Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  switch (e.type) {
    case r.r.PUBLIC_THREAD:
    case r.r.PRIVATE_THREAD:
    case r.r.ANNOUNCEMENT_THREAD:
    case r.r.GUILD_VOICE:
    case r.r.GUILD_STAGE_VOICE:
    case r.r.GUILD_CATEGORY:
      return '#"'.concat((0, s.Eq)(e.name), '"');
    default:
      let t = l.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
      return "#".concat(null != t ? t.name : e.name)
  }
}

function h(e) {
  return f.aQ.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
}
let m = {
  sentinel: "#",
  matches: (e, t, n, r, i) => i.mentions.channel !== d.xS.DENY && !e.isPrivate(),
  queryResults(e, t, n, r, a) {
    let s, o, u = l.I6;
    return n.charAt(0) === i.AT.VOICE_CHANNEL && (u = l.vM, n = n.substring(1)), r.forNonStringCommandOption ? s = c.Ay.queryApplicationCommandChannelResults({
      query: n,
      channel: e,
      channelTypes: r.allowedChannelTypes
    }) : (s = c.Ay.queryChannelResults({
      query: n,
      channel: e,
      type: u
    }), null != t && (o = c.Ay.queryStaticRouteChannels({
      query: n,
      guild: t
    }), s.channels.unshift(...o))), {
      results: s,
      staticRouteChannels: o
    }
  },
  renderResults(e) {
    let t, n, {
        results: {
          channels: r
        },
        selectedIndex: s,
        query: l,
        options: c,
        onHover: d,
        onClick: f
      } = e,
      _ = l.charAt(0) === i.AT.VOICE_CHANNEL;
    return _ ? (t = p.t["rMUL3+"], n = p.intl.string(p.t.CYnO4s), l = l.substring(1)) : c.forNonStringCommandOption ? (t = p.t.upNFT5, n = p.intl.string(p.t.OGiMXJ)) : (t = p.t.UhnmJD, n = p.intl.string(p.t.nIfr0Y)), (0, u.GM)({
      query: l,
      selectedIndex: s,
      autocompletes: r,
      onHover: d,
      onClick: f,
      titleWithQuery: t,
      titleWithoutQuery: n,
      Component: a.Ay.Channel,
      getProps: e => ({
        channel: e,
        key: e.id,
        category: o.A.getChannel(e.parent_id)
      }),
      getQuery: e => _ ? "".concat("#").concat(i.AT.VOICE_CHANNEL).concat(e) : "".concat("#").concat(e),
      key: "channels"
    })
  },
  onSelect(e) {
    let {
      results: {
        channels: t
      },
      index: n,
      options: r
    } = e, i = t[n];
    return r.insertText(_(i), h(i)), {
      type: d.kc.CHANNEL
    }
  }
}