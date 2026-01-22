/** Chunk was on web.js **/
/** chunk id: 589984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk290595 = require("./290595.js"),
  Chunk171316 = require("./171316.js"),
  Chunk153488 = require("./153488.js"),
  Chunk975571 = require("./975571.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk997913 = require("./997913.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js");

function g() {
  let e = (0, o.uM)(),
    t = (0, a.bG)([l.A], () => l.A.hasConsented(_.YAq.USAGE_STATISTICS)),
    n = i.useCallback(e => {
      e ? (0, s.U)([_.YAq.USAGE_STATISTICS], []).catch(f.i) : (0, f.O)({
        header: h.intl.string(h.t.OdPCbN),
        body: h.intl.string(h.t.MGWabA),
        confirmText: h.intl.string(h.t["D3+rU4"]),
        cancelText: h.intl.string(h.t.kYpG0u),
        onConfirm: () => (0, s.U)([], [_.YAq.USAGE_STATISTICS]).catch(f.i)
      })
    }, []);
  return (0, r.jsx)(u.h, {
    setting: p.H.PRIVACY_DATA_IMPROVE_DISCORD_V2,
    children: (0, r.jsx)(d.Ay, {
      title: h.intl.string(h.t.XuADY2),
      note: h.intl.format(h.t["igTSG/"], {
        helpdeskArticle: c.A.getArticleURL(_.MVz.DATA_PRIVACY_CONTROLS)
      }),
      value: t,
      onChange: n,
      disabled: e,
      tooltipText: e ? h.intl.string(m.default["6Af/cw"]) : true
    })
  })
}