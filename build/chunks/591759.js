/** Chunk was on web.js **/
/** chunk id: 591759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk628735 = require("./628735.js"),
  i = require.n(Chunk628735),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk729594 = require("./729594.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js");
let u = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
  d = /^.*\.discordapp\.net$/,
  f = "(?:(?:[a-z]+:)?//)",
  _ = "(?:\\S+(?::\\S*)?@)?",
  p = i().v4().source,
  h = "(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+",
  m = "(?:(?:[a-z\\u00a1-\\uffff]{2,}))",
  g = "(?::\\d{2,5})?",
  E = '(?:[/?#][^\\s"]*)?',
  b = RegExp("(?:".concat(f, "|www\\.)").concat(_, "(?:localhost|").concat(p, "|").concat(h).concat(m, ")").concat(g).concat(E), "ig"),
  y = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]),
  O = false;

function v(e) {
  return y.has(e.toLowerCase())
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return null != e && (u.test(e) || t && v(e))
}

function T(e) {
  return null != e && "discord:" === e
}

function S(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (null != e) {
    var n;
    let r = null == (n = l.Z.toURLSafe(e)) ? true : n.hostname;
    if (null != r && I(r, t)) returntrue
  }
  returnfalse
}

function A(e) {
  return null != e && T(s.parse(e).protocol)
}
let N = {
  URL_REGEX: b,
  makeUrl: function(e) {
    let t = O ? window.GLOBAL_ENV.INVITE_HOST : location.host;
    return "".concat(location.protocol, "//").concat(t).concat(e)
  },
  isDiscordHostname: I,
  isDiscordLocalhost: function(e, t) {
    return null != e && null != t && window.location.host === e
  },
  isDiscordProtocol: T,
  isDiscordUrl: S,
  isDiscordUri: A,
  isDiscordCdnUrl: function(e) {
    return null != e && s.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
  },
  isDiscordAssetUrl: function(e) {
    if (null == e) returnfalse;
    let t = l.Z.toURLSafe(e);
    return null != t && (t.hostname === window.GLOBAL_ENV.CDN_HOST || d.test(t.hostname))
  },
  isDiscordUrlOrUri: e => S(e) || A(e),
  isAppRoute: e => {
    let t = e.toLowerCase();
    return t.startsWith("/channels/") || t.startsWith(c.Z5c.APPLICATION_STORE) || t.startsWith(c.Z5c.APPLICATION_LIBRARY) || t.startsWith(c.Z5c.MESSAGE_REQUESTS) || t.startsWith(c.Z5c.FAMILY_CENTER) || t.startsWith(c.Z5c.ACTIVITIES) || t.startsWith(c.Z5c.COLLECTIBLES_SHOP) || t.startsWith("/feature/boost") || t.startsWith(c.Z5c.ACTIVITY)
  },
  format: e => s.format(e),
  formatPathWithQuery: (e, t) => s.format({
    pathname: e,
    query: a().pickBy(t)
  }),
  formatSearch: e => s.format({
    query: a().pickBy(e)
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