/** Chunk was on web.js **/
/** chunk id: 16648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk461213 = require("./461213.js"),
  Chunk927813 = require("./927813.js"),
  Chunk728458 = require("./728458.js"),
  Chunk527776 = require("./527776.js"),
  Chunk31369 = require("./31369.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 5 * Chunk927813.A.Millis.MINUTE,
  h = .5 * Chunk927813.A.Millis.MINUTE;

function m() {
  return c.A.getCurrentConfig({
    location: "FriendOnlineTimer"
  }).useOnlineTimer
}

function g() {
  return c.A.getCurrentConfig({
    location: "FriendOnlineTimer"
  }).useTestTimerDuration ? h : _
}
async function E() {
  if (m()) try {
    await r.Bo.post({
      url: d.Rsh.USER_MEANINGFULLY_ONLINE,
      rejectWithError: true
    }), i.h.dispatch({
      type: "FRIEND_ONLINE_TIMER_REPORTED",
      timestampMs: Date.now()
    })
  } catch (e) {
    l.A.captureException(e, {
      tags: {
        app_context: "session_timer"
      }
    })
  }
}

function b(e) {
  return [f.cl.ONLINE, f.cl.STREAMING].includes(e)
}
class y extends Chunk439372.A {
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
      m() && u.A.isCooldownElapsed() && null == this.timerId && b(s.A.getStatus()) && (this.timerId = setTimeout(() => {
        this.timerId = null, !b(s.A.getStatus()) || u.A.isCooldownElapsed() && E()
      }, g()))
    }), p(this, "clear", () => {
      null != this.timerId && (clearTimeout(this.timerId), this.timerId = null)
    })
  }
}
let O = new y