/** Chunk was on 9924 **/
/** chunk id: 937283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk613464 = require("./613464.jsx"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk401853 = require("./401853.js");

function j(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.getGuild(t)), {
    analyticsLocations: j
  } = (0, s.ZP)(a.Z.MEMBER_SAFETY_PAGE), b = (0, i.e7)([d.ZP], () => d.ZP.getGuildSidebarState(t), [t]), h = r.useCallback(() => {
    c.Z.closeGuildSidebar(t)
  }, [t]), f = null != b;
  return null != n && f && null != b ? (0, l.jsx)(s.Gt, {
    value: j,
    children: (0, l.jsx)("div", {
      className: x.__invalid_sidebarContainer,
      style: {
        width: m.$Y6
      },
      children: (0, l.jsx)(o.Z, {
        userId: b.details.userId,
        guildId: b.details.guildId,
        onClose: h
      })
    })
  }) : null
}