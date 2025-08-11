/** Chunk was on web.js **/
/** chunk id: 91140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => u,
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk379357 = require("./379357.js"),
  Chunk442550 = require("./442550.js"),
  Chunk297781 = require("./297781.js"),
  Chunk443487 = require("./443487.js"),
  Chunk522314 = require("./522314.js");
let u = [Chunk297781.OV, Chunk297781.EE, Chunk297781.Af, Chunk297781.U9, Chunk297781.wO, Chunk297781.f, Chunk297781.n8, Chunk297781.v1, Chunk297781.pQ],
  d = e => {
    var t;
    let {
      entry: n,
      channel: i,
      selected: d,
      hovered: f
    } = e, {
      largeImage: _
    } = (0, o.rv)({
      entry: n,
      showCoverImage: false
    });
    return <l.Zb selected={d}>{<l.e$>{<l.F9 entry={n} channelId={i.id} guildId={i.guild_id} />}{<l.ll>{n.extra.game_name}</l.ll>}{<s.Gk location={s.Gt.CARD}>{u.map((e, t) => (0, r.jsx)(e, {
            entry: n,
            hovered: f
          }, t))}</s.Gk>}</l.e$>}{<a.f alt={null != (t = null == _ ? true : _.text) ? t : null == _ ? true : _.alt} src={null == _ ? true : _.src} size={48} className={c.thumbnail} showTooltip={(null == _ ? true : _.text) != null} />}</l.Zb>
  },
  f = Chunk73800.memo(d)