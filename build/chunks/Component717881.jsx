/** Chunk was on web.js **/
/** chunk id: 717881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => R,
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function C(e) {
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
  } = e, I = S(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]);
  let A = (0, a.e7)([m.Z, p.Z], () => {
      var e;
      return p.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(n.id)) ? true : e.channelId)
    }),
    N = (0, d.E)("UserActivityContainer", A),
    R = (0, a.e7)([_.Z], () => l ? _.Z.getAnyStreamForUser(n.id) : null),
    P = (null == t ? true : t.type) === b.IIU.HANG_STATUS && N ? A : null,
    D = (0, a.e7)([h.Z, m.Z, p.Z], () => {
      var e, r;
      return (0, o.Z)(t, b.xjy.EMBEDDED) ? h.Z.getGuild(null == (e = p.Z.getChannel(null == (r = m.Z.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != P ? h.Z.getGuild(P.getGuildId()) : null
    }),
    w = (0, a.e7)([h.Z], () => null != R ? h.Z.getGuild(R.guildId) : null),
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
    }, (0, u.Z)(null == P ? true : P.id)))
  }, [null == t ? true : t.type, N, P, n.id]), (null == t ? true : t.type) !== b.IIU.HANG_STATUS || N) ? (0, r.jsx)(s.Z, T(v({}, I), {
    activity: t,
    user: n,
    application: x,
    hideHeader: y,
    activityGuild: null != D ? D : w,
    showChannelDetails: O,
    channel: O ? A : true,
    renderActions: E ? () => (0, r.jsx)(C, T(v({}, I), {
      applicationStream: R,
      activity: t,
      user: n
    })) : null,
    onOpenSpotifyTrack: f.aG,
    onOpenSpotifyArtist: f.d$,
    onOpenSpotifyAlbum: f.Z5
  })) : null
}
let R = Chunk942596.Z.Types,
  P = N