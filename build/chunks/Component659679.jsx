/** Chunk was on 44799 **/
/** chunk id: 659679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk709054 = require("./709054.js"),
  Chunk884902 = require("./884902.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238937 = require("./238937.js");

function g(e) {
  let {
    boost: t
  } = e, n = new Date(u.default.extractTimestamp(t.id)), {
    username: g,
    roleColor: v,
    roleColorStrings: _
  } = (0, i.cj)([c.ZP], () => {
    var e, n, r, o;
    let i = c.ZP.getMember(t.guildId, t.userId);
    return {
      username: null != (n = c.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? true : e.username,
      roleColor: null != (r = null == i ? true : i.colorString) ? r : null,
      roleColorStrings: null != (o = null == i ? true : i.colorStrings) ? o : null
    }
  }, [t]), x = (0, d.X7)(t.guildId, t.userId, null != _ ? _ : null);
  return (0, r.jsx)(a.Z, {
    className: f.systemMessageContainer,
    contentClassName: f.systemMessageContent,
    iconNode: (0, r.jsx)(s.$Eu, {
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
      children: [(0, r.jsx)(s.PUh, {
        className: f.boostMessageUser,
        variant: "text-md/semibold",
        name: g,
        colorString: null != v ? v : null,
        colorStrings: x
      }), (0, r.jsx)(o.xv, {
        variant: "text-md/medium",
        lineClamp: 1,
        children: (0, r.jsx)(l.Z, {
          children: m.intl.string(p.default.plwH8f)
        })
      })]
    })
  })
}