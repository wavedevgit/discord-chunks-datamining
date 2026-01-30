/** Chunk was on 49559 **/
/** chunk id: 620513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk718468 = require("./718468.jsx"),
  Chunk338717 = require("./338717.js"),
  Chunk96782 = require("./96782.jsx"),
  Chunk302031 = require("./302031.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk71433 = require("./71433.js");

function m(e) {
  let {
    file: t,
    name: n,
    size: a,
    spoiler: m
  } = e, f = l.useMemo(() => null != t.contentType && false !== t.contentType.indexOf("/") ? t.contentType.split("/") : ["unknown", "unknown"], [t.contentType]), [O, b] = l.useState(m), [y, h] = l.useState(m);
  m !== O && (b(m), h(m));
  let j = l.useMemo(() => () => (0, r.jsx)(c.zB, {
      mimeType: f,
      downloadURL: t.url,
      showDownload: true,
      isVisualMediaType: false
    }), [t, f]),
    g = e => (0, r.jsx)(o.A, {
      className: i()({
        [p.V]: e
      }),
      url: t.url,
      fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
      fileSize: null != a ? a : 0,
      renderAdjacentContent: j
    });
  return (0, r.jsx)("div", {
    className: p.O,
    children: m ? (0, r.jsx)(u.Ay, {
      type: u.Ay.Types.ATTACHMENT,
      reason: s.Oc.SPOILER,
      obscured: y,
      onToggleObscurity: () => h(e => !e),
      children: e => g(e)
    }) : g(false)
  })
}