/** Chunk was on 53512 **/
/** chunk id: 753521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk115345 = require("./115345.js"),
  Chunk57927 = require("./57927.jsx"),
  Chunk273236 = require("./273236.jsx"),
  Chunk931839 = require("./931839.js"),
  Chunk905987 = require("./905987.js"),
  Chunk789662 = require("./789662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk699343 = require("./699343.js");

function _(e) {
  let {
    onClose: t,
    transitionState: n,
    dismissable: o,
    guildPain: _,
    myUsage: v
  } = e, [f, N] = s.useState(m.O.Intro), {
    submitted: p,
    submitting: C,
    saveSettings: y
  } = (0, c.vo)(t), {
    guildPlans: T,
    overrideGuild: w,
    getDebug: O
  } = (0, c.F6)(_, v), I = s.useRef(null);
  return s.useEffect(() => {
    l.default.track(u.rMx.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []), <a.Y0X className={g.__invalid_modal} transitionState={n} aria-label={j.intl.string(j.t.HcoRu7)} size={a.CgR.DYNAMIC} parentComponent={"NotificationMigrationModal"}>{<m.Z selectedTab={f} onClick={N} submitted={p} />}{f === m.O.Intro ? <d.Z ref={I} /> : f === m.O.Customize ? <b guildPlans={T} overrideGuild={w} getDebug={O} /> : <x.Z count={Object.values(T).filter(e => {
        var t;
        return (null != (t = e.overrideMode) ? t : e.mode) === h.AR.UseGreyDot
      }).length} />}{<a.mzw className={g.buttons}>{<div className={g.__invalid_left}>{o || f !== m.O.Tips && f !== m.O.Customize ? null : <a.eee className={g.dismiss} href={"https://dis.gd/better-muting"}><a.Text variant={"text-sm/semibold"} color={"interactive-normal"}>{j.intl.string(j.t.hvVgAQ)}</a.Text></a.eee>}{o && f === m.O.Intro ? <a.P3F className={g.dismiss} onClick={t}><a.Text variant={"text-sm/semibold"} color={"interactive-normal"}>{j.intl.string(j.t.WAI6xs)}</a.Text></a.P3F> : null}{o && f === m.O.Customize ? <a.P3F className={g.dismiss} onClick={t}><a.Text variant={"text-sm/semibold"} color={"interactive-normal"}>{j.intl.string(j.t["ETE/oK"])}</a.Text></a.P3F> : null}</div>}{<div className={g.right}>{f === m.O.Customize ? <a.Text className={g.warning} variant={"text-xs/medium"} color={"text-muted"}>{j.intl.string(j.t.nlpqxM)}</a.Text> : null}{f !== m.O.Customize || p ? null : <r.zx onClick={() => N(m.O.Intro)} color={r.zx.Colors.TRANSPARENT}>{<a.whL size={"xs"} color={"currentColor"} />}{" "}{j.intl.string(j.t["13/7kZ"])}</r.zx>}{f === m.O.Intro ? <r.zx onClick={() => {
            var e;
            (null == (e = I.current) ? true : e.maybeChangeToAfterTab()) && N(m.O.Customize)
          }}>{j.intl.string(j.t.uw9zIy)}{" "}{<a.ZSh size={"xs"} color={"currentColor"} />}</r.zx> : f === m.O.Customize ? <r.zx onClick={() => {
            N(m.O.Tips), y(T)
          }}>{j.intl.string(j.t["1Qm829"])}{" "}{<a.dz2 size={"xs"} color={"currentColor"} />}</r.zx> : <a.zxk variant={"primary"} text={j.intl.string(j.t.cpT0Cg)} loading={C} onClick={t} />}</div>}</a.mzw>}</a.Y0X>
}

function b(e) {
  let {
    guildPlans: t,
    overrideGuild: n
  } = e;
  return <a.Ttm className={g.content}>{<div className={g.header}>{<a.X6q variant={"heading-xl/bold"} color={"header-primary"}>{j.intl.string(j.t["zBC2+f"])}</a.X6q>}{<a.Text className={g.__invalid_subtitle} variant={"text-md/medium"} color={"header-secondary"}>{j.intl.string(j.t["zE9e//"])}</a.Text>}</div>}{<o.Z guildPlans={t} overrideGuild={n} />}</a.Ttm>
}