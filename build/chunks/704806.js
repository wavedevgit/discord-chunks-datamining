/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  q: () => b
}), n(26686), n(47120);
var r, i = n(442837),
  o = n(570140),
  a = n(353926),
  s = n(626135),
  l = n(358085),
  c = n(998502);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  await c.ZP.ensureModule("discord_media");
  let e = c.ZP.requireModule("discord_media");
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
        gpus: null === (e = i.gpus) || void 0 === e ? void 0 : e.map(e => JSON.stringify(e))
      });
      s.default.track(n, t), (_ = {
        hashes: d({}, _.hashes)
      }).hashes[n] = r
    }
    t.length > 0 && v.emitChange()
  } catch (e) {}
}

function g() {
  return m(), !1
}
class E extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    _ = null != e && "object" == typeof e.hashes ? e : {
      hashes: {}
    }, this.waitFor(a.Z)
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
let v = new E(o.Z, {
  START_SESSION: g
});

function b() {
  return v.info()
}