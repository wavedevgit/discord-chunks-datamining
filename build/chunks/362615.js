/** Chunk was on web.js **/
/** chunk id: 362615, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => h
}), require("./539854.js");
var Chunk358221 = require("./358221.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk959457 = require("./959457.js"),
  Chunk557457 = require("./557457.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js"),
  Chunk150457 = require("./150457.js"),
  Chunk981631 = require("./981631.js");

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
let h = {
  getActiveErrors: () => (0, Chunk150457.LN)() ? Chunk199902.Z.getAllActiveStreams().reduce((e, t) => {
    var n;
    let a = null == (n = s.Z.getRTCConnection((0, i.V9)(t))) ? true : n.getMediaEngineConnectionId();
    if (null == a || t.ownerId === o.default.getId() || t.state === f.jm8.PAUSED) return e;
    let _ = (0, d.hj)(a, t.ownerId);
    if (null == _) return e;
    let h = r.Z.getParticipant(t.channelId, (0, i.V9)(t));
    if (null == h) return e;
    let m = (0, l.Wc)(h);
    return null == m || (_.short.frameRate < (0, d.dj)(m.maxFrameRate) || _.long.frameRate < (0, d.dj)(m.maxFrameRate)) && e.push(p({
      type: c.u.STREAM_VIEW_LOW_FPS
    }, (0, u.rT)((0, i.V9)(t)))), e
  }, []) : null,
  makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
}