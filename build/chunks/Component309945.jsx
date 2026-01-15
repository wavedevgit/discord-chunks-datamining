/** Chunk was on 44799 **/
/** chunk id: 309945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk899892 = require("./899892.js"),
  Chunk183742 = require("./183742.js");

function u(e) {
  let {
    guildId: t,
    powerupNames: n,
    warnings: u
  } = e, {
    shouldShow: c,
    title: d,
    description: f
  } = (0, a.Z)(t, n);
  return c ? (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(i.CircleErrorIcon, {
      color: l.Z.colors.TEXT_FEEDBACK_WARNING,
      className: s.icon
    }), (0, r.jsx)(o.xvT, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: d
    }), (0, r.jsxs)(o.xvT, {
      variant: "text-sm/medium",
      children: [f, null == u ? true : u.map((e, t) => (0, r.jsx)(o.xvT, {
        variant: "text-sm/medium",
        color: "text-feedback-warning",
        className: s.warning,
        children: e
      }, "warning-".concat(t)))]
    })]
  }) : null
}