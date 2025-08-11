/** Chunk was on 22988 **/
/** chunk id: 500395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk787051 = require("./787051.js"),
  Chunk696936 = require("./696936.js"),
  Chunk539290 = require("./539290.js"),
  Chunk975464 = require("./975464.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk900388 = require("./900388.js"),
  Chunk270395 = require("./270395.js");

function p(e) {
  let {
    config: t
  } = e, {
    noticeText: n,
    ctaLabel: i,
    ctaClickable: a,
    onCtaClicked: s
  } = t;
  return <div className={m.__invalid_ctaContainer}>{<img className={m.__invalid_heroBanner} src={g} alt={u.intl.string(u.t.Af4klJ)} />}{<div className={m.__invalid_ctaContent}>{<l.X6q variant={"heading-xl/semibold"} color={"header-primary"}>{u.intl.string(u.t.PqYfh4)}</l.X6q>}{<l.LZC size={12} />}{<l.Text variant={"text-md/normal"} color={"header-secondary"}>{u.intl.string(u.t["41wkMT"])}</l.Text>}{<l.LZC size={24} />}{<c.Z className={m.waitlist} color={o.W.BROWN} buttonPosition={c.E.RIGHT} notice={n} ctaLabel={i} ctaDisabled={!a} ctaClassName={m.waitlistCtaButton} onClick={s} />}</div>}</div>
}

function h(e) {
  let {
    guild: t,
    config: n
  } = e, {
    isLoading: o,
    error: c,
    creatorMonetizationOnboardingMarketing: u
  } = (0, s.Z)(t.id);
  return ((0, a.Z)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
    properties: {
      guild_id: t.id
    }
  }), o) ? <l.$jN /> : <div className={m.__invalid_container}>{<p config={n} />}{<d.C onboardingMarketing={u} onboardingMarketingError={c} />}</div>
}