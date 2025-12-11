/** Chunk was on web.js **/
/** chunk id: 675297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => I
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
let S = 600;

function I(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: O,
    shouldShowFullDescriptionButton: I = true,
    hideRoleTag: T = false,
    lineClamp: C = 1,
    cardWidth: A,
    cardHeight: N,
    thumbnailHeight: P,
    descriptionTextVariant: R = "text-sm/normal",
    showOpaqueBackground: w = false
  } = e, D = (0, i.e7)([u.Z], () => u.Z.getGuild(n), [n]), x = (0, i.e7)([c.Z], () => {
    var e;
    return c.Z.getRole(n, null != (e = null == t ? true : t.role_id) ? e : y.lds)
  }), L = (0, o.U)(t, S), j = (0, h.C)(t), M = (0, f.SO)(D), {
    shouldHideGuildPurchaseEntryPoints: k
  } = (0, l.uP)(n), U = (0, h.k)(t), G = (0, E.Z)({
    guildId: n,
    guildProductListingId: t.id,
    sourceAnalyticsLocations: O
  });
  if (null == D || k) return null;
  let Z = () => (0, b.e)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: O
    }),
    F = () => {
      _.h(D.id, t.id)
    },
    B = () => {
      (0, s.x)({
        listing: t
      })
    },
    V = () => {
      (0, d.JG)((0, p.ar)(n, t.id))
    },
    H = (0, r.jsx)(g.m, {
      product: t,
      guildId: n,
      showEditProduct: M,
      showUnpublishProduct: false,
      showCopyLink: true,
      showTestDownload: false,
      showDeleteProduct: false,
      showReportProduct: true,
      onEditProduct: M ? F : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: B,
      onCopyProductLink: V,
      onTestDownload: () => {}
    });
  return (0, r.jsx)(m.Z, {
    imageUrl: L,
    name: t.name,
    description: t.description,
    formattedPrice: U,
    role: x,
    ctaComponent: (0, r.jsx)(a.zxk, v({}, G)),
    productType: j,
    shouldShowFullDescriptionButton: I,
    onShowFullDescription: Z,
    onTapCard: Z,
    actionMenu: H,
    showOpaqueBackground: w,
    hideRoleTag: T,
    lineClamp: C,
    cardWidth: A,
    cardHeight: N,
    thumbnailHeight: P,
    descriptionTextVariant: R,
    isDraft: !t.published
  }, t.id)
}