/** Chunk was on 54844 **/
/** chunk id: 778231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk522289 = require("./522289.jsx"),
  Chunk359993 = require("./359993.js"),
  Chunk146078 = require("./146078.js"),
  Chunk881998 = require("./881998.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk711845 = require("./711845.js"),
  Chunk970952 = require("./970952.js");
let b = e => {
  var t, n;
  let {
    entry: b
  } = e, {
    name: h
  } = b, f = (0, i.e7)([m.Z], () => m.Z.getNewestTokenForApplication(b.id)), v = null != (n = b.getIconURL(40)) ? n : _, j = (0, d.Z)({
    application: b
  }), y = l.useRef(false);
  l.useEffect(() => {
    y.current || (s.Z.fetch(), y.current = true)
  }, []);
  let O = null != f ? p.default.extractTimestamp(f.id) : true;
  return <div className={x.container}>{<a.X6q className={x.header} variant={"heading-sm/semibold"}>{g.intl.string(g.t["aYfK//"])}</a.X6q>}{<div className={x.appContainer}><div className={x.appInfo}>{<o.ZP mask={o.ZP.Masks.AVATAR_DEFAULT} width={40} height={40} className={x.appIconMask}><img src={v} alt={""} className={x.appIcon} /></o.ZP>}{<div className={x.textContainer}>{<a.Text color={"header-primary"} variant={"text-md/medium"}>{h}</a.Text>}{j.length > 0 ? <r.Fragment>{<a.Text color={"text-default"} variant={"text-md/normal"}>{(0, u.Z)(j.length)}</a.Text>}{<c.Z className={x.guildStack} guilds={j} maxGuilds={6} />}</r.Fragment> : <r.Fragment>{<a.Text color={"text-default"} variant={"text-md/normal"}>{null == (t = b.bot) ? true : t.tag}</a.Text>}{null != O && <a.Text color={"text-default"} variant={"text-md/normal"}>{g.intl.formatToPlainString(g.t.C9rUOz, {
                authorizedAt: O
              })}</a.Text>}</r.Fragment>}</div>}</div></div>}</div>
}