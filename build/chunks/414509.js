/** Chunk was on web.js **/
/** chunk id: 414509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fd: () => E,
  ZP: () => v
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk699516 = require("./699516.js"),
  Chunk70956 = require("./70956.js"),
  Chunk33194 = require("./33194.js");
require("./452369.js");
var Chunk189275 = require("./189275.jsx"),
  Chunk451092 = require("./451092.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./334431.js");
let f = 3 * Chunk70956.Z.Millis.DAY,
  p = 2 * Chunk70956.Z.Millis.DAY,
  _ = +Chunk70956.Z.Millis.HOUR;

function m(e) {
  let {
    channelId: t
  } = e;
  if (null == t) return;
  let n = i.Z.getChannel(t);
  if (null != n && n.isGroupDM()) {
    let e = n.recipients.filter(e => a.Z.isBlocked(e)),
      r = n.recipients.filter(e => a.Z.isIgnored(e));
    (e.length > 0 || r.length > 0) && !n.blockedUserWarningDismissed && !y(t) && (0, c.O)({
      channelId: t,
      blockedUserIds: e,
      ignoredUserIds: r
    })
  }
}

function h(e) {
  let {
    state: t
  } = e
}

function g() {
  var e;
  return (null != (e = (0, Chunk33194.km)()) ? module : 0) > Date.now() - _
}

function E(e) {
  return g() || Array.from(e).every(e => b(e, true))
}

function b(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return !!(!n && g()) || (null != (t = (0, l._$)(e)) ? t : 0) > Date.now() - p
}

function y(e) {
  var t;
  return (null != (t = (0, l.YF)(e)) ? t : 0) > Date.now() - f
}
class O extends Chunk147913.Z {
  handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
    let n = o.Z.getChannelId();
    e === n && null != i.Z.getChannel(e) && (b(t) || (0, u.H)(n, t))
  }
  constructor(...e) {
    super(...e), d(this, "actions", {
      CHANNEL_SELECT: m,
      APP_STATE_UPDATE: h
    })
  }
}
let v = new O