/** Chunk was on 44799 **/
/** chunk id: 659679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk709054 = require("./709054.js"),
  Chunk884902 = require("./884902.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk326319 = require("./326319.js");

function g(e) {
  let {
    boost: t
  } = e, n = new Date(u.default.extractTimestamp(t.id)), {
    username: g,
    roleColor: x,
    roleColorStrings: _
  } = (0, i.cj)([c.ZP], () => {
    var e, n, r, o;
    let i = c.ZP.getMember(t.guildId, t.userId);
    return {
      username: null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? true : e.username,
      roleColor: null != (r = null == i ? true : i.colorString) ? r : null,
      roleColorStrings: null != (o = null == i ? true : i.colorStrings) ? o : null
    }
  }, [t]), v = (0, d.X7)(t.guildId, t.userId, null != _ ? _ : null);
  return (0, r.jsx)(a.Z, {
    className: m.systemMessageContainer,
    contentClassName: m.systemMessageContent,
    iconNode: (0, r.jsx)(l.$Eu, {
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
      children: [(0, r.jsx)(l.PUh, {
        className: m.boostMessageUser,
        variant: "text-md/semibold",
        name: g,
        colorString: null != x ? x : null,
        colorStrings: v
      }), (0, r.jsx)(o.xv, {
        variant: "text-md/medium",
        lineClamp: 1,
        children: (0, r.jsx)(s.Z, {
          children: f.intl.string(p.default.plwH8f)
        })
      })]
    })
  })
}