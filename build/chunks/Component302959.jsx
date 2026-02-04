/** Chunk was on 88474 **/
/** chunk id: 302959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I,
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
    activity: i,
    applicationStream: l,
    user: a,
    guildId: o,
    channelId: c,
    onAction: u
  } = e;
  return (0, r.jsx)(s.A, {
    className: (0, b.t)(_, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: l,
    user: a,
    guildId: o,
    buttonVariant: "primary",
    channelId: c,
    onAction: u
  })
}
let j = Chunk153331.A.Types,
  I = function(e) {
    let {
      activity: t,
      user: n,
      useStoreStream: s = true,
      showActions: b = true,
      hideHeader: _ = false,
      showChannelDetails: j = false
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
    }(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]), x = (0, l.bG)([y.A, m.A], () => {
      var e;
      return m.A.getChannel(null == (e = y.A.getVoiceStateForUser(n.id)) ? true : e.channelId)
    }), E = (0, d.v)("UserActivityContainer", x), P = (0, l.bG)([p.A], () => s ? p.A.getAnyStreamForUser(n.id) : null), C = (null == t ? true : t.type) === A.$pd.HANG_STATUS && E ? x : null, T = (0, l.bG)([g.A, y.A, m.A], () => {
      var e, r;
      return (0, a.A)(t, A.jUm.EMBEDDED) ? g.A.getGuild(null == (e = m.A.getChannel(null == (r = y.A.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != C ? g.A.getGuild(C.getGuildId()) : null
    }), N = (0, l.bG)([g.A], () => null != P ? g.A.getGuild(P.guildId) : null), w = (0, l.bG)([c.A], () => {
      if (null != t)
        if (null != t.application_id) return c.A.getApplication(t.application_id);
        else return c.A.getApplicationByName(t.name);
      return null
    });
    return (i.useEffect(() => {
      (null == t ? true : t.type) === A.$pd.HANG_STATUS && E && h.default.track(A.HAw.VIEW_HANG_STATUS, v({
        source: "UserActivity",
        other_user_id: n.id
      }, (0, u.A)(null == C ? true : C.id)))
    }, [null == t ? true : t.type, E, C, n.id]), (null == t ? true : t.type) !== A.$pd.HANG_STATUS || E) ? (0, r.jsx)(o.A, O(v({}, I), {
      activity: t,
      user: n,
      application: w,
      hideHeader: _,
      activityGuild: null != T ? T : N,
      showChannelDetails: j,
      channel: j ? x : true,
      enableUserHoverActivities: I.enableUserHoverActivities,
      renderActions: b ? () => (0, r.jsx)(S, O(v({}, I), {
        applicationStream: P,
        activity: t,
        user: n
      })) : null,
      onOpenSpotifyTrack: f.Mp,
      onOpenSpotifyArtist: f.mN,
      onOpenSpotifyAlbum: f.QX
    })) : null
  }