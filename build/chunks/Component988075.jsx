/** Chunk was on 30243 **/
/** chunk id: 988075, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk40330 = require("./40330.jsx"),
  Chunk95398 = require("./95398.jsx"),
  Chunk936141 = require("./936141.js"),
  Chunk546432 = require("./546432.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk382985 = require("./382985.js");

function m(e) {
  let {
    file: t,
    name: r,
    size: i,
    spoiler: m
  } = e, O = (0, a.e7)([p.Z], () => p.Z.getChannelId()), y = l.useMemo(() => null != t.contentType && false !== t.contentType.indexOf("/") ? t.contentType.split("/") : ["unknown", "unknown"], [t.contentType]), [j, g] = l.useState(m), h = l.useMemo(() => () => (0, n.jsx)(d.mz, {
    mimeType: y,
    downloadURL: t.url,
    showDownload: true,
    showImageAppPicker: false,
    isVisualMediaType: false,
    channelId: O
  }), [t, y, O]), v = e => (0, n.jsx)(c.Z, {
    className: o()({
      [b.fileHidden]: e
    }),
    url: t.url,
    fileName: null != r ? r : f.intl.string(f.t.GnuJ5u),
    fileSize: null != i ? i : 0,
    renderAdjacentContent: h
  });
  return (0, n.jsx)("div", {
    className: b.fileDisplayContainer,
    children: m ? (0, n.jsx)(s.ZP, {
      type: s.ZP.Types.ATTACHMENT,
      reason: u.wk.SPOILER,
      obscured: j,
      onToggleObscurity: () => g(e => !e),
      children: e => v(e)
    }) : v(false)
  })
}