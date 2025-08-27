/** Chunk was on web.js **/
/** chunk id: 675297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => O
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
let y = 600;

function O(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: O,
    shouldShowFullDescriptionButton: v = true,
    hideRoleTag: I = false,
    lineClamp: T = 1,
    cardWidth: S,
    cardHeight: A,
    thumbnailHeight: C,
    descriptionTextVariant: N = "text-sm/normal",
    showOpaqueBackground: R = false
  } = e, P = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]), w = (0, i.e7)([l.Z], () => {
    var e;
    return l.Z.getRole(n, null != (e = null == t ? true : t.role_id) ? e : b.lds)
  }), D = (0, a.U)(t, y), x = (0, h.C)(t), L = (0, d.SO)(P), {
    shouldHideGuildPurchaseEntryPoints: j
  } = (0, s.uP)(n), M = (0, h.k)(t);
  if (null == P || j) return null;
  let k = () => (0, g.e)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: O
    }),
    U = () => {
      _.h(P.id, t.id)
    },
    G = () => {
      (0, o.x)({
        listing: t
      })
    },
    B = () => {
      (0, u.JG)((0, f.ar)(n, t.id))
    },
    Z = (0, r.jsx)(m.m, {
      product: t,
      guildId: n,
      showEditProduct: L,
      showUnpublishProduct: false,
      showCopyLink: true,
      showTestDownload: false,
      showDeleteProduct: false,
      showReportProduct: true,
      onEditProduct: L ? U : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: G,
      onCopyProductLink: B,
      onTestDownload: () => {}
    });
  return (0, r.jsx)(p.Z, {
    imageUrl: D,
    name: t.name,
    description: t.description,
    formattedPrice: M,
    role: w,
    ctaComponent: (0, r.jsx)(E.Z, {
      guildId: n,
      guildProductListingId: t.id,
      sourceAnalyticsLocations: O
    }),
    productType: x,
    shouldShowFullDescriptionButton: v,
    onShowFullDescription: k,
    onTapCard: k,
    actionMenu: Z,
    showOpaqueBackground: R,
    hideRoleTag: I,
    lineClamp: T,
    cardWidth: S,
    cardHeight: A,
    thumbnailHeight: C,
    descriptionTextVariant: N,
    isDraft: !t.published
  }, t.id)
}