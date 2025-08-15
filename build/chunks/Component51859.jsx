/** Chunk was on 44799 **/
/** chunk id: 51859, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk481060 = require("./481060.js"),
  Chunk158638 = require("./158638.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk262212 = require("./262212.jsx"),
  Chunk795338 = require("./795338.jsx"),
  Chunk226278 = require("./226278.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk535396 = require("./535396.js"),
  Chunk237522 = require("./237522.js");

function g(e) {
  let {
    guildId: t,
    powerup: n
  } = e, [g, v] = o.useState(true);
  (0, m.KT)(g);
  let [b, h] = o.useState(false), j = (0, a.ZP)(t, n).type !== _.A3.INACTIVE, C = (0, f.d)(j), E = (0, s.g1)(t, "GuildPowerupPerkCard"), I = n.skuId === i.A$;
  return (0, r.jsxs)(p.Z, {
    onHover: e => h(e),
    guildId: t,
    powerup: n,
    badge: I || E ? I && E ? "beta" : true : "new",
    children: [(0, r.jsx)(d.m, {
      className: x.image,
      powerup: n,
      isHovering: b
    }), (0, r.jsx)(c.Q9, {
      title: n.title,
      textColor: C,
      footer: (0, r.jsx)(p.g, {
        guildId: t,
        powerup: n
      }),
      children: (0, r.jsx)(l.Text, {
        className: x.description,
        color: C,
        variant: "text-sm/medium",
        children: n.description
      })
    }), (0, r.jsx)(c.N4, {
      children: (0, r.jsx)(u.ZP, {
        guildId: t,
        powerup: n,
        onError: v
      })
    })]
  })
}