/** Chunk was on 34160 **/
/** chunk id: 836975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk351633 = require("./351633.jsx"),
  Chunk663535 = require("./663535.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk340399 = require("./340399.js");

function h(e) {
  let {
    channel: t,
    threadIds: n,
    startThread: a,
    goToThread: h
  } = e, g = l.useCallback(e => (0, r.jsx)(c.A, {
    threadId: n[e.row],
    goToThread: h
  }, "".concat(e.section, "-").concat(e.row)), [n, h]);
  return 0 === n.length ? (0, r.jsx)(i.A, {
    channel: t,
    header: u.intl.string(u.t.HgTQ8p),
    startThread: a
  }) : (0, r.jsx)(o.B8B, {
    className: s()(d.p_, d.uW),
    fade: true,
    sections: [n.length],
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: g,
    renderSection: () => null,
    chunkSize: 20
  })
}