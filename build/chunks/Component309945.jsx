/** Chunk was on 44799 **/
/** chunk id: 309945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk899667 = require("./899667.js"),
  Chunk317169 = require("./317169.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk874622 = require("./874622.js");

function f(e) {
  let {
    guildId: t,
    powerups: n
  } = e, {
    spent: f
  } = (0, d.Z)(t), _ = (0, s.e7)([u.Z], () => u.Z.getAppliedGuildBoostsForGuild(t), [t]), v = f - o.useMemo(() => {
    var e, t, n;
    return null != (n = null == _ || null == (t = _.filter) || null == (e = t.call(_, e => !e.ended && null == e.endsAt)) ? true : e.length) ? n : 0
  }, [_]);
  if (v <= 0) return null;
  let x = n.some(e => e.skuId === i.A$);
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(l.Mgn, {
      color: c.Z.colors.TEXT_FEEDBACK_WARNING,
      className: g.icon
    }), (0, r.jsx)(a.xvT, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: m.intl.string(p.default.n5hQhY)
    }), (0, r.jsxs)(a.xvT, {
      variant: "text-sm/medium",
      children: [m.intl.formatToPlainString(p.default.iAaAiI, {
        boostCount: v,
        perksString: n.map(e => e.title).join(", ")
      }), x && (0, r.jsx)(a.xvT, {
        variant: "text-sm/medium",
        color: "text-feedback-warning",
        children: m.intl.string(p.default.Sfr0Jy)
      })]
    })]
  })
}