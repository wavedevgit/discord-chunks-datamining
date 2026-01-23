/** Chunk was on web.js **/
/** chunk id: 803316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N7: () => c,
  PK: () => g,
  XW: () => y,
  bc: () => E,
  e7: () => m,
  fW: () => h
});
var Chunk376304 = require("./376304.js"),
  Chunk202803 = require("./202803.js"),
  Chunk378058 = require("./378058.js"),
  Chunk403362 = require("./403362.js"),
  Chunk998218 = require("./998218.js"),
  Chunk837921 = require("./837921.js");
let c = "png",
  u = "https://media.discordapp.net",
  d = "cdn.discordapp.com",
  f = "localhost",
  p = "3000",
  _ = "http://localhost:4000";

function h(e) {
  return !((0, a.NO)(e) || (0, r.XD)(e))
}

function m(e, t, n) {
  let r = l.Ay.canSaveImage(e, null != n ? n : t),
    i = o.A.isDiscordAssetUrl(e, t, n),
    a = h(e);
  return r && i && a
}

function g(e, t, n) {
  let r = l.Ay.canCopyImage(e),
    i = o.A.isDiscordAssetUrl(e, t, n),
    a = h(e);
  return r && i && a
}

function E(e, t) {
  if ((0, s.iT)()) return null != e ? e : t;
  if (null != e) {
    let n = o.A.toURLSafe(t);
    if (null != n && (0, i.BX)(n)) return e
  }
  return t
}

function y(e, t, n, r) {
  let i = o.A.toURLSafe(e);
  if (null == i || i.host === d) return e;
  let a = (0, l.UB)(e, t),
    c = false;
  if (i.origin === u && (c = true), (0, s.iT)() && i.origin === _ && (c = true), i.searchParams.delete("width"), i.searchParams.delete("height"), i.searchParams.delete("quality"), i.searchParams.delete("size"), c)
    if ((0, s.iT)()) {
      if (o.A.isOriginalContentTypeDifferent(t, n)) return i.toString();
      i.host = f, i.port = p, i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13))
    } else i.host = d;
  return i.searchParams.delete("format"), null == a && null != r && i.searchParams.append("format", r), i.toString()
}