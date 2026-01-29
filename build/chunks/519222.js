/** Chunk was on 1636 **/
/** chunk id: 519222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $b: () => M,
  DT: () => E,
  Io: () => x,
  Le: () => w,
  Nw: () => C,
  RC: () => D,
  S: () => _,
  Z4: () => L,
  cl: () => I,
  mF: () => N,
  r7: () => R,
  rS: () => T,
  u_: () => P,
  vc: () => S,
  wF: () => G
}), require("./627968.js"), require("./64700.js"), require("./397927.js");
var Chunk687709 = require("./687709.js"),
  Chunk843472 = require("./843472.js"),
  Chunk419056 = require("./419056.jsx"),
  Chunk294454 = require("./294454.jsx"),
  Chunk997509 = require("./997509.js");
require("./928658.js");
var Chunk118517 = require("./118517.js"),
  Chunk164684 = require("./164684.jsx"),
  Chunk747926 = require("./747926.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk147036 = require("./147036.js"),
  Chunk957565 = require("./957565.js"),
  Chunk203982 = require("./203982.js"),
  Chunk661191 = require("./661191.js"),
  Chunk965407 = require("./965407.js"),
  Chunk439147 = require("./439147.js"),
  Chunk249700 = require("./249700.js"),
  Chunk145530 = require("./145530.jsx"),
  Chunk652215 = require("./652215.js");

function S(e) {
  let t = e.getGuildId();
  null != t && o.A.open(t, j.BEX.ENGAGEMENT)
}

function E(e, t, n) {
  (0, y.C)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function _(e, t) {
  p.default.track(j.HAw.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, y.C)((0, f.n)(e.guild_id, e.id, t.id))
}

function D(e, t, n) {
  t.state === j.cmJ.SEND_FAILED || n.shiftKey ? i.A.deleteMessage(e.id, t.id, t.state === j.cmJ.SEND_FAILED) : h.A.confirmDelete(e, t)
}

function P(e, t) {
  i.A.startEditMessageRecord(e.id, t)
}

function I(e, t) {
  (0, O.A)(e.id, t.id)
}

function T(e, t, n) {
  false === t.pinned ? n.shiftKey ? r.A.pinMessage(e, t.id) : h.A.confirmPin(e, t) : n.shiftKey ? r.A.unpinMessage(e, t.id) : h.A.confirmUnpin(e, t)
}

function w(e, t) {
  (0, l.A)(e.id, t.id)
}

function x(e, t) {
  (0, v.A)(e, t, true, m.A.getOptions(t.id))
}

function M(e, t, n) {
  let r = e.isPrivate(),
    i = t.author.id === u.default.getId();
  (0, c.Yf)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !i,
    showMentionToggle: !r && !i
  }), b._.dispatch(j.jej.FOCUS_CHANNEL_TEXT_AREA, {
    channelId: e.id
  })
}

function C(e, t) {
  (0, d.Tv)(e, t, "Message")
}

function N(e, t) {
  let n = g.A.getChannel(A.default.castMessageIdAsChannelId(t.id));
  null != n && (0, d.JA)(n)
}

function G(e, t) {
  (0, s.Y)({
    channelId: e.id,
    messageId: t.id
  })
}

function R(e, t) {
  (0, s.x)({
    channelId: e.id,
    messageId: t.id
  })
}

function L(e, t) {
  (0, a.fO)({
    message: t,
    source: "message-actions"
  })
}