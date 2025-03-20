/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(399606),
  a = n(481060),
  l = n(279542),
  o = n(496675),
  A = n(140031),
  c = n(981631),
  d = n(388032),
  u = n(542252);

function g(e) {
  let {
    guild: t
  } = e, n = i.useId(), g = (0, s.e7)([o.Z], () => null != t && o.Z.can(c.Plq.MANAGE_GUILD, t), [t]), f = t.hasFeature(c.oNc.COMMUNITY), [m, p] = i.useState(t.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), h = i.useCallback(async e => {
    p(e), await (0, l.fp)(t, e)
  }, [t]);
  return f ? null : (0, r.jsxs)("div", {
    className: u.bannerContainer,
    children: [(0, r.jsx)(A.Z, {
      width: 64,
      height: 64
    }), (0, r.jsxs)("div", {
      className: u.headingContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: d.NW.string(d.t.jDarm5)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: d.NW.string(d.t["/ee7yM"])
      })]
    }), (0, r.jsx)("div", {
      className: u.buttonContainer,
      children: (0, r.jsx)(a.rsf, {
        id: n,
        checked: m,
        onChange: h,
        disabled: !g
      })
    })]
  })
}