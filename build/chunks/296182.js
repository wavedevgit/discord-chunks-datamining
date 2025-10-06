/** Chunk was on web.js **/
/** chunk id: 296182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jj: () => p,
  Lz: () => m,
  gS: () => h,
  lT: () => g,
  s$: () => E,
  wV: () => l
});
var Chunk829883 = require("./829883.js"),
  Chunk378233 = require("./378233.js"),
  Chunk823379 = require("./823379.js"),
  Chunk591759 = require("./591759.js"),
  Chunk998502 = require("./998502.js");
let l = "png",
  c = "https://media.discordapp.net",
  u = "cdn.discordapp.com",
  d = "localhost",
  f = "3000",
  _ = "http://localhost:4000";

function p(e) {
  return !((0, i.B0)(e) || (0, r.zt)(e))
}

function h(e, t, n) {
  let r = s.ZP.canSaveImage(e, null != n ? n : t),
    i = o.Z.isDiscordAssetUrl(e, t, n),
    a = p(e);
  return r && i && a
}

function m(e, t, n) {
  let r = s.ZP.canCopyImage(e),
    i = o.Z.isDiscordAssetUrl(e, t, n),
    a = p(e);
  return r && i && a
}

function g(e, t) {
  return (0, a.ii)() && null != e ? e : t
}

function E(e, t, n, r) {
  let i = o.Z.toURLSafe(e);
  if (null == i || i.host === u) return e;
  let l = (0, s.xG)(e, t),
    p = false;
  if (i.origin === c && (p = true), (0, a.ii)() && i.origin === _ && (p = true), i.searchParams.delete("width"), i.searchParams.delete("height"), i.searchParams.delete("quality"), i.searchParams.delete("size"), p)
    if ((0, a.ii)()) {
      if (o.Z.isOriginalContentTypeDifferent(t, n)) return i.toString();
      i.host = d, i.port = f, i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13))
    } else i.host = u;
  return i.searchParams.delete("format"), null == l && null != r && i.searchParams.append("format", r), i.toString()
}