/** Chunk was on 75708 **/
/** chunk id: 940276, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk650774 = require("./650774.js"),
  Chunk626135 = require("./626135.js"),
  Chunk797670 = require("./797670.jsx"),
  Chunk304432 = require("./304432.js"),
  Chunk981631 = require("./981631.js"),
  Chunk29953 = require("./29953.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk236022 = require("./236022.js");

function h(e) {
  let {
    guild: t,
    isActivityRestricted: n,
    onToggleActivityRestrictedGuild: r
  } = e, o = (0, s.e7)([l.Z], () => l.Z.getMemberCount(t.id));
  return <li><a.j7V className={g.guildRowWrapper} value={!n} onChange={e => r({
        checked: e,
        guildId: t.id
      })} hideBorder={true}><div className={g.guildRow}>{<div><c.V guild={t} size={48} /></div>}{<div className={g.guildRowTextContainer}>{<a.Text variant={"text-md/medium"} lineClamp={1} color={"text-default"}>{t.name}</a.Text>}{<div className={g.memberDetailsContainer}>{<div className={g.memberCountDot} />}{<a.Text variant={"text-xs/normal"} color={"text-secondary"}>{p.intl.format(p.t.zRl6XV, {
                count: o
              })}</a.Text>}</div>}</div>}</div></a.j7V></li>
}
let f = function() {
  let {
    guilds: e,
    searchQuery: t,
    setSearchQuery: n,
    sortOrder: s,
    setSortOrder: l,
    hasActivityRestrictedGuilds: c,
    onToggleAllActivityRestrictedGuilds: f,
    onToggleActivityRestrictedGuild: b,
    isActivityRestricted: x,
    numActivityRestrictedGuilds: _,
    numTotalGuilds: j
  } = (0, Chunk304432.F)(), E = (0, Chunk73800.useId)();
  return <div className={Chunk236022.wrapper}>{<div className={Chunk236022.headerContainer}>{<Chunk481060.E1j query={exports} onChange={require} onClear={() => {
          Chunk626135.default.track(Chunk981631.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
            interaction: "search_cleared",
            sort_order: Chunk442837,
            activity_restricted_guild_count: _,
            total_guild_count: j
          }), require("")
        }} onFocus={() => Chunk626135.default.track(Chunk981631.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
          interaction: "search_focused",
          sort_order: Chunk442837,
          activity_restricted_guild_count: _,
          total_guild_count: j
        })} onBlur={() => Chunk626135.default.track(Chunk981631.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
          interaction: "search_blurred",
          sort_order: Chunk442837,
          activity_restricted_guild_count: _,
          total_guild_count: j
        })} placeholder={Chunk388032.intl.string(Chunk388032.t["H+nRY2"])} aria-label={Chunk388032.intl.string(Chunk388032.t["5h0QOD"])} inputProps={{
          "aria-controls": E,
          "aria-expanded": true
        }} />}{module.length > 0 && <div className={Chunk236022.controlsContainer}>{<Chunk481060.PhF className={Chunk236022.sortOrderSelect} look={Chunk481060.qQH.CUSTOM} popoutWidth={"auto"} options={[{
            label: Chunk388032.intl.string(Chunk388032.t.STMPJy),
            value: Chunk304432.W.SERVER_ORDER
          }, {
            label: Chunk388032.intl.string(Chunk388032.t.CbaapK),
            value: Chunk304432.W.RECENTLY_JOINED
          }, {
            label: Chunk388032.intl.string(Chunk29953.default.ZI51JS),
            value: Chunk304432.W.ACTIVITY_SHARING_ON
          }, {
            label: Chunk388032.intl.string(Chunk29953.default["+kxafn"]),
            value: Chunk304432.W.ACTIVITY_SHARING_OFF
          }]} select={e => {
            o.default.track(u.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
              interaction: "sort_order_changed",
              sort_order: e,
              activity_restricted_guild_count: _,
              total_guild_count: j
            }), l(e)
          }} isSelected={e => s === e} serialize={String} />}{<Chunk481060.Avr variant={"primary"} onClick={f} text={Chunk797670 ? Chunk388032.intl.string(Chunk388032.t["7lxcLC"]) : Chunk388032.intl.string(Chunk388032.t.zh6UEh)} />}</div>}</div>}{<Chunk481060.nn4 aria-live={"polite"} role={"region"}>{Chunk388032.intl.format(Chunk29953.default.EvzDfX, {
        count: module.length
      })}</Chunk481060.nn4>}{<ul className={Chunk236022.guildsList} id={E} aria-label={Chunk388032.intl.string(Chunk388032.t["7hB4kp"])}>{0 === module.length && <div className={Chunk236022.noResultsContainer}><Chunk481060.Text className={Chunk236022.noResultsText} variant={"text-lg/medium"}>{Chunk388032.intl.string(Chunk388032.t["Xe+fJC"])}</Chunk481060.Text></div>}{module.map(e => <h guild={e} isActivityRestricted={x(e.id)} onToggleActivityRestrictedGuild={b} />)}</ul>}</div>
}