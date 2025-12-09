/** Chunk was on web.js **/
/** chunk id: 857595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ej: () => v,
  HU: () => T,
  Nc: () => E,
  Qj: () => p,
  TX: () => S,
  Uv: () => P,
  X2: () => C,
  ZZ: () => d,
  Zt: () => y,
  cq: () => f,
  eN: () => N,
  f1: () => m,
  gs: () => I,
  ky: () => D,
  lq: () => h,
  o2: () => b,
  oL: () => u,
  qz: () => O,
  r_: () => g,
  rf: () => _,
  u1: () => A,
  vW: () => R
});
var Chunk570140 = require("./570140.js"),
  Chunk153867 = require("./153867.js"),
  Chunk626135 = require("./626135.js"),
  Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk611480 = require("./611480.js");

function u(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_FONT_SIZE",
    fontSize: e
  })
}

function d() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
  Chunk570140.Z.dispatch({
    type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING",
    messageGroupSpacing: module
  })
}

function f(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_ZOOM",
    zoom: e
  })
}

function p() {
  Chunk570140.Z.dispatch({
    type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE"
  }), Chunk626135.default.track(Chunk981631.rMx.KEYBOARD_MODE_TOGGLED, {
    enabled: true
  })
}

function _() {
  Chunk570140.Z.dispatch({
    type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE"
  }), Chunk626135.default.track(Chunk981631.rMx.KEYBOARD_MODE_TOGGLED, {
    enabled: false
  })
}

function m() {
  Chunk570140.Z.dispatch({
    type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE"
  })
}

function h() {
  Chunk570140.Z.dispatch({
    type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE"
  })
}

function g() {
  Chunk570140.Z.dispatch({
    type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN"
  })
}

function E(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
    systemPrefersReducedMotion: e
  })
}

function b(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_SATURATION",
    saturation: e
  })
}

function y(e) {
  let t = o.Z.useReducedMotion;
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
    prefersReducedMotion: e
  });
  let n = o.Z.useReducedMotion;
  !t && n ? i.ZP.applySettingsOverride({
    gifAutoPlay: {
      value: false,
      reasonKey: l.mX.REDUCED_MOTION
    },
    animateEmoji: {
      value: false,
      reasonKey: l.mX.REDUCED_MOTION
    },
    animateStickers: {
      value: c.yr.ANIMATE_ON_INTERACTION,
      reasonKey: l.mX.REDUCED_MOTION_STICKERS
    }
  }) : t && !n && i.ZP.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers")
}

function O(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
    syncForcedColors: e
  })
}

function v(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
    systemForcedColors: e
  })
}

function S(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
    systemPrefersContrast: e
  })
}

function I(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS",
    alwaysShowLinkDecorations: e
  })
}

function T(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR",
    enableCustomCursor: e
  })
}

function A(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_ROLE_STYLE",
    roleStyle: e
  }), a.default.track(s.rMx.ROLE_STYLE_SETTING_UPDATED, {
    role_style: e
  })
}

function C(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED",
    enabled: e
  })
}

function N() {
  Chunk570140.Z.dispatch({
    type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE"
  })
}

function P() {
  Chunk570140.Z.dispatch({
    type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE"
  })
}

function R(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_CONTRAST_MODE",
    contrastMode: e
  })
}

function D(e) {
  r.Z.dispatch({
    type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED",
    switchIconsEnabled: e
  })
}