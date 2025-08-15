/** Chunk was on 96750 **/
/** chunk id: 717881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => j,
  Z: () => x
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
  Chunk855364 = require("./855364.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  let {
    type: t,
    source: n,
    activity: i,
    applicationStream: l,
    user: o,
    guildId: s,
    channelId: u,
    onAction: d,
    actionColor: f
  } = e;
  return (0, r.jsx)(c.Z, {
    className: (0, v.l)(y, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: l,
    user: o,
    guildId: s,
    look: a.zx.Looks.FILLED,
    color: null != f ? f : a.zx.Colors.PRIMARY,
    channelId: u,
    onAction: d
  })
}
let j = Chunk387903.Z.Types,
  x = function(e) {
    var {
      activity: t,
      user: n,
      useStoreStream: a = true,
      showActions: c = true,
      hideHeader: v = false,
      showChannelDetails: y = false
    } = e, j = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]);
    let x = (0, l.e7)([h.Z, m.Z], () => {
        var e;
        return m.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(n.id)) ? true : e.channelId)
      }),
      E = (0, d.E)("UserActivityContainer", x),
      P = (0, l.e7)([p.Z], () => a ? p.Z.getAnyStreamForUser(n.id) : null),
      C = (null == t ? true : t.type) === _.IIU.HANG_STATUS && E ? x : null,
      T = (0, l.e7)([g.Z, h.Z, m.Z], () => {
        var e, r;
        return (0, o.Z)(t, _.xjy.EMBEDDED) ? g.Z.getGuild(null == (e = m.Z.getChannel(null == (r = h.Z.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != C ? g.Z.getGuild(C.getGuildId()) : null
      }),
      N = (0, l.e7)([g.Z], () => null != P ? g.Z.getGuild(P.guildId) : null),
      A = (0, l.e7)([u.Z], () => {
        if (null != t)
          if (null != t.application_id) return u.Z.getApplication(t.application_id);
          else return u.Z.getApplicationByName(t.name);
        return null
      });
    return (i.useEffect(() => {
      (null == t ? true : t.type) === _.IIU.HANG_STATUS && E && b.default.track(_.rMx.VIEW_HANG_STATUS, {
        source: "UserProfilePopout",
        guild_id: null == C ? true : C.guild_id,
        channel_id: null == C ? true : C.id
      })
    }, [null == t ? true : t.type, E, C]), (null == t ? true : t.type) !== _.IIU.HANG_STATUS || E) ? (0, r.jsx)(s.Z, S(O({}, j), {
      activity: t,
      user: n,
      application: A,
      hideHeader: v,
      activityGuild: null != T ? T : N,
      showChannelDetails: y,
      channel: y ? x : true,
      renderActions: c ? () => (0, r.jsx)(I, S(O({}, j), {
        applicationStream: P,
        activity: t,
        user: n
      })) : null,
      onOpenSpotifyTrack: f.aG,
      onOpenSpotifyArtist: f.d$,
      onOpenSpotifyAlbum: f.Z5
    })) : null
  }