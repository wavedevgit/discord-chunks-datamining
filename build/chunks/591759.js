/** Chunk was on web.js **/
/** chunk id: 591759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk628735 = require("./628735.js"),
  i = require.n(Chunk628735),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk729594 = require("./729594.js"),
  Chunk823379 = require("./823379.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js");
let d = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
  f = /^.*\.discordapp\.net$/,
  _ = /^.*\.media\.discordapp\.net$/,
  p = "(?:(?:[a-z]+:)?//)",
  h = "(?:\\S+(?::\\S*)?@)?",
  m = i().v4().source,
  g = "(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+",
  E = "(?:(?:[a-z\\u00a1-\\uffff]{2,}))",
  b = "(?::\\d{2,5})?",
  y = '(?:[/?#][^\\s"]*)?',
  O = RegExp("(?:".concat(p, "|www\\.)").concat(h, "(?:localhost|").concat(m, "|").concat(g).concat(E, ")").concat(b).concat(y), "ig"),
  v = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

function I(e, t) {
  return null != e && null != t && e !== t
}

function T(e) {
  return v.has(e.toLowerCase())
}

function S(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return null != e && (d.test(e) || t && T(e))
}

function A(e) {
  return null != e && "discord:" === e
}

function C(e) {
  if (null == e) returnfalse;
  let t = c.Z.toURLSafe(e);
  return null != t && (!!(0, l.ii)() && ("localhost" === t.hostname || "127.0.0.1" === t.hostname) || t.hostname === window.GLOBAL_ENV.CDN_HOST || f.test(t.hostname))
}

function N(e, t, n) {
  if (!I(t, n) || null == e) returnfalse;
  let r = c.Z.toURLSafe(e);
  return null != r && (!!(0, l.ii)() && ("localhost" === r.hostname || "127.0.0.1" === r.hostname) && "4000" === r.port || _.test(r.hostname))
}

function R(e, t, n) {
  return !!(C(e) || N(e, t, n))
}

function P(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (null != e) {
    var n;
    let r = null == (n = c.Z.toURLSafe(e)) ? true : n.hostname;
    if (null != r && S(r, t)) returntrue
  }
  returnfalse
}

function w(e) {
  return null != e && A(s.parse(e).protocol)
}
let D = {
  URL_REGEX: O,
  makeUrl: function(e, t) {
    let n = (null != t ? t : (0, l.Hc)()) ? window.GLOBAL_ENV.INVITE_HOST : location.host;
    return "".concat(location.protocol, "//").concat(n).concat(e)
  },
  isOriginalContentTypeDifferent: I,
  isDiscordHostname: S,
  isDiscordLocalhost: function(e, t) {
    return null != e && null != t && window.location.host === e
  },
  isDiscordProtocol: A,
  isDiscordUrl: P,
  isDiscordUri: w,
  isDiscordCdnUrl: function(e) {
    return null != e && s.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
  },
  isDiscordDirectAssetUrl: C,
  isDiscordProxiedAssetUrl: N,
  isDiscordAssetUrl: R,
  isDiscordUrlOrUri: e => P(e) || w(e),
  isAppRoute: e => {
    let t = e.toLowerCase();
    return t.startsWith("/channels/") || t.startsWith(u.Z5c.APPLICATION_STORE) || t.startsWith(u.Z5c.APPLICATION_LIBRARY) || t.startsWith(u.Z5c.MESSAGE_REQUESTS) || t.startsWith(u.Z5c.FAMILY_CENTER) || t.startsWith(u.Z5c.ACTIVITIES) || t.startsWith(u.Z5c.COLLECTIBLES_SHOP) || t.startsWith("/feature/boost") || t.startsWith(u.Z5c.ACTIVITY)
  },
  format: e => s.format(e),
  formatPathWithQuery: (e, t) => s.format({
    pathname: e,
    query: o().pickBy(t)
  }),
  formatSearch: e => s.format({
    query: o().pickBy(e)
  }),
  safeParseWithQuery(e) {
    try {
      return s.parse(e, true)
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