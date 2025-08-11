/** Chunk was on 75708 **/
/** chunk id: 291334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk767714 = require("./767714.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk451740 = require("./451740.js"),
  Chunk699623 = require("./699623.js"),
  Chunk820350 = require("./820350.js");

function _(e) {
  let {
    user: t,
    showOverlay: n,
    children: _
  } = e, j = (0, l.ZP)(), {
    analyticsLocations: E
  } = (0, c.ZP)(o.Z.PREMIUM_UPSELL_OVERLAY);
  return (r.useEffect(() => {
    n && u.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
      location_stack: E,
      type: g.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
    })
  }, [n, E]), n) ? <div className={f.upsellOverlayContainer}>{<div>{_}</div>}{<div className={f.upsellOverlay}>{<img className={f.upsellImage} alt={h.intl.string(h.t.LHFZQ0)} src={function(e) {
          switch (e) {
            case p.BRd.DARK:
              return b;
            case p.BRd.LIGHT:
              return x
          }
        }(j)} />}{<div className={f.upsellTextContainer}>{<a.Text variant={"text-lg/semibold"} color={"always-white"}>{h.intl.string(h.t.dMaDFR)}</a.Text>}{<a.Text variant={"text-sm/normal"} color={"always-white"}>{h.intl.string(h.t.F7sgFB)}</a.Text>}</div>}{<d.Z size={s.zx.Sizes.LARGE} color={s.zx.Colors.GREEN} textOptions={{
          textOverride: m.ZP.isPremium(t) ? h.intl.string(h.t.AfRWIy) : h.intl.string(h.t.nkdUys)
        }} subscriptionTier={g.Si.TIER_2} />}</div>}</div> : _
}