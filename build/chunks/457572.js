/** Chunk was on web.js **/
/** chunk id: 457572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk70956 = require("./70956.js"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js");

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
  } = o.Z.getCurrentConfig({
    location: "MessageRemindersNotificationManager"
  }, {
    autoTrackExposure: false
  });
  t && (r.Z.dispatch({
    type: "MESSAGE_REMINDER_DUE",
    savedMessage: e
  }), d())
}

function d() {
  var e;
  let {
    enabled: t
  } = Chunk2818.Z.getCurrentConfig({
    location: "MessageRemindersNotificationManager"
  }, {
    autoTrackExposure: false
  });
  if (!exports) return;
  null != c && clearTimeout(c);
  let n = Chunk768943.Z.getMessageReminders().find(e => null != e.saveData.dueAt && e.saveData.dueAt > new Date);
  if ((null == require || null == (e = require.saveData) ? true : module.dueAt) == null) {
    c = null;
    return
  }
  let r = Date.now() + Chunk70956.Z.Millis.WEEK;
  require.saveData.dueAt.getTime() > Chunk570140 || (c = setTimeout(() => u(require), require.saveData.dueAt.getTime() - Date.now()))
}
class f extends Chunk147913.Z {
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