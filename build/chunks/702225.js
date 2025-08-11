/** Chunk was on web.js **/
/** chunk id: 702225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk772848 = require("./772848.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  return {
    channelId: e,
    sessionId: (0, r.Z)()
  }
}
class a {
  getForumChannelSessionId(e) {
    return null == this.session && (this.session = o(e)), this.session.channelId !== e && (this.session = o(e)), this.session.sessionId
  }
  constructor() {
    i(this, "session", true)
  }
}
let s = new a