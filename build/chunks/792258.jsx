/** Chunk was on 75708 **/
/** chunk id: 792258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk468194 = require("./468194.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk914788 = require("./914788.js"),
  Chunk981631 = require("./981631.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk45452 = require("./45452.js");
let f = [18, 18, 16, 16, 14, 12, 10],
  b = e => {
    let {
      guildId: t
    } = e, n = (0, l.e7)([u.Z], () => u.Z.getGuild(t));
    if (true === n) return null;
    let r = n.features.has(m.oNc.VERIFIED) || n.features.has(m.oNc.PARTNERED),
      {
        name: b
      } = n,
      x = (0, d.EB)(n, 40, true),
      _ = null,
      j = f[f.length - 1];
    if (null == n.icon && null != b) {
      var E;
      j = null != (E = f[(_ = (0, a.Zg)(b)).length - 1]) ? E : f[f.length - 1]
    }
    return <div className={h.container}>{<div style={{
          fontSize: j
        }}>{null != _ ? <div className={s()(h.childWrapper, h.acronym)} aria-hidden={true}>{_}</div> : null}{null != x ? <o.qEK src={x} size={o.EFr.SIZE_40} aria-hidden={true} /> : null}</div>}{<div className={h.descriptors}>{<div className={h.header}>{r ? <c.Z guild={n} tooltipPosition={"bottom"} tooltipColor={o.ua7.Colors.PRIMARY} className={h.guildBadge} /> : null}{<o.Text variant={"text-md/semibold"}>{b}</o.Text>}</div>}{true !== n.approximateMemberCount ? <o.Text variant={"text-xs/medium"} color={"text-muted"}>{g.intl.format(p.default["5JmNgo"], {
            members: n.approximateMemberCount
          })}</o.Text> : null}</div>}</div>
  }