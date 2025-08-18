/** Chunk was on 91173 **/
/** chunk id: 675297, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => C
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk166081 = require("./166081.js"),
  Chunk54797 = require("./54797.jsx"),
  Chunk674180 = require("./674180.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk572004 = require("./572004.js"),
  Chunk267101 = require("./267101.js"),
  Chunk863663 = require("./863663.js"),
  Chunk676651 = require("./676651.jsx"),
  Chunk623488 = require("./623488.jsx"),
  Chunk942833 = require("./942833.js"),
  Chunk391181 = require("./391181.jsx"),
  Chunk964793 = require("./964793.jsx"),
  Chunk226060 = require("./226060.jsx"),
  Chunk981631 = require("./981631.js");

function C(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: C,
    shouldShowFullDescriptionButton: v = true,
    hideRoleTag: O = false,
    lineClamp: y = 1,
    cardWidth: x,
    cardHeight: j,
    thumbnailHeight: I,
    descriptionTextVariant: S = "text-sm/normal",
    showOpaqueBackground: T = false
  } = e, P = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]), N = (0, i.e7)([s.Z], () => {
    var e;
    return s.Z.getRole(n, null != (e = null == t ? true : t.role_id) ? e : E.lds)
  }), A = (0, l.U)(t, 600), w = (0, _.C)(t), Z = (0, d.SO)(P), {
    shouldHideGuildPurchaseEntryPoints: R
  } = (0, o.uP)(n), L = (0, _.k)(t);
  if (null == P || R) return null;
  let D = () => (0, h.e)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: C
    }),
    M = (0, r.jsx)(g.m, {
      product: t,
      guildId: n,
      showEditProduct: Z,
      showUnpublishProduct: false,
      showCopyLink: true,
      showTestDownload: false,
      showDeleteProduct: false,
      showReportProduct: true,
      onEditProduct: Z ? () => {
        m.h(P.id, t.id)
      } : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: () => {
        (0, a.x)({
          listing: t
        })
      },
      onCopyProductLink: () => {
        (0, u.JG)((0, p.ar)(n, t.id))
      },
      onTestDownload: () => {}
    });
  return (0, r.jsx)(f.Z, {
    imageUrl: A,
    name: t.name,
    description: t.description,
    formattedPrice: L,
    role: N,
    ctaComponent: (0, r.jsx)(b.Z, {
      guildId: n,
      guildProductListingId: t.id,
      sourceAnalyticsLocations: C
    }),
    productType: w,
    shouldShowFullDescriptionButton: v,
    onShowFullDescription: D,
    onTapCard: D,
    actionMenu: M,
    showOpaqueBackground: T,
    hideRoleTag: O,
    lineClamp: y,
    cardWidth: x,
    cardHeight: j,
    thumbnailHeight: I,
    descriptionTextVariant: S,
    isDraft: !t.published
  }, t.id)
}