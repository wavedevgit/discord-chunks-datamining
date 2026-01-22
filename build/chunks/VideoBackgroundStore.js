/** Chunk was on web.js **/
/** chunk id: 912630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
});
var r, Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk73153 = require("./73153.js"),
  Chunk617617 = require("./617617.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk965162 = require("./965162.js");

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

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
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
  b = h(p({}, b), {
    [t.id]: t
  })
}

function A(e) {
  let {
    videoFilterAsset: t
  } = e;
  b = p({}, b), delete b[t.id]
}

function v(e) {
  var t;
  let n = u.default.getCurrentUser();
  if (null == n) returnfalse;
  let r = null != e ? e : (0, d.Hk)(null == (t = o.A.settings.voiceAndVideo) ? true : t.videoBackgroundFilterDesktop, n.id);
  return null != c.A.getVoiceChannelId() && l.A.isVideoEnabled() && null != r
}

function S(e) {
  let {
    backgroundOption: t
  } = e;
  v(t) && (E = true)
}

function I(e) {
  let {
    settings: t
  } = e;
  a.Tr.CAMERA_BACKGROUND_LIVE in t && (m = true)
}

function T() {
  g !== c.A.getVoiceChannelId() && (E = false), v() && (E = true), g = c.A.getVoiceChannelId()
}

function C() {
  m = false, E = false, g = null, b = {}
}
class N extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.A, c.A, o.A, u.default), this.syncWith([c.A, l.A], T)
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
let R = new N(Chunk73153.h, {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: y,
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: O,
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: A,
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: S,
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: I,
  LOGOUT: C
})