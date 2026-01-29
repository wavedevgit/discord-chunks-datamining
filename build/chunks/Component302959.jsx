/** Chunk was on 6500 **/
/** chunk id: 302959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I,
  M: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk833349 = require("./833349.js"),
  Chunk153331 = require("./153331.jsx"),
  Chunk592182 = require("./592182.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk806246 = require("./806246.js"),
  Chunk890330 = require("./890330.js"),
  Chunk172710 = require("./172710.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk821589 = require("./821589.js"),
  Chunk652215 = require("./652215.js"),
  Chunk654471 = require("./654471.js");

function v(e) {
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

function O(e, t) {
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

function j(e) {
  let {
    type: t,
    source: n,
    activity: i,
    applicationStream: l,
    user: a,
    guildId: s,
    channelId: c,
    onAction: u
  } = e;
  return (0, r.jsx)(o.A, {
    className: (0, A.t)(h, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: l,
    user: a,
    guildId: s,
    buttonVariant: "primary",
    channelId: c,
    onAction: u
  })
}
let S = Chunk153331.A.Types,
  I = function(e) {
    let {
      activity: t,
      user: n,
      useStoreStream: o = true,
      showActions: A = true,
      hideHeader: h = false,
      showChannelDetails: S = false
    } = e, I = function(e, t) {
      if (null == e) return {};
      var n, r, i, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }
      if (l = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.getOwnPropertyNames(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
          return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]), x = (0, l.bG)([_.A, m.A], () => {
      var e;
      return m.A.getChannel(null == (e = _.A.getVoiceStateForUser(n.id)) ? true : e.channelId)
    }), E = (0, d.v)("UserActivityContainer", x), P = (0, l.bG)([f.A], () => o ? f.A.getAnyStreamForUser(n.id) : null), N = (null == t ? true : t.type) === b.$pd.HANG_STATUS && E ? x : null, T = (0, l.bG)([g.A, _.A, m.A], () => {
      var e, r;
      return (0, a.A)(t, b.jUm.EMBEDDED) ? g.A.getGuild(null == (e = m.A.getChannel(null == (r = _.A.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != N ? g.A.getGuild(N.getGuildId()) : null
    }), w = (0, l.bG)([g.A], () => null != P ? g.A.getGuild(P.guildId) : null), C = (0, l.bG)([c.A], () => {
      if (null != t)
        if (null != t.application_id) return c.A.getApplication(t.application_id);
        else return c.A.getApplicationByName(t.name);
      return null
    });
    return (i.useEffect(() => {
      (null == t ? true : t.type) === b.$pd.HANG_STATUS && E && y.default.track(b.HAw.VIEW_HANG_STATUS, v({
        source: "UserActivity",
        other_user_id: n.id
      }, (0, u.A)(null == N ? true : N.id)))
    }, [null == t ? true : t.type, E, N, n.id]), (null == t ? true : t.type) !== b.$pd.HANG_STATUS || E) ? (0, r.jsx)(s.A, O(v({}, I), {
      activity: t,
      user: n,
      application: C,
      hideHeader: h,
      activityGuild: null != T ? T : w,
      showChannelDetails: S,
      channel: S ? x : true,
      renderActions: A ? () => (0, r.jsx)(j, O(v({}, I), {
        applicationStream: P,
        activity: t,
        user: n
      })) : null,
      onOpenSpotifyTrack: p.Mp,
      onOpenSpotifyArtist: p.mN,
      onOpenSpotifyAlbum: p.QX
    })) : null
  }