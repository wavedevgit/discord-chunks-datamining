/** Chunk was on 47995 **/
/** chunk id: 302959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x,
  M: () => j
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

function S(e) {
  let {
    type: t,
    source: n,
    activity: l,
    applicationStream: i,
    user: a,
    guildId: s,
    channelId: c,
    onAction: u
  } = e;
  return (0, r.jsx)(o.A, {
    className: (0, _.t)(h, "actions", t),
    type: t,
    source: n,
    activity: l,
    applicationStream: i,
    user: a,
    guildId: s,
    buttonVariant: "primary",
    channelId: c,
    onAction: u
  })
}
let j = Chunk153331.A.Types,
  x = function(e) {
    let {
      activity: t,
      user: n,
      useStoreStream: o = true,
      showActions: _ = true,
      hideHeader: h = false,
      showChannelDetails: j = false
    } = e, x = function(e, t) {
      if (null == e) return {};
      var n, r, l, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var n, r, l = {},
            i = Object.getOwnPropertyNames(e);
          for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]), I = (0, i.bG)([y.A, m.A], () => {
      var e;
      return m.A.getChannel(null == (e = y.A.getVoiceStateForUser(n.id)) ? true : e.channelId)
    }), P = (0, d.v)("UserActivityContainer", I), E = (0, i.bG)([f.A], () => o ? f.A.getAnyStreamForUser(n.id) : null), T = (null == t ? true : t.type) === A.$pd.HANG_STATUS && P ? I : null, N = (0, i.bG)([g.A, y.A, m.A], () => {
      var e, r;
      return (0, a.A)(t, A.jUm.EMBEDDED) ? g.A.getGuild(null == (e = m.A.getChannel(null == (r = y.A.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != T ? g.A.getGuild(T.getGuildId()) : null
    }), w = (0, i.bG)([g.A], () => null != E ? g.A.getGuild(E.guildId) : null), C = (0, i.bG)([c.A], () => {
      if (null != t)
        if (null != t.application_id) return c.A.getApplication(t.application_id);
        else return c.A.getApplicationByName(t.name);
      return null
    });
    return (l.useEffect(() => {
      (null == t ? true : t.type) === A.$pd.HANG_STATUS && P && b.default.track(A.HAw.VIEW_HANG_STATUS, v({
        source: "UserActivity",
        other_user_id: n.id
      }, (0, u.A)(null == T ? true : T.id)))
    }, [null == t ? true : t.type, P, T, n.id]), (null == t ? true : t.type) !== A.$pd.HANG_STATUS || P) ? (0, r.jsx)(s.A, O(v({}, x), {
      activity: t,
      user: n,
      application: C,
      hideHeader: h,
      activityGuild: null != N ? N : w,
      showChannelDetails: j,
      channel: j ? I : true,
      renderActions: _ ? () => (0, r.jsx)(S, O(v({}, x), {
        applicationStream: E,
        activity: t,
        user: n
      })) : null,
      onOpenSpotifyTrack: p.Mp,
      onOpenSpotifyArtist: p.mN,
      onOpenSpotifyAlbum: p.QX
    })) : null
  }