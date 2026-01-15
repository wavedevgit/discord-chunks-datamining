/** Chunk was on web.js **/
/** chunk id: 26323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk928518 = require("./928518.js"),
  Chunk776862 = require("./776862.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function p(e, t) {
  let c = null != t ? t : "".concat(l.jXE.PREMIUM_GUILD_UPSELL_MODAL);
  null != e.targetBoostedGuildTier && (c += " - Tier ".concat(e.targetBoostedGuildTier));
  let f = () => {
    s.default.track(l.rMx.MODAL_DISMISSED, {
      type: c,
      location: e.analyticsSourceLocation
    })
  };
  s.default.track(l.rMx.OPEN_MODAL, {
    type: c,
    location: e.analyticsSourceLocation
  });
  let {
    openInPopoutEnabled: p
  } = e, _ = d(e, ["openInPopoutEnabled"]), h = a.Z.getWindowOpen(l.KJ3.CHANNEL_CALL_POPOUT) && null != p && p;
  h && (0, o.Z)(l.KJ3.CHANNEL_CALL_POPOUT);
  let m = h ? i.u1M : i.z1l;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("89675").then(n.bind(n, 146747));
    return t => (0, r.jsx)(e, u({}, _, t))
  }, {
    onCloseCallback: f,
    contextKey: m
  })
}