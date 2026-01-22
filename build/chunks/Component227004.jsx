/** Chunk was on 97492 **/
/** chunk id: 227004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk533550 = require("./533550.js"),
  Chunk624458 = require("./624458.js"),
  Chunk844944 = require("./844944.js"),
  Chunk513461 = require("./513461.js"),
  Chunk663997 = require("./663997.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk221950 = require("./221950.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function A(e) {
  let {
    guild: t,
    selected: n
  } = e, A = (0, i.bG)([h.A], () => h.A.can(g.xBc.KICK_MEMBERS, t)), y = (0, i.bG)([u.A], () => u.A.getSubmittedGuildJoinRequestTotal(t.id)), O = A && null != y ? y : 0;
  l.useEffect(() => {
    A && t.features.has(g.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && t.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.A.fetchGuildJoinRequests({
      guildId: t.id,
      status: d.B5.SUBMITTED,
      limit: f.L
    })
  }, [A, t]);
  let j = l.useCallback(() => {
      (0, b.aZ)(t.id)
    }, [t.id]),
    v = (0, o.q8)(t.id, a.M.MEMBERS_LAUNCH_UPSELL);
  return (0, r.jsx)("div", {
    ref: v,
    children: (0, r.jsx)(p.G, {
      id: "members-".concat(t.id),
      renderIcon: e => (0, r.jsx)(s.nFg, {
        size: "md",
        color: "currentColor",
        className: e
      }),
      text: m.intl.string(m.t.oclz3Z),
      selected: n,
      onClick: j,
      trailing: O > 0 ? (0, r.jsx)(s.hVq, {
        count: O
      }) : null
    })
  })
}