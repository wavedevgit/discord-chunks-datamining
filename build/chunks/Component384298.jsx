/** Chunk was on web.js **/
/** chunk id: 384298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk287734 = require("./287734.js"),
  Chunk622822 = require("./622822.js"),
  Chunk359110 = require("./359110.js"),
  Chunk922482 = require("./922482.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    channel: t,
    onAction: n,
    onClose: h
  } = e, {
    themeType: g
  } = (0, d.z)(), E = g === _.l.MODAL_V2, b = (0, i.e7)([u.Z], () => u.Z.isInChannel(t.id));
  if (!(0, i.e7)([c.Z], () => {
      let e = (0, o.dl)() && (0, o.zd)(t.id);
      return (t.isPrivate() || c.Z.can(p.Plq.CONNECT, t)) && !e
    })) return null;
  let y = () => g === _.l.MODAL || g === _.l.MODAL_V2 ? m.intl.string(m.t["3xjX0U"]) : t.isDM() || t.isGroupDM() ? m.intl.string(m.t["7hwn2A"]) : t.isGuildStageVoice() ? m.intl.string(m.t.Acqcot) : m.intl.string(m.t.BXxdl7),
    O = () => g === _.l.MODAL || g === _.l.MODAL_V2 ? m.intl.string(m.t.VJlc0S) : t.isDM() || t.isGroupDM() ? m.intl.string(m.t.ozoE2A) : t.isGuildStageVoice() ? m.intl.string(m.t["7vb2cc"]) : m.intl.string(m.t["96ANUN"]),
    v = e => {
      e.stopPropagation(), null == n || n({
        action: "PRESS_JOIN_CALL_BUTTON"
      }), t.isGuildStageVoice() ? (0, l.Cq)(t) : (a.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)), null == h || h()
    };
  return (0, r.jsx)(f.O1, {
    text: b ? y() : O(),
    fullWidth: !E,
    onClick: v
  })
}