/** Chunk was on web.js **/
/** chunk id: 723765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk803306 = require("./803306.js"),
  Chunk439372 = require("./439372.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk716371 = require("./716371.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = false;

function f(e) {
  if (__OVERLAY__) return;
  let t = s.default.getCurrentUser();
  if (null == t) return;
  let n = o.A.getChannelId(),
    r = a.A.getDMFromUserId(l.K);
  if (!t.hasUrgentMessages() || r === n) return p({
    channelId: n
  });
  d || (d = true, e())
}

function p(e) {
  let {
    channelId: t
  } = e, n = s.default.getCurrentUser(), i = t === a.A.getDMFromUserId(l.K);
  null != n && n.hasUrgentMessages() && i && (d = false, r.lA(c.nhx.HAS_UNREAD_URGENT_MESSAGES, false))
}
class _ extends Chunk439372.A {
  constructor(e) {
    super(), u(this, "handleShowUrgentMessageAlert", true), u(this, "actions", true), this.handleShowUrgentMessageAlert = e, this.actions = {
      POST_CONNECTION_OPEN: () => f(this.handleShowUrgentMessageAlert),
      MESSAGE_CREATE: () => f(this.handleShowUrgentMessageAlert),
      CHANNEL_SELECT: p
    }
  }
}