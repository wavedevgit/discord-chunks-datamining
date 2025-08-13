/** Chunk was on 44799 **/
/** chunk id: 659679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk991206 = require("./991206.js");

function _(e) {
  let {
    boost: t
  } = e, n = new Date(u.default.extractTimestamp(t.id)), {
    username: _,
    roleColor: x,
    roleColorStrings: g
  } = (0, i.cj)([c.ZP], () => {
    var e, n, r, o;
    let i = c.ZP.getMember(t.guildId, t.userId);
    return {
      username: null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? true : e.username,
      roleColor: null != (r = null == i ? true : i.colorString) ? r : null,
      roleColorStrings: null != (o = null == i ? true : i.colorStrings) ? o : null
    }
  }, [t]), v = (0, d.X7)(t.guildId, t.userId, null != g ? g : null);
  return (0, r.jsx)(s.Z, {
    className: f.systemMessageContainer,
    contentClassName: f.systemMessageContent,
    iconNode: (0, r.jsx)(l.$Eu, {
      className: f.icon,
      color: "currentColor",
      size: "sm"
    }),
    iconContainerClassName: f.iconContainer,
    timestampClassName: f.timestamp,
    timestamp: n,
    timestampFormat: "L",
    compact: true,
    children: (0, r.jsxs)("span", {
      className: f.boostMessage,
      children: [(0, r.jsx)(l.PUh, {
        className: f.boostMessageUser,
        variant: "text-md/semibold",
        name: _,
        colorString: null != x ? x : null,
        colorStrings: v
      }), (0, r.jsx)(o.xv, {
        variant: "text-md/medium",
        lineClamp: 1,
        children: (0, r.jsx)(a.Z, {
          children: m.intl.string(p.default.plwH8f)
        })
      })]
    })
  })
}