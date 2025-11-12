/** Chunk was on web.js **/
/** chunk id: 451478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var r, Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk830917 = require("./830917.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = null,
  p = new Map;

function h(e) {
  let t = p.get(e);
  return null == t ? (console.warn("Window state not initialized", e), {
    isElementFullscreen: false,
    focused: false,
    windowSize: {
      width: 0,
      height: 0
    },
    visible: false
  }) : t
}

function m(e) {
  a()(!p.has(e.windowId), "Window initialized multiple times");
  let {
    width: t,
    height: n,
    isElementFullscreen: r,
    focused: i,
    visible: o
  } = e;
  return p.set(e.windowId, {
    windowSize: {
      width: t,
      height: n
    },
    isElementFullscreen: r,
    focused: i,
    visible: o
  }), i && (_ = e.windowId), true
}

function g(e) {
  let t = h(e.windowId);
  return t.isElementFullscreen !== e.isElementFullscreen && (p.set(e.windowId, f(u({}, t), {
    isElementFullscreen: e.isElementFullscreen
  })), true)
}

function E(e) {
  let t = h(e.windowId);
  return t.focused !== e.focused && (e.focused && (_ = e.windowId), p.set(e.windowId, f(u({}, t), {
    focused: e.focused
  })), true)
}

function b(e) {
  let t = h(e.windowId);
  return t.visible !== e.visible && (p.set(e.windowId, f(u({}, t), {
    visible: e.visible
  })), true)
}

function y(e) {
  let t = h(e.windowId);
  return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (p.set(e.windowId, f(u({}, t), {
    windowSize: {
      width: e.width,
      height: e.height
    }
  })), true)
}

function O(e) {
  return p.delete(e.windowId), _ === e.windowId && (_ = null), true
}
class v extends(r = Chunk442837.ZP.Store) {
  isFocused() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : (0, Chunk830917.UU)();
    return h(module).focused
  }
  isAppFocused() {
    return null != this.getFocusedWindowId()
  }
  isVisible() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : (0, Chunk830917.UU)();
    return h(module).visible
  }
  getFocusedWindowId() {
    let e = null;
    return p.forEach((t, n) => {
      t.focused && (e = n)
    }), module
  }
  getLastFocusedWindowId() {
    return _
  }
  isElementFullScreen() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : (0, Chunk830917.UU)();
    return h(module).isElementFullscreen
  }
  windowSize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : (0, Chunk830917.UU)();
    return h(module).windowSize
  }
}
c(v, "displayName", "WindowStore");
let I = new v(Chunk570140.Z, {
  WINDOW_INIT: m,
  WINDOW_FULLSCREEN_CHANGE: g,
  WINDOW_FOCUS: E,
  WINDOW_RESIZED: y,
  WINDOW_UNLOAD: O,
  WINDOW_VISIBILITY_CHANGE: b
});
Promise.resolve().then(require.bind(require, 626135)).then(e => {
  let {
    addExtraAnalyticsDecorator: t
  } = e;
  t(e => {
    {
      e.client_app_state = I.isAppFocused() ? "focused" : "unfocused";
      let t = I.windowSize();
      e.client_viewport_width = t.width, e.client_viewport_height = t.height
    }
  })
});
let T = I