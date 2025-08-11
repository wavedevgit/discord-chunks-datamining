/** Chunk was on 6284 **/
/** chunk id: 257514, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk313201 = require("./313201.js"),
  Chunk740492 = require("./740492.js"),
  Chunk626135 = require("./626135.js"),
  Chunk171246 = require("./171246.js"),
  Chunk225715 = require("./225715.jsx"),
  Chunk635840 = require("./635840.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk650764 = require("./650764.js");
let h = e => {
  let [t, i] = a.useState(false), [n, s] = a.useState(null);
  return {
    cancelSubscription: async t => {
      try {
        return i(true), await r.EO(t, e), true
      } catch (e) {
        s(e)
      } finally {
        i(false)
      }
    },
    error: n,
    submitting: t
  }
};

function T(e) {
  let {
    transitionState: t,
    application: i,
    storeListing: r,
    subscription: T,
    guild: A,
    onClose: E
  } = e, p = (0, c.Dt)(), {
    analyticsLocations: O
  } = (0, d.ZP)(o.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: g,
    error: j,
    submitting: P
  } = h(O), [L, f] = a.useState(0), R = async () => {
    await g(T.id) && (_.ZP.disableApplicationSubscriptionCancellationSurvey ? E() : f(1))
  };
  a.useEffect(() => {
    C.default.track(x.rMx.CANCELLATION_FLOW_STARTED, {
      location_stack: O
    })
  }, [O]);
  let b = (0, u.KW)(r.skuFlags);
  return <l.Y0X transitionState={t} className={S.modal} aria-labelledby={p} parentComponent={"CancelSubscriptionModal"}><l.MyZ activeSlide={L} width={440}>{<l.Mi4 id={0}><div className={S.slideContainer}>{null != j ? <l.kzN>{j.message}</l.kzN> : null}{<l.hzk className={S.content}>{<l.LZC size={16} />}{<N.q$>{<N.CW application={i} />}{<N.r0 id={p}>{I.intl.format(I.t.irka9v, {
                  tier: r.summary
                })}</N.r0>}{<N.s$ />}{<N.K9 title={I.intl.string(I.t.LZunzc)} description={b ? I.intl.formatToPlainString(I.t["+HdfBw"], {
                  timestamp: T.currentPeriodEnd.getTime()
                }) : I.intl.formatToPlainString(I.t.qxiBnZ, {
                  timestamp: T.currentPeriodEnd.getTime(),
                  guildName: null == A ? true : A.name
                })} />}{<N.G9 applicationId={r.applicationId} storeListingBenefits={r.benefits} />}</N.q$>}</l.hzk>}{<l.mzw className={S.footer}>{<l.zxk variant={"critical-primary"} text={I.intl.string(I.t.KSqyfX)} onClick={R} loading={P} />}{<s.zx look={s.zx.Looks.LINK} color={s.zx.Colors.PRIMARY} className={S.goBackButton} onClick={E}>{I.intl.string(I.t["05jDxs"])}</s.zx>}</l.mzw>}</div></l.Mi4>}{<l.Mi4 id={1}><div className={S.slideContainer}><m.Z application={i} subscriptionId={T.id} onClose={E} /></div></l.Mi4>}</l.MyZ></l.Y0X>
}