/** Chunk was on 78376 **/
/** chunk id: 254847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h,
  Y: () => f
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
let A = [18, 18, 16, 16, 14, 12, 10];

function f(e) {
  var t;
  return null != (t = A[e.length - 1]) ? t : A[A.length - 1]
}
let b = Chunk64700.memo(e => {
  let {
    guildId: t,
    className: n,
    customSubtext: i
  } = e, l = (0, a.bG)([d.A], () => d.A.getGuild(t));
  if (true === l) return null;
  let A = l.features.has(_.GuildFeatures.VERIFIED) || l.features.has(_.GuildFeatures.PARTNERED),
    {
      name: f
    } = l;
  return (0, r.jsxs)("div", {
    className: s()(g.kL, n),
    children: [(0, r.jsx)(u.A, {
      guildId: t
    }), (0, r.jsxs)("div", {
      className: g.$z,
      children: [(0, r.jsxs)("div", {
        className: g.wx,
        children: [A ? (0, r.jsx)(c.A, {
          guild: l,
          tooltipPosition: "bottom",
          tooltipColor: o.STz.Colors.PRIMARY,
          className: g.n2
        }) : null, (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: f
        })]
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: null != i ? i : true !== l.approximateMemberCount ? m.intl.format(p.default["5JmNgg"], {
          members: l.approximateMemberCount
        }) : null
      })]
    })]
  })
});
b.displayName = "FamilyCenterActivityGuildRow";
let h = b