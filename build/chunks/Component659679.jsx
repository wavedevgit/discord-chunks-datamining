/** Chunk was on 44799 **/
/** chunk id: 659679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function _(e) {
  let {
    boost: t
  } = e, n = new Date(c.default.extractTimestamp(t.id)), {
    username: _,
    roleColor: g,
    roleColorStrings: v
  } = (0, o.cj)([u.ZP], () => {
    var e, n, r, i;
    let o = u.ZP.getMember(t.guildId, t.userId);
    return {
      username: null != (n = u.ZP.getNick(t.guildId, t.userId)) ? n : null == (e = t.user) ? true : e.username,
      roleColor: null != (r = null == o ? true : o.colorString) ? r : null,
      roleColorStrings: null != (i = null == o ? true : o.colorStrings) ? i : null
    }
  }, [t]), x = (0, d.X7)(t.guildId, t.userId, null != v ? v : null);
  return (0, r.jsx)(s.Z, {
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
        name: _,
        colorString: null != g ? g : null,
        colorStrings: x
      }), (0, r.jsx)(i.xv, {
        variant: "text-md/medium",
        lineClamp: 1,
        children: (0, r.jsx)(a.Z, {
          children: f.intl.string(p.default.plwH8f)
        })
      })]
    })
  })
}