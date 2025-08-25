/** Chunk was on web.js **/
/** chunk id: 830121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FO: () => es,
  Sq: () => et,
  ZP: () => ea,
  el: () => eo,
  oO: () => G,
  wT: () => ei,
  zO: () => el
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./804061.js"), require("./704826.js"), require("./388685.js"), require("./539854.js");
var r, i, a, o, s, l, c, u, d, Chunk512722 = require("./512722.js"),
  _ = require.n(Chunk512722),
  Chunk159635 = require("./159635.js"),
  h = require.n(Chunk159635),
  Chunk729594 = require("./729594.js"),
  Chunk243814 = require("./243814.js"),
  Chunk421474 = require("./421474.js");
require("./865427.js");
var Chunk264229 = require("./264229.js");
require("./413605.js");
var Chunk807675 = require("./807675.js"),
  Chunk701190 = require("./701190.js"),
  Chunk226951 = require("./226951.js"),
  Chunk591759 = require("./591759.js"),
  Chunk960904 = require("./960904.js"),
  Chunk981631 = require("./981631.js");
let A = 10,
  C = /^\/([a-zA-Z0-9-]+)$/,
  N = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  R = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
  P = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  w = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
  D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
  x = /^\/activities\/([0-9-]+)\/?$/,
  L = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  j = /^\/channels\/([0-9]+)\/shop$/,
  k = /^\/quests\/([0-9-]+)\/?$/,
  M = /^\/oauth2\/authorize/,
  U = /^#itemSkuId=([0-9]+)$/,
  G = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
  B = q(window.GLOBAL_ENV.INVITE_HOST),
  Z = q(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  V = q(null != (o = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? o : "//canary.".concat(Chunk981631.$R1)),
  F = q("//canary.".concat(Chunk981631.$R1)),
  H = q("//ptb.".concat(Chunk981631.$R1)),
  Y = q("discordapp.com"),
  W = q("discord.com"),
  K = [Chunk226951.Z.escape(null != (s = B.host) ? s : ""), Chunk226951.Z.escape(null != (l = Z.host) ? l : ""), Chunk226951.Z.escape(null != (c = V.host) ? c : ""), Chunk226951.Z.escape(null != (u = Y.host) ? u : ""), Chunk226951.Z.escape(null != (d = W.host) ? d : "")].filter(Boolean),
  z = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(K.join("|"), ")"), "g");

function q(e) {
  if (null == e) return {
    host: null,
    pathPrefix: null
  };
  if (e.indexOf("/") >= 0) {
    let t = (0, m.parse)(e, true, true);
    return {
      host: t.host,
      pathPrefix: t.pathname
    }
  }
  return {
    host: e,
    pathPrefix: null
  }
}
let X = e => e.replaceAll(J, " $2 "),
  Q = null == (a = h().defaultRules.link) || null == (i = a.match) || null == (r = i.regex) ? true : r.source;
_()(Q, "SimpleMarkdown link regex is not set."), "^" === Q[0] && (Q = Q.substring(1));
let J = RegExp(Q, "g");

function $(e, t) {
  var n;
  return (null == (n = t.host) ? true : n.replace(/^www[.]/i, "")) === e.host
}

function ee(e, t) {
  var n, r;
  if (!$(e, t)) return null;
  let i = null != (n = t.pathname) ? n : "",
    a = null != (r = e.pathPrefix) ? r : "";
  if (!i.startsWith(a)) return null;
  let o = i.substring(a.length);
  return "" === o ? null : o
}

function et(e) {
  var t, n, r, i;
  return null != (i = null != (r = null != (n = null != (t = ee(V, e)) ? t : ee(F, e)) ? n : ee(H, e)) ? r : ee(Y, e)) ? i : ee(W, e)
}

function en(e) {
  if (null == e) return null;
  let t = e.match(P);
  return null != t && t.length >= 4 ? {
    guildId: t[1],
    guildEventId: t[2],
    recurrenceId: t[4]
  } : null
}

function er(e) {
  var t, n, r, i;
  let a = es(e);
  if (null == a || null == a.pathname) return {
    url: null,
    inviteHostRemainingPath: null,
    templateHostRemainingPath: null,
    primaryHostRemainingPath: null
  };
  let o = ee(B, a),
    s = ee(Z, a),
    l = null != (i = null != (r = null != (n = null != (t = ee(V, a)) ? t : ee(F, a)) ? n : ee(H, a)) ? r : ee(Y, a)) ? i : ee(W, a);
  return {
    url: a,
    inviteHostRemainingPath: o,
    templateHostRemainingPath: s,
    primaryHostRemainingPath: l
  }
}

function ei(e) {
  if (e.includes("\\")) {
    let r = es(e);
    if (null == r) returnfalse;
    if ($(B, r)) returntrue;
    if ([V, F, H, Y, W].some(e => $(e, r))) {
      var t, n;
      return null != (n = null == (t = r.pathname) ? true : t.toUpperCase().includes(T.g.INVITE)) && n
    }
  }
  returnfalse
}

function ea(e) {
  if (null == e) return [];
  let t = new Set,
    n = [],
    r = X(e = e.replace(z, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(I.Z.URL_REGEX),
    i = e.match(G);
  if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
  for (let e of r) {
    var a, o, s;
    if (n.length >= A) break;
    let {
      url: r,
      inviteHostRemainingPath: i,
      templateHostRemainingPath: l,
      primaryHostRemainingPath: c
    } = er(e);
    if (null == r || null == r.pathname) continue;
    let u = (r, i) => {
      t.has(i) || (t.add(i), n.push({
        type: r,
        code: i,
        url: e
      }))
    };
    if ((null == i ? true : i.match(C)) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
      let t = (0, b.mb)(i.substring(1), r.search);
      if (O.Z.getInvite(t), e.includes("\\")) continue;
      u(T.g.INVITE, t)
    }(null == l ? true : l.match(C)) != null && u(T.g.TEMPLATE, l.substring(1));
    let d = null == c ? true : c.match(R);
    if (null != d) {
      let t = d[1].toUpperCase();
      if (t === T.g.INVITE) {
        if (e.includes("\\")) continue;
        let t = (0, b.mb)(d[2], r.search);
        u(T.g.INVITE, t)
      } else u(t, d[2])
    }(null == c ? true : c.match(N)) != null && u(T.g.CHANNEL_LINK, c.replace("/channels/", ""));
    let f = en(r.pathname);
    if (null != f && u(T.g.EVENT, "".concat(f.guildId, "-").concat(f.guildEventId) + (null != f.recurrenceId ? "-".concat(f.recurrenceId) : "")), null != (null == c ? true : c.match(M)) && null != r.query) {
      let e = (0, y.y)(r.query),
        t = e.clientId;
      null == t || "" === t || (null == (a = e.scopes) ? true : a.some(e => e !== g.x.APPLICATIONS_COMMANDS)) || u(T.g.APP_OAUTH2_LINK, t)
    }
    let _ = null == c ? true : c.match(w);
    if (null != _) {
      let e = _[2];
      u(T.g.APP_DIRECTORY_PROFILE, e)
    }
    let p = null == c ? true : c.match(D);
    if (null != p) {
      let e = p[2],
        t = p[3];
      if (null != t) {
        let n = (0, E.l)(e, t);
        u(T.g.APP_DIRECTORY_STOREFRONT_SKU, n)
      } else u(T.g.APP_DIRECTORY_STOREFRONT, e)
    }
    let h = null == c ? true : c.match(x);
    if (null != h) {
      let e = h[1];
      u(T.g.ACTIVITY_BOOKMARK, e)
    }
    let m = null == c ? true : c.match(L);
    null != m && u(T.g.GUILD_PRODUCT, "".concat(m[1], "-").concat(m[2]));
    let v = null == c ? true : c.match(j);
    null != v && u(T.g.SERVER_SHOP, v[1]);
    let I = eo(e);
    if (null != I && u(T.g.QUESTS_EMBED, I), "/shop" === c) {
      let e = null == (o = r.hash) ? true : o.match(U);
      u(T.g.COLLECTIBLES_SHOP, null != (s = null == e ? true : e[1]) ? s : "")
    }
  }
  return n
}

function eo(e) {
  var t, n;
  let r = er(e),
    i = null == r || null == (t = r.primaryHostRemainingPath) ? true : t.match(k);
  return null != (n = null == i ? true : i[1]) ? n : null
}

function es(e) {
  try {
    return (0, m.parse)(e)
  } catch (e) {
    return null
  }
}

function el(e) {
  return ea(e)[0]
}