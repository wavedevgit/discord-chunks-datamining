/** Chunk was on web.js **/
/** chunk id: 254847, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b,
  Y: () => g
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
let m = [18, 18, 16, 16, 14, 12, 10];

function g(e) {
  var t;
  return null != (t = m[e.length - 1]) ? t : m[m.length - 1]
}
let E = Chunk64700.memo(e => {
  let {
    guildId: t,
    className: n,
    customSubtext: i
  } = e, a = (0, o.bG)([u.A], () => u.A.getGuild(t));
  if (true === a) return null;
  let m = a.features.has(f.GuildFeatures.VERIFIED) || a.features.has(f.GuildFeatures.PARTNERED),
    {
      name: g
    } = a;
  return (0, r.jsxs)("div", {
    className: s()(h.kL, n),
    children: [(0, r.jsx)(d.A, {
      guildId: t
    }), (0, r.jsxs)("div", {
      className: h.$z,
      children: [(0, r.jsxs)("div", {
        className: h.wx,
        children: [m ? (0, r.jsx)(c.A, {
          guild: a,
          tooltipPosition: "bottom",
          tooltipColor: l.STz.Colors.PRIMARY,
          className: h.n2
        }) : null, (0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: g
        })]
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: null != i ? i : true !== a.approximateMemberCount ? _.intl.format(p.default["5JmNgg"], {
          members: a.approximateMemberCount
        }) : null
      })]
    })]
  })
});
E.displayName = "FamilyCenterActivityGuildRow";
let b = E