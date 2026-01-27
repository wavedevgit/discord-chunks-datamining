/** Chunk was on web.js **/
/** chunk id: 731383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => _
});
var Chunk64700 = require("./64700.js"),
  Chunk964486 = require("./964486.js"),
  Chunk58149 = require("./58149.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk189551 = require("./189551.js"),
  Chunk307731 = require("./307731.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}
let _ = e => {
  let {
    emojiId: t,
    currentGuildId: n,
    popoutData: f,
    nonce: _,
    demoMode: h
  } = e, {
    current: m
  } = r.useRef(p({
    guild_id: n,
    emoji_id: t
  }, (0, a.dI)(o.A.getChannel(s.A.getChannelId(n)))));
  return (0, i.Ay)(() => {
    var e;
    (0, c.K)(u.Vl.TrackOpenPopoutUsed), h || l.default.track(d.HAw.OPEN_POPOUT, p({
      type: null != (e = null == f ? true : f.analyticsType) ? e : "Standard Emoji Popout",
      nonce: _
    }, m))
  }), m
}