/** Chunk was on web.js **/
/** chunk id: 258585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X5: () => b,
  eO: () => y,
  pn: () => O
});
var Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk401843 = require("./401843.js"),
  Chunk250105 = require("./250105.js"),
  Chunk217222 = require("./217222.js"),
  Chunk128319 = require("./128319.js"),
  Chunk929921 = require("./929921.js"),
  Chunk753070 = require("./753070.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {
    allowAutoQuality: false,
    defaultAutoQuality: false,
    migrateAutoQuality: false
  },
  m = "GoLiveAutoQualityMigrationVersion",
  g = 1,
  E = (0, Chunk250105.Ay)({
    name: "2025-10-go-live-auto-quality",
    kind: "user",
    defaultConfig: h,
    variations: {
      1: _(f({}, h), {
        allowAutoQuality: true,
        migrateAutoQuality: true
      }),
      2: _(f({}, h), {
        allowAutoQuality: true,
        defaultAutoQuality: true
      })
    }
  });

function y(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = l.p.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? E.definition.defaultConfig : E.getConfig({
    location: t
  })
}

function b(e) {
  let {
    location: t
  } = e;
  return (0, r.bG)([s.A], () => y({
    location: t
  }))
}

function O() {
  var e;
  let t = E.getConfig({
      location: "maybeMigrateToAutoQuality"
    }).migrateAutoQuality,
    n = Number(null != (e = i.w.get(m)) ? e : 0);
  if (!t || n >= g) return;
  let r = c.A.getState();
  if (r.preset !== u.jQ.PRESET_CUSTOM) {
    (0, a.Xd)({
      preset: u.jQ.PRESET_AUTO,
      resolution: r.resolution,
      frameRate: r.fps,
      soundshareEnabled: r.soundshareEnabled,
      noTrack: true
    }), i.w.set(m, g);
    return
  }
}