/** Chunk was on web.js **/
/** chunk id: 536437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk835245 = require("./835245.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  return {
    channelId: e,
    sessionId: (0, r.A)()
  }
}
class s {
  getForumChannelSessionId(e) {
    return null == this.session && (this.session = a(e)), this.session.channelId !== e && (this.session = a(e)), this.session.sessionId
  }
  constructor() {
    i(this, "session", true)
  }
}
let o = new s