/** Chunk was on web.js **/
/** chunk id: 158160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => v,
  oE: () => E
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk927813 = require("./927813.js"),
  Chunk549022 = require("./549022.js");
require("./741812.js");
var Chunk522419 = require("./522419.jsx"),
  Chunk227724 = require("./227724.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./100544.js");
let f = 3 * Chunk927813.A.Millis.DAY,
  p = 2 * Chunk927813.A.Millis.DAY,
  _ = +Chunk927813.A.Millis.HOUR;

function h(e) {
  let {
    channelId: t
  } = e;
  if (null == t) return;
  let n = i.A.getChannel(t);
  if (null != n && n.isGroupDM()) {
    let e = n.recipients.filter(e => o.A.isBlocked(e)),
      r = n.recipients.filter(e => o.A.isIgnored(e));
    (e.length > 0 || r.length > 0) && !n.blockedUserWarningDismissed && !b(t) && (0, c.y)({
      channelId: t,
      blockedUserIds: e,
      ignoredUserIds: r
    })
  }
}

function m(e) {
  let {
    state: t
  } = e
}

function g() {
  var e;
  return (null != (e = (0, l.Iz)()) ? e : 0) > Date.now() - _
}

function E(e) {
  return g() || Array.from(e).every(e => y(e, true))
}

function y(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return !!(!n && g()) || (null != (t = (0, l.kP)(e)) ? t : 0) > Date.now() - p
}

function b(e) {
  var t;
  return (null != (t = (0, l.Oz)(e)) ? t : 0) > Date.now() - f
}
class O extends Chunk439372.A {
  handleBlockedOrIgnoredUserVoiceChannelJoin(e, t) {
    let n = a.A.getChannelId();
    e !== n || null != i.A.getChannel(e) && (y(t) || (0, u.k)(n, t))
  }
  constructor(...e) {
    super(...e), d(this, "actions", {
      CHANNEL_SELECT: h,
      APP_STATE_UPDATE: m
    })
  }
}
let v = new O