/** Chunk was on 86872 **/
/** chunk id: 47343, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  R: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk590965 = require("./590965.js"),
  Chunk695346 = require("./695346.js"),
  Chunk51331 = require("./51331.js"),
  Chunk259580 = require("./259580.js"),
  Chunk626135 = require("./626135.js"),
  Chunk44609 = require("./44609.js"),
  Chunk731971 = require("./731971.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk190981 = require("./190981.js");
let h = () => {
  var e;
  let [n, t] = Chunk73800.useState(false), a = Chunk695346.G6.useSetting(), {
    nickname: h,
    dmsAllowed: E,
    showActivity: I,
    mutedServer: v,
    setNickname: f,
    setDmsAllowed: j,
    setShowActivity: S,
    setMutedServer: C,
    guildId: A,
    inviteCode: T
  } = (0, Chunk731971.XW)(), L = null == (e = Chunk590965.Z.getProps().invite) ? true : module.is_nickname_changeable, P = (0, Chunk44609.m4)({
    location: "InviteSettingsControls"
  });
  return <div className={r()(Chunk190981.editProfileContainer, {
      [Chunk190981.opened]: exports
    })}>{<Chunk481060.P3F className={Chunk190981.header} onClick={() => {
        exports || Chunk626135.default.track(Chunk981631.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
          guild_id: A,
          invite_code: T
        }), require(!exports)
      }}>{<div className={Chunk190981.headerIconWrapper}><Chunk481060.ewm size={"md"} /></div>}{<div className={Chunk190981.title}>{<Chunk481060.Text variant={"eyebrow"} color={"header-secondary"}>{Chunk388032.intl.string(Chunk388032.t.A5wHQ0)}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/medium"} color={"interactive-normal"}>{Chunk388032.intl.string(Chunk388032.t.UKCSER)}</Chunk481060.Text>}</div>}{<div className={r()(Chunk190981.caret, {
          [Chunk190981.opened]: exports
        })}><Chunk259580.Z width={18} height={18} direction={Chunk259580.Z.Directions.DOWN} /></div>}</Chunk481060.P3F>}{<div className={r()(Chunk190981.customizationSection, {
        [Chunk190981.opened]: exports
      }, L ? null : Chunk190981.condensed)}>{L && <div className={Chunk190981.serverNickname}>{<Chunk481060.Text variant={"eyebrow"} color={"header-secondary"}>{Chunk388032.intl.string(Chunk388032.t.me1lRk)}</Chunk481060.Text>}{<Chunk481060.oil placeholder={Chunk388032.intl.string(Chunk388032.t["09Q8ys"])} maxLength={Chunk981631.l$U} value={h} onChange={f} />}</div>}{<Chunk51331.Z title={Chunk388032.intl.string(Chunk388032.t["/2ed39"])} value={E} onChange={j} />}{Chunk120356 && <Chunk51331.Z title={Chunk388032.intl.string(Chunk388032.t.bN4m1N)} value={I} onChange={S} />}{P && <Chunk51331.Z title={Chunk388032.intl.string(Chunk388032.t["0nZCqK"])} value={v} onChange={C} />}</div>}</div>
}