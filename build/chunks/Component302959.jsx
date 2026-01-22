/** Chunk was on web.js **/
/** chunk id: 302959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w,
  M: () => R
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = T(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function C(e) {
  let {
    type: t,
    source: n,
    activity: i,
    applicationStream: a,
    user: s,
    guildId: o,
    channelId: c,
    onAction: u
  } = e;
  return (0, r.jsx)(l.A, {
    className: (0, E.t)(y, "actions", t),
    type: t,
    source: n,
    activity: i,
    applicationStream: a,
    user: s,
    guildId: o,
    buttonVariant: "primary",
    channelId: c,
    onAction: u
  })
}

function N(e) {
  let {
    activity: t,
    user: n,
    useStoreStream: l = true,
    showActions: E = true,
    hideHeader: y = false,
    showChannelDetails: O = false
  } = e, v = I(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]), T = (0, a.bG)([m.A, _.A], () => {
    var e;
    return _.A.getChannel(null == (e = m.A.getVoiceStateForUser(n.id)) ? true : e.channelId)
  }), N = (0, d.v)("UserActivityContainer", T), R = (0, a.bG)([p.A], () => l ? p.A.getAnyStreamForUser(n.id) : null), w = (null == t ? true : t.type) === b.$pd.HANG_STATUS && N ? T : null, P = (0, a.bG)([h.A, m.A, _.A], () => {
    var e, r;
    return (0, s.A)(t, b.jUm.EMBEDDED) ? h.A.getGuild(null == (e = _.A.getChannel(null == (r = m.A.getVoiceStateForSession(n.id, null == t ? true : t.session_id)) ? true : r.channelId)) ? true : e.getGuildId()) : null != w ? h.A.getGuild(w.getGuildId()) : null
  }), D = (0, a.bG)([h.A], () => null != R ? h.A.getGuild(R.guildId) : null), x = (0, a.bG)([c.A], () => {
    if (null != t)
      if (null != t.application_id) return c.A.getApplication(t.application_id);
      else return c.A.getApplicationByName(t.name);
    return null
  });
  return (i.useEffect(() => {
    (null == t ? true : t.type) === b.$pd.HANG_STATUS && N && g.default.track(b.HAw.VIEW_HANG_STATUS, A({
      source: "UserActivity",
      other_user_id: n.id
    }, (0, u.A)(null == w ? true : w.id)))
  }, [null == t ? true : t.type, N, w, n.id]), (null == t ? true : t.type) !== b.$pd.HANG_STATUS || N) ? (0, r.jsx)(o.A, S(A({}, v), {
    activity: t,
    user: n,
    application: x,
    hideHeader: y,
    activityGuild: null != P ? P : D,
    showChannelDetails: O,
    channel: O ? T : true,
    renderActions: E ? () => (0, r.jsx)(C, S(A({}, v), {
      applicationStream: R,
      activity: t,
      user: n
    })) : null,
    onOpenSpotifyTrack: f.Mp,
    onOpenSpotifyArtist: f.mN,
    onOpenSpotifyAlbum: f.QX
  })) : null
}
let R = Chunk153331.A.Types,
  w = N