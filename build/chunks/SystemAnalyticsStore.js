/** Chunk was on web.js **/
/** chunk id: 704806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => y
}), require("./49124.js"), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js");

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
async function m() {
  if (!Chunk358085.isPlatformEmbedded || !(0, Chunk358085.isWindows)()) return [];
  await Chunk998502.ZP.ensureModule("discord_media");
  let e = Chunk998502.ZP.requireModule("discord_media");
  return await module.getSystemAnalyticsBlob() || []
}
async function h() {
  try {
    let t = (await m()).filter(e => _.hashes[e.name] !== e.hash);
    for (let {
        name: n,
        hash: r,
        data: i
      }
      of exports) {
      var e;
      let t = p(d({}, Chunk442837), {
        gpus: null == (e = Chunk442837.gpus) ? true : module.map(e => JSON.stringify(e))
      });
      Chunk626135.default.track(require, exports), (_ = {
        hashes: d({}, _.hashes)
      }).hashes[require] = r
    }
    exports.length > 0 && b.emitChange()
  } catch (e) {}
}

function g() {
  return h(), false
}
class E extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    _ = null != e && "object" == typeof e.hashes ? e : {
      hashes: {}
    }, this.waitFor(o.Z)
  }
  getState() {
    return _
  }
  async info() {
    try {
      let e = (await m()).find(e => "hardware_detected" === e.name);
      if (null == module) return null;
      return module.data
    } catch (e) {}
  }
}
u(E, "displayName", "SystemAnalyticsStore"), u(E, "persistKey", "SystemAnalyticsStore");
let b = new E(Chunk570140.Z, {
  START_SESSION: g
});

function y() {
  return b.info()
}