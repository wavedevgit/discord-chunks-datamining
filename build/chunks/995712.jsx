/** Chunk was on 54844 **/
/** chunk id: 995712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk519582 = require("./519582.js");
let c = e => {
  var t;
  let {
    entry: n
  } = e, {
    id: c,
    icon: d,
    name: u
  } = n, m = null != (t = a.ZP.getGuildIconURL({
    id: c,
    icon: d,
    size: 32
  })) ? t : true;
  return <div className={o.container}>{<l.X6q className={o.header} variant={"heading-sm/semibold"}>{s.intl.string(s.t.nTe4HB)}</l.X6q>}{<div className={o.guildContainer}><div className={o.guildInfo}>{<i.ZP mask={i.ZP.Masks.SQUIRCLE} width={32} height={32} className={o.guildIconMask}><img src={m} alt={""} className={o.guildIcon} /></i.ZP>}{<l.Text color={"header-secondary"} variant={"text-sm/normal"}>{u}</l.Text>}</div></div>}</div>
}