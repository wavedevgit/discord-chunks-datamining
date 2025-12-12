/** Chunk was on web.js **/
/** chunk id: 296182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jj: () => m,
  Lz: () => g,
  gS: () => h,
  lT: () => E,
  s$: () => b,
  wV: () => c
});
var Chunk829883 = require("./829883.js"),
  Chunk198620 = require("./198620.js"),
  Chunk378233 = require("./378233.js"),
  Chunk823379 = require("./823379.js"),
  Chunk591759 = require("./591759.js"),
  Chunk998502 = require("./998502.js");
let c = "png",
  u = "https://media.discordapp.net",
  d = "cdn.discordapp.com",
  f = "localhost",
  p = "3000",
  _ = "http://localhost:4000";

function m(e) {
  return !((0, o.B0)(e) || (0, r.zt)(e))
}

function h(e, t, n) {
  let r = l.ZP.canSaveImage(e, null != n ? n : t),
    i = s.Z.isDiscordAssetUrl(e, t, n),
    o = m(e);
  return r && i && o
}

function g(e, t, n) {
  let r = l.ZP.canCopyImage(e),
    i = s.Z.isDiscordAssetUrl(e, t, n),
    o = m(e);
  return r && i && o
}

function E(e, t) {
  if ((0, a.ii)()) return null != e ? e : t;
  if (null != e) {
    let n = s.Z.toURLSafe(t);
    if (null != n && (0, i._M)(n)) return e
  }
  return t
}

function b(e, t, n, r) {
  let i = s.Z.toURLSafe(e);
  if (null == i || i.host === d) return e;
  let o = (0, l.xG)(e, t),
    c = false;
  if (i.origin === u && (c = true), (0, a.ii)() && i.origin === _ && (c = true), i.searchParams.delete("width"), i.searchParams.delete("height"), i.searchParams.delete("quality"), i.searchParams.delete("size"), c)
    if ((0, a.ii)()) {
      if (s.Z.isOriginalContentTypeDifferent(t, n)) return i.toString();
      i.host = f, i.port = p, i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13))
    } else i.host = d;
  return i.searchParams.delete("format"), null == o && null != r && i.searchParams.append("format", r), i.toString()
}