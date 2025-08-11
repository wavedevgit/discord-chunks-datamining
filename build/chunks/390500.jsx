/** Chunk was on 1272 **/
/** chunk id: 390500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk926526 = require("./926526.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk568410 = require("./568410.js");
let c = function(e) {
  let {
    onWithdrawApplication: t,
    guild: n = null
  } = e, c = null == n ? true : n.id;
  return i.useEffect(() => {
    null != c && (0, a.Pq)(c)
  }, [c]), <div className={s.confirmation}>{<div className={s.iconWrapper}><l.wGF size={"md"} color={l.TVs.colors.INTERACTIVE_ACTIVE} /></div>}{<div className={s.statusTextContainer}>{<l.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{(null == n ? true : n.name) != null ? o.intl.formatToPlainString(o.t["0Qlu//"], {
          guildName: n.name
        }) : o.intl.string(o.t["5iLvS0"])}</l.X6q>}{<l.Text variant={"text-md/medium"} color={"header-secondary"}>{o.intl.string(o.t.FdsK4u)}</l.Text>}</div>}{<l.zxk fullWidth={true} onClick={t} variant={"critical-primary"} size={"md"} text={o.intl.string(o.t.g9tK0t)} />}</div>
}