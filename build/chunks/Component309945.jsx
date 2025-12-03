/** Chunk was on 44799 **/
/** chunk id: 309945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk899667 = require("./899667.js"),
  Chunk317169 = require("./317169.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk874622 = require("./874622.js");

function m(e) {
  let {
    guildId: t,
    powerupNames: n,
    warnings: m
  } = e, {
    spent: g
  } = (0, c.Z)(t), v = (0, a.e7)([u.Z], () => u.Z.getAppliedGuildBoostsForGuild(t), [t]), x = g - i.useMemo(() => {
    var e, t, n;
    return null != (n = null == v || null == (t = v.filter) || null == (e = t.call(v, e => !e.ended && null == e.endsAt)) ? true : e.length) ? n : 0
  }, [v]);
  return x <= 0 ? null : (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(o.Mgn, {
      color: s.Z.colors.TEXT_FEEDBACK_WARNING,
      className: f.icon
    }), (0, r.jsx)(l.xvT, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: p.intl.string(d.default.n5hQhc)
    }), (0, r.jsxs)(l.xvT, {
      variant: "text-sm/medium",
      children: [p.intl.formatToPlainString(d.default.iAaAiG, {
        boostCount: x,
        perksString: n.join(", ")
      }), null == m ? true : m.map((e, t) => (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "text-feedback-warning",
        className: f.warning,
        children: e
      }, "warning-".concat(t)))]
    })]
  })
}