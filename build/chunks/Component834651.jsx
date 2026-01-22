/** Chunk was on 97492 **/
/** chunk id: 834651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576470 = require("./576470.jsx"),
  Chunk989985 = require("./989985.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk723508 = require("./723508.js"),
  Chunk264388 = require("./264388.js"),
  Chunk914662 = require("./914662.jsx"),
  Chunk200700 = require("./200700.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk719931 = require("./719931.js");

function g(e) {
  let {
    guild: t,
    disabledUntil: n
  } = e, [g, m] = (0, d.n)(t.id), A = (0, l.bG)([c.Ay, o.default], () => c.Ay.getMember(t.id, o.default.getId()), [t.id]);
  return (0, u.X)(A), (0, r.jsxs)("div", {
    children: [g ? (0, r.jsx)(f.A, {
      onClose: () => m(t.id),
      guildName: t.name
    }) : null, (0, r.jsx)(s._, {
      bannerIcon: (0, r.jsx)(i.gQi, {
        size: "md",
        color: "currentColor",
        className: b.q3
      }),
      bannerHeader: h.intl.string(h.t["9UoK6Y"]),
      bannerSubtext: h.intl.format(h.t["4ZwD5G"], {
        link: p.MO
      }),
      textStyles: b.cI,
      headerStyles: b.U_,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/semibold",
        children: (0, r.jsx)(a.A, {
          deadline: new Date(n),
          showUnits: true,
          stopAtOneSec: true
        })
      })
    })]
  })
}