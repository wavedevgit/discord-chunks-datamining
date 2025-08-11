/** Chunk was on web.js **/
/** chunk id: 340295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk584729 = require("./584729.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk546247 = require("./546247.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.js"),
  Chunk761325 = require("./761325.js");

function m(e, t) {
  return 0 === t.length ? p.intl.string(p.t.zSqdra) : 1 === t.length ? p.intl.formatToPlainString(p.t.BUyJIC, {
    a: (0, u.Z)(e, t[0])
  }) : 2 === t.length ? p.intl.formatToPlainString(p.t.dcyZf3, {
    a: (0, u.Z)(e, t[0]),
    b: (0, u.Z)(e, t[1])
  }) : t.length > 2 ? p.intl.formatToPlainString(p.t["44/Obm"], {
    a: (0, u.Z)(e, t[0]),
    b: (0, u.Z)(e, t[1]),
    n: t.length - 2
  }) : true
}
let g = function(e) {
  let {
    participants: t,
    channel: n,
    hasConnectPermission: u
  } = e, g = t.filter(_.Io), E = (0, c.J)(n.guild_id), b = i.useCallback(() => {
    E ? (0, l.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id)
  }, [n.id, n.guild_id, E]), y = 4 === g.length ? 2 : 3;
  return <div className={h.container}>{<f.Z />}{<div className={h.tiles} style={{
        maxWidth: 168 * y
      }}>{g.slice(0, 5).map(e => (0, r.jsx)(d.ZP, {
        participant: e,
        channel: n,
        className: h.tile,
        inCall: true,
        noVideoRender: true,
        inPopout: false,
        width: 48
      }, e.id))}</div>}{<a.X6q className={h.channelName} variant={"heading-xxl/semibold"}>{n.name}</a.X6q>}{<div className={h.participantsRow}><a.Text color={"header-secondary"} variant={"text-sm/normal"}>{m(n, g)}</a.Text></div>}{<o.zx disabled={!u} className={h.joinButton} color={u ? o.zx.Colors.WHITE : o.zx.Colors.PRIMARY} onClick={b} size={o.zx.Sizes.MEDIUM}>{u ? p.intl.string(p.t["96ANUF"]) : p.intl.string(p.t.TVBCKS)}</o.zx>}</div>
}