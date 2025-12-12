/** Chunk was on web.js **/
/** chunk id: 944386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => _
});
var Chunk473749 = require("./473749.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk255963 = require("./255963.js"),
  Chunk185923 = require("./185923.js"),
  Chunk981631 = require("./981631.js");

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
    demoMode: m
  } = e, {
    current: h
  } = r.useRef(p({
    guild_id: n,
    emoji_id: t
  }, (0, o.v_)(a.Z.getChannel(s.Z.getChannelId(n)))));
  return (0, i.ZP)(() => {
    var e;
    (0, c.x)(u.qR.TrackOpenPopoutUsed), m || l.default.track(d.rMx.OPEN_POPOUT, p({
      type: null != (e = null == f ? true : f.analyticsType) ? e : "Standard Emoji Popout",
      nonce: _
    }, h))
  }), h
}