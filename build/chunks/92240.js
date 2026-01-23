/** Chunk was on web.js **/
/** chunk id: 92240, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk517164 = require("./517164.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js");

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
    context: h,
    trackUserProfileAction: m
  } = (0, o.NJ)(), {
    analyticsLocations: g
  } = (0, a.Ay)(), E = null != _ ? _ : g, y = (0, i.bG)([s.A], () => s.A.getUserOutbox(t.id));
  return (0, r.useCallback)(e => {
    let {
      action: t
    } = e;
    m({
      action: t,
      analyticsLocations: E
    }), (0, l.Tu)(u({
      action: t,
      display: n,
      activity: c,
      entry: d,
      stream: f,
      outbox: y,
      voiceChannelId: p,
      analyticsLocations: E
    }, h))
  }, [m, h, n, c, f, d, y, p, E])
}