/** Chunk was on web.js **/
/** chunk id: 996861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Z: () => C,
  B8: () => P,
  F4: () => A,
  HH: () => x,
  Hd: () => R,
  Xl: () => D,
  dF: () => j,
  eM: () => U,
  fB: () => N,
  gK: () => M,
  mG: () => L,
  qe: () => k,
  rY: () => w,
  ts: () => G,
  zW: () => S
}), require("./255367.js"), require("./73800.js"), require("./481060.js");
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e) {
  let t = e.getGuildId();
  null != t && l.Z.open(t, v.pNK.ENGAGEMENT)
}

function A(e, t, n) {
  (0, m.JG)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function N(e, t) {
  p.default.track(v.rMx.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, m.JG)((0, h.wR)(e.guild_id, e.id, t.id))
}

function C(e, t, n) {
  t.state === v.yb.SEND_FAILED || n.shiftKey ? i.Z.deleteMessage(e.id, t.id, t.state === v.yb.SEND_FAILED) : o.Z.confirmDelete(e, t)
}

function R(e, t) {
  i.Z.startEditMessageRecord(e.id, t)
}

function P(e, t) {
  (0, y.Z)(e.id, t.id)
}

function w(e, t, n) {
  if (false === t.pinned) return void(n.shiftKey ? r.Z.pinMessage(e, t.id) : o.Z.confirmPin(e, t));
  n.shiftKey ? r.Z.unpinMessage(e, t.id) : o.Z.confirmUnpin(e, t)
}

function D(e, t) {
  (0, a.Z)(e.id, t.id)
}

function L(e, t) {
  (0, O.Z)(e, t, true, b.Z.getOptions(t.id))
}

function x(e, t, n) {
  let r = e.isPrivate(),
    i = t.author.id === f.default.getId();
  (0, c.fE)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !i,
    showMentionToggle: !r && !i
  }), g.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, {
    channelId: e.id
  })
}

function M(e, t) {
  (0, d.R6)(e, t, "Message")
}

function k(e, t) {
  let n = _.Z.getChannel(E.default.castMessageIdAsChannelId(t.id));
  null != n && (0, d.ok)(n)
}

function j(e, t) {
  (0, u.z)({
    channelId: e.id,
    messageId: t.id
  })
}

function U(e, t) {
  (0, u.x)({
    channelId: e.id,
    messageId: t.id
  })
}

function G(e, t) {
  (0, s.l8)({
    message: t,
    source: "message-actions"
  })
}