/** Chunk was on web.js **/
/** chunk id: 76021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk872810 = require("./872810.js"),
  Chunk451467 = require("./451467.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk358085 = require("./358085.js"),
  Chunk37113 = require("./37113.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t, p) {
  if (d.isPlatformEmbedded)(0, i.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("38697"), n.e("4093"), n.e("44183"), n.e("59416")]).then(n.bind(n, 60594));
    return n => {
      var i;
      return (0, r.jsx)(t, h(_({}, n), {
        guildId: e,
        analyticsLocation: null != (i = p[p.length - 1]) ? i : "unknown location",
        analyticsLocations: p
      }))
    }
  });
  else {
    var m;
    let n = s.Z.getChannel(t),
      r = (0, o.Z)(f.ApplicationStreamPresets.PRESET_CUSTOM, f.ApplicationStreamResolutions.RESOLUTION_1080, f.ApplicationStreamFPS.FPS_30, u.default.getCurrentUser(), null == (m = l.Z.getGuild(e)) ? true : m.premiumTier, n) ? {
        width: 1920,
        height: 1080
      } : {
        width: 1280,
        height: 720
      };
    (0, a.Rc)({
      preset: f.ApplicationStreamPresets.PRESET_CUSTOM,
      resolution: r.height,
      frameRate: f.ApplicationStreamFPS.FPS_30,
      soundshareEnabled: true
    }), c.Z.getMediaEngine().getDesktopSource(r, true).then(n => {
      (0, a.WH)(e, t, {
        pid: null,
        sourceId: n,
        sourceName: null,
        analyticsLocations: p
      })
    })
  }
}