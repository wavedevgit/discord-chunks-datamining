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
  let [e, t] = (0, Chunk243778.bf)(Chunk704215.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
    cooldownDurationMs: Chunk987562.pv
  });
  return module !== Chunk704215.z.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, Chunk54381.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.BRAND,
    children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
      onClick: () => exports(Chunk921944.L.DISMISS),
      noticeType: Chunk981631.kVF.IGNORE_USER_FEEDBACK_NAGBAR
    }), Chunk388032.intl.string(Chunk388032.t.XkeW9N), (0, Chunk54381.jsx)(Chunk481060.NoS, {
      onClick: () => {
        (0, Chunk496729.v3)(), exports(Chunk921944.L.TAKE_ACTION)
      },
      noticeType: Chunk981631.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
      children: Chunk388032.intl.string(Chunk388032.t.vcdNKv)
    })]
  })
}