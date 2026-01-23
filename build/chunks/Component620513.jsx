/** Chunk was on web.js **/
/** chunk id: 620513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk718468 = require("./718468.jsx"),
  Chunk338717 = require("./338717.js"),
  Chunk96782 = require("./96782.jsx"),
  Chunk302031 = require("./302031.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk71433 = require("./71433.js");

function p(e) {
  let {
    file: t,
    name: n,
    size: a,
    spoiler: p
  } = e, _ = i.useMemo(() => null != t.contentType && false !== t.contentType.indexOf("/") ? t.contentType.split("/") : ["unknown", "unknown"], [t.contentType]), [h, m] = i.useState(p), [g, E] = i.useState(p);
  p !== h && (m(p), E(p));
  let y = i.useMemo(() => () => (0, r.jsx)(c.zB, {
      mimeType: _,
      downloadURL: t.url,
      showDownload: true,
      isVisualMediaType: false
    }), [t, _]),
    b = e => (0, r.jsx)(o.A, {
      className: s()({
        [f.V]: e
      }),
      url: t.url,
      fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
      fileSize: null != a ? a : 0,
      renderAdjacentContent: y
    });
  return (0, r.jsx)("div", {
    className: f.O,
    children: p ? (0, r.jsx)(u.Ay, {
      type: u.Ay.Types.ATTACHMENT,
      reason: l.Oc.SPOILER,
      obscured: g,
      onToggleObscurity: () => E(e => !e),
      children: e => b(e)
    }) : b(false)
  })
}