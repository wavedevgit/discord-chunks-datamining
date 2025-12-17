/** Chunk was on 67000 **/
/** chunk id: 915885, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk566840 = require("./566840.js"),
  Chunk693546 = require("./693546.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js"),
  Chunk98493 = require("./98493.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk527379 = require("./527379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function y(e) {
  let {
    guild: t,
    selected: n
  } = e, y = (0, l.e7)([p.Z], () => p.Z.can(b.Plq.KICK_MEMBERS, t)), O = (0, l.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)), v = y && null != O ? O : 0;
  i.useEffect(() => {
    y && t.features.has(b.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && t.features.has(b.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.Z.fetchGuildJoinRequests({
      guildId: t.id,
      status: d.wB.SUBMITTED,
      limit: f.p
    })
  }, [y, t]);
  let j = i.useCallback(() => {
      (0, g._X)(t.id)
    }, [t.id]),
    C = (0, s.XL)(t.id, a.z.MEMBERS_LAUNCH_UPSELL);
  return (0, r.jsx)("div", {
    ref: C,
    children: (0, r.jsx)(h.m, {
      id: "members-".concat(t.id),
      renderIcon: e => (0, r.jsx)(o.BFJ, {
        size: "md",
        color: "currentColor",
        className: e
      }),
      text: m.intl.string(m.t.oclz3Z),
      selected: n,
      onClick: j,
      trailing: v > 0 ? (0, r.jsx)(o.mAB, {
        count: v
      }) : null
    })
  })
}