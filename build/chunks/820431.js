/** Chunk was on web.js **/
/** chunk id: 820431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk734057 = require("./734057.js"),
  Chunk473503 = require("./473503.js"),
  Chunk746080 = require("./746080.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk439372.A {
  handleChannelPreload(e) {
    let {
      channelId: t
    } = e;
    if ((0, o.jq)(t)) return;
    let n = i.A.getChannel(t);
    null != n && n.isForumLikeChannel() && (0, a.kB)(n)
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      CHANNEL_PRELOAD: this.handleChannelPreload
    })
  }
}
let c = new l