/** Chunk was on 76030 **/
n.d(t, {
  H: () => v
}), n(266796);
var r = n(200651);
n(192379);
var i = n(399606),
  a = n(166081),
  o = n(54797),
  l = n(674180),
  s = n(430824),
  c = n(572004),
  d = n(267101),
  u = n(863663),
  p = n(676651),
  m = n(623488),
  f = n(942833),
  h = n(391181),
  g = n(964793),
  _ = n(226060),
  b = n(981631);

function v(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: v,
    shouldShowFullDescriptionButton: y = !0,
    hideRoleTag: x = !1,
    lineClamp: E = 1,
    cardWidth: O,
    cardHeight: j,
    thumbnailHeight: N,
    descriptionTextVariant: C = "text-sm/normal",
    showOpaqueBackground: I = !1
  } = e, S = (0, i.e7)([s.Z], () => s.Z.getGuild(n), [n]), T = (0, i.e7)([s.Z], () => {
    var e;
    return s.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : b.lds)
  }), P = (0, a.U)(t, 600), A = (0, f.C)(t), w = (0, d.SO)(S), {
    shouldHideGuildPurchaseEntryPoints: Z
  } = (0, l.uP)(n), k = (0, f.k)(t);
  if (null == S || Z) return null;
  let R = () => (0, g.e)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: v
    }),
    D = (0, r.jsx)(h.m, {
      product: t,
      guildId: n,
      showEditProduct: w,
      showUnpublishProduct: !1,
      showCopyLink: !0,
      showTestDownload: !1,
      showDeleteProduct: !1,
      showReportProduct: !0,
      onEditProduct: w ? () => {
        p.h(S.id, t.id)
      } : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: () => {
        (0, o.x)({
          listing: t
        })
      },
      onCopyProductLink: () => {
        (0, c.JG)((0, u.ar)(n, t.id))
      },
      onTestDownload: () => {}
    });
  return (0, r.jsx)(m.Z, {
    imageUrl: P,
    name: t.name,
    description: t.description,
    formattedPrice: k,
    role: T,
    ctaComponent: (0, r.jsx)(_.Z, {
      guildId: n,
      guildProductListingId: t.id,
      sourceAnalyticsLocations: v
    }),
    productType: A,
    shouldShowFullDescriptionButton: y,
    onShowFullDescription: R,
    onTapCard: R,
    actionMenu: D,
    showOpaqueBackground: I,
    hideRoleTag: x,
    lineClamp: E,
    cardWidth: O,
    cardHeight: j,
    thumbnailHeight: N,
    descriptionTextVariant: C,
    isDraft: !t.published
  }, t.id)
}