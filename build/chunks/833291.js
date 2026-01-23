/** Chunk was on web.js **/
/** chunk id: 833291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eo,
  br: () => eu,
  l7: () => ec,
  rL: () => es,
  st: () => F,
  tl: () => er,
  ts: () => el
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./812715.js"), require("./866193.js"), require("./896048.js"), require("./321073.js");
var r, i, a, s, o, l, c, u, d, Chunk284009 = require("./284009.js"),
  p = require.n(Chunk284009),
  Chunk492462 = require("./492462.js"),
  Chunk280230 = require("./280230.js"),
  m = require.n(Chunk280230),
  Chunk567243 = require("./567243.js"),
  Chunk179771 = require("./179771.js"),
  Chunk121401 = require("./121401.js");
require("./380610.js"), require("./100392.js");
var Chunk21599 = require("./21599.js");
require("./346542.js");
var Chunk123677 = require("./123677.js"),
  Chunk299091 = require("./299091.js"),
  Chunk257120 = require("./257120.js"),
  Chunk998218 = require("./998218.js"),
  Chunk167189 = require("./167189.js"),
  Chunk652215 = require("./652215.js");
let C = 10,
  N = /^\/([a-zA-Z0-9-]+)$/,
  R = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  w = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
  P = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
  x = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
  L = /^\/activities\/([0-9-]+)\/?$/,
  j = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  M = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
  k = /^\/channels\/([0-9]+)\/shop$/,
  U = /^\/quests\/([0-9-]+)\/?$/,
  G = /^\/oauth2\/authorize/,
  V = /^#itemSkuId=([0-9]+)$/,
  F = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
  B = Q(window.GLOBAL_ENV.INVITE_HOST),
  H = Q(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  Y = Q(null != (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? r : "//canary.".concat(Chunk652215.U2_)),
  W = Q("//canary.".concat(Chunk652215.U2_)),
  K = Q("//ptb.".concat(Chunk652215.U2_)),
  z = Q("discordapp.com"),
  q = Q("discord.com"),
  X = [Chunk257120.A.escape(null != (i = B.host) ? i : ""), Chunk257120.A.escape(null != (a = H.host) ? a : ""), Chunk257120.A.escape(null != (s = Y.host) ? s : ""), Chunk257120.A.escape(null != (o = z.host) ? o : ""), Chunk257120.A.escape(null != (l = q.host) ? l : "")].filter(Boolean),
  Z = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(X.join("|"), ")"), "g");

function Q(e) {
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
let $ = e => e.replaceAll(ee, " $2 "),
  J = null == (d = m().defaultRules.link) || null == (u = d.match) || null == (c = u.regex) ? true : c.source;
p()(J, "SimpleMarkdown link regex is not set."), "^" === J[0] && (J = J.substring(1));
let ee = RegExp(J, "g");

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
  let s = i.substring(a.length);
  return "" === s ? null : s
}

function er(e) {
  var t, n, r, i;
  return null != (t = null != (n = null != (r = null != (i = en(Y, e)) ? i : en(W, e)) ? r : en(K, e)) ? n : en(z, e)) ? t : en(q, e)
}

function ei(e) {
  if (null == e) return null;
  let t = e.match(P);
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
  let s = en(B, a),
    o = en(H, a),
    l = null != (t = null != (n = null != (r = null != (i = en(Y, a)) ? i : en(W, a)) ? r : en(K, a)) ? n : en(z, a)) ? t : en(q, a);
  return {
    url: a,
    inviteHostRemainingPath: s,
    templateHostRemainingPath: o,
    primaryHostRemainingPath: l
  }
}

function es(e) {
  if (e.includes("\\")) {
    let r = ec(e);
    if (null == r) returnfalse;
    if (et(B, r)) returntrue;
    if ([Y, W, K, z, q].some(e => et(e, r))) {
      var t, n;
      return null != (t = null == (n = r.pathname) ? true : n.toUpperCase().includes(S.I.INVITE)) && t
    }
  }
  returnfalse
}

function eo(e) {
  if (null == e) return [];
  let t = new Set,
    n = [],
    r = $(e = e.replace(Z, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(I.A.URL_REGEX),
    i = e.match(F);
  if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
  for (let e of r) {
    var a, s, o, l;
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
      let t = (0, b.fB)(i.substring(1), r.search);
      if (v.A.getInvite(t), e.includes("\\")) continue;
      d(S.I.INVITE, t)
    }(null == c ? true : c.match(N)) != null && d(S.I.TEMPLATE, c.substring(1));
    let f = null == u ? true : u.match(w);
    if (null != f) {
      let t = f[1].toUpperCase();
      if (t === S.I.INVITE) {
        if (e.includes("\\")) continue;
        let t = (0, b.fB)(f[2], r.search);
        d(S.I.INVITE, t)
      } else d(t, f[2])
    }(null == u ? true : u.match(R)) != null && d(S.I.CHANNEL_LINK, u.replace("/channels/", ""));
    let p = ei(r.pathname);
    if (null != p && d(S.I.EVENT, "".concat(p.guildId, "-").concat(p.guildEventId) + (null != p.recurrenceId ? "-".concat(p.recurrenceId) : "")), null != (null == u ? true : u.match(G)) && null != r.query) {
      let e = (0, O._)(r.query),
        t = e.clientId;
      null == t || "" === t || (null == (a = e.scopes) ? true : a.some(e => e !== E.F.APPLICATIONS_COMMANDS)) || d(S.I.APP_OAUTH2_LINK, t)
    }
    let h = null == u ? true : u.match(D);
    if (null != h) {
      let e = h[2];
      d(S.I.APP_DIRECTORY_PROFILE, e)
    }
    let m = null == u ? true : u.match(x);
    if (null != m) {
      let e = m[2],
        t = m[3];
      if (null != t) {
        let n = (0, y.L)(e, t);
        d(S.I.APP_DIRECTORY_STOREFRONT_SKU, n)
      } else d(S.I.APP_DIRECTORY_STOREFRONT, e)
    }
    let g = null == u ? true : u.match(L);
    if (null != g) {
      let e = g[1];
      d(S.I.ACTIVITY_BOOKMARK, e)
    }
    let A = null == u ? true : u.match(j);
    null != A && d(S.I.GUILD_PRODUCT, "".concat(A[1], "-").concat(A[2]));
    let I = null == u ? true : u.match(k);
    null != I && d(S.I.SERVER_SHOP, I[1]);
    let T = null == u ? true : u.match(M);
    null != T && d(S.I.SOCIAL_LAYER_STOREFRONT, "".concat(T[3], "-").concat(null != (s = T[1]) ? s : T[2]));
    let P = el(e);
    if (null != P && d(S.I.QUESTS_EMBED, P), "/shop" === u) {
      let e = null != r.query ? (0, _.parse)(r.query).tab : null,
        t = null == (l = r.hash) ? true : l.match(V);
      d(S.I.COLLECTIBLES_SHOP, "".concat(null != e ? e : "", "-").concat(null != (o = null == t ? true : t[1]) ? o : ""))
    }
  }
  return n
}

function el(e) {
  var t, n;
  let r = ea(e),
    i = null == r || null == (n = r.primaryHostRemainingPath) ? true : n.match(U);
  return null != (t = null == i ? true : i[1]) ? t : null
}

function ec(e) {
  try {
    return (0, g.parse)(e)
  } catch (e) {
    return null
  }
}

function eu(e) {
  return eo(e)[0]
}