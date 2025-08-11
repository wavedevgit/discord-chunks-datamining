/** Chunk was on web.js **/
/** chunk id: 803663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk359110 = require("./359110.js"),
  Chunk922482 = require("./922482.js"),
  Chunk146085 = require("./146085.js"),
  Chunk750154 = require("./750154.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    activity: t,
    onAction: n,
    onClose: g
  } = e, {
    themeType: E
  } = (0, _.z)(), b = (0, c.rq)(t), {
    channelId: y,
    guildId: O
  } = null != b ? b : {}, v = (0, i.e7)([f.Z], () => null != y && f.Z.isInChannel(y), [y]), I = (0, i.e7)([u.Z], () => null != y ? u.Z.getChannel(y) : null, [y]), T = (0, i.e7)([d.Z], () => null != I && d.Z.can(l.gl, I), [I]);
  if (!(0, c.dS)(t) || !T || null == O || null == y) return null;
  let S = e => {
    e.stopPropagation(), null == n || n({
      action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON"
    }), s.AC(O, y), (0, a.Kh)(y), null == g || g()
  };
  return E === h.lY.MODAL_V2 ? <p.tG text={m.intl.string(m.t.ZYO5OD)} size={o.Ph.TINY} themeColor={"secondary"} disabled={v} onClick={S} /> : <p.tG text={m.intl.string(m.t.ZYO5OD)} size={o.Ph.SMALL} themeColor={"secondary"} fullWidth={true} disabled={v} onClick={S} />
}