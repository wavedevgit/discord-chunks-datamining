/** Chunk was on web.js **/
/** chunk id: 713031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
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

function g() {
  let e = (0, a.cf)([l.A], () => l.A.hasConsented(_.YAq.PERSONALIZATION)),
    [t, n] = i.useState(e),
    g = (0, o.uM)(),
    E = e => {
      e ? (0, s.U)([_.YAq.PERSONALIZATION], []).catch(f.i).then(() => n(true)) : (0, f.O)({
        header: h.intl.string(h.t["9SNpzv"]),
        confirmText: h.intl.string(h.t["9g5UGw"]),
        cancelText: h.intl.string(h.t["+ZLPw9"]),
        onConfirm: () => {
          (0, s.U)([], [_.YAq.PERSONALIZATION]).catch(f.i).then(() => n(false))
        },
        body: h.intl.string(h.t.gJvDDh)
      })
    };
  return (0, r.jsx)(u.h, {
    setting: p.H.PRIVACY_DATA_PERSONALIZE_V2,
    children: (0, r.jsx)(d.Ay, {
      title: h.intl.string(h.t.MNKzyg),
      note: h.intl.format(h.t["eQL/Mr"], {
        helpdeskArticle: c.A.getArticleURL(_.MVz.DATA_USED_FOR_RECOMMENDED)
      }),
      value: t,
      onChange: E,
      disabled: g,
      tooltipText: g ? h.intl.string(m.default["6Af/cw"]) : true
    })
  })
}