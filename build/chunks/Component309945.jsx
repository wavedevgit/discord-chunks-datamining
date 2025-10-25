/** Chunk was on 44799 **/
/** chunk id: 309945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk235681 = require("./235681.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk874622 = require("./874622.js");

function g(e) {
  let {
    guildId: t,
    powerups: n
  } = e, {
    spent: g
  } = (0, d.Z)(t), v = (0, s.e7)([u.Z], () => u.Z.getAppliedGuildBoostsForGuild(t), [t]), x = g - i.useMemo(() => {
    var e, t, n;
    return null != (n = null == v || null == (t = v.filter) || null == (e = t.call(v, e => !e.ended && null == e.endsAt)) ? true : e.length) ? n : 0
  }, [v]);
  if (x <= 0) return null;
  let _ = n.some(e => e.skuId === o.A$);
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(l.Mgn, {
      color: c.Z.colors.TEXT_FEEDBACK_WARNING,
      className: m.icon
    }), (0, r.jsx)(a.xvT, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: f.intl.string(p.default.n5hQhc)
    }), (0, r.jsxs)(a.xvT, {
      variant: "text-sm/medium",
      children: [f.intl.formatToPlainString(p.default.iAaAiG, {
        boostCount: x,
        perksString: n.map(e => e.title).join(", ")
      }), _ && (0, r.jsx)(a.xvT, {
        variant: "text-sm/medium",
        color: "text-feedback-warning",
        children: f.intl.string(p.default.Sfr0Jw)
      })]
    })]
  })
}