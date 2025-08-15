/** Chunk was on web.js **/
/** chunk id: 384298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk287734 = require("./287734.js"),
  Chunk622822 = require("./622822.js"),
  Chunk359110 = require("./359110.js"),
  Chunk922482 = require("./922482.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    channel: t,
    onAction: n,
    onClose: g
  } = e, {
    themeType: E
  } = (0, f.z)(), b = (0, i.e7)([d.Z], () => d.Z.isInChannel(t.id));
  if (!(0, i.e7)([u.Z], () => {
      let e = (0, s.dl)() && (0, s.zd)(t.id);
      return (t.isPrivate() || u.Z.can(h.Plq.CONNECT, t)) && !e
    })) return null;
  let y = () => E === p.lY.MODAL || E === p.lY.MODAL_V2 ? m.intl.string(m.t["3xjX0d"]) : t.isDM() || t.isGroupDM() ? m.intl.string(m.t["7hwn2N"]) : t.isGuildStageVoice() ? m.intl.string(m.t.Acqcoq) : m.intl.string(m.t.BXxdl5),
    O = () => E === p.lY.MODAL || E === p.lY.MODAL_V2 ? m.intl.string(m.t.VJlc0d) : t.isDM() || t.isGroupDM() ? m.intl.string(m.t.ozoE2N) : t.isGuildStageVoice() ? m.intl.string(m.t["7vb2cX"]) : m.intl.string(m.t["96ANUF"]),
    v = e => {
      e.stopPropagation(), null == n || n({
        action: "PRESS_JOIN_CALL_BUTTON"
      }), t.isGuildStageVoice() ? (0, c.Cq)(t) : (o.default.selectVoiceChannel(t.id), (0, l.Kh)(t.id)), null == g || g()
    };
  return E === p.lY.MODAL_V2 ? (0, r.jsx)(_.tG, {
    text: b ? y() : O(),
    size: a.Ph.TINY,
    themeColor: "secondary",
    onClick: v
  }) : (0, r.jsx)(_.tG, {
    text: b ? y() : O(),
    size: a.Ph.SMALL,
    themeColor: "secondary",
    fullWidth: true,
    onClick: v
  })
}