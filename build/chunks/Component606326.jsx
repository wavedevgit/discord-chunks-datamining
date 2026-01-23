/** Chunk was on 99583 **/
/** chunk id: 606326, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk547015 = require("./547015.jsx"),
  Chunk138298 = require("./138298.js"),
  Chunk761640 = require("./761640.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk947256 = require("./947256.js");

function j(e) {
  let {
    guildId: t
  } = e, l = (0, i.bG)([u.A], () => u.A.getGuild(t)), {
    analyticsLocations: j
  } = (0, a.Ay)(s.A.MEMBER_SAFETY_PAGE), b = (0, i.bG)([d.Ay], () => d.Ay.getGuildSidebarState(t), [t]), h = r.useCallback(() => {
    c.A.closeGuildSidebar(t)
  }, [t]), f = null != b;
  return null != l && f && null != b ? (0, n.jsx)(a.f5, {
    value: j,
    children: (0, n.jsx)("div", {
      className: m.__invalid_sidebarContainer,
      style: {
        width: x.da6
      },
      children: (0, n.jsx)(o.A, {
        userId: b.details.userId,
        guildId: b.details.guildId,
        onClose: h
      })
    })
  }) : null
}