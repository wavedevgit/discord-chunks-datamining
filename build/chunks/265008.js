/** Chunk was on web.js **/
/** chunk id: 265008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk885110 = require("./885110.js"),
  Chunk70956 = require("./70956.js"),
  Chunk960048 = require("./960048.js"),
  Chunk290505 = require("./290505.js"),
  Chunk395687 = require("./395687.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = .5 * Chunk70956.Z.Millis.MINUTE;

function h() {
  return Chunk290505.Z.getCurrentConfig({
    location: "FriendOnlineTimer"
  }).useOnlineTimer
}
async function m() {
  if (h()) try {
    await Chunk544891.tn.post({
      url: Chunk981631.ANM.USER_MEANINGFULLY_ONLINE,
      rejectWithError: true
    }), Chunk570140.Z.dispatch({
      type: "FRIEND_ONLINE_TIMER_REPORTED",
      timestampMs: Date.now()
    })
  } catch (e) {
    Chunk960048.Z.captureException(module, {
      tags: {
        app_context: "session_timer"
      }
    })
  }
}

function g(e) {
  return [f.Sk.ONLINE, f.Sk.STREAMING].includes(e)
}
class E extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    this.clear()
  }
  constructor(...e) {
    super(...e), _(this, "timerId", null), _(this, "actions", {
      POST_CONNECTION_OPEN: () => this.start(),
      CONNECTION_RESUMED: () => this.start(),
      CONNECTION_CLOSED: () => this.clear(),
      CONNECTION_INTERRUPTED: () => this.clear(),
      SELF_PRESENCE_STORE_UPDATE: () => this.start()
    }), _(this, "start", () => {
      h() && u.Z.isCooldownElapsed() && null == this.timerId && g(o.Z.getStatus()) && (this.timerId = setTimeout(() => {
        this.timerId = null, g(o.Z.getStatus()) && u.Z.isCooldownElapsed() && m()
      }, p))
    }), _(this, "clear", () => {
      null != this.timerId && (clearTimeout(this.timerId), this.timerId = null)
    })
  }
}
let b = new E