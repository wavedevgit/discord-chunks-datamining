/** Chunk was on 54844 **/
/** chunk id: 273514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.js"),
  Chunk548304 = require("./548304.js");
let d = e => {
  let {
    entry: t
  } = e, n = a.Z.getChannel(t.channelId);
  if (null == n) return null;
  let d = s.Z.getGuild(n.guild_id);
  return null == d ? null : <div className={c.container}>{<l.X6q className={c.header} variant={"heading-sm/semibold"}>{o.intl.string(o.t.nTe4HB)}</l.X6q>}{<div className={c.guildContainer}>{<div className={c.hubInfo}>{<i.Z guild={d} size={i.Z.Sizes.MINI} className={c.hubIcon} />}{<l.Text color={"header-secondary"} variant={"text-sm/normal"}>{d.name}</l.Text>}</div>}{<l.Text variant={"text-md/semibold"} color={"header-primary"}>{t.name}</l.Text>}</div>}</div>
}