/** Chunk was on 37220 **/
/** chunk id: 996861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $Z: () => Z,
  B8: () => w,
  F4: () => P,
  HH: () => x,
  Hd: () => T,
  Xl: () => A,
  dF: () => C,
  eM: () => R,
  fB: () => _,
  gK: () => D,
  mG: () => N,
  qe: () => M,
  rY: () => I,
  ts: () => L,
  zW: () => E
}), require("./951288.js"), require("./647438.js"), require("./481060.js");
var Chunk332148 = require("./332148.js"),
  Chunk904245 = require("./904245.js"),
  Chunk257559 = require("./257559.jsx"),
  Chunk143740 = require("./143740.jsx"),
  Chunk912332 = require("./912332.jsx"),
  Chunk434404 = require("./434404.js");
require("./726521.js");
var Chunk623292 = require("./623292.js"),
  Chunk324701 = require("./324701.jsx"),
  Chunk488131 = require("./488131.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk585483 = require("./585483.js"),
  Chunk709054 = require("./709054.js"),
  Chunk111618 = require("./111618.js"),
  Chunk50284 = require("./50284.js"),
  Chunk730954 = require("./730954.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  let t = e.getGuildId();
  null != t && s.Z.open(t, S.pNK.ENGAGEMENT)
}

function P(e, t, n) {
  (0, O.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function _(e, t) {
  b.default.track(S.rMx.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, O.JG)((0, p.wR)(e.guild_id, e.id, t.id))
}

function Z(e, t, n) {
  t.state === S.yb.SEND_FAILED || n.shiftKey ? i.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED) : l.Z.confirmDelete(e, t)
}

function T(e, t) {
  i.Z.startEditMessageRecord(e.id, t)
}

function w(e, t) {
  (0, v.Z)(e.id, t.id)
}

function I(e, t, n) {
  if (false === t.pinned) return void(n.shiftKey ? r.Z.pinMessage(e, t.id) : l.Z.confirmPin(e, t));
  n.shiftKey ? r.Z.unpinMessage(e, t.id) : l.Z.confirmUnpin(e, t)
}

function A(e, t) {
  (0, a.Z)(e.id, t.id)
}

function N(e, t) {
  (0, j.Z)(e, t, true, h.Z.getOptions(t.id))
}

function x(e, t, n) {
  let r = e.isPrivate(),
    i = t.author.id === f.default.getId();
  (0, c.fE)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !i,
    showMentionToggle: !r && !i
  }), y.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
    channelId: e.id
  })
}

function D(e, t) {
  (0, d.R6)(e, t, "Message")
}

function M(e, t) {
  let n = g.Z.getChannel(m.default.castMessageIdAsChannelId(t.id));
  null != n && (0, d.ok)(n)
}

function C(e, t) {
  (0, u.z)({
    channelId: e.id,
    messageId: t.id
  })
}

function R(e, t) {
  (0, u.x)({
    channelId: e.id,
    messageId: t.id
  })
}

function L(e, t) {
  (0, o.l8)({
    message: t,
    source: "message-actions"
  })
}