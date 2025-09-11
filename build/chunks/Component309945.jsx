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
  Chunk905128 = require("./905128.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk874622 = require("./874622.js");

function f(e) {
  let {
    guildId: t,
    powerups: n
  } = e, f = (0, a.e7)([d.Z], () => {
    var e, n;
    return null != (n = null == (e = d.Z.getStateForGuild(t)) ? true : e.appliedBoosts) ? n : 0
  }), v = (0, a.e7)([u.Z], () => u.Z.getAppliedGuildBoostsForGuild(t), [t]), _ = f - i.useMemo(() => {
    var e, t, n;
    return null != (n = null == v || null == (t = v.filter) || null == (e = t.call(v, e => !e.ended && null == e.endsAt)) ? true : e.length) ? n : 0
  }, [v]);
  if (_ <= 0) return null;
  let x = n.some(e => e.skuId === o.A$);
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(s.Mgn, {
      color: c.Z.colors.TEXT_FEEDBACK_WARNING,
      className: g.icon
    }), (0, r.jsx)(l.xvT, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: m.intl.string(p.default.n5hQhY)
    }), (0, r.jsxs)(l.xvT, {
      variant: "text-sm/medium",
      children: [m.intl.formatToPlainString(p.default.iAaAiI, {
        boostCount: _,
        perksString: n.map(e => e.title).join(", ")
      }), x && (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "text-feedback-warning",
        children: m.intl.string(p.default.Sfr0Jy)
      })]
    })]
  })
}