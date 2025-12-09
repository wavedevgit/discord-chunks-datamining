/** Chunk was on web.js **/
/** chunk id: 877481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./415506.js"), require("./388685.js");
var Chunk274616 = require("./274616.js"),
  Chunk710845 = require("./710845.js"),
  Chunk893988 = require("./893988.js"),
  Chunk812967 = require("./812967.js"),
  Chunk314897 = require("./314897.js"),
  Chunk757266 = require("./757266.js"),
  Chunk906467 = require("./906467.js"),
  Chunk6132 = require("./6132.js"),
  Chunk830168 = require("./830168.js"),
  Chunk358085 = require("./358085.js"),
  Chunk591759 = require("./591759.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = new Chunk710845.Z("Games"),
  O = {},
  v = 0,
  S = null,
  I = 250,
  T = 12e4,
  A = 36e5;

function C() {
  return null != S ? Promise.resolve(S) : (0, Chunk358085.isDesktop)() ? Chunk998502.ZP.ensureModule("discord_game_utils").then(() => {
    let e = Chunk998502.ZP.getGameUtils();
    return null != module && null != module.findLaunchable ? (S = module, module) : Promise.reject(Error("game utils not found"))
  }) : Promise.reject(Error("not desktop client"))
}

function N(e) {
  let t = {
      id: e.id,
      name: e.name,
      thirdPartySkus: e.thirdPartySkus,
      executables: e.executables.filter(e => e.os === (0, f.getPlatformName)()).map(e => e.name)
    },
    n = e.aliases.map(e => b(g({}, t), {
      name: e
    }));
  return [t, ...n]
}

function P(e) {
  return {
    id: e
  }
}
async function R(e) {
  if (Array.isArray(e) || (e = [e]), c.Z.isDeveloper || (e = e.filter(e => null == e.thirdPartySkus || false === e.thirdPartySkus.findIndex(e => {
      let {
        distributor: t
      } = e;
      return t === m.GQo.BATTLENET
    }))), 0 === e.length) throw Error("No remaining launchable queries");
  let t = Date.now();
  t > v && (v = t + A, O = {});
  let n = await C();
  for (let t of e) {
    let e = O[t.id];
    if (null != e) return e;
    let r = await new Promise(e => n.findLaunchable(t, e));
    if (null != r) return O[t.id] = r, r
  }
  throw Error("could not find launchable")
}

function D(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0;
  if (e()) return void t();
  setTimeout(() => {
    r * I <= T ? D(e, t, n, r + 1) : n()
  }, I)
}

function w(e) {
  return y.info("launch", e), new Promise((t, n) => {
    null == p.Z.safeParseWithQuery(e.launchTarget) ? n(Error("Failed to parse launch target. ".concat(e.launchTarget))) : (window.open(e.launchTarget), t([]))
  })
}
let x = {
  waitSubscribed: (e, t) => new Promise((n, r) => D(() => o.Z.isSubscribed(e, t), n, r)),
  waitConnected(e) {
    return new Promise(D.bind(this, () => l.Z.isConnected(e)))
  },
  isLaunchable: e => R(N(e)).then(e => null != e).catch(() => false),
  launch: e => R(N(e)).then(w),
  launchDispatchApplication(e, t, n, i, o) {
    let {
      launchOptions: l,
      defaultLaunchOptionId: c,
      installPath: f,
      applicationId: p,
      branchId: _,
      buildId: h,
      shouldPatch: g
    } = e;
    if (null == l || null == c || null == f) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
    null == o && (o = c);
    let E = l[o];
    if (null == E) throw Error("Couldn't construct launchable for ".concat(e.applicationId, ". No launch option."));
    return (0, r.o)([_]).then(e => {
      let t = e[0];
      if (null == t) return Promise.reject(Error("branch is null"));
      let {
        liveBuildId: n
      } = t;
      if (g && n !== h) return Promise.reject(Error("live build id changed"))
    }).then(() => d.Z.runLaunchSetup(p, _)).then(() => {
      let e = (0, a.Z)(f),
        r = {
          DISCORD_INSTANCE_ID: u.Z.getId().toString(),
          DISCORD_ACCESS_TOKEN: null != t ? t : "",
          DISCORD_CURRENT_LOCALE: n,
          DISCORD_CURRENT_BRANCH: i,
          DISCORD_STORAGE_PATH: m.SRg.ROOT_STORAGE_PATH(e, s.default.getId())
        };
      return d.Z.launch(p, _, E.name, r)
    })
  },
  removeShortcuts: e => (0, f.isWindows)() ? C().then(t => {
    var n, r;
    return null != (r = null == (n = t.removeShortcuts) ? true : n.call(t, e)) && r
  }) : Promise.resolve(false),
  createShortcuts(e, t, n, r, i) {
    if (null == i || !(0, f.isWindows)()) return Promise.resolve(false);
    let a = "discord:///library/".concat(r, "/launch"),
      o = "".concat(i, "\\icon.ico");
    return C().then(r => {
      var i, s;
      return null != (s = null == (i = r.createShortcuts) ? true : i.call(r, e, t, n, a, o)) && s
    })
  },
  isGameLaunchable: e => R(P(e)).then(e => null != e).catch(() => false),
  launchGame: e => l.Z.isConnected(e) ? Promise.resolve() : R(P(e)).then(w),
  isProtocolRegistered: e => C().then(t => {
    var n, r;
    return null != (r = null == (n = t.isProtocolSchemeRegistered) ? true : n.call(t, e)) && r
  }).catch(() => false),
  setRecentGames(e) {
    C().then(t => {
      var n;
      return null == (n = t.setRecentGames) ? true : n.call(t, e)
    }).catch(() => {})
  }
}