/** Chunk was on 44799 **/
/** chunk id: 51859, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk494497 = require("./494497.js"),
  Chunk481060 = require("./481060.js"),
  Chunk158638 = require("./158638.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.js"),
  Chunk262212 = require("./262212.js"),
  Chunk795338 = require("./795338.js"),
  Chunk226278 = require("./226278.js"),
  Chunk279604 = require("./279604.js"),
  Chunk279475 = require("./279475.js"),
  Chunk535396 = require("./535396.js"),
  Chunk246499 = require("./246499.js");

function _(e) {
  let {
    guildId: t,
    powerup: n
  } = e, [_, v] = o.useState(true);
  (0, f.KT)(_);
  let [b, j] = o.useState(false), h = (0, a.ZP)(t, n).type !== g.A3.INACTIVE, E = (0, m.d)(h), C = (0, s.g1)(t, "GuildPowerupPerkCard"), I = n.skuId === i.A$;
  return <p.Z onHover={e => j(e)} guildId={t} powerup={n} badge={I || C ? I && C ? "beta" : true : "new"}>{<d.m className={x.image} powerup={n} isHovering={b} />}{<c.Q9 title={n.title} textColor={E} footer={(0, r.jsx)(p.g, {
        guildId: t,
        powerup: n
      })}><l.Text className={x.description} color={E} variant={"text-sm/medium"}>{n.description}</l.Text></c.Q9>}{<c.N4><u.ZP guildId={t} powerup={n} onError={v} /></c.N4>}</p.Z>
}