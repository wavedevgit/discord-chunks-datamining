/** Chunk was on web.js **/
/** chunk id: 837924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk765379 = require("./765379.js"),
  Chunk90644 = require("./90644.js"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk806246 = require("./806246.js"),
  Chunk890330 = require("./890330.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk712785 = require("./712785.jsx"),
  Chunk384481 = require("./384481.jsx"),
  Chunk652215 = require("./652215.js");

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
    onClose: A
  } = e, {
    voiceGuild: v,
    voiceChannel: S
  } = (0, a.cf)([p.A, _.A, f.A], () => {
    var e, n;
    let r = (0, s.A)(b);
    if (!r && (null == b ? true : b.type) !== E.$pd.HANG_STATUS) return {};
    let i = r ? null == (e = _.A.getVoiceStateForSession(t.id, null == b ? true : b.session_id)) ? true : e.channelId : null == (n = _.A.getVoiceStateForUser(t.id)) ? true : n.channelId,
      a = f.A.getChannel(i);
    return {
      voiceGuild: p.A.getGuild(null == a ? true : a.getGuildId()),
      voiceChannel: a
    }
  }), I = (0, d.v)("UserProfileActivityCardWrapper", S), T = (null == b ? true : b.type) === E.$pd.HANG_STATUS && I ? S : null;
  (0, c.h)(null == b ? true : b.application_id);
  let C = (0, a.bG)([l.A], () => (null == b ? true : b.application_id) != null ? l.A.getApplication(b.application_id) : (null == b ? true : b.name) != null ? l.A.getApplicationByName(b.name) : null);
  return (i.useEffect(() => {
    (null == b ? true : b.type) === E.$pd.HANG_STATUS && I && h.default.track(E.HAw.VIEW_HANG_STATUS, y({
      source: "UserProfilePopout",
      other_user_id: t.id
    }, (0, u.A)(null == T ? true : T.id)))
  }, [null == b ? true : b.type, I, null == T ? true : T.id, t.id]), (null == b ? true : b.type) !== E.$pd.CUSTOM_STATUS && ((null == b ? true : b.type) !== E.$pd.HANG_STATUS || I)) ? (0, o.A)(b) ? (0, r.jsx)(g.A, {
    user: t,
    currentUser: n,
    activity: b,
    className: O,
    onClose: A
  }) : (0, r.jsx)(m.A, {
    user: t,
    currentUser: n,
    activity: b,
    application: C,
    voiceGuild: v,
    voiceChannel: S,
    className: O,
    onClose: A
  }) : null
}