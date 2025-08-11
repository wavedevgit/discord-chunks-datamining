/** Chunk was on web.js **/
/** chunk id: 792165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk993365 = require("./993365.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435803 = require("./435803.js");

function b(e) {
  return e === h.p9.TIER_2 ? g.intl.string(g.t.jqO5Qk) : null == e ? g.intl.string(g.t.f2qjw8) : g.intl.string(g.t.SblICQ)
}

function y(e) {
  let {
    onClose: t,
    markAsDismissed: n
  } = e, y = (0, i.e7)([d.default], () => d.default.getCurrentUser()), O = b(null == y ? true : y.premiumType), v = f.ZP.canUseCustomCallSounds(y);

  function I() {
    l.Z.open(_.oAB.VOICE, m.GA), null == t || t(), null == n || n(p.L.PRIMARY)
  }
  return <u.Z isShown={true} type={u.Y.PREMIUM} className={E.upsellOuter} backgroundClassName={E.upsellInner}>{null != n ? <s.P3F className={E.close} onClick={() => null == n ? true : n(p.L.DISMISS)} aria-label={g.intl.string(g.t.cpT0Cg)}><s.Dio size={"xs"} color={"currentColor"} className={E.closeIcon} /></s.P3F> : null}{<div className={E.upsellTitle}>{<s.SrA size={"sm"} color={"currentColor"} className={E.nitroWheel} />}{<s.X6q variant={"heading-sm/bold"}>{g.intl.string(g.t.dTbAx8)}</s.X6q>}</div>}{<o.x variant={"text-sm/normal"}>{O}</o.x>}{v ? <s.zxk onClick={I} text={g.intl.string(g.t.RzWDqa)} fullWidth={true} /> : <c.Z textOptions={{
        textOverride: g.intl.string(g.t.pj0XBA)
      }} subscriptionTier={h.Si.TIER_2} premiumModalAnalyticsLocation={{
        section: _.jXE.SOUNDBOARD_SOUND_PICKER,
        object: _.qAy.BUTTON_CTA
      }} color={a.zx.Colors.GREEN} onSubscribeModalClose={() => null == n ? true : n(p.L.PRIMARY)} />}</u.Z>
}