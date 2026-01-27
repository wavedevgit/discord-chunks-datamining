/** Chunk was on web.js **/
/** chunk id: 10589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk557279 = require("./557279.js"),
  Chunk617641 = require("./617641.js"),
  Chunk420738 = require("./420738.jsx");

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
  if (null == t || !(0, s.wv)({
      location: "channel_select"
    }) || !(0, o.gz)()) returnfalse;
  let n = i.A.getChannel(t);
  if (null == n || !n.isDM()) returnfalse;
  let r = (0, o.Di)(t);
  return null != r && ((0, l.U)({
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
  if (!(0, s.wv)({
      location: "channel_updates"
    }) || !(0, o.gz)()) returnfalse;
  let n = a.A.getCurrentlySelectedChannelId();
  if (null == n) returnfalse;
  let r = t.find(e => e.id === n);
  if (null == r) returnfalse;
  let i = (0, o.Di)(r.id);
  return !!(null != i && r.isDM()) && ((0, l.U)({
    warningId: i.id,
    warningType: i.type,
    senderId: r.getRecipientId(),
    channelId: r.id
  }), true)
}
class f extends Chunk439372.A {
  constructor(...e) {
    super(...e), c(this, "actions", {
      CHANNEL_SELECT: u,
      CHANNEL_UPDATES: d
    })
  }
}
let p = new f