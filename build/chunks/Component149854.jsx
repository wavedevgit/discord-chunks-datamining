/** Chunk was on 88615 **/
/** chunk id: 149854, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk397927 = require("./397927.js"),
  Chunk840120 = require("./840120.js"),
  Chunk998418 = require("./998418.js"),
  Chunk890942 = require("./890942.jsx"),
  Chunk722523 = require("./722523.jsx"),
  Chunk490557 = require("./490557.jsx"),
  Chunk634925 = require("./634925.jsx"),
  Chunk744201 = require("./744201.js"),
  Chunk867060 = require("./867060.js"),
  Chunk568065 = require("./568065.js"),
  Chunk876380 = require("./876380.js");

function A(e) {
  let {
    guildId: t,
    powerup: n
  } = e, [A, _] = l.useState(true);
  (0, f.A)(A);
  let [x, h] = l.useState(false), b = (0, a.Ay)(t, n).type !== v.b_.INACTIVE, {
    textColor: j
  } = (0, m.A)(b), E = (0, s.M5)(t, "GuildPowerupPerkCard"), w = n.skuId === i.FB;
  return (0, r.jsxs)(p.h, {
    onHover: e => h(e),
    guildId: t,
    powerup: n,
    badge: w && E ? "beta" : true,
    children: [(0, r.jsx)(c.l, {
      className: g.Sl,
      powerup: n,
      isHovering: x
    }), (0, r.jsx)(u.Ft, {
      title: n.title,
      textColor: j,
      footer: (0, r.jsx)(p.A, {
        guildId: t,
        powerup: n
      }),
      children: (0, r.jsx)(o.Text, {
        className: g.h_,
        color: j,
        variant: "text-sm/medium",
        children: n.description
      })
    }), (0, r.jsx)(u.kd, {
      children: (0, r.jsx)(d.Ay, {
        guildId: t,
        powerup: n,
        onError: _
      })
    })]
  })
}