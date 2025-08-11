/** Chunk was on 6850 **/
/** chunk id: 102560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk48210 = require("./48210.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.js"),
  Chunk201367 = require("./201367.js");
let p = e => {
  let {
    guild: t,
    transitionState: n,
    onClose: o
  } = e, [p, f] = l.useState(7), [h, j] = l.useState(null), [g, x] = l.useState([]), v = l.useCallback(async () => {
    j(null), j(await c.Z.updateEstimate(t.id, p, g))
  }, [p, t.id, g]);
  l.useEffect(() => {
    v()
  }, [v]);
  let y = (0, a.Wu)([C.Z, d.Z], () => {
    let e = C.Z.getHighestRole(t);
    return i()(d.Z.getSortedRoles(t.id)).filter(n => !(0, u.fI)(n) && C.Z.isRoleHigher(t, e, n)).map(e => {
      let {
        id: t,
        name: n
      } = e;
      return {
        label: n,
        value: t
      }
    }).value()
  }, [t]);
  return <s.Y0X transitionState={n} parentComponent={"PruneGuild"}>{<s.xBx separator={false}><s.X6q variant={"heading-lg/semibold"}>{m.intl.string(m.t.zbyz7u)}{"—"}{null != t ? t.name : ""}</s.X6q></s.xBx>}{<div className={b.content}>{<s.xJW title={m.intl.string(m.t.YccTvL)}><s.FXm value={p} options={[{
            name: m.intl.formatToPlainString(m.t.FM1dHR, {
              days: 7
            }),
            value: 7
          }, {
            name: m.intl.formatToPlainString(m.t.FM1dHR, {
              days: 30
            }),
            value: 30
          }]} onChange={e => {
            let {
              value: t
            } = e;
            f(t)
          }} className={b.spacing} /></s.xJW>}{<s.xJW title={m.intl.string(m.t.buoe19)}><s.zJl className={b.scroller}><s.VcW maxVisibleItems={10} multi={true} value={g} onChange={e => x(e)} options={y} /></s.zJl></s.xJW>}{<s.R94 type={s.R94.Types.DESCRIPTION} className={b.spacing}>{g.length > 0 ? m.intl.format(m.t["5WxHHh"], {
          members: h,
          days: p
        }) : m.intl.format(m.t.f13az8, {
          members: h,
          days: p
        })}</s.R94>}</div>}{<s.mzw><s.hE2 direction={"horizontal-reverse"}>{<s.zxk variant={"primary"} text={m.intl.string(m.t["2mIlKS"])} onClick={() => {
            c.Z.prune(t.id, p, g), o()
          }} />}{<s.zxk variant={"secondary"} text={m.intl.string(m.t["ETE/oK"])} onClick={o} />}</s.hE2></s.mzw>}</s.Y0X>
}