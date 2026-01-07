/** Chunk was on web.js **/
/** chunk id: 265008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
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

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 5 * Chunk70956.Z.Millis.MINUTE,
  m = .5 * Chunk70956.Z.Millis.MINUTE;

function h() {
  return c.Z.getCurrentConfig({
    location: "FriendOnlineTimer"
  }).useOnlineTimer
}

function g() {
  return c.Z.getCurrentConfig({
    location: "FriendOnlineTimer"
  }).useTestTimerDuration ? m : _
}
async function E() {
  if (h()) try {
    await r.tn.post({
      url: d.ANM.USER_MEANINGFULLY_ONLINE,
      rejectWithError: true
    }), i.Z.dispatch({
      type: "FRIEND_ONLINE_TIMER_REPORTED",
      timestampMs: Date.now()
    })
  } catch (e) {
    l.Z.captureException(e, {
      tags: {
        app_context: "session_timer"
      }
    })
  }
}

function b(e) {
  return [f.Sk.ONLINE, f.Sk.STREAMING].includes(e)
}
class y extends Chunk147913.Z {
  _initialize() {}
  _terminate() {
    this.clear()
  }
  constructor(...e) {
    super(...e), p(this, "timerId", null), p(this, "actions", {
      POST_CONNECTION_OPEN: () => this.start(),
      CONNECTION_RESUMED: () => this.start(),
      CONNECTION_CLOSED: () => this.clear(),
      CONNECTION_INTERRUPTED: () => this.clear(),
      SELF_PRESENCE_STORE_UPDATE: () => this.start()
    }), p(this, "start", () => {
      h() && u.Z.isCooldownElapsed() && null == this.timerId && b(o.Z.getStatus()) && (this.timerId = setTimeout(() => {
        this.timerId = null, b(o.Z.getStatus()) && u.Z.isCooldownElapsed() && E()
      }, g()))
    }), p(this, "clear", () => {
      null != this.timerId && (clearTimeout(this.timerId), this.timerId = null)
    })
  }
}
let O = new y