/** Chunk was on 30419 **/
/** chunk id: 719228, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v,
  e: () => C,
  g: () => j
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk544197 = require("./544197.js");

function j(e) {
  let {
    isTransfer: t = false,
    setQuery: n,
    query: r
  } = e;
  return <o.xBx className={f.selectHeaderContainer}>{<o.X6q className={f.selectHeader} variant={"heading-md/semibold"}>{t ? g.intl.string(g.t.IB13DQ) : g.intl.string(g.t.cQYceX)}</o.X6q>}{<o.E1j placeholder={g.intl.string(g.t.vf3ZTU)} aria-label={g.intl.string(g.t.vf3ZTU)} className={f.selectSearch} query={r} onChange={n} onClear={() => n("")} />}</o.xBx>
}

function C(e) {
  let {
    isTransfer: t = false,
    selectedSlotGuilds: n,
    onClose: r,
    onSelectGuild: s,
    query: j
  } = e, C = (0, a.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()), v = (0, a.Wu)([m.Z], () => C.reduce((e, t) => {
    let l = m.Z.getGuild(t);
    return null == l || null != n && n.some(e => e.id === t) || (j.length <= 0 || i()(j.toLowerCase(), null == l ? true : l.name.toLowerCase())) && e.push(l), e
  }, []));

  function b() {
    r(), (0, c.xf)(), (0, u.uL)(p.Z5c.GUILD_DISCOVERY)
  }
  return <l.Fragment>{0 === v.length && <div className={f.emptyStateWrapper}><o.Text variant={"text-md/normal"}>{0 === C.length ? g.intl.format(g.t["E3tB6+"], {
          publicGuildDirectoryHook: (e, t) => (0, l.jsx)(o.P3F, {
            onClick: b,
            tag: "a",
            children: e
          }, t)
        }) : g.intl.string(g.t.w3GLl5)}</o.Text></div>}{v.map(e => <o.P3F className={f.selectGuild} onClick={() => {
        s(e)
      }}>{<d.Z className={f.selectGuildIcon} guild={e} size={d.Z.Sizes.SMALL} />}{<div className={f.selectGuildCopy}>{<o.Text className={f.selectGuildName} variant={"text-md/normal"}>{e.name}</o.Text>}{<o.Text className={f.selectGuildLevel} color={"text-muted"} variant={"text-xs/normal"}>{(0, h.nW)(e.premiumTier)}</o.Text>}</div>}{<o.Text className={f.selectGuildPseudoCta} color={"always-white"} variant={"text-sm/medium"}>{t ? g.intl.string(g.t.dUgaFx) : g.intl.string(g.t.Uj0md3)}</o.Text>}</o.P3F>)}</l.Fragment>
}

function v(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: s
  } = e, [i, a] = r.useState("");
  return <o.Y0X transitionState={s} className={f.modal} size={o.CgR.SMALL} parentComponent={"GuildSelectModal"}>{<j query={i} setQuery={a} />}{<o.hzk className={f.modalContent}><C onClose={t} onSelectGuild={n} query={i} /></o.hzk>}{<o.olH className={f.modalCloseButton} onClick={t} />}</o.Y0X>
}