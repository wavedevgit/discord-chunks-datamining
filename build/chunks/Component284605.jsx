/** Chunk was on web.js **/
/** chunk id: 284605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => S
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk732955 = require("./732955.js"),
  Chunk492749 = require("./492749.js"),
  Chunk827186 = require("./827186.jsx"),
  Chunk465932 = require("./465932.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk957565 = require("./957565.js"),
  Chunk250627 = require("./250627.js"),
  Chunk253141 = require("./253141.js"),
  Chunk579970 = require("./579970.jsx"),
  Chunk500770 = require("./500770.jsx"),
  Chunk571654 = require("./571654.js"),
  Chunk482711 = require("./482711.jsx"),
  Chunk897518 = require("./897518.js"),
  Chunk10979 = require("./10979.jsx"),
  Chunk652215 = require("./652215.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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
let v = 600;

function S(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: O,
    shouldShowFullDescriptionButton: S = true,
    hideRoleTag: I = false,
    lineClamp: T = 1,
    cardWidth: C,
    cardHeight: N,
    thumbnailHeight: R,
    descriptionTextVariant: w = "text-sm/normal",
    showOpaqueBackground: P = false
  } = e, D = (0, i.bG)([u.A], () => u.A.getGuild(n), [n]), x = (0, i.bG)([c.A], () => {
    var e;
    return c.A.getRole(n, null != (e = null == t ? true : t.role_id) ? e : y.dJq)
  }), L = (0, s.R)(t, v), j = (0, m.z)(t), M = (0, f.BB)(D), {
    shouldHideGuildPurchaseEntryPoints: k
  } = (0, l.MH)(n), U = (0, m.X)(t), G = (0, E.A)({
    guildId: n,
    guildProductListingId: t.id,
    sourceAnalyticsLocations: O
  });
  if (null == D || k) return null;
  let V = () => (0, b.M)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: O
    }),
    F = () => {
      _.q(D.id, t.id)
    },
    B = () => {
      (0, o.F)({
        listing: t
      })
    },
    H = () => {
      (0, d.C)((0, p.KW)(n, t.id))
    },
    Y = (0, r.jsx)(g.i, {
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
      onCopyProductLink: H,
      onTestDownload: () => {}
    });
  return (0, r.jsx)(h.A, {
    imageUrl: L,
    name: t.name,
    description: t.description,
    formattedPrice: U,
    role: x,
    ctaComponent: (0, r.jsx)(a.$nd, A({}, G)),
    productType: j,
    shouldShowFullDescriptionButton: S,
    onShowFullDescription: V,
    onTapCard: V,
    actionMenu: Y,
    showOpaqueBackground: P,
    hideRoleTag: I,
    lineClamp: T,
    cardWidth: C,
    cardHeight: N,
    thumbnailHeight: R,
    descriptionTextVariant: w,
    isDraft: !t.published
  }, t.id)
}