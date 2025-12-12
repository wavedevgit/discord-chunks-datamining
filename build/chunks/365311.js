/** Chunk was on web.js **/
/** chunk id: 365311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk232567 = require("./232567.js"),
  Chunk147913 = require("./147913.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk37812 = require("./37812.js"),
  Chunk981631 = require("./981631.js");

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
  let n = o.Z.getChannelId(),
    r = a.Z.getDMFromUserId(l.I);
  if (!t.hasUrgentMessages() || r === n) return p({
    channelId: n
  });
  d || (d = true, e())
}

function p(e) {
  let {
    channelId: t
  } = e, n = s.default.getCurrentUser(), i = t === a.Z.getDMFromUserId(l.I);
  null != n && n.hasUrgentMessages() && i && (d = false, r.mB(c.xW$.HAS_UNREAD_URGENT_MESSAGES, false))
}
class _ extends Chunk147913.Z {
  constructor(e) {
    super(), u(this, "handleShowUrgentMessageAlert", true), u(this, "actions", true), this.handleShowUrgentMessageAlert = e, this.actions = {
      POST_CONNECTION_OPEN: () => f(this.handleShowUrgentMessageAlert),
      MESSAGE_CREATE: () => f(this.handleShowUrgentMessageAlert),
      CHANNEL_SELECT: p
    }
  }
}