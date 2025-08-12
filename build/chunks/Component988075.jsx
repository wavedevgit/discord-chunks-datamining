/** Chunk was on web.js **/
/** chunk id: 988075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk40330 = require("./40330.jsx"),
  Chunk95398 = require("./95398.jsx"),
  Chunk936141 = require("./936141.js"),
  Chunk546432 = require("./546432.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk937163 = require("./937163.js");

function h(e) {
  let {
    file: t,
    name: n,
    size: o,
    spoiler: h
  } = e, m = (0, s.e7)([f.Z], () => f.Z.getChannelId()), g = i.useMemo(() => null != t.contentType && false !== t.contentType.indexOf("/") ? t.contentType.split("/") : ["unknown", "unknown"], [t.contentType]), [E, b] = i.useState(h), y = i.useMemo(() => () => (0, r.jsx)(d.mz, {
    mimeType: g,
    downloadURL: t.url,
    showDownload: true,
    showImageAppPicker: false,
    isVisualMediaType: false,
    channelId: m
  }), [t, g, m]), O = e => (0, r.jsx)(l.Z, {
    className: a()({
      [p.fileHidden]: e
    }),
    url: t.url,
    fileName: null != n ? n : _.intl.string(_.t.GnuJ5u),
    fileSize: null != o ? o : 0,
    renderAdjacentContent: y
  });
  return (0, r.jsx)("div", {
    className: p.fileDisplayContainer,
    children: h ? (0, r.jsx)(c.ZP, {
      type: c.ZP.Types.ATTACHMENT,
      reason: u.wk.SPOILER,
      obscured: E,
      onToggleObscurity: () => b(e => !e),
      children: e => O(e)
    }) : O(false)
  })
}