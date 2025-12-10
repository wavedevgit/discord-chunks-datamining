/** Chunk was on web.js **/
/** chunk id: 717881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => P,
  Z: () => R
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk620662 = require("./620662.js"),
  Chunk942596 = require("./942596.jsx"),
  Chunk850827 = require("./850827.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk699263 = require("./699263.js"),
  Chunk741570 = require("./741570.js"),
  Chunk952164 = require("./952164.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk153066 = require("./153066.js"),
  Chunk981631 = require("./981631.js"),
  Chunk855364 = require("./855364.js");

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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function A(e) {
  let {
    type: t,
    source: n,
    activity: i,
    applicationStream: a,
    user: o,
    guildId: s,
    channelId: c,
    onAction: u
  } = e;
  return (0, r.jsx)(l.Z, {
    className: (0, E.l)(y, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: a,
    user: o,
    guildId: s,
    buttonVariant: "primary",
    channelId: c,
    onAction: u
  })
}

function N(e) {
  var {
    activity: t,
    user: n,
    useStoreStream: l = true,
    showActions: E = true,
    hideHeader: y = false,
    showChannelDetails: O = false
  } = e, S = T(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]);
  let C = (0, a.e7)([h.Z, _.Z], () => {
      var e;
      return _.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(n.id)) ? true : e.channelId)
    }),
    N = (0, d.E)("UserActivityContainer", C),
    P = (0, a.e7)([p.Z], () => l ? p.Z.getAnyStreamForUser(n.id) : null),
    R = (null == t ? true : t.type) === b.IIU.HANG_STATUS && N ? C : null,
    w = (0, a.e7)([m.Z, h.Z, _.Z], () => {
      var e, r;
      return (0, o.Z)(t, b.xjy.EMBEDDED) ? m.Z.getGuild(null == (e = _.Z.getChannel(null == (r = h.Z.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != R ? m.Z.getGuild(R.getGuildId()) : null
    }),
    D = (0, a.e7)([m.Z], () => null != P ? m.Z.getGuild(P.guildId) : null),
    x = (0, a.e7)([c.Z], () => {
      if (null != t)
        if (null != t.application_id) return c.Z.getApplication(t.application_id);
        else return c.Z.getApplicationByName(t.name);
      return null
    });
  return (i.useEffect(() => {
    (null == t ? true : t.type) === b.IIU.HANG_STATUS && N && g.default.track(b.rMx.VIEW_HANG_STATUS, v({
      source: "UserActivity",
      other_user_id: n.id
    }, (0, u.Z)(null == R ? true : R.id)))
  }, [null == t ? true : t.type, N, R, n.id]), (null == t ? true : t.type) !== b.IIU.HANG_STATUS || N) ? (0, r.jsx)(s.Z, I(v({}, S), {
    activity: t,
    user: n,
    application: x,
    hideHeader: y,
    activityGuild: null != w ? w : D,
    showChannelDetails: O,
    channel: O ? C : true,
    renderActions: E ? () => (0, r.jsx)(A, I(v({}, S), {
      applicationStream: P,
      activity: t,
      user: n
    })) : null,
    onOpenSpotifyTrack: f.aG,
    onOpenSpotifyArtist: f.d$,
    onOpenSpotifyAlbum: f.Z5
  })) : null
}
let P = Chunk942596.Z.Types,
  R = N