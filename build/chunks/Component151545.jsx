/** Chunk was on web.js **/
/** chunk id: 151545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk699263 = require("./699263.js"),
  Chunk741570 = require("./741570.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk409057 = require("./409057.jsx"),
  Chunk128277 = require("./128277.jsx"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  let {
    user: t,
    currentUser: n,
    activity: b,
    className: O,
    onClose: v
  } = e, {
    voiceGuild: S,
    voiceChannel: I
  } = (0, a.cj)([p.Z, _.Z, f.Z], () => {
    var e, n;
    let r = (0, o.Z)(b);
    if (!r && (null == b ? true : b.type) !== E.IIU.HANG_STATUS) return {};
    let i = r ? null == (e = _.Z.getVoiceStateForSession(t.id, null == b ? true : b.session_id)) ? true : e.channelId : null == (n = _.Z.getVoiceStateForUser(t.id)) ? true : n.channelId,
      a = f.Z.getChannel(i);
    return {
      voiceGuild: p.Z.getGuild(null == a ? true : a.getGuildId()),
      voiceChannel: a
    }
  }), T = (0, d.E)("UserProfileActivityCardWrapper", I), C = (null == b ? true : b.type) === E.IIU.HANG_STATUS && T ? I : null;
  (0, c.q)(null == b ? true : b.application_id);
  let A = (0, a.e7)([l.Z], () => (null == b ? true : b.application_id) != null ? l.Z.getApplication(b.application_id) : (null == b ? true : b.name) != null ? l.Z.getApplicationByName(b.name) : null);
  return (i.useEffect(() => {
    (null == b ? true : b.type) === E.IIU.HANG_STATUS && T && h.default.track(E.rMx.VIEW_HANG_STATUS, y({
      source: "UserProfilePopout",
      other_user_id: t.id
    }, (0, u.Z)(null == C ? true : C.id)))
  }, [null == b ? true : b.type, T, null == C ? true : C.id, t.id]), (null == b ? true : b.type) !== E.IIU.CUSTOM_STATUS && ((null == b ? true : b.type) !== E.IIU.HANG_STATUS || T)) ? (0, s.Z)(b) ? (0, r.jsx)(g.Z, {
    user: t,
    currentUser: n,
    activity: b,
    className: O,
    onClose: v
  }) : (0, r.jsx)(m.Z, {
    user: t,
    currentUser: n,
    activity: b,
    application: A,
    voiceGuild: S,
    voiceChannel: I,
    className: O,
    onClose: v
  }) : null
}