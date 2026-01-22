/** Chunk was on web.js **/
/** chunk id: 797390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => h
}), require("./321073.js");
var Chunk313961 = require("./313961.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk162605 = require("./162605.js"),
  Chunk650338 = require("./650338.js"),
  Chunk487329 = require("./487329.js"),
  Chunk601900 = require("./601900.js"),
  Chunk548370 = require("./548370.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let h = {
  getActiveErrors: () => (0, d.D$)() ? a.A.getAllActiveStreams().reduce((e, t) => {
    var n;
    let a = null == (n = o.A.getRTCConnection((0, i._z)(t))) ? true : n.getMediaEngineConnectionId();
    if (null == a || t.ownerId === s.default.getId() || t.state === f.XYD.PAUSED) return e;
    let p = (0, d.xA)(a, t.ownerId);
    if (null == p) return e;
    let h = r.A.getParticipant(t.channelId, (0, i._z)(t));
    if (null == h) return e;
    let m = (0, l.wz)(h);
    return null == m || (p.short.frameRate < (0, d.s1)(m.maxFrameRate) || p.long.frameRate < (0, d.s1)(m.maxFrameRate)) && e.push(_({
      type: c.iy.STREAM_VIEW_LOW_FPS
    }, (0, u.id)((0, i._z)(t)))), e
  }, []) : null,
  makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
}