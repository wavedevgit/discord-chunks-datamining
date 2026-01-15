/** Chunk was on web.js **/
/** chunk id: 765250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A4: () => _,
  E9: () => f,
  K4: () => g,
  Os: () => c,
  jx: () => h,
  n6: () => d,
  nv: () => l,
  sz: () => p,
  te: () => s,
  xh: () => u,
  zG: () => m
});
var Chunk570140 = require("./570140.js"),
  Chunk444295 = require("./444295.js"),
  Chunk355863 = require("./355863.js"),
  Chunk145597 = require("./145597.js");

function s(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o.OVERLAY_DEFAULT_RESOLUTION;
  r.Z.dispatch({
    type: "LAYOUT_CREATE",
    layoutId: e,
    widgets: t,
    version: n,
    defaultResolution: i
  })
}

function l(e) {
  let {
    widgetId: t,
    anchor: n,
    size: i,
    minSize: a,
    defaultSize: o,
    opacity: s
  } = e;
  r.Z.dispatch({
    type: "LAYOUT_UPDATE_WIDGET",
    widgetId: t,
    anchor: n,
    size: i,
    minSize: a,
    defaultSize: o,
    opacity: s
  })
}

function c(e) {
  r.Z.dispatch({
    type: "LAYOUT_SET_TOP_WIDGET",
    widgetId: e
  })
}

function u(e) {
  let {
    forcedPinnedState: t,
    shouldTrack: n = true
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, o = r.Z.dispatch({
    type: "LAYOUT_SET_PINNED",
    widgetId: e,
    pinned: t
  });
  if (!n) return o;
  let s = a.Z.getWidget(e);
  return null == s || (0, i.JS)(s.type, {
    pinned: null != t ? t : !s.pinned
  }), o
}

function d(e) {
  r.Z.dispatch({
    type: "LAYOUT_SHOW_OVERLAY_EXTRAS_HINT",
    widgetId: e
  })
}

function f(e) {
  r.Z.dispatch({
    type: "LAYOUT_DELETE_WIDGET",
    widgetId: e
  })
}

function p(e) {
  r.Z.dispatch({
    type: "LAYOUT_DELETE_ALL_WIDGETS",
    layoutId: e
  })
}

function _(e) {
  h([e])
}

function h(e) {
  r.Z.dispatch({
    type: "LAYOUT_CREATE_WIDGETS",
    widgetConfigs: e
  })
}

function m(e, t) {
  r.Z.dispatch({
    type: "LAYOUT_SET_WIDGET_META",
    widgetId: e,
    meta: t
  })
}

function g(e, t) {
  return r.Z.dispatch({
    type: "LAYOUT_SET_DEFAULT_CONFIG",
    widgetType: e,
    defaultConfig: t
  })
}