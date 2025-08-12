/** Chunk was on web.js **/
/** chunk id: 717881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => R,
  Z: () => P
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk620662 = require("./620662.js"),
  Chunk387903 = require("./387903.jsx"),
  Chunk850827 = require("./850827.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk741570 = require("./741570.js"),
  Chunk952164 = require("./952164.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk153066 = require("./153066.js"),
  Chunk981631 = require("./981631.js"),
  Chunk685376 = require("./685376.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function N(e) {
  let {
    type: t,
    source: n,
    activity: i,
    applicationStream: o,
    user: s,
    guildId: l,
    channelId: u,
    onAction: d,
    actionColor: f
  } = e;
  return (0, r.jsx)(c.Z, {
    className: (0, E.l)(y, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: o,
    user: s,
    guildId: l,
    look: a.zx.Looks.FILLED,
    color: null != f ? f : a.zx.Colors.PRIMARY,
    channelId: u,
    onAction: d
  })
}

function C(e) {
  var {
    activity: t,
    user: n,
    useStoreStream: a = true,
    showActions: c = true,
    hideHeader: E = false,
    showChannelDetails: y = false
  } = e, O = S(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]);
  let I = (0, o.e7)([m.Z, p.Z], () => {
      var e;
      return p.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(n.id)) ? true : e.channelId)
    }),
    A = (0, d.E)("UserActivityContainer", I),
    C = (0, o.e7)([_.Z], () => a ? _.Z.getAnyStreamForUser(n.id) : null),
    R = (null == t ? true : t.type) === b.IIU.HANG_STATUS && A ? I : null,
    P = (0, o.e7)([h.Z, m.Z, p.Z], () => {
      var e, r;
      return (0, s.Z)(t, b.xjy.EMBEDDED) ? h.Z.getGuild(null == (e = p.Z.getChannel(null == (r = m.Z.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != R ? h.Z.getGuild(R.getGuildId()) : null
    }),
    w = (0, o.e7)([h.Z], () => null != C ? h.Z.getGuild(C.guildId) : null),
    D = (0, o.e7)([u.Z], () => {
      if (null != t)
        if (null != t.application_id) return u.Z.getApplication(t.application_id);
        else return u.Z.getApplicationByName(t.name);
      return null
    });
  return (i.useEffect(() => {
    (null == t ? true : t.type) === b.IIU.HANG_STATUS && A && g.default.track(b.rMx.VIEW_HANG_STATUS, {
      source: "UserProfilePopout",
      guild_id: null == R ? true : R.guild_id,
      channel_id: null == R ? true : R.id
    })
  }, [null == t ? true : t.type, A, R]), (null == t ? true : t.type) !== b.IIU.HANG_STATUS || A) ? (0, r.jsx)(l.Z, T(v({}, O), {
    activity: t,
    user: n,
    application: D,
    hideHeader: E,
    activityGuild: null != P ? P : w,
    showChannelDetails: y,
    channel: y ? I : true,
    renderActions: c ? () => (0, r.jsx)(N, T(v({}, O), {
      applicationStream: C,
      activity: t,
      user: n
    })) : null,
    onOpenSpotifyTrack: f.aG,
    onOpenSpotifyArtist: f.d$,
    onOpenSpotifyAlbum: f.Z5
  })) : null
}
let R = Chunk387903.Z.Types,
  P = C