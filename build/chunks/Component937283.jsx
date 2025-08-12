/** Chunk was on 9924 **/
/** chunk id: 937283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk613464 = require("./613464.jsx"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk13348 = require("./13348.js");

function h(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([u.Z], () => u.Z.getGuild(t)), {
    analyticsLocations: h
  } = (0, s.ZP)(i.Z.MEMBER_SAFETY_PAGE), j = (0, a.e7)([d.ZP], () => d.ZP.getGuildSidebarState(t), [t]), b = r.useCallback(() => {
    c.Z.closeGuildSidebar(t)
  }, [t]), f = null != j;
  return null != n && f && null != j ? (0, l.jsx)(s.Gt, {
    value: h,
    children: (0, l.jsx)("div", {
      className: x.__invalid_sidebarContainer,
      style: {
        width: m.$Y6
      },
      children: (0, l.jsx)(o.Z, {
        userId: j.details.userId,
        guildId: j.details.guildId,
        onClose: b
      })
    })
  }) : null
}