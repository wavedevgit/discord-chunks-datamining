/** Chunk was on 22482 **/
/** chunk id: 918125, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  t = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk235449 = require("./235449.js"),
  Chunk300234 = require("./300234.jsx"),
  Chunk75447 = require("./75447.js");

function h(e) {
  let {
    guildId: a,
    goToThread: n
  } = e, o = (0, i.nA)(a), h = r.useCallback(e => {
    let a = o[e.row];
    return (0, s.jsx)(l.Z, {
      threadId: a,
      goToThread: n,
      showChannelName: true
    }, "".concat(e.section, "-").concat(e.row))
  }, [o, n]);
  return (0, s.jsx)(c.aVo, {
    className: t()(d.list, d.activeThreadsList),
    fade: true,
    sections: [o.length],
    renderSection: () => null,
    sectionHeight: 0,
    rowHeight: 80,
    renderRow: h,
    chunkSize: 20
  })
}