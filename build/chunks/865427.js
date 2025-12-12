/** Chunk was on web.js **/
/** chunk id: 865427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ce: () => p,
  Ji: () => d,
  _G: () => E,
  _I: () => _,
  _S: () => h,
  fD: () => m,
  mG: () => y,
  pU: () => f,
  r4: () => T
}), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./413496.js"), require("./433524.js"), require("./388685.js");
var Chunk973361 = require("./973361.js"),
  Chunk729594 = require("./729594.js"),
  Chunk544891 = require("./544891.js"),
  Chunk358085 = require("./358085.js"),
  Chunk591759 = require("./591759.js"),
  Chunk908442 = require("./908442.js");
require("./981631.js");
let c = true,
  u = "/__development/build_overrides",
  d = (0, Chunk358085.isAndroid)() ? c.Version.split(" - ")[0] : (0, Chunk358085.isIOS)() ? c.Version : true;

function f(e) {
  return "".concat(location.protocol, "//").concat(location.host).concat(e)
}

function p() {
  let e = Chunk591759.Z.safeParseWithQuery(f(u));
  return null == module ? Promise.resolve(null) : (module.search = null, d && (module.query.version = d), Chunk544891.tn.get({
    url: Chunk729594.format(module),
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => e.body || null, () => null))
}

function _(e) {
  if (y(e)) return Promise.resolve(O(e));
  let t = s.Z.safeParseWithQuery(e);
  return null == t ? Promise.resolve(null) : (t.search = null, t.query.meta = "true", d && (t.query.version = d), t.host = window.location.host, o.tn.get({
    url: i.format(t),
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => e.body || null, () => null))
}

function m() {
  return false !== window.document.cookie.indexOf("".concat(Chunk908442.ZF, "="))
}

function h() {
  try {
    var e;
    let t = Chunk973361.parse(window.document.cookie)[Chunk908442.ZF];
    if (null == exports) return {};
    return null != (e = JSON.parse(atob(exports.substring(exports.indexOf(".") + 1))).$meta.experiments) ? module : {}
  } catch (e) {
    return {}
  }
}
let g = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");

function E(e) {
  return null != e && g.test(e)
}
let b = RegExp("^dev://branch/([\\w-./]+)$", "i");

function y(e) {
  return null != e && b.test(e)
}

function O(e) {
  let t = e.match(b);
  if (null == t || 2 !== t.length) return null;
  let n = (0, a.getNativePlatform)(),
    r = t[1];
  return {
    targetBuildOverride: {
      ["discord_".concat(n)]: {
        type: "branch",
        id: r
      }
    },
    validForUserIds: [],
    expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT"
  }
}
let v = "s",
  S = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]),
  I = new Set(["/__development/link", "/__development/link/"]);

function T(e) {
  if (y(e)) return {
    payload: null,
    url: e
  };
  let t = s.Z.safeParseWithQuery(e);
  if (null == t || !S.has(t.hostname) || !(v in t.query) || !I.has(t.pathname)) return null;
  for (let e in t.query) e !== v && delete t.query[e];
  return {
    payload: t.query[v],
    url: i.format(t)
  }
}