/** Chunk was on web.js **/
/** chunk id: 101879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk496729 = require("./496729.jsx"),
  Chunk987562 = require("./987562.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let [e, t] = (0, o.bf)(i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
    cooldownDurationMs: l.pv
  });
  return e !== i.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, r.jsxs)(a.qXd, {
    color: a.DM8.BRAND,
    children: [(0, r.jsx)(a.RyX, {
      onClick: () => t(u.L.DISMISS),
      noticeType: c.kVF.IGNORE_USER_FEEDBACK_NAGBAR
    }), d.intl.string(d.t.XkeW9N), (0, r.jsx)(a.NoS, {
      onClick: () => {
        (0, s.v)(), t(u.L.TAKE_ACTION)
      },
      noticeType: c.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
      children: d.intl.string(d.t.vcdNKv)
    })]
  })
}