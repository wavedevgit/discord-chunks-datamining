/** Chunk was on web.js **/
/** chunk id: 397776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk716578 = require("./716578.js"),
  Chunk237292 = require("./237292.js"),
  Chunk118910 = require("./118910.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  let {
    channelId: t
  } = e;
  if (null == t || !(0, s.mG)({
      location: "channel_select"
    }) || !(0, o.dg)()) returnfalse;
  let n = i.Z.getChannel(t);
  if (null == n || !n.isDM()) returnfalse;
  let r = (0, o.uu)(t);
  return null != r && ((0, l.a)({
    warningId: r.id,
    warningType: r.type,
    senderId: n.getRecipientId(),
    channelId: t
  }), true)
}

function d(e) {
  let {
    channels: t
  } = e;
  if (!(0, s.mG)({
      location: "channel_updates"
    }) || !(0, o.dg)()) returnfalse;
  let n = a.Z.getCurrentlySelectedChannelId();
  if (null == n) returnfalse;
  let r = t.find(e => e.id === n);
  if (null == r) returnfalse;
  let i = (0, o.uu)(r.id);
  return !!(null != i && r.isDM()) && ((0, l.a)({
    warningId: i.id,
    warningType: i.type,
    senderId: r.getRecipientId(),
    channelId: r.id
  }), true)
}
class f extends Chunk147913.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      CHANNEL_SELECT: u,
      CHANNEL_UPDATES: d
    })
  }
}
let p = new f