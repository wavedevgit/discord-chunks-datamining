/** Chunk was on 44799 **/
/** chunk id: 51859, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk470039 = require("./470039.js");

function x(e) {
  let {
    guildId: t,
    powerup: n
  } = e, [x, _] = i.useState(true);
  (0, f.KT)(x);
  let [b, h] = i.useState(false), j = (0, s.ZP)(t, n).type !== g.A3.INACTIVE, C = (0, m.d)(j), w = (0, a.g1)(t, "GuildPowerupPerkCard"), I = n.skuId === l.A$;
  return (0, r.jsxs)(p.Z, {
    onHover: e => h(e),
    guildId: t,
    powerup: n,
    badge: I && w ? "beta" : true,
    children: [(0, r.jsx)(d.m, {
      className: v.image,
      powerup: n,
      isHovering: b
    }), (0, r.jsx)(c.Q9, {
      title: n.title,
      textColor: C,
      footer: (0, r.jsx)(p.g, {
        guildId: t,
        powerup: n
      }),
      children: (0, r.jsx)(o.Text, {
        className: v.description,
        color: C,
        variant: "text-sm/medium",
        children: n.description
      })
    }), (0, r.jsx)(c.N4, {
      children: (0, r.jsx)(u.ZP, {
        guildId: t,
        powerup: n,
        onError: _
      })
    })]
  })
}