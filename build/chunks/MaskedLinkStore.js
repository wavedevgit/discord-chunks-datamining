/** Chunk was on web.js **/
/** chunk id: 20303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk591759 = require("./591759.js"),
  Chunk902676 = require("./902676.js"),
  Chunk616922 = require("./616922.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "MaskedLinkStore",
  p = new Set,
  _ = new Set,
  m = null == (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? true : r.replace("//", "");

function h(e) {
  let t = (0, c.F)(e);
  switch (t) {
    case window.GLOBAL_ENV.INVITE_HOST:
    case window.GLOBAL_ENV.GIFT_CODE_HOST:
    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
    case m:
    case location.hostname:
      returntrue;
    default:
      return u.SD.includes(t) || l.Z.isDiscordHostname(t) || p.has(t)
  }
}

function g(e) {
  let t = (0, c.E)(e);
  return _.has(t)
}

function E(e) {
  let {
    url: t
  } = e;
  if (h(t)) returnfalse;
  p.add((0, c.F)(t)), o.K.set(f, {
    trustedDomains: p,
    trustedProtocols: _
  })
}

function b(e) {
  let {
    url: t
  } = e;
  if (g(t)) returnfalse;
  _.add((0, c.E)(t)), o.K.set(f, {
    trustedDomains: p,
    trustedProtocols: _
  })
}
class y extends(i = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    let t = null != (e = o.K.get(f)) ? e : {};
    if (Array.isArray(t)) p = new Set(null != t ? Array.from(t) : null), _ = new Set;
    else {
      let {
        trustedDomains: e,
        trustedProtocols: n
      } = t;
      p = new Set(null != e ? Array.from(e) : null), _ = new Set(null != n ? Array.from(n) : null)
    }
  }
  isTrustedDomain(e) {
    return h(e)
  }
  isTrustedProtocol(e) {
    return g(e)
  }
}
d(y, "displayName", "MaskedLinkStore");
let O = new y(Chunk570140.Z, {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: E,
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: b
})