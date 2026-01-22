/** Chunk was on web.js **/
/** chunk id: 891540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk536194 = require("./536194.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./436317.js");
let l = new Set,
  c = {};

function u(e) {
  let {
    location: t
  } = e;
  if (l.has(t)) returnfalse;
  l.add(t)
}

function d(e) {
  let {
    location: t,
    enabled: n
  } = e;
  c[t] = n
}

function f(e) {
  let {
    location: t
  } = e;
  if (null == c[t]) returnfalse;
  delete c[t]
}

function p(e) {
  let {
    hiddenHotspots: t
  } = e;
  l = new Set(t)
}
class _ extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (c = e.hotspotOverrides))
  }
  hasHotspot(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = !t && c[e];
    return !s.P.isDisallowPopupsSet() && (n || !l.has(e))
  }
  hasHiddenHotspot(e) {
    return l.has(e)
  }
  getHotspotOverride(e) {
    return c[e]
  }
  getState() {
    return {
      hiddenHotspots: l,
      hotspotOverrides: c
    }
  }
}
o(_, "displayName", "HotspotStore"), o(_, "persistKey", "hotspots"), o(_, "migrations", [e => ({
  hiddenHotspots: null != e ? e : [],
  hotspotOverrides: {}
})]);
let h = new _(Chunk73153.h, {
  OVERLAY_INITIALIZE: p,
  HOTSPOT_HIDE: u,
  HOTSPOT_OVERRIDE_SET: d,
  HOTSPOT_OVERRIDE_CLEAR: f
})