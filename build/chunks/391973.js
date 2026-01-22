/** Chunk was on web.js **/
/** chunk id: 391973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IC: () => p,
  Ju: () => l,
  Vz: () => o,
  cC: () => m,
  dH: () => d,
  jn: () => _,
  qH: () => g,
  uD: () => c,
  uF: () => h,
  uv: () => f,
  v0: () => u
});
var Chunk73153 = require("./73153.js"),
  Chunk810412 = require("./810412.js"),
  Chunk555528 = require("./555528.js"),
  Chunk9302 = require("./9302.js");

function o(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : s.OVERLAY_DEFAULT_RESOLUTION;
  r.h.dispatch({
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
    defaultSize: s,
    opacity: o
  } = e;
  r.h.dispatch({
    type: "LAYOUT_UPDATE_WIDGET",
    widgetId: t,
    anchor: n,
    size: i,
    minSize: a,
    defaultSize: s,
    opacity: o
  })
}

function c(e) {
  r.h.dispatch({
    type: "LAYOUT_SET_TOP_WIDGET",
    widgetId: e
  })
}

function u(e) {
  let {
    forcedPinnedState: t,
    shouldTrack: n = true
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, s = r.h.dispatch({
    type: "LAYOUT_SET_PINNED",
    widgetId: e,
    pinned: t
  });
  if (!n) return s;
  let o = a.A.getWidget(e);
  return null == o || (0, i.xp)(o.type, {
    pinned: null != t ? t : !o.pinned
  }), s
}

function d(e) {
  r.h.dispatch({
    type: "LAYOUT_SHOW_OVERLAY_EXTRAS_HINT",
    widgetId: e
  })
}

function f(e) {
  r.h.dispatch({
    type: "LAYOUT_DELETE_WIDGET",
    widgetId: e
  })
}

function p(e) {
  r.h.dispatch({
    type: "LAYOUT_DELETE_ALL_WIDGETS",
    layoutId: e
  })
}

function _(e) {
  h([e])
}

function h(e) {
  r.h.dispatch({
    type: "LAYOUT_CREATE_WIDGETS",
    widgetConfigs: e
  })
}

function m(e, t) {
  r.h.dispatch({
    type: "LAYOUT_SET_WIDGET_META",
    widgetId: e,
    meta: t
  })
}

function g(e, t) {
  return r.h.dispatch({
    type: "LAYOUT_SET_DEFAULT_CONFIG",
    widgetType: e,
    defaultConfig: t
  })
}