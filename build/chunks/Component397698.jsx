/** Chunk was on web.js **/
/** chunk id: 397698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk776862 = require("./776862.js"),
  Chunk306680 = require("./306680.js"),
  Chunk626135 = require("./626135.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk314734 = require("./314734.js"),
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

function _(e) {
  let {
    context: t,
    openInPopout: f,
    analyticsLocation: _ = "open-activity-shelf",
    initialState: m
  } = e;
  f && (0, a.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
  let h = f ? i.u1M : i.z1l;
  (0, l.y)(c.ti.DISMISSED), (0, l._)(c._b.VOICE, true, m);
  let g = "contextless" !== t.type && (o.ZP.hasUnread(t.channel.id) || o.ZP.getMentionCount(t.channel.id) > 0);
  return s.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
    tab: "activities",
    location: _,
    source: c._b.VOICE,
    is_chat_badged: g
  }), (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("81056").then(n.bind(n, 743161));
    return n => (0, r.jsx)(e, p({
      context: t
    }, n))
  }, {
    modalKey: u.e9,
    contextKey: h
  })
}