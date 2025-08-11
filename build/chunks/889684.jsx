/** Chunk was on 9766 **/
/** chunk id: 889684, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk354509 = require("./354509.js");
let h = e => {
  let {
    transitionState: t,
    onClose: a
  } = e;
  return i.useEffect(() => {
    r.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
      type: d.cd.EMOJI_AUTOCOMPLETE_MODAL
    })
  }, []), <s.Y0X transitionState={t} size={s.CgR.SMALL} aria-label={""} parentComponent={"ChannelAutocompleteEmojiUpsellModal"}>{<s.hzk className={m.content}>{<div role={"image"} className={m.image} />}{<s.X6q variant={"heading-xl/semibold"} className={m.header}>{p.intl.string(p.t.Uq1zJS)}</s.X6q>}{<s.Text variant={"text-md/normal"}>{p.intl.format(p.t.xPaO3t, {
          onLearnMore: () => {
            a(), o.Z.open(c.oAB.PREMIUM)
          }
        })}</s.Text>}</s.hzk>}{<s.mzw><l.Z onClick={a} textOptions={{
          textOverride: p.intl.string(p.t.pj0XBA)
        }} subscriptionTier={d.Si.TIER_2} premiumModalAnalyticsLocation={{
          page: c.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL
        }} /></s.mzw>}{<s.olH className={m.closeButton} onClick={a} />}</s.Y0X>
}