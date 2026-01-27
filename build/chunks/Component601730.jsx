/** Chunk was on 93140 **/
/** chunk id: 601730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
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

function d() {
  let [e, t] = (0, o.Wl)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
    cooldownDurationMs: s.aH
  });
  return e !== i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, r.jsxs)(l.$Td, {
    color: l.Hv$.BRAND,
    children: [(0, r.jsx)(l.PMB, {
      onClick: () => t(u.i.DISMISS),
      noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR
    }), E.intl.string(E.t.XkeW9N), (0, r.jsx)(l.Z_L, {
      onClick: () => {
        (0, a.u)(), t(u.i.TAKE_ACTION)
      },
      noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
      children: E.intl.string(E.t.vcdNKv)
    })]
  })
}