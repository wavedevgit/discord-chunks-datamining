/** Chunk was on web.js **/
/** chunk id: 521090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./290780.js"), require("./388685.js");
var Chunk106351 = require("./106351.js"),
  Chunk212819 = require("./212819.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk483360 = require("./483360.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  switch (e.type) {
    case r.d.PUBLIC_THREAD:
    case r.d.PRIVATE_THREAD:
    case r.d.ANNOUNCEMENT_THREAD:
    case r.d.GUILD_VOICE:
    case r.d.GUILD_STAGE_VOICE:
    case r.d.GUILD_CATEGORY:
      return '#"'.concat((0, a.le)(e.name), '"');
    default:
      let t = l.ZP.getTextChannelNameDisambiguations(e.guild_id)[e.id];
      return "#".concat(null != t ? t.name : e.name)
  }
}

function h(e) {
  return p.EC.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
}
let g = {
  sentinel: Chunk761652.zy,
  matches: (e, t, n, r, i) => i.mentions.channel !== d.nS.DENY && !e.isPrivate(),
  queryResults(e, t, n, r, o) {
    let a, s, u = l.sH;
    return n.charAt(0) === i.xQ.VOICE_CHANNEL && (u = l.Zb, n = n.substring(1)), r.forNonStringCommandOption ? a = c.ZP.queryApplicationCommandChannelResults({
      query: n,
      channel: e,
      channelTypes: r.allowedChannelTypes
    }) : (a = c.ZP.queryChannelResults({
      query: n,
      channel: e,
      type: u
    }), null != t && (s = c.ZP.queryStaticRouteChannels({
      query: n,
      guild: t
    }), a.channels.unshift(...s))), {
      results: a,
      staticRouteChannels: s
    }
  },
  renderResults(e) {
    let t, n, {
        results: {
          channels: r
        },
        selectedIndex: a,
        query: l,
        options: c,
        onHover: d,
        onClick: p
      } = e,
      m = l.charAt(0) === i.xQ.VOICE_CHANNEL;
    return m ? (t = _.t["rMUL3+"], n = _.intl.string(_.t.CYnO4s), l = l.substring(1)) : c.forNonStringCommandOption ? (t = _.t.upNFT5, n = _.intl.string(_.t.OGiMXJ)) : (t = _.t.UhnmJD, n = _.intl.string(_.t.nIfr0Y)), (0, u.HI)({
      query: l,
      selectedIndex: a,
      autocompletes: r,
      onHover: d,
      onClick: p,
      titleWithQuery: t,
      titleWithoutQuery: n,
      Component: o.ZP.Channel,
      getProps: e => ({
        channel: e,
        key: e.id,
        category: s.Z.getChannel(e.parent_id)
      }),
      getQuery: e => m ? "".concat(f.zy).concat(i.xQ.VOICE_CHANNEL).concat(e) : "".concat(f.zy).concat(e),
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
    return r.insertText(m(i), h(i)), {
      type: d.z2.CHANNEL
    }
  }
}