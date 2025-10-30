/** Chunk was on web.js **/
/** chunk id: 830121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FO: () => el,
  Sq: () => en,
  ZP: () => eo,
  el: () => es,
  oO: () => B,
  wT: () => ea,
  zO: () => ec
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./804061.js"), require("./704826.js"), require("./388685.js"), require("./539854.js");
var r, i, a, o, s, l, c, u, d, Chunk512722 = require("./512722.js"),
  _ = require.n(Chunk512722),
  Chunk593473 = require("./593473.js"),
  Chunk159635 = require("./159635.js"),
  m = require.n(Chunk159635),
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
let C = 10,
  N = /^\/([a-zA-Z0-9-]+)$/,
  R = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  P = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
  w = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
  L = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
  x = /^\/activities\/([0-9-]+)\/?$/,
  M = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  k = /^\/channels\/([0-9]+)\/shop$/,
  j = /^\/quests\/([0-9-]+)\/?$/,
  U = /^\/oauth2\/authorize/,
  G = /^#itemSkuId=([0-9]+)$/,
  B = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
  Z = X(window.GLOBAL_ENV.INVITE_HOST),
  F = X(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  V = X(null != (o = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? o : "//canary.".concat(Chunk981631.$R1)),
  H = X("//canary.".concat(Chunk981631.$R1)),
  Y = X("//ptb.".concat(Chunk981631.$R1)),
  W = X("discordapp.com"),
  K = X("discord.com"),
  z = [Chunk226951.Z.escape(null != (s = Z.host) ? s : ""), Chunk226951.Z.escape(null != (l = F.host) ? l : ""), Chunk226951.Z.escape(null != (c = V.host) ? c : ""), Chunk226951.Z.escape(null != (u = W.host) ? u : ""), Chunk226951.Z.escape(null != (d = K.host) ? d : "")].filter(Boolean),
  q = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(z.join("|"), ")"), "g");

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
let Q = e => e.replaceAll($, " $2 "),
  J = null == (a = m().defaultRules.link) || null == (i = a.match) || null == (r = i.regex) ? true : r.source;
_()(J, "SimpleMarkdown link regex is not set."), "^" === J[0] && (J = J.substring(1));
let $ = RegExp(J, "g");

function ee(e, t) {
  var n;
  return (null == (n = t.host) ? true : n.replace(/^www[.]/i, "")) === e.host
}

function et(e, t) {
  var n, r;
  if (!ee(e, t)) return null;
  let i = null != (n = t.pathname) ? n : "",
    a = null != (r = e.pathPrefix) ? r : "";
  if (!i.startsWith(a)) return null;
  let o = i.substring(a.length);
  return "" === o ? null : o
}

function en(e) {
  var t, n, r, i;
  return null != (i = null != (r = null != (n = null != (t = et(V, e)) ? t : et(H, e)) ? n : et(Y, e)) ? r : et(W, e)) ? i : et(K, e)
}

function er(e) {
  if (null == e) return null;
  let t = e.match(w);
  return null != t && t.length >= 4 ? {
    guildId: t[1],
    guildEventId: t[2],
    recurrenceId: t[4]
  } : null
}

function ei(e) {
  var t, n, r, i;
  let a = el(e);
  if (null == a || null == a.pathname) return {
    url: null,
    inviteHostRemainingPath: null,
    templateHostRemainingPath: null,
    primaryHostRemainingPath: null
  };
  let o = et(Z, a),
    s = et(F, a),
    l = null != (i = null != (r = null != (n = null != (t = et(V, a)) ? t : et(H, a)) ? n : et(Y, a)) ? r : et(W, a)) ? i : et(K, a);
  return {
    url: a,
    inviteHostRemainingPath: o,
    templateHostRemainingPath: s,
    primaryHostRemainingPath: l
  }
}

function ea(e) {
  if (e.includes("\\")) {
    let r = el(e);
    if (null == r) returnfalse;
    if (ee(Z, r)) returntrue;
    if ([V, H, Y, W, K].some(e => ee(e, r))) {
      var t, n;
      return null != (n = null == (t = r.pathname) ? true : t.toUpperCase().includes(T.g.INVITE)) && n
    }
  }
  returnfalse
}

function eo(e) {
  if (null == e) return [];
  let t = new Set,
    n = [],
    r = Q(e = e.replace(q, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(S.Z.URL_REGEX),
    i = e.match(B);
  if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
  for (let e of r) {
    var a, o, s;
    if (n.length >= C) break;
    let {
      url: r,
      inviteHostRemainingPath: i,
      templateHostRemainingPath: l,
      primaryHostRemainingPath: c
    } = ei(e);
    if (null == r || null == r.pathname) continue;
    let u = (r, i) => {
      t.has(i) || (t.add(i), n.push({
        type: r,
        code: i,
        url: e
      }))
    };
    if ((null == i ? true : i.match(N)) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
      let t = (0, y.mb)(i.substring(1), r.search);
      if (v.Z.getInvite(t), e.includes("\\")) continue;
      u(T.g.INVITE, t)
    }(null == l ? true : l.match(N)) != null && u(T.g.TEMPLATE, l.substring(1));
    let d = null == c ? true : c.match(P);
    if (null != d) {
      let t = d[1].toUpperCase();
      if (t === T.g.INVITE) {
        if (e.includes("\\")) continue;
        let t = (0, y.mb)(d[2], r.search);
        u(T.g.INVITE, t)
      } else u(t, d[2])
    }(null == c ? true : c.match(R)) != null && u(T.g.CHANNEL_LINK, c.replace("/channels/", ""));
    let f = er(r.pathname);
    if (null != f && u(T.g.EVENT, "".concat(f.guildId, "-").concat(f.guildEventId) + (null != f.recurrenceId ? "-".concat(f.recurrenceId) : "")), null != (null == c ? true : c.match(U)) && null != r.query) {
      let e = (0, O.y)(r.query),
        t = e.clientId;
      null == t || "" === t || (null == (a = e.scopes) ? true : a.some(e => e !== E.x.APPLICATIONS_COMMANDS)) || u(T.g.APP_OAUTH2_LINK, t)
    }
    let _ = null == c ? true : c.match(D);
    if (null != _) {
      let e = _[2];
      u(T.g.APP_DIRECTORY_PROFILE, e)
    }
    let h = null == c ? true : c.match(L);
    if (null != h) {
      let e = h[2],
        t = h[3];
      if (null != t) {
        let n = (0, b.l)(e, t);
        u(T.g.APP_DIRECTORY_STOREFRONT_SKU, n)
      } else u(T.g.APP_DIRECTORY_STOREFRONT, e)
    }
    let m = null == c ? true : c.match(x);
    if (null != m) {
      let e = m[1];
      u(T.g.ACTIVITY_BOOKMARK, e)
    }
    let g = null == c ? true : c.match(M);
    null != g && u(T.g.GUILD_PRODUCT, "".concat(g[1], "-").concat(g[2]));
    let I = null == c ? true : c.match(k);
    null != I && u(T.g.SERVER_SHOP, I[1]);
    let S = es(e);
    if (null != S && u(T.g.QUESTS_EMBED, S), "/shop" === c) {
      let e = null != r.query ? (0, p.parse)(r.query).tab : null,
        t = null == (o = r.hash) ? true : o.match(G);
      u(T.g.COLLECTIBLES_SHOP, "".concat(null != e ? e : "", "-").concat(null != (s = null == t ? true : t[1]) ? s : ""))
    }
  }
  return n
}

function es(e) {
  var t, n;
  let r = ei(e),
    i = null == r || null == (t = r.primaryHostRemainingPath) ? true : t.match(j);
  return null != (n = null == i ? true : i[1]) ? n : null
}

function el(e) {
  try {
    return (0, g.parse)(e)
  } catch (e) {
    return null
  }
}

function ec(e) {
  return eo(e)[0]
}