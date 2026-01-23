/** Chunk was on web.js **/
/** chunk id: 70963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk956793 = require("./956793.js"),
  Chunk323073 = require("./323073.js"),
  Chunk378570 = require("./378570.js"),
  Chunk323443 = require("./323443.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    channel: t,
    onAction: n,
    onClose: m
  } = e, {
    themeType: g
  } = (0, d.E)(), E = g === _.d.MODAL_V2, y = (0, i.bG)([u.A], () => u.A.isInChannel(t.id));
  if (!(0, i.bG)([c.A], () => {
      let e = (0, s.r9)() && (0, s.UK)(t.id);
      return (t.isPrivate() || c.A.can(p.xBc.CONNECT, t)) && !e
    })) return null;
  let b = () => g === _.d.MODAL || g === _.d.MODAL_V2 ? h.intl.string(h.t["3xjX0U"]) : t.isDM() || t.isGroupDM() ? h.intl.string(h.t["7hwn2A"]) : t.isGuildStageVoice() ? h.intl.string(h.t.Acqcot) : h.intl.string(h.t.BXxdl7),
    O = () => g === _.d.MODAL || g === _.d.MODAL_V2 ? h.intl.string(h.t.VJlc0S) : t.isDM() || t.isGroupDM() ? h.intl.string(h.t.ozoE2A) : t.isGuildStageVoice() ? h.intl.string(h.t["7vb2cc"]) : h.intl.string(h.t["96ANUN"]),
    v = e => {
      e.stopPropagation(), null == n || n({
        action: "PRESS_JOIN_CALL_BUTTON"
      }), t.isGuildStageVoice() ? (0, l.av)(t) : (a.default.selectVoiceChannel(t.id), (0, o.iN)(t.id)), null == m || m()
    };
  return (0, r.jsx)(f.FD, {
    text: y ? b() : O(),
    fullWidth: !E,
    onClick: v
  })
}