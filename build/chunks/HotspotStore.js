/** Chunk was on web.js **/
/** chunk id: 810788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk374023 = require("./374023.js"),
  Chunk188785 = require("./188785.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Set,
  u = {};

function d(e) {
  let {
    location: t
  } = e;
  if (c.has(t)) returnfalse;
  c.add(t)
}

function f(e) {
  let {
    location: t,
    enabled: n
  } = e;
  u[t] = n
}

function p(e) {
  let {
    location: t
  } = e;
  if (null == u[t]) returnfalse;
  delete u[t]
}

function _(e) {
  let {
    hiddenHotspots: t
  } = e;
  c = new Set(t)
}
class h extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (Array.isArray(e.hiddenHotspots) && (c = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
  }
  hasHotspot(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = !t && u[e];
    return !(s.a || o.s.isDisallowPopupsSet()) && (n || !c.has(e))
  }
  hasHiddenHotspot(e) {
    return c.has(e)
  }
  getHotspotOverride(e) {
    return u[e]
  }
  getState() {
    return {
      hiddenHotspots: c,
      hotspotOverrides: u
    }
  }
}
l(h, "displayName", "HotspotStore"), l(h, "persistKey", "hotspots"), l(h, "migrations", [e => ({
  hiddenHotspots: null != e ? e : [],
  hotspotOverrides: {}
})]);
let m = new h(Chunk570140.Z, {
  OVERLAY_INITIALIZE: _,
  HOTSPOT_HIDE: d,
  HOTSPOT_OVERRIDE_SET: f,
  HOTSPOT_OVERRIDE_CLEAR: p
})