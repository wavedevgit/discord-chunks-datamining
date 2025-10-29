/** Chunk was on 30437 **/
/** chunk id: 915885, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function _(e) {
  let {
    guild: t,
    selected: n
  } = e, _ = (0, l.e7)([h.Z], () => h.Z.can(m.Plq.KICK_MEMBERS, t)), O = (0, l.e7)([u.Z], () => u.Z.getSubmittedGuildJoinRequestTotal(t.id)), y = _ && null != O ? O : 0;
  i.useEffect(() => {
    _ && t.features.has(m.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && t.features.has(m.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.Z.fetchGuildJoinRequests({
      guildId: t.id,
      status: d.wB.SUBMITTED,
      limit: p.p
    })
  }, [_, t]);
  let j = i.useCallback(() => {
      (0, g._X)(t.id)
    }, [t.id]),
    v = (0, s.XL)(t.id, o.z.MEMBERS_LAUNCH_UPSELL);
  return (0, r.jsx)("div", {
    ref: v,
    children: (0, r.jsx)(f.m, {
      id: "members-".concat(t.id),
      renderIcon: e => (0, r.jsx)(a.BFJ, {
        size: "md",
        color: "currentColor",
        className: e
      }),
      text: b.intl.string(b.t.oclz3Z),
      selected: n,
      onClick: j,
      trailing: y > 0 ? (0, r.jsx)(a.mAB, {
        count: y
      }) : null
    })
  })
}