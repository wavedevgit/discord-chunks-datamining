/** Chunk was on web.js **/
/** chunk id: 206697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk436774 = require("./436774.js"),
  Chunk767714 = require("./767714.js"),
  Chunk74538 = require("./74538.js"),
  Chunk175006 = require("./175006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk491350 = require("./491350.js"),
  Chunk492764 = require("./492764.js"),
  Chunk235810 = require("./235810.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v() {
  return (0, Chunk175006.Z)() ? <div className={Chunk491350.emptyContainer}><div className={Chunk491350.emptyInner}>{<img src={Chunk492764} className={Chunk491350.image} alt={""} />}{<Chunk481060.X6q className={Chunk491350.header} variant={"heading-xl/semibold"} color={"text-default"}>{Chunk388032.intl.string(Chunk388032.t.erEf2t)}</Chunk481060.X6q>}{<Chunk793030.xv variant={"text-md/medium"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t.NaRCXV)}</Chunk793030.xv>}</div></div> : <div className={Chunk491350.emptyContainer}>{<div className={Chunk491350.emptyInner}>{<img src={Chunk235810} className={Chunk491350.image} alt={""} />}{<Chunk481060.X6q className={Chunk491350.header} variant={"heading-xl/semibold"} color={"text-default"}>{Chunk388032.intl.string(Chunk388032.t.w4DRbW)}</Chunk481060.X6q>}{<Chunk793030.xv variant={"text-md/medium"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t.F6u3Ex)}</Chunk793030.xv>}</div>}{<I />}</div>
}

function I() {
  let e = (0, Chunk74538.Px)(Chunk474936.p9.TIER_2),
    t = Chunk73800.useCallback(() => (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("34906").then(require.bind(require, 639565));
      return t => <e{...O({
        source: c.Z.FOR_LATER_POPOUT
      }, t)} />
    }), []),
    _ = Chunk388032.intl.format(Chunk388032.t.qXh3fn, {
      nitroTierName: module,
      onClick: exports
    });
  return <div className={Chunk491350.upsellContainer}>{<Chunk657707.SrA size={"md"} color={Chunk436774.JX.PREMIUM_TIER_2} />}{<Chunk793030.xv variant={"text-xs/medium"} color={"header-primary"} className={Chunk491350.upsellText}>{Chunk175006}</Chunk793030.xv>}{<Chunk767714.Z className={Chunk491350.upsellButton} size={Chunk755721.Ph.TINY} shinyButtonClassName={Chunk491350.upsellButton} subscriptionTier={Chunk474936.Si.TIER_2} premiumModalAnalyticsLocation={{
        section: Chunk981631.jXE.FOR_LATER_POPOUT_UPSELL
      }} />}</div>
}