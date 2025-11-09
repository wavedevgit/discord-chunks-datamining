/** Chunk was on 44799 **/
/** chunk id: 659679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk709054 = require("./709054.js"),
  Chunk884902 = require("./884902.js"),
  Chunk789142 = require("./789142.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk503142 = require("./503142.js");

function g(e) {
  let {
    boost: t
  } = e, n = new Date(u.default.extractTimestamp(t.id)), {
    username: g,
    roleColor: v,
    roleColorStrings: x
  } = (0, o.cj)([c.ZP], () => {
    var e, n, r, i;
    let o = c.ZP.getMember(t.guildId, t.userId);
    return {
      username: null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? true : e.username,
      roleColor: null != (r = null == o ? true : o.colorString) ? r : null,
      roleColorStrings: null != (i = null == o ? true : o.colorStrings) ? i : null
    }
  }, [t]), _ = (0, d.X7)(t.guildId, t.userId, null != x ? x : null);
  return (0, r.jsx)(s.Z, {
    className: m.systemMessageContainer,
    contentClassName: m.systemMessageContent,
    iconNode: (0, r.jsx)(a.Ucv, {
      className: m.icon,
      color: "currentColor",
      size: "sm"
    }),
    iconContainerClassName: m.iconContainer,
    timestampClassName: m.timestamp,
    timestamp: n,
    timestampFormat: "L",
    compact: true,
    children: (0, r.jsxs)("span", {
      className: m.boostMessage,
      children: [(0, r.jsx)(a.PUh, {
        className: m.boostMessageUser,
        variant: "text-md/semibold",
        name: g,
        colorString: null != v ? v : null,
        colorStrings: _
      }), (0, r.jsx)(i.xvT, {
        variant: "text-md/medium",
        lineClamp: 1,
        children: (0, r.jsx)(l.Z, {
          children: f.intl.string(p.default.plwH8d)
        })
      })]
    })
  })
}