/** Chunk was on web.js **/
/** chunk id: 601730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk722255 = require("./722255.jsx"),
  Chunk14594 = require("./14594.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function f() {
  let [e, t] = (0, s.Wl)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
    cooldownDurationMs: l.aH
  });
  return e !== i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, r.jsxs)(a.$Td, {
    color: a.Hv$.BRAND,
    children: [(0, r.jsx)(a.PMB, {
      onClick: () => t(u.i.DISMISS),
      noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR
    }), d.intl.string(d.t.XkeW9N), (0, r.jsx)(a.Z_L, {
      onClick: () => {
        (0, o.u)(), t(u.i.TAKE_ACTION)
      },
      noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
      children: d.intl.string(d.t.vcdNKv)
    })]
  })
}