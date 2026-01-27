/** Chunk was on web.js **/
/** chunk id: 975412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk709055 = require("./709055.js"),
  Chunk222823 = require("./222823.js"),
  Chunk954571 = require("./954571.js"),
  Chunk211401 = require("./211401.js"),
  Chunk500049 = require("./500049.js"),
  Chunk60809 = require("./60809.js"),
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

function _(e) {
  let {
    context: t,
    openInPopout: f,
    analyticsLocation: _ = "open-activity-shelf",
    initialState: h
  } = e;
  f && (0, a.A)(d.MLl.CHANNEL_CALL_POPOUT);
  let m = f ? i.KX8 : i.SYi;
  (0, l.k)(c.Se.DISMISSED), (0, l.R)(c.s4.VOICE, true, h, "channel" === t.type ? t.channel.id : true);
  let g = "contextless" !== t.type && (o.Ay.hasUnread(t.channel.id) || o.Ay.getMentionCount(t.channel.id) > 0);
  return s.default.track(d.HAw.VOICE_PANEL_TAB_OPENED, {
    tab: "activities",
    location: _,
    source: c.s4.VOICE,
    is_chat_badged: g
  }), (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("12313").then(n.bind(n, 126784));
    return n => (0, r.jsx)(e, p({
      context: t
    }, n))
  }, {
    modalKey: u.gS,
    contextKey: m
  })
}