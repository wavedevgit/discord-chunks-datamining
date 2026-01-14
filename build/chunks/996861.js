/** Chunk was on 37220 **/
/** chunk id: 996861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $Z: () => _,
  B8: () => Z,
  F4: () => P,
  HH: () => N,
  Hd: () => T,
  Xl: () => x,
  dF: () => C,
  eM: () => L,
  fB: () => I,
  gK: () => M,
  mG: () => A,
  qe: () => D,
  rY: () => w,
  ts: () => k,
  zW: () => E
}), require("./54381.js"), require("./473749.js"), require("./481060.js");
var Chunk332148 = require("./332148.js"),
  Chunk904245 = require("./904245.js"),
  Chunk742828 = require("./742828.jsx"),
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
  Chunk819514 = require("./819514.jsx"),
  Chunk981631 = require("./981631.js");

function E(e) {
  let t = e.getGuildId();
  null != t && a.Z.open(t, S.pNK.ENGAGEMENT)
}

function P(e, t, n) {
  (0, p.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function I(e, t) {
  g.default.track(S.rMx.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, p.JG)((0, b.wR)(e.guild_id, e.id, t.id))
}

function _(e, t, n) {
  t.state === S.yb.SEND_FAILED || n.shiftKey ? i.Z.deleteMessage(e.id, t.id, t.state === S.yb.SEND_FAILED) : j.Z.confirmDelete(e, t)
}

function T(e, t) {
  i.Z.startEditMessageRecord(e.id, t)
}

function Z(e, t) {
  (0, h.Z)(e.id, t.id)
}

function w(e, t, n) {
  if (false === t.pinned) return void(n.shiftKey ? r.Z.pinMessage(e, t.id) : j.Z.confirmPin(e, t));
  n.shiftKey ? r.Z.unpinMessage(e, t.id) : j.Z.confirmUnpin(e, t)
}

function x(e, t) {
  (0, l.Z)(e.id, t.id)
}

function A(e, t) {
  (0, v.Z)(e, t, true, O.Z.getOptions(t.id))
}

function N(e, t, n) {
  let r = e.isPrivate(),
    i = t.author.id === d.default.getId();
  (0, s.fE)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !i,
    showMentionToggle: !r && !i
  }), m.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
    channelId: e.id
  })
}

function M(e, t) {
  (0, u.R6)(e, t, "Message")
}

function D(e, t) {
  let n = f.Z.getChannel(y.default.castMessageIdAsChannelId(t.id));
  null != n && (0, u.ok)(n)
}

function C(e, t) {
  (0, c.z)({
    channelId: e.id,
    messageId: t.id
  })
}

function L(e, t) {
  (0, c.x)({
    channelId: e.id,
    messageId: t.id
  })
}

function k(e, t) {
  (0, o.l8)({
    message: t,
    source: "message-actions"
  })
}