/** Chunk was on web.js **/
/** chunk id: 851581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => b
}), require("./457529.js"), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = {
  hashes: {}
};
async function h() {
  if (!l.isPlatformEmbedded || !(0, l.isWindows)()) return [];
  await c.Ay.ensureModule("discord_media");
  let e = c.Ay.requireModule("discord_media");
  return await e.getSystemAnalyticsBlob() || []
}
async function m() {
  try {
    let t = (await h()).filter(e => _.hashes[e.name] !== e.hash);
    for (let {
        name: n,
        hash: r,
        data: i
      }
      of t) {
      var e;
      let t = p(d({}, i), {
        gpus: null == (e = i.gpus) ? true : e.map(e => JSON.stringify(e))
      });
      s.default.track(n, t), (_ = {
        hashes: d({}, _.hashes)
      }).hashes[n] = r
    }
    t.length > 0 && y.emitChange()
  } catch (e) {}
}

function g() {
  return m(), false
}
class E extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    _ = null != e && "object" == typeof e.hashes ? e : {
      hashes: {}
    }, this.waitFor(o.A)
  }
  getState() {
    return _
  }
  async info() {
    try {
      let e = (await h()).find(e => "hardware_detected" === e.name);
      if (null == e) return null;
      return e.data
    } catch (e) {}
  }
}
u(E, "displayName", "SystemAnalyticsStore"), u(E, "persistKey", "SystemAnalyticsStore");
let y = new E(Chunk73153.h, {
  START_SESSION: g
});

function b() {
  return y.info()
}