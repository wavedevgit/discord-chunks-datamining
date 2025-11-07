/** Chunk was on web.js **/
/** chunk id: 634041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var r, Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581883 = require("./581883.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk647177 = require("./647177.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = false,
  g = null,
  E = false,
  b = {};

function y(e) {
  let {
    assets: t
  } = e, n = {};
  t.forEach(e => n[e.id] = e), b = n
}

function O(e) {
  let {
    videoFilterAsset: t
  } = e;
  b = h(_({}, b), {
    [t.id]: t
  })
}

function v(e) {
  let {
    videoFilterAsset: t
  } = e;
  b = _({}, b), delete b[t.id]
}

function I(e) {
  var t;
  let n = u.default.getCurrentUser();
  if (null == n) returnfalse;
  let r = null != e ? e : (0, d.Gx)(null == (t = s.Z.settings.voiceAndVideo) ? true : t.videoBackgroundFilterDesktop, n.id);
  return null != c.Z.getVoiceChannelId() && l.Z.isVideoEnabled() && null != r
}

function S(e) {
  let {
    backgroundOption: t
  } = e;
  I(t) && (E = true)
}

function T(e) {
  let {
    settings: t
  } = e;
  a.TO.CAMERA_BACKGROUND_LIVE in t && (m = true)
}

function A() {
  g !== Chunk944486.Z.getVoiceChannelId() && (E = false), I() && (E = true), g = Chunk944486.Z.getVoiceChannelId()
}

function C() {
  m = false, E = false, g = null, b = {}
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk131951.Z, Chunk944486.Z, Chunk581883.Z, Chunk594174.default), this.syncWith([Chunk944486.Z, Chunk131951.Z], A)
  }
  get videoFilterAssets() {
    return b
  }
  get hasBeenApplied() {
    return m
  }
  get hasUsedBackgroundInCall() {
    return E
  }
}
f(N, "displayName", "VideoBackgroundStore");
let R = new N(Chunk570140.Z, {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: y,
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: O,
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: v,
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: S,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: T,
  LOGOUT: C
})