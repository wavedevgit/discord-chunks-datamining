/** Chunk was on 80417 **/
/** chunk id: 571826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CW: () => f,
  DF: () => h,
  KA: () => g,
  M1: () => d,
  PM: () => S,
  Pn: () => p,
  Rq: () => E,
  ih: () => y,
  s$: () => _,
  sN: () => s
});
var Chunk367907 = require("./367907.js"),
  Chunk221292 = require("./221292.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function u(e) {
  var t;
  return null == (t = a.Z.getChannel(e)) ? true : t.guild_id
}

function s(e) {
  let {
    channelId: t,
    selectedTab: n
  } = e;
  r.ZP.trackWithMetadata(c.rMx.RTC_PANEL_VIEWED, {
    channel_id: t,
    guild_id: u(t),
    selected_tab: n
  })
}

function E(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  r.ZP.trackWithMetadata(c.rMx.E2EE_USER_VERIFICATION_VIEWED, l({
    channel_id: t,
    guild_id: u(t)
  }, (0, i.QN)({
    userId: n
  })))
}

function d(e) {
  let {
    channelId: t,
    userId: n,
    analyticsLocation: a
  } = e;
  r.ZP.trackWithMetadata(c.rMx.E2EE_USER_VERIFIED, l({
    channel_id: t,
    guild_id: u(t),
    location: a
  }, (0, i.QN)({
    userId: n
  })))
}

function f(e) {
  let {
    channelId: t,
    userId: n,
    keyVersion: a,
    reason: o
  } = e;
  r.ZP.trackWithMetadata(c.rMx.E2EE_USER_VERIFICATION_FAILED, l({
    channel_id: t,
    guild_id: u(t),
    failure_reason: o,
    key_version: "".concat(a)
  }, (0, i.QN)({
    userId: n
  })))
}

function _(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  r.ZP.trackWithMetadata(c.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, l({
    channel_id: t,
    guild_id: u(t)
  }, (0, i.QN)({
    userId: n
  })))
}

function S(e) {
  let {
    channelId: t
  } = e;
  r.ZP.trackWithMetadata(c.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
    channel_id: t,
    guild_id: u(t)
  })
}

function y(e) {
  let {
    channelId: t
  } = e;
  r.ZP.trackWithMetadata(c.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
    channel_id: t,
    guild_id: u(t)
  })
}

function h() {
  Chunk626135.default.track(Chunk981631.rMx.E2EE_SETTINGS_USER_DELETE)
}

function p() {
  Chunk626135.default.track(Chunk981631.rMx.E2EE_SETTINGS_DEVICE_DELETE)
}

function g(e) {
  o.default.track(c.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
    key_version: "".concat(e)
  })
}