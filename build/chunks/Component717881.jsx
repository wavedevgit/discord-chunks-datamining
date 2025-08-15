/** Chunk was on 96750 **/
/** chunk id: 717881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => x,
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function j(e, t) {
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

function S(e) {
  let {
    type: t,
    source: n,
    activity: i,
    applicationStream: l,
    user: o,
    guildId: s,
    channelId: u,
    onAction: d,
    actionColor: p
  } = e;
  return (0, r.jsx)(c.Z, {
    className: (0, b.l)(y, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: l,
    user: o,
    guildId: s,
    look: a.zx.Looks.FILLED,
    color: null != p ? p : a.zx.Colors.PRIMARY,
    channelId: u,
    onAction: d
  })
}
let x = Chunk387903.Z.Types,
  I = function(e) {
    var {
      activity: t,
      user: n,
      useStoreStream: a = true,
      showActions: c = true,
      hideHeader: b = false,
      showChannelDetails: y = false
    } = e, x = function(e, t) {
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
    let I = (0, l.e7)([v.Z, m.Z], () => {
        var e;
        return m.Z.getChannel(null == (e = v.Z.getVoiceStateForUser(n.id)) ? true : e.channelId)
      }),
      P = (0, d.E)("UserActivityContainer", I),
      C = (0, l.e7)([f.Z], () => a ? f.Z.getAnyStreamForUser(n.id) : null),
      E = (null == t ? true : t.type) === h.IIU.HANG_STATUS && P ? I : null,
      w = (0, l.e7)([g.Z, v.Z, m.Z], () => {
        var e, r;
        return (0, o.Z)(t, h.xjy.EMBEDDED) ? g.Z.getGuild(null == (e = m.Z.getChannel(null == (r = v.Z.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != E ? g.Z.getGuild(E.getGuildId()) : null
      }),
      T = (0, l.e7)([g.Z], () => null != C ? g.Z.getGuild(C.guildId) : null),
      N = (0, l.e7)([u.Z], () => {
        if (null != t)
          if (null != t.application_id) return u.Z.getApplication(t.application_id);
          else return u.Z.getApplicationByName(t.name);
        return null
      });
    return (i.useEffect(() => {
      (null == t ? true : t.type) === h.IIU.HANG_STATUS && P && _.default.track(h.rMx.VIEW_HANG_STATUS, {
        source: "UserProfilePopout",
        guild_id: null == E ? true : E.guild_id,
        channel_id: null == E ? true : E.id
      })
    }, [null == t ? true : t.type, P, E]), (null == t ? true : t.type) !== h.IIU.HANG_STATUS || P) ? (0, r.jsx)(s.Z, j(O({}, x), {
      activity: t,
      user: n,
      application: N,
      hideHeader: b,
      activityGuild: null != w ? w : T,
      showChannelDetails: y,
      channel: y ? I : true,
      renderActions: c ? () => (0, r.jsx)(S, j(O({}, x), {
        applicationStream: C,
        activity: t,
        user: n
      })) : null,
      onOpenSpotifyTrack: p.aG,
      onOpenSpotifyArtist: p.d$,
      onOpenSpotifyAlbum: p.Z5
    })) : null
  }