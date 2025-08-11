/** Chunk was on 22988 **/
/** chunk id: 224726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk798476 = require("./798476.js"),
  Chunk496675 = require("./496675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk12078 = require("./12078.jsx"),
  Chunk934638 = require("./934638.js"),
  Chunk566036 = require("./566036.js"),
  Chunk979664 = require("./979664.js"),
  Chunk343397 = require("./343397.js"),
  Chunk509798 = require("./509798.js"),
  Chunk75733 = require("./75733.jsx"),
  Chunk474024 = require("./474024.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk83951 = require("./83951.js");
let E = function() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_PROFILE_PAGE), t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild(), []), n = null == exports ? true : exports.id, {
    fetchGuildProfile: E,
    fetchStatus: S
  } = (0, Chunk65361.u)(null == exports ? true : exports.id), T = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile(), []), P = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, exports)), w = Chunk73800.useCallback(e => {
    null != n && (p.Z.updateGuild({
      icon: e
    }), p.Z.updateGuildProfile(n, {
      icon: e
    }))
  }, [require]), R = Chunk73800.useCallback(e => {
    null != n && p.Z.updateGuildProfile(n, {
      customBanner: e
    })
  }, [require]);
  Chunk73800.useEffect(() => {
    null != require && E()
  }, [require, E]);
  let Z = Chunk73800.useCallback(() => {
    E(true)
  }, [E]);
  return (Chunk73800.useEffect(() => {
    Chunk224706.Z.getDetectableGames()
  }, []), S === Chunk314852.a.FETCHED && null == T) ? <Chunk509798.g forceFetchGuildProfile={Z} /> : S === Chunk314852.a.NOT_FETCHED || S === Chunk314852.a.FETCHING ? <main className={Chunk83951.spinner}><Chunk481060.$jN /></main> : null == exports || null == T ? null : <Chunk906732.Gt value={module}><main className={Chunk83951.content}>{<div className={Chunk83951.leftColumn}>{<div>{<Chunk481060.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t.txdaxc)}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/medium"} color={"header-secondary"} className={Chunk83951.description}>{Chunk388032.intl.string(Chunk388032.t["5PGZWV"])}</Chunk481060.Text>}</div>}{<Chunk343397.Z profile={T} canManageGuild={P} />}{<div className={Chunk83951.divider} />}{<Chunk979664.Z profile={T} canManageGuild={P} onIconChange={w} />}{<div className={Chunk83951.divider} />}{<Chunk12078.Z profile={T} onCustomBannerChange={R} canManageGuild={P} />}{<div className={Chunk83951.divider} />}{<Chunk75733.Z profile={T} canManageGuild={P} />}{<div className={Chunk83951.divider} />}{<Chunk934638.Z profile={T} canManageGuild={P} />}{<div className={Chunk83951.divider} />}{<Chunk566036.Z profile={T} canManageGuild={P} />}{<div className={Chunk83951.divider} />}{<Chunk474024.Z profile={T} canManageGuild={P} />}</div>}{<div className={Chunk83951.rightColumn}><Chunk481060.Ttm className={Chunk83951.profilePreviewContainer}><Chunk798476.ZP className={Chunk83951.profilePreview} profile={T} disableCTA={true} onIconChange={P ? w : true} disableGuildNameClick={true} /></Chunk481060.Ttm></div>}</main></Chunk906732.Gt>
}