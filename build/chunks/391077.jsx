/** Chunk was on 75708 **/
/** chunk id: 391077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk927359 = require("./927359.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk846706 = require("./846706.js");

function m(e) {
  let {
    showChargingUpState: t,
    rowValueText: n,
    endsAt: r,
    fractionalState: l,
    activationDate: o
  } = e, m = t ? d.intl.string(d.t["hT6i//"]) : d.intl.string(d.t["3G0CTE"]), p = t ? true === o ? null : d.intl.format(d.t["0Vwb/v"], {
    activateDate: o
  }) : l === c.a$.FP_SUB_PAUSED ? d.intl.format(d.t.MMvaIC, {
    resumeDate: r.toDate()
  }) : null, g = s()({
    [u.fractionalUnactivatedPill]: t,
    [u.fractionalTimeRemainingPill]: !t
  }), h = s()({
    [u.fractionalUnactivatedPillText]: t,
    [u.fractionalTimeRemainingPillText]: !t
  }), f = s()({
    [u.fractionalTimeRemainingRowHeader]: !t
  });
  return <div className={u.fractionalTimeRemainingRow}>{<div className={u.fractionalTimeRemainingRowDetails}>{<a.X6q variant={"heading-md/semibold"} className={f}>{m}</a.X6q>}{null !== p && <a.Text variant={"text-sm/normal"}>{p}</a.Text>}</div>}{<div className={u.fractionalTimeRemainingPillWrapper}><div className={g}><a.Text variant={"text-sm/semibold"} className={h}>{n}</a.Text></div></div>}</div>
}
let p = function(e) {
  let {
    fractionalPremiumInfo: t,
    className: n,
    activationDate: r
  } = e, c = (0, o.jp)(t), p = c.length > 0, g = (0, l.ZP)(t.endsAt, l.aj.SHORT_TIME), h = p ? c : g;
  return <div><div className={s()(n, u.fractionalPremiumAccountCredit)}>{<div className={u.accountCreditsContainer}><div className={u.accountCreditRow}>{<div className={u.iconBackgroundFractional}><a.SrA size={"md"} color={"white"} className={u.iconFractional} /></div>}{<div className={u.rowDetails}><a.X6q variant={"heading-md/semibold"}>{d.intl.string(d.t.DFMPWV)}</a.X6q></div>}{<a.Text className={u.rowCreditCount} variant={"text-md/semibold"}>{c.length > 0 ? c : d.intl.string(d.t["B66Z+f"])}</a.Text>}</div></div>}{<m showChargingUpState={p} rowValueText={h} endsAt={t.endsAt} fractionalState={t.fractionalState} activationDate={r} />}</div></div>
}