/** Chunk was on web.js **/
/** chunk id: 244827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {
  enabled: false,
  visible: false
};

function d(e) {
  let {
    enabled: t
  } = e;
  if (u.enabled === t) returnfalse;
  u = c(s({}, u), {
    enabled: t
  })
}

function f(e) {
  let {
    visible: t
  } = e;
  if (u.visible === t) returnfalse;
  u = c(s({}, u), {
    visible: t
  })
}
class _ extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t, n;
    u = {
      enabled: null != (t = null == e ? true : e.enabled) && t,
      visible: null != (n = null == e ? true : e.visible) && n
    }
  }
  getState() {
    return u
  }
  get enabled() {
    return u.enabled
  }
  get visible() {
    return u.visible
  }
  get active() {
    return u.enabled && u.visible
  }
}
o(_, "displayName", "LowPerformanceModeStore"), o(_, "persistKey", "LowPerformanceModeStore");
let p = new _(Chunk570140.Z, {
  LOW_PERFORMANCE_MODE_SET_ENABLED: d,
  LOW_PERFORMANCE_MODE_SET_VISIBLE: f
})