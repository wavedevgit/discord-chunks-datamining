/** Chunk was on 22988 **/
/** chunk id: 566036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk510231 = require("./510231.js"),
  Chunk434404 = require("./434404.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk795691 = require("./795691.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk210530 = require("./210530.js"),
  Chunk381109 = require("./381109.js");
let h = () => null;

function f(e) {
  let {
    gameApplicationIds: t,
    handleChange: n,
    disabled: i
  } = e, {
    options: l,
    matchSorterOptions: a
  } = (0, o.h)();
  return <s.VcW multi={true} hidePills={true} wrapperClassName={g.selectWrapper} options={l} value={t} placeholder={m.intl.string(m.t.JTLolJ)} onChange={n} isDisabled={20 === t.length || i} matchSorterOptions={a} clearQueryOnSelect={true} customPillContainerClassName={g.pills} renderCustomPill={h} />
}

function b(e) {
  let {
    gameApplicationIds: t,
    onRemoveGame: n,
    disabled: i
  } = e;
  return 0 === t.length ? null : <div className={g.selectedGames}>{t.map(e => (0, r.jsx)(d.Z, {
      applicationId: e,
      selected: true,
      onClick: n,
      disabled: i
    }, e))}</div>
}
let x = [];

function j(e) {
  var t;
  let {
    profile: n,
    canManageGuild: l
  } = e, o = n.id, d = null != (t = null == n ? true : n.gameApplicationIds) ? t : x, h = i.useCallback(e => {
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: e
    })
  }, [o]), j = i.useCallback(e => {
    let t = d.filter(t => t !== e);
    c.Z.updateGuildProfile(o, {
      gameApplicationIds: t
    })
  }, [o, d]), v = i.useRef(d), _ = i.useMemo(() => (a().isEqual(new Set(d), new Set(v.current)) || (v.current = [...d]), v.current), [d]);
  return <s.hjN className={p.section}>{<div className={p.sectionHeader}>{<s.vwX>{m.intl.string(m.t.BR68vL)}</s.vwX>}{<s.R94 type={s.geA.DESCRIPTION}>{m.intl.string(m.t.MobxiI)}</s.R94>}</div>}{<div className={g.sectionBody}>{<f gameApplicationIds={d} handleChange={h} disabled={!l} />}{<b gameApplicationIds={_} onRemoveGame={j} disabled={!l} />}{<u.Z guildId={o} selectedGameApplicationIds={d} onUpdateGames={h} disabled={!l} />}</div>}</s.hjN>
}