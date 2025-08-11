/** Chunk was on web.js **/
/** chunk id: 151189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk165583 = require("./165583.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45521 = require("./45521.js"),
  Chunk251159 = require("./251159.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk931363 = require("./931363.js"),
  Chunk867250 = require("./867250.js");
let v = () => (0, Chunk45521.f)(false),
  I = e => {
    var t, n, o;
    let {
      onLearnMore: h
    } = e, {
      analyticsLocations: I
    } = (0, c.ZP)(l.Z.PREMIUM_UPSELL);
    i.useEffect(() => {
      _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
        location_section: g.jXE.STICKER_PICKER_UPSELL,
        type: E.cd.STICKER_PICKER_UPSELL,
        location_stack: I
      })
    }, [I]);
    let T = (0, d.N)(),
      S = (0, u.Ng)(),
      A = (null == T || null == (t = T.subscription_trial) ? true : t.sku_id) === E.Si.TIER_0,
      N = null != T || null != S;
    return <div className={a()(y.upsellWrapper, {
        [y.unifyTrialUpsell]: N
      })}>{N ? <f.ZP trialOffer={T} discountOffer={S} onClose={v} type={E.cd.STICKER_PICKER_UPSELL} subscriptionTier={null != (o = null == T || null == (n = T.subscription_trial) ? true : n.sku_id) ? o : E.Si.TIER_2}>{A ? b.intl.format(b.t.MAGag4, {
          planName: (0, p.aq)(E.Xh.PREMIUM_MONTH_TIER_0),
          onClick: h
        }) : b.intl.format(b.t.jt7JX1, {
          onClick: h
        })}</f.ZP> : <r.Fragment>{<img className={y.upsellImage} src={O} alt={b.intl.string(b.t.do7AoK)} />}{<s.Text className={y.upsellTitle} color={"header-primary"} variant={"text-lg/semibold"}>{b.intl.string(b.t.jJG1pq)}</s.Text>}{<s.Text className={y.upsellDescription} variant={"text-md/normal"}>{b.intl.format(b.t.jt7JX1, {
            onClick: h
          })}</s.Text>}</r.Fragment>}{!N && <m.Z analyticsSection={g.jXE.EXPRESSION_PICKER} buttonText={N ? A ? b.intl.string(b.t.hz78hI) : b.intl.string(b.t["Gd/XHB"]) : true} />}{<s.P3F className={y.upsellClose} onClick={v}><s.Dio size={"md"} color={"currentColor"} /></s.P3F>}</div>
  }