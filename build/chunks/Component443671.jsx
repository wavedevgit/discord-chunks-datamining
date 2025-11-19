/** Chunk was on 91315 **/
/** chunk id: 443671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk487894 = require("./487894.jsx"),
  Chunk300234 = require("./300234.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk836227 = require("./836227.js");

function h(e) {
  let {
    channel: t,
    threadIds: n,
    startThread: a,
    goToThread: h
  } = e, g = l.useCallback(e => (0, r.jsx)(c.Z, {
    threadId: n[e.row],
    goToThread: h
  }, "".concat(e.section, "-").concat(e.row)), [n, h]);
  return 0 === n.length ? (0, r.jsx)(i.Z, {
    channel: t,
    header: d.intl.string(d.t.HgTQ8p),
    startThread: a
  }) : (0, r.jsx)(o.aVo, {
    className: s()(u.list, u.activeThreadsList),
    fade: true,
    sections: [n.length],
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: g,
    renderSection: () => null,
    chunkSize: 20
  })
}