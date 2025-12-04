/** Chunk was on web.js **/
/** chunk id: 830121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FO: () => ec,
  Sq: () => er,
  ZP: () => es,
  el: () => el,
  oO: () => B,
  wT: () => eo,
  zO: () => eu
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./804061.js"), require("./704826.js"), require("./388685.js"), require("./539854.js");
var r, i, a, o, s, l, c, u, d, Chunk512722 = require("./512722.js"),
  p = require.n(Chunk512722),
  Chunk593473 = require("./593473.js"),
  Chunk159635 = require("./159635.js"),
  h = require.n(Chunk159635),
  Chunk729594 = require("./729594.js"),
  Chunk243814 = require("./243814.js"),
  Chunk421474 = require("./421474.js");
require("./865427.js"), require("./922699.js");
var Chunk264229 = require("./264229.js");
require("./413605.js");
var Chunk807675 = require("./807675.js"),
  Chunk701190 = require("./701190.js"),
  Chunk226951 = require("./226951.js"),
  Chunk591759 = require("./591759.js"),
  Chunk960904 = require("./960904.js"),
  Chunk981631 = require("./981631.js");
let C = 10,
  N = /^\/([a-zA-Z0-9-]+)$/,
  P = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  R = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
  w = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
  x = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
  L = /^\/activities\/([0-9-]+)\/?$/,
  j = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  M = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
  k = /^\/channels\/([0-9]+)\/shop$/,
  U = /^\/quests\/([0-9-]+)\/?$/,
  G = /^\/oauth2\/authorize/,
  Z = /^#itemSkuId=([0-9]+)$/,
  B = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
  F = X(window.GLOBAL_ENV.INVITE_HOST),
  V = X(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  H = X(null != (o = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? o : "//canary.".concat(Chunk981631.$R1)),
  Y = X("//canary.".concat(Chunk981631.$R1)),
  W = X("//ptb.".concat(Chunk981631.$R1)),
  K = X("discordapp.com"),
  z = X("discord.com"),
  q = [Chunk226951.Z.escape(null != (s = F.host) ? s : ""), Chunk226951.Z.escape(null != (l = V.host) ? l : ""), Chunk226951.Z.escape(null != (c = H.host) ? c : ""), Chunk226951.Z.escape(null != (u = K.host) ? u : ""), Chunk226951.Z.escape(null != (d = z.host) ? d : "")].filter(Boolean),
  Q = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(q.join("|"), ")"), "g");

function X(e) {
  if (null == e) return {
    host: null,
    pathPrefix: null
  };
  if (e.indexOf("/") >= 0) {
    let t = (0, g.parse)(e, true, true);
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
let J = e => e.replaceAll(ee, " $2 "),
  $ = null == (a = h().defaultRules.link) || null == (i = a.match) || null == (r = i.regex) ? true : r.source;
p()($, "SimpleMarkdown link regex is not set."), "^" === $[0] && ($ = $.substring(1));
let ee = RegExp($, "g");

function et(e, t) {
  var n;
  return (null == (n = t.host) ? true : n.replace(/^www[.]/i, "")) === e.host
}

function en(e, t) {
  var n, r;
  if (!et(e, t)) return null;
  let i = null != (n = t.pathname) ? n : "",
    a = null != (r = e.pathPrefix) ? r : "";
  if (!i.startsWith(a)) return null;
  let o = i.substring(a.length);
  return "" === o ? null : o
}

function er(e) {
  var t, n, r, i;
  return null != (i = null != (r = null != (n = null != (t = en(H, e)) ? t : en(Y, e)) ? n : en(W, e)) ? r : en(K, e)) ? i : en(z, e)
}

function ei(e) {
  if (null == e) return null;
  let t = e.match(w);
  return null != t && t.length >= 4 ? {
    guildId: t[1],
    guildEventId: t[2],
    recurrenceId: t[4]
  } : null
}

function ea(e) {
  var t, n, r, i;
  let a = ec(e);
  if (null == a || null == a.pathname) return {
    url: null,
    inviteHostRemainingPath: null,
    templateHostRemainingPath: null,
    primaryHostRemainingPath: null
  };
  let o = en(F, a),
    s = en(V, a),
    l = null != (i = null != (r = null != (n = null != (t = en(H, a)) ? t : en(Y, a)) ? n : en(W, a)) ? r : en(K, a)) ? i : en(z, a);
  return {
    url: a,
    inviteHostRemainingPath: o,
    templateHostRemainingPath: s,
    primaryHostRemainingPath: l
  }
}

function eo(e) {
  if (e.includes("\\")) {
    let r = ec(e);
    if (null == r) returnfalse;
    if (et(F, r)) returntrue;
    if ([H, Y, W, K, z].some(e => et(e, r))) {
      var t, n;
      return null != (n = null == (t = r.pathname) ? true : t.toUpperCase().includes(T.g.INVITE)) && n
    }
  }
  returnfalse
}

function es(e) {
  if (null == e) return [];
  let t = new Set,
    n = [],
    r = J(e = e.replace(Q, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(I.Z.URL_REGEX),
    i = e.match(B);
  if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
  for (let e of r) {
    var a, o, s, l;
    if (n.length >= C) break;
    let {
      url: r,
      inviteHostRemainingPath: i,
      templateHostRemainingPath: c,
      primaryHostRemainingPath: u
    } = ea(e);
    if (null == r || null == r.pathname) continue;
    let d = (r, i) => {
      t.has(i) || (t.add(i), n.push({
        type: r,
        code: i,
        url: e
      }))
    };
    if ((null == i ? true : i.match(N)) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
      let t = (0, y.mb)(i.substring(1), r.search);
      if (v.Z.getInvite(t), e.includes("\\")) continue;
      d(T.g.INVITE, t)
    }(null == c ? true : c.match(N)) != null && d(T.g.TEMPLATE, c.substring(1));
    let f = null == u ? true : u.match(R);
    if (null != f) {
      let t = f[1].toUpperCase();
      if (t === T.g.INVITE) {
        if (e.includes("\\")) continue;
        let t = (0, y.mb)(f[2], r.search);
        d(T.g.INVITE, t)
      } else d(t, f[2])
    }(null == u ? true : u.match(P)) != null && d(T.g.CHANNEL_LINK, u.replace("/channels/", ""));
    let p = ei(r.pathname);
    if (null != p && d(T.g.EVENT, "".concat(p.guildId, "-").concat(p.guildEventId) + (null != p.recurrenceId ? "-".concat(p.recurrenceId) : "")), null != (null == u ? true : u.match(G)) && null != r.query) {
      let e = (0, O.y)(r.query),
        t = e.clientId;
      null == t || "" === t || (null == (a = e.scopes) ? true : a.some(e => e !== E.x.APPLICATIONS_COMMANDS)) || d(T.g.APP_OAUTH2_LINK, t)
    }
    let m = null == u ? true : u.match(D);
    if (null != m) {
      let e = m[2];
      d(T.g.APP_DIRECTORY_PROFILE, e)
    }
    let h = null == u ? true : u.match(x);
    if (null != h) {
      let e = h[2],
        t = h[3];
      if (null != t) {
        let n = (0, b.l)(e, t);
        d(T.g.APP_DIRECTORY_STOREFRONT_SKU, n)
      } else d(T.g.APP_DIRECTORY_STOREFRONT, e)
    }
    let g = null == u ? true : u.match(L);
    if (null != g) {
      let e = g[1];
      d(T.g.ACTIVITY_BOOKMARK, e)
    }
    let S = null == u ? true : u.match(j);
    null != S && d(T.g.GUILD_PRODUCT, "".concat(S[1], "-").concat(S[2]));
    let I = null == u ? true : u.match(k);
    null != I && d(T.g.SERVER_SHOP, I[1]);
    let A = null == u ? true : u.match(M);
    null != A && d(T.g.SOCIAL_LAYER_STOREFRONT, "".concat(A[3], "-").concat(null != (o = A[1]) ? o : A[2]));
    let w = el(e);
    if (null != w && d(T.g.QUESTS_EMBED, w), "/shop" === u) {
      let e = null != r.query ? (0, _.parse)(r.query).tab : null,
        t = null == (s = r.hash) ? true : s.match(Z);
      d(T.g.COLLECTIBLES_SHOP, "".concat(null != e ? e : "", "-").concat(null != (l = null == t ? true : t[1]) ? l : ""))
    }
  }
  return n
}

function el(e) {
  var t, n;
  let r = ea(e),
    i = null == r || null == (t = r.primaryHostRemainingPath) ? true : t.match(U);
  return null != (n = null == i ? true : i[1]) ? n : null
}

function ec(e) {
  try {
    return (0, g.parse)(e)
  } catch (e) {
    return null
  }
}

function eu(e) {
  return es(e)[0]
}