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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  let {
    user: t,
    currentUser: n,
    activity: y,
    className: O,
    onClose: v
  } = e, {
    voiceGuild: A,
    voiceChannel: I
  } = (0, a.cf)([p.A, _.A, f.A], () => {
    var e, n;
    let r = (0, s.A)(y);
    if (!r && (null == y ? true : y.type) !== E.$pd.HANG_STATUS) return {};
    let i = r ? null == (e = _.A.getVoiceStateForSession(t.id, null == y ? true : y.session_id)) ? true : e.channelId : null == (n = _.A.getVoiceStateForUser(t.id)) ? true : n.channelId,
      a = f.A.getChannel(i);
    return {
      voiceGuild: p.A.getGuild(null == a ? true : a.getGuildId()),
      voiceChannel: a
    }
  }), S = (0, d.v)("UserProfileActivityCardWrapper", I), T = (null == y ? true : y.type) === E.$pd.HANG_STATUS && S ? I : null;
  (0, c.h)(null == y ? true : y.application_id);
  let C = (0, a.bG)([l.A], () => (null == y ? true : y.application_id) != null ? l.A.getApplication(y.application_id) : (null == y ? true : y.name) != null ? l.A.getApplicationByName(y.name) : null);
  return (i.useEffect(() => {
    (null == y ? true : y.type) === E.$pd.HANG_STATUS && S && h.default.track(E.HAw.VIEW_HANG_STATUS, b({
      source: "UserProfilePopout",
      other_user_id: t.id
    }, (0, u.A)(null == T ? true : T.id)))
  }, [null == y ? true : y.type, S, null == T ? true : T.id, t.id]), (null == y ? true : y.type) !== E.$pd.CUSTOM_STATUS && ((null == y ? true : y.type) !== E.$pd.HANG_STATUS || S)) ? (0, o.A)(y) ? (0, r.jsx)(g.A, {
    user: t,
    currentUser: n,
    activity: y,
    className: O,
    onClose: v
  }) : (0, r.jsx)(m.A, {
    user: t,
    currentUser: n,
    activity: y,
    application: C,
    voiceGuild: A,
    voiceChannel: I,
    className: O,
    onClose: v
  }) : null
}