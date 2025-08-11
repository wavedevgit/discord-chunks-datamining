/** Chunk was on 75708 **/
/** chunk id: 592889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk975298 = require("./975298.js"),
  Chunk600164 = require("./600164.js"),
  Chunk210887 = require("./210887.js"),
  Chunk301766 = require("./301766.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk169000 = require("./169000.js");

function T(e) {
  let {
    subscription: t,
    renewalMutations: n,
    transitionState: r,
    onClose: s,
    analyticsLocation: a
  } = e, l = (0, c.e7)([x.Z], () => x.Z.theme), {
    analyticsLocations: f
  } = (0, h.ZP)(g.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL), O = j.Z.get(t.planId);
  o()(null != O, "Missing subscriptionPlan");
  let T = (0, E.aS)(t.planId, false, false, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    I = (0, C.og)((0, C.T4)(T.amount, T.currency), O.interval, O.intervalCount);
  async function N() {
    await (0, p.dP)(t, t.planId, {
      amount: 0,
      currency: T.currency
    }, (0, E.UX)(t.items, T.currency, t.paymentSourceId), f, a), s()
  }
  return <m.Y0X transitionState={r} aria-label={v.intl.string(v.t["E9kB4+"])} parentComponent={"SubscriptionRenewalMutationNotice"}>{<m.xBx justify={b.Z.Justify.BETWEEN} separator={false}>{<m.vwX tag={m.RB0.H4}>{v.intl.string(v.t["E9kB4+"])}</m.vwX>}{<m.olH onClick={s} />}</m.xBx>}{<m.hzk className={S.modalBody}>{(0, _.Q0)(t.planId) ? v.intl.format(v.t.GMp54O, {
        downgradedPlan: E.ZP.getDisplayName(n.planId),
        existingRate: I
      }) : v.intl.format(v.t["vx/NZ2"], {
        existingPlan: E.ZP.getDisplayName(t.planId),
        downgradedPlan: E.ZP.getDisplayName(n.planId),
        existingRate: I
      })}</m.hzk>}{<m.mzw>{<m.zxk variant={"primary"} text={v.intl.string(v.t.frE8KC)} onClick={N} />}{<u.zx look={u.zx.Looks.LINK} color={(0, d.ap)(l) ? u.zx.Colors.PRIMARY : u.zx.Colors.WHITE} onClick={s}>{v.intl.string(v.t.oEAioK)}</u.zx>}</m.mzw>}</m.Y0X>
}

function I(e) {
  let {
    subscription: t,
    renewalMutations: n,
    className: s,
    analyticsLocation: l
  } = e, [o, c] = r.useState(false), d = (0, f.Z)(), u = t.currentPeriodEnd;
  return d.fractionalState === O.a$.FP_SUB_PAUSED && (u = d.endsAt.toDate()), <div className={a()(S.root, s)}>{<m.Mgn size={"custom"} width={20} height={20} color={"currentColor"} className={S.infoIcon} />}{<div className={S.text}>{v.intl.format(v.t.ar1cPj, {
        planName: t.hasExternalPlanChange ? (0, E.zL)(n) : E.ZP.getDisplayName(n.planId),
        date: u
      })}</div>}{t.isPurchasedExternally ? null : <m.eee onClick={e => {
        c(true), e.preventDefault()
      }} className={S.cancelLink}>{v.intl.string(v.t["ETE/oK"])}</m.eee>}{o ? <m.u_l renderModal={e => {
        let {
          transitionState: r
        } = e;
        return (0, i.jsx)(T, {
          subscription: t,
          renewalMutations: n,
          transitionState: r,
          onClose: () => c(false),
          analyticsLocation: l
        })
      }} onCloseRequest={() => c(false)} /> : null}</div>
}