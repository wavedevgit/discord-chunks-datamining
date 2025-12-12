/** Chunk was on 44799 **/
/** chunk id: 366751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk912514 = require("./912514.js");

function u(e) {
  let {
    notificationConfig: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)("div", {
      className: c.close,
      children: (0, r.jsx)(l.hU, {
        variant: "icon-only",
        size: "md",
        "aria-label": s.intl.string(s.t.cpT0Cq),
        onClick: () => {
          n(a.L.USER_DISMISS)
        },
        icon: i.Uz9
      })
    }), (0, r.jsx)(i.Mgn, {
      color: o.Z.colors.TEXT_FEEDBACK_WARNING,
      className: c.icon
    }), (0, r.jsx)(l.xvT, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: t.title
    }), (0, r.jsx)(l.xvT, {
      variant: "text-sm/medium",
      children: t.description
    })]
  })
}