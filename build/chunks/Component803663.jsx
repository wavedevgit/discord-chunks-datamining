/** Chunk was on web.js **/
/** chunk id: 803663, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk359110 = require("./359110.js"),
  Chunk922482 = require("./922482.js"),
  Chunk146085 = require("./146085.js"),
  Chunk750154 = require("./750154.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    activity: t,
    onAction: n,
    onClose: m
  } = e, {
    themeType: g
  } = (0, f.z)(), E = g === p.l.MODAL_V2, b = (0, l.rq)(t), {
    channelId: y,
    guildId: O
  } = null != b ? b : {}, v = (0, i.e7)([d.Z], () => null != y && d.Z.isInChannel(y), [y]), I = (0, i.e7)([c.Z], () => null != y ? c.Z.getChannel(y) : null, [y]), T = (0, i.e7)([u.Z], () => null != I && u.Z.can(s.gl, I), [I]);
  if (!(0, l.dS)(t) || !T || null == O || null == y) return null;
  let S = e => {
    e.stopPropagation(), null == n || n({
      action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON"
    }), o.AC(O, y), (0, a.Kh)(y), null == m || m()
  };
  return (0, r.jsx)(_.O1, {
    text: h.intl.string(h.t.ZYO5OK),
    fullWidth: !E,
    disabled: v,
    onClick: S
  })
}