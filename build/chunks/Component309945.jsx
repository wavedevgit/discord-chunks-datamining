/** Chunk was on 44799 **/
/** chunk id: 309945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk494497 = require("./494497.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk899667 = require("./899667.js"),
  Chunk905128 = require("./905128.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk200985 = require("./200985.js");

function g(e) {
  let {
    guildId: t,
    powerups: n
  } = e, g = (0, a.e7)([d.Z], () => {
    var e, n;
    return null != (n = null == (e = d.Z.getStateForGuild(t)) ? true : e.appliedBoosts) ? n : 0
  }), x = (0, a.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(t), [t]), v = g - o.useMemo(() => {
    var e, t, n;
    return null != (n = null == x || null == (t = x.filter) || null == (e = t.call(x, e => !e.ended && null == e.endsAt)) ? true : e.length) ? n : 0
  }, [x]);
  if (v <= 0) return null;
  let _ = n.some(e => e.skuId === i.A$);
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(l.Mgn, {
      color: u.Z.colors.TEXT_FEEDBACK_WARNING,
      className: m.icon
    }), (0, r.jsx)(s.xv, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: f.intl.string(p.default.n5hQhY)
    }), (0, r.jsxs)(s.xv, {
      variant: "text-sm/medium",
      children: [f.intl.formatToPlainString(p.default.iAaAiI, {
        boostCount: v,
        perksString: n.map(e => e.title).join(", ")
      }), _ && (0, r.jsx)(s.xv, {
        variant: "text-sm/medium",
        color: "text-feedback-warning",
        children: f.intl.string(p.default.Sfr0Jy)
      })]
    })]
  })
}