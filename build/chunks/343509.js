/** Chunk was on web.js **/
/** chunk id: 343509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk927813 = require("./927813.js"),
  Chunk966597 = require("./966597.js"),
  Chunk85109 = require("./85109.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = null;

function u(e) {
  let {
    enabled: t
  } = o.A.getCurrentConfig({
    location: "MessageRemindersNotificationManager"
  }, {
    autoTrackExposure: false
  });
  t && (r.h.dispatch({
    type: "MESSAGE_REMINDER_DUE",
    savedMessage: e
  }), d())
}

function d() {
  var e;
  let {
    enabled: t
  } = o.A.getCurrentConfig({
    location: "MessageRemindersNotificationManager"
  }, {
    autoTrackExposure: false
  });
  if (!t) return;
  null != c && clearTimeout(c);
  let n = s.A.getMessageReminders().find(e => null != e.saveData.dueAt && e.saveData.dueAt > new Date);
  if ((null == n || null == (e = n.saveData) ? true : e.dueAt) == null) {
    c = null;
    return
  }
  let r = Date.now() + a.A.Millis.WEEK;
  n.saveData.dueAt.getTime() > r || (c = setTimeout(() => u(n), n.saveData.dueAt.getTime() - Date.now()))
}
class f extends Chunk439372.A {
  constructor(...e) {
    super(...e), l(this, "actions", {
      SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
      SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
      SAVED_MESSAGE_DELETE: () => this.handleUpdates()
    }), l(this, "handleUpdates", () => {
      d()
    })
  }
}
let p = new f