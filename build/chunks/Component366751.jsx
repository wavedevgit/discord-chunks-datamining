/** Chunk was on 44799 **/
/** chunk id: 366751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk695610 = require("./695610.js");

function c(e) {
  let {
    notificationConfig: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(a.olH, {
      className: u.close,
      innerClassName: u.innerClose,
      onClick: () => {
        n(s.L.USER_DISMISS)
      }
    }), (0, r.jsx)(i.Mgn, {
      color: l.Z.colors.TEXT_FEEDBACK_WARNING,
      className: u.icon
    }), (0, r.jsx)(o.xv, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: t.title
    }), (0, r.jsx)(o.xv, {
      variant: "text-sm/medium",
      children: t.description
    })]
  })
}