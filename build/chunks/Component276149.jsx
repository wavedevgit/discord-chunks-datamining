/** Chunk was on web.js **/
/** chunk id: 276149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk359110 = require("./359110.js"),
  Chunk19780 = require("./19780.js"),
  Chunk938475 = require("./938475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  var {
    variant: t = "active",
    size: n = "sm",
    hangStatusChannel: _,
    onAction: m,
    userId: g
  } = e, E = h(e, ["variant", "size", "hangStatusChannel", "onAction", "userId"]);
  let b = (0, i.e7)([l.Z], () => l.Z.getChannelId() === _.id),
    y = () => {
      null == m || m(), o.default.selectVoiceChannel(_.id), (0, s.Kh)(_.id), u.default.track(d.rMx.HANG_STATUS_CTA_CLICKED, {
        source: "UserProfilePopout",
        guild_id: _.guild_id,
        channel_id: _.id,
        media_session_id: l.Z.getMediaSessionId(),
        call_num_participants: c.ZP.countVoiceStatesForChannel(_.id),
        other_user_id: g,
        cta_type: b ? "open" : "join"
      })
    };
  return (0, r.jsx)(a.zxk, p({
    text: b ? f.intl.string(f.t.BXxdl5) : f.intl.string(f.t["9C444u"]),
    onClick: y,
    variant: t,
    size: n,
    fullWidth: true
  }, E))
}