/** Chunk was on web.js **/
/** chunk id: 571826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CW: () => _,
  DF: () => E,
  KA: () => y,
  M1: () => p,
  PM: () => h,
  Pn: () => b,
  Rq: () => f,
  ih: () => g,
  s$: () => m,
  sN: () => d
});
var Chunk367907 = require("./367907.js"),
  Chunk221292 = require("./221292.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e) {
  var t;
  return null == (t = o.Z.getChannel(e)) ? true : t.guild_id
}

function d(e) {
  let {
    channelId: t,
    selectedTab: n
  } = e;
  r.ZP.trackWithMetadata(s.rMx.RTC_PANEL_VIEWED, {
    channel_id: t,
    guild_id: u(t),
    selected_tab: n
  })
}

function f(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFICATION_VIEWED, c({
    channel_id: t,
    guild_id: u(t)
  }, (0, i.QN)({
    userId: n
  })))
}

function p(e) {
  let {
    channelId: t,
    userId: n,
    analyticsLocation: o
  } = e;
  r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFIED, c({
    channel_id: t,
    guild_id: u(t),
    location: o
  }, (0, i.QN)({
    userId: n
  })))
}

function _(e) {
  let {
    channelId: t,
    userId: n,
    keyVersion: o,
    reason: a
  } = e;
  r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFICATION_FAILED, c({
    channel_id: t,
    guild_id: u(t),
    failure_reason: a,
    key_version: "".concat(o)
  }, (0, i.QN)({
    userId: n
  })))
}

function m(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, c({
    channel_id: t,
    guild_id: u(t)
  }, (0, i.QN)({
    userId: n
  })))
}

function h(e) {
  let {
    channelId: t
  } = e;
  r.ZP.trackWithMetadata(s.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
    channel_id: t,
    guild_id: u(t)
  })
}

function g(e) {
  let {
    channelId: t
  } = e;
  r.ZP.trackWithMetadata(s.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
    channel_id: t,
    guild_id: u(t)
  })
}

function E() {
  Chunk626135.default.track(Chunk981631.rMx.E2EE_SETTINGS_USER_DELETE)
}

function b() {
  Chunk626135.default.track(Chunk981631.rMx.E2EE_SETTINGS_DEVICE_DELETE)
}

function y(e) {
  a.default.track(s.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
    key_version: "".concat(e)
  })
}