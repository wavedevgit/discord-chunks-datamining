/** Chunk was on 22988 **/
/** chunk id: 254925, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk580685 = require("./580685.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk266454 = require("./266454.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk731722 = require("./731722.js"),
  Chunk441536 = require("./441536.js"),
  Chunk494620 = require("./494620.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk70086 = require("./70086.jsx"),
  Chunk835887 = require("./835887.js"),
  Chunk388661 = require("./388661.js"),
  Chunk500230 = require("./500230.js"),
  Chunk58909 = require("./58909.jsx"),
  Chunk742409 = require("./742409.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk131085 = require("./131085.js"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.js"),
  Chunk602268 = require("./602268.js");
let P = function() {
  var e, t, n, P;
  (0, Chunk388032.useSyncMessages)(Chunk195196.messagesLoader);
  let w = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    R = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildProfile()),
    {
      fetchGuildProfile: Z,
      fetchStatus: D
    } = (0, Chunk65361.u)(null == w ? true : w.id);
  if (Chunk73800.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), Chunk73800.useEffect(() => {
      D === Chunk314852.a.NOT_FETCHED && Z()
    }, [Z, D]), D !== Chunk314852.a.FETCHED) return <div className={Chunk602268.spinnerContainer}><Chunk481060.$jN /></div>;
  if (null == w || null == R) return null;
  let A = Chunk580685.Y.VISIBLE.has(R.visibility),
    k = (0, Chunk731722.up)(w),
    L = !k || (null == R ? true : R.tag) == null,
    M = null != (e = R.badge) ? module : Chunk131085.QV["0"],
    G = null != (t = R.badgeColorPrimary) ? exports : Chunk131085.Ek["0"].primary,
    U = null != (n = R.badgeColorSecondary) ? require : Chunk131085.Ek["0"].secondary,
    B = <Chunk255367.Fragment>{<Chunk388661.Z className={Chunk602268.section} guildId={w.id} isDisabled={L} tag={null != (P = R.tag) ? P : ""} badge={M} primaryColor={G} secondaryColor={U} />}{<Chunk835887.Z className={Chunk602268.section} selectedBadge={M} guildId={w.id} />}{<Chunk500230.Z className={Chunk602268.section} guildId={w.id} badge={M} primaryColor={G} secondaryColor={U} />}</Chunk255367.Fragment>;
  return <div>{<Chunk481060.X6q className={Chunk602268.title} variant={"heading-lg/semibold"}>{Chunk388032.intl.string(Chunk195196.default.mf2OwM)}</Chunk481060.X6q>}{<div className={Chunk602268.container}>{<div className={Chunk602268.leftContent}>{<div className={Chunk602268.descriptionContainer}>{<Chunk481060.Text variant={"text-sm/medium"} color={"text-secondary"}>{Chunk388032.intl.format(Chunk195196.default["655Un5"], {
              onClickServerProfile: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE)
              },
              onClickApplyToJoin: () => {
                Chunk434404.Z.setSection(Chunk981631.pNK.ACCESS)
              }
            })}</Chunk481060.Text>}{!A && <Chunk494620.Z className={Chunk602268.privateProfileWarning}><Chunk481060.Text variant={"text-xs/medium"}>{Chunk388032.intl.format(Chunk195196.default.CRbkIy, {
                onClickEditSetting: () => Chunk434404.Z.setSection(Chunk981631.pNK.PROFILE, Chunk981631.KsC.PROFILE_VISIBILITY)
              })}</Chunk481060.Text></Chunk494620.Z>}</div>}{k ? <div className={Chunk602268.enableSwitchContainer}>{<label htmlFor={"enable-server-tag"}><Chunk481060.Text variant={"text-md/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk195196.default["1zams7"])}</Chunk481060.Text></label>}{<Chunk481060.rsf id={"enable-server-tag"} checked={!L} onChange={() => {
              if (L) {
                var e;
                Chunk434404.Z.updateGuildProfile(w.id, {
                  tag: null != (e = R.tag) ? module : "",
                  badge: M,
                  badgeColorPrimary: G,
                  badgeColorSecondary: U
                })
              } else Chunk434404.Z.updateGuildProfile(w.id, {
                tag: null
              })
            }} />}</div> : <div className={Chunk602268.boostingLinkContainer}><Chunk70086.P onClick={() => {
              (0, Chunk441536.Z)(w.id, Chunk100527.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), Chunk434404.Z.close()
            }} /></div>}{L ? <Chunk481060.nuw><div className={Chunk602268.disabledForm}>{B}</div></Chunk481060.nuw> : B}</div>}{<div className={Chunk602268.sidebarContainer}>{<Chunk742409.Z guildId={w.id} tag={R.tag} badge={M} primaryColor={G} secondaryColor={U} />}{!L && <Chunk58909.Z guildId={w.id} />}</div>}</div>}</div>
}