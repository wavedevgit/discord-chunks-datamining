/** Chunk was on web.js **/
/** chunk id: 983436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk287734 = require("./287734.js"),
  Chunk475468 = require("./475468.js"),
  Chunk358555 = require("./358555.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk273254 = require("./273254.js");

function h(e) {
  let {
    guild: t,
    channel: n,
    message: h
  } = e, m = u.Z.getGuildId(), g = c.Z.getChannelId(m), E = i.useCallback(() => {
    var e;
    d.default.track(f.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
      author_id: null == (e = h.author) ? true : e.id,
      link_guild_id: t.id,
      link_channel_id: n.id,
      link_channel_type: n.type,
      guild_id: m,
      channel_id: g
    }), (0, a.K)(t.id, n.id), o.default.selectVoiceChannel(n.id)
  }, [h, t, n, m, g]), b = <l.Z.Channel channel={n} />;
  return <l.Z><l.Z.Body>{<div className={p.headerLine}>{<l.Z.Icon guild={t} />}{<l.Z.Info title={b} onClick={E}><span className={p.infoTitle}>{_.intl.format(_.t["2wimj4"], {
              guildName: t.name
            })}{<span className={p.infoBadge}><s.Z guild={t} isBannerVisible={false} /></span>}</span></l.Z.Info>}</div>}{<l.Z.Button onClick={E} color={l.Z.Button.Colors.GREEN}>{n.isGuildStageVoice() ? _.intl.string(_.t["7vb2cX"]) : _.intl.string(_.t["96ANUF"])}</l.Z.Button>}</l.Z.Body></l.Z>
}