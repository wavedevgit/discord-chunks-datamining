/** Chunk was on 20941 **/
/** chunk id: 620513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    file: t,
    name: n,
    size: a,
    spoiler: f
  } = e, p = l.useMemo(() => null != t.contentType && false !== t.contentType.indexOf("/") ? t.contentType.split("/") : ["unknown", "unknown"], [t.contentType]), [h, b] = l.useState(f), [g, x] = l.useState(f);
  f !== h && (b(f), x(f));
  let y = l.useMemo(() => () => (0, r.jsx)(c.zB, {
      mimeType: p,
      downloadURL: t.url,
      showDownload: true,
      isVisualMediaType: false
    }), [t, p]),
    v = e => (0, r.jsx)(s.A, {
      className: i()({
        [m.V]: e
      }),
      url: t.url,
      fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
      fileSize: null != a ? a : 0,
      renderAdjacentContent: y
    });
  return (0, r.jsx)("div", {
    className: m.O,
    children: f ? (0, r.jsx)(u.Ay, {
      type: u.Ay.Types.ATTACHMENT,
      reason: o.Oc.SPOILER,
      obscured: g,
      onToggleObscurity: () => x(e => !e),
      children: e => v(e)
    }) : v(false)
  })
}