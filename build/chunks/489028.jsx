/** Chunk was on 22988 **/
/** chunk id: 489028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk223892 = require("./223892.js"),
  Chunk203498 = require("./203498.js"),
  Chunk641806 = require("./641806.js"),
  Chunk690221 = require("./690221.js"),
  Chunk30624 = require("./30624.js"),
  Chunk577275 = require("./577275.js"),
  Chunk601964 = require("./601964.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk584825 = require("./584825.js"),
  Chunk723047 = require("./723047.js"),
  Chunk416867 = require("./416867.jsx"),
  Chunk903773 = require("./903773.js"),
  Chunk215124 = require("./215124.jsx"),
  Chunk326578 = require("./326578.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk738309 = require("./738309.js");

function P(e) {
  let {
    onCreateTeamClick: t,
    isGuildOwner: n
  } = e;
  return <div className={T.selectTeamContainer}><a.zx disabled={!n} onClick={t} className={T.enableTicketingButton} fullWidth={true}>{S.intl.string(S.t["5k6FfX"])}</a.zx></div>
}

function w(e) {
  let {
    guild: t,
    eligibleTeams: n,
    isGuildOwner: l
  } = e, [o, c] = i.useState(), {
    enableGuildMonetizationForTeam: u,
    submitting: m,
    error: g
  } = (0, d.Z)(), {
    fetchSubscriptionsSettings: p
  } = (0, j.JH)(), h = (0, v.mY)(), f = i.useMemo(() => n.map(e => ({
    label: e.name,
    value: e.id
  })), [n]), b = async () => {
    await u(t, o, I.wW.GUILD_ROLE_SUBSCRIPTIONS) && (p(t.id), (0, _.B)({
      Icon: C.Z,
      title: S.intl.string(S.t["AP/2qa"]),
      body: S.intl.string(S.t.kHMgaG)
    }))
  };
  return <r.Fragment>{<div className={T.selectTeamContainer}>{<s.q4e className={T.teamSelect} options={f} placeholder={S.intl.string(S.t.QXf93N)} value={o} isDisabled={0 === f.length || h || !l} onChange={e => c(e)} aria-label={S.intl.string(S.t.QXf93N)} />}{<a.zx onClick={b} className={T.enableTicketingButton} submitting={m} disabled={null == o || h || !l}>{S.intl.string(S.t["9HU3ZW"])}</a.zx>}</div>}{null != g && <s.Text className={T.error} variant={"text-sm/normal"}>{g.getAnyErrorMessage()}</s.Text>}</r.Fragment>
}
let R = e => {
  let {
    guild: t
  } = e, n = (0, l.e7)([f.default], () => f.default.getCurrentUser()), a = (0, h.eM)(t, n), d = (0, c.Ob)(t), j = (0, l.e7)([b.Z], () => b.Z.isFocused()), {
    teams: v,
    loading: _
  } = (0, p.Z)({
    refreshOnDepChange: j
  }), C = i.useMemo(() => v.filter(e => {
    var t;
    return e.payout_account_status !== E.C.BLOCKED && (0, g.Z)(null != (t = null == n ? true : n.id) ? t : N.lds, e)
  }), [v, n]), I = C.length > 0, R = i.useCallback(async () => {
    x.default.track(N.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
      is_onboarding_v2: d,
      has_eligible_team: I,
      guild_id: t.id,
      is_owner: a
    });
    let e = await (0, u.$)(N.E07.DEVELOPER_PORTAL_TEAMS);
    (0, o.Z)(e)
  }, [t, a, d, I]), Z = i.useCallback(e => a ? <m.Z onClick={R}>{e}</m.Z> : e, [R, a]);
  return _ ? <s.$jN /> : <r.Fragment>{!a && <O.Z className={T.nonOwnerNotice}>{S.intl.string(S.t.t56qWF)}</O.Z>}{<s.hjN title={S.intl.string(S.t.sYLCY2)} disabled={!a}>{<s.R94 type={s.R94.Types.DESCRIPTION} className={T.description} disabled={!a}>{S.intl.format(S.t["5mfqpa"], {
          onCreateTeamHook: Z
        })}</s.R94>}{I ? <w guild={t} eligibleTeams={C} isGuildOwner={a} /> : <P onCreateTeamClick={R} isGuildOwner={a} />}</s.hjN>}{<s.hjN title={S.intl.string(S.t["0n7R2d"])} className={T.selfDemonetization}><y.Z guildId={t.id} allPeriods={[]} /></s.hjN>}</r.Fragment>
}