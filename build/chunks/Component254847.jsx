/** Chunk was on 5606 **/
/** chunk id: 254847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  Y: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk714991 = require("./714991.jsx"),
  Chunk695515 = require("./695515.js"),
  Chunk397808 = require("./397808.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk957415 = require("./957415.js");
let f = [18, 18, 16, 16, 14, 12, 10];

function b(e) {
  var t;
  return null != (t = f[e.length - 1]) ? t : f[f.length - 1]
}
let h = Chunk64700.memo(e => {
  let {
    guildId: t,
    className: n,
    customSubtext: i
  } = e, l = (0, a.bG)([d.A], () => d.A.getGuild(t));
  if (true === l) return null;
  let f = l.features.has(p.GuildFeatures.VERIFIED) || l.features.has(p.GuildFeatures.PARTNERED),
    {
      name: b
    } = l;
  return (0, r.jsxs)("div", {
    className: s()(g.kL, n),
    children: [(0, r.jsx)(u.A, {
      guildId: t
    }), (0, r.jsxs)("div", {
      className: g.$z,
      children: [(0, r.jsxs)("div", {
        className: g.wx,
        children: [f ? (0, r.jsx)(c.A, {
          guild: l,
          tooltipPosition: "bottom",
          tooltipColor: o.STz.Colors.PRIMARY,
          className: g.n2
        }) : null, (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: b
        })]
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: null != i ? i : true !== l.approximateMemberCount ? m.intl.format(_.default["5JmNgg"], {
          members: l.approximateMemberCount
        }) : null
      })]
    })]
  })
});
h.displayName = "FamilyCenterActivityGuildRow";
let A = h