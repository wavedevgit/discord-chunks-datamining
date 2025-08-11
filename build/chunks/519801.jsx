/** Chunk was on 86513 **/
/** chunk id: 519801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk131388 = require("./131388.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.js"),
  Chunk171246 = require("./171246.js"),
  Chunk689011 = require("./689011.js"),
  Chunk931905 = require("./931905.js"),
  Chunk563132 = require("./563132.js"),
  Chunk409813 = require("./409813.js"),
  Chunk586585 = require("./586585.js"),
  Chunk456251 = require("./456251.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk698708 = require("./698708.js"),
  Chunk750143 = require("./750143.js"),
  Chunk388032 = require("./388032.jsx");

function v(e) {
  var t, n;
  let v, j, {
      showBenefits: y,
      handleClose: C,
      onSubscriptionConfirmation: O
    } = e,
    {
      updatedSubscription: S,
      readySlideId: P,
      selectedSku: N,
      selectedStoreListing: k,
      application: _
    } = (0, d.JL)(),
    E = (0, l.Z)(g.i),
    {
      createMultipleConfettiAt: T
    } = r.useContext(o.h),
    w = null != (t = null == N ? true : N.name) ? t : "",
    Z = () => {
      C(), null == O || O()
    },
    I = P === m.h8.CONFIRM,
    A = (0, s.KW)(null != (n = null == N ? true : N.flags) ? n : 0),
    D = null != k && k.benefits.length > 0 ? x.intl.formatToPlainString(x.t["+IQQVF"], {
      benefitCount: k.benefits.length
    }) : null;
  return y ? E ? v = <u.h title={x.intl.format(x.t.ea6tZm, {
      tierName: w
    })} subtitle={null != k && k.benefits.length > 0 ? x.intl.formatToPlainString(x.t.HNepfn, {
      benefits: D
    }) : null} onConfirm={Z} confirmCta={x.intl.string(x.t.nlkyw8)} /> : (v = null != k && null != _ ? <c.Oc icon={k.thumbnail} storeListingBenefits={k.benefits} application={_} title={x.intl.format(x.t["Q+qktb"], {
      tier: w
    })} subtitle={x.intl.string(x.t.ECKxXV)} description={A ? x.intl.format(x.t.MAtQk5, {
      applicationName: null == _ ? true : _.name
    }) : x.intl.format(x.t.vHkMFx, {
      tier: w
    })} /> : <p.Z />, j = <f.Z onPrimary={Z} primaryCTA={f.g.CONTINUE} primaryText={x.intl.string(x.t["JtWl+f"])} />) : v = E ? <u.m tierName={w} onConfirm={Z} subscription={S} /> : <c.xe tierName={w} onConfirm={Z} subscription={S} />, r.useEffect(() => {
    a.Z.useReducedMotion && I && T(window.innerWidth / 2, window.innerHeight / 2)
  }, [T, I]), <i.Fragment>{<b.C3>{<h.Z />}{v}</b.C3>}{null != j && <b.O3>{j}</b.O3>}</i.Fragment>
}