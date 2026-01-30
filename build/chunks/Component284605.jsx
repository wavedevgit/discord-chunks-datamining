/** Chunk was on 64935 **/
/** chunk id: 284605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => v
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

function v(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: v,
    shouldShowFullDescriptionButton: x = true,
    hideRoleTag: O = false,
    lineClamp: E = 1,
    cardWidth: j,
    cardHeight: C,
    thumbnailHeight: I,
    descriptionTextVariant: S = "text-sm/normal",
    showOpaqueBackground: T = false
  } = e, N = (0, i.bG)([u.A], () => u.A.getGuild(n), [n]), P = (0, i.bG)([c.A], () => {
    var e;
    return c.A.getRole(n, null != (e = null == t ? true : t.role_id) ? e : y.dJq)
  }), w = (0, a.R)(t, 600), R = (0, _.z)(t), D = (0, p.BB)(N), {
    shouldHideGuildPurchaseEntryPoints: L
  } = (0, o.MH)(n), M = (0, _.X)(t), k = (0, b.A)({
    guildId: n,
    guildProductListingId: t.id,
    sourceAnalyticsLocations: v
  });
  if (null == N || L) return null;
  let U = () => (0, A.M)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: v
    }),
    G = (0, r.jsx)(h.i, {
      product: t,
      guildId: n,
      showEditProduct: D,
      showUnpublishProduct: false,
      showCopyLink: true,
      showTestDownload: false,
      showDeleteProduct: false,
      showReportProduct: true,
      onEditProduct: D ? () => {
        f.q(N.id, t.id)
      } : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: () => {
        (0, s.F)({
          listing: t
        })
      },
      onCopyProductLink: () => {
        (0, d.C)((0, m.KW)(n, t.id))
      },
      onTestDownload: () => {}
    });
  return (0, r.jsx)(g.A, {
    imageUrl: w,
    name: t.name,
    description: t.description,
    formattedPrice: M,
    role: P,
    ctaComponent: (0, r.jsx)(l.$nd, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, k)),
    productType: R,
    shouldShowFullDescriptionButton: x,
    onShowFullDescription: U,
    onTapCard: U,
    actionMenu: G,
    showOpaqueBackground: T,
    hideRoleTag: O,
    lineClamp: E,
    cardWidth: j,
    cardHeight: C,
    thumbnailHeight: I,
    descriptionTextVariant: S,
    isDraft: !t.published
  }, t.id)
}