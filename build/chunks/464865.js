/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  V: () => h
}), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(497321),
  o = n(246946),
  c = n(63063),
  A = n(621319),
  d = n(44550),
  u = n(586382),
  g = n(859481),
  f = n(981631),
  m = n(388032),
  p = n(483057);

function h(e) {
  let {
    guild: t
  } = e, n = (0, s.e7)([o.Z], () => o.Z.hideInstantInvites), {
    vanityURLCode: h,
    vanityURLUses: C,
    originalVanityURLCode: b,
    errorDetails: v,
    fetched: x
  } = (0, s.cj)([d.Z], () => ({
    vanityURLCode: d.Z.vanityURLCode,
    vanityURLUses: d.Z.vanityURLUses,
    originalVanityURLCode: d.Z.originalVanityURLCode,
    errorDetails: d.Z.errorDetails,
    fetched: d.Z.fetchedVanityURL
  })), N = null == t ? void 0 : t.id;
  return (i.useEffect(() => {
    null == N || x || (0, A.U5)(N)
  }, [x, N]), null == t) ? null : n ? (0, r.jsx)(l.Z, {}) : (0, r.jsxs)(a.hjN, {
    children: [(0, r.jsxs)(a.vwX, {
      className: p.title,
      children: [m.NW.string(m.t["5XZKy8"]), (0, r.jsx)(u.xl, {
        guild: t
      })]
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: p.description,
      children: m.NW.format(m.t.koklFB, {
        helpCenterArticle: c.Z.getArticleURL(f.BhN.GUILD_VANITY_URL)
      })
    }), (0, r.jsx)(g.z, {
      guild: t,
      vanityURLCode: h,
      vanityURLUses: C,
      originalVanityURLCode: b,
      errorDetails: v
    })]
  })
}