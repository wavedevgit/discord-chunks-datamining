/** Chunk was on 78376 **/
/** chunk id: 713031, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
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
  let e = (0, l.cf)([o.A], () => o.A.hasConsented(m.YAq.PERSONALIZATION)),
    [t, n] = i.useState(e),
    f = (0, a.uM)();
  return (0, r.jsx)(d.h, {
    setting: p.H.PRIVACY_DATA_PERSONALIZE_V2,
    children: (0, r.jsx)(u.Ay, {
      title: g.intl.string(g.t.MNKzyg),
      note: g.intl.format(g.t["eQL/Mr"], {
        helpdeskArticle: c.A.getArticleURL(m.MVz.DATA_USED_FOR_RECOMMENDED)
      }),
      value: t,
      onChange: e => {
        e ? (0, s.U)([m.YAq.PERSONALIZATION], []).catch(_.i).then(() => n(true)) : (0, _.O)({
          header: g.intl.string(g.t["9SNpzv"]),
          confirmText: g.intl.string(g.t["9g5UGw"]),
          cancelText: g.intl.string(g.t["+ZLPw9"]),
          onConfirm: () => {
            (0, s.U)([], [m.YAq.PERSONALIZATION]).catch(_.i).then(() => n(false))
          },
          body: g.intl.string(g.t.gJvDDh)
        })
      },
      disabled: f,
      tooltipText: f ? g.intl.string(A.default["6Af/cw"]) : true
    })
  })
}