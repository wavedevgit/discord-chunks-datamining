/** Chunk was on web.js **/
/** chunk id: 910463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => c
}), require("./228524.js"), require("./457529.js");
var Chunk633965 = require("./633965.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk486020 = require("./486020.js"),
  Chunk710969 = require("./710969.js");

function c(e) {
  var t;
  let n = (0, l.xn)(e),
    c = (0, l.vZ)(e),
    u = (0, r.pc)(),
    d = (0, r.Ld)();
  if (!(null == c ? true : c.is_campaign_ias_enabled) || !n || true === u || true === d) return null;
  let f = () => {
      let e = u(),
        t = a.A.getGuilds();
      return e.map(e => {
        var n;
        let r = t[e];
        if (true === r) return null;
        let i = {
          id: r.id,
          name: r.name
        };
        null !== r.description && (i.description = r.description);
        let a = null !== r.icon && null != (n = s.Ay.getGuildIconURL({
          id: r.id,
          icon: r.icon,
          size: 44,
          canAnimate: true
        })) ? n : null;
        return null !== a && (i.icon_url = a), i
      }).filter(e => null !== e)
    },
    p = o.A.getGuildId(),
    _ = null != p ? a.A.getGuild(p) : null,
    h = () => null == _ ? [] : d().map(e => {
      let t = i.A.getChannel(e);
      if (true === t) return null;
      let n = {
        id: t.id,
        name: t.name
      };
      return t.topic.length > 0 && (n.channel_topic = t.topic), n
    }).filter(e => null !== e),
    m = {
      guilds: f(),
      channels: h()
    };
  null != p && (m.selected_guild_id = p);
  let g = (null == _ ? true : _.banner) !== null && (null == _ ? true : _.banner) !== true && null != (t = s.Ay.getGuildBannerURL({
    id: _.id,
    banner: _.banner
  }, true)) ? t : null;
  return null !== g && (m.selected_guild_banner_url = g), m.guilds.length > 100 && (m.guilds = m.guilds.slice(0, 100), m.truncated = true), m.channels.length > 100 && (m.channels = m.channels.slice(0, 100), m.truncated = true), {
    brand_safety_context: JSON.stringify(m)
  }
}
require("./23766.js")