/** Chunk was on web.js **/
/** chunk id: 998218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk477450 = require("./477450.js"),
  i = require.n(Chunk477450),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk567243 = require("./567243.js"),
  Chunk403362 = require("./403362.js"),
  Chunk998218 = require("./998218.js"),
  Chunk652215 = require("./652215.js");
let d = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
  f = /^.*\.discordapp\.net$/,
  p = /^.*\.media\.discordapp\.net$/,
  _ = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com", "static.klipy.com", "media.giphy.com", "i.giphy.com"]),
  h = "(?:(?:[a-z]+:)?//)",
  m = "(?:\\S+(?::\\S*)?@)?",
  g = i().v4().source,
  E = "(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+",
  y = "(?:(?:[a-z\\u00a1-\\uffff]{2,}))",
  b = "(?::\\d{2,5})?",
  O = '(?:[/?#][^\\s"]*)?',
  v = RegExp("(?:".concat(h, "|www\\.)").concat(m, "(?:localhost|").concat(g, "|").concat(E).concat(y, ")").concat(b).concat(O), "ig"),
  A = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

function I(e, t) {
  return null != e && null != t && e !== t
}

function S(e) {
  return A.has(e.toLowerCase())
}

function T(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return null != e && (d.test(e) || t && S(e))
}

function C(e) {
  return null != e && "discord:" === e
}

function N(e) {
  if (null == e) returnfalse;
  let t = c.A.toURLSafe(e);
  return null != t && (!!(0, l.iT)() && ("localhost" === t.hostname || "127.0.0.1" === t.hostname) || t.hostname === window.GLOBAL_ENV.CDN_HOST || f.test(t.hostname))
}

function w(e, t, n) {
  if (!I(t, n) || null == e) returnfalse;
  let r = c.A.toURLSafe(e);
  return null != r && (!!(0, l.iT)() && ("localhost" === r.hostname || "127.0.0.1" === r.hostname) && "4000" === r.port || p.test(r.hostname))
}

function R(e) {
  if (null == e) returnfalse;
  let t = c.A.toURLSafe(e);
  return null != t && _.has(t.hostname)
}

function P(e, t, n) {
  return !!(N(e) || w(e, t, n) || R(e))
}

function D(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (null != e) {
    var n;
    let r = null == (n = c.A.toURLSafe(e)) ? true : n.hostname;
    if (null != r && T(r, t)) returntrue
  }
  returnfalse
}

function x(e) {
  return null != e && C(o.parse(e).protocol)
}
let L = {
  URL_REGEX: v,
  makeUrl: function(e, t) {
    let n = (null != t ? t : (0, l.m6)()) ? window.GLOBAL_ENV.INVITE_HOST : location.host;
    return "".concat(location.protocol, "//").concat(n).concat(e)
  },
  isOriginalContentTypeDifferent: I,
  isDiscordHostname: T,
  isDiscordLocalhost: function(e, t) {
    return null != e && null != t && window.location.host === e
  },
  isDiscordProtocol: C,
  isDiscordUrl: D,
  isDiscordUri: x,
  isDiscordCdnUrl: function(e) {
    return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
  },
  isDiscordDirectAssetUrl: N,
  isDiscordProxiedAssetUrl: w,
  isAllowedGifProviderUrl: R,
  isDiscordAssetUrl: P,
  isDiscordUrlOrUri: e => D(e) || x(e),
  isAppRoute: e => {
    let t = e.toLowerCase();
    return t.startsWith("/channels/") || t.startsWith(u.BVt.APPLICATION_STORE) || t.startsWith(u.BVt.APPLICATION_LIBRARY) || t.startsWith(u.BVt.MESSAGE_REQUESTS) || t.startsWith(u.BVt.FAMILY_CENTER) || t.startsWith(u.BVt.ACTIVITIES) || t.startsWith(u.BVt.COLLECTIBLES_SHOP) || t.startsWith("/feature/boost") || t.startsWith(u.BVt.ACTIVITY)
  },
  format: e => o.format(e),
  formatPathWithQuery: (e, t) => o.format({
    pathname: e,
    query: s().pickBy(t)
  }),
  formatSearch: e => o.format({
    query: s().pickBy(e)
  }),
  safeParseWithQuery(e) {
    try {
      return o.parse(e, true)
    } catch (e) {
      return null
    }
  },
  toURLSafe(e, t) {
    try {
      return new URL(e, t)
    } catch (e) {
      return null
    }
  },
  safeDecodeURIComponent(e) {
    try {
      return decodeURIComponent(e)
    } catch (e) {
      return null
    }
  }
}