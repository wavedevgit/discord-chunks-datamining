/** Chunk was on 38062 **/
/** chunk id: 546604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk213609 = require("./213609.js"),
  Chunk240657 = require("./240657.jsx"),
  Chunk809086 = require("./809086.js"),
  Chunk430824 = require("./430824.js"),
  Chunk240864 = require("./240864.js"),
  Chunk942833 = require("./942833.js"),
  Chunk409110 = require("./409110.jsx"),
  Chunk226060 = require("./226060.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk486893 = require("./486893.js");

function b(e) {
  var t, n;
  let {
    transitionState: a,
    guildProductListingId: b,
    analyticsLocation: v,
    guildId: Z,
    onClose: N
  } = e, C = (0, l.e7)([f.Z], () => f.Z.getGuildProduct(b));
  i()(null != C, "guildProductListing cannot be null"), (0, d.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
    properties: {
      guild_product_listing_id: b,
      has_entitlement: true === C.has_entitlement,
      location: v
    }
  });
  let I = null != (t = (0, h.C)(C)) ? t : "",
    y = (0, h.k)(C),
    O = (0, l.e7)([x.Z], () => x.Z.getGuild(Z));
  return <o.Y0X className={g.modal} size={o.CgR.MEDIUM} transitionState={a} aria-label={C.name} parentComponent={"GuildProductInfoModal"}>{<o.xBx separator={false}>{<m.e height={267} listing={C} className={g.headerImage} alt={""} />}{<o.olH className={g.closeButton} onClick={N} withCircleBackground={true} />}</o.xBx>}{<o.hzk><div className={g.body}>{<o.X6q variant={"heading-xl/medium"} color={"header-primary"}>{C.name}</o.X6q>}{<o.LZC size={4} />}{<o.Text variant={"text-sm/normal"} color={"header-secondary"}>{p.intl.format(p.t.xImSen, {
            productType: I,
            personName: null != (n = null == O ? true : O.name) ? n : ""
          })}</o.Text>}{<o.LZC size={16} />}{<j.Z listing={C} />}{<o.LZC size={16} />}{<div className={g.seperator} />}{<o.LZC size={16} />}{<o.X6q variant={"heading-lg/medium"} color={"header-primary"}>{p.intl.string(p.t.TNnDJi)}</o.X6q>}{<o.LZC size={12} />}{<u.Z className={g.description} variant={"text-md/normal"} color={"text-muted"} text={C.description} />}</div></o.hzk>}{<o.mzw className={g.footer}>{<_.Z guildId={Z} guildProductListingId={b} sourceAnalyticsLocations={c.Z.GUILD_PRODUCT_INFO_MODAL} />}{<o.Text tag={"div"} variant={"heading-xl/semibold"} color={"header-primary"}>{y}</o.Text>}</o.mzw>}</o.Y0X>
}