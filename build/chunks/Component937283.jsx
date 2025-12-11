/** Chunk was on 9924 **/
/** chunk id: 937283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk613464 = require("./613464.jsx"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk976621 = require("./976621.js");

function b(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([u.Z], () => u.Z.getGuild(t)), {
    analyticsLocations: b
  } = (0, s.ZP)(i.Z.MEMBER_SAFETY_PAGE), j = (0, a.e7)([d.ZP], () => d.ZP.getGuildSidebarState(t), [t]), f = r.useCallback(() => {
    c.Z.closeGuildSidebar(t)
  }, [t]), h = null != j;
  return null != n && h && null != j ? (0, l.jsx)(s.Gt, {
    value: b,
    children: (0, l.jsx)("div", {
      className: x.__invalid_sidebarContainer,
      style: {
        width: m.$Y6
      },
      children: (0, l.jsx)(o.Z, {
        userId: j.details.userId,
        guildId: j.details.guildId,
        onClose: f
      })
    })
  }) : null
}