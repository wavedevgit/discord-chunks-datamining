/** Chunk was on 75708 **/
/** chunk id: 954794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk882029 = require("./882029.js"),
  Chunk955204 = require("./955204.js"),
  Chunk248998 = require("./248998.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167407 = require("./167407.js");

function h(e) {
  let {
    onBackClick: t
  } = e, n = (0, s.e7)([d.Z], () => d.Z.getAllUnlockedAchievements()), h = r.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]), f = r.useMemo(() => Object.values(u.LG).filter(c.lm).filter(e => null == n[e.id]).sort((e, t) => e.rarity - t.rarity), [n]);
  return <i.Fragment>{<l.hjN><l.P3F onClick={t} className={g.backContainer}>{<o.Z direction={o.Z.Directions.LEFT} className={g.icon} />}{<l.Text variant={"text-lg/normal"} color={"text-default"}>{p.intl.string(p.t["13/7kZ"])}</l.Text>}</l.P3F></l.hjN>}{<div className={g.headerContainer}>{<div className={g.headerTextContainer}>{<l.X6q variant={"heading-lg/extrabold"} color={"header-primary"}>{p.intl.string(p.t["6jI0hY"])}</l.X6q>}{<l.Text variant={"text-md/normal"} color={"header-secondary"}>{p.intl.string(p.t.GuUItb)}</l.Text>}</div>}{<div className={g.headerIcon}><l.rm8 size={"custom"} color={a.Z.unsafe_rawColors.ORANGE_345.css} width={40} height={40} /></div>}</div>}{h.length > 0 && <l.hjN className={g.divider}><div className={g.achievementGrid}>{h.map(e => {
          let {
            achievementId: t,
            dateUnlocked: n
          } = e;
          return (0, i.jsx)(m.Z, {
            achievementId: t,
            dateUnlocked: n
          }, t)
        })}</div></l.hjN>}{f.length > 0 && <l.hjN className={g.divider}>{<div className={g.headerTextContainer}><l.Text variant={"text-md/bold"} color={"header-secondary"}>{p.intl.string(p.t.GFyMg4)}</l.Text></div>}{<div className={g.achievementGrid}>{f.map(e => (0, i.jsx)(m.Z, {
          achievementId: e.id
        }, e.id))}</div>}</l.hjN>}{<l.hjN className={g.divider}><div className={g.bottomPadding} /></l.hjN>}</i.Fragment>
}