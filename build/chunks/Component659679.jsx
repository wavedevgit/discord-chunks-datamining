/** Chunk was on 44799 **/
/** chunk id: 659679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk709054 = require("./709054.js"),
  Chunk884902 = require("./884902.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238937 = require("./238937.js");

function g(e) {
  let {
    boost: t
  } = e, n = new Date(u.default.extractTimestamp(t.id)), {
    username: g,
    roleColor: v,
    roleColorStrings: x
  } = (0, l.cj)([c.ZP], () => {
    var e, n, r, i;
    let l = c.ZP.getMember(t.guildId, t.userId);
    return {
      username: null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? true : e.username,
      roleColor: null != (r = null == l ? true : l.colorString) ? r : null,
      roleColorStrings: null != (i = null == l ? true : l.colorStrings) ? i : null
    }
  }, [t]), _ = (0, d.X7)(t.guildId, t.userId, null != x ? x : null);
  return (0, r.jsxs)("div", {
    className: m.systemMessageContainer,
    children: [(0, r.jsx)(a.Ucv, {
      className: m.icon,
      color: "currentColor",
      size: "sm"
    }), (0, r.jsx)("span", {
      className: m.boostMessage,
      children: (0, r.jsxs)(i.xvT, {
        tag: "span",
        variant: "text-md/medium",
        lineClamp: 1,
        children: [(0, r.jsx)(o.u, {
          text: g,
          shouldShow: true,
          asContainer: true,
          delay: 1e3,
          children: (0, r.jsx)(a.PUh, {
            className: m.boostMessageUser,
            variant: "text-md/semibold",
            name: g,
            colorString: null != v ? v : null,
            colorStrings: _
          })
        }), f.intl.string(p.default.plwH8d)]
      })
    }), (0, r.jsx)(s.Z, {
      timestamp: n,
      timestampFormat: "L",
      className: m.timestamp
    })]
  })
}