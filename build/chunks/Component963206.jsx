/** Chunk was on web.js **/
/** chunk id: 963206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk377108 = require("./377108.js"),
  Chunk29909 = require("./29909.jsx"),
  Chunk636428 = require("./636428.js");
let s = (e, t, n) => () => {
  let s = null != t ? t : n;
  if (null == s) return null;
  let {
    url: l,
    proxyURL: c,
    width: u,
    height: d
  } = s;
  return (0, r.jsx)(a.Z, {
    width: u,
    height: d,
    src: null != c && "" !== c ? c : l,
    url: null != e && "" !== e ? e : null != c && "" !== c ? c : l,
    format: null != n ? i.EO.VIDEO : i.EO.IMAGE,
    className: o.gifFavoriteButton
  })
}