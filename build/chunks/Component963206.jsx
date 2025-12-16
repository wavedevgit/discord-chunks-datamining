/** Chunk was on web.js **/
/** chunk id: 963206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk377108 = require("./377108.js"),
  Chunk708406 = require("./708406.js"),
  Chunk29909 = require("./29909.jsx"),
  Chunk253108 = require("./253108.js");
let l = (e, t, n, l, c) => () => {
  let u = null != t ? t : n;
  if (null == u) return null;
  let {
    url: d,
    proxyURL: f,
    width: p,
    height: _
  } = u, m = null != f && "" !== f ? f : d, h = (0, a.Fo)({
    providerName: c,
    thumbnail: l
  });
  return (0, r.jsx)(o.Z, {
    width: p,
    height: _,
    src: m,
    gifSrc: h,
    url: null != e && "" !== e ? e : null != f && "" !== f ? f : d,
    format: null != n ? i.EO.VIDEO : i.EO.IMAGE,
    className: s.gifFavoriteButton
  })
}