/** Chunk was on 9207 **/
/** chunk id: 589984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f() {
  let e = (0, a.uM)(),
    t = (0, l.bG)([o.A], () => o.A.hasConsented(m.YAq.USAGE_STATISTICS)),
    n = i.useCallback(e => {
      e ? (0, s.U)([m.YAq.USAGE_STATISTICS], []).catch(_.i) : (0, _.O)({
        header: g.intl.string(g.t.OdPCbN),
        body: g.intl.string(g.t.MGWabA),
        confirmText: g.intl.string(g.t["D3+rU4"]),
        cancelText: g.intl.string(g.t.kYpG0u),
        onConfirm: () => (0, s.U)([], [m.YAq.USAGE_STATISTICS]).catch(_.i)
      })
    }, []);
  return (0, r.jsx)(d.h, {
    setting: p.H.PRIVACY_DATA_IMPROVE_DISCORD_V2,
    children: (0, r.jsx)(u.Ay, {
      title: g.intl.string(g.t.XuADY2),
      note: g.intl.format(g.t["igTSG/"], {
        helpdeskArticle: c.A.getArticleURL(m.MVz.DATA_PRIVACY_CONTROLS)
      }),
      value: t,
      onChange: n,
      disabled: e,
      tooltipText: e ? g.intl.string(A.default["6Af/cw"]) : true
    })
  })
}