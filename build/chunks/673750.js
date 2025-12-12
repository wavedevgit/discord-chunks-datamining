/** Chunk was on web.js **/
/** chunk id: 673750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $V: () => A,
  Bz: () => P,
  ZP: () => x,
  hc: () => R
}), require("./539854.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk710845 = require("./710845.js"),
  Chunk432877 = require("./432877.js"),
  Chunk873741 = require("./873741.js"),
  Chunk931301 = require("./931301.js"),
  Chunk314897 = require("./314897.js"),
  Chunk866960 = require("./866960.js"),
  Chunk70956 = require("./70956.js"),
  Chunk403182 = require("./403182.js"),
  Chunk651655 = require("./651655.js"),
  Chunk861990 = require("./861990.js"),
  Chunk141795 = require("./141795.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var A = function(e) {
  return e[e.SEND = 0] = "SEND", e[e.EDIT = 1] = "EDIT", e[e.COMMAND = 2] = "COMMAND", e[e.SEND_ANNOUNCEMENT = 3] = "SEND_ANNOUNCEMENT", e
}({});
let N = e => 0 === e.type || 3 === e.type,
  P = e => 1 === e.type,
  R = e => N(e) ? e.message.nonce : P(e) ? e.message.messageId : e.message.data.id,
  w = [+Chunk70956.Z.Millis.MINUTE, 5 * Chunk70956.Z.Millis.MINUTE];
class D extends Chunk651655.Z {
  isFull() {
    return this.queue.length >= this.maxSize
  }
  drain(e, t) {
    switch (this.logger.log("Draining Message Queue with: ", e.type), e.type) {
      case 0:
        this.handleSend(e.message, t);
        break;
      case 3:
        this.handleSendAnnouncement(e.message, t);
        break;
      case 1:
        this.handleEdit(e.message, t);
        break;
      case 2:
        this.handleCommand(e.message, t)
    }
  }
  cancelRequest(e) {
    var t;
    this.logger.log("Cancel message send: ", e), null == (t = this.requests.get(e)) || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e)
  }
  cancelPendingSendRequests(e) {
    let t = [],
      n = [];
    for (; this.queue.length > 0;) {
      let r = this.queue.shift(),
        {
          message: i
        } = r;
      0 === i.type && i.message.channelId === e ? t.push(i.message) : n.push(r)
    }
    return this.queue.push(...n), this.logger.log("Cancel pending send requests", t.length), t
  }
  startQueueMetricTimers(e) {
    let t = w.map(e => setTimeout(() => {
      (0, s.yw)(b.rMx.SEND_MESSAGE_QUEUED, {
        queued_duration_ms: e
      })
    }, e));
    this.analyticsTimeouts.set(e, t)
  }
  cancelQueueMetricTimers(e) {
    var t;
    null == (t = this.analyticsTimeouts.get(e)) || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e)
  }
  createResponseHandler(e, t) {
    return n => {
      if (null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr) return t(null, n);
      if (null != n.body && (n.body.code === b.evJ.SLOWMODE_RATE_LIMITED || n.body.code === b.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)) t(null, n);
      else if (429 === n.status) {
        let e = parseInt(n.headers["retry-after"]);
        isNaN(e) ? t(null, n) : t({
          retryAfter: e * _.Z.Millis.SECOND
        })
      } else t(null, n)
    }
  }
  handleSend(e, t) {
    var n;
    let {
      channelId: r,
      analyticsLocation: i
    } = e, a = T(e, ["channelId", "analyticsLocation"]), s = null != (n = (0, d.Z)()) ? n : i, l = null != s ? {
      location: s
    } : true, f = (0, u.d)(), _ = v({
      mobile_network_type: p.Z.getType()
    }, a, null != f && {
      signal_strength: f
    });
    if (c.ZP.get("send_fail_100")) {
      this.logger.log("Skipping message send because send_fail_100 is enabled"), t(null, {
        ok: false,
        hasErr: false,
        status: 500,
        headers: {},
        body: "{}",
        text: "Simulated failure"
      });
      return
    }
    let m = this.createResponseHandler(e.nonce, t),
      h = new AbortController;
    this.startQueueMetricTimers(e.nonce), o.tn.post(I(v({
      url: b.ANM.MESSAGES(r),
      body: _,
      context: l,
      oldFormErrors: true
    }, y.hs), {
      signal: h.signal,
      rejectWithError: true,
      onRequestCreated: () => {
        null != e.nonce && this.requests.set(e.nonce, h)
      }
    }), m)
  }
  handleSendAnnouncement(e, t) {
    var n;
    let {
      channelId: r,
      analyticsLocation: i
    } = e, a = T(e, ["channelId", "analyticsLocation"]), s = null != (n = (0, d.Z)()) ? n : i, l = null != s ? {
      location: s
    } : true, f = (0, u.d)(), _ = v({
      mobile_network_type: p.Z.getType()
    }, a, null != f && {
      signal_strength: f
    });
    if (c.ZP.get("send_fail_100")) {
      this.logger.log("Skipping message send because send_fail_100 is enabled"), t(null, {
        ok: false,
        hasErr: false,
        status: 500,
        headers: {},
        body: "{}",
        text: "Simulated failure"
      });
      return
    }
    let m = this.createResponseHandler(e.nonce, t),
      h = new AbortController;
    this.startQueueMetricTimers(e.nonce), o.tn.post(I(v({
      url: b.ANM.MESSAGES_ANNOUNCEMENT(r),
      body: _,
      context: l,
      oldFormErrors: true
    }, y.hs), {
      signal: h.signal,
      rejectWithError: true,
      onRequestCreated: () => {
        null != e.nonce && this.requests.set(e.nonce, h)
      }
    }), m)
  }
  handleCommand(e, t) {
    let {
      applicationId: n,
      guildId: r,
      channelId: s,
      data: l,
      nonce: c,
      attachments: u,
      maxSizeCallback: d,
      analytics_location: p,
      sectionName: _,
      source: h
    } = e, y = {
      type: a.B8.APPLICATION_COMMAND,
      application_id: n,
      guild_id: r,
      channel_id: s,
      session_id: f.default.getSessionId(),
      data: l,
      nonce: c,
      analytics_location: p,
      section_name: _,
      source: h
    };
    null != u && (y.data.attachments = u.map((e, t) => (i()(e.status === E.mw.COMPLETED, "Uploads must be staged before trying to send a message"), (0, g.B)(e, t))));
    let O = new AbortController;
    o.tn.post({
      url: b.ANM.INTERACTIONS,
      body: y,
      signal: O.signal,
      rejectWithError: true,
      onRequestCreated: e => {
        this.requests.set(c, O), e.on("progress", e => {
          let {
            total: t
          } = e, n = (0, m.dg)(r);
          null != t && t > n && (this.cancelRequest(c), null == d || d(n))
        })
      }
    }, this.createResponseHandler(c, t))
  }
  constructor(e = 5) {
    super(new l.Z("MessageQueue")), O(this, "maxSize", true), O(this, "requests", true), O(this, "analyticsTimeouts", true), O(this, "handleEdit", true), this.maxSize = e, this.requests = new Map, this.analyticsTimeouts = new Map, this.handleEdit = (e, t) => {
      var {
        channelId: n,
        messageId: r,
        isCrossposted: i
      } = e, a = T(e, ["channelId", "messageId", "isCrossposted"]);
      let s = new AbortController,
        l = this.createResponseHandler(r, t),
        c = {
          url: b.ANM.MESSAGE(n, r),
          body: a,
          retries: 1,
          oldFormErrors: true,
          signal: s.signal,
          rejectWithError: true,
          onRequestCreated: () => {
            this.requests.set(r, s)
          }
        };
      i && (c.failImmediatelyWhenRateLimited = true), o.tn.patch(c, l)
    }
  }
}
let x = new D