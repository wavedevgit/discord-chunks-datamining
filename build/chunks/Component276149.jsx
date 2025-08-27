/** Chunk was on web.js **/
/** chunk id: 276149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  var {
    variant: t = "active",
    size: n = "sm",
    hangStatusChannel: d,
    onAction: p
  } = e, h = _(e, ["variant", "size", "hangStatusChannel", "onAction"]);
  let m = (0, i.e7)([s.Z], () => s.Z.getChannelId() === d.id),
    g = () => {
      null == p || p(), o.default.selectVoiceChannel(d.id), l.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
        source: "UserProfilePopout",
        guild_id: d.guild_id,
        channel_id: d.id
      })
    };
  return (0, r.jsx)(a.zxk, f({
    disabled: m,
    text: u.intl.string(u.t["9C444u"]),
    onClick: g,
    variant: t,
    size: n,
    fullWidth: true
  }, h))
}