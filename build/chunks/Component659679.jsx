/** Chunk was on 44799 **/
/** chunk id: 659679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk665957 = require("./665957.js"),
  Chunk884902 = require("./884902.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk676229 = require("./676229.js");

function p(e) {
  let {
    boost: t
  } = e, {
    timestamp: n,
    username: p,
    roleColor: m,
    roleColorStrings: v
  } = (0, s._)(t), g = (0, u.X7)(t.guildId, t.userId, null != v ? v : null);
  return (0, r.jsxs)("div", {
    className: f.systemMessageContainer,
    children: [(0, r.jsx)(l.Ucv, {
      className: f.icon,
      color: "currentColor",
      size: "sm"
    }), (0, r.jsx)("span", {
      className: f.boostMessage,
      children: (0, r.jsxs)(i.xvT, {
        tag: "span",
        variant: "text-md/medium",
        lineClamp: 1,
        children: [(0, r.jsx)(o.u, {
          text: p,
          shouldShow: true,
          asContainer: true,
          delay: 1e3,
          children: (0, r.jsx)(l.PUh, {
            className: f.boostMessageUser,
            variant: "text-md/semibold",
            name: p,
            colorString: null != m ? m : null,
            colorStrings: g
          })
        }), d.intl.string(c.default.plwH8d)]
      })
    }), (0, r.jsx)(a.Z, {
      timestamp: n,
      timestampFormat: "L",
      className: f.timestamp
    })]
  })
}