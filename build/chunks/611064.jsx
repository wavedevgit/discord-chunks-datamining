/** Chunk was on 49152 **/
/** chunk id: 611064, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => b,
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk82295 = require("./82295.jsx"),
  Chunk485267 = require("./485267.js"),
  Chunk71585 = require("./71585.js"),
  Chunk703180 = require("./703180.js"),
  Chunk809017 = require("./809017.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk917764 = require("./917764.js"),
  Chunk11847 = require("./11847.js");

function b(e) {
  return (null == e ? true : e.id) === h.G
}
let y = Chunk73800.memo(function(e) {
  let t, {
      title: h,
      onToggleExpand: b,
      expanded: y,
      expandedCount: x
    } = e,
    _ = (0, l.e7)([u.Z], () => u.Z.hidden),
    j = i.useCallback(e => {
      (0, s.jW)(e, async () => {
        let {
          MemberListContentSettingsMenu: e
        } = await Promise.resolve().then(n.bind(n, 703180));
        return () => <e closePopout={s.Zy} />
      })
    }, []);
  return <o.Z className={m.membersGroup}>{<a.nn4>{f.intl.format(f.t.UaqbkZ, {
        title: h,
        count: x
      })}</a.nn4>}{<a.P3F onClick={e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return _ ? (0, c.lY)() : x > 3 ? b() : (0, p.dG4)()
      }} onContextMenu={j} tag={"span"} aria-hidden={true} className={g.headerContainer}>{<div className={g.header}>{<span>{h}{" — "}{x}</span>}{<d.Z />}</div>}{x <= 3 && !_ ? null : (t = _ ? <a.u04 className={g.toggleExpandIcon} /> : y ? <a.CJ0 className={g.toggleExpandIcon} /> : <a.Fbu className={g.toggleExpandIcon} />, <a.tEY><div tabIndex={0} className={g.toggleExpandIcon}>{t}</div></a.tEY>)}</a.P3F>}</o.Z>
})