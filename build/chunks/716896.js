/** Chunk was on web.js **/
/** chunk id: 716896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk592125 = require("./592125.js"),
  Chunk109590 = require("./109590.js"),
  Chunk176505 = require("./176505.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk147913.Z {
  handleChannelPreload(e) {
    let {
      channelId: t
    } = e;
    if ((0, o.AB)(t)) return;
    let n = i.Z.getChannel(t);
    null != n && n.isForumLikeChannel() && (0, a.EB)(n)
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      CHANNEL_PRELOAD: this.handleChannelPreload
    })
  }
}
let c = new l