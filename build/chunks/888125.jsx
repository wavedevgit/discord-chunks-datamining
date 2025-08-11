/** Chunk was on 22988 **/
/** chunk id: 888125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk434404 = require("./434404.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk747608 = require("./747608.js"),
  Chunk935653 = require("./935653.js"),
  Chunk449874 = require("./449874.js");

function g(e) {
  let {
    canManageGuild: t,
    premiumProgressBarEnabled: n
  } = e, g = (0, s.ZP)(), p = i.useCallback(e => {
    o.Z.updateGuild({
      premiumProgressBarEnabled: e
    })
  }, []);
  return <a.hjN className={d.container}>{<div className={d.column}>{<a.j7V className={d.switch} onChange={p} value={n} hideBorder={true} disabled={!t}>{c.intl.string(c.t.Dl4mJS)}</a.j7V>}{<a.Text variant={"text-sm/medium"} color={"text-secondary"}>{c.intl.string(c.t.xzHcoa)}</a.Text>}</div>}{<div className={d.column}><img alt={c.intl.string(c.t.UOJp5e)} src={(0, l.ap)(g) ? m : u} className={d.progressBarImage} /></div>}</a.hjN>
}