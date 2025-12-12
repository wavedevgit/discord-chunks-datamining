/** Chunk was on web.js **/
/** chunk id: 988075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk40330 = require("./40330.jsx"),
  Chunk936141 = require("./936141.js"),
  Chunk546432 = require("./546432.jsx"),
  Chunk411405 = require("./411405.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk382985 = require("./382985.js");

function p(e) {
  let {
    file: t,
    name: n,
    size: o,
    spoiler: p
  } = e, _ = i.useMemo(() => null != t.contentType && false !== t.contentType.indexOf("/") ? t.contentType.split("/") : ["unknown", "unknown"], [t.contentType]), [m, h] = i.useState(p), g = i.useMemo(() => () => (0, r.jsx)(c.mz, {
    mimeType: _,
    downloadURL: t.url,
    showDownload: true,
    isVisualMediaType: false
  }), [t, _]), E = e => (0, r.jsx)(s.Z, {
    className: a()({
      [f.fileHidden]: e
    }),
    url: t.url,
    fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
    fileSize: null != o ? o : 0,
    renderAdjacentContent: g
  });
  return (0, r.jsx)("div", {
    className: f.fileDisplayContainer,
    children: p ? (0, r.jsx)(u.ZP, {
      type: u.ZP.Types.ATTACHMENT,
      reason: l.wk.SPOILER,
      obscured: m,
      onToggleObscurity: () => h(e => !e),
      children: e => E(e)
    }) : E(false)
  })
}