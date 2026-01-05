/** Chunk was on web.js **/
/** chunk id: 580991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IK: () => b,
  Ym: () => O,
  _I: () => y
});
var Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk872810 = require("./872810.js"),
  Chunk722733 = require("./722733.js"),
  Chunk633289 = require("./633289.js"),
  Chunk751823 = require("./751823.js"),
  Chunk361291 = require("./361291.js"),
  Chunk37113 = require("./37113.js");

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
let m = {
    allowAutoQuality: false,
    defaultAutoQuality: false,
    migrateAutoQuality: false
  },
  h = "GoLiveAutoQualityMigrationVersion",
  g = 1,
  E = (0, Chunk722733.Z)({
    name: "2025-10-go-live-auto-quality",
    kind: "user",
    defaultConfig: m,
    variations: {
      1: _(f({}, m), {
        allowAutoQuality: true,
        migrateAutoQuality: true
      }),
      2: _(f({}, m), {
        allowAutoQuality: true,
        defaultAutoQuality: true
      })
    }
  });

function b(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = l.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? E.definition.defaultConfig : E.getConfig({
    location: t
  })
}

function y(e) {
  let {
    location: t
  } = e;
  return (0, r.e7)([s.Z], () => b({
    location: t
  }))
}

function O() {
  var e;
  let t = E.getConfig({
      location: "maybeMigrateToAutoQuality"
    }).migrateAutoQuality,
    n = Number(null != (e = Chunk433517.K.get(h)) ? module : 0);
  if (!exports || require >= g) return;
  let r = Chunk361291.Z.getState();
  if (Chunk442837.preset !== Chunk37113.tI.PRESET_CUSTOM) {
    (0, Chunk872810.Rc)({
      preset: Chunk37113.tI.PRESET_AUTO,
      resolution: Chunk442837.resolution,
      frameRate: Chunk442837.fps,
      soundshareEnabled: Chunk442837.soundshareEnabled,
      noTrack: true
    }), Chunk433517.K.set(h, g);
    return
  }
}