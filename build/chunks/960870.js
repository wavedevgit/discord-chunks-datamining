/** Chunk was on web.js **/
/** chunk id: 960870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk353647 = require("./353647.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js");

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

function d(e) {
  let {
    user: t,
    display: n,
    activity: c,
    entry: d,
    stream: f,
    voiceChannelId: p,
    analyticsLocations: _
  } = e, {
    context: m,
    trackUserProfileAction: h
  } = (0, s.KZ)(), {
    analyticsLocations: g
  } = (0, o.ZP)(), E = null != _ ? _ : g, b = (0, i.e7)([a.Z], () => a.Z.getUserOutbox(t.id));
  return (0, r.useCallback)(e => {
    let {
      action: t
    } = e;
    h({
      action: t,
      analyticsLocations: E
    }), (0, l.z7)(u({
      action: t,
      display: n,
      activity: c,
      entry: d,
      stream: f,
      outbox: b,
      voiceChannelId: p,
      analyticsLocations: E
    }, m))
  }, [h, m, n, c, f, d, b, p, E])
}