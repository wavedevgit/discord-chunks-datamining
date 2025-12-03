/** Chunk was on 44799 **/
/** chunk id: 659679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk665957 = require("./665957.js"),
  Chunk884902 = require("./884902.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238937 = require("./238937.js");

function f(e) {
  let {
    boost: t
  } = e, {
    timestamp: n,
    username: f,
    roleColor: m,
    roleColorStrings: g
  } = (0, s._)(t), v = (0, u.X7)(t.guildId, t.userId, null != g ? g : null);
  return (0, r.jsxs)("div", {
    className: p.systemMessageContainer,
    children: [(0, r.jsx)(l.Ucv, {
      className: p.icon,
      color: "currentColor",
      size: "sm"
    }), (0, r.jsx)("span", {
      className: p.boostMessage,
      children: (0, r.jsxs)(i.xvT, {
        tag: "span",
        variant: "text-md/medium",
        lineClamp: 1,
        children: [(0, r.jsx)(o.u, {
          text: f,
          shouldShow: true,
          asContainer: true,
          delay: 1e3,
          children: (0, r.jsx)(l.PUh, {
            className: p.boostMessageUser,
            variant: "text-md/semibold",
            name: f,
            colorString: null != m ? m : null,
            colorStrings: v
          })
        }), d.intl.string(c.default.plwH8d)]
      })
    }), (0, r.jsx)(a.Z, {
      timestamp: n,
      timestampFormat: "L",
      className: p.timestamp
    })]
  })
}