/** Chunk was on 88615 **/
/** chunk id: 149854, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    guildId: t,
    powerup: l
  } = e, [g, x] = n.useState(true);
  (0, m.A)(g);
  let [b, h] = n.useState(false), j = (0, a.Ay)(t, l).type !== v.b_.INACTIVE, {
    textColor: _
  } = (0, p.A)(j), E = (0, o.M5)(t, "GuildPowerupPerkCard"), y = l.skuId === i.FB;
  return (0, r.jsxs)(f.h, {
    onHover: e => h(e),
    guildId: t,
    powerup: l,
    badge: y && E ? "beta" : true,
    children: [(0, r.jsx)(c.l, {
      className: A.Sl,
      powerup: l,
      isHovering: b
    }), (0, r.jsx)(u.Ft, {
      title: l.title,
      textColor: _,
      footer: (0, r.jsx)(f.A, {
        guildId: t,
        powerup: l
      }),
      children: (0, r.jsx)(s.Text, {
        className: A.h_,
        color: _,
        variant: "text-sm/medium",
        children: l.description
      })
    }), (0, r.jsx)(u.kd, {
      children: (0, r.jsx)(d.Ay, {
        guildId: t,
        powerup: l,
        onError: x
      })
    })]
  })
}