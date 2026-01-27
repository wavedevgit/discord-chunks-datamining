/** Chunk was on web.js **/
/** chunk id: 259439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk998218 = require("./998218.js"),
  Chunk155078 = require("./155078.js"),
  Chunk272984 = require("./272984.js");

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
  h = null == (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? true : r.replace("//", "");

function m(e) {
  let t = (0, c.E)(e);
  switch (t) {
    case window.GLOBAL_ENV.INVITE_HOST:
    case window.GLOBAL_ENV.GIFT_CODE_HOST:
    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
    case h:
    case location.hostname:
      returntrue;
    default:
      return u.UN.includes(t) || l.A.isDiscordHostname(t) || p.has(t)
  }
}

function g(e) {
  let t = (0, c.J)(e);
  return _.has(t)
}

function E(e) {
  let {
    url: t
  } = e;
  if (m(t)) returnfalse;
  p.add((0, c.E)(t)), o.w.set(f, {
    trustedDomains: p,
    trustedProtocols: _
  })
}

function y(e) {
  let {
    url: t
  } = e;
  if (g(t)) returnfalse;
  _.add((0, c.J)(t)), o.w.set(f, {
    trustedDomains: p,
    trustedProtocols: _
  })
}
class b extends(i = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    let t = null != (e = o.w.get(f)) ? e : {};
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
    return m(e)
  }
  isTrustedProtocol(e) {
    return g(e)
  }
}
d(b, "displayName", "MaskedLinkStore");
let O = new b(Chunk73153.h, {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: E,
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: y
})