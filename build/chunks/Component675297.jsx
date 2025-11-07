/** Chunk was on web.js **/
/** chunk id: 675297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => S
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk159691 = require("./159691.js"),
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
  Chunk843880 = require("./843880.js"),
  Chunk964793 = require("./964793.jsx"),
  Chunk981631 = require("./981631.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
let I = 600;

function S(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: O,
    shouldShowFullDescriptionButton: S = true,
    hideRoleTag: T = false,
    lineClamp: A = 1,
    cardWidth: C,
    cardHeight: N,
    thumbnailHeight: R,
    descriptionTextVariant: P = "text-sm/normal",
    showOpaqueBackground: w = false
  } = e, D = (0, i.e7)([u.Z], () => u.Z.getGuild(n), [n]), x = (0, i.e7)([c.Z], () => {
    var e;
    return c.Z.getRole(n, null != (e = null == t ? true : t.role_id) ? e : y.lds)
  }), L = (0, o.U)(t, I), M = (0, m.C)(t), j = (0, f.SO)(D), {
    shouldHideGuildPurchaseEntryPoints: k
  } = (0, l.uP)(n), U = (0, m.k)(t), G = (0, E.Z)({
    guildId: n,
    guildProductListingId: t.id,
    sourceAnalyticsLocations: O
  });
  if (null == D || k) return null;
  let B = () => (0, b.e)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: O
    }),
    Z = () => {
      p.h(D.id, t.id)
    },
    F = () => {
      (0, s.x)({
        listing: t
      })
    },
    V = () => {
      (0, d.JG)((0, _.ar)(n, t.id))
    },
    H = (0, r.jsx)(g.m, {
      product: t,
      guildId: n,
      showEditProduct: j,
      showUnpublishProduct: false,
      showCopyLink: true,
      showTestDownload: false,
      showDeleteProduct: false,
      showReportProduct: true,
      onEditProduct: j ? Z : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: F,
      onCopyProductLink: V,
      onTestDownload: () => {}
    });
  return (0, r.jsx)(h.Z, {
    imageUrl: L,
    name: t.name,
    description: t.description,
    formattedPrice: U,
    role: x,
    ctaComponent: (0, r.jsx)(a.zxk, v({}, G)),
    productType: M,
    shouldShowFullDescriptionButton: S,
    onShowFullDescription: B,
    onTapCard: B,
    actionMenu: H,
    showOpaqueBackground: w,
    hideRoleTag: T,
    lineClamp: A,
    cardWidth: C,
    cardHeight: N,
    thumbnailHeight: R,
    descriptionTextVariant: P,
    isDraft: !t.published
  }, t.id)
}